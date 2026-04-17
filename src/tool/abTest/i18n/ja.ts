import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-kasetsu-kentei-calculator';
const title = 'オンラインA/Bテスト仮説検定計算機';
const description =
  '2つのグループ（AとB）を比較して、コンバージョンや平均に統計的に有意な差があるかどうかを判定します。P値を即座に計算します。';

const faqData = [
  {
    question: 'P値とは何を意味しますか？',
    answer:
      'P値は、グループAとグループBのパフォーマンスの差が単なる偶然である確率を示します。P値が有意水準（通常は0.05）を下回る場合、その構造的な差が本物であると95%の確信を持って言えることを意味します。',
  },
  {
    question: '有意水準（アルファまたはα）とは何ですか？',
    answer:
      'テストにおける厳格さのレベルです。アルファが0.05の場合、グループBがAと異なると判断するために95%の確信が必要です。アルファが0.01の場合、より高い厳格さ（99%）が求められます。学術および産業界の慣習では、デフォルトで0.05を使用します。',
  },
  {
    question: '比率の検定と平均の検定の違いは何ですか？',
    answer:
      '比率の検定は、クリック、メールの開封、コンバージョンなどの二値の成功または失敗の変数を測定します。平均の検定は、平均購入単価や臨床回復日数などの累積的な定量的行動を比較します。',
  },
  {
    question: 'サンプルサイズが30未満の場合はどうなりますか？',
    answer:
      'サンプルサイズが非常に小さい場合、正規分布近似の精度が低下します（中心極限定理）。臨床的な判断を下す場合は、より保守的な正確確率検定や調整されたスチューデントのt検定の使用をお勧めします。',
  },
];

