import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import ChiSquareComponent from './component.astro';
import ChiSquareSEO from './seo.astro';
import ChiSquareBibliography from './bibliography.astro';

import type { ChiSquareUI } from './ui';

export type { ChiSquareUI };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const chiSquare: StatisticsToolEntry<ChiSquareUI> = {
  id: 'chi-square',
  icons: {
    bg: 'mdi:table-large',
    fg: 'mdi:chart-scatter-plot',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ChiSquareComponent, ChiSquareSEO, ChiSquareBibliography };

export const CHI_SQUARE_TOOL: ToolDefinition = {
  entry: chiSquare,
  Component: ChiSquareComponent,
  SEOComponent: ChiSquareSEO,
  BibliographyComponent: ChiSquareBibliography,
};
