// Real product: Marquis Spas Crown Summit. Spec values sourced from the
// manufacturer/distributor product sheet supplied by the client — see
// conversation history for the original Czech description.
// Real manufacturer photos (marquisspas.com + marquishottubs.com "Features of
// Summit Hot Tub" section) are wired in for every slot except materials and
// energy — no matching real photo exists for those, so they stay Unsplash.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const product = {
  slug: 'marquis-crown-summit',
  category: 'Vířivka',
  name: 'Marquis Crown Summit',
  tagline: 'Sedm míst. Čtyři masážní pozice. Nekompromisní hydroterapie.',
  price: 730000,
  currency: 'Kč',
  heroStyle: 'cutout',

  images: {
    hero: '/assets/products/crown-summit/summit-beauty.jpg',
    heroAlt: 'Marquis Crown Summit — vířivka pro 7 osob v exteriéru',
    zonesTop: '/assets/products/crown-summit/photo-1.jpg',
    storytelling: '/assets/products/crown-summit/regal-whitewater-jet.jpg',
    materials: img('photo-1662150535993-2a8397f99603', 1600),
    lifestyle: '/assets/products/crown-summit/environments.jpg',
    energy: img('photo-1600585154340-be6161a56a0c', 1600),
    feature: {
      insulation: '/assets/products/crown-summit/insulation.jpg',
      hydro: '/assets/products/crown-summit/photo-2.jpg',
      smart: '/assets/products/crown-summit/control-app.jpg',
      hotZones: '/assets/products/crown-summit/hot-zones.jpg',
      filtration: '/assets/products/crown-summit/filtration.jpg',
      construction: img('photo-1621293954908-907159247fc8', 900),
      ledLighting: '/assets/products/crown-summit/jewel-led.jpg',
    },
    technology: {
      rhkJets: '/assets/products/crown-summit/rhk-jets-detail.jpg',
      dynamicFlow: '/assets/products/crown-summit/dynamic-flow.jpg',
      microSilk: '/assets/products/crown-summit/microsilk.jpg',
      bluetoothAudio: '/assets/products/crown-summit/bluetooth-audio.jpg',
      coverCompanion: '/assets/products/crown-summit/cover-companion.jpg',
      hotTubSteps: '/assets/products/crown-summit/hot-tub-steps.jpg',
      hotTubBenches: '/assets/products/crown-summit/hot-tub-benches.jpg',
    },
  },

  variants: [
    {
      id: 'standard',
      name: 'Standard',
      price: 730000,
      description: 'Kompletní hydromasážní výbava Crown Summit v základním provedení.',
      highlights: ['65 hydromasážních trysek', '4 H.O.T. zóny', 'Řídicí systém Balboa', 'DuraWood bednění'],
      specs: { jets: '65 ks', control: 'Balboa Touch 3', insulation: 'Full foam + Moisturebloc' },
    },
    {
      id: 'performance',
      name: 'Performance',
      price: 790000,
      description: 'Standard rozšířený o MicroSilk®, Wi-Fi a prémiové osvětlení.',
      highlights: ['MicroSilk® systém', 'Wi-Fi + Bluetooth audio', 'Jewel™ LED osvětlení', 'Heat Pump Ready'],
      specs: { jets: '65 ks + 2× MicroSilk', control: 'Balboa Touch 3 + CMS Wi-Fi', insulation: 'Full foam + Moisturebloc' },
      featured: true,
    },
  ],

  quickSpecs: [
    { value: '7', unit: 'osob', label: 'kapacita' },
    { value: '239 × 239', unit: 'cm', label: 'rozměry' },
    { value: '65', unit: '', label: 'hydromasážních trysek' },
    { value: '1 779', unit: 'l', label: 'objem vody' },
    { value: '4', unit: '', label: 'H.O.T. zóny' },
  ],

  technicalSpecs: {
    categories: [
      {
        id: 'massage',
        label: 'Masáž',
        items: [
          { icon: 'seat', name: 'Počet sedů / lehů', value: '4 / 3' },
          { icon: 'bubble', name: 'Masážní pozice', value: 'Deep-Tissue, Shiatsu, Relaxation, Swedish' },
          { icon: 'flow', name: 'RHK™ trysky', value: 'až 581 l/min na trysku' },
          { icon: 'wave', name: 'Gejzírové trysky', value: 'až 246 l/min' },
        ],
      },
      {
        id: 'jets-pumps',
        label: 'Trysky a čerpadla',
        items: [
          { icon: 'bubble', name: 'Celkem hydromasážních trysek', value: '65 ks' },
          { icon: 'gauge', name: 'Hydromasážní čerpadlo 1', value: '2rychlostní, 908 l/min' },
          { icon: 'gauge', name: 'Hydromasážní čerpadlo 2', value: '2rychlostní, 908 l/min' },
          { icon: 'flow', name: 'Celkový průtok', value: '1 817 l/min' },
          { icon: 'filter', name: 'Filtrace', value: 'duální Vortex Skimmer, 180 sq ft' },
        ],
      },
      {
        id: 'technology',
        label: 'Technologie',
        items: [
          { icon: 'cpu', name: 'Řídicí systém', value: 'Balboa' },
          { icon: 'cpu', name: 'Ovládací panel', value: 'Balboa Touch 3' },
          { icon: 'heat', name: 'Ohřev', value: '3 kW, plnoprůtokový titanový' },
          { icon: 'wifi', name: 'Wi-Fi / Bluetooth audio', value: 'volitelně (CMS, subwoofer)' },
          { icon: 'uv', name: 'Ozonizátor', value: 'vysokovýkonný Corona' },
        ],
      },
      {
        id: 'construction',
        label: 'Konstrukce a izolace',
        items: [
          { icon: 'shell', name: 'Vana (DuraShell)', value: 'vysoce odolný akrylát' },
          { icon: 'cladding', name: 'Bednění', value: 'DuraWood, all-weather' },
          { icon: 'shield', name: 'Izolace', value: 'full foam + parozábrana Moisturebloc' },
          { icon: 'frame', name: 'Konstrukce šasi', value: 'Synthetic + Durashell podlaha' },
        ],
      },
      {
        id: 'dimensions',
        label: 'Rozměry',
        items: [
          { icon: 'width', name: 'Rozměry D × Š × V', value: '239 × 239 × 90 cm' },
          { icon: 'drop', name: 'Objem vody', value: '1 779 l' },
          { icon: 'weight', name: 'Váha vany bez vody', value: '499 kg' },
          { icon: 'weight', name: 'Váha vany napuštěné', value: '2 277 kg' },
          { icon: 'width', name: 'Elektrické napětí', value: '230/380 V' },
        ],
      },
    ],
  },

  storytelling: {
    eyebrow: 'RHK™ hydromasáž',
    headline: 'Navrženo pro dokonalou hydroterapii.',
    subheadline:
      'Regal Hydro Kinetic™ trysky dosahují průtoku až 581 litrů vody za minutu na jednu trysku.',
    text: 'Čím jednodušší cesta od sání vody po trysku, tím silnější a přesnější masáž. Marquis „high-flow“ architektura přivádí správný objem a tlak vody přesně na ta místa těla, která to nejvíce potřebují.',
    stats: ['65 hydromasážních trysek', '4 H.O.T. zóny', 'Dynamic Flow Control'],
  },

  benefits: {
    headline: 'Klíčové výhody Crown Summit',
    hero: {
      label: 'Celoroční provoz',
      text: 'Plná pěnová izolace s parozábranou Moisturebloc udržuje teplotu vody a snižuje energetické ztráty i v mrazivých měsících.',
      image: 'insulation',
    },
    secondary: [
      { label: 'Hydromasáž', text: '65 trysek RHK™ ve čtyřech specializovaných masážních pozicích — Deep-Tissue, Shiatsu, Relaxation i Swedish.', image: 'hydro' },
      { label: 'Wi-Fi & Smart Control', text: 'Aplikace ControlMySpa a dotykový panel Balboa Touch 3 pro ovládání odkudkoliv.', image: 'smart' },
    ],
    tertiary: [
      { label: 'H.O.T. zóny', text: 'Cílený tlak na ramena, bedra, chodidla a krk přes ventily 3-2-1 Zone Control™.', image: 'hotZones' },
      { label: 'Filtrace', text: 'Duální Vortex Skimmer a ConstantClean+ udržují vodu čistou automaticky.', image: 'filtration' },
      { label: 'Konstrukce', text: 'DuraShell akrylát a all-weather bednění DuraWood pro dlouhou životnost.', image: 'construction' },
      { label: 'Jewel™ LED osvětlení', text: 'Volitelné multibarevné podvodní i venkovní osvětlení pro večerní relaxaci.', image: 'ledLighting' },
    ],
  },

  zones: {
    headline: 'Čtyři pozice. Jedna vířivka.',
    hotspots: [
      { id: 'deep-tissue', x: 22, y: 24, title: 'Deep-Tissue Massage Seat', text: 'Cílené trysky Target Touch pro hlubokou tkáňovou masáž a úlevu od chronických bolestí.' },
      { id: 'shiatsu', x: 20, y: 52, title: 'Shiatsu Massage Seat', text: 'Rotační trysky Pulse Touch pro uvolnění a navrácení tělesné rovnováhy.' },
      { id: 'relaxation', x: 68, y: 40, title: 'Relaxation Massage Seat', text: 'Jemná a vytrvalá masáž tryskami Multi-Touch pro klidné znovunalezení rovnováhy.' },
      { id: 'swedish', x: 24, y: 78, title: 'Swedish Massage Seat', text: 'Kombinace hluboké tkáňové masáže s rozmanitostí pocitů pro komplexní terapii.' },
    ],
  },

  technologies: [
    {
      id: 'rhk-jets',
      eyebrow: 'RHK™ HYDROMASÁŽNÍ TRYSKY',
      claim: 'Až 581 litrů vody za minutu na jednu trysku.',
      text: 'Regal Hydro Kinetic (RHK™) trysky jsou tím nejvýkonnějším, co Marquis do vířivky umí nainstalovat — směrové, multiportní i rotační, tlakově regulovatelné a zaměnitelné podle potřeby.',
      image: 'rhkJets',
      layout: 'image-left',
    },
    {
      id: 'dynamic-flow',
      eyebrow: 'DYNAMIC FLOW CONTROL™',
      claim: 'Sílu masáže ovládáte jedním otočením.',
      text: 'Otočením páčky směrem k červené aktivujete H.O.T. zónu, směrem k modré klasické trysky sedadla. Cokoliv mezi tím aktivuje obě zóny současně.',
      image: 'dynamicFlow',
      layout: 'image-right',
    },
    {
      id: 'microsilk',
      eyebrow: 'MicroSilk®',
      claim: 'Mikrobublinky kyslíku pro hedvábnou pokožku.',
      text: 'MicroSilk® obklopuje tělo jemným perlivým mrakem kyslíku, hydratuje pokožku a stimuluje krevní oběh i buněčnou regeneraci.',
      image: 'microSilk',
      layout: 'image-left',
    },
    {
      id: 'bluetooth-audio',
      eyebrow: 'BLUETOOTH AUDIO',
      claim: 'Vaše playlisty, přímo u vody.',
      text: 'Připojte telefon přes Bluetooth a poslouchejte hudbu přes vodotěsné reproduktory a subwoofer integrované ve vířivce — hlasitost i skladby ovládáte z ovládacího panelu.',
      image: 'bluetoothAudio',
      layout: 'image-right',
    },
    {
      id: 'cover-companion',
      eyebrow: 'COVER COMPANION™',
      claim: 'Termokryt zvednete jednou rukou.',
      text: 'Zvedák Cover Companion™ šetří záda i čas — otevření a zavření těžkého termokrytu zvládnete plynulým pohybem bez námahy.',
      image: 'coverCompanion',
      layout: 'image-left',
    },
    {
      id: 'steps',
      eyebrow: 'SCHŮDKY',
      claim: 'Pohodlný nástup ke každému sedu.',
      text: 'Originální schůdky Marquis jsou vyrobené ze stejných odolných materiálů jako vířivka a perfektně s ní barevně ladí.',
      image: 'hotTubSteps',
      layout: 'image-right',
    },
    {
      id: 'bench',
      eyebrow: 'ÚLOŽNÁ LAVICE',
      claim: 'Druhý schod, který zároveň slouží jako úložný prostor.',
      text: 'Otevíratelná lavice od Marquis ukryje ručníky i chemii k údržbě vody a zároveň funguje jako pohodlný druhý schod k vířivce.',
      image: 'hotTubBenches',
      layout: 'image-left',
    },
  ],

  materials: {
    headline: 'Barvy dle vzorníku výrobce.',
    shell: {
      label: 'Vana (orientační odstíny)',
      options: [
        { id: 'alpine-white', name: 'Alpine White', color: '#F3F1EC' },
        { id: 'sterling-silver', name: 'Sterling Silver', color: '#B9BDC2' },
        { id: 'black-pearl', name: 'Black Pearl', color: '#1D2024' },
      ],
    },
    cladding: {
      label: 'DuraWood bednění (orientační odstíny)',
      options: [
        { id: 'cognac', name: 'Cognac', color: '#8B5A38' },
        { id: 'fieldstone', name: 'Fieldstone', color: '#7C7A72' },
        { id: 'java', name: 'Java', color: '#2A211C' },
      ],
    },
  },

  energy: {
    headline: 'Relaxujte. Neřešte spotřebu.',
    text: 'Plná pěnová izolace, parozábrana Moisturebloc a automatizovaný SMART CLEAN systém filtračních cyklů drží provozní náklady pod kontrolou po celý rok.',
    bigNumber: { value: '365', label: 'dní v roce' },
    points: ['Full foam izolace + Moisturebloc', 'DuraShell vysoce odolný akrylát', 'SMART CLEAN automatické filtrační cykly'],
  },

  installation: {
    headline: 'Co je potřeba před instalací?',
    steps: [
      { number: '01', title: 'Výběr místa', text: 'Poradíme s umístěním na terase, zahradě i uvnitř objektu.' },
      { number: '02', title: 'Příprava podkladu', text: 'Zpevněná a rovná plocha — napuštěná vířivka váží přes 2 200 kg.' },
      { number: '03', title: 'Elektrická příprava', text: 'Samostatný jištěný okruh 230/380 V dle technické specifikace.' },
      { number: '04', title: 'Doprava a instalace', text: 'Dopravíme, usadíme a uvedeme do provozu.' },
    ],
    cta: 'Zobrazit stavební připravenost',
    modal: {
      title: 'Stavební připravenost',
      text: 'Shrnutí požadavků na elektrickou přípojku, podklad a přístupovou cestu vám rádi zašleme jako PDF, nebo probereme na nezávazné konzultaci.',
    },
  },

  lifestyle: {
    headline: 'Vířivka u vás doma.',
    text: 'Od výběru místa po první napuštění — provedeme vás celým procesem.',
    cta: 'Prohlédnout realizace',
  },

  finalCta: {
    headline: 'Kolik bude stát vaše Crown Summit?',
    text: 'Připravíme vám nabídku včetně dopravy, instalace a doporučeného příslušenství.',
    primaryCta: 'Spočítat finální cenu',
    secondaryCta: 'Domluvit konzultaci',
    note: 'Odpovídáme do 24 hodin. Nezávazná kalkulace.',
  },
}
