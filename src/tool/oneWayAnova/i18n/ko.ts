import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OneWayAnovaUI } from '../ui';

const slug = 'one-way-anova-between-within-groups-calculator';
const title = '집단 간 및 집단 내 분산을 위한 일원 ANOVA 계산기';
const description = '세 개 이상의 독립 집단 평균을 ANOVA 표, Fisher F 통계량, p값, 효과크기로 비교합니다.';
const faq = [
  { question: '일원 ANOVA는 무엇을 검정하나요?', answer: '모든 모집단 평균이 같다는 귀무가설을 검정합니다. 유의한 F 검정은 적어도 하나의 평균이 다름을 보여 주지만 어떤 쌍인지는 알려 주지 않습니다.' },
  { question: '여러 t 검정 대신 ANOVA를 쓰는 이유는 무엇인가요?', answer: '보정하지 않은 쌍별 검정을 많이 하면 거짓 양성 가능성이 커집니다. ANOVA는 선택한 알파 수준에서 먼저 하나의 전체 검정을 수행합니다.' },
  { question: '계산기에 어떤 데이터가 필요한가요?', answer: '각 독립 집단의 연속적인 정량 결과 관측값을 입력합니다. 최소 세 집단과 집단마다 두 개의 관측값이 필요합니다.' },
  { question: 'p값이 유의하면 어떻게 해야 하나요?', answer: '모든 평균이 같지 않다는 증거로 해석하고 Tukey HSD처럼 다중성을 통제하는 계획된 비교를 이어가세요. 가정도 확인해야 합니다.' },
];
const howTo = [
  { name: '독립 집단 입력', text: '세 개 이상의 집단을 만들고 각각에 의미 있는 이름을 지정합니다.' },
  { name: '연속 관측값 추가', text: '측정값을 쉼표, 공백, 세미콜론 또는 줄바꿈으로 구분합니다.' },
  { name: '알파와 F 확인', text: '유의수준을 선택하고 F, p값, 효과크기와 변동 분해를 읽습니다.' },
  { name: '후속 비교 계획', text: '전체 검정이 유의하면 다중 비교를 통제하는 사후 방법으로 차이가 있는 집단 쌍을 찾습니다.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' }, inLanguage: 'ko' };

