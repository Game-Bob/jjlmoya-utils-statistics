import type { AnovaGroupInput, AnovaResult } from './logic';

export interface AnovaEvaluation {
  status: 'significant' | 'not-significant' | 'invalid';
  warnings: string[];
}

export function evaluateAnova(result: AnovaResult, groups: AnovaGroupInput[]): AnovaEvaluation {
  const sizes = groups.map((group) => group.values.length);
  const smallest = Math.min(...sizes);
  const largest = Math.max(...sizes);
  const warnings: string[] = [];
  if (smallest < 5) warnings.push('small-samples');
  if (smallest > 0 && largest / smallest >= 2) warnings.push('unbalanced');
  if (result.within.meanSquare === 0) warnings.push('zero-error');
  return { status: result.significant ? 'significant' : 'not-significant', warnings };
}
