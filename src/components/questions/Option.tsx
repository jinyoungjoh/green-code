import { StyleSheet } from 'react-native'
import RNText from '@shared/RNText'
import { colors } from '@styles/colors'
import Button from '@shared/Button'

const Option = ({
  option,
  isSelected,
  onPress,
}: {
  option: string
  isSelected: boolean
  onPress: () => void
}) => (
  <Button
    style={[
      styles.option,
      { backgroundColor: isSelected ? colors.skyblue : colors.lightGrey },
    ]}
    onPress={onPress}
  >
    <RNText style={{ color: isSelected ? colors.lightBlack : colors.grey }}>
      {option}
    </RNText>
  </Button>
)

export default Option

const styles = StyleSheet.create({
  option: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
  },
})
