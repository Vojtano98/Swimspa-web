import { icon } from '../utils/icons.js'

export function renderTechnicalSpecs(product) {
  const { categories } = product.technicalSpecs

  const tabs = categories
    .map(
      (c, i) => `<button class="tech-tab${i === 0 ? ' is-active' : ''}" data-tab="${c.id}" type="button">${c.label}</button>`
    )
    .join('')

  const panels = categories
    .map(
      (c, i) => `
      <div class="tech-panel${i === 0 ? ' is-active' : ''}" data-panel="${c.id}">
        <div class="tech-grid">
          ${c.items
            .map(
              (item) => `
              <div class="tech-item">
                <span class="tech-item-icon">${icon(item.icon, 26)}</span>
                <span class="tech-item-name">${item.name}</span>
                <span class="tech-item-value">${item.value}</span>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section class="section section--white" id="specifikace">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">Specifikace</span>
          <h2 class="h-section">Technické parametry</h2>
        </div>
        <div class="tech-tabs" role="tablist" data-reveal>${tabs}</div>
        <div data-reveal>${panels}</div>
      </div>
    </section>
  `
}

export function bindTechnicalSpecs() {
  const section = document.getElementById('specifikace')
  if (!section) return
  const tabs = section.querySelectorAll('.tech-tab')
  const panels = section.querySelectorAll('.tech-panel')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab))
      panels.forEach((p) => p.classList.toggle('is-active', p.dataset.panel === id))
    })
  })
}
