import { descriptiveStats } from './entry';
export * from './entry';
export const DESCRIPTIVE_STATS_TOOL: ToolDefinition = {
  entry: descriptiveStats,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
