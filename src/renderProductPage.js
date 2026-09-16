import { renderHeader, bindHeader } from './components/header.js'
import { renderProductHero, bindProductHero } from './components/productHero.js'
import { renderVariantSelector, bindVariantSelector } from './components/variantSelector.js'
import { renderQuickSpecs } from './components/quickSpecs.js'
import { renderTechnicalSpecs, bindTechnicalSpecs } from './components/technicalSpecs.js'
import { renderFeatureStory } from './components/featureStory.js'
import { renderFeatureGrid } from './components/featureGrid.js'
import { renderInteractiveZones, bindInteractiveZones } from './components/interactiveZones.js'
import { renderTechnologySection } from './components/technologyFeature.js'
import { renderMaterialSelector, bindMaterialSelector } from './components/materialSelector.js'
import { renderEnergySection } from './components/energySection.js'
import { renderInstallationSteps, bindInstallationSteps } from './components/installationSteps.js'
import { renderProjectShowcase } from './components/projectShowcase.js'
import { renderProductCTA } from './components/productCTA.js'
import { renderFooter } from './components/footer.js'
import { renderMobileStickyCTA, bindMobileStickyCTA } from './components/mobileStickyCTA.js'
import { bindInquiryModal } from './components/inquiryModal.js'

import { initScrollReveal } from './utils/reveal.js'
import { applyBasePath } from './utils/basePath.js'

export function renderProductPage(product) {
  const app = document.getElementById('app')

  app.innerHTML = [
    renderHeader({ transparent: true }),
    renderProductHero(product),
    renderVariantSelector(product),
    renderQuickSpecs(product),
    renderTechnicalSpecs(product),
    renderFeatureStory(product),
    renderFeatureGrid(product),
    renderInteractiveZones(product),
    renderTechnologySection(product),
    renderMaterialSelector(product),
    renderEnergySection(product),
    renderInstallationSteps(product),
    renderProjectShowcase(product),
    renderProductCTA(product),
    renderFooter(),
    renderMobileStickyCTA(product),
  ].join('')

  applyBasePath(app)

  bindHeader()
  bindProductHero()
  bindVariantSelector(product)
  bindTechnicalSpecs()
  bindInteractiveZones(product)
  bindMaterialSelector()
  bindInstallationSteps(product)
  bindMobileStickyCTA()
  bindInquiryModal(product)

  initScrollReveal()
}
