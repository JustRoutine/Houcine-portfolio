'use client';

import { motion } from 'framer-motion';
import { RevealText } from '@/components/RevealText';

const universes = [
  {
    title: 'Design Graphique',
    desc: 'Systèmes visuels, compositions et identités qui marquent.',
    accent: '#0000FF',
  },
  {
    title: 'Branding',
    desc: 'Stratégie de marque, logo, charte et ton de voix.',
    accent: '#FF007F',
  },
  {
    title: 'UI/UX',
    desc: 'Interfaces claires, fluides et centrées utilisateur.',
    accent: '#0000FF',
  },
  {
    title: 'Web Design',
    desc: 'Sites vitrines et expériences digitales immersives.',
    accent: '#FF007F',
  },
  {
    title: 'Print',
    desc: 'Supports imprimés et documents professionnels cohérents.',
    accent: '#0000FF',
  },
  {
    title: 'Communication visuelle',
    desc: 'Campagnes, réseaux sociaux et supports de communication.',
    accent: '#FF007F',
  },
];

export function Universe() {
  return (
    <section id="universe" className="relative z-10 py-32 md:py-44">
      <div className="shell">
        <span className="eyebrow">04 — Univers créatifs</span>
        <RevealText
          as="h2"
          text="Six terrains de jeu, une seule signature."
          className="mt-6 max-w-3xl font-display text-4xl font-medium tracking-tightest md:text-6xl"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-3">
          {universes.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group relative bg-ink p-8 transition-colors hover:bg-ink-soft"
            >
              <div
                className="mb-6 h-10 w-10 rounded-full transition-transform duration-500 group-hover:scale-125"
                style={{ background: u.accent, boxShadow: `0 0 40px ${u.accent}55` }}
              />
              <h3 className="font-display text-2xl tracking-tightest">{u.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/55">
                {u.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
