import Container from '../layout/Container'
import Section from '../layout/Section'

export default function ReviewsPlaceholder() {
  return <Section className="reviews" aria-labelledby="reviews-title"><Container size="content"><p className="eyebrow">Client voices</p><h2 id="reviews-title">What our clients say</h2><p className="reviews__placeholder">Client reviews coming soon.</p></Container></Section>
}
