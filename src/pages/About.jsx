import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container" style={{ padding: '5rem var(--side-pad) 4rem' }}>
          <p className="eyebrow" style={{ color: 'var(--gold-light)', marginBottom: '1rem' }}>
            The Maker
          </p>
          <span className="gold-rule gold-rule--lg" aria-hidden="true" />
          <h1 id="about-heading" className="page-title" style={{ color: 'var(--white)' }}>
            About Tyler
          </h1>
          <p className="lead" style={{ color: 'var(--text-on-dark)', maxWidth: '520px', marginTop: '1.25rem' }}>
            One woodworker. One studio. An unwavering commitment to making things that last.
          </p>
        </div>
      </section>

      {/* ── PROFILE ── */}
      <section className="section section--cream" aria-labelledby="tyler-heading">
        <div className="container">
          <article className="person-card" aria-labelledby="tyler-heading">
            <img
              src="https://picsum.photos/seed/tyler-portrait/440/580"
              alt="Tyler, founder and lead woodworker at Barewoodcraft"
              className="person-card__img"
            />
            <div className="person-card__body">
              <p className="person-card__role">Founder &amp; Lead Woodworker</p>
              <h2 id="tyler-heading" className="person-card__name">Tyler Reid</h2>
              <span className="gold-rule" style={{ marginTop: '0.25rem', marginBottom: '0.875rem' }} aria-hidden="true" />
              <p className="person-card__bio">
                When Tyler decided to remodel his condo, he didn't hire anyone. He watched videos, read forums, bought tools he didn't fully know how to use yet, and figured it out room by room.
              </p>
              <p className="person-card__bio" style={{ marginTop: '0.75rem' }}>
                Somewhere in the middle of all that — between the tile work and the trim and the late nights sanding things nobody would ever see — he realized he didn't want to stop. Especially the wood. There was something about working with it that felt different from everything else: honest, tactile, permanent.
              </p>
              <p className="person-card__bio" style={{ marginTop: '0.75rem' }}>
                He jokes that his last name historically meant someone who laid tiles, so maybe the condo was always just the beginning.
              </p>
              <p className="person-card__bio" style={{ marginTop: '0.75rem' }}>
                Since then, he's gone deep — hardwood furniture, live-edge slabs, custom built-ins. His latest project was a 10–12 seat dining table designed and built in under six weeks to host family for Thanksgiving 2025, just months after moving cross-country. When he's not in the shop, he's hunting estate sales for vintage hand tools and fueling long build sessions with an unreasonable amount of sour candy.
              </p>
              <div className="btn-group" style={{ marginTop: '1.25rem' }}>
                <Link to="/contact" className="btn btn--outline-gold btn--sm">
                  Commission a Piece
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-intro--center text-center mb-4">
            <p className="eyebrow">What I Believe</p>
            <span className="gold-rule gold-rule--center" aria-hidden="true" />
            <h2 id="values-heading" className="section-title">How I Work</h2>
          </div>
          <ul
            role="list"
            aria-label="Working values"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem',
            }}
          >
            {[
              ['Craft Over Speed', 'Every project gets the time it needs to be done right. Rushing kills furniture.'],
              ['Honest Materials', 'Solid hardwood, proper joinery, quality finish. No shortcuts hidden where you can\'t see them.'],
              ['Built to Last', 'I design for longevity. A good piece should outlive the house it\'s in.'],
              ['Client-First', 'Your space, your vision. I\'m here to build it exactly the way you\'ve pictured it.'],
            ].map(([title, desc]) => (
              <li key={title} role="listitem" style={{ background: 'var(--light-cream)', padding: '2rem' }}>
                <span className="gold-rule" style={{ marginBottom: '1rem' }} aria-hidden="true" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.625rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.9375rem' }}>{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--dark" aria-labelledby="about-cta-heading">
        <div className="container text-center">
          <h2 id="about-cta-heading" className="section-title" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Have a Project in Mind?
          </h2>
          <p className="lead" style={{ color: 'var(--text-on-dark-muted)', marginBottom: '2rem' }}>
            Whether you have detailed plans or just a rough idea — let's talk it through.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}