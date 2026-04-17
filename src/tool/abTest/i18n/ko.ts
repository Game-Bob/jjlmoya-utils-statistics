import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-gaseol-geomjeong-calculator';
const title = '온라인 A/B 테스트 가설 검정 계산기';
const description =
  '두 그룹(A와 B)을 비교하여 전환율이나 평균에 통계적으로 유의미한 차이가 있는지 확인하세요. P-값을 즉시 계산합니다.';

const faqData = [
  {
    question: 'P-값은 무엇을 의미하나요?',
    answer:
      'P-값은 그룹 A와 그룹 B의 성과 차이가 순전한 우연일 확률을 알려줍니다. P-값이 유의 수준(일반적으로 0.05)보다 낮다면, 그 차이가 실제일 확률이 95%라는 것을 의미합니다.',
  },
  {
    question: '유의 수준(알파 또는 α)이란 무엇인가요?',
    answer:
      '테스트의 엄격함을 결정하는 기준입니다. 알파가 0.05라면 그룹 B가 A와 다르다고 판단하기 위해 95%의 확신이 필요하다는 뜻입니다. 알파가 0.01이면 훨씬 더 엄격한 기준(99%)이 적용됩니다. 학술 및 산업계에서는 기본적으로 0.05를 사용합니다.',
  },
  {
    question: '비율 검정과 평균 검정의 차이는 무엇인가요?',
    answer:
      '비율 검정은 클릭, 이메일 오픈, 전환과 같은 이분법적인 성공 여부를 측정합니다. 평균 검정은 평균 구매 금액이나 임상 회복 일수와 같은 정량적 수치를 비교합니다.',
  },
  {
    question: '표본 크기가 30명 미만이면 어떻게 되나요?',
    answer:
      '표본 크기가 매우 작으면 정규 분포 근사의 정확도가 떨어집니다(중심 극한 정리). 임상적 의사 결정의 경우 보다 보수적인 정확 확률 검정이나 조정된 스튜던트 t-검정 기법을 사용하는 것을 권장합니다.',
  },
];

