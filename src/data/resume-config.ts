import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Karine Sabatier',
    photoBackEmoji: '👩‍💼',
    title: {
      fr: 'Product Transformation Strategist & Executive Advisor',
      en: 'Product Transformation Strategist & Executive Advisor',
    },
    subtitle: {
      fr: 'Je transforme la stratégie produit en décisions concrètes et actionnables.',
      en: 'I turn product strategy into actionable decisions.',
    },
    location: 'Bretagne, France',
  },

  seo: {
    title: 'Karine Sabatier — Product Transformation Strategist & Executive Advisor',
    description: 'J\'accompagne dirigeants et organisations dans leurs transformations produit pour aligner stratégie, design et delivery.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'linkedin', label: 'Karine Sabatier', href: 'https://www.linkedin.com/in/karinesabatier/' },
    { type: 'email', label: 'karine.sabatier@zenika.com' },
    { type: 'link', label: 'Certification Google UX Design', href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/3C6TLEMPW3BN' },
    { type: 'link', label: 'Credly Badge', href: 'https://www.credly.com/badges/5322a293-82d3-4742-bd00-480795f9ab98?source=linked_in_profile' },
    { type: 'link', label: 'Talk Agile Tour', href: 'https://www.youtube.com/watch?v=z_Pvp5mjEx0&t=72s' },
    { type: 'link', label: 'Explore', href: 'https://explore.le-shift.co' },
    { type: 'link', label: 'LesImpatientes', href: 'https://lesimpatientes.com' },
    { type: 'link', label: 'Backlight Magazine', href: 'http://blog.backlightmag.com' },
    { type: 'link', label: 'Product Managers de l\'Ouest', href: 'https://product-mngt.slack.com' },
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
      title: { fr: 'Product Strategy', en: 'Product Strategy' },
      type: 'text',
      items: [
        { name: { fr: 'Vision Produit, Gouvernance Produit, Discovery, Roadmap, MVP, Stratégie produit', en: 'Product Vision, Product Governance, Discovery, Roadmap, MVP, Product Strategy' } },
      ],
    },
    {
      title: { fr: 'UX & Product Design', en: 'UX & Product Design' },
      type: 'badges',
      items: [
        { name: 'UX Design' },
        { name: 'User Research' },
        { name: 'Service Design' },
        { name: 'Design System' },
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
        { name: { fr: 'Transformation organisationnelle, Conduite du changement, Facilitation stratégique, Coaching dirigeants', en: 'Organizational transformation, Change management, Strategic facilitation, Executive coaching' } },
      ],
    },
  ],

  experiences: [
    {
      id: 'executive-advisory',
      company: { fr: 'Executive Product Transformation & Advisory', en: 'Executive Product Transformation & Advisory' },
      role: { fr: 'Product Transformation Strategist', en: 'Product Transformation Strategist' },
      type: { fr: 'Conseil & Advisory', en: 'Advisory & Consulting' },
      period: { fr: '2015 - Présent', en: '2015 - Present' },
      description: {
        fr: 'Accompagnement de dirigeants et organisations pour devenir réellement product-driven et transformer la stratégie en décisions actionnables.',
        en: 'Advising leaders and organizations to become truly product-driven and turn strategy into actionable decisions.',
      },
      techs: ['Product Strategy', 'Transformation', 'Leadership'],
      isHighlighted: true,
    },
    {
      id: 'lacroix',
      company: { fr: 'Lacroix Sofrel', en: 'Lacroix Sofrel' },
      role: { fr: 'Audit de maturité produit', en: 'Product Maturity Audit' },
      type: { fr: 'Mission de conseil', en: 'Consulting' },
      period: { fr: 'Jan 2026', en: 'Jan 2026' },
      description: {
        fr: 'Audit de maturité produit et recommandations stratégiques.',
        en: 'Product maturity audit and strategic recommendations.',
      },
      techs: ['Product Management'],
    },
    {
      id: 'gmv',
      company: { fr: 'GMV (Centravet)', en: 'GMV (Centravet)' },
      role: { fr: 'Conseil stratégie produit', en: 'Product Strategy Consultant' },
      type: { fr: 'Conseil', en: 'Consulting' },
      period: { fr: '2025 - Présent', en: '2025 - Present' },
      description: {
        fr: 'Refonte d\'applicatifs à destination des cliniques vétérinaires.',
        en: 'Applications redesign for veterinary clinics.',
      },
      techs: ['UX', 'Product Design'],
    },
    {
      id: 'sinari',
      company: { fr: 'Groupe Sinari', en: 'Sinari Group' },
      role: { fr: 'Product Manager & Product Designer', en: 'Product Manager & Product Designer' },
      type: { fr: 'CDI', en: 'Permanent' },
      period: { fr: '2023 - 2025', en: '2023 - 2025' },
      description: {
        fr: 'Modernisation UX et création d\'une gouvernance produit et design system.',
        en: 'UX modernization and product governance setup.',
      },
      techs: ['UX', 'Design System'],
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
        en: 'Product strategy leadership and user research.',
      },
      techs: ['Product Management', 'Figma'],
    },
    {
      id: 'cantine',
      company: { fr: 'Cantine Numérique Rennaise', en: 'Rennes Digital Hub' },
      role: { fr: 'Directrice', en: 'Director' },
      type: { fr: 'Direction', en: 'Leadership' },
      period: { fr: '2009 - 2015', en: '2009 - 2015' },
      description: {
        fr: 'Création du premier espace de coworking et accélérateur startup régional.',
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
        fr: 'UX/UI design et déploiement de pratiques agiles.',
        en: 'UX/UI design and agile practices deployment.',
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
        en: 'Web agency creation and digital development.',
      },
      techs: ['Web', '.NET'],
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
    { title: { fr: 'Speaker Agile & Innovation', en: 'Agile & Innovation Speaker' } },
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
