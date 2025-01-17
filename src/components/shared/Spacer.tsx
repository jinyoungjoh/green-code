import { View } from 'react-native'

const Spacer = ({ size = 16 }: { size?: number }) => {
  return <View style={{ width: '100%', height: size }} />
}

export default Spacer
