export function renderFinalCtaHome(home) {
  const c = home.finalCta

  return `
    <section class="section section--dark" id="kontakt">
      <div class="container final-cta">
        <h2 class="h-section final-cta-headline" data-reveal>${c.headline}</h2>
        <p class="body-l final-cta-text" data-reveal>${c.text}</p>
        <div class="final-cta-actions" data-reveal>
          <a class="btn btn-primary" href="${c.primaryCta.href}">${c.primaryCta.label}</a>
          <a class="btn btn-outline" href="${c.secondaryCta.href}">${c.secondaryCta.label}</a>
        </div>
        <p class="final-cta-note" data-reveal>${c.note}</p>
      </div>
    </section>
  `
}
