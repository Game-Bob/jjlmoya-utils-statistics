import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'descriptive-statistics-calculator';
const title = 'Descriptive Statistics Calculator Online';
const description =
  'Calculate all key descriptive statistics instantly: mean, median, mode, standard deviation, variance, quartiles, skewness, kurtosis and more. Paste your data and get results in real time.';

const faqData = [
  {
    question: 'What is the difference between population and sample standard deviation?',
    answer:
      'Population standard deviation divides by N (all elements are known). Sample standard deviation divides by N-1 (Bessel\'s correction) to correct the bias when estimating from a subset. This calculator uses sample standard deviation (N-1), which is the most common choice in research and data analysis.',
  },
  {
    question: 'What does a positive or negative skewness mean?',
    answer:
      'Skewness measures the asymmetry of your data distribution. Positive skewness (right skew) means the tail extends to the right and most values cluster on the left. Negative skewness (left skew) is the opposite. A value near 0 indicates a roughly symmetric distribution.',
  },
  {
    question: 'What is kurtosis and what does it indicate?',
    answer:
      'Kurtosis measures the "heaviness" of the tails relative to a normal distribution. This calculator returns excess kurtosis, where 0 is the baseline (normal distribution). Positive values (leptokurtic) indicate heavier tails and sharper peaks. Negative values (platykurtic) indicate lighter tails and flatter peaks.',
  },
  {
    question: 'What format should my data be in?',
    answer:
      'Paste your numbers separated by commas, spaces, semicolons, or line breaks. Examples: "1, 2, 3, 4" or "1 2 3 4" or one value per line. The calculator ignores non-numeric characters automatically.',
  },
];

const howToData = [
  {
    name: 'Paste or Type Your Data',
    text: 'Enter your numeric values in the text area, separated by commas, spaces, or line breaks. You need at least 2 values.',
  },
  {
    name: 'Read the Results',
    text: 'The 15 statistics update instantly as you type. The histogram shows the distribution shape of your data.',
  },
  {
    name: 'Copy the Summary',
    text: 'Use the Copy Text button to copy a compact summary of the key statistics for use in your report or analysis.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    { name: 'Descriptive statistics - Wikipedia', url: 'https://en.wikipedia.org/wiki/Descriptive_statistics' },
    { name: 'Standard deviation - Wikipedia', url: 'https://en.wikipedia.org/wiki/Standard_deviation' },
    { name: 'Skewness - Wikipedia', url: 'https://en.wikipedia.org/wiki/Skewness' },
    { name: 'Kurtosis - Wikipedia', url: 'https://en.wikipedia.org/wiki/Kurtosis' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Descriptive Statistics Calculator: All Key Metrics in One Place' },
    {
      type: 'paragraph',
      html: 'Whether you are a student, researcher, or data analyst, the <strong>Descriptive Statistics Calculator</strong> gives you an instant, complete statistical summary of any numerical dataset. Paste your data and get 15 statistics calculated simultaneously — no spreadsheet software required.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Statistics Calculated', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Real-Time Results', icon: 'mdi:lightning-bolt' },
        { value: 'Free', label: 'No Registration', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Statistics Calculated' },
    {
      type: 'table',
      headers: ['Statistic', 'Description'],
      rows: [
        ['<strong>Count (N)</strong>', 'Total number of values in the dataset.'],
        ['<strong>Mean</strong>', 'The arithmetic average of all values.'],
        ['<strong>Median</strong>', 'The middle value when data is sorted. Robust to outliers.'],
        ['<strong>Mode</strong>', 'The most frequently occurring value(s).'],
        ['<strong>Std Dev</strong>', 'Sample standard deviation (divides by N-1).'],
        ['<strong>Variance</strong>', 'Square of the sample standard deviation.'],
        ['<strong>Min / Max</strong>', 'Smallest and largest values in the dataset.'],
        ['<strong>Range</strong>', 'Difference between the maximum and minimum values.'],
        ['<strong>Q1 / Q3</strong>', 'First and third quartiles (25th and 75th percentiles).'],
        ['<strong>IQR</strong>', 'Interquartile range: Q3 minus Q1. Measures central spread.'],
        ['<strong>Skewness</strong>', 'Asymmetry of the distribution relative to its mean.'],
        ['<strong>Kurtosis</strong>', 'Excess kurtosis: tail weight relative to a normal distribution.'],
      ],
    },
    {
      type: 'tip',
      title: 'When to Use Median Instead of Mean',
      html: 'If your data has significant outliers (e.g., income data, housing prices), the <strong>median</strong> is a more representative measure of central tendency than the mean, which is pulled toward extreme values.',
    },
    { type: 'title', level: 2, text: 'Interpreting the Histogram' },
    {
      type: 'paragraph',
      html: 'The frequency histogram shows how your values are distributed across equal-width bins, calculated automatically using <strong>Sturges\' rule</strong> (k = 1 + log₂N). A symmetric bell shape suggests a normal distribution. Skewed shapes confirm the skewness value shown in the results.',
    },
    { type: 'title', level: 2, text: 'Quick Reference Glossary' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Interquartile Range. The spread of the middle 50% of your data. Used to identify outliers.' },
        { term: 'Skewness', definition: 'Measures distribution asymmetry. Positive = right tail longer. Negative = left tail longer.' },
        { term: 'Excess Kurtosis', definition: 'Tail heaviness compared to a normal distribution. 0 is normal; positive means heavier tails.' },
        { term: 'Bessel\'s Correction', definition: 'Dividing by N-1 instead of N when computing sample variance to reduce bias in estimation.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Descriptive Statistics',
    labelData: 'Enter your data',
    placeholderData: 'e.g. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Enter at least 2 numeric values separated by commas, spaces or line breaks.',
    hintError: 'Enter at least 2 valid numeric values to calculate statistics.',
    btnSample: 'Sample',
    btnPopulation: 'Population',
    groupCentral: 'Central Tendency',
    groupDispersion: 'Dispersion',
    groupPosition: 'Position',
    labelCount: 'Count (N)',
    labelSum: 'Sum',
    labelMean: 'Mean',
    labelMedian: 'Median',
    labelMode: 'Mode',
    labelStdDev: 'Std Dev',
    labelVariance: 'Variance',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Max',
    labelRange: 'Range',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Skewness',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Box Plot',
    labelChart: 'Frequency Distribution',
    chartDesc: 'Histogram with automatic bin width using Sturges\' rule.',
    insightTitle: 'Automatic Interpretation',
    insightHomogeneous: 'Data is homogeneous (CV < 15%).',
    insightModerate: 'Data shows moderate variability (CV 15-35%).',
    insightHeterogeneous: 'Data is heterogeneous (CV > 35%).',
    insightSymmetric: 'Distribution is approximately symmetric.',
    insightRightSkewed: 'Distribution shows positive skewness (right tail).',
    insightLeftSkewed: 'Distribution shows negative skewness (left tail).',
    insightNoOutliers: 'No outliers detected.',
    insightOutliers: '{n} outlier(s) detected using the IQR method.',
    insightIQR: 'Interquartile range is {iqr} (from {q1} to {q3}).',
    filterNotice: '{n} non-numeric character(s) ignored.',
    labelReport: 'Summary for your report',
    btnCopy: 'Copy Summary',
    btnCopied: 'Copied!',
    noMode: 'No mode',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
  },
};
