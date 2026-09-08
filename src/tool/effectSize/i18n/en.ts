import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EffectSizeUI } from '../ui';

const slug = 'two-group-effect-size-calculator';
const title = 'Two Group Effect Size Calculator';
const description = 'Calculate Cohen d and Hedges g from two independent group summaries, then inspect the direction, magnitude, and approximate 95% confidence interval without confusing effect size with statistical significance.';

const faq = [
  { question: 'What does Cohen d measure?', answer: 'Cohen d expresses the difference between two group means in pooled standard deviation units. Its sign keeps the direction of Group A minus Group B, while its absolute value describes the standardized magnitude.' },
  { question: 'Why show Hedges g as well as Cohen d?', answer: 'Hedges g applies a small sample correction to Cohen d. The correction is modest for large groups and more noticeable when the combined degrees of freedom are small.' },
  { question: 'Does a confidence interval crossing zero prove there is no effect?', answer: 'No. It means the approximate 95% interval includes zero, so the summary data do not locate the direction precisely at that confidence level. It is not a proof of equivalence or absence.' },
  { question: 'Can this calculator replace a t test or a meta analysis?', answer: 'No. It calculates standardized mean differences from summary statistics. It does not test a hypothesis, check assumptions, model paired data, or combine multiple studies.' },
];

const howTo = [
  { name: 'Enter both group summaries', text: 'Enter each group mean, sample standard deviation, and sample size. Use the same measurement scale and define Group A and Group B before reading the sign.' },
  { name: 'Read the standardized difference', text: 'Use Cohen d for the direct pooled-standard-deviation estimate and Hedges g for the small-sample corrected estimate. The result keeps the direction of Group A minus Group B.' },
  { name: 'Inspect precision and context', text: 'Read the approximate 95% confidence interval and the magnitude label together. A threshold label is a rough convention, not a universal practical importance rule.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'en' };

export const content: ToolLocaleContent<EffectSizeUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Standardize the Difference Before You Interpret It' },
    { type: 'paragraph', html: 'A raw difference between means is tied to the original measurement scale. This <strong>two group effect size calculator</strong> divides that difference by the pooled standard deviation so you can describe how far apart the groups are in standard deviation units.' },
    { type: 'paragraph', html: 'Enter summaries for two independent groups: each mean, sample standard deviation, and sample size. The tool returns Cohen d, the small sample corrected Hedges g, their approximate 95% intervals, and the direction of Group A minus Group B.' },
    { type: 'title', level: 2, text: 'What the Calculation Uses' },
    { type: 'table', headers: ['Output', 'How to read it'], rows: [['<strong>Mean difference</strong>', 'The original Group A minus Group B difference in your measurement units.'], ['<strong>Pooled standard deviation</strong>', 'The common spread used to put the difference on a standardized scale.'], ['<strong>Cohen d</strong>', 'The standardized difference before small sample correction.'], ['<strong>Hedges g</strong>', 'Cohen d multiplied by a correction based on the combined degrees of freedom.'], ['<strong>Approximate 95% interval</strong>', 'A precision range based on the summary data and a normal approximation.']] },
    { type: 'title', level: 2, text: 'How to Read the Direction' },
    { type: 'paragraph', html: 'The sign is meaningful. A positive value means the mean entered for Group A is higher than Group B; a negative value means it is lower. If you reverse the group labels, the sign reverses but the absolute magnitude stays the same.' },
    { type: 'list', items: ['Keep both groups on the same measurement scale.', 'Use sample standard deviations, not standard errors.', 'Check whether observations are independent before using this two group formula.', 'Report the estimate, interval, group order, and units together.'] },
    { type: 'tip', title: 'Thresholds are not verdicts', html: 'The labels very small, small, medium, and large follow common Cohen-style reference points around 0.2, 0.5, and 0.8. Practical importance depends on the outcome, measurement quality, study design, and the smallest difference that matters in your field.' },
    { type: 'title', level: 2, text: 'Precision Is Part of the Result' },
    { type: 'paragraph', html: 'A large standardized difference with a wide interval may still be imprecise, especially when groups are small or variable. If the Hedges g interval crosses zero, treat the direction as uncertain at this approximate confidence level rather than converting that fact into a claim of no effect.' },
    { type: 'glossary', items: [{ term: 'Pooled standard deviation', definition: 'A sample-size adjusted estimate of the common spread of two independent groups.' }, { term: 'Cohen d', definition: 'The mean difference divided by the pooled standard deviation.' }, { term: 'Hedges g', definition: 'A small sample bias corrected version of the standardized mean difference.' }, { term: 'Confidence interval', definition: 'A range used to show uncertainty around the estimated effect, not a guarantee containing a fixed parameter.' }] },
    { type: 'title', level: 2, text: 'What This Tool Cannot Tell You' },
    { type: 'paragraph', html: 'This calculator does not establish causality, statistical significance, equivalence, clinical importance, normality, equal variances, or study quality. It also does not support paired observations or recover information lost when only summary statistics are available.' },
  ],
  ui: {
    groupA: 'Group A', groupB: 'Group B', mean: 'Mean', standardDeviation: 'Sample standard deviation', sampleSize: 'Sample size', meanHelp: 'Average outcome in this group.', standardDeviationHelp: 'Use the sample SD, not the standard error.', sampleSizeHelp: 'At least 2 observations.', example: 'Use worked example', reset: 'Reset', clear: 'Clear inputs', resultTitle: 'Effect reading', difference: 'Mean difference A minus B', pooledStandardDeviation: 'Pooled SD', degreesOfFreedom: 'Degrees of freedom', cohensD: "Cohen's d", hedgesG: "Hedges' g", correction: 'Small sample correction', confidenceInterval: 'Approx. 95% CI', magnitude: 'Magnitude', direction: 'Direction', uncertainty: 'Precision', higher: 'Group A is higher', lower: 'Group A is lower', equal: 'The means are equal', verySmall: 'Very small', small: 'Small', medium: 'Medium', large: 'Large', crossesZero: 'Interval crosses zero', doesNotCrossZero: 'Interval stays away from zero', chartTitle: 'The difference on a shared scale', chartDifference: 'Raw difference', chartBand: 'Hedges g interval', chartBaseline: 'Equal means', chartA: 'Group A mean', chartB: 'Group B mean', chartEmpty: 'Enter six valid values to see the calibrated difference.', statusReady: 'Updated from the values above.', statusInvalid: 'Check the six fields: SDs must be positive and sample sizes must be at least 2.', statusCopied: 'Summary copied.', copied: 'Copied', inputError: 'Invalid input', summaryTitle: 'Two group effect size summary', copySummary: 'Copy summary',
  },
};
