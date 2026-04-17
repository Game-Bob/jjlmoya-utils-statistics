import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-correlation-calculator';
const title = '在线皮尔逊相关系数计算器';
const description =
  '通过数据对计算皮尔逊 r 系数、决定系数 r² 和线性回归线。100% 私密且本地化的工具。';

const faqData = [
  {
    question: '什么是皮尔逊相关系数？',
    answer:
      '它是一种统计度量，用于量化两个定量变量之间线性关系的强度和方向。其值范围从 -1（完全负相关）到 1（完全正相关），0 表示没有线性关系。',
  },
  {
    question: '我可以直接从 Excel 粘贴数据吗？',
    answer:
      '是的，我们的计算器经过优化，可以解释从 Excel、Google Sheets 或 CSV 文件复制粘贴的数据。它会自动检测列并清理非数字字符，如货币符号或百分比。',
  },
  {
    question: '如果我的数据看起来相关，为什么 r 值却很低？',
    answer:
      '皮尔逊系数只能检测线性关系。如果您的数据具有曲线关系（如抛物线或对数关系），皮尔逊系数可能会非常低，即使变量之间存在明显的联系。',
  },
  {
    question: '在此计算器中 r² 代表什么？',
    answer:
      '它是决定系数。它代表因变量中可由自变量预测的方差比例。例如，r² 为 0.85 表示 85% 的变异性可由线性模型解释。',
  },
];

const howToData = [
  {
    name: '数据准备',
    text: '准备好您的数值对（X 和 Y）。它们可以在 Excel 文件中，也可以简单的只是文本列表。',
  },
  {
    name: '数据输入',
    text: '将数据粘贴到计算器的文本区域。确保每对数值都在新的一行。',
  },
  {
    name: '配置',
    text: '选择数据中使用的小数点分隔符（点或逗号）以避免计算错误。',
  },
  {
    name: '结果分析',
    text: '即时查看 r 值及其解释，并观察散点图以确认趋势。',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    { name: '皮尔逊积矩相关系数 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E7%9A%AE%E5%B0%94%E9%80%8A%E7%A7%AF%E7%9F%A9%E7%9B%B8%E5%85%B3%E7%B3%BB%E6%95%B0' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '在线皮尔逊相关系数计算器：完整指南' },
    {
      type: 'paragraph',
      html: '<strong>皮尔逊相关系数</strong> (r) 是衡量两个数值变量之间线性相关程度的标准统计工具。无论是学术论文、市场分析还是科学研究，理解数据的相关强度都至关重要。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: '完全相关', icon: 'mdi:trending-up' },
        { value: '0', label: '独立性', icon: 'mdi:graph-outline' },
        { value: '本地', label: '100% 私密性', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: '皮尔逊 r 系数有什么用途？' },
    {
      type: 'paragraph',
      html: '皮尔逊指数揭示了是否存在某种趋势：当一个变量增加时，另一个变量是随之增加（<strong>正相关</strong>）还是减少（<strong>负相关</strong>）？此工具对于在 Excel、SPSS 或 Python 中进行数据分析必不可少。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '皮尔逊相关',
          description: '适用于具有典型线性关系的定量变量。',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['数值数据', '线性关系', '符合正态分布'],
        },
        {
          title: '斯皮尔曼相关',
          description: '由于更适用于顺序数据或单调非线性关系。',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['顺序数据（排名）', '单调关系', '抗离群值'],
        },
      ],
    },
    { type: 'title', level: 2, text: '结果解读：数值表' },
    {
      type: 'table',
      headers: ['值范围 (r)', '相关强度', '实际意义'],
      rows: [
        ['<strong>0.90 至 1.00</strong>', '极强', '近乎完美的相关性。非常适合预测。'],
        ['<strong>0.70 至 0.89</strong>', '强', '变量之间存在明显的线性依赖关系。'],
        ['<strong>0.40 至 0.69</strong>', '中等', '有明显的趋势，但散布也较显著。'],
        ['<strong>0.20 至 0.39</strong>', '弱', '相关性较差；其他因素影响更大。'],
        ['<strong>0.00 至 0.19</strong>', '无/可忽略', '不存在显著的线性关系。'],
      ],
    },
    { type: 'title', level: 2, text: '此计算器的优点与局限性' },
    {
      type: 'list',
      items: [
        '<strong>从 Excel/CSV 粘贴：</strong> 无需逐个输入数据。',
        '<strong>即时散点图</strong> 带有回归线。',
        '<strong>100% 私密：</strong> 您的数据绝不会离开您的电脑。',
      ],
    },
    {
      type: 'list',
      items: [
        '仅检测线性关系（不检测曲线关系）。',
        '对极端值（离群值）高度敏感。',
        '需要至少 2 对有效数据。',
      ],
    },
    {
      type: 'tip',
      title: '专家提示',
      html: '在盲目相信 r 值之前，请务必查看 <strong>散点图</strong>。有时一个很高的系数可能由单个离群值引起，或者一个很低的系数可能隐藏了皮尔逊无法检测到的非常强的曲线关系。',
    },
    { type: 'title', level: 2, text: '统计术语表' },
    {
      type: 'glossary',
      items: [
        { term: '协方差', definition: '衡量两个随机变量共同变化的程度。' },
        { term: '线性回归', definition: '用于逼近变量之间依赖关系的数学模型。' },
        { term: 'r² 系数', definition: '可由自变量预测的方差部分所占的比例。' },
        { term: '散点图', definition: '在平面上显示数据对分布的点图。' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV 数据',
    btnLoadExample: '加载示例',
    btnClear: '清空数据',
    placeholder: '粘贴数据 (X, Y) 或拖入 CSV...',
    labelDecimalSep: '小数分隔符',
    optPoint: '点 (.)',
    optComma: '逗号 (,)',
    privacyBadge: '本地私密执行',
    labelR: '皮尔逊系数 (r)',
    labelR2: '决定系数 (r²)',
    labelN: '数据对 (n)',
    labelSlope: '斜率 (m)',
    labelMeanXY: '平均值 X | Y',
    labelWaiting: '等待数据输入...',
    interpPerfectPos: '完美正相关',
    interpPerfectNeg: '完美负相关',
    interpStrong: '强相关',
    interpModerate: '中等相关',
    interpWeak: '弱相关/无相关',
    errorMsg: '请输入至少 2 对数据以生成图表',
    btnCopyTitle: '复制结果',
    btnDownloadTitle: '下载图表',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
  },
};
