import type { StatisticsToolEntry, ToolDefinition } from '../../types';
import PearsonCorrelationComponent from './component.astro';
import PearsonCorrelationSEO from './seo.astro';
import PearsonCorrelationBibliography from './bibliography.astro';

import type { PearsonCorrelationUI } from './ui';

export type { PearsonCorrelationUI };

export const pearsonCorrelation: StatisticsToolEntry<PearsonCorrelationUI> = {
  id: 'pearson-correlation',
  icons: {
    bg: 'mdi:chart-scatter-plot',
    fg: 'mdi:chart-line',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
  },
};

export { PearsonCorrelationComponent, PearsonCorrelationSEO, PearsonCorrelationBibliography };

export const PEARSON_CORRELATION_TOOL: ToolDefinition = {
  entry: pearsonCorrelation,
  Component: PearsonCorrelationComponent,
  SEOComponent: PearsonCorrelationSEO,
  BibliographyComponent: PearsonCorrelationBibliography,
};
