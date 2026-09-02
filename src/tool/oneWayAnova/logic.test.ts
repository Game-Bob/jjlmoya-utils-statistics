import { describe, expect, it } from 'vitest';
import { calculateOneWayAnova, fSurvivalProbability } from './logic';

describe('one way ANOVA', () => {
  it('reproduces the NIST three group example', () => {
    const calculation = calculateOneWayAnova([
      { label: 'Temperature 1', values: [6.9, 5.4, 5.8, 4.6, 4.0] },
      { label: 'Temperature 2', values: [8.3, 6.8, 7.8, 9.2, 6.5] },
      { label: 'Temperature 3', values: [8.0, 10.5, 8.1, 6.9, 9.3] },
    ]);

    expect(calculation.ok).toBe(true);
    if (!calculation.ok) return;
    expect(calculation.result.between.sumOfSquares).toBeCloseTo(27.897, 2);
    expect(calculation.result.within.sumOfSquares).toBeCloseTo(17.452, 2);
    expect(calculation.result.between.fStatistic).toBeCloseTo(9.59, 2);
    expect(calculation.result.pValue).toBeCloseTo(0.00325, 4);
    expect(calculation.result.significant).toBe(true);
  });

  it('returns the canonical degrees of freedom and decomposition', () => {
    const calculation = calculateOneWayAnova([
      { label: 'A', values: [1, 2, 3] },
      { label: 'B', values: [4, 5, 6] },
      { label: 'C', values: [7, 8, 9] },
    ]);

    expect(calculation.ok).toBe(true);
    if (!calculation.ok) return;
    expect(calculation.result.between.degreesOfFreedom).toBe(2);
    expect(calculation.result.within.degreesOfFreedom).toBe(6);
    expect(calculation.result.total.degreesOfFreedom).toBe(8);
    expect(calculation.result.total.sumOfSquares).toBeCloseTo(calculation.result.between.sumOfSquares + calculation.result.within.sumOfSquares);
  });

  it('rejects fewer than three groups and undersized groups', () => {
    expect(calculateOneWayAnova([{ label: 'A', values: [1, 2] }, { label: 'B', values: [3, 4] }])).toEqual({ ok: false, error: { code: 'groups' } });
    expect(calculateOneWayAnova([
      { label: 'A', values: [1] },
      { label: 'B', values: [3, 4] },
      { label: 'C', values: [5, 6] },
    ])).toEqual({ ok: false, error: { code: 'values', groupIndex: 0 } });
  });

  it('handles identical observations without dividing by zero', () => {
    const calculation = calculateOneWayAnova([
      { label: 'A', values: [5, 5] },
      { label: 'B', values: [5, 5] },
      { label: 'C', values: [5, 5] },
    ]);

    expect(calculation.ok).toBe(true);
    if (!calculation.ok) return;
    expect(calculation.result.between.fStatistic).toBe(0);
    expect(calculation.result.pValue).toBe(1);
  });

  it('keeps the F survival probability within its probability bounds', () => {
    expect(fSurvivalProbability(0, 2, 12)).toBe(1);
    expect(fSurvivalProbability(9.59, 2, 12)).toBeCloseTo(0.00325, 4);
    expect(fSurvivalProbability(Number.POSITIVE_INFINITY, 2, 12)).toBe(0);
  });
});
