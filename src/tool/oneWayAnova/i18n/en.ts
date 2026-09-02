import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OneWayAnovaUI } from '../ui';

const slug = 'one-way-anova-between-within-groups-calculator';
const title = 'One Way ANOVA Calculator for Between and Within Group Variance';
const description = 'Compare the means of three or more independent groups with a one way ANOVA table, Fisher F statistic, p value, and effect size.';

const faq = [
  {
    question: 'What does a one way ANOVA test?',
    answer: 'A one way ANOVA tests the null hypothesis that all group population means are equal. A significant F test means that at least one mean differs, but it does not identify which pair differs.',
  },
  {
    question: 'Why is ANOVA preferable to many pairwise t tests?',
    answer: 'Running many unadjusted pairwise tests increases the chance of a false positive somewhere in the set. ANOVA provides one global omnibus test at the selected alpha level before any follow up comparison.',
  },
  {
    question: 'What data does this calculator need?',
    answer: 'Enter one quantitative, continuous outcome as a list of observations for each independent group. Use at least three groups and at least two observations in every group.',
  },
  {
    question: 'What should I do if the ANOVA p value is significant?',
    answer: 'Treat the result as evidence that not all means are equal, then use a planned multiple comparison procedure such as Tukey HSD to identify the differing pairs. Check assumptions before making a substantive claim.',
  },
];

