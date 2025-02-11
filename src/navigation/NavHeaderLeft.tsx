import { Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@shared/Icon'

const NavHeaderLeft = () => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => {
        navigation.goBack()
      }}
      style={styles.container}
      hitSlop={20}
    >
      <Icon size={24} name={'navArrowBack'} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 64,
    justifyContent: 'center',
  },
})

export default NavHeaderLeft
