import { renderHeader, bindHeader } from './components/header.js'
import { renderBreadcrumb } from './components/breadcrumb.js'
import { renderModelsGrid } from './components/hub/modelsGrid.js'
import { renderFinalCtaHome } from './components/home/finalCtaHome.js'
import { renderFooter } from './components/footer.js'
import { bindInquiryModal } from './components/inquiryModal.js'

import { initScrollReveal } from './utils/reveal.js'

export function renderSubcategoryPage(sub) {
  const app = document.getElementById('app')

  app.innerHTML = [
    renderHeader(),
    renderBreadcrumb(sub.breadcrumb),
    renderModelsGrid(sub),
    renderFinalCtaHome(sub),
    renderFooter(),
  ].join('')

  bindHeader()
  bindInquiryModal({ name: sub.intro.headline })

  initScrollReveal()
}
