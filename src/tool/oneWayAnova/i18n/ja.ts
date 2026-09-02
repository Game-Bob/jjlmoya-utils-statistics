import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OneWayAnovaUI } from '../ui';

const slug = 'one-way-anova-between-within-groups-calculator';
const title = '群間と群内の分散を調べる一元配置分散分析計算機';
const description = '3つ以上の独立したグループの平均をANOVA表、F統計量、p値、効果量で比較します。';
const faq = [
  { question: '一元配置分散分析は何を検定しますか？', answer: 'すべての母平均が等しいという帰無仮説を検定します。有意なF検定は少なくとも1つの平均が異なることを示しますが、どの組み合わせかは示しません。' },
  { question: 'なぜ複数のt検定ではなくANOVAを使いますか？', answer: '補正なしのペア比較を多く行うと、偽陽性の確率が高まります。ANOVAは選択した有意水準で最初に1つの全体検定を行います。' },
  { question: 'この計算機にはどんなデータが必要ですか？', answer: '各独立グループの連続的な量的変数の観測値を入力します。3グループ以上、各グループ2観測以上が必要です。' },
  { question: 'p値が有意な場合はどうしますか？', answer: 'すべての平均が等しいとはいえない証拠として扱い、Tukey HSDなど多重性を管理する計画的な比較を続けます。仮定も確認してください。' },
];
const howTo = [
  { name: '独立グループを入力', text: '少なくとも3つのグループを作り、それぞれに意味のある名前を付けます。' },
  { name: '連続観測値を追加', text: '測定値をカンマ、空白、セミコロン、改行で区切ります。' },
  { name: 'アルファとFを確認', text: '有意水準を選び、F、p値、効果量、変動の分解を読み取ります。' },
  { name: '次の比較を計画', text: '全体検定が有意なら、多重比較を管理する事後手法で差のある組を調べます。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' }, inLanguage: 'ja' };

