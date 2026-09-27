import { useEffect, useState } from 'react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import BeforeAfterSlider from '../components/site/BeforeAfterSlider'

import bedroomBefore from '../assets/projects/before-after/bedroom-lvp/bedroom-before.webp'
import bedroomAfter from '../assets/projects/before-after/bedroom-lvp/bedroom-after.webp'
import hallwayBefore from '../assets/projects/before-after/hallway-lvp/hallway-before.webp'
import hallwayAfter from '../assets/projects/before-after/hallway-lvp/hallway-after.webp'
import kitchenBefore from '../assets/projects/before-after/kitchen-backsplash/kitchen-before.webp'
import kitchenAfter from '../assets/projects/before-after/kitchen-backsplash/kitchen-after.webp'
import showerBefore from '../assets/projects/before-after/shower-remodel/shower-before.webp'
import showerAfter from '../assets/projects/before-after/shower-remodel/shower-after.webp'
import stairsBefore from '../assets/projects/before-after/stairs-restoration/stairs-before.webp'
import stairsAfter from '../assets/projects/before-after/stairs-restoration/stairs-after.webp'
import hardwoodFireplace from '../assets/projects/gallery/hardwood-fireplace.webp'
import hardwoodRoomWide from '../assets/projects/gallery/hardwood-room-wide.webp'
import lightLvpRoom from '../assets/projects/gallery/light-lvp-room.webp'
import kitchenCorner from '../assets/projects/gallery/kitchen-backsplash-corner.webp'
import kitchenWhite from '../assets/projects/gallery/kitchen-white-remodel.webp'

type ProjectCategory = 'Flooring' | 'Hardwood' | 'Kitchen' | 'Bathroom' | 'Stairs'
type Project = { id: string; category: ProjectCategory; image: string; alt: string; beforeSrc?: string; afterSrc?: string; title: string }

const filters: Array<'All' | ProjectCategory> = ['All', 'Flooring', 'Hardwood', 'Kitchen', 'Bathroom', 'Stairs']
const projects: Project[] = [
  { id: 'hallway-lvp', category: 'Flooring', image: hallwayAfter, beforeSrc: hallwayBefore, afterSrc: hallwayAfter, alt: 'Finished hallway after LVP flooring installation', title: 'Flooring Installation' },
  { id: 'bedroom-lvp', category: 'Flooring', image: bedroomAfter, beforeSrc: bedroomBefore, afterSrc: bedroomAfter, alt: 'Finished bedroom after LVP flooring installation', title: 'Flooring Installation' },
  { id: 'hardwood-fireplace', category: 'Hardwood', image: hardwoodFireplace, alt: 'Finished hardwood flooring beside a fireplace', title: 'Hardwood Flooring' },
  { id: 'hardwood-room', category: 'Hardwood', image: hardwoodRoomWide, alt: 'Finished hardwood flooring across a room', title: 'Hardwood Flooring' },
  { id: 'kitchen-backsplash', category: 'Kitchen', image: kitchenAfter, beforeSrc: kitchenBefore, afterSrc: kitchenAfter, alt: 'Finished kitchen backsplash remodel', title: 'Kitchen Backsplash' },
  { id: 'kitchen-corner', category: 'Kitchen', image: kitchenCorner, alt: 'Kitchen backsplash and counter detail', title: 'Kitchen Backsplash' },
  { id: 'kitchen-remodel', category: 'Kitchen', image: kitchenWhite, alt: 'Finished bright kitchen remodel', title: 'Kitchen Remodeling' },
  { id: 'shower-remodel', category: 'Bathroom', image: showerAfter, beforeSrc: showerBefore, afterSrc: showerAfter, alt: 'Finished shower remodel', title: 'Bathroom Remodel' },
  { id: 'stairs-restoration', category: 'Stairs', image: stairsAfter, beforeSrc: stairsBefore, afterSrc: stairsAfter, alt: 'Finished stairs restoration', title: 'Stair Transformation' },
  { id: 'light-lvp', category: 'Flooring', image: lightLvpRoom, alt: 'Finished light LVP flooring in a room', title: 'Flooring Installation' },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)

  useEffect(() => {
    document.title = 'Projects | CS Conexion Services Corp.'
    const description = 'Explore a real portfolio of flooring, interior remodeling and property-improvement projects completed by CS Conexion Services Corp.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta) }
    meta.setAttribute('content', description)
    return () => { document.title = 'CS Corp'; meta?.remove() }
  }, [])

  const selectFilter = (filter: (typeof filters)[number]) => {
    setActiveFilter(filter)
    setSelectedProject(null)
  }

  return <>
    <Header currentPath="/projects" />
    <main className="projects-page">
      <section className="projects-page__hero" aria-labelledby="projects-title">
        <Container><p className="eyebrow">Our Work</p><h1 id="projects-title">REAL PROJECTS.<br /><span>REAL RESULTS.</span></h1><p>Explore a selection of flooring, remodeling and property-improvement work completed by CS Conexion Services Corp.</p><i aria-hidden="true" /></Container>
      </section>
      <Section className="projects-page__gallery" aria-labelledby="portfolio-title">
        <Container>
          <div className="projects-page__intro"><div><p className="eyebrow">Portfolio</p><h2 id="portfolio-title">Selected work</h2></div><p>Real photos from flooring and interior improvement work. Detailed project metadata remains to be confirmed.</p></div>
          <div className="project-filters" role="group" aria-label="Filter projects by category">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'is-active' : ''} type="button" aria-pressed={activeFilter === filter} onClick={() => selectFilter(filter)}>{filter}</button>)}</div>
          {selectedProject && <section className="project-detail" aria-labelledby="selected-project-title"><div><p className="eyebrow">Selected project</p><h2 id="selected-project-title">{selectedProject.title}</h2><p>{selectedProject.category}</p></div>{selectedProject.beforeSrc && selectedProject.afterSrc ? <BeforeAfterSlider beforeSrc={selectedProject.beforeSrc} afterSrc={selectedProject.afterSrc} beforeAlt={`${selectedProject.title} before`} afterAlt={`${selectedProject.title} after`} /> : <img src={selectedProject.image} alt={selectedProject.alt} loading="lazy" decoding="async" />}</section>}
          <div className="projects-page__grid">{visibleProjects.map((project) => <button className={`projects-page__card${selectedProject?.id === project.id ? ' is-selected' : ''}`} key={project.id} type="button" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title}, ${project.category}${project.beforeSrc ? ', before and after' : ''}`}><img src={project.image} alt={project.alt} loading="lazy" decoding="async" /><span className="projects-page__card-overlay"><small>{project.category}{project.beforeSrc ? ' · Before / After' : ''}</small><strong>{project.title}</strong></span></button>)}</div>
        </Container>
      </Section>
      <section className="projects-page__cta" id="contact" aria-labelledby="projects-cta-title"><Container><div><p className="eyebrow">Start your project</p><h2 id="projects-cta-title">HAVE A PROJECT IN MIND?</h2><p>Tell us what you're planning and request a free estimate.</p></div><div><a className="button button--primary" href="mailto:caue@conexionservicesfl.com">GET A FREE ESTIMATE</a><a className="projects-page__phone" href="tel:+19049555850">(904) 955-5850</a></div></Container></section>
    </main>
    <Footer currentPath="/projects" />
  </>
}
