import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-correlation-calculator';
const title = '온라인 피어슨 상관 계수 계산기';
const description =
  '데이터 쌍에서 피어슨 r 계수, 결정 계수 r² 및 선형 회귀선을 계산합니다. 100% 비공개 및 로컬 도구입니다.';

const faqData = [
  {
    question: '피어슨 상관 계수란 무엇인가요?',
    answer:
      '두 양적 변수 사이의 선형 관계의 강도와 방향을 정량화하는 통계적 척도입니다. 값은 -1(완벽한 음의 상관관계)에서 1(완벽한 양의 상관관계) 사이이며, 0은 선형 관계가 없음을 나타냅니다.',
  },
  {
    question: 'Excel에서 데이터를 직접 붙여넣을 수 있나요?',
    answer:
      '네, 본 계산기는 Excel, Google 스프레드시트 또는 CSV 파일에서 복사하여 붙여넣은 데이터를 해석하는 데 최적화되어 있습니다. 자동으로 열을 감지하고 통화 기호나 백분율과 같은 숫자가 아닌 문자를 정리합니다.',
  },
  {
    question: '데이터가 관련이 있어 보이는데 r 값이 낮은 이유는 무엇인가요?',
    answer:
      '피어슨 계수는 선형 관계만 감지합니다. 데이터가 곡선 관계(포물선 또는 로그 등)를 갖는 경우, 변수 사이에 명확한 연결이 있더라도 피어슨 계수는 매우 낮게 나타날 수 있습니다.',
  },
  {
    question: '이 계산기에서 r²은 무엇을 의미하나요?',
    answer:
      '결정 계수입니다. 독립 변수에서 예측 가능한 종속 변수의 분산 비율을 나타냅니다. 예를 들어, r²이 0.85이면 변동성의 85%가 선형 모델에 의해 설명됨을 나타냅니다.',
  },
];

