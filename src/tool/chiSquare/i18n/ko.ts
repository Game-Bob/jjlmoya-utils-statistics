import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-square-independence-calculator';
const title = '온라인 카이제곱 독립성 검정 계산기';
const description =
  '두 범주형 변수 사이에 통계적 관계가 있는지 확인하세요. 관측 빈도 행렬을 입력하고 P-값을 즉시 계산합니다.';

const faqData = [
  {
    question: '카이제곱 독립성 검정이란 무엇인가요?',
    answer:
      '두 범주형 또는 명목 변수 사이의 관찰된 연관성이 우연일 확률을 평가하는 데 사용되는 통계적 검정입니다. 예: 사람이 좋아하는 디저트가 거주 지역과 관련이 있는지 여부.',
  },
  {
    question: '크래머의 V 계수는 어디에 사용되나요?',
    answer:
      "카이제곱이 '어떤' 관계가 있는지를 알려준다면, 크래머의 V는 '얼마나' 관계가 있는지를 알려줍니다. 0(완전 독립)에서 1(성공적인 수학적 의존) 사이의 값을 가집니다. 사회학적으로 0.5 이상의 값은 매우 강한 것으로 간주됩니다.",
  },
  {
    question: '기대 빈도가 매우 낮으면 어떻게 되나요?',
    answer:
      '전체 셀의 20% 이상에서 기대 빈도가 5 미만이면 카이제곱 근사의 신뢰도가 떨어집니다. 위험이 있는 경우 본 도구에서 시각적 경고를 표시합니다. 이 경우 의심스러운 범주를 병합하는 것이 좋습니다.',
  },
  {
    question: '정성적 설문 조사에 사용할 수 있나요?',
    answer:
      '당연히 가능합니다. 소수점 데이터보다는 상호 배타적인 범주(미혼/기혼, 예/아니오, 북부/남부)를 다루는 사회학 및 시장 조사에서 핵심적인 도구로 활용됩니다.',
  },
];

