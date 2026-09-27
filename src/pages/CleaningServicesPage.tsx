import { useEffect } from 'react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'

const services = [
  ['Residential Cleaning', 'Professional cleaning services designed for residential spaces.', 'home'],
  ['Commercial / Office Cleaning', 'Cleaning solutions for offices and commercial environments.', 'office'],
  ['Post-Construction Cleaning', 'Cleaning support for spaces after construction or remodeling work.', 'spark'],
  ['Move-In / Move-Out Cleaning', 'Cleaning services for properties being prepared for move-in or move-out.', 'move'],
] as const

const differentiators = [
  ['Detail-Focused Service', 'Careful attention to the areas that shape a cleaner space.', 'detail'],
  ['Clear Communication', 'Straightforward communication before and throughout the service.', 'communication'],
  ['Residential & Commercial', 'Cleaning solutions for homes, offices and commercial spaces.', 'spaces'],
  ['Part of CS Conexion Services Corp.', 'One specialized division within a broader property services company.', 'company'],
] as const

function LineIcon({ type }: { type: string }) {
  const path = type === 'home' ? <><path d="m4 11 8-7 8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-5h4v5" /></>
    : type === 'office' ? <><path d="M5 20V4h14v16" /><path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h8" /></>
      : type === 'spark' ? <><path d="m12 3 1.2 5.8L19 10l-5.8 1.2L12 17l-1.2-5.8L5 10l5.8-1.2L12 3Z" /><path d="m19 16 .5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" /></>
        : type === 'move' ? <><path d="M4 7h16v13H4z" /><path d="M8 7V4h8v3M8 13h8M12 10v6" /></>
          : type === 'communication' ? <><path d="M4 5h16v11H8l-4 3V5Z" /><path d="M8 9h8M8 12h5" /></>
            : type === 'spaces' ? <><path d="m4 9 8-5 8 5v10H4V9Z" /><path d="M8 19v-5h8v5M8 10h.01M12 10h.01M16 10h.01" /></>
              : type === 'company' ? <><path d="M4 20V8l8-4 8 4v12" /><path d="M8 20v-5h8v5M8 10h.01M12 10h.01M16 10h.01" /></>
                : <><path d="m5 12 4 4L19 6" /></>
  return <svg viewBox="0 0 24 24" aria-hidden="true">{path}</svg>
}

function Meta({ description }: { description: string }) {
  useEffect(() => {
    document.title = 'Home & Commercial Cleaning | CS Conexion Services Corp.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta) }
    meta.setAttribute('content', description)
    return () => { document.title = 'CS Corp'; meta?.remove() }
  }, [description])
  return null
}

export default function CleaningServicesPage() {
  return <>
    <Meta description="Residential and commercial cleaning services serving Greater Tampa Bay and surrounding communities." />
    <Header currentPath="/cleaning-services" />
    <main className="cleaning-page">
      <section className="cleaning-hero" aria-labelledby="cleaning-title">
        <Container><div className="cleaning-hero__grid"><div className="cleaning-hero__content"><p className="eyebrow">CS Home &amp; Commercial Cleaning</p><h1 id="cleaning-title">A higher<br /><span>standard of clean.</span></h1><p>Professional cleaning services for homes, offices and spaces that need a fresh start.</p><div className="cleaning-hero__actions"><a className="button button--primary cleaning-button" href="mailto:caue@conexionservicesfl.com">Get a Free Estimate</a><a className="button button--secondary button--on-dark" href="#services">Explore Cleaning Services</a></div></div><div className="cleaning-hero__visual" aria-hidden="true"><div className="cleaning-hero__orb cleaning-hero__orb--large" /><div className="cleaning-hero__orb cleaning-hero__orb--small" /><div className="cleaning-hero__droplet" /><div className="cleaning-hero__reflection" /></div></div></Container>
      </section>

      <Section className="cleaning-services" id="services" aria-labelledby="cleaning-services-title"><Container><div className="cleaning-heading"><div><p className="eyebrow">What we do</p><h2 id="cleaning-services-title">Our cleaning services</h2></div><p>Focused cleaning support for residential and commercial spaces.</p></div><div className="cleaning-service-grid">{services.map(([title, text, icon], index) => <article className="cleaning-service-card" key={title}><div className="cleaning-card__top"><span>0{index + 1}</span><i /></div><LineIcon type={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div></Container></Section>

      <Section className="cleaning-difference" aria-labelledby="cleaning-difference-title"><Container><div className="cleaning-centered-heading"><p className="eyebrow">Why work with us</p><h2 id="cleaning-difference-title">Why choose CS Cleaning?</h2></div><div className="cleaning-difference-grid">{differentiators.map(([title, text, icon]) => <article key={title}><LineIcon type={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div></Container></Section>

      <Section className="cleaning-process" aria-labelledby="cleaning-process-title"><Container><div className="cleaning-heading cleaning-heading--light"><div><p className="eyebrow">How it works</p><h2 id="cleaning-process-title">Our process</h2></div><p>A simple starting point for planning your cleaning service.</p></div><div className="cleaning-process-grid"><article><span>01</span><h3>Tell Us About Your Space</h3><p>Share the type of cleaning service you need.</p></article><article><span>02</span><h3>Request Your Estimate</h3><p>We review the request and prepare the next steps.</p></article><article><span>03</span><h3>Cleaning Service</h3><p>The cleaning service is completed according to the agreed scope.</p></article></div></Container></Section>

      <section className="cleaning-work" aria-labelledby="cleaning-work-title"><Container><div className="cleaning-work__visual" aria-hidden="true"><span /><span /><span /><div className="cleaning-work__categories"><span>Residential</span><span>Commercial</span><span>Post-Construction</span><span>Move-In / Move-Out</span></div></div><div><p className="eyebrow">A cleaner perspective</p><h2 id="cleaning-work-title">Our cleaning<br /><span>work.</span></h2><p>A growing collection of residential and commercial cleaning work.</p></div></Container></section>

      <section className="cleaning-area" aria-labelledby="cleaning-area-title"><Container><p className="eyebrow">Where we work</p><h2 id="cleaning-area-title">Service area</h2><p>Serving Greater Tampa Bay, Sarasota, Jacksonville and surrounding communities.</p></Container></section>
      <section className="cleaning-contact" id="contact" aria-labelledby="cleaning-contact-title"><Container><p className="eyebrow">Start fresh</p><h2 id="cleaning-contact-title">Ready for a cleaner space?</h2><p>Tell us what you need and request a free estimate for your cleaning service.</p><div><a className="button button--primary cleaning-button" href="mailto:caue@conexionservicesfl.com">GET A FREE ESTIMATE</a><a className="cleaning-contact__phone" href="tel:+19049555850">(904) 955-5850</a></div></Container></section>
    </main>
    <Footer currentPath="/cleaning-services" />
  </>
}
