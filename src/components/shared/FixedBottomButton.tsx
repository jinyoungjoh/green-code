import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button, { TButton } from './Button'

const FixedBottomButton = ({ ...props }: TButton) => {
  const safeBottom = useSafeAreaInsets().bottom

  return (
    <Button
      style={{
        position: 'absolute',
        bottom: safeBottom < 1 ? 15 : safeBottom,
        left: 20,
        right: 20,
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default FixedBottomButton
