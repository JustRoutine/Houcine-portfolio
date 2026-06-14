'use client';

import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';

const titleLines = ['Créer', 'des univers', 'visuels'];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="shell relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow mb-8 flex items-center gap-3"
        >
          <span className="inline-block h-px w-10 bg-electric" />
          Portfolio · {site.shortRole}
        </motion.p>

        <h1 className="max-w-5xl font-display text-[15vw] font-semibold leading-[0.88] tracking-tightest md:text-[9vw] lg:text-[8rem]">
          {titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.04em]">
              <motion.span
                initial={{ y: '115%', rotate: 4, opacity: 0 }}
                animate={{ y: '0%', rotate: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.45 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block origin-left"
              >
                {i === 2 ? <span className="text-gradient">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-center"
        >
          <p className="max-w-md font-sans text-base leading-relaxed text-white/60">
            {site.name} — {site.role}. Branding, UI/UX, web & print,
            au service d’identités mémorables.
          </p>
          <Button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Découvrir mes projets
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-sans text-[11px] uppercase tracking-[0.3em] text-white/40"
      >
        <span className="animate-pulse-glow">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
