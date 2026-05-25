import { SITE } from '@/lib/utils';
import { useT } from '@/i18n/LangContext';

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();

  const LINKS = [
    { label: t.footer.navItems.home, href: '#inicio' },
    { label: t.footer.navItems.about, href: '#sobre' },
    { label: t.footer.navItems.esg, href: '#esg' },
    { label: t.footer.navItems.products, href: '#produtos' },
    { label: t.footer.navItems.news, href: '#noticias' },
    { label: t.footer.navItems.contactUs, href: '#contato' },
    { label: t.footer.navItems.workWithUs, href: '#carreiras' },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="inline-flex rounded-xl bg-white px-4 py-2.5">
              <img src="/LOGO-POUNCE.png" alt={SITE.brand} className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold">{t.footer.nav}</h4>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href + l.label}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-[#7ce6a8]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold">{t.footer.contact}</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">{t.footer.salesLabel}</div>
                <a href={`mailto:${SITE.email}`} className="mt-1 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#7ce6a8]">
                  <MailIcon className="h-4 w-4" /> {SITE.email}
                </a>
              </li>
              <li className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">{t.footer.hrLabel}</div>
                <a href={`mailto:${SITE.rhEmail}`} className="mt-1 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#7ce6a8]">
                  <MailIcon className="h-4 w-4" /> {SITE.rhEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {year} {SITE.brand}. {t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
