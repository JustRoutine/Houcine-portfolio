export type ProjectVisual = {
  /** Two-stop gradient used for the premium image placeholder. */
  gradient: [string, string];
  /** Decorative pattern style for the placeholder. */
  pattern: 'grid' | 'dots' | 'rings' | 'stripes' | 'mesh' | 'noise';
  /** Monogram / short mark shown on the placeholder. */
  mark: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  /** Real, project-specific French copy (no generic filler). */
  summary: string;
  contribution: string;
  tags: string[];
  accent: 'electric' | 'rose';
  visual: ProjectVisual;
};

// Projets principaux. La 3D n'est PAS une spécialité — uniquement un décor
// immersif de l'interface. Le montage vidéo n'est pas mis en avant.
// Chaque projet a une identité visuelle distincte (gradient + motif + mark).
export const projects: Project[] = [
  {
    id: 'vipet',
    title: 'VIPET',
    category: 'Identité visuelle',
    client: 'Marque animalerie',
    year: '2024',
    summary:
      'VIPET est une marque dédiée au bien-être animal. J’ai conçu une identité douce mais affirmée : un logotype arrondi, une palette chaleureuse et un système d’icônes pensé pour parler autant aux maîtres qu’aux vétérinaires.',
    contribution:
      'Logo, charte graphique complète, supports de communication (print & réseaux sociaux) et maquette de l’expérience digitale.',
    tags: ['Logo', 'Charte graphique', 'Réseaux sociaux', 'Expérience digitale'],
    accent: 'electric',
    visual: { gradient: ['#0000FF', '#0A1A6B'], pattern: 'rings', mark: 'VP' },
  },
  {
    id: 'suitch',
    title: 'SUITCH',
    category: 'Branding & Direction artistique',
    client: 'Label streetwear',
    year: '2024',
    summary:
      'SUITCH est un label clothing / streetwear à forte attitude. J’ai bâti un univers de marque tranchant : typographie condensée, contrastes noirs et roses, et une direction artistique pensée pour les drops et les visuels produit.',
    contribution:
      'Plateforme de marque, direction artistique, déclinaisons textile, visuels lookbook et template de communication.',
    tags: ['Streetwear', 'Direction artistique', 'Lookbook', 'Univers de marque'],
    accent: 'rose',
    visual: { gradient: ['#FF007F', '#3A0020'], pattern: 'stripes', mark: 'SW' },
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Product Design',
    client: 'Projets web & mobile',
    year: '2023–24',
    summary:
      'Une série de maquettes web et mobile centrées sur la clarté et le parcours utilisateur. Du wireframe basse fidélité au prototype interactif, chaque écran est pensé pour réduire la friction et guider l’action.',
    contribution:
      'Recherche, wireframes, design d’interface haute fidélité, prototypes Figma et amorce de design system.',
    tags: ['Wireframes', 'Prototypage', 'Design system', 'Mobile'],
    accent: 'electric',
    visual: { gradient: ['#0000FF', '#101035'], pattern: 'grid', mark: 'UX' },
  },
  {
    id: 'webdesign',
    title: 'Web Design',
    category: 'Digital',
    client: 'Landing & vitrines',
    year: '2023–24',
    summary:
      'Des landing pages et sites vitrines pensés pour convertir et marquer les esprits. Mise en page éditoriale, hiérarchie claire et micro-animations discrètes pour une expérience fluide sur tous les écrans.',
    contribution:
      'Direction visuelle, maquettes desktop & mobile, système de composants et intégration de principes d’animation.',
    tags: ['Landing pages', 'Sites vitrines', 'Responsive', 'Animations'],
    accent: 'rose',
    visual: { gradient: ['#FF007F', '#2A0F2A'], pattern: 'mesh', mark: 'WD' },
  },
  {
    id: 'print',
    title: 'Print Design',
    category: 'Print & Édition',
    client: 'Documents professionnels',
    year: 'En continu',
    summary:
      'Un ensemble cohérent de supports imprimés et de documents professionnels : cartes de visite, flyers, affiches, mais aussi factures, devis et papier entête. Même rigueur typographique du commercial à l’administratif.',
    contribution:
      'Cartes de visite, flyers, affiches, modèles de factures, devis, papier entête et gabarits réutilisables.',
    tags: ['Cartes de visite', 'Flyers', 'Affiches', 'Documents pro'],
    accent: 'electric',
    visual: { gradient: ['#0000FF', '#06061A'], pattern: 'dots', mark: 'PR' },
  },
  {
    id: 'academic',
    title: 'Projets académiques multimédia',
    category: 'Multimédia',
    client: 'Cursus multimédia',
    year: '2022–24',
    summary:
      'Une sélection de travaux réalisés pendant ma formation multimédia : exercices de branding, compositions graphiques, interfaces et communication visuelle. Le terrain où j’ai forgé mes fondamentaux créatifs.',
    contribution:
      'Branding, design graphique, conception d’interfaces et supports de communication visuelle.',
    tags: ['Branding', 'Design graphique', 'Interfaces', 'Communication'],
    accent: 'rose',
    visual: { gradient: ['#FF007F', '#1A0014'], pattern: 'noise', mark: 'AC' },
  },
];
