// Shared heat-pump savings content — reused on the homepage and every category/subcategory page.

export const savings = {
  eyebrow: 'ÚSPORA ENERGIE',
  headline: 'Tepelné čerpadlo sníží náklady na ohřev až o polovinu.',
  text: 'Standardní elektrická topná patrona ohřívá vodu s účinností COP 1 — z 1 kWh elektřiny získáte 1 kWh tepla. Tepelné čerpadlo dokáže i při mrazu -10 °C dosáhnout COP 1,95–2,8, tedy 2–3× více tepla ze stejné spotřeby.',
  bars: [
    {
      label: 'Standardní elektrický ohřev',
      sublabel: 'COP 1,0',
      value: 100,
      display: '100 %',
      tone: 'muted',
    },
    {
      label: 'Ohřev tepelným čerpadlem',
      sublabel: 'COP 1,95–2,8',
      value: 50,
      display: 'až −50 %',
      tone: 'accent',
    },
  ],
  stats: [
    { value: '50 %+', label: 'nižší náklady na ohřev vody' },
    { value: '1–2 roky', label: 'návratnost investice' },
    { value: '45 860 Kč', label: 'pořizovací cena bez DPH (od)' },
  ],
  note: 'Vlastní ověřená data COP a nákladů na ohřev, zdroj: blog SwimSpa.cz.',
}
