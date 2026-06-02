import { useT } from '@/i18n/LangContext';

export function MVV() {
  const t = useT().mvv;
  return (
    <section className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
            <div className="inline-flex items-center justify-center rounded-2xl bg-accent-light p-3 text-[#28b76b]">
              {/* Alvo com flecha apontada — propósito objetivo */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <line x1="22" y1="2" x2="13" y2="11" />
                <polyline points="22 8 22 2 16 2" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">{t.missao.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">{t.missao.desc}</p>
          </article>

          <article className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary-light p-3 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">{t.visao.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">{t.visao.desc}</p>
          </article>

          <article className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
            <div className="inline-flex items-center justify-center rounded-2xl bg-accent-light p-3 text-[#28b76b]">
              {/* Diamante — valores como pilar, clareza e brilho */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M6 3h12l4 6-10 12L2 9z" />
                <path d="M11 3 8 9l4 12 4-12-3-6" />
                <path d="M2 9h20" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">{t.valores.title}</h3>
            <ul className="mt-4 space-y-2">
              {t.valores.items.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm text-foreground/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#28b76b]" />
                  {v}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
