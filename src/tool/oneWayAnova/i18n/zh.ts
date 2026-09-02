import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OneWayAnovaUI } from '../ui';

const slug = 'one-way-anova-between-within-groups-calculator';
const title = '组间与组内方差单因素方差分析计算器';
const description = '使用ANOVA表、Fisher F统计量、p值和效应量比较三个或更多独立组的均值。';
const faq = [
  { question: '单因素ANOVA检验什么？', answer: '它检验所有总体均值相等的零假设。显著的F检验说明至少一个均值不同，但不会说明是哪一对。' },
  { question: '为什么不用很多t检验？', answer: '进行许多未经校正的成对检验会提高假阳性的概率。ANOVA先在选定的alpha水平下进行一次全局检验。' },
  { question: '计算器需要什么数据？', answer: '为每个独立组输入一个连续的定量结果及其观测值。至少需要三个组，并且每组至少有两个观测值。' },
  { question: '如果p值显著，下一步是什么？', answer: '将其视为并非所有均值都相等的证据，然后使用Tukey HSD等控制多重比较的计划方法。也要检查模型假设。' },
];
const howTo = [
  { name: '输入独立组', text: '创建至少三个组，并为每组填写清晰的名称。' },
  { name: '添加连续观测值', text: '用逗号、空格、分号或换行分隔测量值。' },
  { name: '选择alpha并查看F', text: '选择显著性水平，然后阅读F、p值、效应量和变异分解。' },
  { name: '规划后续比较', text: '如果全局检验显著，请使用控制多重比较的事后方法定位差异。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' }, inLanguage: 'zh' };

export const content: ToolLocaleContent<OneWayAnovaUI> = {
  slug, title, description, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '单因素ANOVA比较什么' },
    { type: 'paragraph', html: '单因素ANOVA比较三个或更多独立组中定量结果的均值。它把总变异分为组间变异和组内变异：前者表示各组均值与总均值的距离，后者表示观测值围绕本组均值的自然分散。' },
    { type: 'paragraph', html: '全局零假设是所有总体均值相等。备择假设只表示至少有一个均值不同。较小的p值回答全局问题，但不会说明哪些组不同，也不会说明差异在实际中是否重要。' },
    { type: 'table', headers: ['ANOVA来源', '平方和', '自由度', '均方'], rows: [['组间', 'SS组间', 'k减1', 'SS组间除以k减1'], ['组内', 'SS组内', 'N减k', 'SS组内除以N减k'], ['总计', 'SS总计', 'N减1', '不使用']] },
    { type: 'title', level: 2, text: '如何阅读F统计量和p值' },
    { type: 'paragraph', html: 'F是组间均方与组内均方的比值。当组均值相对于组内自然分散更加分离时，F会增大，F分布的右尾概率会变小。计算器将这个右尾概率显示为p值。' },
    { type: 'list', items: ['在解释结果前先选择alpha，常用值是0.05。', '如果p小于alpha，拒绝均值全局相等。', '如果p不小于alpha，应报告证据不足，而不是声称均值相等。', '用eta平方描述与组别相关的总观测变异比例。'] },
    { type: 'tip', title: '显著结果不是成对比较答案', html: '全局检验可以说明至少一个均值不同，但不能定位差异。使用Tukey HSD或其他控制多重性的计划方法，并报告置信区间和效应量。' },
    { type: 'title', level: 2, text: '解释前需要注意的假设' },
    { type: 'paragraph', html: '经典模型假设观测值相互独立、各组内误差近似正态，并且各组具有共同方差。计算器会提示样本较小或组大小严重不平衡的情况，因为这些情况需要更仔细地检查假设。' },
    { type: 'list', items: ['保持组内和组间观测值独立。', '使用定量响应，而不是二元转化率。', '样本较小或组大小差异很大时，检查分布和残差。', '如果等方差不可信，考虑Welch方法或稳健方法。'] },
    { type: 'title', level: 2, text: '可复现的ANOVA流程' },
    { type: 'paragraph', html: '按照因素的真实水平命名各组，保留测量单位，并确保输入值可以复核。记录alpha、组大小、ANOVA表和后续方法。好的报告应给出带有两个自由度的F、p值和效应量。' },
    { type: 'tip', title: '计算器的范围', html: '本工具计算独立组的单因素ANOVA。不执行事后检验、重复测量分析、协变量调整、异常值删除，也不进行正态性和等方差性的正式诊断。' },
  ],
  ui: {
    labelGroups: '独立组', labelGroupName: '组名称', labelObservations: '连续观测值', labelAlpha: '显著性水平alpha', alpha10: '0.10', alpha05: '0.05', alpha01: '0.01', addGroup: '添加组', removeGroup: '删除', analyze: '重新计算ANOVA', reset: '重置示例', presetBalanced: '平衡噪声', presetSeparated: '明显分离', presetSubtle: '细微分离', inputHint: '使用逗号、空格、分号或换行分隔数值。每组至少需要两个观测值。', emptyTitle: '你的方差桥会显示在这里', emptyBody: '输入三个独立组，查看总变异如何分为组间信号和组内噪声。', resultTitle: 'ANOVA结果', significant: '有均值差异的证据', notSignificant: '未检测到全局差异', labelPValue: 'p值', labelFStatistic: 'F统计量', labelEtaSquared: 'eta平方', labelGrandMean: '总均值', labelBetween: '组间', labelWithin: '组内', labelVariationMap: '变异在哪里', labelGroupPlot: '均值星座图', plotDescription: '点表示观测值，圆环表示组均值，线表示总均值。', labelSignal: '组间信号', labelNoise: '组内噪声', labelSource: '来源', labelSS: 'SS', labelDF: 'df', labelMS: 'MS', labelF: 'F', labelP: 'p', betweenGroups: '组间', withinGroups: '组内', total: '总计', labelGroupSummary: '各组标志', labelN: 'n', labelMean: '均值', labelSD: 'SD', labelInterpretation: '解释', interpretationSignificant: '在选定的alpha水平下，各组均值并不都与同一个总体均值相容。', interpretationNotSignificant: '在选定的alpha水平下，数据没有提供足够证据拒绝一个共同的总体均值。', postHocNote: '全局检验不会指出不同的组对。如果结果显著，请继续使用控制多重性的事后方法。', warningTitle: '解释前检查', warningSmallSamples: '至少有一组少于五个观测值。请检查分布，并谨慎看待正态性假设。', warningUnbalanced: '最大组至少是最小组的两倍。请更加仔细地检查等方差假设。', warningZeroError: '组内没有变异。当组均值不同时，F为无穷大。', errorTitle: '请检查输入', errorBody: '检查各组数值后重试。', errorNeedGroups: 'ANOVA至少需要三个组以及0到1之间的alpha。', errorNeedValues: '每组至少需要两个观测值。', errorInvalidValues: '只能使用有限的数值观测。', copySummary: '报告句', copied: '已复制', defaultReport: '报告句将根据当前分析生成。', copyReport: '复制句子', reportCopied: '句子已复制', reportIntro: '对于', reportBetween: '个观测值，单因素ANOVA得到', reportWith: 'p值为', reportAt: 'alpha为', reportSignificant: '均值相等的全局零假设被拒绝。', reportNotSignificant: '均值相等的全局零假设未被拒绝。',
  },
};
