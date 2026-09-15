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

  intro: {
    eyebrow: 'NAŠE MODELY',
    headline: 'Vyberte si svůj Swim Spa.',
    text: 'Kompaktní bazén s výkonným protiproudem pro kondiční plavání i hydromasáží pro odpočinek — vhodné na zahradu, terasu i do interiéru.',
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
