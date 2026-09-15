export function renderTypesGrid(hub) {
  const i = hub.typesIntro

  const cards = hub.types
    .map(
      (t) => `
      <a class="type-card" href="${t.href}" data-reveal>
        <div class="type-card-media">
          <img src="${t.image}" alt="${t.title}" loading="lazy" />
        </div>
        <div class="type-card-body">
          <h3 class="type-card-title">${t.title}</h3>
          <p class="type-card-text">${t.text}</p>
          <span class="type-card-cta">Zobrazit modely →</span>
        </div>
      </a>
    `
    )
    .join('')

  return `
    <section class="section section--tint">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">${i.eyebrow}</span>
          <h2 class="h-section">${i.headline}</h2>
          <p class="body-l">${i.text}</p>
        </div>
        <div class="types-grid">
          ${cards}
        </div>
      </div>
    </section>
  `
}
