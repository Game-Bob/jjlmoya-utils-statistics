import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-square-independence-calculator';
const title = 'Chi Square Independence Test Calculator Online';
const description =
  'Determine whether a statistical relationship exists between two categorical variables. Fill in the observed frequency matrix and calculate the P-Value instantly.';

const faqData = [
  {
    question: 'What is the Chi-Square independence test?',
    answer:
      'It is a statistical test used to evaluate the probability that an observed association between two categorical or nominal variables is due to chance. For example: whether a person\'s favorite dessert is related to the region they live in.',
  },
  {
    question: "What is Cramér's V coefficient used for?",
    answer:
      "While Chi-square tells you whether there is 'any' relationship, Cramér's V tells you 'how much' relationship there is. It ranges from 0 (total independence) to 1 (absolute mathematical dependence). Values above 0.5 are considered very strong sociologically.",
  },
  {
    question: 'What happens if my Expected Frequencies are very low?',
    answer:
      'The mathematical Chi-Square approximation loses reliability if expected frequencies are less than 5 in more than 20% of the cells. Our tool will visually warn you if there is a risk. In that case, it is recommended to merge questionable categories.',
  },
  {
    question: 'Can I use this for qualitative surveys?',
    answer:
      'Absolutely yes. It is the primary utility for sociology and market research, where you rarely deal with decimal numbers but rather with mutually exclusive categories (Single/Married, Yes/No, North/South).',
  },
];

