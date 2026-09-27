import Container from '../layout/Container'
import Section from '../layout/Section'
import BeforeAfterSlider from './BeforeAfterSlider'

import hallwayBefore from '../../assets/projects/before-after/hallway-lvp/hallway-before.webp'
import hallwayAfter from '../../assets/projects/before-after/hallway-lvp/hallway-after.webp'
import hardwoodFireplace from '../../assets/projects/gallery/hardwood-fireplace.webp'
import kitchenBacksplashCorner from '../../assets/projects/gallery/kitchen-backsplash-corner.webp'
import lightLvpRoom from '../../assets/projects/gallery/light-lvp-room.webp'

type ProjectCardProps = {
  src: string
  alt: string
}

function ProjectCard({ src, alt }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </article>
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
          <BeforeAfterSlider
            beforeSrc={hallwayBefore}
            afterSrc={hallwayAfter}
            beforeAlt="Hallway flooring before installation"
            afterAlt="Finished hallway LVP flooring installation"
          />
        </div>
        <div className="project-grid">
          <ProjectCard src={hardwoodFireplace} alt="Finished hardwood flooring by a fireplace" />
          <ProjectCard src={kitchenBacksplashCorner} alt="Kitchen backsplash installation project" />
          <ProjectCard src={lightLvpRoom} alt="Finished light LVP flooring installation" />
        </div>
        <div className="projects__footer"><span aria-hidden="true" /><a className="text-link" href="#contact">VIEW MORE PROJECTS <span aria-hidden="true">↗</span></a></div>
      </Container>
    </Section>
  )
}
