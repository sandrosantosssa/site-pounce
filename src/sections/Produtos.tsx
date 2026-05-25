import { useT } from '@/i18n/LangContext';

const COLORS = [
  'from-[#28b76b] to-[#1f9555]', // PCR PE — verde claro
  'from-[#1f9555] to-[#0e6b3d]', // PCR PP — verde escuro
  'from-[#184d63] to-[#0e3344]', // PIR PE — azul petróleo
  'from-[#0d0d55] to-[#15155f]', // PIR PP — azul profundo
  'from-[#28b76b] to-[#184d63]', // FLK — verde→azul
  'from-[#7ce6a8] to-[#28b76b]', // CUSTOM — gradient verde-claro
];

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function Produtos() {
  const t = useT().produtos;
  return (
    <section id="produtos" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
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
          {t.items.map((p, i) => (
            <article
              key={p.sigla}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white`}>
                    {p.sigla}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-primary">{p.nome}</h3>
                </div>
                <span className="rounded-full bg-accent-light px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1f9555]">
                  {t.available}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.desc}</p>

              <div className="mt-5 space-y-2">
                {p.aplicacoes.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-foreground/75">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-light text-[#1f9555]">
                      <ChevronRight className="h-3 w-3" />
                    </span>
                    {a}
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1f9555] transition-all hover:gap-3 hover:text-[#28b76b]"
              >
                {t.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-foreground/55">{t.footnote}</p>
      </div>
    </section>
  );
}
