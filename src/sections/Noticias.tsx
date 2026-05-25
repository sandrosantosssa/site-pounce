const NOTICIAS = [
  {
    tag: 'Operação',
    titulo: 'Reciclando histórias, transformando futuros',
    resumo: 'Em breve compartilharemos os marcos da nossa operação industrial e os bastidores da transformação do plástico pós-consumo.',
    data: 'Em breve',
  },
  {
    tag: 'Sustentabilidade',
    titulo: 'Indicadores ESG da Pounce',
    resumo: 'Vamos publicar regularmente os números do nosso impacto ambiental: toneladas recicladas, CO₂ evitado e embalagens recolocadas no ciclo.',
    data: 'Em breve',
  },
  {
    tag: 'Parcerias',
    titulo: 'Cases com a indústria',
    resumo: 'Histórias de empresas que estão fechando o ciclo do plástico com a Pounce — resultados técnicos e ambientais reais.',
    data: 'Em breve',
  },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Noticias() {
  return (
    <section id="noticias" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              Notícias
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Novidades da Pounce
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              Acompanhe os bastidores da operação, indicadores de impacto e
              parcerias com a indústria. Conteúdo em breve.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NOTICIAS.map((n) => (
            <article
              key={n.titulo}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-[#28b76b]/40 hover:bg-white hover:shadow-soft-lg"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary via-[#184d63] to-ink">
                <div className="absolute inset-0 grid-pattern-light opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-extrabold text-white/15">
                    POUNCE
                  </span>
                </div>
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-[#28b76b] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {n.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  {n.data}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">
                  {n.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
                  {n.resumo}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/40">
                  Em breve
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-6 text-center">
          <p className="text-sm text-foreground/70">
            Em breve, conteúdo periódico sobre operação, ESG, parcerias e
            inovação na reciclagem.{' '}
            <a href="#contato" className="font-semibold text-[#1f9555] hover:text-[#28b76b]">
              Receba avisos por e-mail
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
