import { makeEffectContent } from './localized';
import type { EffectSizeUI } from '../ui';

const ui: EffectSizeUI = {
  groupA: 'グループA', groupB: 'グループB', mean: '平均', standardDeviation: '標本標準偏差', sampleSize: '標本サイズ', meanHelp: 'このグループの平均結果。', standardDeviationHelp: '標準誤差ではなく標本標準偏差を使います。', sampleSizeHelp: '2件以上の観測値。', example: '例を使う', reset: 'リセット', clear: '入力を消去', resultTitle: '効果の読み取り', difference: '平均差 A − B', pooledStandardDeviation: 'プールしたSD', degreesOfFreedom: '自由度', cohensD: 'Cohenのd', hedgesG: 'Hedgesのg', correction: '小標本補正', confidenceInterval: 'およその95%信頼区間', magnitude: '大きさ', direction: '方向', uncertainty: '精度', higher: 'グループAの方が高い', lower: 'グループAの方が低い', equal: '平均は等しい', verySmall: 'ごく小さい', small: '小さい', medium: '中程度', large: '大きい', crossesZero: '区間は0をまたぐ', doesNotCrossZero: '区間は0をまたがない', chartTitle: '共通の尺度で見た差', chartDifference: '生の差', chartBand: 'Hedgesのgの区間', chartBaseline: '平均が等しい位置', chartA: 'グループAの平均', chartB: 'グループBの平均', chartEmpty: '6つの有効な値を入力すると差が表示されます。', statusReady: '上の値から更新しました。', statusInvalid: '6つの入力を確認してください。SDは正、標本サイズは2以上である必要があります。', statusCopied: '概要をコピーしました。', copied: 'コピー済み', inputError: '無効な値', summaryTitle: '2群の効果量の概要', copySummary: '概要をコピー',
};

export const content = makeEffectContent({ language: 'ja', slug: 'two-group-effect-size-calculator', title: '2群の効果量計算機', description: '独立した2群の要約統計からCohenのdとHedgesのgを計算し、方向、大きさ、およその95%信頼区間を読み取ります。', ui,
  faq: [
    { question: 'Cohenのdは何を測りますか？', answer: 'Cohenのdは、2つの平均の差をプールした標準偏差の単位で表します。符号はA−Bの方向を保ち、絶対値は標準化された大きさを示します。' },
    { question: 'なぜHedgesのgも表示するのですか？', answer: 'HedgesのgはCohenのdに小標本補正を加えた値です。群が大きいと補正は小さく、合計の自由度が少ないと目立ちます。' },
    { question: '区間が0をまたぐと効果がない証拠ですか？', answer: 'いいえ。およその95%区間に0が含まれ、指定した信頼水準で方向を精密に判断できないことを示します。同等性や効果の不存在の証明ではありません。' },
    { question: 'この計算機はt検定やメタ分析の代わりになりますか？', answer: 'なりません。要約統計から標準化された平均差を計算するだけで、仮説検定、仮定の確認、対応のあるデータ、研究の統合は行いません。' },
  ],
  howTo: [
    { name: '2群の要約統計を入力する', text: '各群の平均、標本標準偏差、標本サイズを入力します。同じ測定尺度を使い、符号を読む前にAとBを決めます。' },
    { name: '標準化された差を読む', text: '直接の推定にはCohenのd、小標本補正を含む推定にはHedgesのgを使います。結果はA−Bの方向を保ちます。' },
    { name: '精度と文脈を確認する', text: 'およその95%信頼区間と大きさの分類を一緒に読みます。しきい値は目安であり、普遍的な規則ではありません。' },
  ],
  introTitle: '解釈する前に差を標準化する', introOne: '平均の生の差は測定尺度に左右されます。この<strong>2群の効果量計算機</strong>は差をプールした標準偏差で割り、標準偏差単位の距離として表します。', introTwo: '独立した2群の平均、標本標準偏差、標本サイズを入力してください。Cohenのd、 小標本補正後のHedgesのg、およその95%区間、A−Bの方向を表示します。', calculationTitle: '計算で使うもの', tableHeaders: ['結果', '読み方'], tableRows: [['平均差', '測定単位でのA−Bの元の差。'], ['プールした標準偏差', '差を標準化するための共通のばらつき。'], ['Cohenのd', '小標本補正前の標準化された差。'], ['Hedgesのg', '合計の自由度に基づく補正をCohenのdに掛けた値。'], ['およその95%区間', '要約統計と正規近似に基づく精度の区間。']], directionTitle: '方向の読み方', direction: '符号は重要です。正の値はAの平均がBより高いこと、負の値はその逆を示します。群を入れ替えると符号は変わりますが、絶対的な大きさは変わりません。', actions: ['2群を同じ測定尺度にそろえる。', '標準誤差ではなく標本標準偏差を使う。', '観測値が独立していることを確認する。', '推定値、区間、群の順序、単位を報告する。'], thresholdTitle: 'しきい値は判定ではない', threshold: 'ごく小さい、小さい、中程度、大きいという分類は、0.2、0.5、0.8付近の一般的な目安に従います。実務的な重要性は、結果、測定の質、研究デザイン、重要な最小差によって変わります。', precisionTitle: '精度も結果の一部', precision: '区間が広い場合、標準化された差が大きくても不精密なことがあります。特に群が小さい場合やばらつきが大きい場合に注意してください。Hedgesのgの区間が0をまたぐなら、この近似信頼水準では方向が不確実です。', glossaryTitle: '用語集', glossary: [['プールした標準偏差', '2つの独立群の共通のばらつきを標本サイズで調整した推定値。'], ['Cohenのd', '平均差をプールした標準偏差で割った値。'], ['Hedgesのg', '小標本の偏りを補正した標準化平均差。'], ['信頼区間', '推定の不確実性を示す範囲であり、固定パラメータの保証ではありません。']], limitsTitle: 'このツールで分からないこと', limits: 'この計算機は因果関係、統計的有意性、同等性、臨床的意義、正規性、分散の等しさ、研究の質を証明しません。対応のある観測値には対応せず、要約統計だけから失われた情報を復元することもできません。',
});
