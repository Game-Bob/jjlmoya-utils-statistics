import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'sample-size-calculator';
const title = 'オンライン標本サイズ計算機';
const description =
  '調査に必要な正確な人数を計算します。有限母集団または無限母集団のオプション、調整可能な信頼水準、許容誤差が含まれます。';

const faqData = [
  {
    question: '母集団のサイズとは何ですか？',
    answer:
      '調査またはアンケートの対象となるグループ全体の人数です。10万人未満の場合は通常、有限母集団と見なされます。このデータがない場合や管理不可能な場合は、無限母集団のオプションを選択してください。',
  },
  {
    question: 'どの信頼水準を選べばよいですか？',
    answer:
      '科学研究、論文、市場調査では95%が最も広く使用されている標準です。教授、指導教官、またはクライアントが別の精度レベル（例：99%）を要求している場合にのみ、この値を変更してください。',
  },
  {
    question: 'なぜ許容誤差を尋ねるのですか？',
    answer:
      '完璧な標本というものは存在しません。許容誤差は、あなたが受け入れることができる不正確さの量を定義します。最も一般的なのは5%です。',
  },
  {
    question: '母集団について何も知らない場合、どの期待比率（p）を使用すべきですか？',
    answer:
      'デフォルト値の50%のままにしてください。統計学では、これは分散 p(1-p) を最大化するため「最悪のシナリオ」を表し、どのような状況下でも標本サイズが小さすぎないように保証します。',
  },
];

const howToData = [
  {
    name: '母集団を定義する',
    text: '調査対象グループの総数を知っているか（有限）、または非常に大きい/不明なグループに対して保守的な計算を好むか（無限）を指定します。',
  },
  {
    name: '信頼水準を調整する',
    text: '95%（推奨）を選択するか、ドロップダウンメニューからカスタム値を入力します。',
  },
  {
    name: '許容誤差を設定する',
    text: '許容誤差を指定します。誤差を5%から2%に減らすと、実施する必要のあるアンケートの数が劇的に増えることに注意してください。',
  },
  {
    name: '結果をコピーする',
    text: '中央のパネルを確認し、自動生成された説明テキストを直接コピーして、論文やレポートに追加します。',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    { name: '標本サイズの決定 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E6%A0%87%E6%9C%AC%E3%82%B5%E3%82%A4%E3%82%BA%E3%81%AE%E6%B1%BD%E5%AE%9A' },
    { name: '標本サイズの計算 - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'オンライン標本サイズ計算機：決定版ガイド' },
    {
      type: 'paragraph',
      html: '適切な調査人数を決定することは、あらゆる研究、市場調査、または学術プロジェクトにおいて最も重要なステップの1つです。<strong>標本サイズ計算機</strong>は、学生、研究者、およびマーケティングの専門家に、統計的に有意な結果を得るために必要な正確な人数を計算するための、正確で迅速かつ使いやすいツールを提供します。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: '標準信頼性', icon: 'mdi:check-decagram' },
        { value: '5%', label: '許容誤差', icon: 'mdi:target' },
        { value: '高速', label: 'リアルタイム計算', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'なぜ標本サイズの計算が不可欠なのですか？' },
    {
      type: 'paragraph',
      html: '統計学において、母集団全体を調査することはほとんど不可能です。解決策は、標本と呼ばれる代表的なサブグループを選択することです。標本が小さすぎると結果に偏りが出ます。大きすぎると、不必要に時間と費用を浪費することになります。',
    },
    { type: 'title', level: 2, text: '2つの計算モード：有限母集団と無限母集団' },
    {
      type: 'paragraph',
      html: '当計算機は、2つの異なる計算モードを提供することで、あなたの状況に適応します。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '有限母集団（既知）',
          description: '個体全体の正確な数がわかっている場合。',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Nの値が必要',
            '補正係数を適用',
            '最終的な標本サイズを削減',
          ],
        },
        {
          title: '無限母集団（未知）',
          description: '全体のサイズが不明、管理不可能、または10万人を超える場合。',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Nを知る必要がない',
            '標準的な古典的公式',
            '最も保守的で安全なシナリオ',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'コントロールパネルのパラメータを理解する' },
    {
      type: 'table',
      headers: ['パラメータ', '説明', '標準的な推奨', '意味'],
      rows: [
        ['<strong>信頼水準 (Z)</strong>', '標本が母集団を代表しているという数学的確信。', '95%を使用。'],
        ['<strong>許容誤差 (e)</strong>', '現実からの許容される偏差の割合。', '5%を使用。'],
        ['<strong>期待比率 (p)</strong>', '調査対象の事象が発生する確率。', '50%を使用（分散を最大化）。'],
      ],
    },
    {
      type: 'tip',
      title: '許容誤差に注意',
      html: '許容誤差を5%から2%に減らすには、標本サイズを指数関数的に増やす必要があります。厳しすぎる誤差を決定する前に、計算機の感度チャートを確認してください。',
    },
    { type: 'title', level: 2, text: '計算の背後にある数学的公式' },
    {
      type: 'list',
      items: [
        '<strong>無限母集団：</strong> n = (Z² × p × q) / e²',
        '<strong>Z：</strong> 信頼水準から導出される棄却限界値。',
        '<strong>p：</strong> 期待比率（qは1 - p）。',
        '<strong>e：</strong> 許容誤差。',
      ],
    },
    { type: 'title', level: 2, text: '研究者のためのクイック用語集' },
    {
      type: 'glossary',
      items: [
        { term: '母集団 (N)', definition: '調査の対象となる、特性を共有する要素または個体の集合全体。' },
        { term: '標本 (n)', definition: '母集団全体から選択された代表的なサブセット。' },
        { term: '最大分散', definition: 'p=0.5 (50%) の時に発生し、算出される標本が最も多様なケースに対して実行可能であることを保証します。' },
      ],
    },
  ],
  ui: {
    labelParams: 'パラメータ',
    labelPopType: '母集団のタイプ',
    btnFinite: '有限（既知）',
    btnInfinite: '無限（未知）',
    labelPopSize: '母集団のサイズ',
    labelConfLevel: '信頼水準 (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'カスタム',
    labelConfCustom: 'カスタム信頼水準 (%)',
    labelErrorMargin: '許容誤差 (%)',
    labelProportion: '期待比率',
    hintProportion: '50%は、最大かつ最も安全な標本を与える「最悪のケース」です。',
    hintProportionError: '比率が0%または100%の場合、標本は無効になります。5%から95%の間の値を使用することをお勧めします。',
    labelSampleSize: '推奨サイズ',
    labelSampleSub: '必要なアンケート数',
    labelZValue: '棄却限界値',
    labelReport: 'レポート用テキスト',
    defaultJustification: '母集団10,000人に対し、信頼水準95%、許容誤差5%の場合、代表的な標本サイズは370人です。',
    btnCopy: 'テキストをコピー',
    btnCopied: 'コピーしました！',
    labelChart: '感度：サイズ vs 許容誤差',
    chartDesc: '許容誤差を減らそうとすると標本サイズが急増する様子を確認してください。',
    justForFinite: '母集団が',
    justPersons: '人の場合',
    justForInfinite: '無限母集団の場合',
    justConfidence: '、信頼水準',
    justError: '%、許容誤差',
    justResultIs: '%における代表的な標本サイズは',
    justUnit: '人です。',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
  },
};
