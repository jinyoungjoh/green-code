import { QuestionImageKeys } from '@assets/images/questions'

type Option = {
  option: string
  score: Partial<Score>
  imageName: QuestionImageKeys
}

type Question = {
  question: string
  options: Option[]
}

export type Questions = Question[]

export interface Score {
  H: number
  T: number
  W: number
  S: number
}

export interface PlantTypes {
  [key: string]: Score
}

export interface PlantRecommendation {
  name: string
  description: string
  plants: string[]
}

export type PlantRecommendations = {
  [key in keyof PlantTypes]: PlantRecommendation
}
