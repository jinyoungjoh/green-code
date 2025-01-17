import { TColors } from '@styles/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from './Button'
import { View } from 'react-native'

const FixedBottomButton = ({
  txt,
  color,
  disabled,
  onPress,
}: {
  txt: string
  color?: TColors
  disabled?: boolean
  onPress: () => void
}) => {
  const safeBottom = useSafeAreaInsets().bottom

  return (
    <View
      style={{
        position: 'absolute',
        bottom: safeBottom < 1 ? 10 : safeBottom,
        left: 20,
        right: 20,
      }}
    >
      <Button color={color} onPress={onPress} disabled={disabled}>
        {txt}
      </Button>
    </View>
  )
}

export default FixedBottomButton
