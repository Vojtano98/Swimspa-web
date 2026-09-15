export function renderMaterialSelector(product) {
  const m = product.materials

  const swatchGroup = (group, name) => `
    <div class="material-group" data-group="${name}">
      <span class="label-sm material-group-label">${group.label}</span>
      <div class="swatches">
        ${group.options
          .map(
            (o, i) => `
            <button class="swatch${i === 0 ? ' is-active' : ''}" data-color="${o.color}" data-name="${o.name}" type="button" aria-label="${o.name}">
              <span class="swatch-dot" style="background:${o.color}"></span>
              <span class="swatch-name">${o.name}</span>
            </button>
          `
          )
          .join('')}
      </div>
    </div>
  `

  return `
    <section class="section section--white" id="provedeni">
      <div class="materials-layout container">
        <div class="materials-preview" data-reveal="scale" style="--swatch-tint: ${m.shell.options[0].color}">
          <img src="${product.images.materials}" alt="Náhled provedení Swim Spa 580" loading="lazy" />
        </div>
        <div data-reveal>
          <span class="eyebrow">Design</span>
          <h2 class="h-section" style="margin-bottom:32px">${m.headline}</h2>
          ${swatchGroup(m.shell, 'shell')}
          ${swatchGroup(m.cladding, 'cladding')}
        </div>
      </div>
    </section>
  `
}

export function bindMaterialSelector() {
  const section = document.getElementById('provedeni')
  if (!section) return
  const preview = section.querySelector('.materials-preview')

  section.querySelectorAll('.material-group').forEach((group) => {
    const swatches = group.querySelectorAll('.swatch')
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        swatches.forEach((s) => s.classList.toggle('is-active', s === swatch))
        if (group.dataset.group === 'shell') {
          preview.style.setProperty('--swatch-tint', swatch.dataset.color)
        }
      })
    })
  })
}