const howToData = [
  {
    name: '데이터 준비',
    text: 'X와 Y 값 쌍을 준비하세요. Excel 파일이나 일반 텍스트 목록 형태일 수 있습니다.',
  },
  {
    name: '데이터 입력',
    text: '계산기 텍스트 영역에 데이터를 붙여넣으세요. 각 값 쌍이 새 줄에 있는지 확인하세요.',
  },
  {
    name: '설정',
    text: '계산 오류를 피하기 위해 데이터에 사용된 소수점 구분 기호(마침표 또는 쉼표)를 선택하세요.',
  },
  {
    name: '결과 분석',
    text: '즉시 r 값과 그 해석을 확인하고 산점도를 관찰하여 추세를 확인하세요.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    { name: '피어슨 상관 계수 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%ED%94%BC%EC%96%B4%EC%8A%A8_%EC%83%81%EA%B4%80_%EA%B3%84%EC%82%98' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '온라인 피어슨 상관 계수 계산기: 전체 가이드' },
    {
      type: 'paragraph',
      html: '<strong>피어슨 상관 계수</strong>(r)는 두 수치형 변수가 서로 선형적으로 어떻게 관련되어 있는지 측정하기 위한 표준 통계 도구입니다. 학술 연구, 시장 분석 또는 과학 프로젝트에서 데이터의 연관 강도를 이해하는 것은 매우 중요합니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: '완벽한 관계', icon: 'mdi:trending-up' },
        { value: '0', label: '독립성', icon: 'mdi:graph-outline' },
        { value: '로컬', label: '100% 개인정보 보호', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: '피어슨 r 계수는 어디에 사용되나요?' },
    {
      type: 'paragraph',
      html: '피어슨 지수는 추세의 존재 여부를 밝힙니다. 한 변수가 증가할 때 다른 변수도 증가하는지(<strong>양의 상관관계</strong>) 아니면 감소하는지(<strong>음의 상관관계</strong>)를 보여줍니다. 이 도구는 Excel, SPSS 또는 Python을 이용한 데이터 분석에 필수적입니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '피어슨 상관관계',
          description: '명확한 선형 관계가 있는 양적 변수에 이상적입니다.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['수치 데이터', '선형 관계', '정규성 필요'],
        },
        {
          title: '스피어만 상관관계',
          description: '서열 데이터 또는 단조 비선형 관계에 더 적합합니다.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['서열 데이터 (순위)', '단조 관계', '이상치에 강함'],
        },
      ],
    },
    { type: 'title', level: 2, text: '결과 해석: 수치 표' },
    {
      type: 'table',
      headers: ['값 범위 (r)', '관계 강도', '실질적 의미'],
      rows: [
        ['<strong>0.90 ~ 1.00</strong>', '매우 강함', '거의 완벽한 관계. 예측에 이상적임.'],
        ['<strong>0.70 ~ 0.89</strong>', '강함', '변수 간에 명확한 선형 의존성이 존재함.'],
        ['<strong>0.40 ~ 0.69</strong>', '보통', '추세는 보이나 눈에 띄게 흩어져 있음.'],
        ['<strong>0.20 ~ 0.39</strong>', '약함', '관계가 미약하며 다른 요인의 영향이 더 큼.'],
        ['<strong>0.00 ~ 0.19</strong>', '없음/무시할 수준', '유의미한 선형 관계가 존재하지 않음.'],
      ],
    },
    { type: 'title', level: 2, text: '이 계산기의 장점과 한계' },
    {
      type: 'list',
      items: [
        '<strong>Excel/CSV 붙여넣기:</strong> 데이터를 일일이 입력할 필요가 없습니다.',
        '<strong>즉각적인 산점도</strong>와 회귀선 제공.',
        '<strong>100% 개인정보 보호:</strong> 사용자의 데이터는 절대로 PC 외부로 유출되지 않습니다.',
      ],
    },
    {
      type: 'list',
      items: [
        '선형 관계만 감지합니다 (곡선 관계 제외).',
        '극단값(이상치)에 매우 민감합니다.',
        '최소 2쌍의 유효한 데이터가 필요합니다.',
      ],
    },
    {
      type: 'tip',
      title: '전문가 팁',
      html: 'r 값을 맹목적으로 믿기 전에 항상 <strong>산점도</strong>를 확인하세요. 때로는 단 하나의 이상치 때문에 높은 계수가 나올 수도 있고, 반대로 피어슨이 감지하지 못하는 매우 강한 곡선 관계가 낮은 계수 뒤에 숨어 있을 수도 있습니다.',
    },
    { type: 'title', level: 2, text: '통계 용어 사전' },
    {
      type: 'glossary',
      items: [
        { term: '공분산', definition: '두 확률 변수가 얼마나 함께 변하는지를 나타내는 척도.' },
        { term: '선형 회귀', definition: '변수 간의 의존 관계를 근사화하는 데 사용되는 수학적 모델.' },
        { term: '결정 계수 r²', definition: '독립 변수로부터 예측 가능한 분산의 비율.' },
        { term: '산점도', definition: '평면상에 데이터 쌍의 분포를 나타낸 점 도표.' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV 데이터',
    btnLoadExample: '예제 불러오기',
    btnClear: '데이터 지우기',
    placeholder: '데이터(X, Y)를 붙여넣거나 CSV를 드래그하세요...',
    labelDecimalSep: '소수점 구분',
    optPoint: '마침표 (.)',
    optComma: '쉼표 (,)',
    privacyBadge: '로컬에서 비공개 실행',
    labelR: '피어슨 계수 (r)',
    labelR2: '결정 계수 (r²)',
    labelN: '데이터 쌍 (n)',
    labelSlope: '기울기 (m)',
    labelMeanXY: '평균 X | Y',
    labelWaiting: '데이터 대기 중...',
    interpPerfectPos: '완벽한 양의 상관관계',
    interpPerfectNeg: '완벽한 음의 상관관계',
    interpStrong: '강한 상관관계',
    interpModerate: '보통 상관관계',
    interpWeak: '약함/상관없음',
    errorMsg: '차트를 보려면 최소 2쌍의 데이터를 입력하세요',
    btnCopyTitle: '결과 복사',
    btnDownloadTitle: '차트 다운로드',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
  },
};
