import { savings } from '../shared/savings.js'
import { showroom } from '../shared/showroom.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const kapacita45 = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Vířivky', href: '/virivky/' },
    { label: 'Kapacita 4–5 osob' },
  ],

  intro: {
    eyebrow: 'VÍŘIVKY · 4–5 OSOB',
    headline: 'Vířivky pro 4 až 5 osob.',
    text: 'Rodinná velikost pro běžné každodenní využití — dost místa pro rodinu i pár přátel, bez zbytečně velkých rozměrů na terase.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Relax',
      tagline: 'Vířivka pro 4–5 osob s vyváženou hydromasáží',
      price: 109900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4150_spa-relax-new-1.png'),
      imageAlt: 'Passion Spas Relax',
      href: src('/virivky/relax/'),
      external: true,
    },
    {
      name: 'Passion Spas Spark',
      tagline: 'Kompaktní rodinná vířivka',
      price: 112000,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('6081_passion-spas-spark.png'),
      imageAlt: 'Passion Spas Spark',
      href: src('/virivky/passion-spas-spark/'),
      external: true,
    },
    {
      name: 'Hanscraft Plug&Play 3',
      tagline: 'Vířivka na jednoduché zapojení do zásuvky',
      price: 117678,
      currency: 'Kč',
      brand: 'Hanscraft',
      image: cdn('4297-1_hanscraft-plug-play-3.jpg'),
      imageAlt: 'Hanscraft Plug&Play 3',
      href: src('/virivky/virivka-plug-play-3/'),
      external: true,
    },
  ],

  savings,

  showroom,

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Rodinné vířivky nabízíme v mnoha tvarech i výbavách — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Nezávazná poptávka', inquiry: true },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
