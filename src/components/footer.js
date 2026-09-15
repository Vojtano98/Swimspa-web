export function renderFooter() {
  const year = new Date().getFullYear()
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">SWIMSPA</span>
            <p class="footer-tagline">Prémiová swim spa a vířivky pro celoroční provoz.</p>
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <div class="footer-col-title">Nabídka</div>
              <a href="/swim-spa/">Swim Spa</a>
              <a href="/virivky/">Vířivky</a>
              <a href="#">Realizace</a>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Kontakt</div>
              <a href="tel:+420000000000">+420 000 000 000</a>
              <a href="mailto:info@swimspa.cz">info@swimspa.cz</a>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Sociální sítě</div>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${year} SwimSpa.cz</span>
          <div class="footer-legal">
            <a href="#">Obchodní podmínky</a>
            <a href="#">Ochrana osobních údajů</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
