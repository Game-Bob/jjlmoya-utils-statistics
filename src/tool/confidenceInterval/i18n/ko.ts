import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'confidence-interval-calculator';
const title = '온라인 신뢰 구간 계산기';
const description =
  'Z 분포 또는 Student t 분포를 사용하여 모집단 평균에 대한 신뢰 구간을 계산합니다. 표본 평균, 표준 편차, 표본 크기 및 신뢰 수준을 입력하면 구간, 오차 한계 및 임계값을 즉시 알 수 있습니다.';

const faqData = [
  {
    question: '신뢰 구간이란 무엇인가요?',
    answer:
      '신뢰 구간(CI)은 표본 데이터로부터 계산된 값의 범위로, 특정 확률(신뢰 수준)에서 실제 모집단 매개변수가 포함됩니다. 예를 들어, 평균에 대한 95% 신뢰 구간은 샘플링을 여러 번 반복할 경우 계산된 구간의 95%에 실제 모집단 평균이 포함된다는 것을 의미합니다.',
  },
  {
    question: '언제 t 분포 대신 Z 분포를 사용해야 하나요?',
    answer:
      '모집단 표준 편차(σ)가 알려져 있거나 n이 큰 경우(30 초과)에는 Z를 사용합니다. 표본 표준 편차(s)만 사용할 수 있고 n이 작은 경우에는 Student t를 사용합니다. n > 30인 경우 두 분포는 실질적으로 동일하지만, σ를 모를 때는 t 분포가 더 보수적이고 기술적으로 정확합니다.',
  },
  {
    question: '표본 크기가 신뢰 구간의 폭에 어떤 영향을 미치나요?',
    answer:
      '신뢰 구간의 폭은 1/√n에 비례합니다. 즉, 표본 크기를 4배로 늘리면 오차 한계가 절반으로 줄어듭니다. 이는 큰 표본이 더 정밀한 추정치를 제공하는 이유이며, 통계 연구 설계에서 표본 크기 계획이 중요한 이유를 설명해 줍니다.',
  },
  {
    question: '오차 한계란 무엇인가요?',
    answer:
      '오차 한계(ME)는 신뢰 구간 폭의 절반입니다. ME = 임계값 × SE이며, 여기서 SE = σ/√n은 표준 오차입니다. 지정된 신뢰 수준에서 표본 추정치와 실제 모집단 값 사이의 예상되는 최대 차이를 나타냅니다.',
  },
];

