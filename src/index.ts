export { statisticsCategory } from './category';
export { default as statisticsCategorySEO } from './category/seo.astro';

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

export { ALL_TOOLS } from './tools';

export { ChiSquareComponent, ChiSquareSEO, ChiSquareBibliography, CHI_SQUARE_TOOL } from './tool/chiSquare/index';
export { ABTestComponent, ABTestSEO, ABTestBibliography, AB_TEST_TOOL } from './tool/abTest/index';
export { SampleSizeComponent, SampleSizeSEO, SampleSizeBibliography, SAMPLE_SIZE_TOOL } from './tool/sampleSize/index';
export { PearsonCorrelationComponent, PearsonCorrelationSEO, PearsonCorrelationBibliography, PEARSON_CORRELATION_TOOL } from './tool/pearsonCorrelation/index';

