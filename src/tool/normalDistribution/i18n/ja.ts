import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'normal-distribution-calculator';
const title = 'オンライン正規分布計算機';
const description =
  '正規分布の確率を即座に計算します：P(X ≤ a)、P(X ≥ a)、P(a ≤ X ≤ b)、および逆正規分布。平均と標準偏差を入力すると、網掛け領域付きのガウス鐘形曲線が表示されます。';

const faqData = [
  {
    question: '正規分布とは何ですか？',
    answer:
      "正規分布（ガウス鐘形曲線）は、統計学において最も重要な連続確率分布です。2つのパラメータによって完全に定義されます：中心を決定する平均（μ）と、広がりを制御する標準偏差（σ）です。平均に関して対称であり、その裾は無限に伸びています。",
  },
  {
    question: '確率はどのように計算されますか？',
    answer:
      "確率は確率密度関数（PDF）を積分することによって得られます。閉じた形の原始関数が存在しないため、誤差関数（erf）を使用して計算されます。この計算機は、正確な結果を出すために高精度のAbramowitzおよびStegun近似を使用しています。",
  },
  {
    question: 'zスコアとは何ですか？',
    answer:
      'zスコア（または標準得点）は、ある値が平均から標準偏差何個分離れているかを示します：z = (X - μ) / σ。これにより、異なるスケールの分布からの値を比較することが可能になります。例えば、z = 1は、Xが平均よりもちょうど1標準偏差大きいことを意味します。',
  },
  {
    question: '逆正規分布は何に使用されますか？',
    answer:
      '逆正規は次の質問に答えます：第pパーセンタイルに対応するXの値は何ですか？つまり、P(X ≤ x) = pが与えられたとき、xを求めます。品質管理（許容限界）、推測統計（棄却限界値）、乱数シミュレーションで広く使用されています。',
  },
];

const howToData = [
  {
    name: 'パラメータの入力',
    text: '正規分布の平均（μ）と標準偏差（σ > 0）を入力します。デフォルトでは標準正規分布（μ=0, σ=1）が使用されます。',
  },
  {
    name: '計算タイプの選択',
    text: 'モードを選択します：左側裾はP(X ≤ a)、右側裾はP(X ≥ a)、区間はP(a ≤ X ≤ b)、または特定のパーセンタイルに対応するXの値を求める場合は逆（Inverse）を選択します。',
  },
  {
    name: '結果とチャートの確認',
    text: '確率はzスコアとともに即座に表示されます。ガウス鐘形曲線には、計算された確率に対応する網掛け領域が表示されます。',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    { name: '正規分布 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83' },
    { name: '誤差関数 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E8%AA%A4%E5%B7%AE%E9%96%A2%E6%95%B0' },
    { name: 'Abramowitz and Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: '標準得点 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E6%A0%87%E6%BA%96%E5%BE%97%E7%82%B9' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '正規分布計算機：リアルタイムで確率を算出' },
    {
      type: 'paragraph',
      html: '<strong>正規分布計算機</strong>は、左側裾、右側裾、中央区間、逆正規など、あらゆる正規分布の確率を即座に計算します。平均と標準偏差を入力するだけで結果を取得し、ガウス鐘形曲線上で視覚化できます。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: '計算モード', icon: 'mdi:function-variant' },
        { value: 'ライブ', label: 'リアルタイム結果', icon: 'mdi:lightning-bolt' },
        { value: '無料', label: '登録不要', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: '計算モード' },
    {
      type: 'table',
      headers: ['モード', '説明', '使用例'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', '値aまでの累積確率（左側裾）。', '特定の点数しきい値以下の学生の割合。'],
        ['<strong>P(X ≥ a)</strong>', '値aからの右側裾の確率。', '品質しきい値を超える確率。'],
        ['<strong>P(a ≤ X ≤ b)</strong>', '中央または非対称な区間内の確率。', '許容範囲内の部品の割合。'],
        ['<strong>逆（Inverse）</strong>', 'P(X ≤ x) = pとなるXを求める（第pパーセンタイル）。', '仮説検定における棄却限界値。'],
      ],
    },
    {
      type: 'tip',
      title: '68 95 99.7の経験則',
      html: 'あらゆる正規分布において、データの<strong>68%</strong>が平均の±1σ以内、<strong>95%</strong>が±2σ以内、<strong>99.7%</strong>が±3σ以内に収まります。μ=0、σ=1としてP(-1 ≤ z ≤ 1)を計算して確認してみてください。',
    },
    { type: 'title', level: 2, text: 'クイックリファレンス用語集' },
    {
      type: 'glossary',
      items: [
        { term: '平均 (μ)', definition: '位置パラメータ。ガウス鐘形曲線の中心を決定します。' },
        { term: '標準偏差 (σ)', definition: '尺度パラメータ。鐘形曲線の幅を制御します。必ず正の値である必要があります。' },
        { term: 'zスコア', definition: '標準化された値：z = (X - μ) / σ。Xが平均から標準偏差何個分離れているかを示します。' },
        { term: 'PDF', definition: '確率密度関数。ある区間にわたるPDFの下の面積は、その区間の確率に等しくなります。' },
      ],
    },
  ],
  ui: {
    labelTitle: '正規分布',
    labelMean: '平均',
    labelStdDev: '標準偏差',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: '逆正規',
    labelValue: '値 X (a)',
    labelValueA: '下限 (a)',
    labelValueB: '上限 (b)',
    labelPercentile: 'パーセンタイル p (0 < p < 1)',
    resultProbability: '確率',
    resultX: '値 X',
    resultZScore: 'zスコア',
    resultZScoreA: 'z₁ (下限)',
    resultZScoreB: 'z₂ (上限)',
    hintStdDev: '標準偏差は0より大きい必要があります。',
    hintPercentile: 'パーセンタイルは0から1の間（0と1を含まない）である必要があります。',
    labelChart: 'ガウス鐘形曲線',
    chartDesc: '網掛け領域は計算された確率に対応します。',
    labelReport: 'レポート用サマリー',
    btnCopy: 'サマリーをコピー',
    btnCopied: 'コピーしました！',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
  },
};
