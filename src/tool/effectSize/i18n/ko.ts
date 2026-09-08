import { makeEffectContent } from './localized';
import type { EffectSizeUI } from '../ui';

const ui: EffectSizeUI = {
  groupA: '그룹 A', groupB: '그룹 B', mean: '평균', standardDeviation: '표본 표준편차', sampleSize: '표본 크기', meanHelp: '이 그룹의 평균 결과입니다.', standardDeviationHelp: '표준오차가 아니라 표본 표준편차를 사용하세요.', sampleSizeHelp: '관측값은 최소 2개입니다.', example: '예시 사용', reset: '초기화', clear: '입력 지우기', resultTitle: '효과 해석', difference: '평균 차이 A − B', pooledStandardDeviation: '통합 SD', degreesOfFreedom: '자유도', cohensD: 'Cohen의 d', hedgesG: 'Hedges의 g', correction: '소표본 보정', confidenceInterval: '약 95% 신뢰구간', magnitude: '크기', direction: '방향', uncertainty: '정밀도', higher: '그룹 A가 더 높음', lower: '그룹 A가 더 낮음', equal: '평균이 같음', verySmall: '매우 작음', small: '작음', medium: '중간', large: '큼', crossesZero: '구간이 0을 지남', doesNotCrossZero: '구간이 0을 지나지 않음', chartTitle: '공통 척도에서의 차이', chartDifference: '원시 차이', chartBand: 'Hedges의 g 구간', chartBaseline: '평균이 같은 위치', chartA: '그룹 A 평균', chartB: '그룹 B 평균', chartEmpty: '유효한 값 6개를 입력하면 차이가 표시됩니다.', statusReady: '위 값에서 업데이트되었습니다.', statusInvalid: '6개 입력을 확인하세요. SD는 양수이고 표본 크기는 2 이상이어야 합니다.', statusCopied: '요약을 복사했습니다.', copied: '복사됨', inputError: '유효하지 않은 값', summaryTitle: '두 그룹 효과크기 요약', copySummary: '요약 복사',
};

export const content = makeEffectContent({ language: 'ko', slug: 'two-group-effect-size-calculator', title: '두 집단 효과크기 계산기', description: '독립적인 두 집단의 요약 통계로 Cohen의 d와 Hedges의 g를 계산하고 방향, 크기, 약 95% 신뢰구간을 해석합니다.', ui,
  faq: [
    { question: 'Cohen의 d는 무엇을 측정하나요?', answer: 'Cohen의 d는 두 평균의 차이를 통합 표준편차 단위로 나타냅니다. 부호는 A−B의 방향을 유지하고 절댓값은 표준화된 크기를 보여줍니다.' },
    { question: '왜 Hedges의 g도 표시하나요?', answer: 'Hedges의 g는 Cohen의 d에 소표본 보정을 적용한 값입니다. 집단이 클 때 보정은 작고, 결합 자유도가 적을 때 더 두드러집니다.' },
    { question: '구간이 0을 지나면 효과가 없다는 뜻인가요?', answer: '아닙니다. 약 95% 구간에 0이 포함되어 해당 신뢰수준에서 방향을 정밀하게 판단하기 어렵다는 뜻입니다. 동등성이나 효과 없음의 증거는 아닙니다.' },
    { question: '이 계산기가 t 검정이나 메타분석을 대신하나요?', answer: '아닙니다. 요약 통계로 표준화 평균 차이를 계산할 뿐이며 가설 검정, 가정 확인, 대응 자료 분석, 연구 통합을 수행하지 않습니다.' },
  ],
  howTo: [
    { name: '두 집단의 요약 통계를 입력하세요', text: '각 집단의 평균, 표본 표준편차, 표본 크기를 입력하세요. 같은 측정 척도를 사용하고 부호를 읽기 전에 A와 B를 정하세요.' },
    { name: '표준화된 차이를 읽으세요', text: '직접 추정에는 Cohen의 d를, 소표본 보정을 포함한 추정에는 Hedges의 g를 사용하세요. 결과는 A−B 방향을 유지합니다.' },
    { name: '정밀도와 맥락을 확인하세요', text: '약 95% 신뢰구간과 크기 범주를 함께 읽으세요. 임계값은 참고 기준일 뿐 보편적인 규칙이 아닙니다.' },
  ],
  introTitle: '해석하기 전에 차이를 표준화하세요', introOne: '평균의 원시 차이는 측정 척도에 따라 달라집니다. 이 <strong>두 집단 효과크기 계산기</strong>는 차이를 통합 표준편차로 나누어 표준편차 단위의 거리로 표현합니다.', introTwo: '독립적인 두 집단의 평균, 표본 표준편차, 표본 크기를 입력하세요. Cohen의 d, 소표본 보정 Hedges의 g, 약 95% 구간, A−B 방향을 제공합니다.', calculationTitle: '계산에 사용하는 값', tableHeaders: ['결과', '읽는 방법'], tableRows: [['평균 차이', '측정 단위로 표현한 A−B의 원래 차이.'], ['통합 표준편차', '차이를 표준화하는 데 사용하는 공통 변동성.'], ['Cohen의 d', '소표본 보정 전의 표준화된 차이.'], ['Hedges의 g', '결합 자유도에 따른 보정을 Cohen의 d에 적용한 값.'], ['약 95% 구간', '요약 통계와 정규 근사에 기반한 정밀도 구간.']], directionTitle: '방향 읽기', direction: '부호가 중요합니다. 양수는 A의 평균이 B보다 높음을, 음수는 그 반대를 뜻합니다. 집단을 바꾸면 부호는 바뀌지만 절댓값 크기는 바뀌지 않습니다.', actions: ['두 집단을 같은 측정 척도로 유지하세요.', '표준오차가 아니라 표본 표준편차를 사용하세요.', '관측값이 독립적인지 확인하세요.', '추정치, 구간, 집단 순서, 단위를 보고하세요.'], thresholdTitle: '임계값은 판정이 아닙니다', threshold: '매우 작음, 작음, 중간, 큼이라는 표시는 0.2, 0.5, 0.8 부근의 일반적인 기준을 따릅니다. 실질적 중요성은 결과, 측정의 질, 설계, 중요한 최소 차이에 따라 달라집니다.', precisionTitle: '정밀도도 결과의 일부입니다', precision: '구간이 넓으면 표준화된 차이가 커도 부정확할 수 있습니다. 특히 집단이 작거나 변동성이 클 때 주의하세요. Hedges의 g 구간이 0을 지나면 이 근사 신뢰수준에서 방향이 불확실하다고 보세요.', glossaryTitle: '용어집', glossary: [['통합 표준편차', '두 독립 집단의 공통 변동성을 표본 크기에 맞게 조정한 추정치.'], ['Cohen의 d', '평균 차이를 통합 표준편차로 나눈 값.'], ['Hedges의 g', '소표본 편향을 보정한 표준화 평균 차이.'], ['신뢰구간', '추정의 불확실성을 나타내는 범위이며 고정된 모수에 대한 보장은 아닙니다.']], limitsTitle: '이 도구가 알려주지 않는 것', limits: '이 계산기는 인과관계, 통계적 유의성, 동등성, 임상적 중요성, 정규성, 분산의 동일성 또는 연구의 질을 증명하지 않습니다. 대응 관측값을 지원하지 않으며 요약 통계만으로 사라진 정보를 복원할 수도 없습니다.',
});
