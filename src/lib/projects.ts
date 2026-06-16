export type ProjectVisual = {
  gradient: [string, string];
  pattern: 'grid' | 'dots' | 'rings' | 'stripes' | 'mesh' | 'noise';
  mark: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  contribution: string;
  tags: string[];
  accent: 'electric' | 'rose';
  visual: ProjectVisual;
  image?: string;
  /** If true, image is a logo and needs a gradient background + object-contain */
  isLogo?: boolean;
  /** URL to a downloadable PDF charte */
  charteUrl?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    id: 'vipet',
    title: 'VIPET',
    category: 'Identité visuelle & communication',
    client: 'Projet PFE — hôtel pour animaux',
    year: '2026',
    summary:
      'VIPET est un concept d’hôtel premium pour animaux domestiques. Le projet développe une identité visuelle complète autour d’un univers rassurant, moderne et distinctif, pensé pour valoriser le soin, la sécurité et l’expérience des animaux comme des propriétaires.',
    contribution:
      'Création du concept, logo, charte graphique, supports print, supports digitaux, mockups, direction visuelle et présentation de marque.',
    tags: ['Identité visuelle', 'Charte graphique', 'Print', 'Mockups'],
    accent: 'rose',
    image: '/images/portfolio-bank/vipet-logo.png',
    isLogo: true,
    charteUrl: '/images/portfolio-bank/vipet/vipet-charte.pdf',
    visual: { gradient: ['#FFF8F9', '#FFE8EC'], pattern: 'rings', mark: 'VP' },
    gallery: [
      { src: '/images/portfolio-bank/vipet/vipet-01.png', alt: 'Mascotte VIPET', caption: 'Mascotte — personnage de marque' },
      { src: '/images/portfolio-bank/vipet/vipet-02.png', alt: 'Identité visuelle VIPET', caption: 'Identité visuelle' },
      { src: '/images/portfolio-bank/vipet/vipet-03.png', alt: 'Branding VIPET', caption: 'Univers de marque' },
      { src: '/images/portfolio-bank/vipet/vipet-04.png', alt: 'Éléments graphiques', caption: 'Éléments graphiques' },
      { src: '/images/portfolio-bank/vipet/vipet-05.png', alt: 'Supports visuels', caption: 'Supports visuels' },
      { src: '/images/portfolio-bank/vipet/vipet-06.png', alt: 'Déclinaisons', caption: 'Déclinaisons' },
      { src: '/images/portfolio-bank/vipet/vipet-07.png', alt: 'Communication visuelle', caption: 'Communication visuelle' },
      { src: '/images/portfolio-bank/vipet/vipet-08.png', alt: 'Supports de marque', caption: 'Supports de marque' },
      { src: '/images/portfolio-bank/vipet/vipet-09.png', alt: 'Direction artistique', caption: 'Direction artistique' },
      { src: '/images/portfolio-bank/vipet/vipet-10.png', alt: 'Hoodie mockup 01', caption: 'Mockup hoodie — face' },
      { src: '/images/portfolio-bank/vipet/vipet-11.png', alt: 'Hoodie mockup 02', caption: 'Mockup hoodie — dos' },
      { src: '/images/portfolio-bank/vipet/vipet-12.png', alt: 'Charte graphique mockup', caption: 'Charte graphique — mockup' },
      { src: '/images/portfolio-bank/vipet/vipet-13.png', alt: 'Manifesto page', caption: 'Manifesto de marque' },
      { src: '/images/portfolio-bank/vipet/vipet-14.png', alt: 'Stamp VIPET', caption: 'Stamp / tampon' },
      { src: '/images/portfolio-bank/vipet/vipet-15.png', alt: 'Tote bag mockup', caption: 'Tote bag' },
      { src: '/images/portfolio-bank/vipet/vipet-16.png', alt: 'Tote bag final', caption: 'Tote bag — version finale' },
      { src: '/images/portfolio-bank/vipet/vipet-17.png', alt: 'Application mobile', caption: 'Interface mobile' },
    ],
  },
  {
    id: 'suitch',
    title: 'SUITCH',
    category: 'Branding & univers de marque',
    client: 'Concept clothing / streetwear',
    year: '2025',
    summary:
      'SUITCH est un projet de marque clothing orienté streetwear. L’objectif est de construire un univers visuel direct, jeune et reconnaissable, capable de fonctionner sur les réseaux sociaux, les visuels produit et les supports de marque.',
    contribution:
      'Recherche d’identité, direction artistique, choix typographiques, palette couleur, visuels de marque, structure de communication et réflexion e-commerce.',
    tags: ['Branding', 'Streetwear', 'Direction artistique', 'Réseaux sociaux'],
    accent: 'rose',
    image: '/images/portfolio-bank/suitch-logo.png',
    isLogo: true,
    visual: { gradient: ['#F5F5F5', '#E8E8E8'], pattern: 'stripes', mark: 'SW' },
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Interfaces web & mobile',
    client: 'Projets académiques et personnels',
    year: '2024–2026',
    summary:
      'Une sélection de maquettes web et mobile travaillées autour de la hiérarchie visuelle, de la lisibilité et du parcours utilisateur. L’approche reste simple : organiser l’information, rendre l’interface claire et guider l’utilisateur vers l’action.',
    contribution:
      'Wireframes, maquettes haute fidélité, structure des pages, composants d’interface, responsive design et prototypes simples.',
    tags: ['UI Design', 'UX', 'Wireframes', 'Responsive'],
    accent: 'electric',
    image: '/images/portfolio-bank/webdesign-cover.png',
    visual: { gradient: ['#182350', '#101035'], pattern: 'grid', mark: 'UX' },
  },
  
  {
    id: 'print',
    title: 'Print Design',
    category: 'Supports de communication',
    client: 'Documents professionnels',
    year: '2024–2026',
    summary:
      'Un ensemble de supports imprimés conçus pour renforcer une identité visuelle : cartes de visite, flyers, affiches, papier entête, factures, devis et documents administratifs. L’objectif est de garder une cohérence entre le digital et le print.',
    contribution:
      'Mise en page, choix typographiques, préparation des fichiers, déclinaisons graphiques, supports commerciaux et documents professionnels.',
    tags: ['Flyers', 'Cartes de visite', 'Affiches', 'Documents pro'],
    accent: 'rose',
    image: '/images/portfolio-bank/print/printlabel.png',
    
    visual: { gradient: ['#AFD2FA', '#2A0F2A'], pattern: 'dots', mark: 'PR' },
  },
  {
    id: 'academic',
    title: 'Projets académiques multimédia',
    category: 'Développement multimédia',
    client: 'Formation multimédia',
    year: '2023–2026',
    summary:
      'Une sélection de travaux réalisés dans le cadre de ma formation : compositions graphiques, interfaces, supports de communication, exercices de branding et projets numériques. Ces projets montrent ma progression et ma polyvalence.',
    contribution:
      'Design graphique, conception d’interfaces, communication visuelle, mise en page, réflexion créative et production multimédia.',
    tags: ['Multimédia', 'Design graphique', 'Interfaces', 'Communication'],
    accent: 'electric',
    image: '/images/portfolio-bank/academic-cover.png',
    visual: { gradient: ['#182350', '#0A1A6B'], pattern: 'noise', mark: 'DM' },
  },
];
