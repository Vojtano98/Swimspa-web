const LINKS = [
  { href: '#uspora', label: 'Úspora' },
  { href: '#reseni', label: 'Swim Spa / Vířivky' },
  { href: '#showroom', label: 'Showroom' },
  { href: '#blog', label: 'Blog' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function renderSectionNav() {
  const links = LINKS.map(
    (l) => `<a href="${l.href}" class="section-nav-link" data-section-link="${l.href}">${l.label}</a>`
  ).join('')

  return `
    <nav class="section-nav" id="section-nav">
      <div class="container section-nav-inner">${links}</div>
    </nav>
  `
}

export function bindSectionNav() {
  const nav = document.getElementById('section-nav')
  if (!nav) return

  const links = nav.querySelectorAll('[data-section-link]')
  const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)

  const onScroll = () => {
    nav.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  if (!('IntersectionObserver' in window) || sections.length === 0) return

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('data-section-link') === `#${id}`)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  sections.forEach((section) => observer.observe(section))
}
