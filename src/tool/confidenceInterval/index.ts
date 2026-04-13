import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import ConfidenceIntervalComponent from './component.astro';
import ConfidenceIntervalSEO from './seo.astro';
import ConfidenceIntervalBibliography from './bibliography.astro';
import type { ConfidenceIntervalUI } from './ui';

export type { ConfidenceIntervalUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const confidenceInterval: StatisticsToolEntry<ConfidenceIntervalUI> = {
  id: 'confidence-interval',
  icons: {
    bg: 'mdi:chart-timeline-variant',
    fg: 'mdi:arrow-expand-horizontal',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ConfidenceIntervalComponent, ConfidenceIntervalSEO, ConfidenceIntervalBibliography };

export const CONFIDENCE_INTERVAL_TOOL: ToolDefinition = {
  entry: confidenceInterval,
  Component: ConfidenceIntervalComponent,
  SEOComponent: ConfidenceIntervalSEO,
  BibliographyComponent: ConfidenceIntervalBibliography,
};
