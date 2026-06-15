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
            text="Je conçois des identités visuelles, des interfaces et des expériences digitales qui allient créativité, clarté et impact."
            className="max-w-4xl font-display text-3xl font-medium leading-[1.15] tracking-tightest md:text-5xl"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="font-sans text-base leading-relaxed text-white/60">
              Développeur multimédia spécialisé en branding, design graphique,
              UI/UX et web design. J’accompagne la création de projets visuels
              à travers des identités cohérentes, des interfaces modernes et
              des supports de communication adaptés aux besoins de chaque projet.
              
              
            </p>
            <p className="font-sans text-base leading-relaxed text-white/60">
              Ma démarche repose sur la réflexion, la cohérence visuelle et
              l’expérience utilisateur. Mon objectif est de transformer une
              idée en un projet clair, professionnel et facilement identifiable.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { k: '6+', v: 'Projets principaux' },
              { k: '20+', v: 'Supports créés' },
              { k: '4', v: 'Domaines créatifs' },
              { k: '2026', v: 'PFE VIPET' },
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
