import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import formidable from 'formidable';
import { readFile, unlink } from 'node:fs/promises';

const RESEND_KEY = process.env.RESEND_API_KEY;
const RH_TO = process.env.RH_TO || 'rh@pounce.com.br';
const RH_FROM = process.env.CONTACT_FROM || 'Pounce <no-reply@pounce.com.br>';

const MAX_BYTES = 5 * 1024 * 1024; // 5MB

const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

// O parser padrão do Vercel não trata multipart/form-data — usamos formidable
// sobre o stream bruto da requisição.
export const config = {
  api: { bodyParser: false },
};

function firstStr(v: string | string[] | undefined): string {
  if (Array.isArray(v)) return v[0] ?? '';
  return v ?? '';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  let tmpPath: string | null = null;

  try {
    const form = formidable({
      maxFileSize: MAX_BYTES,
      maxFiles: 1,
      multiples: false,
      keepExtensions: true,
    });

    const [fields, files] = await form.parse(req);

    const name = firstStr(fields.name).trim();
    const email = firstStr(fields.email).trim();
    const phone = firstStr(fields.phone).trim();
    const position = firstStr(fields.position).trim();
    const city = firstStr(fields.city).trim();
    const message = firstStr(fields.message).trim();

    if (!name || !email || !position) {
      return res.status(400).json({ error: 'invalid_payload' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'invalid_email' });
    }

    const fArr = files.cv;
    const cvFile = Array.isArray(fArr) ? fArr[0] : (fArr as formidable.File | undefined);
    if (!cvFile) {
      return res.status(400).json({ error: 'no_file' });
    }
    tmpPath = cvFile.filepath;
    if (cvFile.size > MAX_BYTES) {
      return res.status(413).json({ error: 'file_too_large' });
    }
    const mime = cvFile.mimetype || '';
    const filename = cvFile.originalFilename || 'curriculo.pdf';
    if (!mime.includes('pdf') && !/\.pdf$/i.test(filename)) {
      return res.status(415).json({ error: 'pdf_only' });
    }

    const buf = await readFile(cvFile.filepath);

    if (!resend) {
      // Desenvolvimento / sem RESEND_API_KEY configurado: aceitamos
      // (não derrubamos a UX), mas avisamos no log.
      console.warn('[jobs] RESEND_API_KEY ausente — candidatura recebida sem envio de e-mail.');
      return res.status(200).json({ ok: true, sent: false });
    }

    await resend.emails.send({
      from: RH_FROM,
      to: RH_TO,
      replyTo: email,
      subject: `Currículo recebido — ${name} (${position})`,
      text: [
        `Nome: ${name}`,
        `Cargo desejado: ${position}`,
        `E-mail: ${email}`,
        phone ? `Telefone: ${phone}` : null,
        city ? `Cidade/UF: ${city}` : null,
        '',
        message ? 'Mensagem:' : null,
        message || null,
      ]
        .filter(Boolean)
        .join('\n'),
      attachments: [
        {
          filename: filename.endsWith('.pdf') ? filename : `${filename}.pdf`,
          content: buf,
        },
      ],
    });

    return res.status(200).json({ ok: true, sent: true });
  } catch (e: any) {
    // formidable usa códigos numéricos para erros de tamanho
    if (e && (e.httpCode === 413 || /maxFileSize/i.test(String(e?.message)))) {
      return res.status(413).json({ error: 'file_too_large' });
    }
    console.error('[jobs] erro:', e);
    return res.status(500).json({ error: 'internal_error' });
  } finally {
    if (tmpPath) {
      try {
        await unlink(tmpPath);
      } catch {
        /* arquivo já removido — ok */
      }
    }
  }
}
