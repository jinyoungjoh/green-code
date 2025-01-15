export const typographyMap = {
  t1: {
    fontFamily: 'Paperlogy-7Bold',
    fontSize: 32,
    lineHeight: 40,
  },
  t2: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 28,
    lineHeight: 36,
  },
  t3: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 24,
    lineHeight: 32,
  },
  t4: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    lineHeight: 28,
  },
  t5: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
}

export type Typography = keyof typeof typographyMap
