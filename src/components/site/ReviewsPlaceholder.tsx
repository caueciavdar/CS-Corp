import Container from '../layout/Container'
import Section from '../layout/Section'

export type Review = {
  customerName: string
  reviewText: string
  rating: number
  source: string
  date: string
}

type ReviewsPlaceholderProps = {
  reviews?: Review[]
}

export default function ReviewsPlaceholder({ reviews = [] }: ReviewsPlaceholderProps) {
  return (
    <Section className="reviews" aria-labelledby="reviews-title">
      <div className="reviews__backdrop" aria-hidden="true" />
      <Container size="content" className="reviews__content">
        <p className="eyebrow">Client voices</p>
        <h2 id="reviews-title">What our clients say</h2>
        {reviews.length > 0 ? (
          <div className="reviews__list">
            {reviews.map((review) => <article key={`${review.customerName}-${review.date}`}><p>{review.reviewText}</p><cite>{review.customerName}</cite></article>)}
          </div>
        ) : (
          <p className="reviews__placeholder">Client reviews coming soon.</p>
        )}
      </Container>
    </Section>
  )
}
