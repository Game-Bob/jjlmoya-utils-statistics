import { makeEffectContent } from './localized';
import type { EffectSizeUI } from '../ui';

const ui: EffectSizeUI = {
  groupA: '组 A', groupB: '组 B', mean: '均值', standardDeviation: '样本标准差', sampleSize: '样本量', meanHelp: '该组的平均结果。', standardDeviationHelp: '请使用样本标准差，而不是标准误。', sampleSizeHelp: '至少需要 2 个观测值。', example: '使用示例', reset: '重置', clear: '清除输入', resultTitle: '效果解读', difference: '均值差 A 减 B', pooledStandardDeviation: '合并 SD', degreesOfFreedom: '自由度', cohensD: 'Cohen 的 d', hedgesG: 'Hedges 的 g', correction: '小样本校正', confidenceInterval: '约 95% 置信区间', magnitude: '大小', direction: '方向', uncertainty: '精确度', higher: '组 A 更高', lower: '组 A 更低', equal: '均值相等', verySmall: '极小', small: '小', medium: '中等', large: '大', crossesZero: '区间跨过零', doesNotCrossZero: '区间未跨过零', chartTitle: '共同尺度上的差异', chartDifference: '原始差异', chartBand: 'Hedges 的 g 区间', chartBaseline: '均值相等', chartA: '组 A 均值', chartB: '组 B 均值', chartEmpty: '输入六个有效值即可查看差异。', statusReady: '已根据上方数值更新。', statusInvalid: '请检查六个输入：SD 必须为正，样本量至少为 2。', statusCopied: '摘要已复制。', copied: '已复制', inputError: '无效数值', summaryTitle: '两组效果量摘要', copySummary: '复制摘要',
};

export const content = makeEffectContent({ language: 'zh', slug: 'two-group-effect-size-calculator', title: '两组效应量计算器', description: '根据两个独立组的汇总统计计算 Cohen 的 d 和 Hedges 的 g，并解读方向、大小和约 95% 置信区间。', ui,
  faq: [
    { question: 'Cohen 的 d 衡量什么？', answer: 'Cohen 的 d 用合并标准差的单位表示两个均值之间的差异。符号保留 A 减 B 的方向，绝对值表示标准化后的大小。' },
    { question: '为什么还要显示 Hedges 的 g？', answer: 'Hedges 的 g 会对 Cohen 的 d 应用小样本校正。组较大时校正很小，合并自由度较少时更明显。' },
    { question: '区间跨过零是否证明没有效果？', answer: '不是。这表示约 95% 区间包含零，在该置信水平下无法精确判断方向；它不证明等效或没有效果。' },
    { question: '这个计算器能替代 t 检验或荟萃分析吗？', answer: '不能。它只根据汇总统计计算标准化均值差，不进行假设检验、假设检查、配对数据分析或研究合并。' },
  ],
  howTo: [
    { name: '输入两组汇总统计', text: '输入每组的均值、样本标准差和样本量。使用相同的测量尺度，并在读取符号前确定 A 和 B。' },
    { name: '读取标准化差异', text: '使用 Cohen 的 d 查看直接估计，使用 Hedges 的 g 查看经过小样本校正的估计。结果保持 A 减 B 的方向。' },
    { name: '检查精确度和背景', text: '同时查看约 95% 置信区间和大小类别。阈值只是参考，不是普遍规则。' },
  ],
  introTitle: '先标准化差异，再进行解读', introOne: '均值的原始差异取决于测量尺度。这个<strong>两组效应量计算器</strong>将差异除以合并标准差，把距离表示为标准差单位。', introTwo: '输入两个独立组的均值、样本标准差和样本量。工具会返回 Cohen 的 d、经过小样本校正的 Hedges 的 g、约 95% 区间以及 A 减 B 的方向。', calculationTitle: '计算使用的内容', tableHeaders: ['结果', '如何解读'], tableRows: [['均值差', '以原始测量单位表示的 A 减 B 差异。'], ['合并标准差', '用于标准化差异的共同离散程度。'], ['Cohen 的 d', '小样本校正之前的标准化差异。'], ['Hedges 的 g', '根据合并自由度进行校正后的 Cohen 的 d。'], ['约 95% 区间', '根据汇总统计和正态近似得到的精确度区间。']], directionTitle: '如何读取方向', direction: '符号很重要。正值表示 A 的均值高于 B，负值表示相反。交换两组会改变符号，但不会改变绝对大小。', actions: ['让两组使用相同的测量尺度。', '使用样本标准差，而不是标准误。', '确认观测值彼此独立。', '报告估计值、区间、组别顺序和单位。'], thresholdTitle: '阈值不是结论', threshold: '极小、小、中等和大这些标签遵循约 0.2、0.5 和 0.8 的常见参考值。实际重要性取决于结果、测量质量、研究设计和有意义的最小差异。', precisionTitle: '精确度也是结果的一部分', precision: '即使标准化差异较大，区间很宽时仍可能不精确，尤其是在样本量小或变异较大时。如果 Hedges 的 g 区间跨过零，请在这个近似置信水平下将方向视为不确定。', glossaryTitle: '术语表', glossary: [['合并标准差', '根据样本量调整后，对两个独立组共同离散程度的估计。'], ['Cohen 的 d', '均值差除以合并标准差。'], ['Hedges 的 g', '针对小样本偏差校正后的标准化均值差。'], ['置信区间', '表示估计不确定性的范围，不是对固定参数的保证。']], limitsTitle: '这个工具无法告诉你的内容', limits: '计算器不能证明因果关系、统计显著性、等效性、临床意义、正态性、方差相等或研究质量。它不支持配对观测，也不能仅凭汇总统计恢复丢失的信息。',
});
