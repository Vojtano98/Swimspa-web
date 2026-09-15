import { savings } from '../shared/savings.js'
import { showroom } from '../shared/showroom.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const jednozonove = {
  breadcrumb: [
    { label: 'Domů', href: '/' },
    { label: 'Swim Spa', href: '/swim-spa/' },
    { label: 'Jednozónové' },
  ],

  intro: {
    eyebrow: 'SWIM SPA · JEDNOZÓNOVÉ',
    headline: 'Jednozónová swim spa.',
    text: 'Plavání proti proudu i hydromasáž sdílí jeden prostor — kompaktní a cenově dostupné řešení pro menší zahrady a terasy.',
    note: 'Vybíráme pro vás z širší nabídky — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: 'Passion Spas Aquatic 1 ECO',
      tagline: 'Swim spa do 4 m délky',
      price: 325000,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4321_aquatic-1-passion-spa-hot-tub-to.jpg'),
      imageAlt: 'Passion Spas Aquatic 1 ECO',
      href: src('/delka-do-4-metru/viriva-vana-passion-spas-swim-spa-aquatic-1-eco/'),
      external: true,
    },
    {
      name: 'Hanscraft Easy Pool',
      tagline: 'Kompaktní jednozónové swim spa',
      price: 330496,
      currency: 'Kč',
      brand: 'Hanscraft',
      image: cdn('4408-4_easypool-top-jpg.jpg'),
      imageAlt: 'Hanscraft Easy Pool',
      href: src('/swim-spa/swim-spa-hanscraft-hc-easy-pool/'),
      external: true,
    },
    {
      name: 'Passion Spas Aquatic 1',
      tagline: 'Swim spa do 4 m délky s LED osvětlením',
      price: 339900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4318-3_aquatic-1-top-met-led.jpg'),
      imageAlt: 'Passion Spas Aquatic 1',
      href: src('/delka-do-4-metru/viriva-vana-passion-spas-swim-spa-aquatic-1/'),
      external: true,
    },
    {
      name: 'Riptide Atlas Hydro 4.4',
      tagline: 'Jednozónové swim spa s hydromasáží',
      price: 400000,
      currency: 'Kč',
      brand: 'Riptide',
      image: cdn('astlas-hydro-44-top-768x768.jpg'),
      imageAlt: 'Riptide Atlas Hydro 4.4',
      href: src('/swim-spa/riptide-atlas-hydro-4-4/'),
      external: true,
    },
  ],

  savings,

  showroom,

  finalCta: {
    headline: 'Nenašli jste svůj model?',
    text: 'Nabízíme širokou paletu jednozónových swim spa — poradíme s výběrem podle rozpočtu i prostoru.',
    primaryCta: { label: 'Nezávazná poptávka', inquiry: true },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
