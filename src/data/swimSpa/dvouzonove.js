const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const dvouzonove = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Swim Spa', href: '/swim-spa/' },
    { label: 'Dvouzónové' },
  ],

  intro: {
    eyebrow: 'SWIM SPA · DVOUZÓNOVÉ',
    headline: 'Dvouzónová swim spa.',
    text: 'Samostatná plavecká a masážní zóna — plavete a relaxujete současně, nezávisle na sobě. Ideální pro rodiny a časté společné využití.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Aquatic 3',
      tagline: 'Dvouzónové swim spa s prostornou vířivkou',
      price: 469900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4327-3_aquatic-3-top.jpg'),
      imageAlt: 'Passion Spas Aquatic 3',
      href: src('/swim-spa/viriva-vana-passion-spas-swim-spa-aquatic-3/'),
      external: true,
    },
    {
      name: 'Viking Spas Valhalla',
      tagline: 'Dvouzónové swim spa s odděleným wellness',
      price: 490000,
      currency: 'Kč',
      brand: 'Viking Spas',
      image: cdn('5297-4_valhalla-new-1-jpg.jpg'),
      imageAlt: 'Viking Spas Valhalla',
      href: src('/swim-spa/hanscraft-viking-spas-valhalla/'),
      external: true,
    },
    {
      name: 'Passion Spas Dynamic',
      tagline: 'Dvouzónové swim spa pro sport i relaxaci',
      price: 499900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4369_swimspa-cz-dynamic-1.png'),
      imageAlt: 'Passion Spas Dynamic',
      href: src('/swim-spa/viriva-vana-passion-spas-swim-spa-dynamic/'),
      external: true,
    },
  ],

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Dvouzónová swim spa nabízíme v mnoha velikostech a výbavách — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Zpět na Swim Spa', href: '/swim-spa/' },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
