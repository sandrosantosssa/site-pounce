import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Hero } from '@/sections/Hero';
import { Sobre } from '@/sections/Sobre';
import { Esg } from '@/sections/Esg';
import { Produtos } from '@/sections/Produtos';
import { Diferenciais } from '@/sections/Diferenciais';
import { Timeline } from '@/sections/Timeline';
import { Noticias } from '@/sections/Noticias';
import { MVV } from '@/sections/MVV';
import { Carreiras } from '@/sections/Carreiras';
import { Contato } from '@/sections/Contato';

export default function SitePounce() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Sobre />
        <Esg />
        <Produtos />
        <Diferenciais />
        <Timeline />
        <Noticias />
        <MVV />
        <Carreiras />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  );
}
