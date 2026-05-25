import { useEffect, useState } from 'react';
import { cn, SITE } from '@/lib/utils';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'ESG', href: '#esg' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Carreiras', href: '#carreiras' },
  { label: 'Contato', href: '#contato' },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-white/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <img
            src="/LOGO-POUNCE.png"
            alt={SITE.brand}
            className={cn('h-10 w-auto transition-all', scrolled ? 'h-9' : 'h-11')}
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled ? 'text-foreground/85 hover:text-primary' : 'text-white/90 hover:text-white'
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-[#28b76b] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#1f9555]"
          >
            Fale conosco
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={cn('flex h-10 w-10 items-center justify-center rounded-lg lg:hidden', scrolled ? 'text-foreground' : 'text-white')}
          aria-label="Menu"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-surface"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#28b76b] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
