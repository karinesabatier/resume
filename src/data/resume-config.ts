import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Karine Sabatier',
    photoBackEmoji: '👩‍💼',
    title: {
      fr: 'Product Management & Product Design',
      en: 'Product Management & Product Design',
    },
    subtitle: {
      fr: '30 années d\'expérience',
      en: '30 years of experience',
    },
    location: 'Bretagne, France',
  },

  seo: {
    title: 'Karine Sabatier — Product Management & Product Design',
    description: 'CV interactif de Karine Sabatier, experte Product Management, Product Design et transformation des organisations.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'linkedin', label: 'Karine Sabatier', href: 'https://www.linkedin.com/in/karinesabatier/' },
    { type: 'email', label: 'karine.sabatier@zenika.com' },
    { type: 'location', label: 'Bretagne, France' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Bilingue', en: 'Bilingual' } },
        { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'Professionnel', en: 'Professional' } },
      ],
    },
    {
      title: { fr: 'Product & Strategy', en: 'Product & Strategy' },
      type: 'text',
      items: [
        { name: { fr: 'Product Management, Vision Produit, Roadmap, Discovery, MVP, Gouvernance Produit', en: 'Product Management, Product Vision, Roadmap, Discovery, MVP, Product Governance' } },
        { name: { fr: 'Fondatrice de Le Shift et de Explore', en: 'Le Shift and Explore Founder' } },
      ],
    },
    {
      title: { fr: 'UX & Product Design', en: 'UX & Product Design' },
      type: 'badges',
      items: [
        { name: 'UX Design' },
        { name: 'User Research' },
        { name: 'Design System' },
        { name: 'Service Design' },
        { name: 'Figma' },
        { name: 'Adobe Suite' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Agile, XP, Kanban, Lean Startup, Lean UX, Design Thinking', en: 'Agile, XP, Kanban, Lean Startup, Lean UX, Design Thinking' } },
      ],
    },
    {
      title: { fr: 'Leadership & Transformation', en: 'Leadership & Transformation' },
      type: 'text',
      items: [
        { name: { fr: 'Conduite du changement, Facilitation stratégique, Coaching dirigeants, Innovation & Entrepreneuriat', en: 'Change Management, Strategic Facilitation, Executive Coaching, Innovation & Entrepreneurship' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'lacroix',
      company: { fr: 'Lacroix Sofrel', en: 'Lacroix Sofrel' },
      role: { fr: 'Audit de maturité Produit', en: 'Product Maturity Audit' },
      type: { fr: 'Mission de conseil', en: 'Consulting' },
      period: { fr: 'Jan 2026', en: 'Jan 2026' },
      description: {
        fr: 'Audit de maturité produit et accompagnement stratégique.',
        en: 'Product maturity audit and strategic advisory.',
      },
      techs: ['Product Management'],
      isHighlighted: true,
    },
    {
      id: 'gmv',
      company: { fr: 'GMV (Centravet)', en: 'GMV (Centravet)' },
      role: { fr: 'Conseil stratégie Produit', en: 'Product Strategy Consultant' },
      type: { fr: 'Conseil', en: 'Consulting' },
      period: { fr: '2025 - Présent', en: '2025 - Present' },
      description: {
        fr: 'Refonte d\'applicatifs pour les cliniques vétérinaires.',
        en: 'Applications redesign for veterinary clinics.',
      },
      techs: ['Product Design', 'UX'],
    },
    {
      id: 'sinari',
      company: { fr: 'Groupe Sinari', en: 'Sinari Group' },
      role: { fr: 'Product Manager & Product Designer', en: 'Product Manager & Product Designer' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2023 - 2025', en: '2023 - 2025' },
      description: {
        fr: 'Modernisation UX et création d\'une gouvernance produit et design system.',
        en: 'UX modernization and creation of product governance and design system.',
      },
      techs: ['UX', 'Product Design', 'Design System'],
      isHighlighted: true,
    },
    {
      id: 'treckea',
      company: { fr: 'Treckea (Arkéa)', en: 'Treckea (Arkéa)' },
      role: { fr: 'Product Manager & Product Designer', en: 'Product Manager & Product Designer' },
      type: { fr: 'Mission', en: 'Consulting' },
      period: { fr: '2019 - 2023', en: '2019 - 2023' },
      description: {
        fr: 'Pilotage stratégie produit, vision et user research.',
        en: 'Product strategy, vision definition and user research leadership.',
      },
      techs: ['Product Management', 'Figma', 'UX'],
    },
    {
      id: 'leshift',
      company: { fr: 'LE SHIFT', en: 'LE SHIFT' },
      role: { fr: 'Cheffe d\'entreprise', en: 'Founder & CEO' },
      type: { fr: 'Entrepreneuriat', en: 'Entrepreneurship' },
      period: { fr: '2015 - 2019', en: '2015 - 2019' },
      description: {
        fr: 'Accompagnement innovation et transformation organisationnelle.',
        en: 'Innovation and organizational transformation consulting.',
      },
      techs: ['Lean Startup', 'Innovation'],
    },
    {
      id: 'cantine',
      company: { fr: 'Cantine Numérique Rennaise', en: 'Rennes Digital Hub' },
      role: { fr: 'Directrice', en: 'Director' },
      type: { fr: 'Direction', en: 'Leadership' },
      period: { fr: '2009 - 2015', en: '2009 - 2015' },
      description: {
        fr: 'Création du premier espace de coworking et accélérateur startups en région.',
        en: 'Creation of the first regional coworking space and startup accelerator.',
      },
      techs: ['Innovation', 'Community'],
    },
    {
      id: 'eyeka',
      company: { fr: 'Eyeka', en: 'Eyeka' },
      role: { fr: 'Product Owner', en: 'Product Owner' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2006 - 2008', en: '2006 - 2008' },
      description: {
        fr: 'UX/UI Design et Product Ownership de la plateforme.',
        en: 'UX/UI Design and Product Ownership.',
      },
      techs: ['UX', 'Agile'],
    },
    {
      id: 'pixup',
      company: { fr: 'Pixup', en: 'Pixup' },
      role: { fr: 'Fondatrice', en: 'Founder' },
      type: { fr: 'Entrepreneuriat', en: 'Entrepreneurship' },
      period: { fr: '1997 - 2003', en: '1997 - 2003' },
      description: {
        fr: 'Création d\'une agence web et développement de projets digitaux.',
        en: 'Web agency creation and digital project development.',
      },
      techs: ['Web', '.NET', 'C++'],
    },
  ],

  education: [
    {
      school: { fr: 'Google', en: 'Google' },
      degree: { fr: 'Certification Google UX Design', en: 'Google UX Design Certification' },
      period: '2020',
    },
  ],

  projects: [
    {
      id: 'lesimpatientes',
      title: { fr: 'LesImpatientes', en: 'LesImpatientes' },
      description: { fr: 'Communauté de patientes créée en 2002.', en: 'Patient community created in 2002.' },
      techs: ['Community'],
      url: 'https://lesimpatientes.com',
    },
    {
      id: 'backlight',
      title: { fr: 'Backlight Magazine', en: 'Backlight Magazine' },
      description: { fr: 'Magazine dédié à la photographie mobile.', en: 'Mobile photography magazine.' },
      techs: ['Photography'],
      url: 'http://blog.backlightmag.com',
    },
  ],

  hobbies: [
    { title: { fr: 'Photographie', en: 'Photography' } },
    { title: { fr: 'Mentorat & Communautés Produit', en: 'Mentoring & Product Communities' } },
    { title: { fr: 'Speaker Agile Tour', en: 'Agile Tour Speaker' } },
  ],

  theme: { preset: 'warm' },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click experiences to see details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
