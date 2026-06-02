import { useEffect, useState } from 'react';
import { SITE } from '@/lib/utils';
import LaunchPage from '@/pages/LaunchPage';
import SitePounce from '@/pages/SitePounce';

/**
 * Mostra a LaunchPage (countdown) enquanto não chegamos na data de lançamento.
 * Quando o relógio passar de SITE.launchDate, exibe o site completo.
 *
 * Preview do site final antes do lançamento:
 *   adicione ?preview=site na URL para forçar o SitePounce.
 *   adicione ?preview=launch para forçar a LaunchPage.
 */
export function LaunchGate() {
  const target = new Date(SITE.launchDate).getTime();
  const [now, setNow] = useState(() => Date.now());
  const [forced, setForced] = useState<'site' | 'launch' | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('preview');
    if (p === 'site' || p === 'launch') setForced(p);
  }, []);

  useEffect(() => {
    if (forced) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [forced]);

  if (forced === 'site') return <SitePounce />;
  if (forced === 'launch') return <LaunchPage />;
  return now >= target ? <SitePounce /> : <LaunchPage />;
}
