export function renderShowroomSection(home) {
  const s = home.showroom

  return `
    <section class="section section--white" id="showroom">
      <div class="container showroom-layout">
        <div class="showroom-media" data-reveal>
          <img src="${s.image}" alt="${s.imageAlt}" loading="lazy" />
        </div>
        <div data-reveal>
          <span class="eyebrow">${s.eyebrow}</span>
          <h2 class="h-section">${s.headline}</h2>
          <p class="body-l">${s.text}</p>
          <ul class="showroom-points">
            ${s.points.map((p) => `<li>${p}</li>`).join('')}
          </ul>
          <button class="btn btn-primary" data-open-inquiry>${s.cta.label}</button>
        </div>
      </div>
    </section>
  `
}
