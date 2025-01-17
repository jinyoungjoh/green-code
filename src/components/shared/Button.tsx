import {
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import RNText from './RNText'
import { colors, TColors } from '@styles/colors'

interface TButton extends PressableProps {
  onPress?: () => void
  color?: TColors
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  children: React.ReactNode
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const Button = ({
  onPress,
  color,
  children,
  style,
  disabled,
  ...props
}: TButton) => {
  const sv = useSharedValue(1)

  const onPressIn = () => {
    sv.value = withTiming(0.97, { duration: 100 })
  }

  const onPressOut = () => {
    sv.value = withTiming(1, { duration: 100 })
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: sv.value }],
    }
  })

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: color ? colors[color] : colors.green,
          opacity: disabled ? 0.2 : 1,
        },
        style,
        animatedStyles,
      ]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...props}
      disabled={disabled}
    >
      <RNText color={'white'}>{children}</RNText>
    </AnimatedPressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
})
