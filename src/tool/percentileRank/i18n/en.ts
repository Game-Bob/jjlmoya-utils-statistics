import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentileRankUI } from '../ui';

const slug = 'percentile-rank-calculator';
const title = 'Percentile Rank Calculator Online';
const description = 'Find where a value sits in your dataset with a transparent percentile rank calculator. Paste a small sample, choose the tie method, and see the rank, neighbors, and interpretation instantly.';

const faq = [
  { question: 'What does percentile rank mean?', answer: 'Percentile rank describes the share of observations at or below, below, or midway through a target value, depending on the selected method. It tells you where the target sits in this sample; it is not a probability that the target will occur.' },
  { question: 'Which percentile rank method should I choose?', answer: 'Use Below when you want the proportion strictly lower than the target, At or below when equal values should count fully, and Midrank when ties should count halfway. The selected formula is shown beside the result.' },
  { question: 'How are ties handled?', answer: 'The calculator reports the number of equal observations and gives the tied position range. Midrank assigns half of the tied observations to the percentile; the other methods count either none or all of them.' },
  { question: 'Can percentile rank prove statistical significance?', answer: 'No. Percentile rank is a descriptive position within the values you entered. It does not estimate a population parameter, test a hypothesis, or establish statistical significance.' },
];

const howTo = [
  { name: 'Paste your sample', text: 'Enter numbers separated by commas, spaces, semicolons, or line breaks. Use observations from the same measurement and context.' },
  { name: 'Enter the target', text: 'Type the value whose position you want to understand. It may be present in the sample or fall between two observations.' },
  { name: 'Choose a tie method', text: 'Select Below, At or below, or Midrank. Read the percentile, position range, neighbors, and counts shown immediately.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'en' };

export const content: ToolLocaleContent<PercentileRankUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'See a Value in Context, Not Just as a Number' },
    { type: 'paragraph', html: 'A score, measurement, or observation becomes easier to interpret when you can see its position inside the sample that produced it. This <strong>percentile rank calculator</strong> sorts your own values, locates the target, and explains how the chosen tie method changes the answer.' },
    { type: 'stats', columns: 3, items: [{ value: '3', label: 'Tie methods', icon: 'mdi:format-list-numbered' }, { value: '0', label: 'Data sent to a server', icon: 'mdi:shield-check-outline' }, { value: '1', label: 'Clear position summary', icon: 'mdi:map-marker-radius-outline' }] },
    { type: 'title', level: 2, text: 'What the Calculator Shows' },
    { type: 'table', headers: ['Output', 'Why it matters'], rows: [['<strong>Percentile rank</strong>', 'The target position expressed as a percentage of this sample.'], ['<strong>Position range</strong>', 'The 1-based position, including the full range when ties exist.'], ['<strong>Below / equal / above</strong>', 'Counts that make the result transparent and easy to verify.'], ['<strong>Neighbors</strong>', 'The closest lower and higher observations around the target.']] },
    { type: 'tip', title: 'Keep the sample comparable', html: 'A percentile is only meaningful relative to the values entered. Do not mix different units, populations, time periods, or measurement rules in one sample.' },
    { type: 'title', level: 2, text: 'How Tie Methods Change the Result' },
    { type: 'paragraph', html: 'Suppose a sample has 10 observations, with 3 below the target and 2 equal to it. <strong>Below</strong> returns 30%, <strong>At or below</strong> returns 50%, and <strong>Midrank</strong> returns 40%. None is universally correct: the right choice depends on whether equal observations should count zero, fully, or halfway.' },
    { type: 'glossary', items: [{ term: 'Sample', definition: 'The finite list of observations you entered; all results describe this list only.' }, { term: 'Percentile rank', definition: 'A descriptive percentage locating a target within an ordered sample.' }, { term: 'Tie', definition: 'One or more observations equal to the target value.' }, { term: 'Midrank', definition: 'A tie convention that counts half of the equal observations.' }] },
    { type: 'title', level: 2, text: 'Limits of Interpretation' },
    { type: 'paragraph', html: 'This tool does not estimate a distribution, confidence interval, probability, or statistical significance. A high percentile can describe a target relative to a biased or very small sample. Use domain context and an appropriate inferential method when you need to generalize beyond the values you entered.' },
  ],
  ui: {
    labelTitle: 'Percentile Rank', labelData: 'Your sample', placeholderData: 'e.g. 12, 18, 21, 21, 27, 34, 41, 50', hintData: 'Paste at least 2 numbers separated by commas, spaces, semicolons, or line breaks.', labelTarget: 'Target value', placeholderTarget: 'e.g. 34', labelMethod: 'Tie method', methodBelow: 'Below (strict)', methodAtOrBelow: 'At or below', methodMidrank: 'Midrank (half ties)', methodHelp: 'Choose how observations equal to the target contribute to the percentage.', btnExample: 'Load example', btnClear: 'Clear', resultEyebrow: 'Position in your sample', resultPercentile: 'Percentile rank', resultPosition: 'Sorted position', positionOf: 'of', labelBelow: 'Below target', labelEqual: 'Equal to target', labelAbove: 'Above target', labelLowerNeighbor: 'Lower neighbor', labelUpperNeighbor: 'Upper neighbor', labelTieRange: 'Tie position range', labelSortedSample: 'Ordered sample map', plotStart: 'Lowest', plotEnd: 'Highest', emptyPlot: 'Enter a sample and target to see the ordered sample map.', errorData: 'Enter at least 2 valid numeric values.', errorTarget: 'Enter a valid numeric target.', invalidNotice: '{n} invalid token(s) ignored.', resultExplanation: 'The target is at position {position} of {total}. {below} observation(s) are lower, {equal} equal, and {above} higher. Using {method}, that is the {percentile} percentile of this sample.', labelReport: 'Summary for your notes', btnCopy: 'Copy summary', btnCopied: 'Copied!',
  },
};