const howToData = [
  {
    name: '数値目標を選択する',
    text: '設定パネルで、コンバージョン率（単純な比率）を測定するか、金額などの一般的な平均（平均値）を測定するかを定義します。',
  },
  {
    name: 'コントロールデータの入力（グループA）',
    text: '送信/表示されたケース数と、そのうち何件の成功があったか（またはその平均）を入力します。',
  },
  {
    name: '実験データの入力（グループB）',
    text: '測定対象となる新しい施策またはバリエーションの数値を入力します。',
  },
  {
    name: '統計的判定を確認する',
    text: '「有意性の判定」を確認し、実際の改善（リフト）がランダムな仮定を棄却するかどうかについての生成された正当化をコピーします。',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献およびリファレンス',
  bibliography: [
    { name: '統計的仮説検定 - Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E7%B5%B1%E8%A8%88%E7%9A%84%E4%BB%AE%E8%AA%AC%E6%A4%9C%E5%AE%9A' },
    { name: 'A/Bテスト計算機 - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'オンラインA/Bテスト仮説検定計算機' },
    {
      type: 'paragraph',
      html: '直感に基づいて決定を下すのは危険です。純粋なデータに基づいて決定を下すことこそが成功への道です。<strong>仮説検定計算機（A/Bテスト）</strong>は、2つのグループ間の差が統計的に有意であるか、単なる偶然の結果であるかを検証する必要があるアナリスト、マーケター、研究者にとって決定的なツールです。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P値', label: '最終判定者', icon: 'mdi:scale-balance' },
        { value: 'ローカル', label: 'データアップロードなし', icon: 'mdi:shield-check' },
        { value: '即座', label: 'ネイティブチャート', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'なぜテストをコンバージョンと平均に分けるのですか？' },
    {
      type: 'paragraph',
      html: '調査の性質に応じて、成功指標は変わります。当ツールは、業界で最も広く使用されている2つの統計検定タイプをネイティブにサポートしています。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '比率の検定（コンバージョン）',
          description: '2つのグループ間の割合や成功率を比較します。',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'マーケティングに最適（クリック、販売、購読）',
            '合計ケース数 (n) と成功数 (x) を使用',
            '2標本の比率のZ検定を適用',
          ],
        },
        {
          title: '連続した平均の検定',
          description: '2つのグループ間の平均的な数値を比較します。',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            '平均客単価、滞在時間、または臨床試験に最適',
            '平均 (μ) と標準偏差 (σ) を使用',
            'サンプルに対する堅牢な正規近似を適用 (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: '結果の解釈方法：P値はあなたのガイドです' },
    {
      type: 'paragraph',
      html: 'この計算機の核心は、有名な<strong>P値</strong>です。この数値は、帰無仮説（「両方のグループは等しい」と仮定）が正しいとした場合に、今回観察されたような差が得られる確率を示します。',
    },
    {
      type: 'table',
      headers: ['観察されたP値', '実用的な意味', '標準的な決定'],
      rows: [
        ['<strong>0.05以上</strong>', '差は分散に対して小さいです。偶然で説明がつきます。', '帰無仮説を<strong>棄却しない</strong>。実質的な改善は証明されませんでした。'],
        ['<strong>0.05未満</strong>', '偶然がこのような差を引き起こす可能性は極めて低いです。実質的な効果があります。', '帰無仮説を<strong>棄却する</strong>。バリエーションBの方が優れた結果です！'],
        ['<strong>0.01未満</strong>', '変化を支持する証拠が圧倒的です（99%の信頼度）。', '<strong>断固として棄却する</strong>。実験は輝かしい成功を収めました。'],
      ],
    },
    {
      type: 'tip',
      title: '小規模サンプルの補正',
      html: 'グループの対象が30未満の場合、ツールは「小規模サンプル」という警告を表示します。これらの境界線上のシナリオでは、古典的な正規近似の精度が低下します。正確なスチューデントのt検定やフィッシャーの正確検定ツールの使用をお勧めします。',
    },
    { type: 'title', level: 2, text: 'A/Bテスト用語集' },
    {
      type: 'glossary',
      items: [
        { term: 'コントロールグループ (A)', definition: '実験の測定基準となる元のバージョンまたはベースライン。' },
        { term: 'バリエーション (B)', definition: '指標の改善を期待する、新しく修正されたバージョン。' },
        { term: 'リフト（相対的な改善）', definition: 'グループAのベースラインに対するグループBのパフォーマンスの変化率。' },
        { term: '有意水準 (α)', definition: '許容できるエラーのしきい値（通常は5%または0.05）。' },
      ],
    },
  ],
  ui: {
    labelParams: 'パラメーター',
    btnConversions: 'コンバージョン',
    btnMeans: '平均値',
    labelGroupA: 'グループA（コントロール）',
    labelGroupB: 'グループB（バリエーション）',
    labelTotalCases: '合計ケース数',
    labelSuccesses: '成功数またはコンバージョン',
    labelMean: '平均値',
    labelStdDev: '標準偏差',
    labelAlpha: '有意水準',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    labelDirection: 'テストの方向',
    btn2Tails: '両側検定（差）',
    btn1Tail: '片側検定（B > A）',
    alertTitle: '統計的信頼性に関する警告',
    alertBody: 'サンプルサイズが非常に小さいか、極端な値（成功数0）を使用しています。推定値が現実の世界を代表していない可能性があります。',
    alertLinkText: '理想的なサンプルサイズをここで計算する',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P値',
    sigDescInitial: '帰無仮説を棄却するのに十分な証拠があります',
    labelLift: '改善分析（リフト）',
    labelLiftText: 'グループAに対する改善率',
    labelConfidencePrefix: '統計的信頼度：',
    labelDistributions: '確率分布',
    chartDesc: '重なりを観察してください。重なりが少ないほど、その差が偶然ではなく実質的なものであるという確実性が高まります。',
    labelReport: 'レポート用テキスト',
    defaultJustification: 'X名の対象を分析した結果、グループBはZ%の統計的信頼度（p=0.00）でY%の改善を示しています。',
    btnCopy: 'テキストをコピー',
    btnCopied: 'コピーしました！',
    sigText: '帰無仮説を棄却するのに十分な証拠があります。',
    noSigText: '差は統計的に有意ではありません。',
    justIntro: '合計',
    justSamples: 'サンプルの分析後、グループBはグループAに対して',
    justRespectTo: '%の変化を示しています。',
    justWithConfidence: '統計的信頼度',
    justDiff: 'において、経験的な差は',
    justSig: '統計的に有意です',
    justNoSig: '統計的に有意ではありません',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献およびリファレンス',
  },
};
