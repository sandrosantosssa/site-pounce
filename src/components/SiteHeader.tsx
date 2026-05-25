import { useEffect, useRef, useState } from 'react';
import { cn, SITE } from '@/lib/utils';
import { useT } from '@/i18n/LangContext';
import { LanguageSwitch } from '@/components/LanguageSwitch';

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
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function SiteHeader() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 180);
  }
  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }

  const onClientPortal = () => window.alert(t.nav.clientPortalAlert);

  const NAV = [
    { label: t.nav.home, href: '#inicio' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.esg, href: '#esg' },
    { label: t.nav.products, href: '#produtos' },
    { label: t.nav.news, href: '#noticias' },
    {
      label: t.nav.contact,
      href: '#contato',
      children: [
        { label: t.nav.contactUs, href: '#contato', desc: t.nav.contactUsDesc },
        { label: t.nav.workWithUs, href: '#carreiras', desc: t.nav.workWithUsDesc },
        {
          label: t.nav.clientPortal,
          href: '#',
          desc: t.nav.clientPortalAlert,
          badge: t.nav.clientPortalBadge,
          onClick: onClientPortal,
        },
      ],
    },
  ] as const;

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

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV.map((n) => {
            const linkBase = cn(
              'inline-flex items-center gap-1 text-sm font-medium transition-colors',
              scrolled ? 'text-foreground/85 hover:text-primary' : 'text-white/90 hover:text-white'
            );
            const hasChildren = 'children' in n && Array.isArray(n.children);
            if (!hasChildren) {
              return (
                <a key={n.href} href={n.href} className={linkBase}>
                  {n.label}
                </a>
              );
            }
            const isOpen = openDropdown === n.label;
            return (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenDropdown(n.label);
                }}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(isOpen ? null : n.label)}
                  className={linkBase}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                >
                  {n.label}
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', isOpen && 'rotate-180')} />
                </button>
                {isOpen && (
                  <div
                    className="absolute right-0 top-full pt-3"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="w-80 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-soft-lg">
                      {n.children!.map((c) => {
                        const hasOnClick = 'onClick' in c && typeof c.onClick === 'function';
                        const hasBadge = 'badge' in c && c.badge;
                        const inner = (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-primary">{c.label}</span>
                              {hasBadge && (
                                <span className="rounded-full bg-accent-light px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1f9555]">
                                  {(c as { badge: string }).badge}
                                </span>
                              )}
                            </div>
                            {c.desc && (
                              <div className="mt-0.5 text-xs text-foreground/60">{c.desc}</div>
                            )}
                          </>
                        );
                        if (hasOnClick) {
                          return (
                            <button
                              key={c.label}
                              type="button"
                              onClick={() => {
                                setOpenDropdown(null);
                                (c as { onClick: () => void }).onClick();
                              }}
                              className="block w-full rounded-xl px-4 py-3 text-left transition-all hover:bg-accent-light/50"
                            >
                              {inner}
                            </button>
                          );
                        }
                        return (
                          <a
                            key={c.href + c.label}
                            href={c.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block rounded-xl px-4 py-3 transition-all hover:bg-accent-light/50"
                          >
                            {inner}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch tone={scrolled ? 'dark' : 'light'} />
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-[#28b76b] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#1f9555]"
          >
            {t.nav.ctaContact}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch tone={scrolled || open ? 'dark' : 'light'} />
          <button
            onClick={() => setOpen((o) => !o)}
            className={cn('flex h-10 w-10 items-center justify-center rounded-lg', scrolled || open ? 'text-foreground' : 'text-white')}
            aria-label={t.nav.menuAria}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <div key={n.label}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/90 hover:bg-surface"
                >
                  {n.label}
                </a>
                {'children' in n && n.children && (
                  <div className="ml-3 mt-1 mb-2 space-y-1 border-l-2 border-accent-light pl-3">
                    {n.children.map((c) => {
                      const hasOnClick = 'onClick' in c && typeof c.onClick === 'function';
                      const hasBadge = 'badge' in c && c.badge;
                      const labelBlock = (
                        <span className="inline-flex items-center gap-2">
                          {c.label}
                          {hasBadge && (
                            <span className="rounded-full bg-accent-light px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1f9555]">
                              {(c as { badge: string }).badge}
                            </span>
                          )}
                        </span>
                      );
                      if (hasOnClick) {
                        return (
                          <button
                            key={c.label}
                            type="button"
                            onClick={() => {
                              setOpen(false);
                              (c as { onClick: () => void }).onClick();
                            }}
                            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-foreground/75 hover:bg-surface hover:text-primary"
                          >
                            {labelBlock}
                          </button>
                        );
                      }
                      return (
                        <a
                          key={c.href + c.label}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-foreground/75 hover:bg-surface hover:text-primary"
                        >
                          {labelBlock}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#28b76b] px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.nav.ctaContact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
