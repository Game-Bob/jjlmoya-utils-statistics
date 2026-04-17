import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'zhi-xin-qu-jian-ji-suan-qi';
const title = '在线置信区间计算器';
const description =
  '使用 Z 或 Student t 分布计算总体均值的置信区间。输入样本均值、标准差、样本量和置信水平，即可立即获得区间、误差幅度（误差范围）和临界值。';

const faqData = [
  {
    question: '什么是置信区间？',
    answer:
      '置信区间 (CI) 是根据样本数据计算出的一个数值范围，在给定的概率（置信水平）下，该范围包含了真实的总体参数。例如，均值的 95% 置信区间意味着如果您重复多次抽样，计算出的区间中有 95% 会包含真实的总体均值。',
  },
  {
    question: '我应该什么时候使用 Z 分布而不是 t 分布？',
    answer:
      '当总体标准差 (σ) 已知，或者样本量 n 较大 (>30) 时使用 Z 分布。当仅已知样本标准差 (s) 且 n 较小时使用 Student t 分布。对于 n > 30，两种分布在实际应用中基本等效，但在 σ 未知时，t 分布仍然更保守且在技术上更准确。',
  },
  {
    question: '样本量如何影响区间的宽度？',
    answer:
      '置信区间的宽度与 1/√n 成正比：将样本量增加到四倍会使误差幅度减半。这解释了为什么大样本能产生更精确的估计，以及为什么样本量规划在统计研究设计中至关重要。',
  },
  {
    question: '什么是误差幅度（误差范围）？',
    answer:
      '误差幅度 (ME) 是置信区间宽度的一半：ME = 临界值 × 标准误 (SE)，其中 SE = σ/√n。它表示在指定的置信水平下，样本估计值与真实总体值之间预期的最大差异。',
  },
];

const howToData = [
  {
    name: '输入样本参数',
    text: '输入样本均值 (x̄)、标准差 (σ 或 s > 0) 和样本量 (n ≥ 2)。',
  },
  {
    name: '选择置信水平',
    text: '使用快速访问按钮选择 90%、95% 或 99%，或输入 0 到 100 之间的任何值。',
  },
  {
    name: '选择分布并查看结果',
    text: '如果总体标准差已知，选择 Z；如果是样本，选择 t。区间、误差幅度和临界值将立即计算出来。',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    { name: '置信区间 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E7%BD%AE%E4%BF%A1%E5%8C%BA%E9%97%B4' },
    { name: 'Student t-分布 - 维基百科', url: 'https://zh.wikipedia.org/wiki/Student_t-%E5%88%86%E5%B8%83' },
    { name: 'NIST e-统计方法手册', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: '标准误 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%A0%87%E5%87%86%E8%AF%AF' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '置信区间计算器：实时结果' },
    {
      type: 'paragraph',
      html: '<strong>置信区间计算器</strong>可立即计算区间、误差幅度、临界值和标准误。它支持 Z 分布（已知总体 sigma）和 Student t 分布（样本 sigma），支持 0 到 100 之间的任何置信水平。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z 和 t 分布', icon: 'mdi:sigma' },
        { value: '实时', label: '实时结果', icon: 'mdi:lightning-bolt' },
        { value: '免费', label: '无需注册', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z 分布 vs Student t 分布' },
    {
      type: 'table',
      headers: ['标准', 'Z 分布', 'Student t'],
      rows: [
        ['何时使用', '已知总体 σ 或 n > 30', '样本 s，任何 n'],
        ['临界值 (95%)', 'z* = 1.960', 't* 取决于 df = n−1'],
        ['自由度', '不适用', 'df = n − 1'],
        ['当 n 较大时', '区间更窄', '趋于 Z 分布'],
      ],
    },
    {
      type: 'tip',
      title: '如何正确解读置信区间',
      html: '<strong>95% 置信区间</strong>并不意味着有 95% 的概率真实均值位于该特定区间内。它的意思是，如果用许多样本重复该<strong>程序</strong>，则生成的区间中有 95% 的时间会包含真实均值。一旦计算出某个区间，它要么包含真实值，要么不包含。',
    },
    { type: 'title', level: 2, text: '快速参考术语表' },
    {
      type: 'glossary',
      items: [
        { term: '置信区间 (CI)', definition: '在选定的置信水平下估算总体参数的范围 [x̄ − ME, x̄ + ME]。' },
        { term: '置信水平', definition: '如果实验重复多次，包含真实参数的区间所占的比例。典型值：90%、95%、99%。' },
        { term: '标准误 (SE)', definition: 'SE = σ/√n。衡量样本均值围绕总体均值的变异程度。' },
        { term: '误差幅度 (ME)', definition: 'ME = z* × SE (或 t* × SE)。它是置信区间宽度的一半。' },
      ],
    },
  ],
  ui: {
    labelTitle: '置信区间',
    labelMean: '样本均值 (x̄)',
    labelStdDev: '标准差',
    labelN: '样本量 (n)',
    labelConf: '置信水平 (%)',
    btnZ: 'Z (已知 σ)',
    btnT: 'Student t',
    labelCI: '置信区间',
    labelME: '误差幅度',
    labelCritical: '临界值',
    labelSE: '标准误',
    labelDF: '自由度',
    hintN: 'n 必须是大于或等于 2 的整数。',
    hintStdDev: '标准差 northern 必须大于 0。',
    hintConf: '置信水平必须介于 0 和 100 之间。',
    labelChart: '区间可视化',
    chartDesc: '带阴影置信区间和误差幅度的数轴。',
    labelReport: '报告摘要',
    btnCopy: '复制摘要',
    btnCopied: '已复制！',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
    tabStats: '统计摘要',
    tabRaw: '原始数据',
    labelRaw: '粘贴数据',
    rawPlaceholder: '输入或粘贴由逗号、空格或换行符分隔的数值。例如：12.3, 15.1, 11.8',
    hintRaw: '请输入至少 2 个有效的数值。',
    labelDist: '分布',
    distAuto: '自动',
    noticeAutoRaw: '样本数据：应用 Student t 分布',
    noticeAutoLowN: 'n < 30：建议使用 Student t 分布',
    noticeAutoHighN: 'n ≥ 30：建议使用 Z 分布',
    calcCI: 'CI 区间',
    calcInverse: '最小 n',
    labelTargetME: '目标误差幅度 (E)',
    hintTargetME: 'E 必须是大于 0 的数字。',
    labelReqN: '最小样本量',
  },
};