const howToData = [
  {
    name: '행렬 정의',
    text: '먼저 변수 A(행)와 변수 B(열)의 옵션 수에 따라 분할표의 크기를 선택하세요.',
  },
  {
    name: '관측 데이터 입력',
    text: '첫 번째 표에 실제 데이터의 정확한 수치를 입력하여 기본 숫자를 대체하세요.',
  },
  {
    name: '잔차 검토',
    text: '표의 어떤 셀이 강조(밝은 초록색 또는 빨간색)되는지 확인하세요. 변수가 독립적이지 않게 만드는 이상값이 여기에 있습니다.',
  },
  {
    name: '결론 복사',
    text: 'P-값의 수학적 근거가 포함된 자동 생성 텍스트를 논문이나 프로젝트 보고서에 붙여넣으세요.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    {
      name: '카이제곱 검정 - 위키백과',
      url: 'https://ko.wikipedia.org/wiki/%EC%B9%B4%EC%9D%B4%EC%A0%9C%EA%B3%B1_%EA%B2%80%EC%A0%95',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: '카이제곱 독립성 검정 계산기',
    },
    {
      type: 'paragraph',
      html: 'A/B 테스트나 기술 통계와 같은 고전적인 도구는 연속적인 데이터(평균, 수익, 무게)에 매우 적합하지만, 실제 세계는 범주형 데이터(색상, 브랜드, 만족도)로 가득 차 있습니다. <strong>카이제곱 독립성 계산기</strong>는 두 정성적 변수가 통계적으로 연결되어 있는지, 아니면 서로 완전히 독립적으로 변하는지를 분석적으로 판단하는 가장 대표적인 검정입니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '표', label: '최대 3×3 동적 크기', icon: 'mdi:table' },
        { value: '크래머 V', label: '연관성 강도', icon: 'mdi:link' },
        { value: '히트맵', label: '잔차 및 편차', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '카이제곱 통계량(χ²)은 구체적으로 어디에 쓰이나요?',
    },
    {
      type: 'paragraph',
      html: '카이제곱 독립성 검정은 <em>관측 빈도</em>(실제로 측정하고 수집한 수치)와 <em>기대 빈도</em>(변수 간에 아무런 관계가 없을 때 각 셀에서 예상되는 수치)를 비교합니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '종속 변수 (관계 있음)',
          description: '한 범주의 비율이 다른 범주에 따라 크게 달라집니다.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            '예: 모바일 방문자는 디자인 A를 선호하지만, PC 사용자는 디자인 B를 선호함.',
            '카이제곱(χ²) 값이 급증하고 P-값이 급감합니다.',
            '크래머 V가 관계의 강도를 나타냅니다 (예: 강함 > 0.5).',
          ],
        },
        {
          title: '독립 변수 (우연)',
          description: '비율이 모든 영역에서 일정하게 유지됩니다.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            '예: 고객의 눈 색깔은 자동차 브랜드 구매 결정에 영향을 주지 않음.',
            '카이제곱 값이 매우 작고 P-값이 0.05보다 큽니다.',
            '귀무 가설을 기각할 수 없습니다.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '크래머 V: 관계의 강도 이해하기',
    },
    {
      type: 'paragraph',
      html: 'P-값이 매우 낮다고 해서 변수가 반드시 고도로 밀접하게 연결된 것은 아닙니다. 그것은 단지 우연이 원인일 가능성이 낮다는 것을 나타낼 뿐입니다(표본이 매우 많은 경우 등). 관계의 실질적인 강도인 "효과 크기"를 측정하기 위해 본 도구는 <strong>크래머의 V 계수</strong>를 자동으로 제공합니다.',
    },
    {
      type: 'table',
      headers: ['계산기 (V 값)', '분석적 평가', '해석'],
      rows: [
        [
          '<strong>0.00 ~ 0.10</strong>',
          '관계 없음 / 무시할 만한 연관성',
          '이론적으로는 종속적일 수 있으나 비즈니스적으로는 감지되지 않는 수준입니다.',
        ],
        [
          '<strong>0.11 ~ 0.30</strong>',
          '약한 연관성',
          '어느 정도 관계는 있으나 다른 외부 요인의 영향이 더 큽니다.',
        ],
        [
          '<strong>0.31 ~ 0.50</strong>',
          '보통 연관성',
          '두 특성이 서로 눈에 띄게 영향을 미칩니다.',
        ],
        [
          '<strong>0.50 이상</strong>',
          '강한 연관성',
          '매우 명확한 관계입니다. 변수 A를 알면 변수 B를 상당히 정확하게 예측할 수 있습니다.',
        ],
      ],
    },
    {
      type: 'tip',
      title: '수학적 성립 조건',
      html: '비어 있는 셀에 주의하세요! 피어슨 카이제곱 근사가 정밀하게 작동하려면 <em>기대 빈도</em>(관측 빈도가 아님)의 80% 이상이 5보다 커야 하며, 빈도가 1 미만인 셀이 없어야 한다는 방법론적 조건이 필요합니다. 이 조건이 충족되지 않으면 경고 표시가 나타나며 범주 병합을 권장합니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '내장된 잔차 히트맵',
    },
    {
      type: 'paragraph',
      html: '사용자 경험을 개선하고 보고서 결론 도출을 돕기 위해, 본 행렬은 표준화 잔차(편차)를 기반으로 셀 배경을 자동으로 색칠합니다.<br/><br/><strong>초록색 계열:</strong> 해당 셀은 수학적 기대치보다 <em>훨씬 더 많은 성공 사례</em>를 포함합니다.<br/><strong>빨간색 계열:</strong> 해당 셀은 기대치에 비해 위험할 정도로 "비어 있음"을 나타냅니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '카이제곱 용어 설명',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '관측 빈도',
          definition: '실험이나 설문 조사에서 실제로 집계된 정확한 수치입니다.',
        },
        {
          term: '기대 빈도',
          definition: '변수 간 독립을 가정했을 때, 행과 열의 비율을 기반으로 산출된 이론적 빈도입니다.',
        },
        {
          term: '자유도 (df)',
          definition: '통계적으로 자유로운 데이터의 수치. (행 수 - 1) × (열 수 - 1)로 구합니다.',
        },
        {
          term: '표준화 잔차',
          definition: '관측값과 기대값의 차이를 정규화한 수치입니다. 어느 셀이 결과에 큰 영향을 주는지 보여줍니다.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: '설정',
    labelTableSize: '표 크기 (행 × 열)',
    labelAlpha: '유의 수준 (α)',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    infoText:
      '로컬 연산을 통해 이론적 빈도, χ² 값 및 관계 강도인 크래머의 V 계수를 자동으로 산출합니다.',
    labelObserved: '관측 빈도 (입력)',
    btnShowExpected: '기대 빈도 표시 (H₀)',
    expectedDesc:
      '두 변수 사이에 아무런 관계가 없을 때(무작위 분포) 각 셀에 나타날 것으로 예상되는 수치입니다.',
    alertTitle: '통계적 경고 (빈도 < 5)',
    alertBody:
      '기대 빈도가 매우 낮은 셀이 있습니다. χ² 근사의 신뢰도가 낮을 수 있으므로 범주를 병합하거나 피셔의 정확 검정 사용을 고려하세요.',
    labelPValue: 'P-값 (p)',
    sigDescInitial: '유의미한 관계가 발견됨',
    labelGlobalStats: '전역 통계',
    labelChiSquareStat: '카이제곱 (χ²)',
    labelDegrees: '자유도 (df)',
    labelCramer: '관계 강도 (크래머 V)',
    labelVisualization: '잔차 시각화 (관측 vs 기대)',
    heatmapInfo: '입력 표의 각 셀은 잔차의 편차 정도에 따라 색칠됩니다.',
    labelReport: '보고서용 텍스트',
    defaultJustification:
      '총 N개의 관측치를 분석한 결과, χ²(df) = X 값을 얻었습니다. p=P 값을 통해 유의미한 종속 관계가 있음이 확인되었습니다.',
    btnCopy: '텍스트 복사',
    rowLabel: '행',
    colLabel: '열',
    totalLabel: '합계',
    cramerNull: '없음',
    cramerWeak: '약함',
    cramerModerate: '보통',
    cramerStrong: '강함',
    sigText: '유의미한 연관성이 발견되었습니다 (종속).',
    noSigText: '관계가 있다는 증거가 부족합니다 (독립).',
    chartLegendObs: '관측값',
    chartLegendExp: '기대값',
    btnCopied: '복사 완료!',
    justificationIntro: '총',
    justificationTableOf: '개의 표본을',
    justificationObtained: ' 분괄표로 분석하여',
    justificationPAt: ' 값을 얻었습니다. 유의 수준 α=',
    justificationConcluded: '에서 평가한 결과, 다음과 같은 결론에 도달했습니다.',
    justificationSig: '변수 간에 강한 연관성이 존재합니다 (크래머 V:',
    justificationNoSig: '통계적으로 유의미한 연관성이 존재하지 않습니다',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
  },
};
