import type { EffectSizeInput } from './logic';

const STORAGE_KEY = 'jjlmoya-effect-size-input';

export const readEffectSizeInput = (fallback: EffectSizeInput): EffectSizeInput => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<EffectSizeInput>;
    const input = { ...fallback, ...parsed };
    return Object.values(input).every(Number.isFinite) ? input as EffectSizeInput : fallback;
  } catch {
    return fallback;
  }
};

export const writeEffectSizeInput = (input: EffectSizeInput): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
};
