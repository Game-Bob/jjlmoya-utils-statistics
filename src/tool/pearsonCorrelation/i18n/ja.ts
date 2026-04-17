import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-correlation-calculator';
const title = 'オンライン・ピアソン相関係数計算機';
const description =
  'データペアからピアソンのr係数、決定係数r²、および線形回帰直線を計算します。100%プライベートでローカルなツールです。';

const faqData = [
  {
    question: 'ピアソンの相関係数とは何ですか？',
    answer:
      '2つの量的変数の間の線形関係の強さと方向を定量化する統計的尺度です。その値は-1（完全な負の相関）から1（完全な正の相関）までの範囲で、0は線形関係がないことを示します。',
  },
  {
    question: 'Excelから直接データを貼り付けることはできますか？',
    answer:
      'はい、当計算機はExcel、Googleスプレッドシート、またはCSVファイルからコピー＆ペーストされたデータを解釈するように最適化されています。自動的に列を検出し、通貨記号やパーセンテージなどの非数値文字をクリーニングします。',
  },
  {
    question: 'データに関連があるように見えるのに、r値が低いのはなぜですか？',
    answer:
      'ピアソン係数は線形関係のみを検出します。データが曲線関係（放物線や対数など）にある場合、変数間に明確な結びつきがあっても、ピアソン係数は非常に低くなることがあります。',
  },
  {
    question: 'この計算機におけるr²は何を意味しますか？',
    answer:
      'これは決定係数です。独立変数から予測可能な従属変数の分散の割合を表します。例えば、r²が0.85であれば、変動の85%が線形モデルによって説明されることを示します。',
  },
];

const howToData = [
  {
    name: 'データの準備',
    text: '値のペア（XとY）を用意します。Excelファイル、または単なるテキストリストでも構いません。',
  },
  {
    name: 'データの入力',
    text: '計算機のテキストエリアにデータを貼り付けます。各ペアが新しい行にあることを確認してください。',
  },
  {
    name: '設定',
    text: '計算エラーを避けるために、データで使用されている小数点記号（ピリオドまたはカンマ）を選択します。',
  },
  {
    name: '結果の分析',
    text: '即座にr値とその解釈を確認し、散布図を観察して傾向を確かめます。',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    { name: '相関係数 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E7%9B%B8%E9%96%A2%E4%BF%82%E6%95%B0' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'オンライン・ピアソン相関係数計算機：完全ガイド' },
    {
      type: 'paragraph',
      html: '<strong>ピアソンの相関係数</strong> (r) は、2つの数値変数がどのように線形に関連しているかを測定するための標準的な統計ツールです。学術論文、市場分析、または科学研究においも、データの強さを理解することは不可欠です。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: '完全な連関', icon: 'mdi:trending-up' },
        { value: '0', label: '独立', icon: 'mdi:graph-outline' },
        { value: 'ローカル', label: '100%のプライバシー', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'ピアソンのr係数は何に使用されますか？' },
    {
      type: 'paragraph',
      html: 'ピアソン指数は、傾向が存在するかどうかを明らかにします。一方の変数が増加したとき、もう一方も増加するか（<strong>正の相関</strong>）、それとも減少するか（<strong>負の相関</strong>）？このツールは、Excel、SPSS、またはPythonでのデータ分析に欠かせません。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'ピアソン相関',
          description: '明確な線形関係を持つ量的変数に最適。',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['数値データ', '線形関係', '正規性が必要'],
        },
        {
          title: 'スピアマン相関',
          description: '順序データや単調な非線形関係に適している。',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['順序データ（順位）', '単調な関係', '外れ値に強い'],
        },
      ],
    },
    { type: 'title', level: 2, text: '結果の解釈：数値表' },
    {
      type: 'table',
      headers: ['数値範囲 (r)', '関係の強さ', '実用的な意味'],
      rows: [
        ['<strong>0.90 〜 1.00</strong>', '極めて強い', 'ほぼ完璧な関係。予測に最適。'],
        ['<strong>0.70 〜 0.89</strong>', '強い', '変数間に明確な線形依存関係がある。'],
        ['<strong>0.40 〜 0.69</strong>', '中程度', '傾向は見られるが、かなりのばらつきがある。'],
        ['<strong>0.20 〜 0.39</strong>', '弱い', '関係が乏しい。他の要因の影響の方が大きい。'],
        ['<strong>0.00 〜 0.19</strong>', 'なし / 無視できる', '有意な線形関係は存在しない。'],
      ],
    },
    { type: 'title', level: 2, text: 'この計算機の利点と限界' },
    {
      type: 'list',
      items: [
        '<strong>Excel/CSVからの貼り付け：</strong> データを1つずつ入力する必要はありません。',
        '<strong>即座な散布図表示</strong> と回帰直線の描画。',
        '<strong>100%のプライバシー：</strong> データがPC外に送信されることはありません。',
      ],
    },
    {
      type: 'list',
      items: [
        '線形関係のみを検出します（曲線関係は不可）。',
        '外れ値（極端な値）に非常に敏感です。',
        '少なくとも2つの有効なデータペアが必要です。',
      ],
    },
    {
      type: 'tip',
      title: 'エキスパート・ヒント',
      html: 'r値を盲信する前に、必ず <strong>散布図</strong> を確認してください。高い係数が1つの外れ値によって引き起こされている場合や、低い係数がピアソンでは検出できない非常に強い曲線関係を隠している場合があります。',
    },
    { type: 'title', level: 2, text: '統計用語集' },
    {
      type: 'glossary',
      items: [
        { term: '共分散', definition: '2つの確率変数が一緒にどの程度変化するかを示す指標。' },
        { term: '線形回帰', definition: '変数間の依存関係を近似するために使用される数学的モデル。' },
        { term: '決定係数 r²', definition: '独立変数から予測可能な分散の割合。' },
        { term: '散布図', definition: '平面上でのデータペアの分布を示す点グラフ。' },
      ],
    },
  ],
  ui: {
    headingData: 'CSVデータ',
    btnLoadExample: '例を読み込む',
    btnClear: 'データをクリア',
    placeholder: 'データ(X, Y)を貼り付けるか、CSVをドラッグ...',
    labelDecimalSep: '小数点記号',
    optPoint: 'ピリオド (.)',
    optComma: 'カンマ (,)',
    privacyBadge: 'プライベートなローカル実行',
    labelR: 'ピアソン係数 (r)',
    labelR2: '決定係数 (r²)',
    labelN: 'ペア数 (n)',
    labelSlope: '傾き (m)',
    labelMeanXY: '平均 X | Y',
    labelWaiting: 'データ入力待ち...',
    interpPerfectPos: '完全な正の相関',
    interpPerfectNeg: '完全な負の相関',
    interpStrong: '強い相関',
    interpModerate: '中程度の相関',
    interpWeak: '弱い / 相関なし',
    errorMsg: 'グラフを表示するには少なくとも2ペアのデータを入力してください',
    btnCopyTitle: '結果をコピー',
    btnDownloadTitle: 'グラフをダウンロード',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
  },
};
