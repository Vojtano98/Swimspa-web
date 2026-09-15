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

  intro: {
    eyebrow: 'NAŠE MODELY',
    headline: 'Vyberte si svou vířivku.',
    text: 'Od kompaktních modelů pro dvojici až po velké vířivky pro celou rodinu a přátele — vždy s hydromasáží na míru vašim potřebám.',
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
