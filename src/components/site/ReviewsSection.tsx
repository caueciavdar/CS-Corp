import { useState } from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import { googleReviewUrl, reviews as defaultReviews, type Review } from '../../content/reviews'
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

function GoogleIcon() {
  return (
    <svg className="reviews__cta-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z" />
    </svg>
  )
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
        <a className="button button--secondary button--on-dark reviews__cta" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
          <GoogleIcon />Leave us a Google review<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </Container>
    </Section>
  )
}
