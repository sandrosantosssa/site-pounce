function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.5c1 1.5 2 4.6 2 8.5a10 10 0 0 1-10 9z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
              <LeafIcon className="h-3.5 w-3.5" /> Sobre a Pounce
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Indústria de reciclagem com{' '}
              <span className="text-[#28b76b]">propósito ambiental</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/75">
              A Pounce é uma recicladora dedicada à transformação de plásticos
              pós-consumo em matéria-prima de alto desempenho. Atuamos com
              rastreabilidade, controle técnico e foco em soluções que reduzem
              o impacto ambiental das embalagens.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Nascemos para fechar o ciclo do plástico — devolvendo à indústria
              um insumo confiável, sustentável e auditável.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-[#28b76b]">
                  <LeafIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">Propósito</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Transformar resíduos em valor real — para a indústria, para
                  as pessoas e para o planeta.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">Tradição</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Mais de uma década de experiência no setor industrial, com
                  evolução constante em tecnologia e processos.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-[#28b76b]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="m9 12 2 2 4-4" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">Rastreabilidade</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Controle ponta-a-ponta — do resíduo recebido ao pellet entregue
                  ao cliente, com documentação técnica.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">Desempenho</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Matéria-prima reciclada com performance comprovada para
                  aplicações industriais exigentes.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