const howToData = [
  {
    name: '수치 목표 선택',
    text: '설정 패널에서 전환율(단순 비율)을 측정할지, 아니면 금액과 같은 일반 평균(평균값)을 측정할지 정의합니다.',
  },
  {
    name: '대조군 데이터 입력 (그룹 A)',
    text: '노출된 총 사례 수와 그중 성공 횟수(또는 평균값)를 입력합니다.',
  },
  {
    name: '실험군 데이터 입력 (그룹 B)',
    text: '비교하고자 하는 새로운 시안이나 변수의 수치를 입력합니다.',
  },
  {
    name: '통계적 판정 결과 확인',
    text: '유의성 판정 결과를 확인하고, 실제 개선(Lift)이 우연이라는 가설을 기각하는지에 대한 생성된 근거 문구를 복사합니다.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    { name: '통계적 가설 검정 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%ED%86%B5%EA%B3%84%EC%A0%81_%EA%B0%80%EC%84%A4_%EA%B2%80%EC%A0%95' },
    { name: 'A/B 테스트 계산기 - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '온라인 A/B 테스트 가설 검정 계산기' },
    {
      type: 'paragraph',
      html: '직관에만 의존해 결정하는 것은 위험합니다. 데이터에 기반한 결정만이 성공으로 가는 길입니다. <strong>가설 검정 계산기 (A/B 테스트)</strong>는 두 그룹 간의 차이가 통계적으로 유의미한지, 아니면 단순한 우연인지를 확인해야 하는 분석가, 마케터 및 연구자를 위한 필수 도구입니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-값', label: '최종 판정관', icon: 'mdi:scale-balance' },
        { value: '로컬', label: '데이터 업로드 없음', icon: 'mdi:shield-check' },
        { value: '즉시', label: '네이티브 차트', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: '테스트를 전환율과 평균으로 나누는 이유는 무엇인가요?' },
    {
      type: 'paragraph',
      html: '조사의 성격에 따라 성공 지표가 달라집니다. 본 도구는 업계에서 가장 널리 사용되는 두 가지 통계 검정 유형을 기본적으로 지원합니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '비율 검정 (전환율)',
          description: '두 그룹 간의 백분율이나 성공률을 비교합니다.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            '마케팅에 최적 (클릭, 판매, 구독)',
            '총 사례 수(n)와 성공 횟수(x) 사용',
            '두 비율 Z-검정 적용',
          ],
        },
        {
          title: '연속 평균 검정',
          description: '두 그룹 간의 평균적인 수치를 비교합니다.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            '평균 객단가, 체류 시간 또는 임상 시험에 최적',
            '평균(μ) 및 표준 편차(σ) 사용',
            '표본에 대한 강력한 정규 근사 적용 (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: '결과 해석 방법: P-값이 가이드입니다' },
    {
      type: 'paragraph',
      html: '이 계산기의 핵심은 그 유명한 <strong>P-값</strong>입니다. 이 숫자는 귀무 가설("두 그룹이 동일하다")이 사실이라고 가정했을 때, 현재 관찰된 것과 같은 차이가 나타날 확률을 알려줍니다.',
    },
    {
      type: 'table',
      headers: ['관측된 P-값', '실제 의미', '표준 결정'],
      rows: [
        ['<strong>0.05보다 큼</strong>', '분산에 비해 차이가 작습니다. 우연으로 설명될 수 있습니다.', '귀무 가설을 <strong>기각하지 않음</strong>. 입증된 실제 개선 사항이 없습니다.'],
        ['<strong>0.05보다 작음</strong>', '우연히 이런 차이가 발생할 확률은 극히 낮습니다. 실제 효과가 존재합니다.', '귀무 가설을 <strong>기각함</strong>. 변수 B의 성과가 더 좋습니다!'],
        ['<strong>0.01보다 작음</strong>', '변화가 확실하다는 증거가 압도적입니다 (99% 신뢰도).', '<strong>단호하게 기각함</strong>. 실험이 매우 성공적입니다.'],
      ],
    },
    {
      type: 'tip',
      title: '소규모 표본 보정',
      html: '실험군이 30명 미만인 경우, 도구에 "소규모 표본" 경고가 표시됩니다. 이러한 경계 선상의 시나리오에서는 고전적인 정규 근사의 정밀도가 떨어지므로, 정확한 스튜던트 t-검정 또는 피셔 도구를 사용하는 것을 권장합니다.',
    },
    { type: 'title', level: 2, text: 'A/B 테스트 용어집' },
    {
      type: 'glossary',
      items: [
        { term: '대조군 (Group A)', definition: '실험의 기준이 되는 원래 버전 또는 기본 상태입니다.' },
        { term: '실험군 (Group B)', definition: '지표 개선을 기대하며 새로 수정한 버전입니다.' },
        { term: '리프트 (상대적 개선)', definition: '대조군 A 대비 실험군 B의 성과 변화율입니다.' },
        { term: '유의 수준 (α)', definition: '허용할 수 있는 오류의 한계치입니다 (통상 5% 또는 0.05).' },
      ],
    },
  ],
  ui: {
    labelParams: '매개변수',
    btnConversions: '전환율',
    btnMeans: '평균값',
    labelGroupA: '그룹 A (대조군)',
    labelGroupB: '그룹 B (실험군)',
    labelTotalCases: '총 사례 수',
    labelSuccesses: '성공 또는 전환 횟수',
    labelMean: '평균값',
    labelStdDev: '표준 편차',
    labelAlpha: '유의 수준',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    labelDirection: '검정 방향',
    btn2Tails: '양측 검정 (차이)',
    btn1Tail: '단측 검정 (B > A)',
    alertTitle: '통계적 신뢰성 경고',
    alertBody: '표본 크기가 너무 작거나 극단적인 값(성공 0건)을 사용하고 있습니다. 추정치가 실제 상황을 대표하지 못할 수 있습니다.',
    alertLinkText: '이상적인 표본 크기 확인하기',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-값',
    sigDescInitial: '귀무 가설을 기각할 충분한 근거가 있습니다',
    labelLift: '개선 분석 (Lift)',
    labelLiftText: '그룹 A 대비 개선율',
    labelConfidencePrefix: '통계적 신뢰도:',
    labelDistributions: '확률 분포',
    chartDesc: '겹치는 영역을 확인하세요. 겹치는 부분이 적을수록 그 차이가 우연이 아닌 실제일 가능성이 높습니다.',
    labelReport: '보고서용 텍스트',
    defaultJustification: 'X명의 대상을 분석한 결과, 그룹 B는 Z%의 통계적 신뢰도(p=0.00)와 함께 Y%의 개선을 보였습니다.',
    btnCopy: '텍스트 복사',
    btnCopied: '복사 완료!',
    sigText: '귀무 가설을 기각할 충분한 근거가 있습니다.',
    noSigText: '차이가 통계적으로 유의미하지 않습니다.',
    justIntro: '총',
    justSamples: '개의 표본 분석 결과, 그룹 B는 그룹 A 대비 ',
    justRespectTo: '%의 변화를 보였습니다.',
    justWithConfidence: ' 통계적 신뢰도 ',
    justDiff: ' 하에서, 경험적 차이는 ',
    justSig: '통계적으로 유의미합니다',
    justNoSig: '통계적으로 유의미하지 않습니다',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
  },
};
