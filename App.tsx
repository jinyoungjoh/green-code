import ResourcePreloader from '@components/ResourcePreloader'
import Navigation from 'src/navigation/Navigation'

export default function App() {
  return (
    <ResourcePreloader>
      <Navigation />
    </ResourcePreloader>
  )
}
