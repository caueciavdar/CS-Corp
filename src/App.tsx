import HomePage from './pages/HomePage'
import FlooringInteriorsPage from './pages/FlooringInteriorsPage'

export default function App() {
  return window.location.pathname.replace(/\/$/, '') === '/flooring-interiors'
    ? <FlooringInteriorsPage />
    : <HomePage />
}
