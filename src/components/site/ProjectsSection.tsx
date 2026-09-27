import Container from '../layout/Container'
import Section from '../layout/Section'
import BeforeAfterSlider from './BeforeAfterSlider'

function ProjectCard() {
  return (
    <article className="project-card" aria-hidden="true" />
  )
}

export default function ProjectsSection() {
  return (
    <Section className="projects" id="our-work" aria-labelledby="work-title">
      <Container>
        <div className="projects__heading">
          <p className="eyebrow">Our work</p>
          <h2 id="work-title">OUR WORK</h2>
          <p>REAL PROJECTS. REAL RESULTS.</p>
          <span className="projects__accent" aria-hidden="true" />
        </div>
        <div className="projects__feature">
          <BeforeAfterSlider />
        </div>
        <div className="project-grid" aria-hidden="true">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="projects__footer"><span aria-hidden="true" /><a className="text-link" href="#contact">VIEW MORE PROJECTS <span aria-hidden="true">↗</span></a></div>
      </Container>
    </Section>
  )
}
