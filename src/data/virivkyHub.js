import { product as crownSummit } from './products/marquis-crown-summit.js'
import { savings } from './shared/savings.js'
import { showroom } from './shared/showroom.js'
import { blog } from './shared/blog.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const virivkyHub = {
  hero: {
    eyebrow: 'VÍŘIVKY',
    title: 'Hydroterapie pro celou rodinu.',
    tagline:
      'Luxusní vířivky Marquis Spas se špičkovou hydromasáží, chytrým ovládáním a designem, který vydrží celý život.',
    image: '/assets/products/crown-summit/summit-beauty.jpg',
    imageAlt: 'Marquis Crown Summit — vířivka pro 7 osob v exteriéru',
  },

  typesIntro: {
    eyebrow: 'DRUHY VÍŘIVEK',
    headline: 'Vířivka pro každý prostor i příležitost.',
    text: 'Vířivky se liší kapacitou, tvarem i typem konstrukce — klikněte na kategorii a prohlédněte si konkrétní modely.',
  },

  types: [
    {
      title: 'Kapacita 4–5 osob',
      text: 'Rodinné vířivky pro běžné využití — dostatek místa bez zbytečně velkých rozměrů.',
      image: cdn('4150_spa-relax-new-1.png'),
      href: '/virivky/kapacita-4-5/',
    },
    {
      title: 'Kapacita 6 a více osob',
      text: 'Velké vířivky pro rodinu i společenské večery s přáteli.',
      image: cdn('4144-1_spa-recharge-new-1.png'),
      href: '/virivky/kapacita-6-plus/',
    },
    {
      title: 'Kulaté vířivky',
      text: 'Symetrický tvar ideální pro rovnoměrné rozložení hydromasážních trysek.',
      image: cdn('4312-2_wave3-02.jpg'),
      href: '/virivky/kulate/',
    },
    {
      title: 'S lounery (2 a více)',
      text: 'Polohovací lehátka pro pohodlné natažení vleže během hydromasáže.',
      image: cdn('4207_spa-serene-2-new-1.png'),
      href: '/virivky/lounery/',
    },
    {
      title: 'Nafukovací vířivky',
      text: 'Praktická sezónní varianta — snadná instalace i skladování.',
      image: cdn('527_nafukovaci-viriva-vana-netspa-silver.png'),
      href: '/virivky/nafukovaci/',
    },
  ],

  intro: {
    eyebrow: 'NAŠE MODELY',
    headline: 'Vyberte si svou vířivku.',
    text: 'Od kompaktních modelů pro dvojici až po velké vířivky pro celou rodinu a přátele — vždy s hydromasáží na míru vašim potřebám.',
    note: 'Vybíráme pro vás z širší nabídky značek Marquis Spas, Passion Spas, Poséidon Spa a HANSCRAFT — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: crownSummit.name,
      tagline: crownSummit.tagline,
      price: crownSummit.price,
      currency: crownSummit.currency,
      image: '/assets/products/crown-summit/summit-beauty.jpg',
      imageAlt: 'Marquis Crown Summit — vířivka pro 7 osob v exteriéru',
      href: '/virivky/marquis-crown-summit/',
    },
    {
      name: 'Passion Spas Bliss',
      tagline: 'Kompaktní vířivka pro každodenní relaxaci',
      price: 95900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4165_spa-bliss-new-1.png'),
      imageAlt: 'Passion Spas Bliss',
      href: src('/virivky/viriva-vana-passion-spas-bliss/'),
      external: true,
    },
    {
      name: 'Passion Spas Renew',
      tagline: 'Vířivka s vyváženou hydromasáží',
      price: 104900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4153-2_spa-renew-new-1.png'),
      imageAlt: 'Passion Spas Renew',
      href: src('/virivky/renew/'),
      external: true,
    },
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
    {
      name: 'Passion Spas Reflect',
      tagline: 'Rodinná vířivka pro 6 a více osob',
      price: 125000,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('5976_spa-reflect-new-1.png'),
      imageAlt: 'Passion Spas Reflect',
      href: src('/virivky/passion-spas-reflect/'),
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
  ],

  savings,

  showroom,

  blog,

  finalCta: {
    headline: 'Kolik bude stát vaše vířivka?',
    text: 'Připravíme vám nabídku včetně dopravy, instalace a doporučeného příslušenství.',
    primaryCta: { label: 'Nezávazná poptávka', inquiry: true },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
