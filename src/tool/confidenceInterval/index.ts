export * from './entry';
export const CONFIDENCE_INTERVAL_TOOL: ToolDefinition = {
  entry: confidenceInterval,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
