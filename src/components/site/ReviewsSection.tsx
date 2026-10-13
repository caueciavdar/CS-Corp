import { useState } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import { reviews as defaultReviews, type Review } from '../../content/reviews'
import backdropPhoto from '../../assets/backgrounds/flooring-room.webp'

type ReviewsSectionProps = {
  reviews?: Review[]
}

function Stars({ rating }: { rating: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <p className="reviews__stars" aria-label={`Rated ${filled} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => <span key={index} aria-hidden="true" className={index < filled ? 'is-filled' : undefined}>★</span>)}
    </p>
  )
}

function Arrow({ direction }: { direction: 'prev' | 'next' }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} /></svg>
}

export default function ReviewsSection({ reviews = defaultReviews }: ReviewsSectionProps) {
  const [current, setCurrent] = useState(0)
  const count = reviews.length
  const review = count > 0 ? reviews[current % count] : undefined
  const go = (step: 1 | -1) => setCurrent((index) => (index + step + count) % count)

  return (
    <Section className="reviews" aria-labelledby="reviews-title">
      <img className="reviews__photo" src={backdropPhoto} alt="" loading="lazy" decoding="async" />
      <Container size="content" className="reviews__content">
        <p className="eyebrow">Client voices</p>
        <h2 id="reviews-title">What our clients say</h2>
        {review ? (
          <div className="reviews__carousel" role="region" aria-roledescription="carousel" aria-label="Client reviews">
            {count > 1 && <button className="reviews__arrow reviews__arrow--prev" type="button" aria-label="Previous review" onClick={() => go(-1)}><Arrow direction="prev" /></button>}
            <figure className="reviews__item" aria-live="polite" aria-roledescription="slide" aria-label={`${(current % count) + 1} of ${count}`}>
              <blockquote><p>&ldquo;{review.reviewText}&rdquo;</p></blockquote>
              <Stars rating={review.rating} />
              <figcaption>{review.customerName}<span>{review.source} review</span></figcaption>
            </figure>
            {count > 1 && <button className="reviews__arrow reviews__arrow--next" type="button" aria-label="Next review" onClick={() => go(1)}><Arrow direction="next" /></button>}
          </div>
        ) : (
          <p className="reviews__placeholder">Client reviews coming soon.</p>
        )}
      </Container>
    </Section>
  )
}
