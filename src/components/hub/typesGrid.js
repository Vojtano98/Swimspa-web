export function renderTypesGrid(hub) {
  const i = hub.typesIntro

  const cards = hub.types
    .map(
      (t) => `
      <div class="type-card" data-reveal>
        <h3 class="type-card-title">${t.title}</h3>
        <p class="type-card-text">${t.text}</p>
      </div>
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
