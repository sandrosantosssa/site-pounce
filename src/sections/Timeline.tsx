import { useT } from '@/i18n/LangContext';

export function Timeline() {
  const t = useT().timeline;
  return (
    <section className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1f9555]">
            {t.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            {t.titlePre}{' '}
            <span className="text-[#28b76b]">{t.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">{t.description}</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border lg:left-1/2 lg:-translate-x-1/2" />
          <ol className="space-y-10">
            {t.items.map((it, i) => (
              <li key={it.year} className="relative grid items-start gap-4 pl-12 lg:grid-cols-2 lg:gap-12 lg:pl-0">
                <span className="absolute left-2 top-2 h-5 w-5 rounded-full border-4 border-white bg-[#28b76b] shadow-soft lg:left-1/2 lg:-translate-x-1/2" />
                <div className={i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:order-2 lg:pl-12'}>
                  <div className="font-display text-3xl font-extrabold text-[#28b76b]">{it.year}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-primary">{it.title}</h3>
                </div>
                <div className={i % 2 === 0 ? 'lg:pl-12' : 'lg:order-1 lg:pr-12 lg:text-right'}>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <p className="text-sm leading-relaxed text-foreground/75">{it.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
