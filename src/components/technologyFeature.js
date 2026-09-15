export function renderTechnologySection(product) {
  const blocks = product.technologies
    .map(
      (t) => `
      <div class="tech-feature layout-${t.layout}" data-reveal>
        <div class="tech-feature-media">
          <img src="${product.images.technology[t.image]}" alt="${t.claim}" loading="lazy" />
        </div>
        <div>
          <span class="eyebrow">${t.eyebrow}</span>
          <h3 class="tech-feature-claim">${t.claim}</h3>
          <p class="body-l">${t.text}</p>
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section class="section section--white" id="technologie">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">Technologie</span>
          <h2 class="h-section">Postaveno na detailech.</h2>
        </div>
        ${blocks}
      </div>
    </section>
  `
}
