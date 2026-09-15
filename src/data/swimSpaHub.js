import { product as swimSpa580 } from './products/swimspa-580.js'

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
    text: 'Než vybereme konkrétní model, pomůžeme vám ujasnit, jaký typ swim spa dává smysl pro váš prostor a způsob využití.',
  },

  types: [
    {
      title: 'Jednozónové a dvouzónové',
      text: 'Jednozónové modely spojují plavání a hydromasáž v jednom prostoru, dvouzónové mají samostatnou plaveckou i masážní část pro současné využití více lidmi.',
    },
    {
      title: 'Délka 4–6 m i více',
      text: 'Od kompaktních modelů do 4 m přes střední velikosti 4–6 m až po prémiové řady Grand Spa pro nejnáročnější plavce.',
    },
    {
      title: 'Standardní i hloubková verze (DEEP)',
      text: 'Hloubkové varianty ocení vyšší postavy i milovníci intenzivnějšího plaveckého tréninku.',
    },
    {
      title: 'Nadzemní, částečně i plně zapuštěné',
      text: 'Instalace na terasu bez výkopu, s minimálními výkopovými pracemi, nebo plně zapuštěné do terénu jako klasický bazén — i do interiéru.',
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
  ],

  finalCta: {
    headline: 'Kolik bude stát vaše Swim Spa?',
    text: 'Připravíme vám nabídku včetně dopravy, instalace a doporučeného příslušenství.',
    primaryCta: { label: 'Zobrazit Swim Spa 580', href: '/swim-spa/swim-spa-580/' },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
