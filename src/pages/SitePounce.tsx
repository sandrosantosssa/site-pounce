import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Hero } from '@/sections/Hero';
import { Sobre } from '@/sections/Sobre';
import { Reciclagem } from '@/sections/Reciclagem';
import { Timeline } from '@/sections/Timeline';
import { Impacto } from '@/sections/Impacto';
import { Diferenciais } from '@/sections/Diferenciais';
import { MVV } from '@/sections/MVV';
import { Contato } from '@/sections/Contato';

export default function SitePounce() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Sobre />
        <Reciclagem />
        <Timeline />
        <Impacto />
        <Diferenciais />
        <MVV />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  );
}
