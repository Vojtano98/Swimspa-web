import { savings } from '../shared/savings.js'
import { showroom } from '../shared/showroom.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const deep = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Swim Spa', href: '/swim-spa/' },
    { label: 'Hloubková verze DEEP' },
  ],

  intro: {
    eyebrow: 'SWIM SPA · DEEP',
    headline: 'Hloubková verze DEEP.',
    text: 'Zvýšená hloubka bazénu pro vyšší postavy a intenzivnější plavecký trénink proti umělému proudu.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Activity 1 Deep',
      tagline: 'Hloubková verze pro do 4 m délky',
      price: 399900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4348_swimspa-cz-activity1-deep.jpg'),
      imageAlt: 'Passion Spas Activity 1 Deep',
      href: src('/delka-do-4-metru/viriva-vana-passion-spas-swim-spa-activity-1-deep/'),
      external: true,
    },
    {
      name: 'Passion Spas Fitness 1 Deep',
      tagline: 'Hloubková verze pro intenzivní trénink',
      price: 419900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4360_swimspa-cz-fitness-1-1.png'),
      imageAlt: 'Passion Spas Fitness 1 Deep',
      href: src('/swim-spa/viriva-vana-passion-spas-swim-spa-fitness-1-deep/'),
      external: true,
    },
    {
      name: 'Passion Spas Fitness 2 Deep',
      tagline: 'Dvouzónová hloubková verze',
      price: 489900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4366_swimspa-fitness-2-new-1.png'),
      imageAlt: 'Passion Spas Fitness 2 Deep',
      href: src('/swim-spa/viriva-vana-passion-spas-swim-spa-fitness-2-deep/'),
      external: true,
    },
  ],

  savings,

  showroom,

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Hloubkové verze nabízíme napříč velikostmi i zónovým uspořádáním — poradíme s výběrem.',
    primaryCta: { label: 'Nezávazná poptávka', inquiry: true },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
