import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'kisul-tonggye-gyesangi';
const title = '온라인 기술 통계 계산기';
const description =
  '평균, 중앙값, 최빈값, 표준 편차, 분산, 사분위수, 왜도, 첨도 등 모든 핵심 기술 통계량을 즉시 계산합니다. 데이터를 붙여넣으면 실시간으로 결과를 얻을 수 있습니다.';

const faqData = [
  {
    question: '모집단 표준 편차와 표본 표준 편차의 차이는 무엇인가요?',
    answer:
      '모집단 표준 편차는 N(모든 요소를 알고 있음)으로 나눕니다. 표본 표준 편차는 부분 집합에서 추정할 때의 편향을 보정하기 위해 N-1(베셀 보정)로 나눕니다. 이 계산기는 연구 및 데이터 분석에서 가장 일반적인 선택인 표본 표준 편차(N-1)를 사용합니다.',
  },
  {
    question: '양수 또는 음수 왜도는 무엇을 의미하나요?',
    answer:
      '왜도는 데이터 분포의 비대칭성을 측정합니다. 양수 왜도(오늘쪽 꼬리가 긴 분포)는 꼬리가 오른쪽으로 뻗어 있고 대부분의 값이 왼쪽에 모여 있음을 의미합니다. 음수 왜도(왼쪽 꼬리가 긴 분포)는 그 반대입니다. 0에 가까운 값은 대략적으로 대칭인 분포를 나타냅니다.',
  },
  {
    question: '첨도란 무엇이며 무엇을 나타내나요?',
    answer:
      '첨도는 정규 분포와 비교하여 꼬리의 "무겁기"를 측정합니다. 이 계산기는 0이 기준(정규 분포)인 초과 첨도를 반환합니다. 양수 값(급첨적)은 꼬리가 더 무겁고 정점이 더 뾰족함을 나타냅니다. 음수 값(완첨적)은 꼬리가 더 가볍고 정점이 더 평평함을 나타냅니다.',
  },
  {
    question: '데이터 형식을 어떻게 입력해야 하나요?',
    answer:
      '콤마, 공백, 세미콜론 또는 줄바꿈으로 구분된 숫자를 붙여넣으세요. 예: "1, 2, 3, 4" 또는 "1 2 3 4" 또는 한 줄에 하나의 값. 계산기는 숫자가 아닌 문자를 자동으로 무시합니다.',
  },
];

