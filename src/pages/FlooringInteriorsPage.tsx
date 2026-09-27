import { useEffect } from 'react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import BeforeAfterSlider from '../components/site/BeforeAfterSlider'

import hallwayBefore from '../assets/projects/before-after/hallway-lvp/hallway-before.webp'
import hallwayAfter from '../assets/projects/before-after/hallway-lvp/hallway-after.webp'
import hardwoodFireplace from '../assets/projects/gallery/hardwood-fireplace.webp'
import lightLvpRoom from '../assets/projects/gallery/light-lvp-room.webp'
import kitchenWhiteRemodel from '../assets/projects/gallery/kitchen-white-remodel.webp'
import kitchenBacksplashCorner from '../assets/projects/gallery/kitchen-backsplash-corner.webp'
import showerAfter from '../assets/projects/before-after/shower-remodel/shower-after.webp'

const services = [
  { title: 'Vinyl Plank Flooring', text: 'Professional installation of vinyl plank flooring for residential interior spaces.', icon: 'floor' },
  { title: 'Laminate Flooring', text: 'Laminate flooring installation with a clean, durable finish.', icon: 'layers' },
  { title: 'Hardwood Flooring', text: 'Hardwood flooring installation and interior flooring improvements.', icon: 'wood' },
  { title: 'Bathroom Remodeling', text: 'Interior remodeling solutions for bathrooms and related finishes.', icon: 'bath' },
  { title: 'Kitchen Remodeling', text: 'Interior remodeling solutions for kitchens and surrounding spaces.', icon: 'kitchen' },
] as const

const projects = [
  { src: hardwoodFireplace, alt: 'Finished hardwood flooring beside a fireplace', label: 'Hardwood' },
  { src: lightLvpRoom, alt: 'Finished light vinyl plank flooring in a room', label: 'Flooring' },
  { src: kitchenWhiteRemodel, alt: 'Finished white kitchen remodeling project', label: 'Kitchen' },
  { src: kitchenBacksplashCorner, alt: 'Kitchen backsplash installation detail', label: 'Kitchen' },
  { src: showerAfter, alt: 'Finished shower remodeling project', label: 'Bathroom' },
]

function ServiceIcon({ type }: { type: (typeof services)[number]['icon'] }) {
  const paths = type === 'bath'
    ? <><path d="M4 13h16" /><path d="M6 13V8a3 3 0 0 1 5.5-1.6" /><path d="M4 17h16" /><path d="M7 17v2M17 17v2" /></>
    : type === 'kitchen'
      ? <><path d="M5 20V4h14v16" /><path d="M8 8h8M8 12h8M8 16h3" /><path d="M15 15h1" /></>
      : type === 'wood'
        ? <><path d="M4 7h16M4 12h16M4 17h16" /><path d="M8 4v3M16 7v5M10 12v5M18 17v3" /></>
        : type === 'layers'
          ? <><path d="m4 8 8-4 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4M4 16l8 4 8-4" /></>
          : <><path d="M5 4v16M5 7h14v13M9 11h6M9 15h6" /></>
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths}</svg>
}

export default function FlooringInteriorsPage() {
  useEffect(() => {
    document.title = 'Flooring & Interiors | CS Conexion Services Corp.'
    const description = 'Flooring and interior remodeling solutions serving Greater Tampa Bay and surrounding communities.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
    return () => { document.title = 'CS Corp'; meta?.remove() }
  }, [])

  return <>
    <Header currentPath="/flooring-interiors" />
    <main className="flooring-page">
      <section className="flooring-hero" aria-labelledby="flooring-title">
        <Container>
          <div className="flooring-hero__content">
            <p className="eyebrow">CS Flooring &amp; Interiors</p>
            <h1 id="flooring-title">Transform<br /><span>your space.</span></h1>
            <p>Professional flooring and interior remodeling solutions designed to improve the way your space looks and feels.</p>
            <div className="flooring-hero__actions">
              <a className="button button--primary" href="#contact">Get a Free Estimate</a>
              <a className="button button--secondary button--on-dark" href="#recent-work">View Our Work</a>
            </div>
          </div>
          <div className="flooring-hero__visual" aria-hidden="true" />
          <div className="flooring-hero__mark" aria-hidden="true"><span>01</span><i /></div>
        </Container>
      </section>

      <Section className="flooring-services" id="services" aria-labelledby="services-title">
        <Container>
          <div className="flooring-section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2 id="services-title">OUR SERVICES</h2></div><p>Focused solutions for flooring and interior spaces.</p></div>
          <div className="service-grid">
            {services.map((service, index) => <article className="service-card" key={service.title}><div className="service-card__meta"><span className="service-card__number">0{index + 1}</span><span className="service-card__rule" aria-hidden="true" /></div><ServiceIcon type={service.icon} /><h3>{service.title}</h3><p>{service.text}</p></article>)}
          </div>
        </Container>
      </Section>

      <Section className="transformation" aria-labelledby="transformation-title">
        <Container>
          <div className="flooring-section-heading flooring-section-heading--light"><div><p className="eyebrow">A closer look</p><h2 id="transformation-title">SEE THE<br />TRANSFORMATION</h2></div><p>Explore a real hallway flooring transformation with the interactive comparison.</p></div>
          <div className="transformation__slider"><BeforeAfterSlider beforeSrc={hallwayBefore} afterSrc={hallwayAfter} beforeAlt="Hallway before LVP flooring installation" afterAlt="Hallway after LVP flooring installation" /></div>
        </Container>
      </Section>

      <Section className="recent-work" id="recent-work" aria-labelledby="recent-work-title">
        <Container>
          <div className="flooring-section-heading"><div><p className="eyebrow">Selected work</p><h2 id="recent-work-title">RECENT WORK</h2></div><p>Real project photography from the available collection.</p></div>
          <div className="flooring-project-grid">{projects.map((project) => <figure key={project.alt} className="flooring-project"><img src={project.src} alt={project.alt} loading="lazy" decoding="async" /><figcaption>{project.label}</figcaption></figure>)}</div>
        </Container>
      </Section>

      <Section className="flooring-difference" aria-labelledby="difference-title">
        <Container><div className="flooring-difference__heading"><p className="eyebrow">The CS difference</p><h2 id="difference-title">DETAILS MAKE<br />THE SPACE.</h2></div><div className="difference-grid"><div><strong>Attention to Detail</strong><p>Careful attention to the details that shape the finished space.</p></div><div><strong>Clear Communication</strong><p>Straightforward communication throughout the project.</p></div><div><strong>Multiple Interior Solutions</strong><p>Flooring and remodeling services through one specialized division.</p></div></div></Container>
      </Section>

      <section className="flooring-contact" id="contact" aria-labelledby="flooring-contact-title"><Container><p className="eyebrow">Serving surrounding communities</p><h2 id="flooring-contact-title">READY TO TRANSFORM<br />YOUR SPACE?</h2><p>Tell us about your flooring or remodeling project and request a free estimate.</p><div><a className="button button--primary" href="mailto:caue@conexionservicesfl.com">Get a Free Estimate</a><a className="flooring-contact__phone" href="tel:+19049555850">(904) 955-5850</a></div></Container></section>
    </main>
    <Footer currentPath="/flooring-interiors" />
  </>
}
