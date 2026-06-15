import { RevealText } from '@/components/RevealText';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-32 md:py-44">
      <div className="shell">
        <span className="eyebrow">05 — Projets sélectionnés</span>
        <RevealText
          as="h2"
          text="Une sélection de travaux en branding, design et communication visuelle."
          className="mt-6 font-display text-4xl font-medium tracking-tightest md:text-6xl"
        />
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/55">
          Chaque projet présente une approche différente du design :
          identité visuelle, interfaces, web design, supports imprimés et
          communication de marque. L&apos;objectif est toujours de créer une
          solution claire, cohérente et adaptée au besoin.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