const howToData = [
  {
    name: '표본 매개변수 입력',
    text: '표본 평균(x̄), 표준 편차(σ 또는 s > 0), 표본 크기(n ≥ 2)를 입력하세요.',
  },
  {
    name: '신뢰 수준 선택',
    text: '빠른 실행 버튼을 사용하여 90%, 95% 또는 99%를 선택하거나 0에서 100 사이의 값을 직접 입력하세요.',
  },
  {
    name: '분포 선택 및 결과 확인',
    text: '모집단 표준 편차를 알면 Z를, 표본인 경우 t를 선택하세요. 구간, 오차 한계 및 임계값이 즉시 계산됩니다.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    { name: '신뢰 구간 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%8B%A0%EB%A2%B0_%EA%B5%AC%EA%B0%84' },
    { name: 't 분포 - 위키백과', url: 'https://ko.wikipedia.org/wiki/T_%EB%B6%84%ED%8F%AC' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: '표준 오차 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%ED%91%9C%EC%A4%80_%EC%98%A4%EC%B0%A8' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '신뢰 구간 계산기: 실시간 결과 확인' },
    {
      type: 'paragraph',
      html: '<strong>신뢰 구간 계산기</strong>는 구간, 오차 한계, 임계값 및 표준 오차를 즉시 계산합니다. Z 분포(알려진 모집단 시그마) 및 Student t 분포(표본 시그마)를 지원하며, 0에서 100 사이의 모든 신뢰 수준을 사용할 수 있습니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z 및 t 분포', icon: 'mdi:sigma' },
        { value: '실시간', label: '결과 즉시 확인', icon: 'mdi:lightning-bolt' },
        { value: '무료', label: '가입 불필요', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z 분포 vs Student t 분포' },
    {
      type: 'table',
      headers: ['기준', 'Z 분포', 'Student t'],
      rows: [
        ['사용 시기', 'σ를 알거나 n > 30', '표본 s 사용, 모든 n'],
        ['임계값 (95%)', 'z* = 1.960', 't* 값은 자유도(df = n−1)에 따라 다름'],
        ['자유도', '해당 없음', 'df = n − 1'],
        ['n이 클 경우', '더 좁은 신뢰 구간', 'Z 분포로 수렴'],
      ],
    },
    {
      type: 'tip',
      title: '신뢰 구간을 올바르게 해석하는 방법',
      html: '<strong>95% 신뢰 구간</strong>이 특정 구간 안에 실제 평균이 존재할 확률이 95%임을 의미하는 것은 아닙니다. 이는 동일한 <strong>절차</strong>를 통해 여러 개의 표본을 추출했을 때, 계산된 구간들 중 95%가 실제 평균을 포함할 것임을 의미합니다. 일단 구간이 계산되면, 그 구간은 실제 값을 포함하거나 포함하지 않거나 둘 중 하나입니다.',
    },
    { type: 'title', level: 2, text: '핵심 용어 사전' },
    {
      type: 'glossary',
      items: [
        { term: '신뢰 구간 (CI)', definition: '선택한 신뢰 수준에서 모집단 매개변수를 추정하는 범위 [x̄ − ME, x̄ + ME].' },
        { term: '신뢰 수준', definition: '실험을 여러 번 반복했을 때 실제 매개변수를 포함하게 될 구간의 비율. 일반적인 값: 90%, 95%, 99%.' },
        { term: '표준 오차 (SE)', definition: 'SE = σ/√n. 모집단 평균을 중심으로 한 표본 평균의 변동성을 측정함.' },
        { term: '오차 한계 (ME)', definition: 'ME = z* × SE (또는 t* × SE). 신뢰 구간 폭의 절반임.' },
      ],
    },
  ],
  ui: {
    labelTitle: '신뢰 구간',
    labelMean: '표본 평균 (x̄)',
    labelStdDev: '표준 편차',
    labelN: '표본 크기 (n)',
    labelConf: '신뢰 수준 (%)',
    btnZ: 'Z (σ 알려짐)',
    btnT: 'Student t',
    labelCI: '신뢰 구간',
    labelME: '오차 한계',
    labelCritical: '임계값',
    labelSE: '표준 오차',
    labelDF: '자유도',
    hintN: 'n은 2 이상의 정수여야 합니다.',
    hintStdDev: '표준 편차는 0보다 커야 합니다.',
    hintConf: '신뢰 수준은 0에서 100 사이여야 합니다.',
    labelChart: '구간 시각화',
    chartDesc: '신뢰 구간과 오차 한계가 표시된 수직선 도표.',
    labelReport: '보고서용 요약',
    btnCopy: '요약 복사',
    btnCopied: '복사 완료!',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
    tabStats: '요약 통계',
    tabRaw: '원시 데이터',
    labelRaw: '데이터 붙여넣기',
    rawPlaceholder: '쉼표, 공백 또는 줄바꿈으로 구분된 값을 입력하거나 붙여넣으세요. 예: 12.3, 15.1, 11.8',
    hintRaw: '최소 2개 이상의 유효한 숫자 값을 입력하세요.',
    labelDist: '분포',
    distAuto: '자동',
    noticeAutoRaw: '표본 데이터: Student t 분포 적용',
    noticeAutoLowN: 'n < 30: Student t 분포 권장',
    noticeAutoHighN: 'n ≥ 30: Z 분포 권장',
    calcCI: 'CI 구간',
    calcInverse: '최소 n',
    labelTargetME: '목표 오차 한계 (E)',
    hintTargetME: 'E는 0보다 큰 숫자여야 합니다.',
    labelReqN: '최소 표본 크기',
  },
};
