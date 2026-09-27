import HomePage from './pages/HomePage'
import FlooringInteriorsPage from './pages/FlooringInteriorsPage'
import CleaningServicesPage from './pages/CleaningServicesPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/flooring-interiors') return <FlooringInteriorsPage />
  if (path === '/cleaning-services') return <CleaningServicesPage />
  return <HomePage />
}