export const content: ToolLocaleContent<OneWayAnovaUI> = {
  slug, title, description, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '일원 ANOVA가 비교하는 것' },
    { type: 'paragraph', html: '일원 ANOVA는 세 개 이상의 독립 집단에서 정량 결과의 평균을 비교합니다. 전체 변동을 집단 평균과 전체 평균의 거리를 나타내는 집단 간 변동과, 각 집단 안의 관측값이 보이는 자연스러운 퍼짐을 나타내는 집단 내 변동으로 나눕니다.' },
    { type: 'paragraph', html: '전체 귀무가설은 모든 모집단 평균이 같다는 것입니다. 대립가설은 적어도 하나의 평균이 다르다는 것만 말합니다. 작은 p값은 전체 질문에 답하지만 어떤 집단이 다른지 또는 그 차이가 실제로 중요한지는 알려 주지 않습니다.' },
    { type: 'table', headers: ['ANOVA 원인', '제곱합', '자유도', '평균제곱'], rows: [['집단 간', 'SS 집단 간', 'k 빼기 1', 'SS 집단 간 나누기 k 빼기 1'], ['집단 내', 'SS 집단 내', 'N 빼기 k', 'SS 집단 내 나누기 N 빼기 k'], ['전체', 'SS 전체', 'N 빼기 1', '사용하지 않음']] },
    { type: 'title', level: 2, text: 'F 통계량과 p값 읽는 방법' },
    { type: 'paragraph', html: 'F는 집단 간 평균제곱을 집단 내 평균제곱으로 나눈 비율입니다. 집단 평균의 분리가 집단 내부의 자연스러운 퍼짐보다 크면 F가 커지고 F 분포의 오른쪽 꼬리는 작아집니다. 계산기는 그 꼬리를 p값으로 표시합니다.' },
    { type: 'list', items: ['해석하기 전에 알파를 정합니다. 일반적으로 0.05입니다.', 'p가 알파보다 작으면 평균의 전체적 동일성을 기각합니다.', 'p가 알파 이상이면 차이를 뒷받침하는 증거가 부족하다고 보고하며 동일성을 증명한 것은 아닙니다.', '에타 제곱으로 집단 소속과 관련된 전체 관측 변동의 비율을 설명합니다.'] },
    { type: 'tip', title: '유의한 결과는 쌍별 답이 아닙니다', html: '전체 검정은 적어도 하나의 평균이 다름을 보여 줄 수 있지만 차이가 있는 위치를 찾지는 않습니다. Tukey HSD처럼 다중성을 통제하는 방법을 사용하고 신뢰구간과 효과크기도 보고하세요.' },
    { type: 'title', level: 2, text: '해석 전에 확인할 가정' },
    { type: 'paragraph', html: '고전적 모형은 독립 관측값, 집단 내에서 대략 정규적인 오차, 공통 분산을 가정합니다. 계산기는 작은 표본과 큰 집단 불균형에 경고를 표시하므로 이런 경우 가정을 더 주의 깊게 점검해야 합니다.' },
    { type: 'list', items: ['집단 안과 집단 사이에서 관측값의 독립성을 유지합니다.', '이진 전환율 대신 정량 결과를 사용합니다.', '표본이 작거나 집단 크기가 매우 다르면 분포와 잔차를 살펴봅니다.', '등분산이 의심되면 Welch 또는 강건한 방법을 고려합니다.'] },
    { type: 'title', level: 2, text: '재현 가능한 ANOVA 흐름' },
    { type: 'paragraph', html: '집단을 실제 요인 수준에 따라 이름 붙이고 측정 단위를 유지하며 입력값을 확인할 수 있게 합니다. 알파, 집단 크기, ANOVA 표와 후속 방법을 기록하세요. 좋은 보고서는 두 자유도와 함께 F, p값, 효과크기를 제시합니다.' },
    { type: 'tip', title: '이 계산기의 범위', html: '독립 집단을 위한 일원 ANOVA를 계산합니다. 사후검정, 반복 측정, 공변량 조정, 이상값 제거, 정규성 및 등분산성의 공식 진단은 수행하지 않습니다.' },
  ],
  ui: {
    labelGroups: '독립 집단', labelGroupName: '집단 이름', labelObservations: '연속 관측값', labelAlpha: '유의수준 알파', alpha10: '0.10', alpha05: '0.05', alpha01: '0.01', addGroup: '집단 추가', removeGroup: '삭제', analyze: 'ANOVA 다시 계산', reset: '예시 초기화', presetBalanced: '균형 잡힌 잡음', presetSeparated: '뚜렷한 분리', presetSubtle: '미세한 분리', inputHint: '값을 쉼표, 공백, 세미콜론 또는 줄바꿈으로 구분하세요. 각 집단에는 최소 두 개의 관측값이 필요합니다.', emptyTitle: '여기에 분산 다리가 나타납니다', emptyBody: '세 독립 집단을 입력하면 전체 변동이 집단 간 신호와 집단 내 잡음으로 나뉘는 모습을 볼 수 있습니다.', resultTitle: 'ANOVA 결과', significant: '평균 차이의 증거', notSignificant: '전체 차이가 감지되지 않음', labelPValue: 'p값', labelFStatistic: 'F 통계량', labelEtaSquared: '에타 제곱', labelGrandMean: '전체 평균', labelBetween: '집단 간', labelWithin: '집단 내', labelVariationMap: '변동의 위치', labelGroupPlot: '평균의 별자리', plotDescription: '점은 관측값, 고리는 집단 평균, 선은 전체 평균입니다.', labelSignal: '집단 간 신호', labelNoise: '집단 내 잡음', labelSource: '원인', labelSS: 'SS', labelDF: 'df', labelMS: 'MS', labelF: 'F', labelP: 'p', betweenGroups: '집단 간', withinGroups: '집단 내', total: '전체', labelGroupSummary: '집단의 기준점', labelN: 'n', labelMean: '평균', labelSD: 'SD', labelInterpretation: '해석', interpretationSignificant: '선택한 알파 수준에서 집단 평균은 모두 하나의 공통 모집단 평균과 양립하지 않습니다.', interpretationNotSignificant: '선택한 알파 수준에서 공통 모집단 평균을 기각할 충분한 증거가 없습니다.', postHocNote: '이 전체 검정은 다른 집단 쌍을 식별하지 않습니다. 유의하면 다중성을 통제하는 사후 방법을 사용하세요.', warningTitle: '해석 전 확인', warningSmallSamples: '적어도 한 집단의 관측값이 5개보다 적습니다. 분포를 확인하고 정규성 가정을 신중하게 해석하세요.', warningUnbalanced: '가장 큰 집단이 가장 작은 집단의 두 배 이상입니다. 등분산 가정을 더 주의 깊게 살펴보세요.', warningZeroError: '집단 내 변동이 없습니다. 집단 평균이 다르면 F는 무한대입니다.', errorTitle: '입력 확인', errorBody: '집단 값을 확인하고 다시 시도하세요.', errorNeedGroups: 'ANOVA에는 최소 세 집단과 0에서 1 사이의 알파가 필요합니다.', errorNeedValues: '각 집단에는 최소 두 개의 관측값이 필요합니다.', errorInvalidValues: '유한한 숫자 관측값만 사용하세요.', copySummary: '보고 문장', copied: '복사됨', defaultReport: '현재 분석에서 보고 문장을 만듭니다.', copyReport: '문장 복사', reportCopied: '문장 복사됨', reportIntro: '총', reportBetween: '개 관측값에서 일원 ANOVA는', reportWith: 'p값', reportAt: '알파', reportSignificant: '평균이 같다는 전체 귀무가설을 기각합니다.', reportNotSignificant: '평균이 같다는 전체 귀무가설을 기각하지 않습니다.',
  },
};
