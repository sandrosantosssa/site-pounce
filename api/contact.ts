import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || 'comercial@pounce.com.br';
const CONTACT_FROM = process.env.CONTACT_FROM || 'Pounce <no-reply@pounce.com.br>';

const supabase =
  SUPABASE_URL && SUPABASE_KEY ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;
const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

function isEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) || {};
    const name = String(body.name || '').trim();
    const company = String(body.company || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !isEmail(email) || !message) {
      return res.status(400).json({ error: 'invalid_payload' });
    }

    // Persistência (opcional)
    if (supabase) {
      try {
        await supabase.from('contact_messages').insert({
          name,
          company: company || null,
          email,
          phone: phone || null,
          message,
        });
      } catch (e) {
        console.warn('[contact] supabase insert falhou:', e);
      }
    }

    // E-mail (opcional)
    if (resend) {
      try {
        await resend.emails.send({
          from: CONTACT_FROM,
          to: CONTACT_TO,
          replyTo: email,
          subject: `Novo contato pelo site — ${name}${company ? ' / ' + company : ''}`,
          text: [
            `Nome: ${name}`,
            company ? `Empresa: ${company}` : null,
            `E-mail: ${email}`,
            phone ? `Telefone: ${phone}` : null,
            '',
            'Mensagem:',
            message,
          ]
            .filter(Boolean)
            .join('\n'),
        });
      } catch (e) {
        console.warn('[contact] resend send falhou:', e);
      }
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[contact] erro:', e);
    return res.status(500).json({ error: 'internal_error' });
  }
}
