export function renderProductCTA(product) {
  const c = product.finalCta

  return `
    <section class="section section--dark" id="poptavka">
      <div class="container final-cta">
        <h2 class="h-section final-cta-headline" data-reveal>${c.headline}</h2>
        <p class="body-l final-cta-text" data-reveal>${c.text}</p>
        <div class="final-cta-actions" data-reveal>
          <button class="btn btn-primary" data-open-inquiry>${c.primaryCta}</button>
          <button class="btn btn-outline" data-open-inquiry>${c.secondaryCta}</button>
        </div>
        <p class="final-cta-note" data-reveal>${c.note}</p>
      </div>
    </section>
  `
}
