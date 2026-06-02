import { SITE } from '@/lib/utils';
import { useT } from '@/i18n/LangContext';

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
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

            {/* Redes sociais */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Pounce"
                title="Siga a Pounce no Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#7ce6a8]/40 hover:bg-white/10 hover:text-[#7ce6a8]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da Pounce"
                title="Siga a Pounce no LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#7ce6a8]/40 hover:bg-white/10 hover:text-[#7ce6a8]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
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
