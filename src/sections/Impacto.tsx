const METRICS = [
  { value: '6.000', unit: 'ton/ano', label: 'Capacidade de reciclagem' },
  { value: '+5M', unit: 'embalagens', label: 'Recolocadas no ciclo / ano' },
  { value: '−70%', unit: 'CO₂', label: 'Emissões evitadas vs. virgem' },
  { value: '100%', unit: 'rastreado', label: 'Controle de origem do material' },
];

export function Impacto() {
  return (
    <section id="impacto" className="relative overflow-hidden bg-gradient-to-br from-ink via-primary to-ink py-24 text-white lg:py-32">
      <div className="absolute inset-0 -z-0 grid-pattern-light opacity-25" />
      <div className="absolute -left-32 top-1/2 -z-0 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[#28b76b] opacity-15 blur-3xl" />
      <div className="absolute -right-32 top-1/3 -z-0 h-[24rem] w-[24rem] rounded-full bg-[#7ce6a8] opacity-15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur">
            Impacto Real
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Reciclagem que entrega{' '}
            <span className="bg-gradient-to-r from-[#7ce6a8] to-[#28b76b] bg-clip-text text-transparent">
              números reais
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Cada tonelada reciclada significa menos extração de matéria virgem,
            menos resíduo no ambiente e mais economia circular para a sua marca.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="group rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-[#7ce6a8]/40 hover:bg-white/10"
            >
              <div className="font-display text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-br from-white to-[#7ce6a8] bg-clip-text text-transparent">
                  {m.value}
                </span>
              </div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#7ce6a8]">
                {m.unit}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{m.label}</p>
              <div className="mt-5 h-1 w-10 rounded-full bg-[#28b76b] transition-all group-hover:w-20" />
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur lg:grid-cols-3 lg:p-10">
          <div>
            <h3 className="font-display text-xl font-bold text-[#7ce6a8]">Pessoas</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Geração de trabalho qualificado na cadeia de reciclagem, com
              valorização do conhecimento técnico.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#7ce6a8]">Empresas</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Soluções de pellet reciclado que ajudam a indústria a cumprir
              metas ESG com material auditável.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#7ce6a8]">Planeta</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Redução de resíduos plásticos em aterros e oceanos, fechando o
              ciclo de forma responsável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
