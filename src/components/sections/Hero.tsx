'use client';

import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';

const titleLines = ['Design.', 'UI/UX.', 'Identité.'];

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
          Portfolio · Développement Multimédia
        </motion.p>

        <h1 className="max-w-6xl font-display text-[14vw] font-semibold leading-[0.88] tracking-tightest md:text-[8vw] lg:text-[7.4rem]">
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
          <p className="max-w-xl font-sans text-lg leading-relaxed text-white/75">
  {site.name}, développeur multimédia orienté branding, UI/UX,
  web design et supports de communication. Je conçois des identités
  visuelles et des interfaces claires, modernes et mémorables.
</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Voir mes projets
            </Button>

            <Button
              variant="ghost"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Me contacter
            </Button>
          </div>
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