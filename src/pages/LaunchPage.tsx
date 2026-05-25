import { useRef, useState } from 'react';
import { Countdown } from '@/components/Countdown';
import { SITE } from '@/lib/utils';

/** Ícones de áudio inline (independente da versão do lucide). */
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

export default function LaunchPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // garante que continua tocando ao ligar o som
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      {/* Vídeo de fundo em tela cheia (loop) */}
      {SITE.launchVideo ? (
        <video
          ref={videoRef}
          src={SITE.launchVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="animate-gradient absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(125deg, #0d0d55 0%, #15155f 25%, #184d63 55%, #1f9555 85%, #28b76b 100%)',
          }}
        />
      )}

      {/* Overlay mais suave (vídeo aparece bem; escurece embaixo p/ leitura) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/45 via-transparent to-ink/70" />
      {/* Brilhos sutis da marca */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl" />

      {/* Conteúdo centralizado */}
      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8">
        {/* Logo com destaque */}
        <div className="relative animate-float">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#28b76b]/35 opacity-70 blur-2xl" />
          <span className="relative inline-flex items-center justify-center rounded-[1.75rem] bg-white px-8 py-5 shadow-soft-lg ring-1 ring-[#28b76b]/30">
            <img src="/LOGO-POUNCE.png" alt={SITE.brand} className="h-16 w-auto sm:h-20" />
          </span>
          <span className="absolute -bottom-2 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-[#28b76b]/80 blur-[1px]" />
        </div>

        {/* Badge "Em breve" */}
        <span className="mt-10 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
          Em breve
        </span>

        {/* Frase principal */}
        <h1
          className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ textShadow: '0 2px 30px rgb(0 0 0 / 0.45)' }}
        >
          Transformando
          <br />
          <span className="bg-gradient-to-r from-[#28b76b] to-white bg-clip-text text-transparent">
            resíduos em valor
          </span>
          .
        </h1>

        <p
          className="mt-5 max-w-xl font-serif text-base italic text-white/90 sm:text-lg"
          style={{ textShadow: '0 1px 18px rgb(0 0 0 / 0.55)' }}
        >
          Soluções avançadas em reciclagem mecânica de plásticos. Unimos
          rastreabilidade, alto desempenho técnico e compromisso ambiental
          para sermos o parceiro ideal das empresas que buscam fechar o
          ciclo do plástico.
        </p>

        {/* Cronômetro */}
        <div className="mt-12 w-full max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80">
            Lançamento em
          </p>
          <Countdown target={SITE.launchDate} />
        </div>
      </main>

      {/* Botão de som (flutuante, canto inferior direito) */}
      {SITE.launchVideo && (
        <button
          onClick={toggleAudio}
          aria-label={muted ? 'Ligar som' : 'Mutar'}
          title={muted ? 'Ligar som' : 'Mutar'}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white shadow-soft-lg backdrop-blur-md transition-all hover:bg-black/55"
        >
          {muted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5 text-[#28b76b]" />}
          <span className="hidden sm:inline">{muted ? 'Ligar som' : 'Som ligado'}</span>
        </button>
      )}
    </div>
  );
}
