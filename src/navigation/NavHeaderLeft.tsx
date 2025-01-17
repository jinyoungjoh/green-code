import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@shared/Icon'

const NavHeaderLeft = () => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => {
        navigation.goBack()
      }}
      style={{ marginLeft: -8, paddingRight: 8 }}
      hitSlop={20}
    >
      <Icon size={24} name={'navArrowBack'} />
    </Pressable>
  )
}

export default NavHeaderLeft
