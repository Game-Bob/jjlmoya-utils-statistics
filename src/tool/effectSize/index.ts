import type { ToolDefinition } from '../../types';
import { effectSize } from './entry';

export * from './entry';

export const EFFECT_SIZE_TOOL: ToolDefinition = {
  entry: effectSize,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
