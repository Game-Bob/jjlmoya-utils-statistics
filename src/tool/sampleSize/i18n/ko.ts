import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'pyobon-keugi-gyesangi';
const title = '온라인 표본 크기 계산기';
const description =
  '연구에 필요한 정확한 인원수를 계산하세요. 유한 또는 무한 모집단 옵션, 조정 가능한 신뢰 수준 및 오차 한계를 포함합니다.';

const faqData = [
  {
    question: '모집단 크기란 무엇인가요?',
    answer:
      '연구하거나 설문 조사하려는 대상 그룹의 총 인원수입니다. 100,000명 미만인 경우 일반적으로 유한 모집단으로 간주됩니다. 이 데이터가 없거나 관리가 불가능한 경우 무한 모집단 옵션을 선택하세요.',
  },
  {
    question: '어떤 신뢰 수준을 선택해야 하나요?',
    answer:
      '과학 연구, 논문 및 시장 조사에서 95%가 가장 널리 사용되는 표준입니다. 교수, 지도 교수 또는 고객이 다른 정밀도 수준(예: 99%)을 요구하는 경우에만 이 값을 변경하세요.',
  },
  {
    question: '왜 오차 한계를 입력해야 하나요?',
    answer:
      '완벽한 표본은 존재하지 않습니다. 오차 한계는 수용할 의사가 있는 부정확성의 정도를 정의합니다. 가장 일반적인 값은 5%입니다.',
  },
  {
    question: '모집단에 대해 전혀 모르는 경우 어떤 기대 비율(p)을 사용해야 하나요?',
    answer:
      '기본값인 50%를 그대로 두세요. 통계학에서 이는 분산 p(1-p)를 최대화하여 어떤 상황에서도 표본 크기가 너무 작아지지 않도록 보장하는 "최악의 시나리오"를 나타냅니다.',
  },
];

