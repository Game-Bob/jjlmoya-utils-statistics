import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { statisticsCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 8 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(8);
    });

    it('statisticsCategory should be defined', () => {
      expect(statisticsCategory).toBeDefined();
      expect(statisticsCategory.i18n).toBeDefined();
    });
  });
});

