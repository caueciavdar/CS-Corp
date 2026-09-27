import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Header from '../components/site/Header'
import Hero from '../components/site/Hero'
import DivisionCard from '../components/site/DivisionCard'
import WhyChoose from '../components/site/WhyChoose'
import ProjectsSection from '../components/site/ProjectsSection'
import ReviewsPlaceholder from '../components/site/ReviewsPlaceholder'
import FinalCTA from '../components/site/FinalCTA'
import Footer from '../components/site/Footer'

export default function HomePage() {
  return <><Header /><main><Hero /><Section className="divisions" id="divisions" aria-labelledby="divisions-title"><Container><div className="divisions__heading"><p className="eyebrow">Our divisions</p><h2 id="divisions-title" className="sr-only">Our service divisions</h2></div><div className="division-grid"><DivisionCard number="01" title="CS Flooring & Interiors" tagline="Transform your space" description="Thoughtful flooring and remodeling work designed to make your space feel like yours." services={['Vinyl Plank', 'Laminate', 'Hardwood', 'Bathroom Remodeling', 'Kitchen Remodeling']} tone="flooring" cta="Explore Flooring & Interiors" /><DivisionCard number="02" title="CS Home & Commercial Cleaning" tagline="A cleaner tomorrow" description="Dependable cleaning services for the places where life and business happen." services={['Residential Cleaning', 'Commercial / Office Cleaning', 'Post-Construction Cleaning', 'Move-In / Move-Out Cleaning']} tone="cleaning" cta="Explore Cleaning Services" /></div></Container></Section><WhyChoose /><ProjectsSection /><ReviewsPlaceholder /><FinalCTA /></main><Footer /></>
}
