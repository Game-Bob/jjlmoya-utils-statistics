import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {
  it('should have 7 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(7);
  });
});

