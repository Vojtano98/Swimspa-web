import { openModal } from '../utils/modal.js'

export function renderInstallationSteps(product) {
  const inst = product.installation

  return `
    <section class="section section--white">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow">Instalace</span>
          <h2 class="h-section">${inst.headline}</h2>
        </div>
        <div class="install-steps" data-reveal>
          ${inst.steps
            .map(
              (s) => `
              <div class="install-step">
                <div class="install-step-number">${s.number}</div>
                <div class="install-step-title">${s.title}</div>
                <p class="install-step-text">${s.text}</p>
              </div>
            `
            )
            .join('')}
        </div>
        <div class="install-footer" data-reveal>
          <button class="btn btn-outline" data-open-install>${inst.cta}</button>
        </div>
      </div>
    </section>
  `
}

export function bindInstallationSteps(product) {
  const btn = document.querySelector('[data-open-install]')
  if (!btn) return
  btn.addEventListener('click', () => {
    const m = product.installation.modal
    openModal(`
      <h3 class="modal-title" id="install-modal-title">${m.title}</h3>
      <p class="modal-subtitle">${m.text}</p>
      <button class="btn btn-primary modal-submit" data-open-inquiry>Domluvit konzultaci</button>
    `, { labelledBy: 'install-modal-title' })
  })
}
