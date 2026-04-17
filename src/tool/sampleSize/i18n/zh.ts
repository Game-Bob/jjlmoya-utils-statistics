import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'yang-ben-liang-ji-suan-qi';
const title = '在线样本量计算器';
const description =
  '计算研究所需的准确人数。包括有限或无限总体选项、可调节的置信水平和误差幅度。';

const faqData = [
  {
    question: '什么是总体规模？',
    answer:
      '它是构成您想要研究或调查的群体的总人数。如果少于 100,000 人，通常被视为有限总体。如果您没有此数据或其规模无法控制，请选择无限总体选项。',
  },
  {
    question: '我应该选择哪个置信水平？',
    answer:
      '95% 是科学研究、论文和市场研究中最广泛使用的标准。只有当您的教授、导师或客户要求不同的精度水平（例如 99%）时，才更改此值。',
  },
  {
    question: '为什么该工具要求输入误差幅度？',
    answer:
      '没有样本是完美的。误差幅度定义了您愿意接受的不精确程度。最常见的是 5%。',
  },
  {
    question: '如果我对总体一无所知，应该使用哪个预期比例 (p)？',
    answer:
      '保留默认值：50%。在统计学中，这代表了“最坏情况”，因为它使方差 p(1-p) 最大化，从而确保您的样本量在任何情况下都不会太小。',
  },
];

const howToData = [
  {
    name: '定义您的总体',
    text: '指明您是否知道要研究的群体的总数（有限总体），还是更愿意对非常大/未知的群体进行保守计算（无限总体）。',
  },
  {
    name: '调整您的置信水平',
    text: '选择 95%（推荐），或在下拉菜单中输入自定义值。',
  },
  {
    name: '设置误差幅度',
    text: '指定误差容限。请记住，将其从 5% 降低到 2% 会使您需要进行的调查数量急剧成倍增加。',
  },
  {
    name: '复制结果',
    text: '查看中央面板，直接复制自动生成的理由文本，以添加到您的论文或报告中。',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    { name: '样本量确定 - 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%A0%B7%E6%9C%AC%E9%87%8F%E7%A1%AE%E5%AE%9A' },
    { name: '样本量计算 - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '在线样本量计算器：终极指南' },
    {
      type: 'paragraph',
      html: '确定合适的调查人数是任何研究、市场调研或学术项目中最关键的步骤之一。<strong>样本量计算器</strong>为学生、研究人员和营销专业人士提供了一个精确、快速且易于使用的工具，用于计算获得具有统计学意义的结果所需的准确个人数量。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: '标准置信度', icon: 'mdi:check-decagram' },
        { value: '5%', label: '误差幅度', icon: 'mdi:target' },
        { value: '快速', label: '实时计算', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: '为什么计算样本量至关重要？' },
    {
      type: 'paragraph',
      html: '在统计学中，研究整个总体几乎是不可能的。解决方案是选择一个具有代表性的子群，即样本。如果样本太小，结果会有偏差；如果太大，则会不必要地浪费时间和金钱。',
    },
    { type: 'title', level: 2, text: '两种计算模式：有限和无限总体' },
    {
      type: 'paragraph',
      html: '我们的计算器通过提供两个不同的计算模式来适应您的情况。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '有限总体（已知）',
          description: '已知个体的确切总数。',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            '需要 N 值',
            '应用修正因子',
            '减小最终样本量',
          ],
        },
        {
          title: '无限总体（未知）',
          description: '总数未知、无法控制或超过 100,000。',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            '不需要知道 N',
            '标准经典公式',
            '最保守且最安全的场景',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: '了解控制面板参数' },
    {
      type: 'table',
      headers: ['参数', '描述', '标准建议'],
      rows: [
        ['<strong>置信水平 (Z)</strong>', '样本代表总体的数学确定性。', '使用 95%。'],
        ['<strong>误差幅度 (e)</strong>', '与现实相比容忍的偏差百分比。', '使用 5%。'],
        ['<strong>预期比例 (p)</strong>', '所研究事件发生的概率。', '使用 50%（使方差最大化）。'],
      ],
    },
    {
      type: 'tip',
      title: '警惕误差幅度',
      html: '将误差幅度从 5% 降低到 2% 需要指数级增加样本量。在决定过于严格的幅度之前，请查看计算器中的灵敏度图表。',
    },
    { type: 'title', level: 2, text: '计算背后的数学公式' },
    {
      type: 'list',
      items: [
        '<strong>无限总体：</strong> n = (Z² × p × q) / e²',
        '<strong>Z：</strong> 从置信水平导出的临界值。',
        '<strong>p：</strong> 预期比例（q 等于 1 - p）。',
        '<strong>e:</strong> 容忍的误差幅度。',
      ],
    },
    { type: 'title', level: 2, text: '研究人员速查字典' },
    {
      type: 'glossary',
      items: [
        { term: '总体 (N)', definition: '具有共同特征的、作为研究对象的所有元素或个体的总集。' },
        { term: '样本 (n)', definition: '从总总体中选择的具有代表性的子集。' },
        { term: '最大方差', definition: '当 p=0.5 (50%) 时发生，确保计算出的样本对最极端且多样的情境都是可行的。' },
      ],
    },
  ],
  ui: {
    labelParams: '参数',
    labelPopType: '总体类型',
    btnFinite: '有限（已知）',
    btnInfinite: '无限（未知）',
    labelPopSize: '总体规模',
    labelConfLevel: '置信水平 (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: '自定义',
    labelConfCustom: '自定义置信度 (%)',
    labelErrorMargin: '误差幅度 (%)',
    labelProportion: '预期比例',
    hintProportion: '50% 是“最坏情况”，能为您提供最大且最安全的样本。',
    hintProportionError: '0% 或 100% 的比例将使样本失效。我们建议使用 5% 到 95% 之间的值。',
    labelSampleSize: '建议规模',
    labelSampleSub: '所需调查人数',
    labelZValue: '临界值',
    labelReport: '报告文本',
    defaultJustification: '对于 10,000 人的总体，如果置信水平为 95% 且误差幅度为 5%，则代表性样本量为 370 人。',
    btnCopy: '复制文本',
    btnCopied: '已复制！',
    labelChart: '灵敏度：规模与误差幅度',
    chartDesc: '观察尝试降低误差幅度时，样本量是如何暴增的。',
    justForFinite: '对于一个',
    justPersons: '人的总体',
    justForInfinite: '对于无限总体',
    justConfidence: '，置信水平为',
    justError: '% 且误差幅度为',
    justResultIs: '%，代表性样本量为',
    justUnit: '人。',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
  },
};
