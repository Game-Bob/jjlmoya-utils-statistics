export interface EffectSizeInput {
  meanA: number;
  standardDeviationA: number;
  sampleSizeA: number;
  meanB: number;
  standardDeviationB: number;
  sampleSizeB: number;
}

export interface ConfidenceInterval {
  low: number;
  high: number;
}

export type EffectMagnitude = 'very-small' | 'small' | 'medium' | 'large';
export type EffectDirection = 'higher' | 'lower' | 'equal';

export interface EffectSizeResult {
  difference: number;
  pooledStandardDeviation: number;
  degreesOfFreedom: number;
  cohensD: number;
  hedgesG: number;
  correction: number;
  standardErrorD: number;
  standardErrorG: number;
  cohensInterval: ConfidenceInterval;
  hedgesInterval: ConfidenceInterval;
  magnitude: EffectMagnitude;
  direction: EffectDirection;
  intervalCrossesZero: boolean;
}

const Z_95 = 1.96;

export const validateInput = (input: EffectSizeInput): boolean => {
  const values = Object.values(input);
  return values.every(Number.isFinite)
    && input.standardDeviationA > 0
    && input.standardDeviationB > 0
    && input.sampleSizeA >= 2
    && input.sampleSizeB >= 2;
};

const classifyMagnitude = (value: number): EffectMagnitude => {
  const absolute = Math.abs(value);
  if (absolute < 0.2) return 'very-small';
  if (absolute < 0.5) return 'small';
  if (absolute < 0.8) return 'medium';
  return 'large';
};

const makeInterval = (value: number, standardError: number): ConfidenceInterval => ({
  low: value - Z_95 * standardError,
  high: value + Z_95 * standardError,
});

const calculateIntervals = (cohensD: number, correction: number, input: EffectSizeInput, degreesOfFreedom: number) => {
  const varianceD = (input.sampleSizeA + input.sampleSizeB) / (input.sampleSizeA * input.sampleSizeB)
    + cohensD ** 2 / (2 * (input.sampleSizeA + input.sampleSizeB));
  const standardErrorD = Math.sqrt(varianceD);
  const standardErrorG = correction * standardErrorD;
  return {
    standardErrorD,
    standardErrorG,
    cohensInterval: makeInterval(cohensD, standardErrorD),
    hedgesInterval: makeInterval(correction * cohensD, standardErrorG),
    degreesOfFreedom,
  };
};

const getDirection = (difference: number): EffectDirection => {
  if (difference > 0) return 'higher';
  if (difference < 0) return 'lower';
  return 'equal';
};

export const calculateEffectSize = (input: EffectSizeInput): EffectSizeResult | null => {
  if (!validateInput(input)) return null;
  const degreesOfFreedom = input.sampleSizeA + input.sampleSizeB - 2;
  const pooledVariance = ((input.sampleSizeA - 1) * input.standardDeviationA ** 2
    + (input.sampleSizeB - 1) * input.standardDeviationB ** 2) / degreesOfFreedom;
  const pooledStandardDeviation = Math.sqrt(pooledVariance);
  if (!Number.isFinite(pooledStandardDeviation) || pooledStandardDeviation <= 0) return null;
  const difference = input.meanA - input.meanB;
  const cohensD = difference / pooledStandardDeviation;
  const correction = 1 - 3 / (4 * degreesOfFreedom - 1);
  const hedgesG = correction * cohensD;
  const intervals = calculateIntervals(cohensD, correction, input, degreesOfFreedom);
  return {
    difference,
    pooledStandardDeviation,
    degreesOfFreedom: intervals.degreesOfFreedom,
    cohensD,
    hedgesG,
    correction,
    standardErrorD: intervals.standardErrorD,
    standardErrorG: intervals.standardErrorG,
    cohensInterval: intervals.cohensInterval,
    hedgesInterval: intervals.hedgesInterval,
    magnitude: classifyMagnitude(cohensD),
    direction: getDirection(difference),
    intervalCrossesZero: intervals.hedgesInterval.low <= 0 && intervals.hedgesInterval.high >= 0,
  };
};
