import { savings } from '../shared/savings.js'
import { showroom } from '../shared/showroom.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const nafukovaci = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Vířivky', href: '/virivky/' },
    { label: 'Nafukovací' },
  ],

  intro: {
    eyebrow: 'VÍŘIVKY · NAFUKOVACÍ',
    headline: 'Nafukovací vířivky.',
    text: 'Praktická sezónní varianta pro terasu i chalupu — snadná instalace, jednoduché skladování mimo sezónu.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'NetSpa Silver',
      tagline: 'Nafukovací vířivka pro 4–6 osob',
      price: 8924,
      currency: 'Kč',
      brand: 'NetSpa',
      image: cdn('527_nafukovaci-viriva-vana-netspa-silver.png'),
      imageAlt: 'NetSpa Silver',
      href: src('/nafukovaci-virivky-netspa/nafukovaci-viriva-vana-netspa-silver/'),
      external: true,
    },
    {
      name: 'NetSpa Montana 4',
      tagline: 'Nafukovací vířivka pro sezónní použití',
      price: 9121,
      currency: 'Kč',
      brand: 'NetSpa',
      image: cdn('1475_nafukovaci-viriva-vana-netspa-montana-4.jpg'),
      imageAlt: 'NetSpa Montana 4',
      href: src('/nafukovaci-virivky-netspa/nafukovaci-viriva-vana-netspa-montana-4/'),
      external: true,
    },
    {
      name: 'NetSpa Izy',
      tagline: 'Kompaktní nafukovací vířivka',
      price: 10490,
      currency: 'Kč',
      brand: 'NetSpa',
      image: cdn('1655_nafukovaci-viriva-vana-netspa-izy.jpg'),
      imageAlt: 'NetSpa Izy',
      href: src('/nafukovaci-virivky-netspa/nafukovaci-viriva-vana-netspa-izy/'),
      external: true,
    },
  ],

  savings,

  showroom,

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Nafukovací vířivky nabízíme od více značek a velikostí — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Nezávazná poptávka', inquiry: true },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
