import Container from '../layout/Container'
import Section from '../layout/Section'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function ProjectsSection() {
  return (
    <Section className="projects" id="our-work" aria-labelledby="work-title">
      <Container>
        <div className="section-heading section-heading--split"><div><p className="eyebrow">Our work</p><h2 id="work-title">Spaces that<br /><span>speak for themselves.</span></h2></div><p>Our project gallery is being prepared with real work photos from the CS team.</p></div>
        <BeforeAfterSlider />
        <div className="projects__footer"><p>Real project photography will replace this temporary comparison placeholder.</p><a className="text-link" href="#contact">View more projects <span aria-hidden="true">↗</span></a></div>
      </Container>
    </Section>
  )
}
