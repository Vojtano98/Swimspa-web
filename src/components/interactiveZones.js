import { icon } from '../utils/icons.js'

export function renderInteractiveZones(product) {
  const z = product.zones

  const hotspots = z.hotspots
    .map(
      (h, i) => `
      <button class="zone-hotspot${i === 0 ? ' is-active' : ''}" style="left:${h.x}%; top:${h.y}%" data-zone="${h.id}" type="button" aria-label="${h.title}">
        ${icon('plus', 16)}
      </button>
    `
    )
    .join('')

  const tabs = z.hotspots
    .map(
      (h, i) => `
      <button class="zones-tab${i === 0 ? ' is-active' : ''}" data-zone-tab="${h.id}" type="button">${h.title}</button>
    `
    )
    .join('')

  return `
    <section class="section section--white" id="zony">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">Layout</span>
          <h2 class="h-section">${z.headline}</h2>
        </div>
        <div class="zones-layout">
          <div class="zones-visual" data-reveal>
            <img src="${product.images.zonesTop}" alt="Pohled na ${product.name} shora" loading="lazy" />
            ${hotspots}
          </div>
          <div class="zones-detail" data-reveal>
            <div class="zones-tabs">${tabs}</div>
            <div class="zones-detail-text">
              <h3 class="zones-detail-title">${z.hotspots[0].title}</h3>
              <p class="zones-detail-body">${z.hotspots[0].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export function bindInteractiveZones(product) {
  const section = document.getElementById('zony')
  if (!section) return
  const hotspots = section.querySelectorAll('.zone-hotspot')
  const tabs = section.querySelectorAll('.zones-tab')
  const titleEl = section.querySelector('.zones-detail-title')
  const bodyEl = section.querySelector('.zones-detail-body')

  const activate = (id) => {
    const zone = product.zones.hotspots.find((h) => h.id === id)
    if (!zone) return
    hotspots.forEach((h) => h.classList.toggle('is-active', h.dataset.zone === id))
    tabs.forEach((t) => t.classList.toggle('is-active', t.dataset.zoneTab === id))
    titleEl.textContent = zone.title
    bodyEl.textContent = zone.text
  }

  hotspots.forEach((h) => h.addEventListener('click', () => activate(h.dataset.zone)))
  tabs.forEach((t) => t.addEventListener('click', () => activate(t.dataset.zoneTab)))
}
