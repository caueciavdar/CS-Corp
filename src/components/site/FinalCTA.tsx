import Container from '../layout/Container'

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="cta-title">
      <Container className="final-cta__inner">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 id="cta-title">Let&apos;s work together</h2>
          <p className="final-cta__text">Tell us about your project and get a free, no-obligation estimate.</p>
        </div>
        <a className="button button--primary" href="mailto:caue@conexionservicesfl.com">Get a Free Estimate <span aria-hidden="true">↗</span></a>
      </Container>
    </section>
  )
}
