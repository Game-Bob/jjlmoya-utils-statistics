export { statisticsCategory } from './category';
export const statisticsCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  StatisticsToolEntry,
  StatisticsCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { CHI_SQUARE_TOOL } from './tool/chiSquare/index';
export { AB_TEST_TOOL } from './tool/abTest/index';
export { SAMPLE_SIZE_TOOL } from './tool/sampleSize/index';
export { PEARSON_CORRELATION_TOOL } from './tool/pearsonCorrelation/index';
export { DESCRIPTIVE_STATS_TOOL } from './tool/descriptiveStats/index';
export { NORMAL_DISTRIBUTION_TOOL } from './tool/normalDistribution/index';
export { CONFIDENCE_INTERVAL_TOOL } from './tool/confidenceInterval/index';

