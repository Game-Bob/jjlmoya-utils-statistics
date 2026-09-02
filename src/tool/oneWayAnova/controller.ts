import { calculateOneWayAnova, type AnovaGroupInput } from './logic';
import { evaluateAnova } from './evaluator';
import { clearAnovaFeedback, renderAnovaError, renderAnovaResult } from './dom-views';
import { clearAnovaState, loadAnovaState, saveAnovaState } from './storage';
import type { OneWayAnovaUI } from './ui';

const defaultGroups: AnovaGroupInput[] = [
  { label: 'Group A', values: [5, 6, 7, 5, 6] },
  { label: 'Group B', values: [7, 8, 9, 8, 7] },
  { label: 'Group C', values: [9, 10, 11, 10, 9] },
];

function parseValues(value: string): number[] {
  return value.split(/[\s,;]+/).filter(Boolean).map(Number);
}

function readGroups(root: HTMLElement): AnovaGroupInput[] {
  return [...root.querySelectorAll<HTMLElement>('[data-group]')].map((group) => ({
    label: group.querySelector<HTMLInputElement>('[data-group-label]')?.value ?? '',
    values: parseValues(group.querySelector<HTMLTextAreaElement>('[data-group-values]')?.value ?? ''),
  }));
}

function renderGroupField(root: HTMLElement, ui: OneWayAnovaUI, index: number, group: AnovaGroupInput): void {
  const template = root.querySelector<HTMLTemplateElement>('[data-group-template]');
  const list = root.querySelector<HTMLElement>('[data-group-list]');
  if (!template || !list) return;
  const fragment = template.content.cloneNode(true) as DocumentFragment;
  const field = fragment.querySelector<HTMLElement>('[data-group]');
  if (!field) return;
  field.dataset.index = String(index);
  field.querySelector<HTMLElement>('[data-group-number]')!.textContent = String(index + 1).padStart(2, '0');
  const label = field.querySelector<HTMLInputElement>('[data-group-label]');
  const values = field.querySelector<HTMLTextAreaElement>('[data-group-values]');
  if (label) label.value = group.label;
  if (values) values.value = group.values.join(', ');
  field.querySelector<HTMLButtonElement>('[data-remove-group]')?.addEventListener('click', () => {
    if (root.querySelectorAll('[data-group]').length <= 3) return;
    field.remove();
    calculateAndRender(root, ui);
  });
  list.append(fragment);
}

function setGroups(root: HTMLElement, ui: OneWayAnovaUI, groups: AnovaGroupInput[]): void {
  root.querySelector('[data-group-list]')?.replaceChildren();
  groups.forEach((group, index) => renderGroupField(root, ui, index, group));
}

function errorMessage(code: string, ui: OneWayAnovaUI): string {
  if (code === 'values') return ui.errorNeedValues;
  if (code === 'invalid-values') return ui.errorInvalidValues;
  return ui.errorNeedGroups;
}

function calculateAndRender(root: HTMLElement, ui: OneWayAnovaUI): void {
  clearAnovaFeedback(root);
  const groups = readGroups(root);
  const alpha = Number(root.querySelector<HTMLInputElement>('[data-alpha]:checked')?.value ?? '0.05');
  const calculation = calculateOneWayAnova(groups, alpha);
  if (!calculation.ok) {
    renderAnovaError(root, errorMessage(calculation.error.code, ui));
    return;
  }
  renderAnovaResult(root, calculation.result, evaluateAnova(calculation.result, groups), ui);
  saveAnovaState({ groups, alpha });
}

function applyPreset(root: HTMLElement, ui: OneWayAnovaUI, preset: string): void {
  const presets: Record<string, AnovaGroupInput[]> = {
    balanced: [
      { label: 'Control', values: [12, 13, 11, 12, 14] },
      { label: 'Variant B', values: [13, 12, 14, 13, 12] },
      { label: 'Variant C', values: [12, 14, 13, 12, 13] },
    ],
    separated: [
      { label: 'Low dose', values: [5, 6, 7, 5, 6] },
      { label: 'Medium dose', values: [8, 9, 10, 8, 9] },
      { label: 'High dose', values: [11, 12, 13, 11, 12] },
    ],
    subtle: [
      { label: 'Morning', values: [10, 11, 9, 10, 11] },
      { label: 'Afternoon', values: [10, 10, 11, 9, 10] },
      { label: 'Evening', values: [11, 10, 10, 11, 10] },
    ],
  };
  setGroups(root, ui, presets[preset] ?? defaultGroups);
  calculateAndRender(root, ui);
}

function setupGroupControls(root: HTMLElement, ui: OneWayAnovaUI): void {
  root.querySelector('[data-add-group]')?.addEventListener('click', () => {
    const groups = readGroups(root);
    if (groups.length >= 8) return;
    groups.push({ label: `Group ${String.fromCharCode(65 + groups.length)}`, values: [0, 0] });
    setGroups(root, ui, groups);
    calculateAndRender(root, ui);
  });
}

function setupResultControls(root: HTMLElement, ui: OneWayAnovaUI): void {
  root.querySelectorAll<HTMLInputElement>('[data-alpha]').forEach((input) => input.addEventListener('change', () => calculateAndRender(root, ui)));
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => applyPreset(root, ui, button.dataset.preset ?? 'balanced')));
  root.querySelector('[data-analyze]')?.addEventListener('click', () => calculateAndRender(root, ui));
  root.querySelector('[data-reset]')?.addEventListener('click', () => { clearAnovaState(); setGroups(root, ui, defaultGroups); calculateAndRender(root, ui); });
}

function setupCopyControl(root: HTMLElement, ui: OneWayAnovaUI): void {
  root.querySelector<HTMLButtonElement>('[data-copy-report]')?.addEventListener('click', async (event) => {
    const report = root.querySelector<HTMLElement>('[data-report]')?.textContent ?? '';
    try { await navigator.clipboard.writeText(report); } catch {}
    const button = event.currentTarget as HTMLButtonElement;
    const original = button.textContent ?? ui.copyReport;
    button.textContent = ui.reportCopied;
    window.setTimeout(() => { button.textContent = original; }, 1600);
  });
}

function setupLiveCalculation(root: HTMLElement, ui: OneWayAnovaUI): void {
  root.addEventListener('input', (event) => { if ((event.target as HTMLElement).matches('[data-group-label], [data-group-values]')) calculateAndRender(root, ui); });
}

export function mountOneWayAnova(root: HTMLElement, ui: OneWayAnovaUI): void {
  const stored = loadAnovaState();
  setGroups(root, ui, stored?.groups?.length ? stored.groups : defaultGroups);
  const alpha = stored?.alpha ?? 0.05;
  const alphaInput = root.querySelector<HTMLInputElement>(`[data-alpha][value="${alpha}"]`);
  if (alphaInput) alphaInput.checked = true;
  setupGroupControls(root, ui);
  setupResultControls(root, ui);
  setupCopyControl(root, ui);
  setupLiveCalculation(root, ui);
  calculateAndRender(root, ui);
}
