import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'sample-size-calculator';
const title = 'Sample Size Calculator Online';
const description =
  'Calculate the exact number of people needed for your study. Includes options for finite or infinite population, adjustable confidence levels and margin of error.';

const faqData = [
  {
    question: 'What is the population size?',
    answer:
      'It is the total number of people that make up the group you want to study or survey. If it is less than 100,000, it is usually considered a finite population. If you do not have this data or it is unmanageable, select the infinite population option.',
  },
  {
    question: 'What confidence level should I choose?',
    answer:
      '95% is the most widely used standard in scientific research, theses, and market studies. Only change this value if your professor, tutor, or client requires a different precision level (e.g., 99%).',
  },
  {
    question: 'Why does the tool ask for a margin of error?',
    answer:
      'No sample is perfect. The margin of error defines the amount of imprecision you are willing to accept. The most common is 5%.',
  },
  {
    question: 'What expected proportion (p) should I use if I know nothing about the population?',
    answer:
      'Leave the default value: 50%. In statistics, this represents the "worst case scenario" because it maximizes the variance p(1-p), ensuring your sample size is never too small under any circumstances.',
  },
];

const howToData = [
  {
    name: 'Define Your Population',
    text: 'Indicate whether you know the total number of the group to study (Finite) or prefer a conservative calculation for very large/unknown groups (Infinite).',
  },
  {
    name: 'Adjust Your Confidence Level',
    text: 'Select 95% (recommended), or enter a custom value in the dropdown menu.',
  },
  {
    name: 'Set the Margin of Error',
    text: 'Specify the error tolerance. Remember that reducing it from 5% to 2% drastically multiplies the number of surveys you will need to conduct.',
  },
  {
    name: 'Copy the Result',
    text: 'Look at the central panel and directly copy the auto-generated Justification Text to add to your thesis or report.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    { name: 'Sample size determination - Wikipedia', url: 'https://en.wikipedia.org/wiki/Sample_size_determination' },
    { name: 'Sample size calculation - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Sample Size Calculator Online: The Definitive Guide' },
    {
      type: 'paragraph',
      html: 'Determining the right number of people to survey is one of the most critical steps in any research, market study, or academic project. The <strong>Sample Size Calculator</strong> provides students, researchers, and marketing professionals with a precise, fast, and easy-to-use tool to calculate the exact number of individuals needed for statistically significant results.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Standard Confidence', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Margin of Error', icon: 'mdi:target' },
        { value: 'Fast', label: 'Real-Time Calculation', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Why Is Calculating Sample Size Fundamental?' },
    {
      type: 'paragraph',
      html: 'In statistics, it is rarely possible to study an entire population. The solution is to select a representative subgroup known as a sample. If the sample is too small, results will be biased. If too large, you will waste time and money unnecessarily.',
    },
    { type: 'title', level: 2, text: 'The Two Calculation Modes: Finite and Infinite Population' },
    {
      type: 'paragraph',
      html: 'Our calculator adapts to your situation by offering two distinct calculation modes.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Finite Population (Known)',
          description: 'The exact total number of individuals is known.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Requires the N value',
            'Applies correction factor',
            'Reduces the final sample size',
          ],
        },
        {
          title: 'Infinite Population (Unknown)',
          description: 'Total size unknown, unmanageable, or greater than 100,000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Does not require knowing N',
            'Standard classic formula',
            'Most conservative and safe scenario',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Understanding the Control Panel Parameters' },
    {
      type: 'table',
      headers: ['Parameter', 'Description', 'Standard Recommendation'],
      rows: [
        ['<strong>Confidence Level (Z)</strong>', 'Mathematical certainty that the sample represents the population.', 'Use 95%.'],
        ['<strong>Margin of Error (e)</strong>', 'Tolerated deviation percentage from reality.', 'Use 5%.'],
        ['<strong>Expected Proportion (p)</strong>', 'Probability that the studied event occurs.', 'Use 50% (maximizes variance).'],
      ],
    },
    {
      type: 'tip',
      title: 'Beware of the Margin of Error',
      html: 'Reducing the margin of error from 5% to 2% requires an exponential increase in sample size. Check the Sensitivity Chart in the calculator before deciding on a margin that is too strict.',
    },
    { type: 'title', level: 2, text: 'The Mathematical Formula Behind the Calculation' },
    {
      type: 'list',
      items: [
        '<strong>Infinite Population:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Critical value derived from the Confidence Level.',
        '<strong>p:</strong> Expected proportion (q is 1 - p).',
        '<strong>e:</strong> Tolerated margin of error.',
      ],
    },
    { type: 'title', level: 2, text: 'Quick Glossary for Researchers' },
    {
      type: 'glossary',
      items: [
        { term: 'Population (N)', definition: 'Total set of elements or individuals sharing a characteristic that are the subject of study.' },
        { term: 'Sample (n)', definition: 'Representative subset selected from the total population.' },
        { term: 'Maximum Variance', definition: 'Occurs when p=0.5 (50%), ensuring the calculated sample is viable for the most diverse possible case.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameters',
    labelPopType: 'Population Type',
    btnFinite: 'Finite (Known)',
    btnInfinite: 'Infinite (Unknown)',
    labelPopSize: 'Population Size',
    labelConfLevel: 'Confidence Level (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Custom',
    labelConfCustom: 'Custom Confidence (%)',
    labelErrorMargin: 'Margin of Error (%)',
    labelProportion: 'Expected Proportion',
    hintProportion: '50% is the "worst case" that gives the largest and safest sample.',
    hintProportionError: 'A proportion of 0% or 100% nullifies the sample. We suggest using values between 5% and 95%.',
    labelSampleSize: 'Suggested Size',
    labelSampleSub: 'surveys needed',
    labelZValue: 'Critical Value',
    labelReport: 'Text for your report',
    defaultJustification: 'For a population of 10,000 people, with a confidence level of 95% and a margin of error of 5%, the representative sample size is 370 individuals.',
    btnCopy: 'Copy Text',
    btnCopied: 'Copied!',
    labelChart: 'Sensitivity: Size vs Margin of Error',
    chartDesc: 'Observe how sample size spikes when trying to reduce the margin of error.',
    justForFinite: 'For a population of',
    justPersons: 'people',
    justForInfinite: 'For an infinite population',
    justConfidence: ', with a confidence level of',
    justError: '% and a margin of error of',
    justResultIs: '%, the representative sample size is',
    justUnit: 'individuals.',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
  },
};
