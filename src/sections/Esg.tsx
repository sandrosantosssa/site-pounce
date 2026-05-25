import { useT } from '@/i18n/LangContext';

export function Esg() {
  const t = useT().esg;
  return (
    <section id="esg" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent-light opacity-60 blur-3xl" />
      <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-primary-light opacity-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {t.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            {t.titlePre}{' '}
            <span className="text-[#28b76b]">{t.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.steps.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-[#28b76b]/40 hover:shadow-soft-lg"
            >
              <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-accent-light transition-colors group-hover:text-[#28b76b]/35">
                {s.n}
              </div>
              <h3 className="relative font-display text-xl font-bold text-primary">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
              <div className="mt-6 h-1 w-10 rounded-full bg-[#28b76b] transition-all group-hover:w-20" />
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-primary to-ink p-8 text-white shadow-soft-lg sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                {t.pellet.titlePre}{' '}
                <span className="text-[#7ce6a8]">{t.pellet.titleHighlight}</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                {t.pellet.desc}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.pellet.boxes.map((b) => (
                <div key={b.l} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                  <div className="font-display text-2xl font-extrabold text-[#7ce6a8]">{b.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{b.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impacto: bloco compacto integrado ao ESG */}
        <div id="impacto" className="mt-12">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
                {t.impacto.badge}
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
                {t.impacto.titlePre}{' '}
                <span className="text-[#28b76b]">{t.impacto.titleHighlight}</span>
              </h3>
            </div>
            <p className="max-w-md text-sm text-foreground/65">{t.impacto.desc}</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.impacto.metrics.map((m) => (
              <div
                key={m.l}
                className="rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-[#28b76b]/40 hover:bg-white hover:shadow-soft"
              >
                <div className="font-display text-3xl font-extrabold text-primary">{m.v}</div>
                <div className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#1f9555]">{m.u}</div>
                <p className="mt-2 text-xs text-foreground/65">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
