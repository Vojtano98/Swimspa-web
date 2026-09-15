import { renderHeader, bindHeader } from './components/header.js'
import { renderHeroHome, bindHeroHome } from './components/home/heroHome.js'
import { renderModelsGrid } from './components/hub/modelsGrid.js'
import { renderFinalCtaHome } from './components/home/finalCtaHome.js'
import { renderFooter } from './components/footer.js'
import { bindInquiryModal } from './components/inquiryModal.js'

import { initScrollReveal } from './utils/reveal.js'

export function renderCategoryHub(hub) {
  const app = document.getElementById('app')

  app.innerHTML = [
    renderHeader(),
    renderHeroHome(hub),
    renderModelsGrid(hub),
    renderFinalCtaHome(hub),
    renderFooter(),
  ].join('')

  bindHeader()
  bindHeroHome()
  bindInquiryModal({ name: hub.hero.title })

  initScrollReveal()
}
