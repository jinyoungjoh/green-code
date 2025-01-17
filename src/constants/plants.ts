import { PlantRecommendations, PlantTypes } from 'src/models/plants'

export const plantTypes: PlantTypes = {
  HTWA: { H: 1, T: 1, W: 1, S: 1 },
  HTWB: { H: 1, T: 1, W: 0, S: 0 },
  HTWE: { H: 1, T: 0, W: 0, S: 1 },
  HTWF: { H: 1, T: 0, W: 1, S: 1 },
  LTWA: { H: 0, T: 1, W: 1, S: 1 },
  LTWB: { H: 0, T: 1, W: 0, S: 0 },
  LTWE: { H: 0, T: 0, W: 0, S: 1 },
  LTWF: { H: 0, T: 0, W: 1, S: 1 },
  HTFA: { H: 1, T: 1, W: 0, S: 0 },
  HTFB: { H: 1, T: 1, W: 0, S: 0 },
  HTFE: { H: 1, T: 0, W: 0, S: 0 },
  HTFF: { H: 1, T: 0, W: 0, S: 0 },
  LFWA: { H: 0, T: 1, W: 1, S: 1 },
  LFWB: { H: 0, T: 0, W: 1, S: 1 },
  LFWE: { H: 0, T: 0, W: 1, S: 0 },
  LFWF: { H: 0, T: 0, W: 0, S: 0 },
}

// 추천 식물
export const plantRecommendations: PlantRecommendations = {
  HTWA: {
    name: '햇살 속 자연주의자',
    description:
      '햇빛이 풍부하고 관리가 쉬운 식물을 선호하며 강아지나 고양이와 함께 살기 좋은 타입입니다.',
    plants: ['몬스테라', '고무나무'],
  },
  HTWB: {
    name: '실내 정원의 헌신자',
    description:
      '실내 정원을 만들어 헌신적으로 관리하며 독특한 식물에 관심이 많은 타입입니다.',
    plants: ['스투키', '고사리'],
  },
  HTWE: {
    name: '실용적 공기 정화 전문가',
    description:
      '관리 용이성과 공기 정화 효과가 높은 식물을 선호하며 반려동물과의 조화를 중요시합니다.',
    plants: ['떡갈잎 고무나무', '스킨답서스'],
  },
  HTWF: {
    name: '자연 속 균형자',
    description:
      '환경을 조화롭게 꾸미고, 최소한의 관리로도 잘 자라는 식물을 선호하는 타입입니다.',
    plants: ['선인장', '관엽식물'],
  },
  HTFA: {
    name: '어두운 밤의 조용한 예술가',
    description:
      '저녁 시간대에 어울리는 관리가 쉬운 식물을 선호하며 예술적 감각이 뛰어난 타입입니다.',
    plants: ['칼라디움', '페페로미아'],
  },
  HTFB: {
    name: '신비로운 탐험가',
    description:
      '관리가 적고도 신비한 매력이 있는 식물을 선호하며 반려동물과 조화를 중요시합니다.',
    plants: ['기니아 호야', '공기정화식물'],
  },
  HTFE: {
    name: '느긋한 정원사',
    description:
      '관리 주기가 긴 식물을 선호하며 자연과의 교감을 통해 안정감을 느끼는 타입입니다.',
    plants: ['크루시아', '행잉 플랜트'],
  },
  HTFF: {
    name: '휴식을 중시하는 식물 애호가',
    description:
      '관리를 최소화하며도 시각적 만족감을 줄 수 있는 식물을 선호하는 타입입니다.',
    plants: ['선인장', '필로덴드론'],
  },
  LTWA: {
    name: '심플한 실용주의자',
    description:
      '적은 관리와 실용성을 중시하며, 심플한 디자인의 식물을 선호합니다.',
    plants: ['미니 화분', '선인장'],
  },
  LTWB: {
    name: '꾸준한 작은 정원사',
    description:
      '꾸준한 관리로 작은 정원을 가꾸며, 소소한 즐거움을 추구하는 타입입니다.',
    plants: ['다육식물', '토피어리'],
  },
  LTWE: {
    name: '깔끔한 공간의 수호자',
    description:
      '깔끔하고 관리가 쉬운 식물을 선호하며 공간 정리를 중요시하는 타입입니다.',
    plants: ['행잉 플랜트', '대나무 야자'],
  },
  LTWF: {
    name: '미니멀리스트 자연 애호가',
    description:
      '최소한의 노력으로 자연과의 조화를 이루는 식물을 선호하는 타입입니다.',
    plants: ['산세베리아', '제라늄'],
  },
  LFWA: {
    name: '작은 공간의 조화로운 창조자',
    description:
      '작은 공간에서도 자연과의 조화를 만들어내며 반려동물과의 공존을 중요시합니다.',
    plants: ['스킨답서스', '미니 몬스테라'],
  },
  LFWB: {
    name: '신비로운 작은 정원사',
    description:
      '관리가 간단하며 신비로운 매력을 가진 식물을 선호하며 작은 공간에 적합한 타입입니다.',
    plants: ['아글라오네마', '비고나'],
  },
  LFWE: {
    name: '게으른 자연과의 공존자',
    description:
      '게으른 관리에도 잘 자라는 식물을 선호하며 공간 활용을 중시하는 타입입니다.',
    plants: ['크루시아', '행잉 플랜트'],
  },
  LFWF: {
    name: '감각적 여유를 즐기는 자연주의자',
    description:
      '최소한의 관리로도 감각적 만족감을 주는 식물을 선호하며 여유를 중시합니다.',
    plants: ['선인장', '칼라디움'],
  },
}
