import { describe, expect, it } from 'vitest';
import { calculatePercentileRank, parseValues } from './logic';

describe('percentile rank logic', () => {
  it('parses separators and counts invalid tokens', () => {
    expect(parseValues('10, 20; nope\n30')).toEqual({ values: [10, 20, 30], invalidTokens: 1 });
  });

  it('calculates a midrank with ties and position range', () => {
    const result = calculatePercentileRank([10, 20, 20, 30, 40], 20, 'midrank');
    expect(result.percentile).toBe(40);
    expect(result.below).toBe(1);
    expect(result.equal).toBe(2);
    expect(result.above).toBe(2);
    expect(result.rankStart).toBe(2);
    expect(result.rankEnd).toBe(3);
    expect(result.lowerNeighbor).toBe(10);
    expect(result.upperNeighbor).toBe(30);
  });

  it('keeps strict and inclusive methods distinct', () => {
    const values = [10, 20, 20, 30];
    expect(calculatePercentileRank(values, 20, 'below').percentile).toBe(25);
    expect(calculatePercentileRank(values, 20, 'atOrBelow').percentile).toBe(75);
  });

  it('handles a target between observations', () => {
    const result = calculatePercentileRank([2, 4, 8, 10], 6, 'midrank');
    expect(result.percentile).toBe(50);
    expect(result.rankStart).toBe(3);
    expect(result.rankEnd).toBe(3);
    expect(result.lowerNeighbor).toBe(4);
    expect(result.upperNeighbor).toBe(8);
  });
});
