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
              <a href="tel:+420777605789">+420 777 605 789</a>
              <a href="mailto:info@swimspa.cz">info@swimspa.cz</a>
              <span class="footer-address">Nad Vršovskou horou 88/4<br />101 00 Praha 10 – Michle</span>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Sociální sítě</div>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${year} SwimSpa.cz · NO TRADING s.r.o. · IČO 05295823</span>
          <div class="footer-legal">
            <a href="#">Obchodní podmínky</a>
            <a href="#">Ochrana osobních údajů</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
