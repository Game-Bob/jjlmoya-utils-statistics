import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'descriptive-statistics-calculator';
const title = 'オンライン記述統計計算機';
const description =
  '平均、中央値、最頻値、標準偏差、分散、四分位数、歪度、尖度など、すべての主要な記述統計量を即座に計算します。データを貼り付けるだけで、リアルタイムに結果を取得できます。';

const faqData = [
  {
    question: '母標準偏差と標本標準偏差の違いは何ですか？',
    answer:
      '母標準偏差はN（すべての要素が既知）で割ります。標本標準偏差は、サブセットから推定する際のバイアスを修正するためにN-1（ベッセルの補正）で割ります。この計算機では、研究やデータ分析で最も一般的な選択肢である標本標準偏差（N-1）を使用しています。',
  },
  {
    question: '歪度が正または負であることは何を意味しますか？',
    answer:
      '歪度はデータ分布の非対称性を測定します。正の歪度（右裾が長い）は、裾が右側に伸びており、ほとんどの値が左側に集中していることを意味します。負の歪度（左裾が長い）はその逆です。0に近い値は、ほぼ対称な分布であることを示します。',
  },
  {
    question: '尖度とは何ですか？何を示していますか？',
    answer:
      '尖度は、正規分布と比較した裾の「重さ」を測定します。この計算機は、0を基準（正規分布）とする過剰尖度（excess kurtosis）を返します。正の値（急尖的）は裾が重く、ピークが鋭いことを示します。負の値（緩尖的）は裾が軽く、ピークが平坦であることを示します。',
  },
  {
    question: 'データの形式はどうすればよいですか？',
    answer:
      'カンマ、スペース、セミコロン、または改行で区切られた数値を貼り付けてください。例：「1, 2, 3, 4」や「1 2 3 4」、または1行に1つの値など。計算機は非数値文字を自動的に無視します。',
  },
];