export const content: ToolLocaleContent<OneWayAnovaUI> = {
  slug, title, description, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '一元配置分散分析で比較するもの' },
    { type: 'paragraph', html: '一元配置分散分析は、3つ以上の独立したグループで量的な結果の平均を比較します。全体の変動を、グループ平均と全体平均の距離を表す群間変動と、各グループ内の観測値の自然なばらつきを表す群内変動に分けます。' },
    { type: 'paragraph', html: '全体の帰無仮説はすべての母平均が等しいことです。対立仮説は少なくとも1つの平均が異なることだけを示します。小さいp値は全体の問いに答えますが、どのグループが異なるかや実務上の重要性は示しません。' },
    { type: 'table', headers: ['ANOVAの要因', '平方和', '自由度', '平均平方'], rows: [['群間', 'SS群間', 'kマイナス1', 'SS群間をkマイナス1で割る'], ['群内', 'SS群内', 'Nマイナスk', 'SS群内をNマイナスkで割る'], ['合計', 'SS合計', 'Nマイナス1', '使用しない']] },
    { type: 'title', level: 2, text: 'F統計量とp値の読み方' },
    { type: 'paragraph', html: 'Fは群間平均平方を群内平均平方で割った値です。グループ平均の分離が群内の自然なばらつきに比べて大きいほどFは増え、F分布の右側確率は小さくなります。この右側確率をp値として表示します。' },
    { type: 'list', items: ['解釈の前にアルファを決めます。一般的には0.05です。', 'pがアルファより小さければ、平均の全体的な等しさを棄却します。', 'pがアルファ以上なら差を示す証拠が不足していると報告し、等しいと断定しません。', 'エータ二乗で、グループに関連する全体変動の割合を表します。'] },
    { type: 'tip', title: '有意な結果はペアの答えではありません', html: '全体検定は少なくとも1つの平均の差を示せますが、差の場所は特定しません。Tukey HSDなど多重性を管理する方法を使い、信頼区間と効果量も報告します。' },
    { type: 'title', level: 2, text: '解釈前に確認する仮定' },
    { type: 'paragraph', html: '古典的なモデルは、観測値の独立性、各グループ内の誤差のおおよその正規性、共通の分散を仮定します。小標本やグループサイズの大きな偏りには警告を表示するため、仮定を詳しく確認できます。' },
    { type: 'list', items: ['グループ内およびグループ間で観測値を独立に保ちます。', '二値のコンバージョン率ではなく量的な応答を使います。', '標本が小さい、またはサイズが大きく異なる場合は分布と残差を確認します。', '等分散が疑わしい場合はWelch法や頑健な方法を検討します。'] },
    { type: 'title', level: 2, text: '再現可能なANOVAの流れ' },
    { type: 'paragraph', html: '因子の実際の水準に沿ってグループ名を付け、測定単位を保ち、入力値を確認できるようにします。アルファ、グループ数、ANOVA表、後続手法を記録します。良い報告には2つの自由度を持つF、p値、効果量を含めます。' },
    { type: 'tip', title: 'この計算機の範囲', html: '独立グループの一元配置分散分析を計算します。事後検定、反復測定、共変量調整、外れ値の除外、正規性と等分散性の正式な診断は行いません。' },
  ],
  ui: {
    labelGroups: '独立グループ', labelGroupName: 'グループ名', labelObservations: '連続観測値', labelAlpha: '有意水準アルファ', alpha10: '0.10', alpha05: '0.05', alpha01: '0.01', addGroup: 'グループを追加', removeGroup: '削除', analyze: 'ANOVAを再計算', reset: '例をリセット', presetBalanced: '均衡したノイズ', presetSeparated: '明確な分離', presetSubtle: 'わずかな分離', inputHint: '値はカンマ、空白、セミコロン、改行で区切ります。各グループには2つ以上の観測値が必要です。', emptyTitle: 'ここに分散の橋が現れます', emptyBody: '3つの独立グループを入力すると、全体変動が群間の信号と群内のノイズに分かれる様子を確認できます。', resultTitle: 'ANOVAの結果', significant: '平均の差を示す証拠', notSignificant: '全体的な差は検出されません', labelPValue: 'p値', labelFStatistic: 'F統計量', labelEtaSquared: 'エータ二乗', labelGrandMean: '全体平均', labelBetween: '群間', labelWithin: '群内', labelVariationMap: '変動の場所', labelGroupPlot: '平均の星座', plotDescription: '点は観測値、輪はグループ平均、線は全体平均です。', labelSignal: '群間の信号', labelNoise: '群内のノイズ', labelSource: '要因', labelSS: 'SS', labelDF: 'df', labelMS: 'MS', labelF: 'F', labelP: 'p', betweenGroups: '群間', withinGroups: '群内', total: '合計', labelGroupSummary: 'グループの目印', labelN: 'n', labelMean: '平均', labelSD: 'SD', labelInterpretation: '解釈', interpretationSignificant: '選択したアルファ水準では、グループ平均はすべて共通の母平均とは整合しません。', interpretationNotSignificant: '選択したアルファ水準では、共通の母平均を棄却する十分な証拠がありません。', postHocNote: 'この全体検定では異なる組を特定できません。有意なら多重性を管理する事後手法を続けてください。', warningTitle: '解釈前に確認', warningSmallSamples: '少なくとも1つのグループの観測値が5未満です。分布を確認し、正規性の仮定を慎重に扱ってください。', warningUnbalanced: '最大グループは最小グループの少なくとも2倍です。等分散の仮定を詳しく確認してください。', warningZeroError: 'グループ内の変動がありません。グループ平均が異なる場合、Fは無限大です。', errorTitle: '入力を確認', errorBody: 'グループの値を確認してもう一度試してください。', errorNeedGroups: 'ANOVAには3つ以上のグループと0から1のアルファが必要です。', errorNeedValues: '各グループには2つ以上の観測値が必要です。', errorInvalidValues: '有限の数値だけを使ってください。', copySummary: '報告文', copied: 'コピー済み', defaultReport: '現在の分析から報告文を作成します。', copyReport: '文をコピー', reportCopied: '文をコピーしました', reportIntro: '観測値', reportBetween: 'に対する一元配置ANOVAは', reportWith: '、p値', reportAt: '、アルファ', reportSignificant: '平均が等しいという全体の帰無仮説を棄却します。', reportNotSignificant: '平均が等しいという全体の帰無仮説を棄却できません。',
  },
};
