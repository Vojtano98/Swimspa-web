export function renderFeatureStory(product) {
  const s = product.storytelling
  return `
    <section class="section section--white">
      <div class="container">
        <div class="story">
          <div>
            <span class="eyebrow" data-reveal>${s.eyebrow}</span>
            <h2 class="h-section story-headline" data-reveal>${s.headline}</h2>
            <p class="story-sub" data-reveal>${s.subheadline}</p>
            <p class="body-l story-text" data-reveal>${s.text}</p>
            <div class="story-stats" data-reveal>
              ${s.stats.map((stat) => `<span class="story-stat">${stat}</span>`).join('')}
            </div>
          </div>
          <div class="story-media" data-reveal="scale">
            <img src="${product.images.storytelling}" alt="Plavec v Swim Spa 580" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  `
}
