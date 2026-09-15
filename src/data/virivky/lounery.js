import { savings } from '../shared/savings.js'
import { showroom } from '../shared/showroom.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const lounery = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Vířivky', href: '/virivky/' },
    { label: 'S lounery' },
  ],

  intro: {
    eyebrow: 'VÍŘIVKY · S LOUNERY',
    headline: 'Vířivky s lounery.',
    text: 'Polohovací lehátka (loungery) přidávají prostor k pohodlnému natažení vleže během hydromasáže zad i nohou.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Serene 2',
      tagline: 'Vířivka se dvěma polohovacími lehátky',
      price: 104900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4207_spa-serene-2-new-1.png'),
      imageAlt: 'Passion Spas Serene 2',
      href: src('/virivky/viriva-vana-passion-spas-serene-2/'),
      external: true,
    },
    {
      name: 'Hanscraft Plug&Play 4',
      tagline: 'Vířivka s lounerem na jednoduché zapojení',
      price: 114785,
      currency: 'Kč',
      brand: 'Hanscraft',
      image: cdn('4300_hanscraft-plug-play-4.jpg'),
      imageAlt: 'Hanscraft Plug&Play 4',
      href: src('/virivky/virivka-plug-play-4/'),
      external: true,
    },
    {
      name: 'Hanscraft OKA Wave 1',
      tagline: 'Kompaktní vířivka s lounerem',
      price: 139009,
      currency: 'Kč',
      brand: 'Hanscraft',
      image: cdn('wave1_02.jpg'),
      imageAlt: 'Hanscraft OKA Wave 1',
      href: src('/virivky/virivka-oka-wave-1/'),
      external: true,
    },
  ],

  savings,

  showroom,

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Vířivky s lounery nabízíme v mnoha velikostech i výbavách — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Nezávazná poptávka', inquiry: true },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
