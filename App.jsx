export default function App() {
  const services = [
    {
      title: 'Standard Cleaning',
      text: 'Routine cleaning for apartments, homes, and small spaces including floors, surfaces, bathrooms, kitchens, and trash removal.',
    },
    {
      title: 'Move-In / Move-Out Cleaning',
      text: 'Detailed cleaning to prepare units for new tenants or leave spaces ready after moving out.',
    },
    {
      title: 'Office Cleaning',
      text: 'Professional cleaning for workspaces, restrooms, break rooms, lobbies, and common business areas.',
    },
    {
      title: 'Apartment Common Areas',
      text: 'Hallways, stairwells, entryways, and shared areas cleaned on a recurring schedule.',
    },
    {
      title: 'Airbnb Turnover',
      text: 'Fast and dependable turnover cleaning to keep short-term rentals guest-ready.',
    },
    {
      title: 'Custom Cleaning Plans',
      text: 'Flexible service options built around the needs of your property or business.',
    },
  ]

  const reasons = [
    'Professional appearance',
    'Consistent service',
    'Flexible scheduling',
    'Focused on quality',
  ]

  return (
    <div>
      <header className="topbar">
        <div className="container nav">
          <div>
            <div className="brand">ProLine Cleaning Solutions</div>
            <div className="subbrand">
              Reliable residential and commercial cleaning services
            </div>
          </div>
          <nav className="navlinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Professional Cleaning Services</p>
            <h1>Clean spaces that leave a strong first impression</h1>
            <p className="lead">
              ProLine Cleaning Solutions provides dependable cleaning services
              for apartments, offices, move-ins, move-outs, and shared
              commercial spaces.
            </p>
            <div className="buttons">
              <a className="button primary" href="#contact">
                Request a Quote
              </a>
              <a className="button secondary" href="#services">
                View Services
              </a>
            </div>
          </div>

          <div className="card highlight">
            <h2>What we clean</h2>
            <div className="pill-grid">
              <div className="pill">Apartments</div>
              <div className="pill">Offices</div>
              <div className="pill">Move-in / Move-out</div>
              <div className="pill">Common Areas</div>
              <div className="pill">Airbnb Turnovers</div>
              <div className="pill">Customized Plans</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <h2>About ProLine</h2>
            <p>
              ProLine Cleaning Solutions is focused on delivering
              consistent, high-quality cleaning with a professional and
              dependable approach. Our goal is to help property managers,
              businesses, and residents keep their spaces clean, fresh, and
              ready for daily use.
            </p>
          </div>

          <div className="card">
            <h3>Our promise</h3>
            <ul className="clean-list">
              <li>Reliable scheduling</li>
              <li>Clear communication</li>
              <li>Attention to detail</li>
              <li>Professional service standards</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="container">
          <h2 className="center">Our Services</h2>
          <div className="card-grid">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <h2 className="center">Why Choose ProLine</h2>
          <div className="reason-grid">
            {reasons.map((reason) => (
              <div className="card center-card" key={reason}>
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section footer-band">
        <div className="container two-col">
          <div>
            <h2>Contact Us</h2>
            <p>
              Ready to get started? Reach out for a quote or to talk about a
              cleaning plan that fits your property.
            </p>
            <div className="contact-lines">
              <p><strong>Phone:</strong> 207-523-0091</p>
              <p><strong>Email:</strong> nticegwam@gmail.com</p>
            </div>
          </div>

          <div className="card">
            <h3>Service Areas</h3>
            <p>
              Serving local clients with dependable cleaning support for
              residential and commercial spaces.
            </p>
            <p>
              Ask about recurring cleaning schedules and custom service
              packages.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>© 2026 ProLine Cleaning Solutions. All rights reserved.</p>
          <p>Clean. Professional. Reliable.</p>
        </div>
      </footer>
    </div>
  )
}
