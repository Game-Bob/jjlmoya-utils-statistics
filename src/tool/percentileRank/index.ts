import type { ToolDefinition } from '../../types';
import { percentileRank } from './entry';

export * from './entry';

export const PERCENTILE_RANK_TOOL: ToolDefinition = {
  entry: percentileRank,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
