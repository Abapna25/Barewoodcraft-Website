import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Barewoodcraft homepage">
              Bare<span>wood</span>craft
            </Link>
            <p className="footer__tagline">
              Crafting heirloom hardwood furniture and custom built-ins — built with care, intention, and a love for the handmade.
            </p>
          </div>

          <nav className="footer__col" aria-label="Services navigation">
            <span className="footer__col-title">Woodworking</span>
            <Link to="/woodworking" className="footer__link">Custom Furniture</Link>
            <Link to="/woodworking" className="footer__link">Live-Edge Slabs</Link>
            <Link to="/woodworking" className="footer__link">Built-Ins &amp; Shelving</Link>
            <Link to="/woodworking" className="footer__link">DIY Projects</Link>
          </nav>

          <nav className="footer__col" aria-label="Company navigation">
            <span className="footer__col-title">Company</span>
            <Link to="/about" className="footer__link">About</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </nav>
        </div>

        <div className="footer__bottom" style={{ flexDirection: 'column', gap: '0.625rem', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://barewedcrafts.com"
              className="footer__link"
              style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', opacity: 0.8 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore our Events services →
            </a>
            <a
              href="https://tylerdavisreid.com"
              className="footer__link"
              style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', opacity: 0.8 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tyler's Professional Resume →
            </a>
          </div>
          <span>© {year} Barewoodcraft. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}