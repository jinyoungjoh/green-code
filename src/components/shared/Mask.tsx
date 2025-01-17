import { View, StyleSheet, DimensionValue } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface MaskProps {
  width?: number | string
  height?: number | string
  direction?: 'horizontal' | 'vertical'
}

const Mask = ({
  width = '100%',
  height = '100%',
  direction = 'vertical',
}: MaskProps) => {
  const gradientColors = ['#FFFFFF00', '#FFF'] as [string, string, ...string[]]
  const gradientProps =
    direction === 'horizontal'
      ? { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }
      : { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } }

  return (
    <View
      style={[
        styles.container,
        { width: width as DimensionValue, height: height as DimensionValue },
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        style={StyleSheet.absoluteFill}
        {...gradientProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
})

export default Mask
