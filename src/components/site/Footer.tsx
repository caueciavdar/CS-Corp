import Container from '../layout/Container'

const footerNavigation = [
  ['Home', '#home'],
  ['About', '#why-choose'],
  ['Flooring & Interiors', '#divisions'],
  ['Cleaning Services', '#divisions'],
  ['Our Work', '#our-work'],
  ['Contact', '#contact'],
]

export default function Footer({ currentPath = '/' }: { currentPath?: string }) {
  const links = footerNavigation.map(([label, href]) => {
    if (label === 'Flooring & Interiors') return [label, '/flooring-interiors']
    if (label === 'Home') return [label, '/']
    return [label, currentPath === '/flooring-interiors' ? `/#${href.slice(1)}` : href]
  })
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="site-footer__brand-name" href="/">CS Conexion Services Corp.</a>
            <span className="site-footer__logo-note">Official logo pending</span>
            <p className="site-footer__tagline">Better spaces. Brighter lives.</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <h2>Explore</h2>
            {links.map(([label, href]) => <a key={label} href={href} aria-current={href === currentPath ? 'page' : undefined}>{label}</a>)}
          </nav>
          <div className="footer-contact">
            <h2>Contact</h2>
            <a href="tel:+19049555850">(904) 955-5850</a>
            <a href="mailto:caue@conexionservicesfl.com">caue@conexionservicesfl.com</a>
            <div className="footer-social" aria-label="Social media">
              <a href="https://www.instagram.com/conexionservices_fl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573727235297&amp;locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.6v8" /></svg>
              </a>
            </div>
          </div>
          <div className="site-footer__area">
            <h2>Service area</h2>
            <p>Serving Greater Tampa Bay, Sarasota, Jacksonville and surrounding communities.</p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} CS Conexion Services Corp. All rights reserved.</span>
          <span>Flooring &amp; Interiors · Home &amp; Commercial Cleaning</span>
        </div>
      </Container>
    </footer>
  )
}
