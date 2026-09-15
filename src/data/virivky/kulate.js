const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const kulate = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Vířivky', href: '/virivky/' },
    { label: 'Kulaté vířivky' },
  ],

  intro: {
    eyebrow: 'VÍŘIVKY · KULATÉ',
    headline: 'Kulaté vířivky.',
    text: 'Symetrický tvar s rovnoměrně rozloženými hydromasážními tryskami — praktická volba na terasu i rohovou zahradní pergolu.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Hanscraft OKA Wave 3',
      tagline: 'Kulatá vířivka s designovým opláštěním',
      price: 142848,
      currency: 'Kč',
      brand: 'Hanscraft',
      image: cdn('4312-2_wave3-02.jpg'),
      imageAlt: 'Hanscraft OKA Wave 3',
      href: src('/virivky/virivka-oka-wave-3/'),
      external: true,
    },
    {
      name: 'Hanscraft HC8',
      tagline: 'Prostorná kulatá vířivka pro více osob',
      price: 214078,
      currency: 'Kč',
      brand: 'Hanscraft',
      image: cdn('4255-7_hanscraft-hc8.jpg'),
      imageAlt: 'Hanscraft HC8',
      href: src('/virivky/virivka-hc-design-hc8/'),
      external: true,
    },
  ],

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Kulaté vířivky nabízíme v různých velikostech i výbavách — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Zpět na vířivky', href: '/virivky/' },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
