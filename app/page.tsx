import { HeroSlider } from '@/components/home/hero-slider';
import { Features } from '@/components/home/features';
import { Programs } from '@/components/home/programs';
import { Stats } from '@/components/home/stats';
import { News } from '@/components/home/news';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Features />
      <Programs />
      <Stats />
      <News />
      <Testimonials />
      <CTA />
    </>
  );
}