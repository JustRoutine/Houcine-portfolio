export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  accent: 'electric' | 'rose';
};

// Projets principaux. La 3D n'est PAS une spécialité — uniquement un élément
// immersif de l'interface. Le montage vidéo n'est pas mis en avant.
export const projects: Project[] = [
  {
    id: 'vipet',
    title: 'VIPET',
    category: 'Identité visuelle',
    year: '2024',
    summary:
      'Identité visuelle complète, charte graphique, supports de communication et expérience digitale pour une marque dédiée aux animaux.',
    tags: ['Branding', 'Charte graphique', 'Communication', 'Digital'],
    accent: 'electric',
  },
  {
    id: 'suitch',
    title: 'SUITCH',
    category: 'Branding & Direction artistique',
    year: '2024',
    summary:
      'Branding, direction artistique et univers de marque pour un label clothing / streetwear à forte signature visuelle.',
    tags: ['Streetwear', 'Direction artistique', 'Univers de marque'],
    accent: 'rose',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Product Design',
    year: '2023–24',
    summary:
      'Maquettes web et mobile centrées utilisateur : wireframes, prototypes interactifs et design systems.',
    tags: ['Web', 'Mobile', 'Prototypage', 'Design system'],
    accent: 'electric',
  },
  {
    id: 'webdesign',
    title: 'Web Design',
    category: 'Digital',
    year: '2023–24',
    summary:
      'Landing pages, sites vitrines et expériences digitales soignées, du concept à la mise en ligne.',
    tags: ['Landing pages', 'Sites vitrines', 'Expériences'],
    accent: 'rose',
  },
  {
    id: 'print',
    title: 'Print Design',
    category: 'Print & Édition',
    year: 'En continu',
    summary:
      'Cartes de visite, flyers, affiches, factures, devis, papier entête et documents professionnels cohérents.',
    tags: ['Cartes de visite', 'Flyers', 'Affiches', 'Documents pro'],
    accent: 'electric',
  },
  {
    id: 'academic',
    title: 'Projets académiques multimédia',
    category: 'Multimédia',
    year: '2022–24',
    summary:
      'Branding, design graphique, interfaces et communication visuelle réalisés dans un cadre académique multimédia.',
    tags: ['Branding', 'Design graphique', 'Interfaces', 'Communication'],
    accent: 'rose',
  },
];
