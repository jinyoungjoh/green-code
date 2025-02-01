import ResourcePreloader from '@components/ResourcePreloader'
import Navigation from 'src/navigation/Navigation'
import '@expo/metro-runtime'

export default function App() {
  return (
    <ResourcePreloader>
      <Navigation />
    </ResourcePreloader>
  )
}
