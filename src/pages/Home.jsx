import { Link } from 'react-router-dom'

const GALLERY_ITEMS = [
  { seed: 'wood-table', caption: 'Custom Dining Table' },
  { seed: 'wood-shelf', caption: 'Floating Wall Shelves' },
  { seed: 'wood-cabinet', caption: 'Handcrafted Cabinet' },
  { seed: 'wood-bench', caption: 'Entry Bench' },
  { seed: 'wood-liveedge', caption: 'Live-Edge Coffee Table' },
  { seed: 'wood-builtin', caption: 'Custom Built-In Shelving' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="hero"
        aria-labelledby="hero-heading"
        style={{
          backgroundImage:
            'url(https://picsum.photos/seed/barewoodcraft-hero/1920/1080)',
        }}
      >
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <p className="hero__eyebrow">Custom Hardwood Furniture &amp; Built-Ins</p>
          <h1 id="hero-heading" className="hero__title">
            Made by Hand.<br />
            <em>Built to Last.</em>
          </h1>
          <p className="hero__subtitle">
            Barewoodcraft creates heirloom-quality hardwood furniture and custom built-ins — each piece designed for the space it lives in and the people who use it.
          </p>
          <div className="btn-group">
            <Link to="/woodworking" className="btn btn--primary">
              View the Work
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Commission a Piece
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="section section--cream" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-intro--center text-center mb-4">
            <p className="eyebrow">Recent Work</p>
            <span className="gold-rule gold-rule--center" aria-hidden="true" />
            <h2 id="gallery-heading" className="section-title">
              A Glimpse Into the Shop
            </h2>
            <p className="lead mt-2">
              From live-edge dining tables to custom built-ins — a sample of what comes out of the workshop.
            </p>
          </div>

          <ul
            className="gallery-grid"
            aria-label="Project photo gallery"
            role="list"
            style={{ marginTop: '2.5rem' }}
          >
            {GALLERY_ITEMS.map(({ seed, caption }) => (
              <li key={seed} className="gallery-item" role="listitem">
                <img
                  src={`https://picsum.photos/seed/${seed}/800/600`}
                  alt={caption}
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="gallery-item__caption" aria-hidden="true">
                  {caption}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section" aria-labelledby="who-heading">
        <div className="container">
          <div className="who-grid">
            <div>
              <p className="eyebrow">The Studio</p>
              <span className="gold-rule" aria-hidden="true" />
              <h2 id="who-heading" className="section-title">
                Built on Craft &amp; Honest Materials
              </h2>
              <p style={{ marginTop: '1.25rem', lineHeight: '1.85', color: 'var(--text-body)', fontSize: '1.0125rem' }}>
                Barewoodcraft is Tyler Reid's woodworking studio — focused on hardwood furniture, live-edge slabs, and custom built-ins made the right way. No shortcuts, no flat-pack. Just honest joinery, quality wood, and pieces designed to outlast the trends.
              </p>
              <p style={{ marginTop: '1rem', lineHeight: '1.85', color: 'var(--text-body)', fontSize: '1.0125rem' }}>
                Every commission is built to fit the space and the person it's for. If you have a project in mind, let's talk.
              </p>
              <div className="btn-group" style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn--outline">
                  About Tyler
                </Link>
                <Link to="/contact" className="btn btn--outline-gold">
                  Start a Project
                </Link>
              </div>
            </div>
            <div aria-hidden="true">
              <img
                src="https://picsum.photos/seed/studio-workshop/700/840"
                alt="Barewoodcraft studio workshop"
                className="who-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND QUOTE ── */}
      <section className="section section--dark" aria-labelledby="quote-heading">
        <div className="container text-center">
          <span className="gold-rule gold-rule--center gold-rule--lg" aria-hidden="true" />
          <blockquote>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                color: 'var(--white)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.5',
              }}
              id="quote-heading"
            >
              "The best things in life are made with patience, love, and really good wood."
            </p>
            <footer style={{ marginTop: '1.5rem', color: 'var(--gold-light)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              — Tyler, Barewoodcraft
            </footer>
          </blockquote>
          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn btn--primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}