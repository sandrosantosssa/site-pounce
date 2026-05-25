const VALORES = [
  'Ética e transparência',
  'Sustentabilidade como prática',
  'Inovação técnica',
  'Compromisso com o cliente',
  'Respeito às pessoas',
  'Responsabilidade ambiental',
];

export function MVV() {
  return (
    <section className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
            <div className="inline-flex items-center justify-center rounded-2xl bg-accent-light p-3 text-[#28b76b]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">Missão</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Transformar resíduos plásticos em valor — entregando à indústria
              matéria-prima reciclada de alta qualidade, com rastreabilidade e
              propósito ambiental.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary-light p-3 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">Visão</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Ser referência em reciclagem mecânica de plásticos pós-consumo no
              Brasil — reconhecida pela excelência técnica e pela contribuição
              real para a economia circular.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
            <div className="inline-flex items-center justify-center rounded-2xl bg-accent-light p-3 text-[#28b76b]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">Valores</h3>
            <ul className="mt-4 space-y-2">
              {VALORES.map((v) => (
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
