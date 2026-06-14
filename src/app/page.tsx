import { SceneCanvas } from '@/components/three/SceneCanvas';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Universe } from '@/components/sections/Universe';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <SceneCanvas />
      <Nav />
      <main className="relative">
        <Hero />
        {/* Dark gradient veil so content stays readable over the 3D scene */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-b from-ink/40 via-ink/80 to-ink" />
          <About />
          <Skills />
          <Universe />
          <Projects />
          <Process />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
