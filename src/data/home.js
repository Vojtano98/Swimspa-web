// Homepage content — single source of truth, no markup here.

import { savings } from './shared/savings.js'
import { showroom } from './shared/showroom.js'
import { blog } from './shared/blog.js'

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const home = {
  hero: {
    eyebrow: 'SWIMSPA.CZ',
    title: 'Luxus, který si naplníte vodou.',
    tagline:
      'Prémiová swim spa a vířivky pro celoroční relaxaci, plavání i zdraví — vybrané a instalované na míru vaší zahradě.',
    image: '/assets/products/crown-summit/summit-beauty.jpg',
    imageAlt: 'Pár relaxující ve vířivce v zimní zahradě obklopené lesem',
  },

  categories: [
    {
      id: 'swim-spa',
      eyebrow: 'SWIM SPA',
      title: 'Plavání bez kompromisů',
      text: 'Plavecký kanál s protiproudem a hydromasáží v jednom bazénu — sport i relaxace na jednom místě, celoročně.',
      image: img('photo-1622966955854-20f11775f409', 2000),
      imageAlt: 'Prosvětlený bazénový sál s protiproudým plaveckým kanálem',
      href: '/swim-spa/',
      cta: 'Prohlédnout Swim Spa',
    },
    {
      id: 'virivky',
      eyebrow: 'VÍŘIVKY',
      title: 'Hydroterapie pro celou rodinu',
      text: 'Luxusní vířivky až pro 7 osob se špičkovou hydromasáží Marquis Spas.',
      image: '/assets/products/crown-summit/hot-tub-benches.jpg',
      imageAlt: 'Žena relaxující ve vířivce s úložnou lavicí a svíčkou',
      href: '/virivky/',
      cta: 'Prohlédnout vířivky',
    },
  ],

  advantages: {
    eyebrow: 'DVĚ ŘEŠENÍ, JEDNA ZAHRADA',
    headline: 'Co se k vám hodí víc?',
    text: 'Swim spa i vířivka mají odlišné silné stránky. Porovnejte si je a zvolte řešení podle toho, co od zahrady čekáte.',
    columns: [
      {
        id: 'swim-spa',
        eyebrow: 'SWIM SPA',
        title: 'Plavání, sport a rodina v jednom bazénu',
        text: 'Umělý protiproud vytvoří nekonečný plavecký kanál — plavete na místě, nastavíte si intenzitu a k tomu využijete hydromasážní zónu k regeneraci.',
        points: [
          'Celoroční plavání proti umělému proudu, i na malém pozemku',
          'Kombinace sportovního výkonu a hydromasážní relaxace',
          'Nižší provozní náklady a jednodušší údržba než klasický bazén',
          'Možnost polozapuštěné i nadzemní instalace s minimálními výkopy',
        ],
        image: img('photo-1622966955854-20f11775f409', 1400),
        imageAlt: 'Plavecký kanál swim spa s protiproudem',
        href: '/swim-spa/',
        cta: 'Prohlédnout Swim Spa',
      },
      {
        id: 'virivky',
        eyebrow: 'VÍŘIVKY',
        title: 'Hydroterapie a odpočinek pro celou rodinu',
        text: 'Vířivka je o relaxaci a zdraví — cílená hydromasáž zad, nohou i chodidel, prostor pro 2 až 7 osob a společné chvíle s rodinou nebo přáteli.',
        points: [
          'Cílená hydroterapie proti bolesti zad a napjatým svalům',
          'Kapacita od romantických modelů pro dva až po vířivky pro 7 osob',
          'Chytré ovládání teploty, osvětlení i filtrace z mobilu',
          'Kompaktní rozměry — vejde se i na menší terasu či balkón',
        ],
        image: '/assets/products/crown-summit/hot-zones.jpg',
        imageAlt: 'Detail hydromasážních trysek ve vířivce',
        href: '/virivky/',
        cta: 'Prohlédnout vířivky',
      },
    ],
  },

  savings,

  showroom,

  blog,

  why: {
    eyebrow: 'PROČ SWIMSPA.CZ',
    headline: 'Investice do zdraví a klidu.',
    statements: [
      {
        eyebrow: 'ZDRAVÍ A REGENERACE',
        claim: 'Hydroterapie, kterou pocítíte každý den.',
        text: 'Teplá voda a cílená hydromasáž uvolňují svaly, zlepšují krevní oběh a pomáhají tělu i mysli zregenerovat po náročném dni.',
        image: '/assets/products/crown-summit/regal-whitewater-jet.jpg',
        layout: 'image-left',
      },
      {
        eyebrow: 'CELOROČNÍ PROVOZ',
        claim: 'V provozu 365 dní v roce.',
        text: 'Kvalitní izolace a moderní technologie udrží vodu teplou i v mrazivých zimních měsících — swim spa i vířivka fungují bez ohledu na počasí.',
        image: '/assets/products/crown-summit/insulation.jpg',
        layout: 'image-right',
      },
      {
        eyebrow: 'ČAS S RODINOU I PŘÁTELI',
        claim: 'Místo, kam se budete rádi vracet.',
        text: 'Od rychlého osvěžení po ránu až po večer u sklenky vína s přáteli — swim spa i vířivka se stanou přirozeným středem vaší zahrady.',
        image: '/assets/products/crown-summit/bluetooth-audio.jpg',
        layout: 'image-left',
      },
    ],
  },

  benefits: {
    headline: 'Proč zvolit SwimSpa.cz',
    sectionTone: 'tint',
    hero: {
      label: 'Odborné poradenství',
      text: 'Pomůžeme s výběrem modelu, umístěním i technickou přípravou — od první konzultace až po instalaci.',
      image: 'consultation',
    },
    secondary: [
      {
        label: 'Prémiové značky',
        text: 'Nabízíme pouze ověřené světové výrobce s dlouholetou tradicí a kvalitním servisem.',
        image: 'brand',
      },
      {
        label: 'Instalace na klíč',
        text: 'Dopravu, usazení i uvedení do provozu zajistíme kompletně za vás.',
        image: 'install',
      },
    ],
    tertiary: [
      {
        label: 'Individuální nabídka',
        text: 'Cenu i výbavu přizpůsobíme přesně vašim představám a prostoru.',
        image: 'custom',
      },
      {
        label: 'Servis a podpora',
        text: 'I po instalaci jsme vám k dispozici — pravidelný servis i poradenství.',
        image: 'service',
      },
      {
        label: 'Osobní konzultace',
        text: 'Poradíme osobně, telefonicky nebo online — nezávazně a zdarma.',
        image: 'personal',
      },
    ],
  },

  images: {
    feature: {
      consultation: '/assets/products/crown-summit/control-app.jpg',
      brand: img('photo-1667971367922-eccfcda2729b', 1000),
      install: '/assets/products/crown-summit/hot-tub-steps.jpg',
      custom: img('photo-1662150535993-2a8397f99603', 900),
      service: '/assets/products/crown-summit/filtration.jpg',
      personal: '/assets/products/crown-summit/jewel-led.jpg',
    },
  },

  finalCta: {
    headline: 'Najděte to pravé pro vaši zahradu.',
    text: 'Prohlédněte si obě řady, nebo nás kontaktujte pro nezávaznou konzultaci.',
    primaryCta: { label: 'Prohlédnout Swim Spa', href: '/swim-spa/' },
    secondaryCta: { label: 'Prohlédnout vířivky', href: '/virivky/' },
    note: 'Odpovídáme do 24 hodin. Nezávazná konzultace zdarma.',
  },
}
