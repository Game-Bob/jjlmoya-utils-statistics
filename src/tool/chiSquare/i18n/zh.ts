import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-square-independence-calculator';
const title = '在线卡方独立性检验计算器';
const description =
  '确定两个分类变量之间是否存在统计学关系。填写观测频数矩阵并立即计算 P 值。';

const faqData = [
  {
    question: '什么是卡方独立性检验？',
    answer:
      '这是一种统计检验，用于评估两个分类变量或名义变量之间观察到的关联是由偶然因素导致的概率。例如：一个人的最爱甜点是否与其居住地区有关。',
  },
  {
    question: '克莱姆 V (Cramér\'s V) 系数有什么用？',
    answer:
      '卡方值告诉您是否存在“某种”关系，而克莱姆 V 则告诉您这种关系有多“强”。它的取值范围从 0（完全独立）到 1（绝对数学相关）。从社会学角度来看，超过 0.5 的值被认为是非常强的。',
  },
  {
    question: '如果我的期望频数非常低会怎样？',
    answer:
      '如果超过 20% 的单元格期望频数小于 5，卡方数学近似值的可靠性就会降低。如果存在风险，我们的工具会发出视觉警告。在这种情况下，建议合并有疑问的类别。',
  },
  {
    question: '我可以将其用于定性调查吗？',
    answer:
      '绝对可以。它是社会学和市场研究的主要工具，在这些领域中，您很少处理小数，而是处理互斥的类别（如：未婚/已婚、是/否、南/北）。',
  },
];

