import Container from '../layout/Container'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">One connection. Two ways to transform your space.</p>
          <h1 id="hero-title">Built with care.<br /><span>Made for living.</span></h1>
          <p className="hero__text">From beautiful floors to a cleaner home or office, CS Conexion Services Corp brings dependable craftsmanship and care together.</p>
          <a className="button button--primary" href="#contact">Get a Free Estimate <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero__visual" aria-label="Space for approved project photography" role="img">
          <span>Real project photography coming soon</span>
        </div>
      </Container>
    </section>
  )
}
