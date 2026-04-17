import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-nijo-dokuritsusei-kentei-calculator';
const title = 'オンライン・カイ二乗独立性検定計算機';
const description =
  '2つのカテゴリ変数の間に統計的な関係があるかどうかを判定します。観測度数行列を入力して、P値を即座に計算します。';

const faqData = [
  {
    question: 'カイ二乗独立性検定とは何ですか？',
    answer:
      '2つのカテゴリ変数または名義変数の間の観測された関連性が、偶然によるものである確率を評価するために使用される統計的検定です。例えば、人の好きなデザートが住んでいる地域に関連しているかどうかなどです。',
  },
  {
    question: 'クラメールのV係数は何に使用されますか？',
    answer:
      'カイ二乗値は関係が「あるかないか」を示すのに対し、クラメールのVは関係が「どの程度強いか」を示します。0（完全な独立）から1（絶対的な数学的依存）の範囲をとります。社会学的には0.5以上の値は非常に強いと見なされます。',
  },
  {
    question: '期待度数が非常に低い場合はどうなりますか？',
    answer:
      '20%以上のセルで期待度数が5未満の場合、数学的なカイ二乗近似の信頼性が低下します。リスクがある場合は、当ツールが視覚的に警告を表示します。その場合は、疑わしいカテゴリを統合することをお勧めします。',
  },
  {
    question: '定性的な調査に使用できますか？',
    answer:
      'もちろんです。小数ではなく、互いに排他的なカテゴリ（独身/既婚、はい/いいえ、北/南など）を扱う社会学や市場調査において、主要なユーティリティとなります。',
  },
];

