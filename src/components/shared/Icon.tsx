import { Image } from 'react-native'
import Icons from '@assets/icons'

type TIcons = keyof typeof Icons

const Icon = ({ size, name }: { size: number; name: TIcons }) => {
  return (
    <Image
      style={{ width: size, height: size }}
      source={Icons[name]}
      resizeMode={'contain'}
    />
  )
}

export default Icon
