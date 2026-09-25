type DivisionCardProps = { number: string; title: string; description: string; services: string[]; tone: 'dark' | 'blue' }

export default function DivisionCard({ number, title, description, services, tone }: DivisionCardProps) {
  return (
    <article className={`division-card division-card--${tone}`}>
      <div className="division-card__top"><span>{number}</span><span aria-hidden="true">↗</span></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
    </article>
  )
}
