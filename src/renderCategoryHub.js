import { renderHeader, bindHeader } from './components/header.js'
import { renderHeroHome, bindHeroHome } from './components/home/heroHome.js'
import { renderTypesGrid } from './components/hub/typesGrid.js'
import { renderModelsGrid } from './components/hub/modelsGrid.js'
import { renderSavingsSection, bindSavingsSection } from './components/home/savingsChart.js'
import { renderShowroomSection } from './components/home/showroomSection.js'
import { renderBlogSection } from './components/home/blogSection.js'
import { renderFinalCtaHome } from './components/home/finalCtaHome.js'
import { renderFooter } from './components/footer.js'
import { bindInquiryModal } from './components/inquiryModal.js'

import { initScrollReveal } from './utils/reveal.js'
import { applyBasePath } from './utils/basePath.js'

export function renderCategoryHub(hub) {
  const app = document.getElementById('app')

  app.innerHTML = [
    renderHeader({ transparent: true }),
    renderHeroHome(hub),
    renderTypesGrid(hub),
    renderModelsGrid(hub),
    renderSavingsSection(hub),
    renderShowroomSection(hub),
    renderBlogSection(hub),
    renderFinalCtaHome(hub),
    renderFooter(),
  ].join('')

  applyBasePath(app)

  bindHeader()
  bindHeroHome()
  bindSavingsSection()
  bindInquiryModal({ name: hub.hero.title })

  initScrollReveal()
}
