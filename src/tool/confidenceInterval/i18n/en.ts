import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'confidence-interval-calculator';
const title = 'Confidence Interval Calculator Online';
const description =
  'Calculate confidence intervals for the population mean using Z or Student t distributions. Enter the sample mean, standard deviation, sample size, and confidence level to get the interval, margin of error, and critical value instantly.';

const faqData = [
  {
    question: 'What is a confidence interval?',
    answer:
      'A confidence interval (CI) is a range of values computed from sample data that, with a given probability (confidence level), contains the true population parameter. For example, a 95% CI for the mean means that if you repeated the sampling many times, 95% of the computed intervals would contain the true population mean.',
  },
  {
    question: 'When should I use Z instead of t?',
    answer:
      'Use Z when the population standard deviation (σ) is known, or when n is large (>30). Use Student t when only the sample standard deviation (s) is available and n is small. For n > 30, both distributions are practically equivalent, but t remains more conservative and technically correct when σ is unknown.',
  },
  {
    question: 'How does sample size affect the width of the interval?',
    answer:
      'The width of the CI is proportional to 1/√n: quadrupling the sample size halves the margin of error. This explains why large samples yield more precise estimates and why sample size planning is critical in statistical study design.',
  },
  {
    question: 'What is the margin of error?',
    answer:
      'The margin of error (ME) is half the width of the CI: ME = critical_value × SE, where SE = σ/√n is the standard error. It indicates the maximum expected difference between the sample estimate and the true population value at the specified confidence level.',
  },
];

const howToData = [
  {
    name: 'Enter the sample parameters',
    text: 'Type the sample mean (x̄), standard deviation (σ or s > 0), and sample size (n ≥ 2).',
  },
  {
    name: 'Choose the confidence level',
    text: 'Select 90%, 95%, or 99% using the quick-access buttons, or type any value between 0 and 100.',
  },
  {
    name: 'Select the distribution and read the result',
    text: 'Choose Z if the population standard deviation is known, or t for a sample. The interval, margin of error, and critical value are computed instantly.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    { name: 'Confidence interval Wikipedia', url: 'https://en.wikipedia.org/wiki/Confidence_interval' },
    { name: 'Student t distribution Wikipedia', url: 'https://en.wikipedia.org/wiki/Student%27s_t-distribution' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Standard error Wikipedia', url: 'https://en.wikipedia.org/wiki/Standard_error' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Confidence Interval Calculator: Results in Real Time' },
    {
      type: 'paragraph',
      html: 'The <strong>Confidence Interval Calculator</strong> instantly computes the interval, margin of error, critical value, and standard error. It supports Z distribution (known population sigma) and Student t (sample sigma), with any confidence level between 0 and 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z and t Distributions', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Real-Time Results', icon: 'mdi:lightning-bolt' },
        { value: 'Free', label: 'No Registration', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z Distribution vs Student t' },
    {
      type: 'table',
      headers: ['Criterion', 'Z Distribution', 'Student t'],
      rows: [
        ['When to use', 'Known population σ or n > 30', 'Sample s, any n'],
        ['Critical value (95%)', 'z* = 1.960', 't* depends on df = n−1'],
        ['Degrees of freedom', 'Not applicable', 'df = n − 1'],
        ['For large n', 'Narrower CI', 'Converges to Z'],
      ],
    },
    {
      type: 'tip',
      title: 'How to Correctly Interpret a Confidence Interval',
      html: 'A <strong>95% confidence interval</strong> does not mean there is a 95% probability that the true mean lies in that specific interval. It means the <strong>procedure</strong>, if repeated with many samples, would produce intervals containing the true mean 95% of the time. Once computed, the interval either contains the true value or it does not.',
    },
    { type: 'title', level: 2, text: 'Quick Reference Glossary' },
    {
      type: 'glossary',
      items: [
        { term: 'Confidence Interval (CI)', definition: 'Range [x̄ − ME, x̄ + ME] estimating the population parameter at the chosen confidence level.' },
        { term: 'Confidence Level', definition: 'Proportion of intervals that would contain the true parameter if the experiment were repeated many times. Typical values: 90%, 95%, 99%.' },
        { term: 'Standard Error (SE)', definition: 'SE = σ/√n. Measures the variability of the sample mean around the population mean.' },
        { term: 'Margin of Error (ME)', definition: 'ME = z* × SE (or t* × SE). It is the half-width of the confidence interval.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Confidence Interval',
    labelMean: 'Sample Mean (x̄)',
    labelStdDev: 'Standard Deviation',
    labelN: 'Sample Size (n)',
    labelConf: 'Confidence Level (%)',
    btnZ: 'Z (σ known)',
    btnT: 'Student t',
    labelCI: 'Confidence Interval',
    labelME: 'Margin of Error',
    labelCritical: 'Critical Value',
    labelSE: 'Standard Error',
    labelDF: 'Degrees of Freedom',
    hintN: 'n must be an integer greater than or equal to 2.',
    hintStdDev: 'Standard deviation must be greater than 0.',
    hintConf: 'Confidence level must be between 0 and 100 (exclusive).',
    labelChart: 'Interval Visualization',
    chartDesc: 'Number line with the shaded CI and margin of error.',
    labelReport: 'Summary for your report',
    btnCopy: 'Copy Summary',
    btnCopied: 'Copied!',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
    tabStats: 'Summary Stats',
    tabRaw: 'Raw Data',
    labelRaw: 'Paste data',
    rawPlaceholder: 'Type or paste values separated by commas, spaces, or newlines. E.g.: 12.3, 15.1, 11.8',
    hintRaw: 'Enter at least 2 valid numeric values.',
    labelDist: 'Distribution',
    distAuto: 'Auto',
    noticeAutoRaw: 'Sample data: Student t applied',
    noticeAutoLowN: 'n < 30: Student t recommended',
    noticeAutoHighN: 'n ≥ 30: Z distribution recommended',
    calcCI: 'CI Interval',
    calcInverse: 'Min n',
    labelTargetME: 'Target margin of error (E)',
    hintTargetME: 'E must be a number greater than 0.',
    labelReqN: 'Minimum sample size',
  },
};
