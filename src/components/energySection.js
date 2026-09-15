import { icon } from '../utils/icons.js'

export function renderEnergySection(product) {
  const e = product.energy

  return `
    <section class="section section--dark">
      <div class="container energy-layout">
        <div data-reveal>
          <span class="eyebrow">Provoz</span>
          <h2 class="h-section" style="margin-bottom:28px">${e.headline}</h2>
          <div class="energy-number">${e.bigNumber.value}</div>
          <div class="energy-number-label">${e.bigNumber.label}</div>
          <p class="body-l energy-text">${e.text}</p>
          <ul class="energy-points">
            ${e.points.map((p) => `<li>${icon('check', 16)}${p}</li>`).join('')}
          </ul>
        </div>
        <div class="energy-media" data-reveal="scale">
          <img src="${product.images.energy}" alt="Swim Spa 580 v provozu" loading="lazy" />
        </div>
      </div>
    </section>
  `
}
