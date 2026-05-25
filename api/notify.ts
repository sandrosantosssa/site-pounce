// ============================================================
// Site Pounce — Captura de lead "Me avise quando lançar"
// POST /api/notify  body: { email }
// Grava no Supabase (se configurado) e envia e-mail para CONTACT_TO (Resend).
//
// Env vars (Vercel):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY  (opcional)
//   RESEND_API_KEY, EMAIL_FROM, CONTACT_TO
// ============================================================

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? '';
const EMAIL_FROM = process.env.EMAIL_FROM ?? 'Pounce <onboarding@resend.dev>';
const CONTACT_TO = process.env.CONTACT_TO ?? '';

const admin =
  SUPABASE_URL && SERVICE_ROLE
    ? createClient(SUPABASE_URL, SERVICE_ROLE, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = (req.body ?? {}) as { email?: string };
  const e = (email ?? '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }

  // Grava no Supabase (se configurado) — table "leads"
  if (admin) {
    await admin.from('leads').insert({ email: e, origem: 'launch' }).then(() => null);
  }

  // Envia e-mail de notificação interna (best-effort)
  if (CONTACT_TO && RESEND_API_KEY) {
    try {
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: EMAIL_FROM,
        to: CONTACT_TO,
        replyTo: e,
        subject: `Novo interessado no site Pounce — ${e}`,
        html: `<div style="font-family:Arial,sans-serif;color:#14191a;">
          <h2 style="margin:0 0 8px;color:#184D63;">Novo lead — landing de lançamento</h2>
          <p><strong>E-mail:</strong> ${e}</p>
          <p style="color:#5b6a6b;font-size:12px;">Pediu para ser avisado quando o site for lançado.</p>
        </div>`,
      });
    } catch {
      /* best-effort */
    }
  }

  return res.status(200).json({ ok: true });
}
