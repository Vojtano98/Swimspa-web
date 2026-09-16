import { renderHeader, bindHeader } from './components/header.js'
import { renderHeroHome, bindHeroHome } from './components/home/heroHome.js'
import { renderSectionNav, bindSectionNav } from './components/home/sectionNav.js'
import { renderCategorySplit } from './components/home/categorySplit.js'
import { renderAdvantagesSplit } from './components/home/advantagesSplit.js'
import { renderSavingsSection, bindSavingsSection } from './components/home/savingsChart.js'
import { renderShowroomSection } from './components/home/showroomSection.js'
import { renderWhyStatements } from './components/home/whyStatements.js'
import { renderBlogSection } from './components/home/blogSection.js'
import { renderFeatureGrid } from './components/featureGrid.js'
import { renderFinalCtaHome } from './components/home/finalCtaHome.js'
import { renderFooter } from './components/footer.js'
import { bindInquiryModal } from './components/inquiryModal.js'

import { initScrollReveal } from './utils/reveal.js'

export function renderHomePage(home) {
  const app = document.getElementById('app')

  app.innerHTML = [
    renderHeader({ transparent: true }),
    renderSectionNav(),
    renderHeroHome(home),
    renderCategorySplit(home),
    renderSavingsSection(home),
    renderAdvantagesSplit(home),
    renderShowroomSection(home),
    renderWhyStatements(home),
    renderBlogSection(home),
    renderFeatureGrid(home),
    renderFinalCtaHome(home),
    renderFooter(),
  ].join('')

  bindHeader()
  bindHeroHome()
  bindSectionNav()
  bindSavingsSection()
  bindInquiryModal({ name: 'SwimSpa.cz' })

  initScrollReveal()
}
