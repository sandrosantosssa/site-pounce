import { useT, useLang } from '@/i18n/LangContext';

/**
 * URLs, datas e imagens das notícias do Abiplast — independentes do idioma.
 * Mantemos a ordem alinhada com dict.pt.noticias.items / dict.en.noticias.items.
 * As imagens vêm diretamente da CDN da Abiplast com referrerPolicy="no-referrer"
 * e crédito visível em cada card.
 */
const META = [
  {
    date: '2026-05-25',
    url: 'https://www.abiplast.org.br/noticias/dia-da-industria-tecnologia-e-inovacao-transformam-o-setor-plastico-brasileiro/',
    img: 'https://www.abiplast.org.br/wp-content/uploads/2026/05/capa-materiaeventos-34-300x200.png',
  },
  {
    date: '2026-05-17',
    url: 'https://www.abiplast.org.br/noticias/dia-da-reciclagem-plastico-reciclado-ganha-espaco-em-diferentes-setores-da-economia/',
    img: 'https://www.abiplast.org.br/wp-content/uploads/2026/05/capa-materiaeventos-33-300x200.png',
  },
  {
    date: '2026-05-22',
    url: 'https://www.abiplast.org.br/noticias/grunflex-conquista-reconhecimento-internacional-no-worldstar-packaging-awards-2026-com-embalagem-sustentavel/',
    img: 'https://www.abiplast.org.br/wp-content/uploads/2026/05/WhatsApp-Image-2026-03-16-at-17.55.05-300x200.jpeg',
  },
  {
    date: '2026-05-12',
    url: 'https://www.abiplast.org.br/noticias/termotecnica-recebe-o-worldstar-awards-2026-maior-premiacao-global-de-embalagens/',
    img: 'https://www.abiplast.org.br/wp-content/uploads/2026/05/capa-materiaeventos-29-300x200.png',
  },
  {
    date: '2026-04-30',
    url: 'https://www.abiplast.org.br/noticias/movimento-plastico-transforma-inaugura-espaco-sobre-reciclagem-de-plastico-no-sesi-lab-em-brasilia/',
    img: 'https://www.abiplast.org.br/wp-content/uploads/2026/04/capa-materiaeventos-27-300x200.png',
  },
  {
    date: '2026-04-29',
    url: 'https://www.abiplast.org.br/noticias/reciclagem-que-gera-valor-para-o-pais/',
    img: 'https://www.abiplast.org.br/wp-content/uploads/2026/04/capa-materiaeventos-26-300x200.png',
  },
];

function formatDate(iso: string, lang: 'pt' | 'en'): string {
  const d = new Date(iso + 'T12:00:00');
  if (lang === 'pt') {
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function Noticias() {
  const t = useT().noticias;
  const { lang } = useLang();

  return (
    <section id="noticias" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {t.badge}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">{t.description}</p>
          </div>
          <a
            href="https://www.abiplast.org.br/noticias/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
          >
            {t.ctaAll}
            <ExternalIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((n, i) => {
            const meta = META[i];
            if (!meta) return null;
            return (
              <a
                key={meta.url}
                href={meta.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-[#28b76b]/40 hover:bg-white hover:shadow-soft-lg"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary via-[#184d63] to-ink">
                  {/* Imagem original da Abiplast (com fallback gradiente caso bloqueie hotlink) */}
                  <img
                    src={meta.img}
                    alt={n.titulo}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Esconde a img quebrada e mantém o gradiente de fundo + selo ABIPLAST
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const ph = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (ph) ph.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center">
                    <span className="font-display text-5xl font-extrabold text-white/15">ABIPLAST</span>
                  </div>
                  {/* Overlay escuro para legibilidade das tags sobre fotos claras */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/40" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-[#28b76b] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {n.tag}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    <ExternalIcon className="h-3 w-3" /> Abiplast
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                    {formatDate(meta.date, lang)}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-primary transition-colors group-hover:text-[#28b76b]">
                    {n.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">{n.resumo}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1f9555] transition-all group-hover:gap-3">
                    {t.readLink}
                    <ExternalIcon className="h-4 w-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-foreground/55">
          {t.attribution}{' '}
          <a href="https://www.abiplast.org.br/" target="_blank" rel="noreferrer" className="font-semibold text-[#1f9555] hover:text-[#28b76b]">
            {t.source}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
