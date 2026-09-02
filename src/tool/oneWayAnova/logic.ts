export interface AnovaGroupInput {
  label: string;
  values: number[];
}

export interface GroupSummary {
  label: string;
  n: number;
  mean: number;
  standardDeviation: number;
  values: number[];
}

export interface AnovaRow {
  source: 'between' | 'within' | 'total';
  sumOfSquares: number;
  degreesOfFreedom: number;
  meanSquare: number | null;
  fStatistic: number | null;
  pValue: number | null;
}

export interface AnovaResult {
  groups: GroupSummary[];
  totalN: number;
  grandMean: number;
  between: AnovaRow;
  within: AnovaRow;
  total: AnovaRow;
  etaSquared: number;
  pValue: number;
  significant: boolean;
  alpha: number;
}

export interface AnovaValidationError {
  code: 'groups' | 'values' | 'invalid-values';
  groupIndex?: number;
}

export type AnovaCalculation = { ok: true; result: AnovaResult } | { ok: false; error: AnovaValidationError };

const LANCZOS = [
  0.9999999999998099,
  676.5203681218851,
  -1259.1392167224028,
  771.3234287776531,
  -176.6150291621406,
  12.507343278686905,
  -0.13857109526572012,
  9.984369578019572e-6,
  1.5056327351493116e-7,
];

function logGamma(value: number): number {
  if (value < 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * value)) - logGamma(1 - value);
  const shifted = value - 1;
  let series = LANCZOS[0] ?? 0;
  for (let index = 1; index < LANCZOS.length; index += 1) series += (LANCZOS[index] ?? 0) / (shifted + index);
  const t = shifted + LANCZOS.length - 1.5;
  return 0.5 * Math.log(2 * Math.PI) + (shifted + 0.5) * Math.log(t) - t + Math.log(series);
}

function continuedFraction(a: number, b: number, x: number): number {
  const maxIterations = 200;
  const epsilon = 3e-14;
  const tiny = 1e-300;
  let c = 1;
  let d = 1 - ((a + b) * x) / (a + 1);
  if (Math.abs(d) < tiny) d = tiny;
  d = 1 / d;
  let result = d;
  for (let index = 1; index <= maxIterations; index += 1) {
    const m = index * 2;
    let numerator = (index * (b - index) * x) / ((a + m - 1) * (a + m));
    d = 1 + numerator * d;
    if (Math.abs(d) < tiny) d = tiny;
    c = 1 + numerator / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    result *= d * c;
    numerator = -((a + index) * (a + b + index) * x) / ((a + m) * (a + m + 1));
    d = 1 + numerator * d;
    if (Math.abs(d) < tiny) d = tiny;
    c = 1 + numerator / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    const delta = d * c;
    result *= delta;
    if (Math.abs(delta - 1) < epsilon) break;
  }
  return result;
}

function regularizedBeta(x: number, a: number, b: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const factor = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  if (x < (a + 1) / (a + b + 2)) return (factor * continuedFraction(a, b, x)) / a;
  return 1 - (factor * continuedFraction(b, a, 1 - x)) / b;
}

export function fSurvivalProbability(fStatistic: number, numeratorDf: number, denominatorDf: number): number {
  if (!Number.isFinite(fStatistic)) return 0;
  if (fStatistic <= 0) return 1;
  const x = denominatorDf / (denominatorDf + numeratorDf * fStatistic);
  return Math.min(1, Math.max(0, regularizedBeta(x, denominatorDf / 2, numeratorDf / 2)));
}

function standardDeviation(values: number[], mean: number): number {
  if (values.length < 2) return 0;
  const sum = values.reduce((total, value) => total + (value - mean) ** 2, 0);
  return Math.sqrt(sum / (values.length - 1));
}

function validateAlphaAndCount(groups: AnovaGroupInput[], alpha: number): AnovaValidationError | null {
  if (!Number.isFinite(alpha) || alpha <= 0 || alpha >= 1 || groups.length < 3) return { code: 'groups' };
  return null;
}

function validateGroupValues(groups: AnovaGroupInput[]): AnovaValidationError | null {
  for (let index = 0; index < groups.length; index += 1) {
    const group = groups[index];
    if (!group || group.values.length < 2) return { code: 'values', groupIndex: index };
    if (group.values.some((value) => !Number.isFinite(value))) return { code: 'invalid-values', groupIndex: index };
  }
  return null;
}

function summarizeGroups(groups: AnovaGroupInput[]): GroupSummary[] {
  const summaries = groups.map(({ label, values }) => {
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    return { label: label.trim() || 'Group', n: values.length, mean, standardDeviation: standardDeviation(values, mean), values: [...values] };
  });
  return summaries;
}

function safeFStatistic(betweenMs: number, withinMs: number): number {
  if (withinMs !== 0) return betweenMs / withinMs;
  return betweenMs === 0 ? 0 : Number.POSITIVE_INFINITY;
}

function calculateSums(groups: AnovaGroupInput[], summaries: GroupSummary[], grandMean: number): { between: number; within: number } {
  const between = summaries.reduce((sum, group) => sum + group.n * (group.mean - grandMean) ** 2, 0);
  const within = groups.reduce((sum, group, index) => sum + group.values.reduce((inner, value) => inner + (value - (summaries[index]?.mean ?? 0)) ** 2, 0), 0);
  return { between, within };
}

export function calculateOneWayAnova(groups: AnovaGroupInput[], alpha = 0.05): AnovaCalculation {
  const validationError = validateAlphaAndCount(groups, alpha) ?? validateGroupValues(groups);
  if (validationError) return { ok: false, error: validationError };
  const summaries = summarizeGroups(groups);
  const totalN = summaries.reduce((sum, group) => sum + group.n, 0);
  const grandMean = summaries.reduce((sum, group) => sum + group.n * group.mean, 0) / totalN;
  const sums = calculateSums(groups, summaries, grandMean);
  const ssTotal = sums.between + sums.within;
  const betweenDf = groups.length - 1;
  const withinDf = totalN - groups.length;
  const betweenMs = sums.between / betweenDf;
  const withinMs = sums.within / withinDf;
  const fStatistic = safeFStatistic(betweenMs, withinMs);
  const pValue = fSurvivalProbability(fStatistic, betweenDf, withinDf);

  return {
    ok: true,
    result: {
      groups: summaries,
      totalN,
      grandMean,
      between: { source: 'between', sumOfSquares: sums.between, degreesOfFreedom: betweenDf, meanSquare: betweenMs, fStatistic, pValue },
      within: { source: 'within', sumOfSquares: sums.within, degreesOfFreedom: withinDf, meanSquare: withinMs, fStatistic: null, pValue: null },
      total: { source: 'total', sumOfSquares: ssTotal, degreesOfFreedom: totalN - 1, meanSquare: null, fStatistic: null, pValue: null },
      etaSquared: ssTotal === 0 ? 0 : sums.between / ssTotal,
      pValue,
      significant: pValue < alpha,
      alpha,
    },
  };
}
