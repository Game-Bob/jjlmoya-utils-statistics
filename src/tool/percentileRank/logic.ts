export type PercentileMethod = 'below' | 'atOrBelow' | 'midrank';

export interface ParsedValues {
  values: number[];
  invalidTokens: number;
}

export interface PercentileRankResult {
  sorted: number[];
  target: number;
  below: number;
  equal: number;
  above: number;
  percentile: number;
  rankStart: number;
  rankEnd: number;
  lowerNeighbor: number | null;
  upperNeighbor: number | null;
}

export function parseValues(raw: string): ParsedValues {
  const tokens = raw.split(/[\s,;]+/).map((token) => token.trim()).filter(Boolean);
  const values: number[] = [];
  let invalidTokens = 0;

  for (const token of tokens) {
    const value = Number(token);
    if (Number.isFinite(value)) values.push(value);
    else invalidTokens += 1;
  }

  return { values, invalidTokens };
}

function countLessThan(sorted: number[], target: number): number {
  let index = 0;
  while (index < sorted.length && sorted[index]! < target) index += 1;
  return index;
}

function countEqualTo(sorted: number[], target: number, start: number): number {
  let index = start;
  while (index < sorted.length && sorted[index] === target) index += 1;
  return index - start;
}

function calculatePercentile(below: number, equal: number, total: number, method: PercentileMethod): number {
  let numerator = below + equal / 2;
  if (method === 'below') numerator = below;
  if (method === 'atOrBelow') numerator = below + equal;
  return (numerator / total) * 100;
}

export function calculatePercentileRank(values: number[], target: number, method: PercentileMethod): PercentileRankResult {
  if (values.length === 0) throw new RangeError('At least one value is required');
  if (!Number.isFinite(target)) throw new RangeError('A finite target is required');

  const sorted = [...values].sort((a, b) => a - b);
  const below = countLessThan(sorted, target);
  const equal = countEqualTo(sorted, target, below);

  return {
    sorted,
    target,
    below,
    equal,
    above: sorted.length - below - equal,
    percentile: calculatePercentile(below, equal, sorted.length, method),
    rankStart: below + 1,
    rankEnd: below + Math.max(equal, 1),
    lowerNeighbor: below > 0 ? sorted[below - 1]! : null,
    upperNeighbor: below + equal < sorted.length ? sorted[below + equal]! : null,
  };
}
