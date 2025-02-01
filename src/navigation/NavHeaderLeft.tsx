import { Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@shared/Icon'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const NavHeaderLeft = () => {
  const navigation = useNavigation()
  const top = useSafeAreaInsets().top

  return (
    <Pressable
      onPress={() => {
        navigation.goBack()
      }}
      style={[styles.container, { paddingTop: top }]}
      hitSlop={20}
    >
      <Icon size={24} name={'navArrowBack'} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    width: 68,
    justifyContent: 'center',
    marginLeft: -10,
    marginBottom: 30,
  },
})

export default NavHeaderLeft
