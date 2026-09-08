import type { EffectSizeResult } from './logic';
import { evaluateEffect } from './evaluator';
import type { EffectSizeUI } from './ui';

const format = (value: number, digits = 2): string => value.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
const formatSigned = (value: number): string => `${value >= 0 ? '+' : ''}${format(value)}`;

const setText = (root: HTMLElement, selector: string, value: string): void => {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
};

const updateScene = (root: HTMLElement, result: EffectSizeResult, ui: EffectSizeUI): void => {
  const span = Math.max(Math.abs(result.cohensInterval.low), Math.abs(result.cohensInterval.high), 1);
  const position = (value: number): number => Math.min(96, Math.max(4, 50 + value / span * 40));
  root.style.setProperty('--effect-a', `${position(result.cohensD)}%`);
  root.style.setProperty('--effect-b', `${position(0)}%`);
  root.style.setProperty('--effect-left', `${position(result.hedgesInterval.low)}%`);
  root.style.setProperty('--effect-right', `${position(result.hedgesInterval.high)}%`);
  setText(root, '[data-effect-scene-title]', ui.chartTitle);
  setText(root, '[data-effect-scene-difference]', `${ui.chartDifference}: ${formatSigned(result.difference)}`);
  setText(root, '[data-effect-scene-band]', `${ui.chartBand}: ${format(result.hedgesInterval.low)} to ${format(result.hedgesInterval.high)}`);
  setText(root, '[data-effect-scene-a]', ui.chartA);
  setText(root, '[data-effect-scene-b]', ui.chartB);
  const scene = root.querySelector<HTMLElement>('[data-effect-scene]');
  if (scene) scene.dataset.state = 'ready';
};

export const renderEffectResult = (root: HTMLElement, result: EffectSizeResult | null, ui: EffectSizeUI): void => {
  const output = root.querySelector<HTMLElement>('[data-effect-output]');
  if (!result) {
    if (output) output.dataset.state = 'empty';
    setText(root, '[data-effect-status]', ui.statusInvalid);
    setText(root, '[data-effect-scene-empty]', ui.chartEmpty);
    return;
  }
  const evaluation = evaluateEffect(result, ui);
  if (output) {
    output.dataset.state = 'ready';
    output.dataset.tone = evaluation.statusTone;
  }
  setText(root, '[data-effect-status]', ui.statusReady);
  setText(root, '[data-effect-difference]', formatSigned(result.difference));
  setText(root, '[data-effect-pooled-sd]', format(result.pooledStandardDeviation));
  setText(root, '[data-effect-df]', String(result.degreesOfFreedom));
  setText(root, '[data-effect-d]', formatSigned(result.cohensD));
  setText(root, '[data-effect-g]', formatSigned(result.hedgesG));
  setText(root, '[data-effect-correction]', format(result.correction, 4));
  setText(root, '[data-effect-d-ci]', `${format(result.cohensInterval.low)} to ${format(result.cohensInterval.high)}`);
  setText(root, '[data-effect-g-ci]', `${format(result.hedgesInterval.low)} to ${format(result.hedgesInterval.high)}`);
  setText(root, '[data-effect-magnitude]', evaluation.magnitudeLabel);
  setText(root, '[data-effect-direction]', evaluation.directionLabel);
  setText(root, '[data-effect-uncertainty]', evaluation.intervalLabel);
  updateScene(root, result, ui);
};

export const buildSummary = (root: HTMLElement, ui: EffectSizeUI): string => {
  const get = (selector: string): string => root.querySelector<HTMLElement>(selector)?.textContent ?? '';
  return [
    ui.summaryTitle,
    `${ui.difference}: ${get('[data-effect-difference]')}`,
    `${ui.cohensD}: ${get('[data-effect-d]')} (${ui.confidenceInterval}: ${get('[data-effect-d-ci]')})`,
    `${ui.hedgesG}: ${get('[data-effect-g]')} (${ui.confidenceInterval}: ${get('[data-effect-g-ci]')})`,
    `${ui.magnitude}: ${get('[data-effect-magnitude]')}`,
    `${ui.direction}: ${get('[data-effect-direction]')}`,
  ].join('\n');
};