const howToData = [
  {
    name: 'Define the Matrix',
    text: 'First, select the size of your Contingency Table based on how many options your Variable A (rows) and Variable B (columns) have.',
  },
  {
    name: 'Enter Observed Data',
    text: 'Replace the base numbers by filling in the first table with the exact count of your real data.',
  },
  {
    name: 'Review the Residuals',
    text: 'Observe which cells in our table light up (either bright green or red). There lie the anomalies causing the variables not to be independent.',
  },
  {
    name: 'Copy the Conclusion',
    text: 'Paste into your thesis or project report the auto-generated text with the mathematical backing of the P-value.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography & References',
  bibliography: [
    {
      name: 'Chi-squared test - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Chi-squared_test',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Chi-Square Independence Test Calculator',
    },
    {
      type: 'paragraph',
      html: 'While classic tools like the A/B Test or Descriptive Statistics work excellently with continuous numbers (means, earnings, weights), the real world is full of categorical data (colors, brands, satisfaction levels). The <strong>Chi-Square Independence Calculator</strong> is the "Queen" test for analytically determining whether two qualitative variables are statistically connected or whether they vary completely independently of each other.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Table', label: 'Dynamic up to 3×3', icon: 'mdi:table' },
        { value: "Cramér's V", label: 'Association Strength', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Residuals & Deviation', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'What exactly is the Chi-Square Statistic (χ²) used for?',
    },
    {
      type: 'paragraph',
      html: 'The Chi-Square Independence Test compares <em>Observed Frequencies</em> (the real numbers you have measured and collected) with <em>Expected Frequencies</em> (the counts we would expect in each cell if there were no interaction at all between the variables).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Dependent Variables (Relationship Exists)',
          description: 'The proportions of one category vary wildly depending on the other.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Example: Mobile visitors prefer Design A, but PC users prefer Design B.',
            'The Chi-Square (χ²) spikes and the P-Value drops.',
            "Cramér's V indicates the strength (e.g. Strong > 0.5).",
          ],
        },
        {
          title: 'Independent Variables (Chance)',
          description: 'Proportions remain stable as a rock across all levels.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            "Example: A customer's eye color does not affect which car brand they buy.",
            'Chi-Square is tiny and the P-Value is greater than 0.05.',
            'The Null Hypothesis cannot be discarded.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: "Cramér's V: Understanding the Strength of the Link",
    },
    {
      type: 'paragraph',
      html: "Getting a very low P-Value does not mean the variables are 'intensely' linked; it only indicates that chance cannot be the culprit (perhaps because you have tens of thousands of real cases). To measure the 'effect size', we automatically incorporate <strong>Cramér's V Coefficient</strong>.",
    },
    {
      type: 'table',
      headers: ['Calculator (V Value)', 'Analytical Rating', 'Translation'],
      rows: [
        [
          '<strong>0.00 to 0.10</strong>',
          'Null / Trivial Association',
          'Theoretically dependent, but imperceptibly and uselessly so for business purposes.',
        ],
        [
          '<strong>0.11 to 0.30</strong>',
          'Weak Association',
          'A slight link exists, but many other external factors carry more weight.',
        ],
        [
          '<strong>0.31 to 0.50</strong>',
          'Moderate Association',
          'Both characteristics notably influence each other.',
        ],
        [
          '<strong>Above 0.50</strong>',
          'Strong Association',
          'Very clear connection. Knowing variable A predicts variable B remarkably well.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Mathematical Feasibility Conditions',
      html: "Watch out for empty cells! For Pearson's chi-square approximation to remain robust under the bell curve, it is methodologically required that at least 80% of the <em>Expected Frequencies</em> (not the observed ones) are greater than 5, and no cell is below 1. If this condition is not met, our warning indicator will trigger, suggesting you merge categories.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Built-in Residual Heatmap',
    },
    {
      type: 'paragraph',
      html: 'To enhance the UX and facilitate report conclusions, our matrix will automatically tint the background of cells based on their standardized residuals (deviation):<br/><br/><strong>Green tints:</strong> The cell has <em>many more successes</em> than would be purely mathematically expected.<br/><strong>Red tints:</strong> The cell is dangerously "empty" compared to the expected norm.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Chi-Square Glossary',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Observed Frequency',
          definition: 'The count exactly as you physically counted it in the lab or surveys.',
        },
        {
          term: 'Expected Frequency',
          definition:
            'Theoretical calculation resulting from crossing the marginal ratio of the row by that of the column.',
        },
        {
          term: 'Degrees of Freedom (df)',
          definition:
            'The geometric quantity of free data. Found by subtracting 1 from both rows and columns and multiplying them.',
        },
        {
          term: 'Standardized Residual',
          definition:
            'Normalized difference between observed and expected. Measures which cell "pushes" the discovery most.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Settings',
    labelTableSize: 'Table Size (Rows × Columns)',
    labelAlpha: 'Significance Level (α)',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    infoText:
      'Automatically calculates the theoretical frequency, χ² value and association strength Cramér\'s V coefficient using purely local inference.',
    labelObserved: 'Observed Frequencies (Input)',
    btnShowExpected: 'Show Expected Frequencies (H₀)',
    expectedDesc:
      'These are the values that would exist in each cell if there were no relationship at all between the two variables (random distribution).',
    alertTitle: 'Statistical Warning (Cells < 5)',
    alertBody:
      'There are very low expected frequencies. The χ² approximation may not be reliable. It is suggested to merge categories or use Fisher\'s exact test.',
    labelPValue: 'P-Value (p)',
    sigDescInitial: 'Significant relationship exists',
    labelGlobalStats: 'Global Statistics',
    labelChiSquareStat: 'Chi-Square (χ²)',
    labelDegrees: 'Degrees (df)',
    labelCramer: "Association Strength (Cramér's V)",
    labelVisualization: 'Residuals Visualization (Observed vs Expected)',
    heatmapInfo: 'Table input cells are colored according to residual variation.',
    labelReport: 'Text for your report',
    defaultJustification:
      'After analyzing a total of N observations, we found a χ²(df) = X value. With a p-value of P, it is concluded that significant dependence exists.',
    btnCopy: 'Copy Text',
    rowLabel: 'Row',
    colLabel: 'Col',
    totalLabel: 'TOTAL',
    cramerNull: 'None',
    cramerWeak: 'Weak',
    cramerModerate: 'Moderate',
    cramerStrong: 'Strong',
    sigText: 'Significant association exists (dependence).',
    noSigText: 'No evidence of relationship (independence).',
    chartLegendObs: 'Row Observed',
    chartLegendExp: 'Expected',
    btnCopied: 'Copied!',
    justificationIntro: 'After analyzing',
    justificationTableOf: 'cases in a',
    justificationObtained: ' table, we obtained',
    justificationPAt: '. Evaluated at level α=',
    justificationConcluded: ', it is empirically concluded that',
    justificationSig: 'A STRONG ASSOCIATION EXISTS between the variables (Cramér\'s V:',
    justificationNoSig: 'NO statistically significant association EXISTS',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & References',
  },
};
