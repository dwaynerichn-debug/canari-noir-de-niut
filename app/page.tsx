const collections = [
  {
    name: 'THE ESSENTIALS',
    description: 'Elevated everyday streetwear.',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'THE STREET EDIT',
    description: 'Oversized silhouettes. Unmistakable presence.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'BEYOND THE ORDINARY',
    description: 'Distinctive style, made to stand apart.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        A NEW STANDARD IN STREETWEAR · FIRST DROP COMING SOON
      </div>

      <header className="navbar">
        <a className="wordmark" href="#" aria-label="Canari Noir de Niut home">
          <span className="wordmark-main">CANARI NOIR</span>
          <span className="wordmark-sub">DE NIUT</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#collections">COLLECTIONS</a>
          <a href="#story">OUR STORY</a>
          <a href="#newsletter">CONTACT</a>
        </nav>

        <a className="bag-link" href="#collections">
          EXPLORE <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="eyebrow">INDEPENDENT FASHION HOUSE · EST. 2026</p>

          <h1>
            RISE ABOVE
            <br />
            <span>THE ORDINARY.</span>
          </h1>

          <p className="hero-description">
            Luxury meets street culture.
            <br />A new expression of individuality begins here.
          </p>

          <a className="gold-button" href="#collections">
            DISCOVER THE BRAND <span aria-hidden="true">↗</span>
          </a>

          <p className="hero-note">
            BUILT FOR INDIVIDUALITY. DESIGNED TO STAND APART.
          </p>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-line" />
          <span>THE BEGINNING</span>
        </div>
      </section>

      <section className="brand-strip" id="story">
        <span>INDIVIDUALITY</span>
        <span className="strip-star">✳</span>
        <span>AMBITION</span>
        <span className="strip-star">✳</span>
        <span>SELF-EXPRESSION</span>
      </section>

      <section className="collections section-padding" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE CANARI UNIVERSE</p>
            <h2>
              Beyond the <span>ordinary.</span>
            </h2>
          </div>
          <p className="section-intro">
            More than what you wear. A statement of who you are.
          </p>
        </div>

        <div className="collection-grid">
          {collections.map((collection, index) => (
            <a
              className="collection-card"
              href="#newsletter"
              key={collection.name}
            >
              <div className="collection-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="collection-image"
                />
                <span className="collection-number">0{index + 1}</span>
                <span className="collection-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="collection-details">
                <div>
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="coming-soon">OUR FIRST COLLECTION IS IN THE MAKING.</p>
      </section>

      <section className="statement">
        <p className="eyebrow">A DIFFERENT KIND OF STANDARD</p>
        <h2>
          Wear your
          <br />
          <span>individuality.</span>
        </h2>
        <p>
          Created for those who choose their own path and refuse to blend in.
        </p>
        <a className="text-link" href="#newsletter">
          GET TO KNOW US <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="footer" id="newsletter">
        <div className="footer-top">
          <a className="wordmark footer-wordmark" href="#">
            <span className="wordmark-main">CANARI NOIR</span>
            <span className="wordmark-sub">DE NIUT</span>
          </a>
          <p>RISE ABOVE THE ORDINARY.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CANARI NOIR DE NIUT</span>
          <span>INDEPENDENT SPIRIT. DISTINCTIVE DESIGN.</span>
        </div>
      </footer>
    </main>
  );
}
