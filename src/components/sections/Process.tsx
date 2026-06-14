'use client';

import { motion } from 'framer-motion';
import { RevealText } from '@/components/RevealText';

const steps = [
  { n: '01', title: 'Découverte', desc: 'Comprendre la marque, ses objectifs et son audience.' },
  { n: '02', title: 'Concept', desc: 'Exploration créative, moodboards et direction artistique.' },
  { n: '03', title: 'Design', desc: 'Création des systèmes visuels, interfaces et supports.' },
  { n: '04', title: 'Livraison', desc: 'Déclinaisons, guidelines et accompagnement.' },
];

export function Process() {
  return (
    <section id="process" className="relative z-10 py-32 md:py-44">
      <div className="shell">
        <span className="eyebrow">06 — Processus de travail</span>
        <RevealText
          as="h2"
          text="Une méthode, du brief à la livraison."
          className="mt-6 max-w-3xl font-display text-4xl font-medium tracking-tightest md:text-6xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-2xl glass p-7"
            >
              <div className="font-display text-5xl font-bold text-white/10">{s.n}</div>
              <h3 className="mt-4 font-display text-xl tracking-tightest">{s.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/55">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
