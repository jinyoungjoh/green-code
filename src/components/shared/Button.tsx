import { Pressable, PressableProps, StyleSheet } from 'react-native'
import React from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import RNText from './RNText'
import { colors } from '@styles/colors'

interface TButton extends PressableProps {
  onPress?: () => void
  children: React.ReactNode
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const Button = ({ onPress, children, ...props }: TButton) => {
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
          backgroundColor: colors.neonGreen,
        },
        animatedStyles,
      ]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...props}
    >
      <RNText color={'white'}>{children}</RNText>
    </AnimatedPressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 80,
    right: 80,
    bottom: 32,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
})
