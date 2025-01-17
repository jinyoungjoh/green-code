import { Image, StyleSheet, View } from 'react-native'
import PLANTS from '@assets/images/plants'
const plantImages = Object.values(PLANTS)

const Plant = ({ item }: { item: number }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={plantImages[item]}
      resizeMode="contain"
    />
  </View>
)

export default Plant

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FFFFFF80',
    borderWidth: 1,
    borderColor: '#F7F8FB',
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
})
