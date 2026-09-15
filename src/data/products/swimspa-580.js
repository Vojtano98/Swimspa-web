// Product data config — the single source of truth for the page.
// To create a new product page later: copy this file, change the values,
// point a new HTML entry at it. No markup lives in this file.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const product = {
  slug: 'swim-spa-580',
  category: 'Swim Spa',
  name: 'SWIM SPA 580',
  tagline: 'Plavání a relaxace bez kompromisů.',
  price: 399000,
  currency: 'Kč',

  images: {
    hero: img('photo-1622966955854-20f11775f409', 2400),
    heroAlt: 'Prosvětlený bazénový sál s protiproudým plaveckým kanálem',
    storytelling: img('photo-1731336479985-f0f1530529fe', 2000),
    zonesTop: img('photo-1711110065918-388182f86e00', 2000),
    materials: img('photo-1662150535993-2a8397f99603', 1600),
    lifestyle: img('photo-1613977257363-707ba9348227', 2400),
    energy: img('photo-1600585154340-be6161a56a0c', 1600),
    feature: {
      insulation: img('photo-1708630283392-678476d547f8', 1400),
      hydro: img('photo-1662150535993-2a8397f99603', 1000),
      smart: img('photo-1589443994465-6e59e5a2aed4', 1000),
      counterflow: img('photo-1720135320234-5bff3451f455', 900),
      filtration: img('photo-1499989344695-bd3616da4944', 900),
      construction: img('photo-1621293954908-907159247fc8', 900),
    },
    technology: {
      swimSystem: img('photo-1657363497920-8cd277faca17', 1800),
      smartControl: img('photo-1694125852939-1267174f2770', 1800),
      thermal: img('photo-1668461363398-1fd41bf2ca79', 1800),
    },
  },

  variants: [
    {
      id: 'standard',
      name: 'Standard',
      price: 399000,
      description: 'Vyvážená výbava pro celoroční plavání a relaxaci.',
      highlights: ['Výkonný protiproud', 'Hydromasážní zóna', 'Celoroční provoz'],
      specs: { counterflow: '2 × 3 HP', control: 'Balboa', insulation: 'Vícevrstvá' },
    },
    {
      id: 'performance',
      name: 'Performance',
      price: 459000,
      description: 'Vyšší výkon a chytré ovládání pro náročné plavce.',
      highlights: ['Výkonnější protiproud', 'Rozšířená hydromasáž', 'Smart Control', 'Prémiová izolace'],
      specs: { counterflow: '3 × 3 HP', control: 'Balboa Smart Control', insulation: 'Prémiová vícevrstvá' },
      featured: true,
    },
  ],

  quickSpecs: [
    { value: '5', unit: 'osob', label: 'kapacita' },
    { value: '580 × 225', unit: 'cm', label: 'rozměry' },
    { value: '48', unit: '', label: 'hydromasážních trysek' },
    { value: '1 650', unit: 'l', label: 'objem vody' },
    { value: '365', unit: 'dní', label: 'celoroční provoz' },
  ],

  technicalSpecs: {
    categories: [
      {
        id: 'counterflow',
        label: 'Protiproud',
        items: [
          { icon: 'flow', name: 'Výkon protiproudu', value: '3 × 3 HP' },
          { icon: 'gauge', name: 'Plynulá regulace rychlosti', value: 'Ano' },
          { icon: 'width', name: 'Šířka plaveckého kanálu', value: '225 cm' },
          { icon: 'wave', name: 'Typ proudění', value: 'Laminární, nastavitelné' },
        ],
      },
      {
        id: 'massage',
        label: 'Masáž',
        items: [
          { icon: 'bubble', name: 'Hydromasážní trysky', value: '48 ks' },
          { icon: 'seat', name: 'Masážní pozice', value: '3' },
          { icon: 'foot', name: 'Masáž chodidel', value: 'Ano' },
          { icon: 'air', name: 'Vzduchové trysky', value: '12 ks' },
        ],
      },
      {
        id: 'technology',
        label: 'Technologie',
        items: [
          { icon: 'cpu', name: 'Řídicí systém', value: 'Balboa' },
          { icon: 'heat', name: 'Ohřev', value: '3 kW' },
          { icon: 'filter', name: 'Filtrace', value: 'Automatické cykly' },
          { icon: 'uv', name: 'UV sanitace', value: 'Ano' },
          { icon: 'wifi', name: 'Vzdálené ovládání', value: 'Volitelně' },
        ],
      },
      {
        id: 'construction',
        label: 'Konstrukce a izolace',
        items: [
          { icon: 'shield', name: 'Izolace', value: 'Celoroční vícevrstvá' },
          { icon: 'shell', name: 'Vana', value: 'Litý akrylát' },
          { icon: 'frame', name: 'Konstrukce', value: 'Ocelový rám' },
          { icon: 'cladding', name: 'Obložení', value: 'Kompozitní dřevodekor' },
        ],
      },
      {
        id: 'dimensions',
        label: 'Rozměry',
        items: [
          { icon: 'width', name: 'Délka', value: '580 cm' },
          { icon: 'width', name: 'Šířka', value: '225 cm' },
          { icon: 'depth', name: 'Hloubka', value: '135 cm' },
          { icon: 'weight', name: 'Hmotnost (prázdné)', value: '620 kg' },
          { icon: 'drop', name: 'Objem vody', value: '1 650 l' },
        ],
      },
    ],
  },

  storytelling: {
    eyebrow: 'Plavecký zážitek',
    headline: 'Navrženo pro skutečné plavání.',
    subheadline:
      'Výkonný protiproud vytváří souvislý proud vody, který můžete přizpůsobit tempu svého tréninku.',
    text: 'Ať plavete kondičně, nebo si jen chcete protáhnout tělo, systém plynule reaguje na váš rytmus — bez otáčení, bez kompromisů v prostoru.',
    stats: ['Plynulá regulace', 'Výkonný protiproud', 'Trénink bez otáčení'],
  },

  benefits: {
    headline: 'Klíčové výhody Swim Spa 580',
    hero: {
      label: 'Celoroční provoz',
      text: 'Vícevrstvá izolace pomáhá udržovat teplotu vody a snižovat energetické ztráty i během zimních měsíců.',
      image: 'insulation',
    },
    secondary: [
      { label: 'Hydromasáž', text: '48 trysek rozmístěných do tří masážních pozic pro cílenou i celkovou relaxaci.', image: 'hydro' },
      { label: 'Smart Control', text: 'Teplota, filtrace a osvětlení pod kontrolou z jednoho ovládacího panelu.', image: 'smart' },
    ],
    tertiary: [
      { label: 'Protiproud', text: 'Plynule nastavitelný výkon pro trénink i odpočinek.', image: 'counterflow' },
      { label: 'Filtrace', text: 'Automatické cykly udržují vodu čistou bez zásahu obsluhy.', image: 'filtration' },
      { label: 'Konstrukce', text: 'Ocelový rám a litý akrylát pro dlouhou životnost.', image: 'construction' },
    ],
  },

  zones: {
    headline: 'Dvě zóny. Jeden prostor.',
    hotspots: [
      { id: 'swim', x: 22, y: 45, title: 'Plavecká zóna', text: 'Výkonný protiproud pro kondiční i rekreační plavání.' },
      { id: 'seat', x: 62, y: 30, title: 'Hydromasážní sedadlo', text: 'Cílená masáž zad a ramen.' },
      { id: 'lounger', x: 78, y: 62, title: 'Lehátko', text: 'Relaxace s masáží celého těla.' },
      { id: 'feet', x: 68, y: 78, title: 'Masáž chodidel', text: 'Trysky umístěné ve spodní části.' },
    ],
  },

  technologies: [
    {
      id: 'swim-system',
      eyebrow: 'PERFORMANCE SWIM SYSTEM',
      claim: 'Proud, který se přizpůsobí vám.',
      text: 'Plynulá regulace výkonu umožňuje nastavit protiproud přesně podle tempa a stylu plavání — od pomalého rozplavání až po intenzivní trénink.',
      image: 'swimSystem',
      layout: 'image-left',
    },
    {
      id: 'smart-control',
      eyebrow: 'SMART CONTROL',
      claim: 'Vše pod kontrolou, na dotek.',
      text: 'Ovládání teploty, filtrace a osvětlení z jednoho přehledného panelu — doma i na dálku.',
      image: 'smartControl',
      layout: 'image-right',
    },
    {
      id: 'thermal',
      eyebrow: 'THERMAL PROTECTION',
      claim: 'Navrženo pro efektivní celoroční provoz.',
      text: 'Vícevrstvá izolace vany a krytu minimalizuje tepelné ztráty i v mrazivých zimních měsících.',
      image: 'thermal',
      layout: 'image-left',
    },
  ],

  materials: {
    headline: 'Vyberte si provedení.',
    shell: {
      label: 'Vnitřní vana',
      options: [
        { id: 'pearl-white', name: 'Pearl White', color: '#F4F1EC' },
        { id: 'silver-marble', name: 'Silver Marble', color: '#B9BDC2' },
        { id: 'midnight', name: 'Midnight', color: '#20242B' },
      ],
    },
    cladding: {
      label: 'Obložení',
      options: [
        { id: 'natural-oak', name: 'Natural Oak', color: '#B08A5C' },
        { id: 'graphite', name: 'Graphite', color: '#4B4E52' },
        { id: 'black', name: 'Black', color: '#111111' },
      ],
    },
  },

  energy: {
    headline: 'Relaxujte. Neřešte spotřebu.',
    text: 'Vícevrstvá izolace, úsporná cirkulace a automatické filtrační cykly udržují provozní náklady pod kontrolou po celý rok.',
    bigNumber: { value: '365', label: 'dní v roce' },
    points: ['Vícevrstvá izolace', 'Úsporná cirkulace', 'Automatické filtrační cykly'],
  },

  installation: {
    headline: 'Co je potřeba před instalací?',
    steps: [
      { number: '01', title: 'Výběr místa', text: 'Poradíme s umístěním na terase, zahradě i uvnitř objektu.' },
      { number: '02', title: 'Příprava podkladu', text: 'Zpevněná a rovná plocha odpovídající hmotnosti napuštěného bazénu.' },
      { number: '03', title: 'Elektrická příprava', text: 'Samostatný jištěný okruh dle technické specifikace.' },
      { number: '04', title: 'Doprava a instalace', text: 'Dopravíme, usadíme a uvedeme do provozu.' },
    ],
    cta: 'Zobrazit stavební připravenost',
    modal: {
      title: 'Stavební připravenost',
      text: 'Shrnutí požadavků na elektrickou přípojku, podklad a přístupovou cestu vám rádi zašleme jako PDF, nebo probereme na nezávazné konzultaci.',
    },
  },

  lifestyle: {
    headline: 'Swim Spa u vás doma.',
    text: 'Od výběru místa po první plavání — provedeme vás celým procesem.',
    cta: 'Prohlédnout realizace',
  },

  finalCta: {
    headline: 'Kolik bude stát vaše Swim Spa 580?',
    text: 'Připravíme vám nabídku včetně dopravy, instalace a doporučeného příslušenství.',
    primaryCta: 'Spočítat finální cenu',
    secondaryCta: 'Domluvit konzultaci',
    note: 'Odpovídáme do 24 hodin. Nezávazná kalkulace.',
  },
}
