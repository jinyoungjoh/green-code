import { Pressable, StyleSheet } from 'react-native'
import Icon from '@shared/Icon'
import { RootStackParamList } from './Navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type NavHeaderRightProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Recommendation',
    undefined
  >
}

const NavHeaderRight = ({ navigation }: NavHeaderRightProps) => {
  const top = useSafeAreaInsets().top
  return (
    <Pressable
      onPress={() => {
        navigation.popToTop()
      }}
      style={[styles.container, { paddingTop: top }]}
      hitSlop={20}
    >
      <Icon size={24} name={'navClose'} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 68,
    width: 68,
    justifyContent: 'center',
    marginLeft: -10,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 20,
  },
})

export default NavHeaderRight
