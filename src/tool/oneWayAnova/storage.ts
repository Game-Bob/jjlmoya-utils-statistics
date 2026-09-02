import type { AnovaGroupInput } from './logic';

export interface AnovaStoredState {
  groups: AnovaGroupInput[];
  alpha: number;
}

const storageKey = 'jjlmoya-statistics-one-way-anova';

export function loadAnovaState(): AnovaStoredState | null {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AnovaStoredState;
    if (!Array.isArray(parsed.groups) || !Number.isFinite(parsed.alpha)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveAnovaState(state: AnovaStoredState): void {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {}
}

export function clearAnovaState(): void {
  try {
    window.localStorage.removeItem(storageKey);
  } catch {}
}
