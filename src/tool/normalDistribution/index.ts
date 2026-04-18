export * from './entry';
export const NORMAL_DISTRIBUTION_TOOL: ToolDefinition = {
  entry: normalDistribution,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
