'use client';

import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center"
    >
      <div className="shell relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow mb-8"
        >
          Portfolio · {site.shortRole}
        </motion.p>

        <h1 className="max-w-5xl font-display text-[14vw] font-semibold leading-[0.9] tracking-tightest md:text-[9vw] lg:text-[7.5rem]">
          {['Créer', 'des univers', 'visuels'].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {i === 2 ? <span className="text-gradient">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-center"
        >
          <p className="max-w-md font-sans text-base leading-relaxed text-white/60">
            {site.name} — {site.role}. Branding, UI/UX, web & print,
            au service d’identités mémorables.
          </p>
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Découvrir mes projets
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-sans text-[11px] uppercase tracking-[0.3em] text-white/40"
      >
        <span className="animate-pulse-glow">Scroll ↓</span>
      </motion.div>
    </section>
  );
}