const howTo = [
  { name: 'Enter independent groups', text: 'Create at least three groups and give each group a meaningful label.' },
  { name: 'Add continuous observations', text: 'Enter the measured values for each group separated by commas, spaces, semicolons, or line breaks.' },
  { name: 'Choose alpha and inspect F', text: 'Select the significance level and read the F statistic, p value, effect size, and the decomposition of variation.' },
  { name: 'Plan the follow up', text: 'If the omnibus test is significant, use a multiplicity controlled post hoc comparison to locate the differences.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<OneWayAnovaUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'What the one way ANOVA compares' },
    { type: 'paragraph', html: 'One way ANOVA compares the mean of a quantitative outcome across three or more independent groups. It separates the total variation into a between group component, which tracks how far group means sit from the grand mean, and a within group component, which captures the residual spread of observations around their own group mean.' },
    { type: 'paragraph', html: 'The global null hypothesis is that all population means are equal. The alternative is deliberately broader: at least one mean differs. A small p value answers the global question, but it does not tell you which groups differ or whether a difference is important in practice.' },
    { type: 'table', headers: ['ANOVA source', 'Sum of squares', 'Degrees of freedom', 'Mean square'], rows: [['Between groups', 'SS between', 'k minus 1', 'SS between divided by k minus 1'], ['Within groups', 'SS within', 'N minus k', 'SS within divided by N minus k'], ['Total', 'SS total', 'N minus 1', 'Not used']] },
    { type: 'title', level: 2, text: 'How to read the F statistic and p value' },
    { type: 'paragraph', html: 'The F statistic is the ratio of the between group mean square to the within group mean square. When the group means are separated relative to the natural spread inside groups, F grows and the right tail of the F distribution becomes smaller. The calculator reports that right tail as the p value.' },
    { type: 'list', items: ['Choose alpha before interpreting the result, commonly 0.05.', 'If p is below alpha, reject the global equality of means.', 'If p is at least alpha, do not claim that the means are equal; report that the data do not provide enough evidence of a difference.', 'Use eta squared to describe the proportion of observed total variation associated with group membership.'] },
    { type: 'tip', title: 'A significant result is not a pairwise answer', html: 'ANOVA can establish that at least one group mean differs, but the omnibus test cannot locate the difference. Use Tukey HSD or another planned multiplicity controlled procedure for pairwise follow up, and report confidence intervals and a meaningful effect size.' },
    { type: 'title', level: 2, text: 'Assumptions that matter before interpretation' },
    { type: 'paragraph', html: 'The classical fixed effects model assumes independent observations, approximately normal errors within groups, and a common variance across groups. This calculator warns about small samples and strong imbalance because those conditions make assumption checks and interpretation more important; the warnings are not formal normality or homogeneity tests.' },
    { type: 'list', items: ['Keep observations independent across and within groups.', 'Use a quantitative response rather than a binary conversion rate.', 'Inspect distributions and residuals when samples are small or group sizes are very different.', 'Consider a robust or Welch alternative when equal variances are implausible.'] },
    { type: 'title', level: 2, text: 'A reproducible ANOVA workflow' },
    { type: 'paragraph', html: 'Label groups according to the real factor levels, preserve the original measurement units, and keep the entered values auditable. Record the alpha level, the group sizes, the ANOVA table, and the follow up method. A good report states the F statistic with its two degrees of freedom, the p value, and an effect size rather than presenting significance alone.' },
    { type: 'tip', title: 'Scope of this calculator', html: 'The calculation is one factor ANOVA for independent groups. It does not perform post hoc tests, repeated measures analysis, covariate adjustment, outlier removal, or a formal diagnostic test for normality and equal variances.' },
  ],
  ui: {
    labelGroups: 'Independent groups',
    labelGroupName: 'Group label',
    labelObservations: 'Continuous observations',
    labelAlpha: 'Significance level alpha',
    alpha10: '0.10',
    alpha05: '0.05',
    alpha01: '0.01',
    addGroup: 'Add group',
    removeGroup: 'Remove',
    analyze: 'Recalculate ANOVA',
    reset: 'Reset example',
    presetBalanced: 'Balanced noise',
    presetSeparated: 'Clear separation',
    presetSubtle: 'Subtle separation',
    inputHint: 'Use commas, spaces, semicolons, or line breaks between values. Every group needs at least two observations.',
    emptyTitle: 'Your variance bridge will appear here',
    emptyBody: 'Enter three independent groups to see how the total variation splits into signal between groups and noise within groups.',
    resultTitle: 'ANOVA result',
    significant: 'Evidence of a mean difference',
    notSignificant: 'No global difference detected',
    labelPValue: 'p value',
    labelFStatistic: 'F statistic',
    labelEtaSquared: 'Eta squared',
    labelGrandMean: 'Grand mean',
    labelBetween: 'Between groups',
    labelWithin: 'Within groups',
    labelVariationMap: 'Where the variation lives',
    labelGroupPlot: 'The mean constellation',
    plotDescription: 'Dots are observations. Rings are group means. The line is the grand mean.',
    labelSignal: 'Between group signal',
    labelNoise: 'Within group noise',
    labelSource: 'Source',
    labelSS: 'SS',
    labelDF: 'df',
    labelMS: 'MS',
    labelF: 'F',
    labelP: 'p',
    betweenGroups: 'Between groups',
    withinGroups: 'Within groups',
    total: 'Total',
    labelGroupSummary: 'Group landmarks',
    labelN: 'n',
    labelMean: 'Mean',
    labelSD: 'SD',
    labelInterpretation: 'Interpretation',
    interpretationSignificant: 'The group means are not all compatible with a common population mean at the selected alpha level.',
    interpretationNotSignificant: 'The data do not provide enough evidence to reject a common population mean at the selected alpha level.',
    postHocNote: 'This global test does not identify the differing pairs. If significant, continue with a multiplicity controlled post hoc procedure.',
    warningTitle: 'Check before interpreting',
    warningSmallSamples: 'At least one group has fewer than five observations. Inspect distributions and treat normality assumptions cautiously.',
    warningUnbalanced: 'The largest group is at least twice the size of the smallest. Equal variance assumptions deserve extra scrutiny.',
    warningZeroError: 'There is no within group variation. The F statistic is infinite when group means differ.',
    errorTitle: 'Input needs attention',
    errorBody: 'Check the group values and try again.',
    errorNeedGroups: 'ANOVA needs at least three groups and an alpha value between 0 and 1.',
    errorNeedValues: 'Every group needs at least two observations.',
    errorInvalidValues: 'Use only finite numeric observations.',
    copySummary: 'Report sentence',
    copied: 'Copied',
    defaultReport: 'The report sentence will be generated from the current analysis.',
    copyReport: 'Copy sentence',
    reportCopied: 'Sentence copied',
    reportIntro: 'For',
    reportBetween: 'observations, the one way ANOVA returned',
    reportWith: 'with p value',
    reportAt: 'at alpha',
    reportSignificant: 'The global null hypothesis of equal means is rejected.',
    reportNotSignificant: 'The global null hypothesis of equal means is not rejected.',
  },
};
