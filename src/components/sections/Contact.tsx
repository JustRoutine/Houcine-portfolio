'use client';

import { site } from '@/lib/site';
import { Button } from '@/components/Button';
import { RevealText } from '@/components/RevealText';

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 md:py-48">
      <div className="shell text-center">
        <span className="eyebrow">07 — Contact</span>
        <RevealText
          as="h2"
          text="Disponible pour des projets créatifs et des collaborations."
          className="mx-auto mt-8 max-w-4xl justify-center font-display text-5xl font-medium leading-[1.05] tracking-tightest md:text-8xl"
        />
        <p className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed text-white/55">
          Je suis ouvert aux opportunités de stage, aux collaborations
          créatives et aux projets en branding, design graphique,
          UI/UX et web design.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${site.email}`}>{site.email}</Button>
          <Button href="#" variant="ghost">
            Télécharger le CV
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 font-sans text-sm text-white/60">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="mt-10 font-sans text-xs uppercase tracking-[0.2em] text-white/30">
          {site.location}
        </p>
      </div>
    </section>
  );
}
