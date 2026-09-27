import Container from '../layout/Container'
import Section from '../layout/Section'

type PillarIcon = 'quality' | 'communication' | 'spaces' | 'divisions'

type Pillar = {
  title: string
  description: string
  icon: PillarIcon
}

const pillars: Pillar[] = [
  { title: 'Quality-focused', description: 'Attention to detail in every project.', icon: 'quality' },
  { title: 'Responsive communication', description: 'Clear communication throughout the process.', icon: 'communication' },
  { title: 'Residential & commercial', description: 'Solutions for homes and businesses.', icon: 'spaces' },
  { title: 'Two specialized divisions', description: 'More solutions through one company.', icon: 'divisions' },
]

function PillarIcon({ type }: { type: PillarIcon }) {
  if (type === 'quality') {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 9 5v8c0 6.1-3.7 10.4-9 13-5.3-2.6-9-6.9-9-13V8l9-5Z" /><path d="m11.5 15.8 3 3 6-6" /></svg>
  }

  if (type === 'communication') {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 7.5h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6l-4 3v-3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z" /><path d="M19 12.5h8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2v3l-4-3h-2a3 3 0 0 1-3-3v-1" /></svg>
  }

  if (type === 'spaces') {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 28V14l9-7 9 7v14M21 28V8h8v20M8 28v-6h8v6M25 13h1M25 18h1M25 23h1" /><path d="m5 16 4-3 4 3" /></svg>
  }

  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3v29M3 16h26" /><path d="M16 3 5 8v8c0 5.2 3.3 9.2 8 11.7M16 3l11 5v8c0 5.2-3.3 9.2-8-11.7" /><circle cx="16" cy="16" r="4" /></svg>
}

export default function WhyChoose() {
  return (
    <Section className="why-choose" id="why-choose" aria-labelledby="why-title">
      <Container>
        <div className="why-choose__heading">
          <p className="eyebrow">The CS difference</p>
          <h2 id="why-title">WHY CHOOSE CS?</h2>
        </div>
        <div className="why-choose__pillars">
          {pillars.map(({ title, description, icon }) => (
            <article className="why-choose__pillar" key={title}>
              <PillarIcon type={icon} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
