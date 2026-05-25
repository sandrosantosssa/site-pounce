const PRODUTOS = [
  {
    nome: 'Pellet PE Reciclado',
    sigla: 'PE-R',
    desc: 'Polietileno reciclado em pellet uniforme, com cor padronizada e fluidez controlada — pronto para extrusão e injeção.',
    aplicacoes: ['Filmes técnicos', 'Sacolas industriais', 'Tubos não-potáveis'],
    cor: 'from-[#28b76b] to-[#1f9555]',
  },
  {
    nome: 'Pellet PP Reciclado',
    sigla: 'PP-R',
    desc: 'Polipropileno reciclado com performance consistente para aplicações que exigem rigidez e resistência térmica.',
    aplicacoes: ['Caixas técnicas', 'Componentes industriais', 'Mobiliário urbano'],
    cor: 'from-[#184d63] to-[#0e3344]',
  },
  {
    nome: 'Flakes Lavados',
    sigla: 'FLK',
    desc: 'Material moído e lavado, pronto para reprocessamento. Indicado para indústrias com extrusora própria.',
    aplicacoes: ['Reprocessamento próprio', 'Composição de masterbatch', 'Misturas técnicas'],
    cor: 'from-[#28b76b] to-[#184d63]',
  },
  {
    nome: 'Compostos sob medida',
    sigla: 'CUSTOM',
    desc: 'Formulações customizadas por projeto — combinação de polímeros, cor e desempenho de acordo com a sua aplicação.',
    aplicacoes: ['Projeto técnico', 'Volume contratado', 'Laudo dedicado'],
    cor: 'from-[#0d0d55] to-[#15155f]',
  },
];

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function Produtos() {
  return (
    <section id="produtos" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
            Produtos
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Matéria-prima reciclada{' '}
            <span className="text-[#28b76b]">com performance</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
            Linha de produtos desenhada para a indústria. Cada lote acompanha
            ficha técnica e laudo — previsibilidade do recebimento ao
            processamento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PRODUTOS.map((p) => (
            <article
              key={p.sigla}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${p.cor} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white`}>
                    {p.sigla}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-primary">{p.nome}</h3>
                </div>
                <span className="rounded-full bg-accent-light px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1f9555]">
                  Disponível
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
                Solicitar ficha técnica
                <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-foreground/55">
          * Imagens, fotos de produto e fichas técnicas detalhadas em
          atualização — solicite informações pelo formulário de contato.
        </p>
      </div>
    </section>
  );
}
