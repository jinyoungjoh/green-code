import { Questions } from '@models/plants'

export const questions: Questions = [
  {
    question: '하루 중 집에 얼마나 자주 계시나요?',
    options: [
      { option: '대부분 집에 있다', score: { T: 1, W: 1 }, imageName: 'house' },
      {
        option: '집에 자주 있지 않다',
        score: { T: 0, W: 0 },
        imageName: 'building',
      },
    ],
  },
  {
    question: '식물을 키우실 장소는 햇빛이 많은가요, 적은가요?',
    options: [
      {
        option: '풍부한 햇빛을 받는다',
        score: { H: 1, W: 1 },
        imageName: 'sun',
      },
      {
        option: '약간의 햇빛만 받는다',
        score: { H: 0, W: 0 },
        imageName: 'cloud',
      },
    ],
  },
  {
    question: '반려동물이 있나요?',
    options: [
      {
        option: '네, 반려동물이 있습니다',
        score: { S: 1 },
        imageName: 'circle',
      },
      {
        option: '아니요, 반려동물이 없습니다',
        score: { S: 0 },
        imageName: 'x',
      },
    ],
  },
  {
    question: '식물의 크기는 어떤 것이 좋으신가요?',
    options: [
      { option: '큰 식물', score: { H: 1 }, imageName: 'pottedPlantMiddle' },
      { option: '작은 식물', score: { H: 0 }, imageName: 'pottedPlantSmall' },
    ],
  },
  {
    question: '식물 관리 주기는 어느 정도로 자주 해주길 원하시나요?',
    options: [
      {
        option: '자주 관리해야 한다',
        score: { W: 1 },
        imageName: 'starTriple',
      },
      {
        option: '관리 간편한 식물을 선호한다',
        score: { W: 0 },
        imageName: 'star',
      },
    ],
  },
  {
    question: '공기 정화 기능이 중요한가요?',
    options: [
      {
        option: '공기 정화 기능이 중요하다',
        score: { S: 1 },
        imageName: 'circle',
      },
      {
        option: '공기 정화 기능은 중요하지 않다',
        score: { S: 0 },
        imageName: 'x',
      },
    ],
  },
  {
    question:
      '이 식물을 실내에서 키우고 싶으신가요, 아니면 실외에서 키우고 싶으신가요?',
    options: [
      { option: '실내에서 키운다', score: { H: 1, W: 1 }, imageName: 'house' },
      {
        option: '실외에서 키운다',
        score: { H: 0, W: 0 },
        imageName: 'sunrise',
      },
    ],
  },
  {
    question: '긴 수명의 식물을 선호하시나요?',
    options: [
      { option: '긴 수명을 선호한다', score: { S: 1 }, imageName: 'circle' },
      { option: '수명은 중요하지 않다', score: { S: 0 }, imageName: 'x' },
    ],
  },
  {
    question: '식물의 색상이나 형태는 중요한가요?',
    options: [
      {
        option: '형태와 색상이 중요하다',
        score: { T: 1 },
        imageName: 'circle',
      },
      {
        option: '형태와 색상은 크게 중요하지 않다',
        score: { T: 0 },
        imageName: 'x',
      },
    ],
  },
  {
    question: '식물의 물 주기는 어떤 스타일이 좋으신가요?',
    options: [
      {
        option: '자주 물을 주는 스타일',
        score: { W: 1 },
        imageName: 'dropletMiddle',
      },
      {
        option: '가끔 물을 주는 스타일',
        score: { W: 0 },
        imageName: 'dropletSmall',
      },
    ],
  },
]
