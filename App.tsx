import ResourcePreloader from '@components/ResourcePreloader'
import Home from '@screens/Home'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <ResourcePreloader>
        <Home />
      </ResourcePreloader>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
