import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/utils';

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </svg>
  );
}
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    if (!muted) v.play().catch(() => setMuted(true));
  }, [muted]);

  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      <video
        ref={videoRef}
        src={SITE.launchVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/85" />
      <div className="absolute inset-0 -z-10 grid-pattern-light opacity-30" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7ce6a8]" />
            Recicladora de Plásticos Pós-consumo
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Transformando{' '}
            <span className="bg-gradient-to-r from-[#7ce6a8] via-[#28b76b] to-[#7ce6a8] bg-clip-text text-transparent animate-gradient">
              resíduos
            </span>{' '}
            em valor.
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-white/85 sm:text-xl">
            Reciclagem mecânica de plásticos com rastreabilidade, desempenho técnico e
            propósito ambiental — para empresas que querem fechar o ciclo do plástico.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-[#28b76b] px-7 py-3.5 text-sm font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-[#1f9555]"
            >
              Falar com o time
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#reciclagem"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
            >
              Como reciclamos
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 text-white">
            <div>
              <div className="font-display text-3xl font-extrabold text-[#7ce6a8]">6 mil</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/70">ton/ano de capacidade</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-[#7ce6a8]">+5M</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/70">embalagens/ano</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-[#7ce6a8]">100%</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/70">rastreabilidade</div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-all hover:bg-black/55"
        aria-label={muted ? 'Ativar som' : 'Desativar som'}
      >
        {muted ? <VolumeOffIcon className="h-4 w-4" /> : <VolumeOnIcon className="h-4 w-4" />}
        {muted ? 'Som' : 'Mudo'}
      </button>
    </section>
  );
}
