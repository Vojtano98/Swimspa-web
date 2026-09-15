import { renderHeader, bindHeader } from './components/header.js'
import { renderHeroHome, bindHeroHome } from './components/home/heroHome.js'
import { renderCategorySplit } from './components/home/categorySplit.js'
import { renderWhyStatements } from './components/home/whyStatements.js'
import { renderFeatureGrid } from './components/featureGrid.js'
import { renderFinalCtaHome } from './components/home/finalCtaHome.js'
import { renderFooter } from './components/footer.js'
import { bindInquiryModal } from './components/inquiryModal.js'

import { initScrollReveal } from './utils/reveal.js'

export function renderHomePage(home) {
  const app = document.getElementById('app')

  app.innerHTML = [
    renderHeader(),
    renderHeroHome(home),
    renderCategorySplit(home),
    renderWhyStatements(home),
    renderFeatureGrid(home),
    renderFinalCtaHome(home),
    renderFooter(),
  ].join('')

  bindHeader()
  bindHeroHome()
  bindInquiryModal({ name: 'SwimSpa.cz' })

  initScrollReveal()
}
