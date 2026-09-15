export function renderBlogSection(home) {
  const b = home.blog

  const posts = b.posts
    .map(
      (p) => `
      <a class="blog-card" href="${p.href}" target="_blank" rel="noopener">
        <div class="blog-card-media">
          <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" />
        </div>
        <div class="blog-card-body">
          <h3 class="blog-card-title">${p.title}</h3>
          <p class="blog-card-excerpt">${p.excerpt}</p>
          <span class="blog-card-cta">Číst článek →</span>
        </div>
      </a>
    `
    )
    .join('')

  return `
    <section class="section section--white" id="blog">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">${b.eyebrow}</span>
          <h2 class="h-section">${b.headline}</h2>
          <p class="body-l">${b.text}</p>
        </div>
        <div class="blog-grid" data-reveal>
          ${posts}
        </div>
        <div class="blog-more" data-reveal>
          <a class="btn btn-outline" href="${b.moreHref}" target="_blank" rel="noopener">${b.moreLabel}</a>
        </div>
      </div>
    </section>
  `
}
