import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-hypothesis-calculator';
const title = 'AB Test Hypothesis Testing Calculator Online';
const description =
  'Compare two groups (A and B) to determine whether there is a statistically significant difference in their conversions or means. Calculate the P-Value instantly.';

const faqData = [
  {
    question: 'What does the P-Value mean?',
    answer:
      'The P-Value tells you the probability that the performance difference between Group A and Group B is pure chance. If the P-Value is below the significance level (usually 0.05), it means you can be 95% confident that the structural difference is real.',
  },
  {
    question: 'What is the Significance Level (Alpha or α)?',
    answer:
      'It is your stringency level for the test. An Alpha of 0.05 requires being 95% sure that Group B differs from A to consider it valid. An Alpha of 0.01 requires much more stringency (99%). The academic and industrial convention is to use 0.05 by default.',
  },
  {
    question: 'What is the difference between the proportions test and the means test?',
    answer:
      'The proportions test measures dichotomous success or failure variables: clicks, email opens, conversions. The means test compares accumulated quantitative behavior: average cart spend or clinical recovery days.',
  },
  {
    question: 'What if my sample is smaller than 30 subjects?',
    answer:
      'The normal distribution approximation becomes less precise with such small samples (central limit theorem). For a clinical decision we recommend using more conservative exact probability or adjusted Student t-test techniques.',
  },
];

const howToData = [
  {
    name: 'Select the Numerical Objective',
    text: 'In the configuration panel, define whether you want to measure Conversion rates (simple proportions) or general averages like amounts (Means).',
  },
  {
    name: 'Enter Control Data (Group A)',
    text: 'Fill in the cases sent/exposed and how many successes they had (or their mean).',
  },
  {
    name: 'Enter Experimental Data (Group B)',
    text: 'Enter the numbers for the new initiative or variant you are measuring.',
  },
  {
    name: 'Record the Statistical Verdict',
    text: 'Look at the Significance Judge and copy the generated justification about whether the real improvement (Lift) rejects the random assumption.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    { name: 'Statistical hypothesis testing - Wikipedia', url: 'https://en.wikipedia.org/wiki/Statistical_hypothesis_testing' },
    { name: 'A/B Testing Calculator - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'AB Test Hypothesis Testing Calculator Online' },
    {
      type: 'paragraph',
      html: 'Making decisions based on intuitions is dangerous; making them based on pure data is the path to success. The <strong>Hypothesis Testing Calculator (A/B Test)</strong> is the definitive tool for analysts, marketers, and researchers who need to validate whether the difference between two groups is statistically significant or simply the result of chance.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-Value', label: 'The Final Judge', icon: 'mdi:scale-balance' },
        { value: 'Local', label: 'No Data Upload', icon: 'mdi:shield-check' },
        { value: 'Instant', label: 'Native Charts', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Why Do We Split Tests into Conversions and Means?' },
    {
      type: 'paragraph',
      html: 'Depending on the nature of your study, the success metric will change. Our tool natively supports the two most widely used statistical test types in the industry.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Proportions Test (Conversions)',
          description: 'Compares percentages or success rates between two groups.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideal for Marketing (Clicks, Sales, Subscriptions)',
            'Uses Total Cases (n) and Successes (x)',
            'Applies two-proportion Z-Test',
          ],
        },
        {
          title: 'Continuous Means Test',
          description: 'Compares average numerical values between two groups.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideal for Average Ticket, Time on Site, or Clinical Trials',
            'Uses Mean (μ) and Standard Deviation (σ)',
            'Applies robust normal approximation for samples (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'How to Interpret Results: The P-Value Is Your Guide' },
    {
      type: 'paragraph',
      html: 'The heart of this calculator is the famous <strong>P-Value</strong>. This number tells you the probability of having obtained these observed differences if the Null Hypothesis (which posits that "both groups are equal") were true.',
    },
    {
      type: 'table',
      headers: ['Observed P-Value', 'Practical Meaning', 'Standard Decision'],
      rows: [
        ['<strong>Greater than 0.05</strong>', 'The difference is small relative to variance. Chance could explain it perfectly.', '<strong>DO NOT Reject</strong> the Null Hypothesis. No proven real improvement.'],
        ['<strong>Less than 0.05</strong>', 'It is extremely unlikely that chance causes such a difference. There is a real effect.', '<strong>Reject</strong> the Null Hypothesis. Variant B is better!'],
        ['<strong>Less than 0.01</strong>', 'The evidence in favor of change is overwhelming (99% confidence).', '<strong>Firmly Reject</strong>. Resounding success of the experiment.'],
      ],
    },
    {
      type: 'tip',
      title: 'Correction for Small Samples',
      html: 'If your groups process fewer than 30 subjects, the tool will display a "Small Sample" warning. In these borderline scenarios, the classic normal approximation loses precision; we recommend using exact Student t-test or Fisher tools.',
    },
    { type: 'title', level: 2, text: 'A/B Testing Glossary' },
    {
      type: 'glossary',
      items: [
        { term: 'Control Group (A)', definition: 'The original version or baseline against which you will measure your experiment.' },
        { term: 'Variant (B)', definition: 'The new modified version you expect to improve metrics.' },
        { term: 'Lift (Relative Improvement)', definition: 'Percentage change between the performance of Group B relative to the baseline of Group A.' },
        { term: 'Significance Level (α)', definition: 'The error threshold you are willing to accept (normally 5% or 0.05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameters',
    btnConversions: 'Conversions',
    btnMeans: 'Means',
    labelGroupA: 'Group A (Control)',
    labelGroupB: 'Group B (Variant)',
    labelTotalCases: 'Total Cases',
    labelSuccesses: 'Successes or Conversions',
    labelMean: 'Average Mean',
    labelStdDev: 'Standard Deviation',
    labelAlpha: 'Significance Level',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    labelDirection: 'Test Direction',
    btn2Tails: '2 Tails (Diff.)',
    btn1Tail: '1 Tail (B > A)',
    alertTitle: 'Statistical Reliability Warning',
    alertBody: 'You are using a very small sample size or extreme values (0 successes). The estimate may not be representative of the real world.',
    alertLinkText: 'Calculate your ideal sample size here',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-Value',
    sigDescInitial: 'There is sufficient evidence to reject the null hypothesis',
    labelLift: 'Improvement Analysis (Lift)',
    labelLiftText: 'improvement relative to Group A',
    labelConfidencePrefix: 'Statistical confidence:',
    labelDistributions: 'Probability Distributions',
    chartDesc: 'Observe the overlap: less overlap implies greater certainty that the differences are real and not the result of chance.',
    labelReport: 'Text for your report',
    defaultJustification: 'After analyzing X subjects, Group B shows a Y% improvement with a statistical confidence of Z% (p=0.00).',
    btnCopy: 'Copy Text',
    btnCopied: 'Copied!',
    sigText: 'There is sufficient evidence to reject the null hypothesis.',
    noSigText: 'The difference is not statistically significant.',
    justIntro: 'After analyzing a total of',
    justSamples: ' samples, Group B shows a change of ',
    justRespectTo: '% relative to Group A.',
    justWithConfidence: ' With a statistical confidence of ',
    justDiff: ', the empirical difference ',
    justSig: 'IS statistically significant',
    justNoSig: 'is NOT statistically significant',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
  },
};
