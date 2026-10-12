import { useEffect } from 'react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import EstimateForm from '../components/site/EstimateForm'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Get a Free Estimate | CS Conexion Services Corp.'
    const description = 'Request a free estimate for flooring, remodeling or cleaning services in Greater Tampa Bay, Sarasota and Jacksonville. Call (904) 955-5850 or send us your project details.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta) }
    meta.setAttribute('content', description)
  }, [])

  return <>
    <Header currentPath="/contact" />
    <main className="contact-page">
      <section className="projects-page__hero contact-page__hero" aria-labelledby="contact-title">
        <Container><p className="eyebrow">Free estimate</p><h1 id="contact-title">LET&apos;S TALK ABOUT<br /><span>YOUR PROJECT.</span></h1><p>Tell us what you need and we&apos;ll get back to you with a free, no-obligation estimate.</p><i aria-hidden="true" /></Container>
      </section>
      <Section className="contact-page__body">
        <Container className="contact-page__layout">
          <EstimateForm />
          <aside className="contact-page__aside" aria-label="Other ways to reach us">
            <div><p className="eyebrow">Prefer to talk?</p><a className="contact-page__phone" href="tel:+19049555850">(904) 955-5850</a><p>Call us directly.</p></div>
            <div><p className="eyebrow">Email</p><a href="mailto:caue@conexionservicesfl.com">caue@conexionservicesfl.com</a></div>
            <div><p className="eyebrow">Service area</p><p>Serving Greater Tampa Bay, Sarasota, Jacksonville and surrounding communities.</p></div>
          </aside>
        </Container>
      </Section>
    </main>
    <Footer currentPath="/contact" />
  </>
}
