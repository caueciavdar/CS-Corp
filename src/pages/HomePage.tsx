import Container from '../components/layout/Container'
import Section from '../components/layout/Section'

export default function HomePage() {
  return (
    <main>
      <Section className="placeholder" aria-labelledby="page-title">
        <Container size="content">
          <p className="eyebrow">CS Corp</p>
          <h1 id="page-title">New website under development.</h1>
          <p className="lead">
            The technical and visual foundations are being prepared. Final brand,
            content, and navigation decisions remain subject to approval.
          </p>
          <div className="status-card" aria-label="Project status">
            <p className="status-card__label">Current stage</p>
            <p>Design system and navigation architecture</p>
          </div>
        </Container>
      </Section>
    </main>
  )
}
