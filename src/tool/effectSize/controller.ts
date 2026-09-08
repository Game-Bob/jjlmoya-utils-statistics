import { calculateEffectSize, type EffectSizeInput } from './logic';
import { buildSummary, renderEffectResult } from './dom-views';
import { readEffectSizeInput, writeEffectSizeInput } from './storage';
import type { EffectSizeUI } from './ui';

const DEFAULT_INPUT: EffectSizeInput = { meanA: 72, standardDeviationA: 9, sampleSizeA: 32, meanB: 65, standardDeviationB: 10, sampleSizeB: 30 };

const readInput = (root: HTMLElement): EffectSizeInput => ({
  meanA: Number(root.querySelector<HTMLInputElement>('[name="mean-a"]')?.value),
  standardDeviationA: Number(root.querySelector<HTMLInputElement>('[name="sd-a"]')?.value),
  sampleSizeA: Number(root.querySelector<HTMLInputElement>('[name="n-a"]')?.value),
  meanB: Number(root.querySelector<HTMLInputElement>('[name="mean-b"]')?.value),
  standardDeviationB: Number(root.querySelector<HTMLInputElement>('[name="sd-b"]')?.value),
  sampleSizeB: Number(root.querySelector<HTMLInputElement>('[name="n-b"]')?.value),
});

const writeInput = (root: HTMLElement, input: EffectSizeInput): void => {
  const values: Record<string, number> = { 'mean-a': input.meanA, 'sd-a': input.standardDeviationA, 'n-a': input.sampleSizeA, 'mean-b': input.meanB, 'sd-b': input.standardDeviationB, 'n-b': input.sampleSizeB };
  Object.entries(values).forEach(([name, value]) => {
    const field = root.querySelector<HTMLInputElement>(`[name="${name}"]`);
    if (field) field.value = String(value);
  });
};

const calculate = (root: HTMLElement, ui: EffectSizeUI): void => {
  const input = readInput(root);
  writeEffectSizeInput(input);
  renderEffectResult(root, calculateEffectSize(input), ui);
};

const clear = (root: HTMLElement, ui: EffectSizeUI): void => {
  root.querySelectorAll<HTMLInputElement>('input').forEach((field) => { field.value = ''; });
  renderEffectResult(root, null, ui);
};

const copySummary = async (root: HTMLElement, ui: EffectSizeUI): Promise<void> => {
  try {
    await navigator.clipboard.writeText(buildSummary(root, ui));
    const status = root.querySelector<HTMLElement>('[data-effect-status]');
    if (status) status.textContent = ui.statusCopied;
  } catch {}
};

export const mountEffectSize = (root: HTMLElement, ui: EffectSizeUI): void => {
  writeInput(root, readEffectSizeInput(DEFAULT_INPUT));
  calculate(root, ui);
  root.addEventListener('input', () => calculate(root, ui));
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const action = target.closest<HTMLElement>('[data-effect-action]')?.dataset.effectAction;
    if (action === 'example') { writeInput(root, DEFAULT_INPUT); calculate(root, ui); }
    if (action === 'clear') clear(root, ui);
    if (action === 'copy') void copySummary(root, ui);
  });
};
