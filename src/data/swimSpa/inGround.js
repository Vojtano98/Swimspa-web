const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const inGround = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Swim Spa', href: '/swim-spa/' },
    { label: 'In-Ground zapuštěné' },
  ],

  intro: {
    eyebrow: 'SWIM SPA · IN-GROUND',
    headline: 'In-Ground zapuštěné swim spa.',
    text: 'Plně zapuštěná instalace do terénu jako klasický bazén — trvalé řešení, které splyne se zahradou.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Riptide In-Ground Atlantis 6.0 Ultra',
      tagline: 'Zapuštěné swim spa, 6 m délky',
      price: 990000,
      currency: 'Kč',
      brand: 'Riptide',
      image: cdn('5279_psab600g-y-top-view-768x768.png'),
      imageAlt: 'Riptide In-Ground Atlantis 6.0 Ultra',
      href: src('/swim-spa/riptide-in-ground-atlantis-6-0-ultra/'),
      external: true,
    },
    {
      name: 'Riptide In-Ground Atlantis 7.0 Ultra',
      tagline: 'Zapuštěné swim spa, 7 m délky',
      price: 1210000,
      currency: 'Kč',
      brand: 'Riptide',
      image: cdn('5282_psab700g-y-top-view-768x768.png'),
      imageAlt: 'Riptide In-Ground Atlantis 7.0 Ultra',
      href: src('/swim-spa/riptide-in-ground-atlantis-7-0-ultra/'),
      external: true,
    },
    {
      name: 'Riptide In-Ground Atlantis 8.0 Ultra',
      tagline: 'Zapuštěné swim spa, 8 m délky',
      price: 1470000,
      currency: 'Kč',
      brand: 'Riptide',
      image: cdn('5285_psab800g-y-top-view-768x768.png'),
      imageAlt: 'Riptide In-Ground Atlantis 8.0 Ultra',
      href: src('/swim-spa/riptide-in-ground-atlantis-8-0-ultra/'),
      external: true,
    },
  ],

  finalCta: {
    headline: 'Plánujete zapuštěnou instalaci?',
    text: 'Poradíme se stavební přípravou, technikou i harmonogramem realizace na míru vaší zahradě.',
    primaryCta: { label: 'Zpět na Swim Spa', href: '/swim-spa/' },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
