import { StyleSheet, View } from 'react-native'
import RNText from '@shared/RNText'
import { PlantRecommendation } from '@models/plants'

const Title = ({ name }: { name: PlantRecommendation['name'] }) => {
  return (
    <View style={styles.container}>
      <RNText
        bold
        size="t2"
        style={{
          textAlign: 'center',
          fontFamily: 'Paperlogy-7Bold',
          width: 255,
        }}
      >
        {name}
      </RNText>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