const howToData = [
  {
    name: '定义矩阵',
    text: '首先，根据变量 A（行）和变量 B（列）具有的选项数量，选择列联表的大小。',
  },
  {
    name: '输入观测数据',
    text: '通过在第一个表中填写真实数据的确切计数来替换基础数字。',
  },
  {
    name: '查看残差',
    text: '观察我们表中哪些单元格亮起（亮绿色或红色）。导致变量不独立的异常情况就存在于此。',
  },
  {
    name: '复制结论',
    text: '将带有 P 值数学依据的自动生成文本粘贴到您的论文或项目报告中。',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与引文',
  bibliography: [
    {
      name: '卡方检验 - 维基百科',
      url: 'https://zh.wikipedia.org/wiki/%E5%8D%A1%E6%96%B9%E6%A3%80%E9%AA%8C',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: '卡方独立性检验计算器',
    },
    {
      type: 'paragraph',
      html: '虽然像 A/B 测试或描述性统计这样的经典工具在处理连续数字（均值、收入、重量）方面表现出色，但现实世界充满了分类数据（颜色、品牌、满意度水平）。<strong>卡方独立性计算器</strong>是用于分析确定两个定性变量是在统计上存在联系，还是彼此完全独立变化的“王牌”检验。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '表格', label: '最大 3×3 动态大小', icon: 'mdi:table' },
        { value: '克莱姆 V', label: '关联强度', icon: 'mdi:link' },
        { value: '热力图', label: '残差与偏差', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '卡方统计量 (χ²) 究竟是用来做什么的？',
    },
    {
      type: 'paragraph',
      html: '卡方独立性检验将<em>观测频数</em>（您测量和收集的真实数据）与<em>期望频数</em>（如果变量之间根本没有相互作用，我们期望在每个单元格中看到的频数）进行比较。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '相关变量（存在关系）',
          description: '一个类别的比例根据另一个类别的不同而剧烈变化。',
          icon: 'mdi:link',
          highlight: true,
          points: [
            '示例：移动端访问者更喜欢设计 A，而 PC 端用户更喜欢设计 B。',
            '卡方值 (χ²) 激增，P 值下降。',
            '克莱姆 V 指示强度（如：强 > 0.5）。',
          ],
        },
        {
          title: '独立变量（偶然）',
          description: '各级比例保持坚如磐石的稳定。',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            '示例：客户的眼睛颜色不影响他们购买哪个品牌的汽车。',
            '卡方值极小，且 P 值大于 0.05。',
            '无法拒绝原假设。',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '克莱姆 V：理解联系的强度',
    },
    {
      type: 'paragraph',
      html: '获得极低的 P 值并不意味着变量之间存在“强烈”联系；它只表明偶然因素不太可能是原因（也许是因为您有数万个真实案例）。为了衡量“效应量”，我们自动纳入了<strong>克莱姆 V (Cramér\'s V) 系数</strong>。',
    },
    {
      type: 'table',
      headers: ['计算器（V 值）', '分析评级', '解释'],
      rows: [
        [
          '<strong>0.00 到 0.10</strong>',
          '无关联 / 琐碎关联',
          '理论上相关，但很不明显，对商业目的来说毫无用处。',
        ],
        [
          '<strong>0.11 到 0.30</strong>',
          '弱关联',
          '存在轻微联系，但许多其他外部因素权重更大。',
        ],
        [
          '<strong>0.31 到 0.50</strong>',
          '中度关联',
          '两种特征明显相互影响。',
        ],
        [
          '<strong>0.50 以上</strong>',
          '强关联',
          '非常清晰的联系。了解变量 A 可以非常好地预测变量 B。',
        ],
      ],
    },
    {
      type: 'tip',
      title: '数学可行性条件',
      html: '注意空单元格！为了使 Pearson 卡方近似值在钟形曲线下保持稳健，方法论上要求至少 80% 的<em>期望频数</em>（而非观测频数）大于 5，且没有单元格低于 1。如果未满足此条件，我们的警告指示器将触发，建议您合并类别。',
    },
    {
      type: 'title',
      level: 2,
      text: '内置残差热力图',
    },
    {
      type: 'paragraph',
      html: '为了增强用户体验并协助得出报告结论，我们的矩阵会根据单元格的标准化残差（偏差）自动对其背景着色：<br/><br/><strong>绿色色调：</strong>该单元格的<em>成功次数远多于</em>纯数学上的预期。<br/><strong>红色色调：</strong>与预期标准相比，该单元格危险地“空”。',
    },
    {
      type: 'title',
      level: 2,
      text: '卡方术语表',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '观测频数',
          definition: '您在实验室或调查中实际统计的确切频数。',
        },
        {
          term: '期望频数',
          definition: '假设变量相互独立，根据所在行和列的总计计算出的理论频数。',
        },
        {
          term: '自由度 (df)',
          definition: '独立数据的几何数量。计算方法为（行数-1）乘以（列数-1）。',
        },
        {
          term: '标准化残差',
          definition: '观测值与期望值之间经过标准化的差异。衡量哪个单元格对发现的贡献最大。',
        },
      ],
    },
  ],
  ui: {
    labelConfig: '设置',
    labelTableSize: '表格大小（行 × 列）',
    labelAlpha: '显著性水平 (α)',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    infoText:
      '使用纯本地推断自动计算理论频数、χ² 值和关联强度克莱姆 V 系数。',
    labelObserved: '观测频数（输入）',
    btnShowExpected: '显示期望频数 (H₀)',
    expectedDesc:
      '这些是如果两个变量之间完全没有关系（随机分布），每个单元格中应有的数值。',
    alertTitle: '统计警告（单元格 < 5）',
    alertBody:
      '存在非常低的期望频数。χ² 近似值可能不可靠。建议合并类别或使用 Fisher 精确检验。',
    labelPValue: 'P 值 (p)',
    sigDescInitial: '存在显著关系',
    labelGlobalStats: '全局统计',
    labelChiSquareStat: '卡方 (χ²)',
    labelDegrees: '自由度 (df)',
    labelCramer: '关联强度 (克莱姆 V)',
    labelVisualization: '残差可视化（观测 vs 期望）',
    heatmapInfo: '表格输入单元格根据残差变化着色。',
    labelReport: '报告文本',
    defaultJustification:
      '分析了总共 N 个观测值后，我们发现 χ²(df) = X。P 值为 P，结论是存在显著的相关性。',
    btnCopy: '复制文本',
    rowLabel: '行',
    colLabel: '列',
    totalLabel: '总计',
    cramerNull: '无',
    cramerWeak: '弱',
    cramerModerate: '中度',
    cramerStrong: '强',
    sigText: '存在显著关联（相关）。',
    noSigText: '无相关证据（独立）。',
    chartLegendObs: '行观测值',
    chartLegendExp: '期望值',
    btnCopied: '已复制！',
    justificationIntro: '在分析了',
    justificationTableOf: '个案例的',
    justificationObtained: ' 表格后，我们获得了',
    justificationPAt: '。在显著性水平 α=',
    justificationConcluded: ' 下进行评估，经验性地得出结论：',
    justificationSig: '变量之间存在强关联（克莱姆 V：',
    justificationNoSig: '不存在统计学上的显著关联',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与引文',
  },
};
