import { StyleSheet, View } from 'react-native'
import { useEffect } from 'react'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import Plant from './Plant'

const ITEM_WIDTH = 100

const AnimatedRow = ({ data }: { data: number[] }) => {
  const sv = useSharedValue(0)
  const toValue = (ITEM_WIDTH + 10) * data.length

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(-toValue, {
        duration: 4000,
        easing: Easing.linear,
      }),
      -1,
    )
  }, [sv, toValue])

  const animatedStyle = useAnimatedStyle(() => ({
    flexDirection: 'row',
    transform: [{ translateX: sv.value }],
  }))

  return (
    <View style={styles.row}>
      <Animated.View style={animatedStyle}>
        {data.map((item: number, index: number) => (
          <Plant key={`original-${index}`} item={item} />
        ))}
      </Animated.View>
      <Animated.View style={animatedStyle}>
        {data.map((item: number, index: any) => (
          <Plant key={`duplicate-${index}`} item={item} />
        ))}
      </Animated.View>
    </View>
  )
}

const ImageSlider = () => (
  <View style={styles.container}>
    <AnimatedRow data={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
    <AnimatedRow data={[3, 4, 5, 6, 7, 8, 0, 1, 2]} />
    <AnimatedRow data={[6, 7, 8, 0, 1, 2, 3, 4, 5]} />
  </View>
)

export default ImageSlider

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
})
