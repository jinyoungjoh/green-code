import { StyleSheet, View } from 'react-native'
import { PlantRecommendation } from '@models/plants'
import RNText from '@shared/RNText'

const Description = ({
  description,
}: {
  description: PlantRecommendation['description']
}) => {
  return (
    <View style={styles.container}>
      <RNText style={{ fontSize: 14 }} color={'darkGrey'}>
        {description}
      </RNText>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
  },
})
