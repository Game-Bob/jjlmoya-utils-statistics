import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-hypothesis-calculator';
const title = '在线 A/B 测试假设检验计算器';
const description =
  '比较两个小组（A 和 B），以确定它们的转化率或平均值是否存在统计学上的显著差异。立即计算 P 值。';

const faqData = [
  {
    question: 'P 值代表什么？',
    answer:
      'P 值告诉您 A 组和 B 组之间的表现差异纯粹是由偶然因素导致的概率。如果 P 值低于显著性水平（通常为 0.05），这意味着您可以 95% 肯定这种结构性差异是真实存在的。',
  },
  {
    question: '什么是显著性水平（Alpha 或 α）？',
    answer:
      '这是您对测试的严格程度要求。Alpha 为 0.05 要求 95% 确定 B 组与 A 组不同才能认为结果有效。Alpha 为 0.01 则要求更高的严格程度（99%）。学术界和工业界的惯例是默认使用 0.05。',
  },
  {
    question: '比例检验和平均值检验有什么区别？',
    answer:
      '比例检验测量二元的成功或失败变量：点击次数、电子邮件打开次数、转化次数。平均值检验比较累积的定量行为：平均购物车支出或临床康复天数。',
  },
  {
    question: '如果我的样本量小于 30 个受试者怎么办？',
    answer:
      '样本量如此之小时，正态分布近似会变得不够精确（中心极限定理）。对于临床决策，我们建议使用更保守的精确概率技术或调整后的 Student t 检验技术。',
  },
];

const howToData = [
  {
    name: '选择数值目标',
    text: '在配置面板中，定义您是要测量转化率（简单比例）还是金额等常规平均水平（平均值）。',
  },
  {
    name: '输入对照组数据（A 组）',
    text: '填写发送/曝光的案例数以及它们获得了多少次成功（或其平均值）。',
  },
  {
    name: '输入实验组数据（B 组）',
    text: '输入您正在测量的新方案或变体的数值。',
  },
  {
    name: '记录统计判定',
    text: '查看“显著性判定”，并复制生成的关于实际提升（Lift）是否拒绝随机假设的依据。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    { name: '统计假设检验 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E7%B5%B1%E8%A8%88%E5%81%87%E8%AA%AC%E6%AA%A2%E5%AE%9A' },
    { name: 'A/B 测试计算器 - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '在线 A/B 测试假设检验计算器' },
    {
      type: 'paragraph',
      html: '凭直觉做决定是危险的；基于纯粹的数据做决定才是成功之路。<strong>假设检验计算器（A/B 测试）</strong>是分析师、营销人员和研究人员的必备工具，用于验证两个小组之间的差异是具有统计学显著性，还是仅仅是偶然的结果。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P 值', label: '最终裁决者', icon: 'mdi:scale-balance' },
        { value: '本地', label: '不上传数据', icon: 'mdi:shield-check' },
        { value: '即时', label: '内置图表', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: '为什么我们要将测试分为“转化率”和“平均值”？' },
    {
      type: 'paragraph',
      html: '根据研究性质的不同，成功指标也会发生变化。我们的工具原生支持行业内最广泛使用的两种统计检验类型。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '比例检验（转化率）',
          description: '比较两组之间的百分比或成功率。',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            '适用于营销（点击次数、销售额、订阅数）',
            '使用总案例数 (n) 和成功次数 (x)',
            '应用双方比例 Z 检验',
          ],
        },
        {
          title: '连续平均值检验',
          description: '比较两组之间的平均数值。',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            '适用于客单价、页面停留时间或临床试验',
            '使用平均值 (μ) 和标准差 (σ)',
            '对样本应用稳健的正态近似 (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: '如何解读结果：P 值是您的指南' },
    {
      type: 'paragraph',
      html: '本计算器的核心是著名的 <strong>P 值</strong>。这个数字告诉您，如果原假设（假设“两组相等”）为真，获得这些观测差异的概率。',
    },
    {
      type: 'table',
      headers: ['观测 P 值', '实际意义', '标准决策'],
      rows: [
        ['<strong>大于 0.05</strong>', '相对于方差而言，差异较小。偶然因素完全可以解释这一点。', '<strong>不拒绝</strong>原假设。没有证明存在实际改进。'],
        ['<strong>小于 0.05</strong>', '偶然因素导致如此大差异的可能性极低。存在实际效应。', '<strong>拒绝</strong>原假设。变体 B 表现更好！'],
        ['<strong>小于 0.01</strong>', '支持变化的证据是压倒性的（99% 置信度）。', '<strong>坚决拒绝</strong>。实验取得巨大成功。'],
      ],
    },
    {
      type: 'tip',
      title: '小样本修正',
      html: '如果您的分组处理的受试者少于 30 个，工具将显示“小样本”警告。在这些临界场景中，经典的正态近似会失去精度；我们建议使用精确的 Student t 检验或 Fisher 工具。',
    },
    { type: 'title', level: 2, text: 'A/B 测试术语表' },
    {
      type: 'glossary',
      items: [
        { term: '对照组 (A)', definition: '用于衡量实验效果的原始版本或基准。' },
        { term: '变体 (B)', definition: '您期望能改善指标的新修改版本。' },
        { term: '提升（相对改进）', definition: 'B 组表现相对于 A 组基准的百分比变化。' },
        { term: '显著性水平 (α)', definition: '您愿意接受的错误阈值（通常为 5% 或 0.05）。' },
      ],
    },
  ],
  ui: {
    labelParams: '参数',
    btnConversions: '转化率',
    btnMeans: '平均值',
    labelGroupA: 'A 组（对照组）',
    labelGroupB: 'B 组（变体）',
    labelTotalCases: '总案例数',
    labelSuccesses: '成功或转化次数',
    labelMean: '平均值',
    labelStdDev: '标准差',
    labelAlpha: '显著性水平',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    labelDirection: '检验方向',
    btn2Tails: '双尾（差异）',
    btn1Tail: '单尾 (B > A)',
    alertTitle: '统计可靠性警告',
    alertBody: '您正在使用非常小的样本量或极端值（0 次成功）。估计值可能无法代表真实情况。',
    alertLinkText: '在这里计算您的理想样本量',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P 值',
    sigDescInitial: '有足够的证据拒绝原假设',
    labelLift: '提升分析 (Lift)',
    labelLiftText: '相对于 A 组的改进',
    labelConfidencePrefix: '统计置信度：',
    labelDistributions: '概率分布',
    chartDesc: '观察重叠部分：重叠越少，表明差异是真实的而非偶然结果的确定性越高。',
    labelReport: '用于报告的文本',
    defaultJustification: '分析了 X 个受试者后，B 组在 Z% 的统计置信度下显示出 Y% 的提升 (p=0.00)。',
    btnCopy: '复制文本',
    btnCopied: '已复制！',
    sigText: '有足够的证据拒绝原假设。',
    noSigText: '差异在统计学上不显著。',
    justIntro: '在分析了总共 ',
    justSamples: ' 个样本后，B 组显示出相对于 A 组 ',
    justRespectTo: '% 的变化。',
    justWithConfidence: ' 在统计置信度为 ',
    justDiff: ' 的情况下，经验差异 ',
    justSig: '具有统计学显著性',
    justNoSig: '不具有统计学显著性',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
  },
};