const howToData = [
  {
    name: '데이터 붙여넣기 또는 입력',
    text: '텍스트 영역에 숫자 값을 입력하세요. 콤마, 공백 또는 줄바꿈으로 구분하면 됩니다. 최소 2개의 값이 필요합니다.',
  },
  {
    name: '결과 확인',
    text: '입력하는 동안 15가지 통계량이 즉시 업데이트됩니다. 히스토그램은 데이터의 분포 형태를 보여줍니다.',
  },
  {
    name: '요약 복사',
    text: '텍스트 복사 버튼을 사용하여 보고서나 분석에 사용할 주요 통계량의 간략한 요약을 복사하세요.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    { name: '기술 통계학 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EA%B8%B0%EC%88%A0_%ED%86%B5%EA%B3%84%ED%95%99' },
    { name: '표준 편차 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%ED%91%9C%EC%A4%80_%ED%8E%B8%EC%B0%A8' },
    { name: '왜도 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%99%9C%EB%8F%84' },
    { name: '첨도 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%B2%A8%EB%8F%84' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '기술 통계 계산기: 모든 핵심 지표를 한 곳에서' },
    {
      type: 'paragraph',
      html: '학생, 연구자 또는 데이터 분석가 등 누구에게나 <strong>기술 통계 계산기</strong>는 모든 수치 데이터 세트에 대한 즉각적이고 완전한 통계 요약을 제공합니다. 데이터를 붙여넣기만 하면 스프레드시트 소프트웨어 없이도 15가지 통계량이 동시에 계산됩니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: '계산된 통계량', icon: 'mdi:sigma' },
        { value: '실시간', label: '실시간 결과', icon: 'mdi:lightning-bolt' },
        { value: '무료', label: '가입 불필요', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: '계산된 통계량' },
    {
      type: 'table',
      headers: ['통계량', '설명'],
      rows: [
        ['<strong>개수 (N)</strong>', '데이터 세트의 총 값 개수.'],
        ['<strong>평균</strong>', '모든 값의 산술 평균.'],
        ['<strong>중앙값</strong>', '데이터를 정렬했을 때의 가운데 값. 이상치에 강함.'],
        ['<strong>최빈값</strong>', '가장 자주 나타나는 값.'],
        ['<strong>표준 편차</strong>', '표본 표준 편차(N-1로 나눔).'],
        ['<strong>분산</strong>', '표본 표준 편차의 제곱.'],
        ['<strong>최소 / 최대</strong>', '데이터 세트의 가장 작은 값과 가장 큰 값.'],
        ['<strong>범위</strong>', '최댓값과 최솟값의 차이.'],
        ['<strong>Q1 / Q3</strong>', '제1사분위수 및 제3사분위수(25 및 75 백분위수).'],
        ['<strong>IQR</strong>', '사분위간 범위: Q3에서 Q1을 뺀 값. 중앙 분포를 측정함.'],
        ['<strong>왜도</strong>', '평균에 대한 분포의 비대칭성.'],
        ['<strong>첨도</strong>', '초과 첨도: 정규 분포와 비교한 꼬리의 무게.'],
      ],
    },
    {
      type: 'tip',
      title: '평균 대신 중앙값을 사용해야 하는 경우',
      html: '데이터에 유의미한 이상치가 있는 경우(예: 소득 데이터, 주택 가격), <strong>중앙값</strong>은 극단값에 영향을 받는 평균보다 중심 경향을 더 잘 나타냅니다.',
    },
    { type: 'title', level: 2, text: '히스토그램 해석하기' },
    {
      type: 'paragraph',
      html: '도수 히스토그램은 <strong>Sturges의 법칙</strong>(k = 1 + log₂N)을 사용하여 자동으로 계산된 동일한 폭의 빈(bin)에 값이 어떻게 분포되어 있는지 보여줍니다. 대칭적인 종 모양은 정규 분포를 나타냅니다. 왜곡된 형태는 결과에 표시된 왜도 값을 확인해 줍니다.',
    },
    { type: 'title', level: 2, text: '핵심 용어 사전' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: '사분위간 범위. 데이터 중앙 50%의 변동폭. 이상치를 식별하는 데 사용됨.' },
        { term: '왜도', definition: '분포의 비대칭성을 측정함. 양수 = 오른쪽 꼬리가 더 김. 음수 = 왼쪽 꼬리가 더 김.' },
        { term: '초과 첨도', definition: '정규 분포와 비교한 꼬리의 무겁기. 0은 정규 분포이며, 양수는 꼬리가 더 무거움을 의미함.' },
        { term: '베셀 보정', definition: '표본 분산을 계산할 때 추정의 편향을 줄이기 위해 N 대신 N-1로 나누는 것.' },
      ],
    },
  ],
  ui: {
    labelTitle: '기술 통계',
    labelData: '데이터 입력',
    placeholderData: '예: 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: '콤마, 공백 또는 줄바꿈으로 구분된 최소 2개의 숫자 값을 입력하세요.',
    hintError: '통계량을 계산하려면 최소 2개 이상의 유효한 숫자 값을 입력하세요.',
    btnSample: '표본',
    btnPopulation: '모집단',
    groupCentral: '중심 경향',
    groupDispersion: '산포도',
    groupPosition: '위치',
    labelCount: '개수 (N)',
    labelSum: '합계',
    labelMean: '평균',
    labelMedian: '중앙값',
    labelMode: '최빈값',
    labelStdDev: '표준 편차',
    labelVariance: '분산',
    labelCV: '변동 계수',
    labelMin: '최솟값',
    labelMax: '최댓값',
    labelRange: '범위',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: '왜도',
    labelKurtosis: '첨도',
    labelBoxplot: '상자 그림',
    labelChart: '도수 분포',
    chartDesc: 'Sturges의 법칙을 사용한 자동 빈 폭 설정 히스토그램.',
    insightTitle: '자동 해석',
    insightHomogeneous: '데이터가 균질합니다 (변동 계수 < 15%).',
    insightModerate: '데이터가 중간 정도의 변동성을 보입니다 (변동 계수 15-35%).',
    insightHeterogeneous: '데이터가 불균질합니다 (변동 계수 > 35%).',
    insightSymmetric: '분포가 대략적으로 대칭입니다.',
    insightRightSkewed: '분포가 양의 왜도를 보입니다 (오른쪽으로 치우침).',
    insightLeftSkewed: '분포가 음의 왜도를 보입니다 (왼쪽으로 치우침).',
    insightNoOutliers: '이상치가 발견되지 않았습니다.',
    insightOutliers: 'IQR 방법을 사용하여 {n}개의 이상치가 발견되었습니다.',
    insightIQR: '사분위간 범위는 {iqr} ({q1}에서 {q3}까지)입니다.',
    filterNotice: '{n}개의 숫자가 아닌 문자가 무시되었습니다.',
    labelReport: '보고서용 요약',
    btnCopy: '요약 복사',
    btnCopied: '복사 완료!',
    noMode: '최빈값 없음',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
  },
};
