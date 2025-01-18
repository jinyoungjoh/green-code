import { Pressable } from 'react-native'
import Icon from '@shared/Icon'
import { RootStackParamList } from './Navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type NavHeaderRightProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Recommendation',
    undefined
  >
}

const NavHeaderRight = ({ navigation }: NavHeaderRightProps) => {
  return (
    <Pressable
      onPress={() => {
        navigation.popToTop()
      }}
      style={{ marginLeft: -8, paddingRight: 8, padding: 10 }}
      hitSlop={20}
    >
      <Icon size={24} name={'navClose'} />
    </Pressable>
  )
}

export default NavHeaderRight
