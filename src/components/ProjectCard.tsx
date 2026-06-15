'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { Project } from '@/lib/projects';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const [hover, setHover] = useState(false);

  const isElectric = project.accent === 'electric';
  const accentText = isElectric ? 'text-electric' : 'text-rose';
  const accentBorder = isElectric
    ? 'hover:border-electric/60'
    : 'hover:border-rose/60';
  const accentHex = isElectric ? '#182350' : '#AFD2FA';

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({
      ry: (px - 0.5) * 10,
      rx: -(py - 0.5) * 10,
      gx: px * 100,
      gy: py * 100,
    });
  };

  const reset = () => {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });
    setHover(false);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={reset}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
      }}
      className={clsx(
        'group relative overflow-hidden rounded-3xl glass transition-colors duration-500',
        accentBorder
      )}
    >
      {/* Clickable overlay link */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-30"
        aria-label={`Voir le projet ${project.title}`}
      />

      {/* interactive light following the cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${tilt.gx}% ${tilt.gy}%, ${accentHex}22, transparent 55%)`,
        }}
      />

      {/* immersive visual */}
      <div className="relative aspect-[16/10] overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <div
          className="h-full w-full transition-transform duration-700 ease-cinematic"
          style={{ transform: hover ? 'scale(1.06)' : 'scale(1)' }}
        >
          {project.image ? (
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
) : (
  <ProjectVisualPlaceholder
    visual={project.visual}
    title={project.title}
  />
)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full bg-black/30 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {project.client}
        </span>
      </div>

      <div className="relative z-10 p-8" style={{ transform: 'translateZ(35px)' }}>
        <div className="flex items-center justify-between">
          <span className="eyebrow">{project.category}</span>
          <span className="font-display text-xs text-white/40">{project.year}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl font-medium tracking-tightest md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>

        <div
          className="grid transition-all duration-500 ease-cinematic"
          style={{
            gridTemplateRows: hover ? '1fr' : '0fr',
            opacity: hover ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/45">
              <span className="text-white/70">Mon rôle — </span>
              {project.contribution}
            </p>
          </div>
        </div>

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

        <div className={clsx('mt-8 flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em]', accentText)}>
          <span>Voir le projet</span>
          <span className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
        </div>
      </div>
    </motion.article>
  );
}
