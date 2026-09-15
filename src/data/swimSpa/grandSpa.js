const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const grandSpa = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Swim Spa', href: '/swim-spa/' },
    { label: 'Grand Spa' },
  ],

  intro: {
    eyebrow: 'SWIM SPA · GRAND SPA',
    headline: 'Grand Spa — prémiová řada.',
    text: 'Delší a prostornější modely s výkonnou turbínou pro nejnáročnější plavce a rodiny, které chtějí maximální komfort i prostor pro pohyb.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Turbine 5 Luxury',
      tagline: 'Grand Spa s výkonnou turbínou',
      price: 673900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('5991_swimspa-turbine5-1.png'),
      imageAlt: 'Passion Spas Turbine 5 Luxury',
      href: src('/swim-spa/passion-spas-turbine-5-luxury-2/'),
      external: true,
    },
    {
      name: 'Passion Spas Turbine 6 Luxury',
      tagline: 'Grand Spa pro delší plavecký trénink',
      price: 724900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('5994_swimspa-turbine6-1.png'),
      imageAlt: 'Passion Spas Turbine 6 Luxury',
      href: src('/swim-spa/passion-spas-turbine-6-luxury/'),
      external: true,
    },
    {
      name: 'Passion Spas Turbine 7 Luxury',
      tagline: 'Nejdelší Grand Spa v nabídce Passion Spas',
      price: 775900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('5997_swimspa-turbine7-1.png'),
      imageAlt: 'Passion Spas Turbine 7 Luxury',
      href: src('/swim-spa/passion-spas-turbine-7-luxury/'),
      external: true,
    },
  ],

  finalCta: {
    headline: 'Zajímá vás Grand Spa?',
    text: 'Prémiové modely doporučujeme konzultovat osobně — probereme umístění, techniku i financování.',
    primaryCta: { label: 'Zpět na Swim Spa', href: '/swim-spa/' },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
