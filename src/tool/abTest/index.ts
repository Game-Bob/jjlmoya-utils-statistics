import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import ABTestComponent from './component.astro';
import ABTestSEO from './seo.astro';
import ABTestBibliography from './bibliography.astro';

import type { ABTestUI } from './ui';

export type { ABTestUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const abTest: StatisticsToolEntry<ABTestUI> = {
  id: 'ab-test',
  icons: {
    bg: 'mdi:flask-outline',
    fg: 'mdi:chart-bell-curve',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ABTestComponent, ABTestSEO, ABTestBibliography };

export const AB_TEST_TOOL: ToolDefinition = {
  entry: abTest,
  Component: ABTestComponent,
  SEOComponent: ABTestSEO,
  BibliographyComponent: ABTestBibliography,
};
