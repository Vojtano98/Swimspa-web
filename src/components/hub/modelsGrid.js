import { formatPrice } from '../../utils/format.js'

export function renderModelsGrid(hub) {
  const cards = hub.models
    .map(
      (m) => `
      <a class="model-card" href="${m.href}" data-reveal>
        <div class="model-card-media">
          <img src="${m.image}" alt="${m.imageAlt}" loading="lazy" />
        </div>
        <div class="model-card-content">
          <h3 class="model-card-name">${m.name}</h3>
          <p class="model-card-tagline">${m.tagline}</p>
          <div class="model-card-price">od ${formatPrice(m.price, m.currency)}</div>
          <span class="model-card-cta">Zobrazit detail →</span>
        </div>
      </a>
    `
    )
    .join('')

  return `
    <section class="section section--white" id="modely">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">${hub.intro.eyebrow}</span>
          <h2 class="h-section">${hub.intro.headline}</h2>
          <p class="body-l">${hub.intro.text}</p>
        </div>
        <div class="models-grid">${cards}</div>
      </div>
    </section>
  `
}
