import HomePage from './pages/HomePage'
import FlooringInteriorsPage from './pages/FlooringInteriorsPage'
import CleaningServicesPage from './pages/CleaningServicesPage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/flooring-interiors') return <FlooringInteriorsPage />
  if (path === '/cleaning-services') return <CleaningServicesPage />
  if (path === '/projects') return <ProjectsPage />
  return <HomePage />
}
