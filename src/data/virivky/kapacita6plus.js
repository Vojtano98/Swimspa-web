const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const kapacita6plus = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Vířivky', href: '/virivky/' },
    { label: 'Kapacita 6 a více osob' },
  ],

  intro: {
    eyebrow: 'VÍŘIVKY · 6+ OSOB',
    headline: 'Vířivky pro 6 a více osob.',
    text: 'Velké vířivky pro celou rodinu i společenské večery s přáteli — dostatek místa pro každého.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Recharge',
      tagline: 'Velká vířivka pro 6 a více osob',
      price: 109900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4144-1_spa-recharge-new-1.png'),
      imageAlt: 'Passion Spas Recharge',
      href: src('/virivky/recharge/'),
      external: true,
    },
    {
      name: 'Passion Spas Rewind',
      tagline: 'Prostorná vířivka s více sedacími pozicemi',
      price: 109900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4049_spa-rewind-new-1.png'),
      imageAlt: 'Passion Spas Rewind',
      href: src('/virivky/viriva-vana-passion-spas-rewind/'),
      external: true,
    },
    {
      name: 'Passion Spas Reflect',
      tagline: 'Rodinná vířivka pro společenské večery',
      price: 125000,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('5976_spa-reflect-new-1.png'),
      imageAlt: 'Passion Spas Reflect',
      href: src('/virivky/passion-spas-reflect/'),
      external: true,
    },
  ],

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Velké vířivky nabízíme v mnoha tvarech i výbavách — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Zpět na vířivky', href: '/virivky/' },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
