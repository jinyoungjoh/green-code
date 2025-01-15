import React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import { colors, TColors } from '@styles/colors'
import { Typography, typographyMap } from '@styles/typography'

interface RNTextProps extends TextProps {
  size?: Typography
  color?: TColors
  textAlign?: TextStyle['textAlign']
  fontWeight?: TextStyle['fontWeight']
  bold?: boolean
}

const RNText = ({
  size = 't5',
  color = 'black',
  textAlign,
  fontWeight,
  bold,
  style,
  children,
  ...props
}: RNTextProps) => {
  return (
    <Text
      style={[
        {
          color: colors[color],
          textAlign,
          fontWeight: bold ? 'bold' : fontWeight,
          ...typographyMap[size],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}

export default RNText