const howToData = [
  {
    name: '行列を定義する',
    text: 'まず、変数A（行）と変数B（列）にいくつの選択肢があるかに基づいて、分割表のサイズを選択します。',
  },
  {
    name: '観測データを入力する',
    text: '最初の表に実際のデータの正確なカウントを入力して、ベースとなる数値を置き換えます。',
  },
  {
    name: '残差を確認する',
    text: '表の中のどのセルが点灯している（明るい緑色または赤色）かを確認してください。そこに変数が独立していない原因となる異常が潜んでいます。',
  },
  {
    name: '結論をコピーする',
    text: 'P値の数学的裏付けを含む自動生成されたテキストを、論文やプロジェクトレポートに貼り付けます。',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    {
      name: 'カイ二乗検定 - Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%A4%E4%BA%8C%E4%B9%97%E6%A4%9C%E5%AE%9A',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'カイ二乗独立性検定計算機',
    },
    {
      type: 'paragraph',
      html: 'A/Bテストや記述統計などの古典的なツールは、連続的な数値（平均、収益、重量）に非常に適していますが、現実の世界はカテゴリデータ（色、ブランド、満足度レベル）に満ちています。<strong>カイ二乗独立性計算機</strong>は、2つの定性変数が統計的に結びついているか、あるいは互いに完全に独立して変化しているかを分析的に判断するための「王道」となる検定です。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '表', label: '最大3×3の動的サイズ', icon: 'mdi:table' },
        { value: 'クラメールのV', label: '連関の強さ', icon: 'mdi:link' },
        { value: 'ヒートマップ', label: '残差と偏差', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'カイ二乗統計量（χ²）は具体的に何のために使用されますか？',
    },
    {
      type: 'paragraph',
      html: 'カイ二乗独立性検定は、<em>観測度数</em>（測定して収集した実際の数値）と、<em>期待度数</em>（変数間に全く相互作用がない場合に各セルに期待されるカウント）を比較します。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '従属変数（関係がある）',
          description: '一方のカテゴリの割合が、他方のカテゴリに応じて大きく変化します。',
          icon: 'mdi:link',
          highlight: true,
          points: [
            '例：モバイルユーザーはデザインAを好むが、PCユーザーはデザインBを好む。',
            'カイ二乗値 (χ²) が急上昇し、P値が低下します。',
            'クラメールのVが連関の強さを示します（例：強い > 0.5）。',
          ],
        },
        {
          title: '独立変数（偶然）',
          description: '割合はすべてのレベルにおいて一定のままです。',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            '例：顧客の目の色は、どの自動車ブランドを購入するかに影響しません。',
            'カイ二乗値は非常に小さく、P値は0.05より大きくなります。',
            '帰無仮説を棄却することはできません。',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'クラメールのV：関連性の強さを理解する',
    },
    {
      type: 'paragraph',
      html: '非常に低いP値が得られたからといって、変数が「密接に」結びついているとは限りません。それは単に偶然が原因ではないことを示しているに過ぎません（数万件の実例がある場合など）。「効果量」を測定するために、当ツールでは<strong>クラメールのV係数</strong>を自動的に算出して組み込んでいます。',
    },
    {
      type: 'table',
      headers: ['計算機（V値）', '分析評価', '意味する内容'],
      rows: [
        [
          '<strong>0.00 〜 0.10</strong>',
          '関連なし / 極めて弱い連関',
          '理論的には従属していますが、実務上の目的には感知できず役に立たないレベルです。',
        ],
        [
          '<strong>0.11 〜 0.30</strong>',
          '弱い連関',
          'わずかな関連性はありますが、他の多くの外部要因の影響の方が大きいです。',
        ],
        [
          '<strong>0.31 〜 0.50</strong>',
          '中程度の連関',
          '両方の特性が互いに顕著に影響し合っています。',
        ],
        [
          '<strong>0.50 以上</strong>',
          '強い連関',
          '非常に明確な連関です。変数Aを知ることで、変数Bを非常によく予測できます。',
        ],
      ],
    },
    {
      type: 'tip',
      title: '数学的な実行条件',
      html: '空のセルに注意してください！ピアソンのカイ二乗近似が堅牢であるためには、<em>期待度数</em>（観測度数ではありません）の少なくとも80%が5より大きく、かつ1未満のセルがないことが方法論的に要求されます。この条件が満たされない場合、警告が表示され、カテゴリの統合が推奨されます。',
    },
    {
      type: 'title',
      level: 2,
      text: '残差ヒートマップの内蔵',
    },
    {
      type: 'paragraph',
      html: 'ユーザーエクスペリエンスを向上させ、レポートの結論を出しやすくするために、当ツールの行列は標準化残差（偏差）に基づいてセルの背景を自動的に色付けします。<br/><br/><strong>緑色の濃淡：</strong>純粋に数学的に期待されるよりも、<em>成功数が大幅に多い</em>セルです。<br/><strong>赤色の濃淡：</strong>期待される基準と比較して、危険なほど「空」に近いセルです。',
    },
    {
      type: 'title',
      level: 2,
      text: 'カイ二乗用語集',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '観測度数',
          definition: '実験や調査で実際にカウントした正確な数値。',
        },
        {
          term: '期待度数',
          definition: '行と列の周辺合計から算出される、変数間に関連がないと仮定した場合の理論上の度数。',
        },
        {
          term: '自由度 (df)',
          definition: '自由に動けるデータの数。 (行数-1) × (列数-1) で求められます。',
        },
        {
          term: '標準化残差',
          definition: '観測値と期待値の差を正規化したもの。どのセルが結果を最も大きく「押し上げている」かを測定します。',
        },
      ],
    },
  ],
  ui: {
    labelConfig: '設定',
    labelTableSize: '表のサイズ（行 × 列）',
    labelAlpha: '有意水準 (α)',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    infoText:
      'ローカルな推論のみを使用して、期待度数、χ²値、およびクラメールのV係数を自動的に計算します。',
    labelObserved: '観測度数（入力）',
    btnShowExpected: '期待度数を表示 (H₀)',
    expectedDesc:
      'これらは、2つの変数間に関連が全くない（ランダムな分布）場合に各セルに存在する数値です。',
    alertTitle: '統計的警告 (セル < 5)',
    alertBody:
      '期待度数が非常に低いセルがあります。χ²近似の信頼性が低い可能性があります。カテゴリを統合するか、フィッシャーの正確検定を使用することをお勧めします。',
    labelPValue: 'P値 (p)',
    sigDescInitial: '有意な関係があります',
    labelGlobalStats: '全体統計',
    labelChiSquareStat: 'カイ二乗値 (χ²)',
    labelDegrees: '自由度 (df)',
    labelCramer: '連関の強さ (クラメールのV)',
    labelVisualization: '残差の可視化（観測 vs 期待）',
    heatmapInfo: '残差の変動に応じてセルの背景色が変化します。',
    labelReport: 'レポート用テキスト',
    defaultJustification:
      '合計N件の観測結果を分析した結果、χ²(df) = X という値が得られました。P値がPであることから、有意な従属関係があると結論付けられます。',
    btnCopy: 'テキストをコピー',
    rowLabel: '行',
    colLabel: '列',
    totalLabel: '合計',
    cramerNull: '連関なし',
    cramerWeak: '弱い連関',
    cramerModerate: '中程度の連関',
    cramerStrong: '強い連関',
    sigText: '有意な連関があります（従属関係）。',
    noSigText: '関係があるという証拠はありません（独立関係）。',
    chartLegendObs: '観測値',
    chartLegendExp: '期待値',
    btnCopied: 'コピーしました！',
    justificationIntro: '分析の結果、',
    justificationTableOf: '件のデータを',
    justificationObtained: ' 分割表で調査し、',
    justificationPAt: ' を得ました。有意水準 α=',
    justificationConcluded: ' で評価した結果、以下のように実証的に結論付けられます。',
    justificationSig: '変数間に強い連関があります（クラメールのV:',
    justificationNoSig: '統計的に有意な連関は認められません',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
  },
};
