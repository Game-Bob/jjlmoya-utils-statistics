import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-correlation-calculator';
const title = 'Pearson Correlation Calculator Online';
const description =
  "Calculate Pearson's r coefficient, the coefficient of determination r², and the linear regression line from data pairs. 100% private and local tool.";

const faqData = [
  {
    question: "What is Pearson's correlation coefficient?",
    answer:
      "It is a statistical measure that quantifies the strength and direction of the linear relationship between two quantitative variables. Its value ranges from -1 (perfect negative correlation) to 1 (perfect positive correlation), with 0 indicating no linear relationship.",
  },
  {
    question: 'Can I paste data directly from Excel?',
    answer:
      'Yes, our calculator is optimized to interpret data copied and pasted from Excel, Google Sheets, or CSV files. It automatically detects columns and cleans non-numeric characters such as currency symbols or percentages.',
  },
  {
    question: 'Why is the r value low if my data seems related?',
    answer:
      "Pearson's coefficient only detects linear relationships. If your data has a curved relationship (such as a parabola or logarithmic), the Pearson coefficient may be very low even though a clear connection between the variables exists.",
  },
  {
    question: 'What does r² mean in this calculator?',
    answer:
      'It is the coefficient of determination. It represents the proportion of variance in the dependent variable that is predictable from the independent variable. For example, an r² of 0.85 indicates that 85% of the variability is explained by the linear model.',
  },
];

const howToData = [
  {
    name: 'Data Preparation',
    text: 'Have your value pairs (X and Y) ready. They can be in an Excel file or simply in a text list.',
  },
  {
    name: 'Data Entry',
    text: 'Paste your data in the calculator text area. Make sure each pair of values is on a new line.',
  },
  {
    name: 'Configuration',
    text: 'Select the decimal separator (period or comma) used in your data to avoid calculation errors.',
  },
  {
    name: 'Results Analysis',
    text: 'Instantly review the r value, its interpretation, and observe the scatter diagram to confirm the trend.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    { name: "Pearson's correlation coefficient - Wikipedia", url: 'https://en.wikipedia.org/wiki/Pearson_correlation_coefficient' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Pearson Correlation Calculator Online: Complete Guide' },
    {
      type: 'paragraph',
      html: "<strong>Pearson's correlation coefficient</strong> (r) is the standard statistical tool for measuring how two numerical variables relate to each other linearly. Whether for academic work, market analysis, or scientific research, understanding the strength of your data is vital.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Total Relationship', icon: 'mdi:trending-up' },
        { value: '0', label: 'Independence', icon: 'mdi:graph-outline' },
        { value: 'Local', label: '100% Privacy', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: "What is Pearson's r coefficient used for?" },
    {
      type: 'paragraph',
      html: "Pearson's index reveals whether a trend exists: when one variable increases, does the other also increase (<strong>positive correlation</strong>) or decrease (<strong>negative correlation</strong>)? This tool is essential for data analysis in Excel, SPSS, or Python.",
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pearson Correlation',
          description: 'Ideal for quantitative variables with a clear linear relationship.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Numerical Data', 'Linear Relationship', 'Requires Normality'],
        },
        {
          title: 'Spearman Correlation',
          description: 'Better for ordinal data or monotone non-linear relationships.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Ordinal Data (Ranks)', 'Monotone Relationship', 'Resistant to Outliers'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpreting Results: Value Table' },
    {
      type: 'table',
      headers: ['Value Range (r)', 'Relationship Strength', 'Practical Meaning'],
      rows: [
        ['<strong>0.90 to 1.00</strong>', 'Very Strong', 'Near-perfect relationship. Ideal for predictions.'],
        ['<strong>0.70 to 0.89</strong>', 'Strong', 'Clear linear dependence between variables exists.'],
        ['<strong>0.40 to 0.69</strong>', 'Moderate', 'A visible trend, but with notable scatter.'],
        ['<strong>0.20 to 0.39</strong>', 'Weak', 'Poor relationship; other factors have more influence.'],
        ['<strong>0.00 to 0.19</strong>', 'Null/Negligible', 'No significant linear relationship exists.'],
      ],
    },
    { type: 'title', level: 2, text: 'Advantages and limitations of this calculator' },
    {
      type: 'list',
      items: [
        '<strong>Paste from Excel/CSV:</strong> No need to enter data one by one.',
        '<strong>Instant Scatter Diagram</strong> with regression line.',
        '<strong>100% Privacy:</strong> Your data never leaves your PC.',
      ],
    },
    {
      type: 'list',
      items: [
        'Only detects linear relationships (not curved ones).',
        'High sensitivity to extreme values (outliers).',
        'Requires at least 2 valid data pairs.',
      ],
    },
    {
      type: 'tip',
      title: 'Expert Tip',
      html: 'Before blindly trusting the r value, always look at the <strong>Scatter Diagram</strong>. Sometimes a high coefficient can be caused by a single outlier, or a low coefficient can hide a very strong curved relationship that Pearson cannot detect.',
    },
    { type: 'title', level: 2, text: 'Statistical Glossary' },
    {
      type: 'glossary',
      items: [
        { term: 'Covariance', definition: 'Measure of how much two random variables change together.' },
        { term: 'Linear Regression', definition: 'Mathematical model used to approximate the dependency relationship between variables.' },
        { term: 'Coefficient r²', definition: 'Proportion of variance that is predictable from the independent variable.' },
        { term: 'Scatter Diagram', definition: 'Point chart showing the distribution of data pairs on a plane.' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV Data',
    btnLoadExample: 'Load example',
    btnClear: 'Clear data',
    placeholder: 'Paste your data (X, Y) or drag a CSV...',
    labelDecimalSep: 'Decimal Sep.',
    optPoint: 'Period (.)',
    optComma: 'Comma (,)',
    privacyBadge: 'Private local execution',
    labelR: "Pearson's Coefficient (r)",
    labelR2: 'Determination (r²)',
    labelN: 'Pairs (n)',
    labelSlope: 'Slope (m)',
    labelMeanXY: 'Mean X | Y',
    labelWaiting: 'Waiting for data...',
    interpPerfectPos: 'Perfect positive correlation',
    interpPerfectNeg: 'Perfect negative correlation',
    interpStrong: 'Strong correlation',
    interpModerate: 'Moderate correlation',
    interpWeak: 'Weak/null correlation',
    errorMsg: 'Enter at least 2 data pairs to chart',
    btnCopyTitle: 'Copy results',
    btnDownloadTitle: 'Download chart',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
  },
};
