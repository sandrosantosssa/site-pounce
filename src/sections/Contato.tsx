import { useState } from 'react';
import { SITE } from '@/lib/utils';
import { useT } from '@/i18n/LangContext';

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}
type Status = 'idle' | 'loading' | 'ok' | 'err';

export function Contato() {
  const t = useT().contato;
  const [status, setStatus] = useState<Status>('idle');
  const [msg, setMsg] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error('falha');
      setStatus('ok');
      setMsg(t.form.ok);
      form.reset();
    } catch {
      setStatus('err');
      setMsg(`${t.form.err} ${SITE.email}.`);
    }
  }

  return (
    <section id="contato" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
              {t.badge}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {t.titlePre}{' '}
              <span className="text-[#28b76b]">{t.titleHighlight}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">{t.description}</p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-[#28b76b]/40 hover:bg-white hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-[#28b76b] group-hover:bg-[#28b76b] group-hover:text-white">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/55">{t.emailLabel}</div>
                  <div className="text-sm font-semibold text-primary">{SITE.email}</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">{t.form.name}</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:ring-4"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">{t.form.company}</span>
                <input
                  name="company"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:ring-4"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">{t.form.email}</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:ring-4"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block font-semibold text-foreground/80">{t.form.phone}</span>
                <input
                  name="phone"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:ring-4"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-semibold text-foreground/80">{t.form.messageLabel}</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={t.form.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 outline-none ring-[#28b76b]/30 transition-all focus:border-[#28b76b] focus:ring-4"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#28b76b] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#1f9555] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? t.form.sending : t.form.submit}
            </button>

            {msg && (
              <p
                className={
                  'mt-4 text-sm ' +
                  (status === 'ok' ? 'text-[#1f9555]' : status === 'err' ? 'text-red-600' : 'text-foreground/70')
                }
              >
                {msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
