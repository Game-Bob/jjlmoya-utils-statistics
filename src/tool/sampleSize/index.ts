export * from './entry';
export const SAMPLE_SIZE_TOOL: ToolDefinition = {
  entry: sampleSize,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
