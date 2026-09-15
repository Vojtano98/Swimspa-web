import { product as swimSpa580 } from './products/swimspa-580.js'

const cdn = (path) => `https://cdn.myshoptet.com/usr/www.swimspa.cz/user/shop/detail/${path}`
const src = (slug) => `https://www.swimspa.cz${slug}`

export const swimSpaHub = {
  hero: {
    eyebrow: 'SWIM SPA',
    title: 'Plavání bez kompromisů.',
    tagline:
      'Celoroční plavecký kanál s protiproudem a hydromasáží v jednom bazénu — sport i relaxace na jednom místě.',
    image: swimSpa580.images.hero,
    imageAlt: 'Prosvětlený bazénový sál s protiproudým plaveckým kanálem',
  },

  typesIntro: {
    eyebrow: 'DRUHY SWIM SPA',
    headline: 'Swim spa se přizpůsobí vaší zahradě.',
    text: 'Než vybereme konkrétní model, pomůžeme vám ujasnit, jaký typ swim spa dává smysl pro váš prostor a způsob využití. Klikněte na kategorii a prohlédněte si konkrétní modely.',
  },

  types: [
    {
      title: 'Jednozónové swim spa',
      text: 'Plavání a hydromasáž sdílí jeden prostor — kompaktní řešení pro menší zahrady.',
      image: cdn('4321_aquatic-1-passion-spa-hot-tub-to.jpg'),
      href: '/swim-spa/jednozonove/',
    },
    {
      title: 'Dvouzónové swim spa',
      text: 'Samostatná plavecká a masážní zóna — plavete a relaxujete současně, nezávisle na sobě.',
      image: cdn('4327-3_aquatic-3-top.jpg'),
      href: '/swim-spa/dvouzonove/',
    },
    {
      title: 'Grand Spa',
      text: 'Prémiová řada delších modelů pro nejnáročnější plavce a rodiny, které chtějí maximální prostor.',
      image: cdn('5991_swimspa-turbine5-1.png'),
      href: '/swim-spa/grand-spa/',
    },
    {
      title: 'Hloubková verze DEEP',
      text: 'Zvýšená hloubka pro vyšší postavy a intenzivnější plavecký trénink proti proudu.',
      image: cdn('4348_swimspa-cz-activity1-deep.jpg'),
      href: '/swim-spa/deep/',
    },
    {
      title: 'In-Ground zapuštěné',
      text: 'Plně zapuštěná instalace do terénu jako klasický bazén — pro trvalé řešení na míru zahradě.',
      image: cdn('5279_psab600g-y-top-view-768x768.png'),
      href: '/swim-spa/in-ground/',
    },
  ],

  intro: {
    eyebrow: 'NAŠE MODELY',
    headline: 'Vyberte si svůj Swim Spa.',
    text: 'Kompaktní bazén s výkonným protiproudem pro kondiční plavání i hydromasáží pro odpočinek — vhodné na zahradu, terasu i do interiéru.',
    note: 'Vybíráme pro vás z širší nabídky značek Passion Spas, Poséidon Spa, Marquis Spa, Riptide, Viking Spas a HANSCRAFT — pro další modely a varianty nás kontaktujte, rádi poradíme s výběrem.',
  },

  models: [
    {
      name: swimSpa580.name,
      tagline: swimSpa580.tagline,
      price: swimSpa580.price,
      currency: swimSpa580.currency,
      image: swimSpa580.images.hero,
      imageAlt: swimSpa580.images.heroAlt,
      href: '/swim-spa/swim-spa-580/',
    },
    {
      name: 'Passion Spas Aquatic 1 ECO',
      tagline: 'Jednozónové swim spa do 4 m délky',
      price: 325000,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('4321_aquatic-1-passion-spa-hot-tub-to.jpg'),
      imageAlt: 'Passion Spas Aquatic 1 ECO',
      href: src('/delka-do-4-metru/viriva-vana-passion-spas-swim-spa-aquatic-1-eco/'),
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
    {
      name: 'Passion Spas Turbine 5 Luxury',
      tagline: 'Grand Spa — prémiová řada pro náročné plavce',
      price: 673900,
      currency: 'Kč',
      brand: 'Passion Spas',
      image: cdn('5991_swimspa-turbine5-1.png'),
      imageAlt: 'Passion Spas Turbine 5 Luxury',
      href: src('/swim-spa/passion-spas-turbine-5-luxury-2/'),
      external: true,
    },
    {
      name: 'Riptide In-Ground Atlantis 6.0 Ultra',
      tagline: 'In-Ground zapuštěné swim spa',
      price: 990000,
      currency: 'Kč',
      brand: 'Riptide',
      image: cdn('5279_psab600g-y-top-view-768x768.png'),
      imageAlt: 'Riptide In-Ground Atlantis 6.0 Ultra',
      href: src('/swim-spa/riptide-in-ground-atlantis-6-0-ultra/'),
      external: true,
    },
  ],

  finalCta: {
    headline: 'Kolik bude stát vaše Swim Spa?',
    text: 'Připravíme vám nabídku včetně dopravy, instalace a doporučeného příslušenství.',
    primaryCta: { label: 'Zobrazit Swim Spa 580', href: '/swim-spa/swim-spa-580/' },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
