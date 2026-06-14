# El Houssaine Ihssous — Portfolio

Portfolio personnel **ultra-premium** (niveau Awwwards) pour **El Houssaine Ihssous**, développeur multimédia & directeur artistique. Expérience web immersive : scène 3D, smooth scroll cinématique, micro-interactions et design system futuriste minimal.

## ✨ Stack

- **Next.js 14** (App Router, TypeScript)
- **React Three Fiber** + **drei** (Three.js) — scène immersive
- **GSAP** + **ScrollTrigger** — animations & sync scroll
- **Framer Motion** — micro-interactions, reveals
- **Lenis** — smooth scrolling
- **Tailwind CSS** — design system & layout

## 🚀 Lancer le projet

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build    # build de production
npm run start    # serveur de production
npm run lint     # lint
```

## 🎨 Design system

| Token | Valeur | Usage |
|-------|--------|-------|
| `ink` | `#050505` | Fond noir profond |
| `bone` | `#FFFFFF` | Blanc pur (texte) |
| `electric` | `#0000FF` | Accent électrique bleu |
| `rose` | `#FF007F` | Accent rose |

- **Typographie** : `Space Grotesk` (display) + `Inter` (corps), chargées via `next/font` (variables CSS `--font-display`, `--font-sans`).
- **Glass panels** : utilitaire `.glass` (border + bg translucide + backdrop-blur).
- **Grain** : overlay subtil fixe via `.grain`.
- **Easing cinématique** : `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Accessibilité** : respect de `prefers-reduced-motion` (smooth scroll & camera scroll désactivés).

## 🧩 Architecture

```
src/
├─ app/
│  ├─ layout.tsx          # fonts premium, smooth scroll, metadata
│  ├─ page.tsx            # assemblage 3D + 7 sections
│  └─ globals.css         # tokens, glass, grain, utilities
├─ components/
│  ├─ three/
│  │  ├─ Scene.tsx        # Canvas R3F (mobile / reduced-motion aware)
│  │  ├─ SceneCanvas.tsx  # dynamic import ssr:false
│  │  ├─ CreativeCore.tsx # noyau créatif (shader)
│  │  ├─ coreShader.ts    # shader noise/distorsion + glow bleu/rose
│  │  ├─ Particles.tsx    # champ de particules flottantes
│  │  └─ ScrollCamera.tsx # caméra animée au scroll
│  ├─ sections/           # Hero, About, Skills, Universe, Projects, Process, Contact
│  ├─ Nav.tsx / Footer.tsx
│  ├─ Button.tsx / Magnetic.tsx / RevealText.tsx
│  └─ ProjectCard.tsx
└─ lib/
   ├─ site.ts             # infos & navigation
   └─ projects.ts         # projets principaux
```

## 🧠 La scène 3D

La 3D est un **élément immersif de l'interface**, pas une spécialité présentée. Au centre, un **noyau créatif** : icosphère déplacée par un shader (simplex noise) avec rim glow bleu électrique / rose, réactif à la souris. La caméra avance et orbite légèrement selon la progression du scroll. Sur mobile : DPR et nombre de particules réduits.

## 📂 Projets présentés

1. **VIPET** — identité visuelle, charte graphique, communication, digital
2. **SUITCH** — branding & direction artistique clothing / streetwear
3. **UI/UX Design** — maquettes web & mobile
4. **Web Design** — landing pages, sites vitrines, expériences digitales
5. **Print Design** — cartes de visite, flyers, affiches, documents pro
6. **Projets académiques multimédia** — branding, design, interfaces, communication

> Le montage vidéo et la 3D ne sont pas présentés comme spécialités.

## 📱 Responsive

Mobile-first, breakpoints Tailwind. Scène 3D allégée sur mobile. Navigation condensée sous `md`.

## 🔧 Personnalisation

- Coordonnées & réseaux : `src/lib/site.ts`
- Projets : `src/lib/projects.ts`
- Couleurs / typo : `tailwind.config.ts` + `src/app/globals.css`
