'use client';

import { motion } from 'framer-motion';
import { RevealText } from '@/components/RevealText';

const skills = [
  { name: 'Branding', level: 'Principal' },
  { name: 'Design Graphique', level: 'Principal' },
  { name: 'UI/UX Design', level: 'Intermédiaire' },
  { name: 'Web Design', level: 'Intermédiaire' },
  { name: 'WordPress', level: 'Intermédiaire' },
  { name: 'Print Design', level: 'Principal' },
  { name: 'HTML / CSS', level: 'Pratique' },
];

const tools = [
  'Photoshop',
  'Illustrator',
  'Figma',
  'WordPress',
  'HTML',
  'CSS',
  'JavaScript',
  '3ds Max',
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-32 md:py-44">
      <div className="shell">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow">03 — Compétences</span>
        </div>
        <RevealText
          as="h2"
          text="Des compétences orientées design, interface et communication visuelle."
          className="mt-6 font-display text-4xl font-medium tracking-tightest md:text-6xl"
        />

        <div className="mt-16 border-t border-white/10">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-display text-2xl tracking-tightest transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {s.name}
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/40">
                {s.level}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-4 py-2 font-sans text-xs uppercase tracking-[0.15em] text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