const howToData = [
  {
    name: '모집단 정의',
    text: '연구 대상 그룹의 총 인원수를 알고 있는지(유한) 또는 매우 크거나 알려지지 않은 그룹에 대해 보수적인 계산을 선호하는지(무한) 지정하세요.',
  },
  {
    name: '신뢰 수준 조정',
    text: '95%(권장)를 선택하거나 드롭다운 메뉴에서 사용자 지정 값을 입력하세요.',
  },
  {
    name: '오차 한계 설정',
    text: '오차 허용 범위를 지정하세요. 오차를 5%에서 2%로 줄이면 수행해야 하는 설문 조사 횟수가 급격히 늘어난다는 점에 유의하세요.',
  },
  {
    name: '결과 복사',
    text: '중앙 패널을 확인하고 자동 생성된 근거 텍스트를 직접 복사하여 논문이나 보고서에 추가하세요.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 출처',
  bibliography: [
    { name: '표본 크기 결정 - 위키백과', url: 'https://ko.wikipedia.org/wiki/%ED%91%9C%EB%B3%B8_%ED%81%AC%EA%B8%B0_%EA%B2%B0%EC%A0%95' },
    { name: '표본 크기 계산 - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '온라인 표본 크기 계산기: 결정판 가이드' },
    {
      type: 'paragraph',
      html: '설문 조사에 필요한 적절한 인원수를 결정하는 것은 모든 연구, 시장 조사 또는 학술 프로젝트에서 가장 중요한 단계 중 하나입니다. <strong>표본 크기 계산기</strong>는 학생, 연구원 및 마케팅 전문가에게 통계적으로 유의미한 결과를 위해 필요한 정확한 개인 수를 계산할 수 있는 정밀하고 빠르고 사용하기 쉬운 도구를 제공합니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: '표준 신뢰도', icon: 'mdi:check-decagram' },
        { value: '5%', label: '오차 한계', icon: 'mdi:target' },
        { value: '빠름', label: '실시간 계산', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: '표본 크기 계산이 왜 기본적인가요?' },
    {
      type: 'paragraph',
      html: '통계학에서 모집단 전체를 연구하는 것은 거의 불가능합니다. 해결책은 표본이라고 알려진 대표적인 하위 그룹을 선택하는 것입니다. 표본이 너무 작으면 결과가 편향됩니다. 너무 크면 불필요하게 시간과 비용을 낭비하게 됩니다.',
    },
    { type: 'title', level: 2, text: '두 가지 계산 모드: 유한 및 무한 모집단' },
    {
      type: 'paragraph',
      html: '본 계산기는 두 가지 고유한 계산 모드를 제공하여 귀하의 상황에 맞게 조정됩니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '유한 모집단 (알려짐)',
          description: '모집단의 정확한 총 인원수를 알고 있는 경우.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'N 값이 필요함',
            '수정 계수 적용',
            '최종 표본 크기 감소',
          ],
        },
        {
          title: '무한 모집단 (알려지지 않음)',
          description: '전체 크기를 모르거나, 관리가 불가능하거나, 100,000명보다 큰 경우.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'N을 알 필요가 없음',
            '표준 고전 공식 사용',
            '가장 보수적이고 안전한 시나리오',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: '제어판 매개변수 이해하기' },
    {
      type: 'table',
      headers: ['매개변수', '설명', '표준 권장 사항'],
      rows: [
        ['<strong>신뢰 수준 (Z)</strong>', '표본이 모집단을 대표한다는 수학적 확실성.', '95% 사용.'],
        ['<strong>오차 한계 (e)</strong>', '실제로부터 허용되는 편차 백분율.', '5% 사용.'],
        ['<strong>기대 비율 (p)</strong>', '연구된 사건이 발생할 확률.', '50% 사용 (분산 최대화).'],
      ],
    },
    {
      type: 'tip',
      title: '오차 한계 주의',
      html: '오차 한계를 5%에서 2%로 줄이려면 표본 크기를 기하급수적으로 늘려야 합니다. 너무 엄격한 한계를 결정하기 전에 계산기의 감도 차트를 확인하세요.',
    },
    { type: 'title', level: 2, text: '계산 뒤에 숨겨진 수학적 공식' },
    {
      type: 'list',
      items: [
        '<strong>무한 모집단:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> 신뢰 수준에서 파생된 임계값.',
        '<strong>p:</strong> 기대 비율 (q는 1 - p).',
        '<strong>e:</strong> 허용되는 오차 한계.',
      ],
    },
    { type: 'title', level: 2, text: '연구자를 위한 핵심 용어 사전' },
    {
      type: 'glossary',
      items: [
        { term: '모집단 (N)', definition: '연구 대상이 되는 공통적인 특징을 공유하는 전체 요소 또는 개인의 집합.' },
        { term: '표본 (n)', definition: '전체 모집단에서 선택된 대표적인 하위 집합.' },
        { term: '최대 분산', definition: 'p=0.5(50%)일 때 발생하며, 계산된 표본이 가장 다양한 경우에도 실행 가능하도록 보장합니다.' },
      ],
    },
  ],
  ui: {
    labelParams: '매개변수',
    labelPopType: '모집단 유형',
    btnFinite: '유한 (알려짐)',
    btnInfinite: '무한 (알려지지 않음)',
    labelPopSize: '모집단 크기',
    labelConfLevel: '신뢰 수준 (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: '사용자 지정',
    labelConfCustom: '사용자 지정 신뢰도 (%)',
    labelErrorMargin: '오차 한계 (%)',
    labelProportion: '기대 비율',
    hintProportion: '50%는 가장 크고 안전한 표본을 제공하는 "최악의 시나리오"입니다.',
    hintProportionError: '비율이 0% 또는 100%이면 표본이 무효화됩니다. 5%에서 95% 사이의 값을 사용하는 것이 좋습니다.',
    labelSampleSize: '제안된 크기',
    labelSampleSub: '개의 설문 조사 필요',
    labelZValue: '임계값',
    labelReport: '보고서용 텍스트',
    defaultJustification: '모집단 10,000명에 대해 신뢰 수준 95%, 오차 한계 5%를 적용할 경우, 대표 표본 크기는 370명입니다.',
    btnCopy: '텍스트 복사',
    btnCopied: '복사 완료!',
    labelChart: '감도: 크기 vs 오차 한계',
    chartDesc: '오차 한계를 줄이려고 할 때 표본 크기가 어떻게 급증하는지 확인하세요.',
    justForFinite: '모집단이',
    justPersons: '명이고',
    justForInfinite: '무한 모집단에 대해',
    justConfidence: ', 신뢰 수준이',
    justError: '%이며 오차 한계가',
    justResultIs: '%일 때, 대표 표본 크기는',
    justUnit: '명입니다.',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 출처',
  },
};
