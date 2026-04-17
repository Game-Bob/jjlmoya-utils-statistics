import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'normal-distribution-calculator';
const title = '在线正态分布计算器';
const description =
  '立即计算正态分布概率：P(X ≤ a)、P(X ≥ a)、P(a ≤ X ≤ b) 以及逆正态分布。输入均值和标准差，即可可视化带有阴影区域的离斯钟形曲线。';

const faqData = [
  {
    question: '什么是正态分布？',
    answer:
      "正态分布（或高斯钟形曲线）是统计学中最重要的连续概率分布。它完全由两个参数定义：均值 (μ) 决定中心位置，标准差 (σ) 控制离散程度。它关于均值对称，且尾部延伸至无穷大。",
  },
  {
    question: '概率是如何计算的？',
    answer:
      "概率通过对概率密度函数 (PDF) 进行积分获得。由于没有闭式原函数，它是使用误差函数 (erf) 计算的。本计算器采用高精度的 Abramowitz 和 Stegun 近似法，以求得准确结果。",
  },
  {
    question: '什么是 Z 分数？',
    answer:
      'Z 分数（或标准分）指示一个值距离均值有多少个标准差：z = (X - μ) / σ。它允许比较来自不同度量尺度的分布中的数值。例如，z = 1 意味着 X 正好比均值高出 1 个标准差。',
  },
  {
    question: '逆正态分布有什么用途？',
    answer:
      '逆正态分布回答了这样一个问题：哪个 X 值对应于第 p 个百分位数？即，已知 P(X ≤ x) = p，求 x。它广泛应用于质量控制（容差限）、推断统计（临界值）和随机变量模拟。',
  },
];

const howToData = [
  {
    name: '输入参数',
    text: '输入正态分布的均值 (μ) 和标准差 (σ > 0)。默认使用标准正态分布 (μ=0, σ=1)。',
  },
  {
    name: '选择计算类型',
    text: '选择模式：P(X ≤ a) 计算左尾，P(X ≥ a) 计算右尾，P(a ≤ X ≤ b) 计算区间，或“逆运算”根据给定百分比查找 X 值。',
  },
  {
    name: '查看结果和图表',
    text: '概率结果及 Z 分数将立即显示。高斯钟形曲线会显示与计算出的概率相对应的阴影区域。',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    { name: '正态分布 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83' },
    { name: '误差函数 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E8%AF%AF%E5%B7%AE%E5%87%BD%E6%95%B0' },
    { name: 'Abramowitz 和 Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: '标准分数 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%A0%87%E5%87%86%E5%88%86%E6%95%B0' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '正态分布计算器：实时获取概率结果' },
    {
      type: 'paragraph',
      html: '<strong>正态分布计算器</strong>可立即计算任何正态分布概率：左尾、右尾、中心区间及逆运算。只需输入均值和标准差即可获得结果，并在高斯钟形曲线上进行可视化。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: '计算模式', icon: 'mdi:function-variant' },
        { value: '实时', label: '实时结果', icon: 'mdi:lightning-bolt' },
        { value: '免费', label: '无需注册', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: '计算模式' },
    {
      type: 'table',
      headers: ['模式', '描述', '示例应用'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', '直至数值 a 的累积概率（左尾）。', '低于某个分数阈值的学生百分比。'],
        ['<strong>P(X ≥ a)</strong>', '从数值 a 开始的右尾概率。', '超过质量标准阈值的概率。'],
        ['<strong>P(a ≤ X ≤ b)</strong>', '中心或非对称区间内的概率。', '符合容差范围的零件比例。'],
        ['<strong>逆运算</strong>', '查找 X 使得 P(X ≤ x) = p（第 p 个百分位数）。', '假设检验中的临界值。'],
      ],
    },
    {
      type: 'tip',
      title: '68 95 99.7 经验法则',
      html: '在任何正态分布中：<strong>68%</strong> 的数据位于均值 ±1σ 范围内，<strong>95%</strong> 位于 ±2σ 范围内，<strong>99.7%</strong> 位于 ±3σ 范围内。您可以通过在 μ=0 且 σ=1 时计算 P(-1 ≤ z ≤ 1) 来验证这一点。',
    },
    { type: 'title', level: 2, text: '快速参考术语表' },
    {
      type: 'glossary',
      items: [
        { term: '均值 (μ)', definition: '位置参数。确定高斯钟形曲线的中心。' },
        { term: '标准差 (σ)', definition: '尺度参数。控制钟形曲线的宽度。必须为严格正数。' },
        { term: 'Z 分数', definition: '标准化值：z = (X - μ) / σ。指示 X 距离均值有多少个标准差。' },
        { term: 'PDF', definition: '概率密度函数。PDF 在某一区间下的面积等于该区间的概率。' },
      ],
    },
  ],
  ui: {
    labelTitle: '正态分布',
    labelMean: '均值',
    labelStdDev: '标准差',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: '逆运算',
    labelValue: '数值 X (a)',
    labelValueA: '下限 (a)',
    labelValueB: '上限 (b)',
    labelPercentile: '百分位数 p (0 < p < 1)',
    resultProbability: '概率',
    resultX: '数值 X',
    resultZScore: 'Z 分数',
    resultZScoreA: 'z₁ (下限)',
    resultZScoreB: 'z₂ (上限)',
    hintStdDev: '标准差必须大于 0。',
    hintPercentile: '百分位数必须介于 0 和 1 之间（不含 0 和 1）。',
    labelChart: '高斯钟形曲线',
    chartDesc: '阴影区域对应于计算出的概率。',
    labelReport: '报告摘要',
    btnCopy: '复制摘要',
    btnCopied: '已复制！',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
  },
};
