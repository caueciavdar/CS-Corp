import Container from '../layout/Container'

const valueItems = [
  { label: 'Quality Work', icon: 'quality' },
  { label: 'Responsive Service', icon: 'responsive' },
  { label: 'Residential & Commercial', icon: 'spaces' },
] as const

function ValueIcon({ type }: { type: (typeof valueItems)[number]['icon'] }) {
  if (type === 'quality') {
    return <svg className="hero__value-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.3 4.65 5.13.75-3.71 3.61.88 5.1L12 14.7l-4.6 2.41.88-5.1-3.71-3.61 5.13-.75L12 3Z" /></svg>
  }

  if (type === 'responsive') {
    return <svg className="hero__value-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h14v15H5zM8 8h8M8 12h5M8 16h3" /></svg>
  }

  return <svg className="hero__value-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9l8-5 8 5v10M7 19v-6h10v6M4 19h16" /></svg>
}

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Professional property services</p>
          <h1 id="hero-title">Two services.<br /><span>One commitment.</span></h1>
          <p className="hero__text">Better spaces. Brighter lives.</p>
          <span className="hero__accent" aria-hidden="true" />
        </div>
        <div className="hero__aside" aria-label="Our property service divisions">
          <ul>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Interior improvements</li>
            <li>Cleaning solutions</li>
          </ul>
          <p className="hero__aside-callout">Same values.<br /><span>Greater possibilities.</span></p>
        </div>
        <div className="hero__footer">
          <div className="hero__values" aria-label="Our service values">
            {valueItems.map((item, index) => <span key={item.label}><i aria-hidden="true">0{index + 1}</i><ValueIcon type={item.icon} />{item.label}</span>)}
          </div>
          <p className="hero__temporary">Architectural background placeholder · approved photography coming soon</p>
        </div>
      </Container>
    </section>
  )
}
