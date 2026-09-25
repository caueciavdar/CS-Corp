import Container from '../layout/Container'
import Section from '../layout/Section'

const points = [
  ['01', 'Care in every detail', 'We treat every space with attention, respect and a commitment to doing the work right.'],
  ['02', 'Two specialties. One standard.', 'Flooring and cleaning services connected by the same professional, dependable approach.'],
  ['03', 'A partner you can count on', 'Clear communication and thoughtful service from the first conversation to the final detail.'],
]

export default function WhyChoose() {
  return (
    <Section className="why-choose" id="why-choose" aria-labelledby="why-title">
      <Container>
        <div className="section-heading section-heading--split"><div><p className="eyebrow">The CS difference</p><h2 id="why-title">Why choose<br /><span>CS?</span></h2></div><p>Professional service, personal care and a standard that shows in every space we touch.</p></div>
        <div className="reason-grid">{points.map(([number, title, text]) => <article className="reason" key={number}><span className="reason__number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Container>
    </Section>
  )
}
