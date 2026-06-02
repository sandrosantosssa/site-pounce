import { useState } from 'react';
import { useT } from '@/i18n/LangContext';
import { getFotosProduto } from '@/lib/produtos-fotos';

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((p, i) => (
            <ProdutoCard
              key={p.sigla}
              sigla={p.sigla}
              nome={p.nome}
              desc={p.desc}
              aplicacoes={[...p.aplicacoes]}
              gradient={COLORS[i % COLORS.length]}
              availableLabel={t.available}
              ctaLabel={t.cta}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-foreground/55">{t.footnote}</p>
      </div>
    </section>
  );
}

function ProdutoCard({
  sigla,
  nome,
  desc,
  aplicacoes,
  gradient,
  availableLabel,
  ctaLabel,
}: {
  sigla: string;
  nome: string;
  desc: string;
  aplicacoes: string[];
  gradient: string;
  availableLabel: string;
  ctaLabel: string;
}) {
  const fotos = getFotosProduto(sigla);
  const isCustom = sigla === 'CUSTOM';
  const [fotoAtiva, setFotoAtiva] = useState(0);
  const temFotos = fotos.length > 0 && !isCustom;
  const temGaleria = temFotos && fotos.length > 1;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
      {/* Topo: foto, galeria ou mosaico (CUSTOM) */}
      {isCustom ? (
        <MosaicoCustom fotos={fotos} />
      ) : temFotos ? (
        <GaleriaProduto fotos={fotos} ativa={fotoAtiva} onSelecionar={setFotoAtiva} />
      ) : (
        <div className={`h-56 w-full bg-gradient-to-br ${gradient}`} />
      )}

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className={`inline-flex rounded-xl bg-gradient-to-br ${gradient} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white`}>
              {sigla}
            </div>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-primary">{nome}</h3>
          </div>
          <span className="rounded-full bg-accent-light px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1f9555]">
            {availableLabel}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{desc}</p>

        <div className="mt-5 space-y-2">
          {aplicacoes.map((a) => (
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
          className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#1f9555] transition-all hover:gap-3 hover:text-[#28b76b]"
        >
          {ctaLabel}
          <ChevronRight className="h-4 w-4" />
        </a>

        {temGaleria && (
          <p className="mt-3 text-[11px] italic text-foreground/55">
            Disponível em diversas cores — clique nas miniaturas para visualizar.
          </p>
        )}
      </div>
    </article>
  );
}

/** Foto principal grande + miniaturas embaixo (estilo catálogo). */
function GaleriaProduto({
  fotos,
  ativa,
  onSelecionar,
}: {
  fotos: { src: string; legenda: string }[];
  ativa: number;
  onSelecionar: (i: number) => void;
}) {
  const principal = fotos[ativa] ?? fotos[0];
  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        <img
          src={principal.src}
          alt={principal.legenda}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {fotos.length > 1 && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-soft backdrop-blur">
            {principal.legenda}
          </span>
        )}
      </div>

      {fotos.length > 1 && (
        <div className="flex gap-2 border-b border-border bg-surface p-3">
          {fotos.map((f, i) => (
            <button
              key={f.src}
              type="button"
              onClick={() => onSelecionar(i)}
              aria-label={`Ver ${f.legenda}`}
              aria-pressed={i === ativa}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === ativa
                  ? 'border-[#28b76b] shadow-soft'
                  : 'border-transparent opacity-75 hover:opacity-100'
              }`}
            >
              <img src={f.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Mosaico 2×2 pra produto CUSTOM, sugerindo "composição sob medida". */
function MosaicoCustom({ fotos }: { fotos: { src: string; legenda: string }[] }) {
  const quatro = fotos.slice(0, 4);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
      <div className="grid h-full w-full grid-cols-2 gap-0.5">
        {quatro.map((f) => (
          <div key={f.src} className="relative overflow-hidden">
            <img
              src={f.src}
              alt={f.legenda}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7ce6a8]/20 via-transparent to-[#28b76b]/30" />
      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-soft backdrop-blur">
        Combinações sob medida
      </div>
    </div>
  );
}
