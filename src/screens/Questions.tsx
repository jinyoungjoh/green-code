import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import RNText from '@shared/RNText'
import { questions } from 'src/data/questions'
import Spacer from '@shared/Spacer'
import FixedBottomButton from '@shared/FixedBottomButton'
import Option from '@components/questions/Option'
import { recommendPlants } from 'src/utils/plantUtils'
import { RootStackParamList } from 'src/navigation/Navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const TOTAL_STEPS = questions.length

// 네비게이션 타입 정의
type QuestionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Questions'
>

type Props = {
  navigation: QuestionScreenNavigationProp
}

const Questions = ({ navigation }: Props) => {
  const [step, setSteps] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const question = questions[step]
  const isLastStep = step === TOTAL_STEPS - 1

  const handleOptionPress = (index: number) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev]
      updatedAnswers[step] = index
      return updatedAnswers
    })
  }

  const handleNextPress = () => {
    if (!isLastStep) {
      setSteps(step + 1)
    } else {
      const result = recommendPlants(selectedAnswers)
      navigation.navigate('Recommendation', { plantInfo: result })
    }
  }

  return (
    <View style={styles.container}>
      <RNText color="blue">
        {step + 1}/{TOTAL_STEPS}
      </RNText>
      <Spacer size={4} />
      <RNText size="t4" style={{ height: 58, flexWrap: 'wrap', width: '100%' }}>
        {question.question}
      </RNText>
      <Spacer size={20} />
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <Option
            key={index}
            option={option.option}
            isSelected={selectedAnswers[step] === index}
            onPress={() => handleOptionPress(index)}
          />
        ))}
      </View>
      <FixedBottomButton
        color="blue"
        txt={isLastStep ? '완료' : '다음'}
        onPress={handleNextPress}
        disabled={selectedAnswers[step] === undefined}
      />
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 20,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  option: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
  },
})
