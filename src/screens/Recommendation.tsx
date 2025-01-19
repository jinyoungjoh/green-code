import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from 'src/navigation/Navigation'
import { RouteProp } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Title from '@components/recommendation/Title'
import PlantInfo from '@components/recommendation/PlantInfo'
import Description from '@components/recommendation/Description'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Animated, { Easing, FlipInEasyY } from 'react-native-reanimated'
import { colors } from '@styles/colors'

type RecommendationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Recommendation'
>

type Props = {
  navigation: RecommendationNavigationProp
  route: RouteProp<RootStackParamList, 'Recommendation'>
}

const PlantRecommendation = ({ navigation, route }: Props) => {
  const {
    plantInfo: { name, description, plants },
  } = route.params

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#CEE6FD', '#FFFFFF', '#CEE1FC', '#FFFFFF']}
        locations={[0, 0.24, 0.69, 1]}
        start={{ x: 0, y: 0 }} // 왼쪽 상단
        end={{ x: 1, y: 1 }} // 오른쪽 하단
        style={styles.gradient}
      >
        <Animated.View
          style={styles.infoContainer}
          entering={FlipInEasyY.duration(900)
            .delay(300)
            .easing(Easing.in(Easing.elastic(2.3)))}
        >
          <Title name={name} />
          <Description description={description} />
          <PlantInfo plants={plants} />
        </Animated.View>
      </LinearGradient>
    </View>
  )
}

export default PlantRecommendation

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF90',
    width: '90%',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 16,
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    shadowColor: 'rgb(201, 211, 230)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 30,
  },
})
