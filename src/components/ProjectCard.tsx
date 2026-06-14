'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = project.accent === 'electric' ? 'text-electric' : 'text-rose';
  const accentBorder =
    project.accent === 'electric'
      ? 'group-hover:border-electric/60'
      : 'group-hover:border-rose/60';
  const glow =
    project.accent === 'electric'
      ? 'from-electric/20'
      : 'from-rose/20';

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
      className={clsx(
        'group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1',
        accentBorder
      )}
    >
      <div
        className={clsx(
          'pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100',
          glow
        )}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="eyebrow">{project.category}</span>
          <span className="font-display text-xs text-white/40">{project.year}</span>
        </div>
        <h3 className="mt-6 font-display text-3xl font-medium tracking-tightest md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.15em] text-white/50"
            >
              {t}
            </span>
          ))}
        </div>
        <div className={clsx('mt-8 flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em]', accent)}>
          <span>Voir le projet</span>
          <span className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
        </div>
      </div>
      <span className="pointer-events-none absolute bottom-6 right-8 font-display text-7xl font-bold text-white/[0.03]">
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.article>
  );
}
