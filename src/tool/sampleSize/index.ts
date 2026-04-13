import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import SampleSizeComponent from './component.astro';
import SampleSizeSEO from './seo.astro';
import SampleSizeBibliography from './bibliography.astro';

import type { SampleSizeUI } from './ui';

export type { SampleSizeUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const sampleSize: StatisticsToolEntry<SampleSizeUI> = {
  id: 'sample-size',
  icons: {
    bg: 'mdi:account-multiple',
    fg: 'mdi:sigma',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SampleSizeComponent, SampleSizeSEO, SampleSizeBibliography };

export const SAMPLE_SIZE_TOOL: ToolDefinition = {
  entry: sampleSize,
  Component: SampleSizeComponent,
  SEOComponent: SampleSizeSEO,
  BibliographyComponent: SampleSizeBibliography,
};
