import { StyleSheet, View } from 'react-native'
import { PlantRecommendation } from '@models/plants'
import plantInfoData from '@data/plants.json'
import RNText from '@shared/RNText'
import { colors } from '@styles/colors'

type PlantInfoDataKeys = keyof typeof plantInfoData

const Care = ({
  care,
}: {
  care: (typeof plantInfoData)[PlantInfoDataKeys]['care']
}) => {
  const { watering, humidity, temperature, light } = care

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 1.5,
          backgroundColor: colors.lightGrey,
          marginVertical: 10,
        }}
      />
      <View style={{ gap: 4, marginTop: 10 }}>
        <View style={styles.rowBetween}>
          <RNText size="t7" color="darkGrey">
            물 주기:
          </RNText>
          <RNText size="t7" color="darkGrey">
            {watering}
          </RNText>
        </View>
        <View style={styles.rowBetween}>
          <RNText size="t7" color="darkGrey">
            습도:
          </RNText>
          <RNText size="t7" color="darkGrey">
            {humidity}
          </RNText>
        </View>
        <View style={styles.rowBetween}>
          <RNText size="t7" color="darkGrey">
            온도:
          </RNText>
          <RNText size="t7" color="darkGrey">
            {temperature}
          </RNText>
        </View>
        <View style={styles.rowBetween}>
          <RNText size="t7" color="darkGrey">
            빛 환경:
          </RNText>
          <RNText size="t7" color="darkGrey">
            {light}
          </RNText>
        </View>
      </View>
    </View>
  )
}

const PlantImage = ({ plants }: { plants: PlantRecommendation['plants'] }) => {
  const plantInfo = plantInfoData[plants[0] as PlantInfoDataKeys]
  const { name, description, care } = plantInfo

  return (
    <View style={{ gap: 16 }}>
      <View style={styles.container}>
        <RNText size="t4" bold textAlign="center">
          {name}
        </RNText>
        <RNText size="t7" color="darkGrey">
          {description}
        </RNText>
        <Care care={care} />
      </View>
    </View>
  )
}

export default PlantImage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    gap: 10,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
