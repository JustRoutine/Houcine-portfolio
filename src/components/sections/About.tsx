import { RevealText } from '@/components/RevealText';

export function About() {
  return (
    <section id="about" className="relative z-10 py-32 md:py-44">
      <div className="shell grid gap-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <span className="eyebrow">02 — À propos</span>
        </div>
        <div className="md:col-span-9">
          <RevealText
            as="h2"
            text="Je transforme des idées en identités visuelles vivantes."
            className="max-w-4xl font-display text-3xl font-medium leading-[1.15] tracking-tightest md:text-5xl"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="font-sans text-base leading-relaxed text-white/60">
              Développeur multimédia et directeur artistique, je conçois des
              marques, des interfaces et des supports qui racontent une
              histoire cohérente, du logo à l’expérience digitale.
            </p>
            <p className="font-sans text-base leading-relaxed text-white/60">
              Mon approche mêle rigueur du design graphique, sensibilité UI/UX
              et goût pour le détail. Chaque projet est pensé comme un système
              vivant, modélaire et mémorable.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { k: '6+', v: 'Univers de marque' },
              { k: '40+', v: 'Supports conçus' },
              { k: '100%', v: 'Sur-mesure' },
              { k: '∞', v: 'Curiosité' },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl font-semibold tracking-tightest text-bone">
                  {s.k}
                </div>
                <div className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-white/40">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
