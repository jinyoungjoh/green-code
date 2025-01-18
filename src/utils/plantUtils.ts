import { Score, PlantRecommendation } from '@models/plants'
import { PLANT_TYPES, PLANT_RECOMMENDATIONS } from '@constants/plants'
import { questions } from 'src/data/questions'

/**
 * 1. 사용자가 선택한 답변에 따라 점수 계산
 */
function calculateScore(selectedAnswers: number[]): Score {
  const initialScore: Score = { H: 0, T: 0, W: 0, S: 0 }

  return clampScore(
    selectedAnswers.reduce(
      (accumulatedScore, selectedAnswerIndex, questionIndex) => {
        const question = questions[questionIndex]
        const selectedOptionData = question.options[selectedAnswerIndex]

        if (selectedOptionData?.score) {
          for (const key in selectedOptionData.score) {
            accumulatedScore[key as keyof Score] +=
              selectedOptionData.score[key as keyof Score]!
          }
        }

        return accumulatedScore
      },
      initialScore,
    ),
  )
}

/**
 * 1-2. 점수 객체의 값들을 0과 1 사이로 클램핑
 */
function clampScore(score: Score): Score {
  const clampedScore: Score = { H: 0, T: 0, W: 0, S: 0 }

  for (const key in score) {
    if (score.hasOwnProperty(key)) {
      clampedScore[key as keyof Score] = Math.min(
        Math.max(score[key as keyof Score], 0),
        1,
      )
    }
  }

  return clampedScore
}

/**
 * 2. 사용자의 점수와 가장 가까운 식물 유형 계산
 */
function findBestMatch(score: Score): string {
  return Object.keys(PLANT_TYPES).reduce(
    (bestMatch, type) => {
      const typeScore = PLANT_TYPES[type]
      const distance = calculateDistance(score, typeScore)

      return distance < bestMatch.minDistance
        ? { type, minDistance: distance }
        : bestMatch
    },
    { type: Object.keys(PLANT_TYPES)[0], minDistance: Infinity },
  ).type
}

/**
 * 2-1. 주어진 점수 객체와 기준 점수 객체 간의 유클리드 거리 계산
 */
function calculateDistance(score: Score, typeScore: Score): number {
  return Math.sqrt(
    Object.keys(score).reduce((sum, key) => {
      const diff =
        (score[key as keyof Score] || 0) - (typeScore[key as keyof Score] || 0)
      return sum + Math.pow(diff, 2)
    }, 0),
  )
}

/**
 * 사용자의 답변에 따라 추천 식물 반환
 */
function recommendPlants(selectedAnswers: number[]): PlantRecommendation {
  const score = calculateScore(selectedAnswers)
  const bestMatchType = findBestMatch(score)
  return PLANT_RECOMMENDATIONS[bestMatchType]
}

export { recommendPlants }
