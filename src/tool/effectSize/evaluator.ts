import type { EffectSizeResult } from './logic';
import type { EffectSizeUI } from './ui';

export interface EffectEvaluation {
  magnitudeLabel: string;
  directionLabel: string;
  intervalLabel: string;
  statusTone: 'neutral' | 'positive' | 'caution';
}

export const evaluateEffect = (result: EffectSizeResult, ui: EffectSizeUI): EffectEvaluation => {
  const magnitudeLabel = ui[result.magnitude === 'very-small' ? 'verySmall' : result.magnitude];
  const directionLabel = ui[result.direction];
  const intervalLabel = result.intervalCrossesZero ? ui.crossesZero : ui.doesNotCrossZero;
  const statusTone = result.intervalCrossesZero ? 'caution' : 'positive';
  return { magnitudeLabel, directionLabel, intervalLabel, statusTone };
};
