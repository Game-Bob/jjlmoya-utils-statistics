export * from './entry';
export const PEARSON_CORRELATION_TOOL: ToolDefinition = {
  entry: pearsonCorrelation,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
