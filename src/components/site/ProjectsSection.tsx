import { useRef } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'

import hallwayBefore from '../../assets/projects/before-after/hallway-lvp/hallway-before.webp'
import hallwayAfter from '../../assets/projects/before-after/hallway-lvp/hallway-after.webp'
import kitchenAfter from '../../assets/projects/before-after/kitchen-backsplash/kitchen-after.webp'
import hardwoodFireplace from '../../assets/projects/gallery/hardwood-fireplace.webp'
import lightLvpRoom from '../../assets/projects/gallery/light-lvp-room.webp'
import stairsAfter from '../../assets/projects/before-after/stairs-restoration/stairs-after.webp'
import showerAfter from '../../assets/projects/before-after/shower-remodel/shower-after.webp'
import kitchenWhite from '../../assets/projects/gallery/kitchen-white-remodel.webp'
import hardwoodRoomWide from '../../assets/projects/gallery/hardwood-room-wide.webp'

// Real project photos only (see docs/BUSINESS_RULES.md). Hallway before/after sit side by side.
const slides = [
  { src: hallwayBefore, alt: 'Hallway before new vinyl plank flooring', label: 'Before' },
  { src: hallwayAfter, alt: 'Same hallway after new vinyl plank flooring', label: 'After' },
  { src: kitchenAfter, alt: 'Finished kitchen backsplash remodel', label: 'Kitchen Remodeling' },
  { src: hardwoodFireplace, alt: 'Finished hardwood flooring beside a fireplace', label: 'Hardwood Flooring' },
  { src: showerAfter, alt: 'Finished shower remodel', label: 'Bathroom Remodeling' },
  { src: stairsAfter, alt: 'Finished stairs restoration', label: 'Stairs' },
  { src: lightLvpRoom, alt: 'Finished light vinyl plank flooring in a room', label: 'Vinyl Plank Flooring' },
  { src: kitchenWhite, alt: 'Finished bright kitchen remodel', label: 'Kitchen Remodeling' },
  { src: hardwoodRoomWide, alt: 'Finished hardwood flooring across a room', label: 'Hardwood Flooring' },
]

function Arrow({ direction }: { direction: 'prev' | 'next' }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} /></svg>
}

export default function ProjectsSection() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    const atStart = track.scrollLeft <= 4
    if (direction === 1 && atEnd) track.scrollTo({ left: 0, behavior: 'smooth' })
    else if (direction === -1 && atStart) track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    else track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <Section className="projects" id="our-work" aria-labelledby="work-title">
      <Container>
        <div className="projects__heading">
          <p className="eyebrow">Our work</p>
          <h2 id="work-title">OUR WORK</h2>
          <p>REAL PROJECTS. REAL RESULTS.</p>
          <span className="projects__accent" aria-hidden="true" />
        </div>
        <div className="work-carousel" role="region" aria-roledescription="carousel" aria-label="Recent projects">
          <button className="work-carousel__arrow work-carousel__arrow--prev" type="button" aria-label="Previous projects" onClick={() => scrollByCard(-1)}><Arrow direction="prev" /></button>
          <ul className="work-carousel__track" ref={trackRef} tabIndex={0} aria-label="Project photos, scroll sideways for more">
            {slides.map((slide, index) => (
              <li className="work-carousel__slide" key={slide.src} aria-label={`${index + 1} of ${slides.length}`}>
                <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
                <span className={`work-carousel__label${slide.label === 'Before' || slide.label === 'After' ? ' work-carousel__label--pair' : ''}`}>{slide.label}</span>
              </li>
            ))}
          </ul>
          <button className="work-carousel__arrow work-carousel__arrow--next" type="button" aria-label="Next projects" onClick={() => scrollByCard(1)}><Arrow direction="next" /></button>
        </div>
        <div className="projects__footer projects__footer--center"><a className="button button--secondary projects__more" href="/projects">View more projects <span aria-hidden="true">→</span></a></div>
      </Container>
    </Section>
  )
}
