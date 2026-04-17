import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'jongyu-bunpo-gyesangi';
const title = '온라인 정규 분포 계산기';
const description =
  '정규 분포 확률을 즉시 계산하세요: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) 및 역정규 분포. 평균과 표준 편차를 입력하고 색칠된 영역이 표시된 가우스 종 모양 곡선을 시각화하세요.';

const faqData = [
  {
    question: '정규 분포란 무엇인가요?',
    answer:
      "정규 분포 또는 가우스 종 모양 곡선은 통계학에서 가장 중요한 연속 확률 분포입니다. 평균(μ)에 의해 중심이 결정되고, 표준 편차(σ)에 의해 퍼짐 정도가 결정되는 두 개의 매개변수로 완전히 정의됩니다. 평균을 중심으로 대칭이며 꼬리는 무한히 뻗어나갑니다.",
  },
  {
    question: '확률은 어떻게 계산되나요?',
    answer:
      "확률은 확률 밀도 함수(PDF)를 적분하여 얻습니다. 닫힌 형태의 원시 함수가 존재하지 않기 때문에 오차 함수(erf)를 사용하여 계산됩니다. 이 계산기는 정확한 결과를 위해 고정밀 Abramowitz 및 Stegun 근사법을 사용합니다.",
  },
  {
    question: 'z-점수(z-score)란 무엇인가요?',
    answer:
      'z-점수(또는 표준 점수)는 어떤 값이 평균으로부터 몇 표준 편차만큼 떨어져 있는지를 나타냅니다: z = (X - μ) / σ. 이를 통해 척도가 다른 분포의 값들을 비교할 수 있습니다. 예를 들어, z = 1은 X가 평균보다 정확히 1 표준 편차만큼 높다는 것을 의미합니다.',
  },
  {
    question: '역정규 분포는 언제 사용되나요?',
    answer:
      '역정규 분포는 "p번째 백분위수에 해당하는 X 값은 무엇인가?"라는 질문에 답합니다. 즉, P(X ≤ x) = p가 주어졌을 때 x를 찾는 것입니다. 품질 관리(허용 한계), 추론 통계(임계값), 확률 변수 시뮬레이션 등에 널리 사용됩니다.',
  },
];

const howToData = [
  {
    name: '매개변수 입력',
    text: '정규 분포의 평균(μ)과 표준 편차(σ > 0)를 입력하세요. 기본적으로 표준 정규 분포(μ=0, σ=1)가 사용됩니다.',
  },
  {
    name: '계산 유형 선택',
    text: '모드 선택: 왼쪽 꼬리는 P(X ≤ a), 오른쪽 꼬리는 P(X ≥ a), 구간은 P(a ≤ X ≤ b), 또는 특정 백분위수에 대한 X 값을 찾으려면 역(Inverse)을 선택하세요.',
  },
  {
    name: '결과 및 차트 확인',
    text: '확률은 z-점수와 함께 즉시 표시됩니다. 가우스 종 모양 곡선에는 계산된 확률에 해당하는 색칠된 영역이 나타납니다.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    { name: '정규 분포 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%A0%95%EA%B2%90_%EB%B6%84%ED%8F%AC' },
    { name: '오차 함수 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%98%A4%EC%B0%A8_%ED%95%A8%EC%82%98' },
    { name: 'Abramowitz 및 Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: '표준 점수 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%ED%91%9C%EC%A4%80_%EC%A0%90%EC%82%AC' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '정규 분포 계산기: 실시간 확률 계산' },
    {
      type: 'paragraph',
      html: '<strong>정규 분포 계산기</strong>는 왼쪽 꼬리, 오른쪽 꼬리, 중앙 구간, 역정규 분포 등 모든 정규 분포 확률을 즉시 계산합니다. 평균과 표준 편차만 입력하면 결과를 얻고 가우스 종 모양 곡선으로 시각화할 수 있습니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: '계산 모드', icon: 'mdi:function-variant' },
        { value: '실시간', label: '실시간 결과', icon: 'mdi:lightning-bolt' },
        { value: '무료', label: '가입 불필요', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: '계산 모드' },
    {
      type: 'table',
      headers: ['모드', '설명', '사용 예시'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', '값 a까지의 누적 확률 (왼쪽 꼬리).', '특정 점수 임계값 미만인 학생의 비율.'],
        ['<strong>P(X ≥ a)</strong>', '값 a 이상의 오른쪽 꼬리 확률.', '품질 임계값을 초과할 확률.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', '중앙 또는 비대칭 구간 내의 확률.', '허용 오차 범위 내 부품의 비율.'],
        ['<strong>역(Inverse)</strong>', 'P(X ≤ x) = p를 만족하는 X 찾기 (p번째 백분위수).', '가설 검정의 임계값.'],
      ],
    },
    {
      type: 'tip',
      title: '68-95-99.7 경험적 법칙',
      html: '모든 정규 분포에서 데이터의 <strong>68%</strong>는 평균의 ±1σ 이내에, <strong>95%</strong>는 ±2σ 이내에, <strong>99.7%</strong>는 ±3σ 이내에 위치합니다. μ=0, σ=1일 때 P(-1 ≤ z ≤ 1)을 계산하여 이를 확인해 보세요.',
    },
    { type: 'title', level: 2, text: '핵심 용어 사전' },
    {
      type: 'glossary',
      items: [
        { term: '평균 (μ)', definition: '위치 매개변수. 가우스 종 모양 곡선의 중심을 결정함.' },
        { term: '표준 편차 (σ)', definition: '척도 매개변수. 종 모양 곡선의 폭을 결정하며, 반드시 양수여야 함.' },
        { term: 'z-점수', definition: '표준화된 값: z = (X - μ) / σ. X가 평균으로부터 몇 표준 편차만큼 떨어져 있는지 나타냄.' },
        { term: 'PDF', definition: '확률 밀도 함수. 특정 구간에서 PDF 아래의 면적은 해당 구간의 확률과 같음.' },
      ],
    },
  ],
  ui: {
    labelTitle: '정규 분포',
    labelMean: '평균',
    labelStdDev: '표준 편차',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: '역정규',
    labelValue: 'X 값 (a)',
    labelValueA: '하한 (a)',
    labelValueB: '상한 (b)',
    labelPercentile: '백분위수 p (0 < p < 1)',
    resultProbability: '확률',
    resultX: 'X 값',
    resultZScore: 'z-점수',
    resultZScoreA: 'z₁ (하한)',
    resultZScoreB: 'z₂ (상한)',
    hintStdDev: '표준 편차는 0보다 커야 합니다.',
    hintPercentile: '백분위수는 0과 1 사이여야 합니다(0, 1 제외).',
    labelChart: '가우스 종 모양 곡선',
    chartDesc: '색칠된 영역은 계산된 확률에 해당합니다.',
    labelReport: '보고서용 요약',
    btnCopy: '요약 복사',
    btnCopied: '복사 완료!',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
  },
};
