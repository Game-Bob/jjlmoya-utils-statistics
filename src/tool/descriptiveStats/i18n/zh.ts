import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'descriptive-statistics-calculator';
const title = '在线描述性统计计算器';
const description =
  '立即计算所有关键的描述性统计指标：均值、中位数、众数、标准差、方差、四分位数、偏度、峰度等。粘贴您的数据，即可实时获得结果。';

const faqData = [
  {
    question: '总体标准差和样本标准差有什么区别？',
    answer:
      '总体标准差除以 N（已知所有元素）。样本标准差除以 N-1（贝塞尔校正），用于纠正从子集估计时的偏差。此计算器使用样本标准差 (N-1)，这是研究和数据分析中最常见的选择。',
  },
  {
    question: '正偏度或负偏度意味着什么？',
    answer:
      '偏度衡量数据分布的不对称性。正偏度（右偏）意味着尾部向右延伸，大多数值聚集在左侧。负偏度（左偏）则相反。接近 0 的值表示分布大致对称。',
  },
  {
    question: '什么是峰度，它指示了什么？',
    answer:
      '峰度衡量尾部相对于正态分布的“重量”。此计算器返回超额峰度，其中 0 是基准（正态分布）。正值（尖峰态）表示尾部更重，峰值更陡。负值（平峰态）表示尾部更轻，峰值更平坦。',
  },
  {
    question: '我的数据应该采用什么格式？',
    answer:
      '粘贴由逗号、空格、分号或换行符分隔的数字。例如："1, 2, 3, 4" 或 "1 2 3 4" 或每行一个值。计算器会自动忽略非数字字符。',
  },
];

const howToData = [
  {
    name: '粘贴或输入您的数据',
    text: '在文本区域输入您的数字值，由逗号、空格或换行符分隔。您至少需要 2 个值。',
  },
  {
    name: '查看结果',
    text: '随着您的输入，15 项统计指标会立即更新。直方图显示了数据的分布形状。',
  },
  {
    name: '复制摘要',
    text: '使用“复制摘要”按钮复制主要统计指标的精简概览，以便在您的报告或分析中使用。',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    { name: '描述性统计 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%8F%8F%E8%BF%B0%E6%80%A7%E7%BB%9F%E8%AE%A1' },
    { name: '标准差 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%A0%87%E5%87%86%E5%B7%AE' },
    { name: '偏度 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%A6' },
    { name: '峰度 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E5%B3%B0%E5%BA%A6' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '描述性统计计算器：全方位指标一览无余' },
    {
      type: 'paragraph',
      html: '无论您是学生、研究人员还是数据分析师，<strong>描述性统计计算器</strong>都能为您提供任何数值数据集的即时、详尽的统计摘要。粘贴您的数据，即可同时获得 15 项计算出的统计指标——无需电子表格软件。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: '项统计指标', icon: 'mdi:sigma' },
        { value: '实时', label: '实时结果', icon: 'mdi:lightning-bolt' },
        { value: '免费', label: '无需注册', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: '计算出的统计指标' },
    {
      type: 'table',
      headers: ['统计指标', '描述'],
      rows: [
        ['<strong>计数 (N)</strong>', '数据集中的总数值个数。'],
        ['<strong>均值</strong>', '所有数值的算术平均值。'],
        ['<strong>中位数</strong>', '排序后中间位置的数值。对离群值具有稳健性。'],
        ['<strong>众数</strong>', '出现频率最高的数值。'],
        ['<strong>标准差</strong>', '样本标准差（除以 N-1）。'],
        ['<strong>方差</strong>', '样本标准差的平方。'],
        ['<strong>最小值 / 最大值</strong>', '数据集中的最小和最大值。'],
        ['<strong>全距 (极差)</strong>', '最大值与最小值之差。'],
        ['<strong>Q1 / Q3</strong>', '第一和第三四分位数（第 25 和第 75 百分位数）。'],
        ['<strong>IQR</strong>', '四分位距：Q3 减去 Q1。衡量中心分散程度。'],
        ['<strong>偏度</strong>', '分布相对于其均值的不对称性。'],
        ['<strong>峰度</strong>', '超额峰度：相对于正态分布的尾部重量。'],
      ],
    },
    {
      type: 'tip',
      title: '何时使用中位数而非均值',
      html: '如果您的数据存在显著的离群值（例如收入数据、房价），<strong>中位数</strong>比均值更具代表性，因为均值会被极端值拉走。',
    },
    { type: 'title', level: 2, text: '解读直方图' },
    {
      type: 'paragraph',
      html: '频数直方图显示了您的数值在等宽区间（bin）中的分布情况，区间宽度使用 <strong>Sturges 法则</strong> (k = 1 + log₂N) 自动计算。对称的钟形表示正态分布。偏斜的形状则证实了结果中显示的偏度值。',
    },
    { type: 'title', level: 2, text: '快速参考术语表' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: '四分位距（Interquartile Range）。数据中间 50% 的分布范围。用于识别离群值。' },
        { term: '偏度', definition: '衡量分布的不对称性。正偏 = 右侧尾部较长。负偏 = 左侧尾部较长。' },
        { term: '超额峰度', definition: '相对于正态分布的尾部重量。0 为正态；正值表示尾部更重。' },
        { term: '贝塞尔校正', definition: '在计算样本方差时除以 N-1 而非 N，以减少估计偏差。' },
      ],
    },
  ],
  ui: {
    labelTitle: '描述性统计',
    labelData: '输入您的数据',
    placeholderData: '例如：12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: '输入至少 2 个数值，由逗号、空格或换行符分隔。',
    hintError: '输入至少 2 个有效的数值以计算统计指标。',
    btnSample: '样本',
    btnPopulation: '总体',
    groupCentral: '集中趋势',
    groupDispersion: '离散程度',
    groupPosition: '位置',
    labelCount: '计数 (N)',
    labelSum: '总和',
    labelMean: '均值',
    labelMedian: '中位数',
    labelMode: '众数',
    labelStdDev: '标准差',
    labelVariance: '方差',
    labelCV: '变异系数',
    labelMin: '最小值',
    labelMax: '最大值',
    labelRange: '极差',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: '偏度',
    labelKurtosis: '峰度',
    labelBoxplot: '箱线图',
    labelChart: '频数分布',
    chartDesc: '使用 Sturges 法则自动计算区间宽度的直方图。',
    insightTitle: '自动解读',
    insightHomogeneous: '数据是同质的 (CV < 15%)。',
    insightModerate: '数据表现出中等波动 (CV 15-35%)。',
    insightHeterogeneous: '数据是异质的 (CV > 35%)。',
    insightSymmetric: '分布大致对称。',
    insightRightSkewed: '分布呈现正偏（右偏）。',
    insightLeftSkewed: '分布呈现负偏（左偏）。',
    insightNoOutliers: '未检测到离群值。',
    insightOutliers: '使用 IQR 方法检测到 {n} 个离群值。',
    insightIQR: '四分位距为 {iqr}（从 {q1} 到 {q3}）。',
    filterNotice: '忽略了 {n} 个非数字字符。',
    labelReport: '报告摘要',
    btnCopy: '复制摘要',
    btnCopied: '已复制！',
    noMode: '无众数',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
  },
};
