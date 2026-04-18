export * from './entry';
export const AB_TEST_TOOL: ToolDefinition = {
  entry: abTest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
