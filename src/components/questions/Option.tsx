import { StyleSheet, Image, ImageSourcePropType, View } from 'react-native'
import RNText from '@shared/RNText'
import { colors } from '@styles/colors'
import Button from '@shared/Button'

const Option = ({
  option,
  isSelected,
  imgSource,
  onPress,
}: {
  option: string
  isSelected: boolean
  imgSource: ImageSourcePropType
  onPress: () => void
}) => (
  <Button
    style={[
      styles.option,
      { backgroundColor: isSelected ? colors.skyblue : colors.lightGrey },
    ]}
    onPress={onPress}
  >
    <View style={styles.rowContainer}>
      <Image style={styles.image} source={imgSource} />
    </View>
    <View style={styles.rowContainer}>
      <RNText
        style={{
          color: isSelected ? colors.lightBlack : colors.grey,
          textAlign: 'center',
        }}
      >
        {option}
      </RNText>
    </View>
  </Button>
)

export default Option

const styles = StyleSheet.create({
  option: {
    flex: 1,
    height: 220,
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  rowContainer: {
    width: '100%',
    alignItems: 'center',
    // borderWidth: 1,
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 10,
  },
})
