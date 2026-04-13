import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import NormalDistributionComponent from './component.astro';
import NormalDistributionSEO from './seo.astro';
import NormalDistributionBibliography from './bibliography.astro';
import type { NormalDistributionUI } from './ui';

export type { NormalDistributionUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const normalDistribution: StatisticsToolEntry<NormalDistributionUI> = {
  id: 'normal-distribution',
  icons: {
    bg: 'mdi:chart-bell-curve',
    fg: 'mdi:sigma',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { NormalDistributionComponent, NormalDistributionSEO, NormalDistributionBibliography };

export const NORMAL_DISTRIBUTION_TOOL: ToolDefinition = {
  entry: normalDistribution,
  Component: NormalDistributionComponent,
  SEOComponent: NormalDistributionSEO,
  BibliographyComponent: NormalDistributionBibliography,
};
