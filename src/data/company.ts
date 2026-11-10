// Central company configuration
// Update this file when company information changes

export const company = {
  name: 'INSICLE',
  tagline: 'IDEAS • TECHNOLOGY • REAL IMPACT',
  description: 'Technology, Software Development and Digital Solutions Company.',
  brandStatement: 'Creative thinking. Enterprise execution.',
  heroHeadline: 'We Make Technology Work For What\'s Next.',
  heroSubtext:
    'From custom software and intelligent solutions to digital experiences that support business growth, we turn ambitious ideas into practical digital outcomes.',
  
  // Contact — verify before publishing
  contact: {
    phone: '+91 9600142824',
    email: 'rmkinsicle@gmail.com',
    address: {
      street: 'RSM Nagar, Kavaraipettai',
      district: 'Gummidipoondi Taluk',
      city: 'Thiruvallur',
      pincode: '601206',
      state: 'Tamil Nadu',
      country: 'India',
    },
    fullAddress: 'RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur – 601206',
  },
  
  // Proprietor
  proprietor: 'Dr. S. Selvi',

  // Brand assets — Steel & Ink theme
  logo: {
    master: '/images/brand/insicle-logo-master.png',
    header: '/brand/logo.svg',   // dark ink on transparent
    footer: '/brand/logo-light.svg',   // light (#E8EEF4) on transparent
    white:  '/images/brand/insicle-logo-white.png',
    svg:    '/brand/logo.svg',
    svgLight: '/brand/logo-light.svg',
    alt: 'INSICLE – Ideas • Technology • Real Impact',
  },

  // Social links — update with verified handles before launch
  social: {
    linkedin: null,
    twitter: null,
    instagram: null,
    youtube: null,
  },

  // SEO defaults
  seo: {
    defaultTitle: 'INSICLE | Technology & Digital Solutions',
    titleTemplate: '%s | INSICLE',
    defaultDescription:
      'Explore INSICLE\'s technology, software development and digital solutions. Contact the team to discuss your business requirements.',
    siteUrl: 'https://insicle.com',
  },
} as const;

export type Company = typeof company;
