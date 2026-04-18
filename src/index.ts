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

export { ChiSquareComponent, ChiSquareSEO, ChiSquareBibliography, CHI_SQUARE_TOOL } from './tool/chiSquare/index';
export { ABTestComponent, ABTestSEO, ABTestBibliography, AB_TEST_TOOL } from './tool/abTest/index';
export { SampleSizeComponent, SampleSizeSEO, SampleSizeBibliography, SAMPLE_SIZE_TOOL } from './tool/sampleSize/index';
export { PearsonCorrelationComponent, PearsonCorrelationSEO, PearsonCorrelationBibliography, PEARSON_CORRELATION_TOOL } from './tool/pearsonCorrelation/index';
export { DescriptiveStatsComponent, DescriptiveStatsSEO, DescriptiveStatsBibliography, DESCRIPTIVE_STATS_TOOL } from './tool/descriptiveStats/index';
export { NormalDistributionComponent, NormalDistributionSEO, NormalDistributionBibliography, NORMAL_DISTRIBUTION_TOOL } from './tool/normalDistribution/index';
export { ConfidenceIntervalComponent, ConfidenceIntervalSEO, ConfidenceIntervalBibliography, CONFIDENCE_INTERVAL_TOOL } from './tool/confidenceInterval/index';

