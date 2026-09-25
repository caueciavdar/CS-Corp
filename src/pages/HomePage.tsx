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
  return <><Header /><main><Hero /><Section className="divisions" id="divisions" aria-labelledby="divisions-title"><Container><div className="section-heading"><p className="eyebrow">Our divisions</p><h2 id="divisions-title">Two specialties.<br /><span>One trusted name.</span></h2></div><div className="division-grid"><DivisionCard number="01" title="CS Flooring & Interiors" description="Thoughtful flooring and remodeling work designed to make your space feel like yours." services={['Vinyl Plank Flooring', 'Laminate Flooring', 'Hardwood Flooring', 'Bathroom Remodeling', 'Kitchen Remodeling']} tone="dark" /><DivisionCard number="02" title="CS Home & Commercial Cleaning" description="Dependable cleaning services for the places where life and business happen." services={['Residential Cleaning', 'Commercial / Office Cleaning', 'Post-Construction Cleaning', 'Move-In / Move-Out Cleaning']} tone="blue" /></div></Container></Section><WhyChoose /><ProjectsSection /><ReviewsPlaceholder /><FinalCTA /></main><Footer /></>
}
