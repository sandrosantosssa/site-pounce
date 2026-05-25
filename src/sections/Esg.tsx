const STEPS = [
  {
    n: '01',
    title: 'Coleta & Recebimento',
    desc: 'Plásticos pós-consumo são recebidos com inspeção, identificação e classificação por tipo de polímero.',
  },
  {
    n: '02',
    title: 'Triagem & Separação',
    desc: 'Separação manual e técnica para garantir lotes homogêneos e livres de contaminantes.',
  },
  {
    n: '03',
    title: 'Moagem',
    desc: 'O material passa por moinhos industriais, sendo reduzido a flakes — a base do processo de reciclagem mecânica.',
  },
  {
    n: '04',
    title: 'Lavagem',
    desc: 'Etapa essencial de remoção de impurezas, rótulos e resíduos orgânicos, com controle de água e efluentes.',
  },
  {
    n: '05',
    title: 'Extrusão & Pelletização',
    desc: 'Os flakes são fundidos e transformados em pellets uniformes — matéria-prima pronta para nova aplicação.',
  },
  {
    n: '06',
    title: 'Controle de Qualidade',
    desc: 'Testes técnicos garantem o desempenho do pellet reciclado para uso na indústria de embalagens e produtos.',
  },
];

export function Esg() {
  return (
    <section id="esg" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent-light opacity-60 blur-3xl" />
      <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-primary-light opacity-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            ESG · Reciclagem Mecânica
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Do resíduo ao pellet:{' '}
            <span className="text-[#28b76b]">processo completo</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
            Nossa atuação ESG na prática: operação industrial estruturada em
            seis etapas, com tecnologia e controle técnico para devolver à
            indústria um insumo confiável e sustentável.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
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
                Pellet reciclado com{' '}
                <span className="text-[#7ce6a8]">desempenho industrial</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Trabalhamos com PE, PP e outros polímeros pós-consumo. Cada lote
                é entregue com ficha técnica e laudo, garantindo previsibilidade
                e estabilidade no seu processo produtivo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="font-display text-2xl font-extrabold text-[#7ce6a8]">PE / PP</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">Polímeros processados</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="font-display text-2xl font-extrabold text-[#7ce6a8]">Laudo</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">Ficha técnica por lote</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="font-display text-2xl font-extrabold text-[#7ce6a8]">Pós-consumo</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">Origem rastreada</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="font-display text-2xl font-extrabold text-[#7ce6a8]">B2B</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">Indústria & embalagens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
