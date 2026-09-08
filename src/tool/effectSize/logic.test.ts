import { describe, expect, it } from 'vitest';
import { calculateEffectSize, validateInput } from './logic';

const example = {
  meanA: 72,
  standardDeviationA: 9,
  sampleSizeA: 32,
  meanB: 65,
  standardDeviationB: 10,
  sampleSizeB: 30,
};

describe('effect size calculations', () => {
  it('rejects impossible group summaries', () => {
    expect(validateInput({ ...example, sampleSizeA: 1 })).toBe(false);
    expect(validateInput({ ...example, standardDeviationB: 0 })).toBe(false);
    expect(calculateEffectSize({ ...example, meanA: Number.NaN })).toBeNull();
  });

  it('calculates pooled standard deviation, d, g, and intervals', () => {
    const result = calculateEffectSize(example);
    expect(result).not.toBeNull();
    if (!result) throw new Error('Expected a result');
    expect(result.difference).toBe(7);
    expect(result.degreesOfFreedom).toBe(60);
    expect(result.pooledStandardDeviation).toBeCloseTo(9.497, 2);
    expect(result.cohensD).toBeCloseTo(0.737, 2);
    expect(result.hedgesG).toBeCloseTo(0.727, 2);
    expect(result.magnitude).toBe('medium');
    expect(result.direction).toBe('higher');
    expect(result.cohensInterval.low).toBeLessThan(result.cohensD);
    expect(result.hedgesInterval.high).toBeGreaterThan(result.hedgesG);
  });

  it('keeps direction and zero difference visible', () => {
    const result = calculateEffectSize({ ...example, meanA: 65 });
    expect(result).not.toBeNull();
    if (!result) throw new Error('Expected a result');
    expect(result.direction).toBe('equal');
    expect(result.cohensD).toBe(0);
    expect(result.intervalCrossesZero).toBe(true);
  });
});
