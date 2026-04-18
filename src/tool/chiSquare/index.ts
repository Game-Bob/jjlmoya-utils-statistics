import { chiSquare } from './entry';
export * from './entry';
export const CHI_SQUARE_TOOL: ToolDefinition = {
  entry: chiSquare,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
