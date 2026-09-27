type DivisionCardProps = {
  number: string
  title: string
  tagline: string
  description: string
  services: string[]
  tone: 'flooring' | 'cleaning'
  cta: string
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Zm0 5L12 17l8-4.5M4 17.5l8 4.5 8-4.5" />,
    <path d="M5 5h14v14H5zM8 8h8M8 12h8M8 16h5" />,
    <path d="M4 19 12 4l8 15M7 14h10M9.5 10h5" />,
    <path d="M4 18h16M6 18V8h12v10M9 8V5h6v3M9 12h6M9 15h6" />,
    <path d="M4 19h16M6 19V9l6-4 6 4v10M9 19v-5h6v5" />,
  ]

  return <svg aria-hidden="true" className="division-card__service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">{icons[index % icons.length]}</svg>
}

export default function DivisionCard({ number, title, tagline, description, services, tone, cta }: DivisionCardProps) {
  return (
    <article className={`division-card division-card--${tone}`}>
      <div className="division-card__top"><span>{number}</span><span className="division-card__line" aria-hidden="true" /></div>
      <div className="division-card__brand" aria-label="Official division logo placeholder">CS <span>LOGO<br />PENDING</span></div>
      <div className="division-card__intro">
        <p className="division-card__tagline">{tagline}</p>
        <h3>{title}</h3>
        <p className="division-card__description">{description}</p>
      </div>
      <div className="division-card__services-wrap">
        <p className="division-card__label">Services</p>
        <ul>{services.map((service, index) => <li key={service}><ServiceIcon index={index} /><span>{service}</span></li>)}</ul>
      </div>
      <a className="division-card__cta" href="#contact">{cta}<span aria-hidden="true">↗</span></a>
    </article>
  )
}
