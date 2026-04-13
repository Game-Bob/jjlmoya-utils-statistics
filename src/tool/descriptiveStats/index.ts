import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import DescriptiveStatsComponent from './component.astro';
import DescriptiveStatsSEO from './seo.astro';
import DescriptiveStatsBibliography from './bibliography.astro';
import type { DescriptiveStatsUI } from './ui';

export type { DescriptiveStatsUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const descriptiveStats: StatisticsToolEntry<DescriptiveStatsUI> = {
  id: 'descriptive-stats',
  icons: {
    bg: 'mdi:chart-bar',
    fg: 'mdi:sigma',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { DescriptiveStatsComponent, DescriptiveStatsSEO, DescriptiveStatsBibliography };

export const DESCRIPTIVE_STATS_TOOL: ToolDefinition = {
  entry: descriptiveStats,
  Component: DescriptiveStatsComponent,
  SEOComponent: DescriptiveStatsSEO,
  BibliographyComponent: DescriptiveStatsBibliography,
};
