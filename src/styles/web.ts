import { Platform, StyleProp, ViewStyle } from 'react-native'
import { colors } from './colors'

export const isWeb = Platform.OS === 'web'

const contentStyle: StyleProp<ViewStyle> = {
  alignItems: 'center',
  backgroundColor: '#FFF',
}

const boxContainer: StyleProp<ViewStyle> = {
  width: '100%',
  maxWidth: 540,
  shadowColor: colors.darkGrey,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 40,
}

export const screenOptions = {
  contentStyle: isWeb ? contentStyle : { backgroundColor: '#FFF' },
}

export const webBoxContainer = isWeb ? boxContainer : {}
