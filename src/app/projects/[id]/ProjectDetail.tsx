'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';

const ease = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  };
}

export function ProjectDetail({ project }: { project: Project }) {
  const isElectric = project.accent === 'electric';
  const accentColor = isElectric ? '#AFD2FA' : '#B9915E';

  return (
    <main className="relative overflow-hidden">
      {/* Back link */}
      <motion.div
        className="shell pt-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-sans text-sm text-white/60 transition-colors hover:text-white"
        >
          <span>←</span>
          <span>Retour</span>
        </Link>
      </motion.div>

      {/* Hero section */}
      <section className="shell py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: Text content */}
          <div>
            <motion.span
              className="eyebrow"
              style={{ color: `${accentColor}99` }}
              {...fadeUp(0.1)}
            >
              {project.category}
            </motion.span>

            <motion.h1
              className="mt-6 font-display text-5xl font-medium tracking-tightest md:text-7xl"
              {...fadeUp(0.2)}
            >
              {project.title}
            </motion.h1>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-6 font-sans text-sm text-white/55"
              {...fadeUp(0.3)}
            >
              <span>
                <span className="text-white/30">Client — </span>
                {project.client}
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span>
                <span className="text-white/30">Année — </span>
                {project.year}
              </span>
            </motion.div>

            <motion.p
              className="mt-10 max-w-lg font-sans text-base leading-relaxed text-white/70"
              {...fadeUp(0.4)}
            >
              {project.summary}
            </motion.p>

            <motion.div className="mt-8" {...fadeUp(0.5)}>
              <h2
                className="font-sans text-xs uppercase tracking-[0.2em]"
                style={{ color: accentColor }}
              >
                Contribution
              </h2>
              <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-white/55">
                {project.contribution}
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div className="mt-10 flex flex-wrap gap-2" {...fadeUp(0.6)}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.15em] text-white/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Charte PDF download */}
            {project.charteUrl && (
              <motion.div className="mt-8" {...fadeUp(0.7)}>
                <a
                  href={project.charteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.15em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  <span>📄</span>
                  <span>Télécharger la charte graphique</span>
                  <span>↓</span>
                </a>
              </motion.div>
            )}
          </div>

          {/* Right: Hero image */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.visual.gradient[0]}, ${project.visual.gradient[1]})`,
                }}
              >
                <span className="font-display text-6xl font-bold text-white/20">
                  {project.visual.mark}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="shell pb-32">
        <motion.h2
          className="font-display text-2xl font-medium tracking-tightest md:text-3xl"
          {...fadeUp(0)}
        >
          Galerie
        </motion.h2>

        {project.gallery && project.gallery.length > 0 ? (
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {project.gallery.map((item, i) => (
              <motion.figure
                key={item.src}
                className="group relative overflow-hidden rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 * i }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                  />
                </div>
                {item.caption && (
                  <figcaption className="p-4 font-sans text-xs text-white/50">
                    {item.caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="mt-12 flex items-center justify-center rounded-2xl border border-dashed border-white/10 py-20"
            {...fadeUp(0.2)}
          >
            <p className="font-sans text-sm text-white/30">
              Images à venir
            </p>
          </motion.div>
        )}
      </section>

      {/* Decorative gradient blur */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: accentColor }}
      />
    </main>
  );
}
