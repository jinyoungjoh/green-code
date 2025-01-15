import { StyleSheet, View } from 'react-native'
import React from 'react'
import RNText from '@shared/RNText'
import Button from '@shared/Button'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '@styles/colors'
import ImageSlider from '@components/home/ImageSlider'

const Home = () => {
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
        color={'neonGreen'}
        size="t1"
      >
        나만의{'\n'}반려식물 찾기
      </RNText>
      <ImageSlider />
      <RNText style={styles.centeredText} color={'green'}>
        당신의 공간에 맞는 완벽한 식물을 찾아보세요
      </RNText>
      <Button>시작하기</Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 512,
    overflow: 'hidden',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
    marginBottom: 20,
  },
  centeredText: {
    textAlign: 'center',
  },
})
