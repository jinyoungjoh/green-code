import { StyleSheet, View } from 'react-native'
import RNText from '@shared/RNText'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '@styles/colors'
import ImageSlider from '@components/home/ImageSlider'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/navigation/Navigation'
import FixedBottomButton from '@shared/FixedBottomButton'

// 네비게이션 타입 정의
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProp
}

const Home = ({ navigation }: Props) => {
  const onPress = () => {
    navigation.navigate('Questions')
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffffff', colors.limeGreen]}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <RNText
        style={[styles.title, styles.centeredText]}
        color={'green'}
        size="t1"
      >
        나만의{'\n'}반려식물 찾기
      </RNText>
      <ImageSlider />
      <RNText style={styles.centeredText} color={'lightBlack'}>
        당신의 공간에 맞는 완벽한 식물을 찾아보세요
      </RNText>
      <FixedBottomButton txt="시작하기" onPress={onPress} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 512,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  centeredText: {
    textAlign: 'center',
  },
})
