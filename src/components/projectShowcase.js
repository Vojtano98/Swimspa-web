export function renderProjectShowcase(product) {
  const l = product.lifestyle

  return `
    <section class="section section--tight section--white">
      <div class="lifestyle" data-reveal="scale">
        <img src="${product.images.lifestyle}" alt="Swim Spa 580 u rodinného domu" loading="lazy" />
        <div class="lifestyle-content">
          <div>
            <h2 class="lifestyle-headline">${l.headline}</h2>
            <p class="lifestyle-text">${l.text}</p>
          </div>
          <a href="#" class="btn btn-outline">${l.cta}</a>
        </div>
      </div>
    </section>
  `
}
