import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'normal-distribution-calculator';
const title = 'Normal Distribution Calculator Online';
const description =
  'Calculate normal distribution probabilities instantly: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) and inverse normal. Enter mean and standard deviation and visualize the Gaussian bell curve with the shaded area.';

const faqData = [
  {
    question: 'What is the normal distribution?',
    answer:
      "The normal distribution, or Gaussian bell curve, is the most important continuous probability distribution in statistics. It is fully defined by two parameters: the mean (μ), which sets the center, and the standard deviation (σ), which controls the spread. It is symmetric about the mean and its tails extend to infinity.",
  },
  {
    question: 'How is the probability calculated?',
    answer:
      "The probability is obtained by integrating the probability density function (PDF). Since there is no closed-form antiderivative, it is calculated using the error function (erf). This calculator uses the high-precision Abramowitz and Stegun approximation to produce accurate results.",
  },
  {
    question: 'What is a z-score?',
    answer:
      'A z-score (or standard score) indicates how many standard deviations a value is from the mean: z = (X - μ) / σ. It allows comparison of values from distributions with different scales. For example, z = 1 means X is exactly 1 standard deviation above the mean.',
  },
  {
    question: 'What is the inverse normal distribution used for?',
    answer:
      'The inverse normal answers the question: what value X corresponds to the p-th percentile? That is, given P(X ≤ x) = p, find x. It is widely used in quality control (tolerance limits), inferential statistics (critical values), and random variable simulation.',
  },
];

const howToData = [
  {
    name: 'Enter the parameters',
    text: 'Type the mean (μ) and standard deviation (σ > 0) of your normal distribution. The standard normal distribution (μ=0, σ=1) is used by default.',
  },
  {
    name: 'Choose the calculation type',
    text: 'Select a mode: P(X ≤ a) for left tail, P(X ≥ a) for right tail, P(a ≤ X ≤ b) for an interval, or Inverse to find the value X for a given percentile.',
  },
  {
    name: 'Read the result and chart',
    text: 'The probability is displayed instantly along with the z-score. The Gaussian bell curve shows the shaded area corresponding to the calculated probability.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    { name: 'Normal distribution - Wikipedia', url: 'https://en.wikipedia.org/wiki/Normal_distribution' },
    { name: 'Error function - Wikipedia', url: 'https://en.wikipedia.org/wiki/Error_function' },
    { name: 'Abramowitz and Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Standard score - Wikipedia', url: 'https://en.wikipedia.org/wiki/Standard_score' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Normal Distribution Calculator: Probabilities in Real Time' },
    {
      type: 'paragraph',
      html: 'The <strong>Normal Distribution Calculator</strong> computes any normal distribution probability instantly: left tail, right tail, central interval, and inverse. Simply enter the mean and standard deviation to get the result and visualize it on the Gaussian bell curve.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Calculation Modes', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Real-Time Results', icon: 'mdi:lightning-bolt' },
        { value: 'Free', label: 'No Registration', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Calculation Modes' },
    {
      type: 'table',
      headers: ['Mode', 'Description', 'Example Use'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Cumulative probability up to value a (left tail).', 'Percentage of students below a grade threshold.'],
        ['<strong>P(X ≥ a)</strong>', 'Right-tail probability from value a onwards.', 'Probability of exceeding a quality threshold.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probability within a central or asymmetric interval.', 'Proportion of parts within tolerance.'],
        ['<strong>Inverse</strong>', 'Find X such that P(X ≤ x) = p (the p-th percentile).', 'Critical value in a hypothesis test.'],
      ],
    },
    {
      type: 'tip',
      title: 'The 68 95 99.7 Empirical Rule',
      html: 'In any normal distribution: <strong>68%</strong> of data falls within ±1σ of the mean, <strong>95%</strong> within ±2σ, and <strong>99.7%</strong> within ±3σ. Verify this by calculating P(-1 ≤ z ≤ 1) with μ=0 and σ=1.',
    },
    { type: 'title', level: 2, text: 'Quick Reference Glossary' },
    {
      type: 'glossary',
      items: [
        { term: 'Mean (μ)', definition: 'Location parameter. Determines the center of the Gaussian bell curve.' },
        { term: 'Standard Deviation (σ)', definition: 'Scale parameter. Controls the width of the bell curve. Must be strictly positive.' },
        { term: 'Z-score', definition: 'Standardized value: z = (X - μ) / σ. Indicates how many standard deviations X is from the mean.' },
        { term: 'PDF', definition: 'Probability Density Function. The area under the PDF over an interval equals the probability of that interval.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Normal Distribution',
    labelMean: 'Mean',
    labelStdDev: 'Std Dev',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inverse',
    labelValue: 'Value X (a)',
    labelValueA: 'Lower bound (a)',
    labelValueB: 'Upper bound (b)',
    labelPercentile: 'Percentile p (0 < p < 1)',
    resultProbability: 'Probability',
    resultX: 'Value X',
    resultZScore: 'Z-score',
    resultZScoreA: 'z₁ (lower bound)',
    resultZScoreB: 'z₂ (upper bound)',
    hintStdDev: 'Standard deviation must be greater than 0.',
    hintPercentile: 'Percentile must be between 0 and 1 (exclusive).',
    labelChart: 'Gaussian Bell Curve',
    chartDesc: 'Shaded area corresponds to the calculated probability.',
    labelReport: 'Summary for your report',
    btnCopy: 'Copy Summary',
    btnCopied: 'Copied!',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
  },
};
