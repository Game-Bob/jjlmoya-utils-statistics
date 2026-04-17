import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'confidence-interval-calculator';
const title = 'オンライン信頼区間計算機';
const description =
  'Z分布またはスチューデントのt分布を使用して、母平均の信頼区間を計算します。標本平均、標準偏差、標本サイズ、および信頼水準を入力すると、区間、許容誤差、および棄却限界値を即座に取得できます。';

const faqData = [
  {
    question: '信頼区間とは何ですか？',
    answer:
      '信頼区間（CI）とは、標本データから計算された値の範囲であり、特定の確率（信頼水準）で真の母集団パラメータが含まれます。例えば、平均の95%信頼区間は、サンプリングを何度も繰り返した場合、計算された区間の95%に真の母平均が含まれることを意味します。',
  },
  {
    question: 'いつt分布ではなくZ分布を使うべきですか？',
    answer:
      '母標準偏差（σ）が既知の場合、またはnが大きい（30超）場合はZを使用します。標本標準偏差（s）しか利用できず、nが小さい場合はスチューデントのtを使用します。n > 30の場合、両方の分布は実質的に同等ですが、σが未知の場合はtの方が保守的で技術的に正確です。',
  },
  {
    question: '標本サイズは区間の幅にどのように影響しますか？',
    answer:
      '信頼区間の幅は1/√nに比例します。標本サイズを4倍にすると、許容誤差は半分になります。これにより、大きな標本がより精密な推定値をもたらす理由と、統計調査のデザインにおいて標本サイズの計画が重要である理由が説明されます。',
  },
  {
    question: '許容誤差とは何ですか？',
    answer:
      '許容誤差（ME）は信頼区間の幅の半分です。ME = 棄却限界値 × SE（標準誤差、SE = σ/√n）となります。これは、指定された信頼水準において、標本推定値と真の母集団の値との間に予想される最大の違いを示します。',
  },
];

const howToData = [
  {
    name: '標本パラメータの入力',
    text: '標本平均（x̄）、標準偏差（σまたはs > 0）、および標本サイズ（n ≥ 2）を入力します。',
  },
  {
    name: '信頼水準の選択',
    text: 'クイックアクセスボタンを使用して90%、95%、または99%を選択するか、0から100の間の任意の値を入力します。',
  },
  {
    name: '分布の選択と結果の確認',
    text: '母標準偏差が既知の場合はZを選択し、標本の場合はtを選択します。区間、許容誤差、および棄却限界値が即座に計算されます。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    { name: '信頼区間 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E4%BF%A1%E9%A0%BC%E5%8C%BA%E9%96%93' },
    { name: 't分布 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/T%E5%88%86%E5%B8%83' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: '標準誤差 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E6%A0%87%E6%BA%96%E8%AA%A4%E5%B7%AE' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '信頼区間計算機：リアルタイムで結果を表示' },
    {
      type: 'paragraph',
      html: '<strong>信頼区間計算機</strong>は、区間、許容誤差、棄却限界値、および標準誤差を即座に計算します。0から100の間の任意の信頼水準で、Z分布（既知の母集団シグマ）とスチューデントのt（標本シグマ）をサポートしています。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Zおよびt分布', icon: 'mdi:sigma' },
        { value: 'ライブ', label: 'リアルタイム結果', icon: 'mdi:lightning-bolt' },
        { value: '無料', label: '登録不要', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z分布 vs スチューデントのt' },
    {
      type: 'table',
      headers: ['基準', 'Z分布', 'スチューデントのt'],
      rows: [
        ['使用時期', '既知のσ または n > 30', '標本s、任意のn'],
        ['棄却限界値 (95%)', 'z* = 1.960', 't* は df = n−1 に依存'],
        ['自由度', '該当なし', 'df = n − 1'],
        ['大きなnの場合', 'より狭い信頼区間', 'Z分布に収束'],
      ],
    },
    {
      type: 'tip',
      title: '信頼区間の正しい解釈方法',
      html: '<strong>95%信頼区間</strong>とは、その特定の区間に真の平均が含まれている確率が95%であることを意味するのではありません。これは、多くの標本で<strong>手順</strong>を繰り返した場合、算出された区間の95%に真の平均が含まれることを意味します。一度計算されると、その区間には真の値が含まれているか、含まれていないかのどちらかです。',
    },
    { type: 'title', level: 2, text: 'クイックリファレンス用語集' },
    {
      type: 'glossary',
      items: [
        { term: '信頼区間 (CI)', definition: '選択された信頼水準で母集団パラメータを推定する範囲 [x̄ − ME, x̄ + ME]。' },
        { term: '信頼水準', definition: '実験が何度も繰り返された場合に、真のパラメータが含まれる区間の割合。典型的な値：90%、95%、99%。' },
        { term: '標準誤差 (SE)', definition: 'SE = σ/√n。母平均に対する標本平均の変動性を測定します。' },
        { term: '許容誤差 (ME)', definition: 'ME = z* × SE (または t* × SE)。信頼区間の幅の半分です。' },
      ],
    },
  ],
  ui: {
    labelTitle: '信頼区間',
    labelMean: '標本平均 (x̄)',
    labelStdDev: '標準偏差',
    labelN: '標本サイズ (n)',
    labelConf: '信頼水準 (%)',
    btnZ: 'Z (σ既知)',
    btnT: 'スチューデントのt',
    labelCI: '信頼区間',
    labelME: '許容誤差',
    labelCritical: '棄却限界値',
    labelSE: '標準誤差',
    labelDF: '自由度',
    hintN: 'nは2以上の整数である必要があります。',
    hintStdDev: '標準偏差は0より大きい必要があります。',
    hintConf: '信頼水準は0から100の間である必要があります。',
    labelChart: '区間の可視化',
    chartDesc: '影付きの信頼区間と許容誤差を示す数直線。',
    labelReport: 'レポート用サマリー',
    btnCopy: 'サマリーをコピー',
    btnCopied: 'コピーしました！',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
    tabStats: '要約統計量',
    tabRaw: '生データ',
    labelRaw: 'データを貼り付け',
    rawPlaceholder: 'カンマ、スペース、または改行で区切られた値を入力。例：12.3, 15.1, 11.8',
    hintRaw: '少なくとも2つの有効な数値を入力してください。',
    labelDist: '分布',
    distAuto: '自動',
    noticeAutoRaw: '標本データ：スチューデントのtを適用',
    noticeAutoLowN: 'n < 30：スチューデントのtを推奨',
    noticeAutoHighN: 'n ≥ 30：Z分布を推奨',
    calcCI: '信頼区間',
    calcInverse: '最小 n',
    labelTargetME: '目標許容誤差 (E)',
    hintTargetME: 'Eは0より大きい数値である必要があります。',
    labelReqN: '最小標本サイズ',
  },
};
