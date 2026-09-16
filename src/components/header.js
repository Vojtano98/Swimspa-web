export function renderHeader({ transparent = false } = {}) {
  return `
    <header class="site-header${transparent ? ' site-header--transparent' : ''}" id="site-header">
      <div class="container">
        <a href="/" class="site-logo">SWIMSPA</a>
        <nav>
          <ul class="site-nav" id="site-nav">
            <li><a href="/swim-spa/" data-nav-link>Swim Spa</a></li>
            <li><a href="/virivky/" data-nav-link>Vířivky</a></li>
            <li><a href="#" data-nav-link>Realizace</a></li>
            <li><a href="#technologie" data-nav-link>Technologie</a></li>
            <li><a href="/#showroom" data-nav-link>Kontakt</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="tel:+420777605789" class="header-contact">+420 777 605 789</a>
          <button class="btn btn-primary header-cta" data-open-inquiry>Spočítat cenu</button>
          <button class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span></button>
        </div>
      </div>
    </header>
  `
}

export function bindHeader() {
  const header = document.getElementById('site-header')
  const toggle = document.getElementById('nav-toggle')
  const nav = document.getElementById('site-nav')

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(isOpen))
  })

  nav.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}