const howToData = [
  {
    name: 'データの貼り付けまたは入力',
    text: 'テキストエリアに数値を入力します（カンマ、スペース、または改行区切り）。少なくとも2つの値が必要です。',
  },
  {
    name: '結果の確認',
    text: '入力中に15の統計量が即座に更新されます。ヒストグラムはデータの分布形状を示します。',
  },
  {
    name: 'サマリーのコピー',
    text: '「サマリーをコピー」ボタンを使用して、レポートや分析で使用するための主要な統計量のコンパクトな概要をコピーします。',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    { name: '記述統計学 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E8%A8%98%E8%BF%B0%E7%B5%B1%E8%A8%88%E5%AD%A6' },
    { name: '標準偏差 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E6%A0%87%E6%BA%96%E5%81%8F%E5%B7%AE' },
    { name: '歪度 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E4%歪%E5%BA%A6' },
    { name: '尖度 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E5%B0%96%E5%BA%A6' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '記述統計計算機：すべての主要な指標を1か所で表示' },
    {
      type: 'paragraph',
      html: '学生、研究者、またはデータアナリストのいずれであっても、<strong>記述統計計算機</strong>を使用すれば、任意の数値データセットの完全な統計サマリーを即座に取得できます。データを貼り付けるだけで、15の統計量が同時に計算されます。表計算ソフトは不要です。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: '計算される統計量', icon: 'mdi:sigma' },
        { value: 'ライブ', label: 'リアルタイム結果', icon: 'mdi:lightning-bolt' },
        { value: '無料', label: '登録不要', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: '計算される統計量' },
    {
      type: 'table',
      headers: ['統計量', '説明'],
      rows: [
        ['<strong>個数 (N)</strong>', 'データセット内の値の総数。'],
        ['<strong>平均値</strong>', 'すべての値の算術平均。'],
        ['<strong>中央値</strong>', 'データをソートしたときの中央の値。外れ値に強い。'],
        ['<strong>最頻値</strong>', '最も頻繁に出現する値。'],
        ['<strong>標準偏差</strong>', '標本標準偏差（N-1で割る）。'],
        ['<strong>分散</strong>', '標本標準偏差の2乗。'],
        ['<strong>最小値 / 最大値</strong>', 'データセット内の最小および最大の値。'],
        ['<strong>範囲</strong>', '最大値と最小値の差。'],
        ['<strong>Q1 / Q3</strong>', '第1四分位数および第3四分位数（25パーセンタイルおよび75パーセンタイル）。'],
        ['<strong>IQR</strong>', '四分位範囲：Q3からQ1を引いたもの。中央の散らばりを測定。'],
        ['<strong>歪度</strong>', '平均に対する分布の非対称性。'],
        ['<strong>尖度</strong>', '過剰尖度：正規分布と比較した裾の重さ。'],
      ],
    },
    {
      type: 'tip',
      title: '平均値の代わりに中央値を使用すべき場合',
      html: 'データに極端な外れ値がある場合（例：所得データ、住宅価格）、<strong>中央値</strong>は極端な値に引きずられる平均値よりも、中心傾向を代表する指標となります。',
    },
    { type: 'title', level: 2, text: 'ヒストグラムの解釈' },
    {
      type: 'paragraph',
      html: '周波数ヒストグラムは、<strong>スタージェスの法則</strong> (k = 1 + log₂N) を使用して自動的に計算された等幅のビンに値がどのように分布しているかを示します。対称的な釣鐘型は正規分布を示唆します。歪んだ形状は、結果に表示されている歪度の値を確認するものです。',
    },
    { type: 'title', level: 2, text: 'クイックリファレンス用語集' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: '四分位範囲。データの中央50%の広がり。外れ値の特定に使用されます。' },
        { term: '歪度', definition: '分布の非対称性を測定。正 = 右の裾が長い。負 = 左の裾が長い。' },
        { term: '過剰尖度', definition: '正規分布と比較した裾の重さ。0は正規分布。正は裾が重いことを意味します。' },
        { term: 'ベッセルの補正', definition: '標本分散を計算する際、推定誤差を減らすためにNの代わりにN-1で割ること。' },
      ],
    },
  ],
  ui: {
    labelTitle: '記述統計',
    labelData: 'データを入力',
    placeholderData: '例：12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'カンマ、スペース、または改行で区切られた少なくとも2つの数値を入力してください。',
    hintError: '統計を計算するには、少なくとも2つの有効な数値を入力してください。',
    btnSample: '標本',
    btnPopulation: '母集団',
    groupCentral: '中心傾向',
    groupDispersion: '散らばり',
    groupPosition: '位置',
    labelCount: '個数 (N)',
    labelSum: '合計',
    labelMean: '平均',
    labelMedian: '中央値',
    labelMode: '最頻値',
    labelStdDev: '標準偏差',
    labelVariance: '分散',
    labelCV: '変動係数',
    labelMin: '最小値',
    labelMax: '最大値',
    labelRange: '範囲',
    labelQ1: '第1四分位数 (25%)',
    labelQ3: '第3四分位数 (75%)',
    labelIQR: '四分位範囲',
    labelSkewness: '歪度',
    labelKurtosis: '尖度',
    labelBoxplot: '箱ひげ図',
    labelChart: '度数分布',
    chartDesc: 'スタージェスの法則による自動ビン幅設定ヒストグラム。',
    insightTitle: '自動解釈',
    insightHomogeneous: 'データは均質です (変動係数 < 15%)。',
    insightModerate: 'データは中程度の変動を示しています (変動係数 15-35%)。',
    insightHeterogeneous: 'データは不均質です (変動係数 > 35%)。',
    insightSymmetric: '分布はほぼ対称です。',
    insightRightSkewed: '分布は正の歪度を示しています（右に歪んでいる）。',
    insightLeftSkewed: '分布は負の歪度を示しています（左に歪んでいる）。',
    insightNoOutliers: '外れ値は検出されませんでした。',
    insightOutliers: 'IQR法により{n}個の外れ値が検出されました。',
    insightIQR: '四分位範囲は{iqr}です（{q1}から{q3}まで）。',
    filterNotice: '{n}個の非数値文字を無視しました。',
    labelReport: 'レポート用サマリー',
    btnCopy: 'サマリーをコピー',
    btnCopied: 'コピーしました！',
    noMode: '最頻値なし',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
  },
};
