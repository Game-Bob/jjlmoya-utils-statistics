import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import PearsonCorrelationComponent from './component.astro';
import PearsonCorrelationSEO from './seo.astro';
import PearsonCorrelationBibliography from './bibliography.astro';

import type { PearsonCorrelationUI } from './ui';

export type { PearsonCorrelationUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const pearsonCorrelation: StatisticsToolEntry<PearsonCorrelationUI> = {
  id: 'pearson-correlation',
  icons: {
    bg: 'mdi:chart-scatter-plot',
    fg: 'mdi:chart-line',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { PearsonCorrelationComponent, PearsonCorrelationSEO, PearsonCorrelationBibliography };

export const PEARSON_CORRELATION_TOOL: ToolDefinition = {
  entry: pearsonCorrelation,
  Component: PearsonCorrelationComponent,
  SEOComponent: PearsonCorrelationSEO,
  BibliographyComponent: PearsonCorrelationBibliography,
};
