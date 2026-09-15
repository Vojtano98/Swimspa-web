import { product as crownSummit } from './products/marquis-crown-summit.js'

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
    text: 'Vířivky se liší kapacitou, tvarem i typem konstrukce — pomůžeme vám vybrat tu, která bude sedět vaší terase i způsobu využití.',
  },

  types: [
    {
      title: 'Kapacita 2 až 7+ osob',
      text: 'Od romantických modelů pro dva, přes rodinné varianty pro 4–5 osob, až po velké vířivky pro 6 a více lidí.',
    },
    {
      title: 'Kulaté, obdélníkové i rohové',
      text: 'Tvar volíme podle dispozice terasy nebo zahrady — rohové a atypické tvary šetří místo, obdélníkové nabízí nejvíc sedacích pozic.',
    },
    {
      title: 'S lounery i bez',
      text: 'Polohovací lehátka (loungery) přidávají prostor k natažení v poloze vleže, klasické sezení maximalizuje kapacitu.',
    },
    {
      title: 'Klasické i nafukovací',
      text: 'Pevná konstrukce pro celoroční provoz, nebo praktická nafukovací vířivka pro sezónní použití a snadné skladování.',
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
  ],

  finalCta: {
    headline: 'Kolik bude stát vaše vířivka?',
    text: 'Připravíme vám nabídku včetně dopravy, instalace a doporučeného příslušenství.',
    primaryCta: { label: 'Zobrazit Crown Summit', href: '/virivky/marquis-crown-summit/' },
    secondaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
