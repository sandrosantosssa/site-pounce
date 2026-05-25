import { SITE } from '@/lib/utils';

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20 11.7a8 8 0 0 1-12 6.9L4 20l1.4-4A8 8 0 1 1 20 11.7zM12 5.4a6.3 6.3 0 0 0-5.3 9.7l-.8 2.4 2.4-.8a6.3 6.3 0 1 0 3.6-11.3zm3.6 8c-.2-.1-1.1-.6-1.3-.6-.2 0-.3-.1-.4.1l-.6.7c-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.6-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3l-.6-1.4c-.2-.4-.3-.3-.4-.3l-.4 0c-.1 0-.3 0-.5.2-.2.2-.6.6-.6 1.4 0 .8.6 1.7.7 1.8.1.1 1.2 1.9 3 2.6 1.7.7 1.7.5 2 .5.3 0 1.1-.4 1.2-.9.2-.4.2-.8.1-.9-.1-.1-.2-.1-.4-.2z" />
    </svg>
  );
}

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'ESG', href: '#esg' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Carreiras', href: '#carreiras' },
  { label: 'Contato', href: '#contato' },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const wa = `https://wa.me/${SITE.whatsapp}`;
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="inline-flex rounded-xl bg-white px-4 py-2.5">
              <img src="/LOGO-POUNCE.png" alt={SITE.brand} className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Reciclagem mecânica de plásticos pós-consumo, com rastreabilidade e
              desempenho técnico — gerando impacto positivo para empresas, pessoas
              e o planeta.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold">Navegação</h4>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-[#7ce6a8]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold">Contato</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#7ce6a8]">
                  <MailIcon className="h-4 w-4" /> {SITE.email}
                </a>
              </li>
              <li>
                <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#7ce6a8]">
                  <WhatsIcon className="h-4 w-4" /> {SITE.whatsappLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {year} {SITE.brand}. Todos os direitos reservados.</p>
          <p>Transformando resíduos em valor.</p>
        </div>
      </div>
    </footer>
  );
}
