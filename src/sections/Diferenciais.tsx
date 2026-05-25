const DIFS = [
  {
    title: 'Visão sistêmica',
    desc: 'Olhamos toda a cadeia — da coleta ao pellet — para entregar uma solução que faça sentido técnico e comercial.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Atuação estratégica',
    desc: 'Cada operação é planejada para entregar volume, qualidade e rastreabilidade — alinhada às metas ESG do cliente.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Tecnologia + Processo',
    desc: 'Equipamentos industriais, controle de qualidade e processos auditáveis em todas as etapas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="12" rx="2" /><line x1="8" y1="20" x2="16" y2="20" /><line x1="12" y1="16" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Compromisso ambiental',
    desc: 'Sustentabilidade como prática diária — gestão de água, efluentes e resíduos no padrão da boa indústria.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.5c1 1.5 2 4.6 2 8.5a10 10 0 0 1-10 9z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
  },
  {
    title: 'Parceria de longo prazo',
    desc: 'Relacionamento próximo, suporte técnico contínuo e previsibilidade de fornecimento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M4 21v-2a4 4 0 0 1 3-3.87" />
        <circle cx="9" cy="7" r="4" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Transparência total',
    desc: 'Documentação técnica, indicadores claros e rastreabilidade ponta-a-ponta para você comunicar com confiança.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="14" y2="17" />
      </svg>
    ),
  },
];

export function Diferenciais() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Por que a Pounce
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Nossos diferenciais
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">
            O que torna a Pounce uma parceira sólida para indústrias que precisam
            de matéria-prima reciclada com previsibilidade e responsabilidade.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFS.map((d) => (
            <article
              key={d.title}
              className="group rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-[#28b76b]/40 hover:bg-white hover:shadow-soft-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-[#28b76b] transition-all group-hover:scale-110 group-hover:bg-[#28b76b] group-hover:text-white">
                {d.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
