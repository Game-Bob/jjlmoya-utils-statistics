import type { ToolDefinition } from '../../types';
import { oneWayAnova } from './entry';
export * from './entry';

export const ONE_WAY_ANOVA_TOOL: ToolDefinition = {
  entry: oneWayAnova,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
