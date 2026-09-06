export type PercentileMethod = 'below' | 'atOrBelow' | 'midrank';

export interface PercentileRankUI extends Record<string, string> {
  labelTitle: string;
  labelData: string;
  placeholderData: string;
  hintData: string;
  labelTarget: string;
  placeholderTarget: string;
  labelMethod: string;
  methodBelow: string;
  methodAtOrBelow: string;
  methodMidrank: string;
  methodHelp: string;
  btnExample: string;
  btnClear: string;
  resultEyebrow: string;
  resultPercentile: string;
  resultPosition: string;
  positionOf: string;
  labelBelow: string;
  labelEqual: string;
  labelAbove: string;
  labelLowerNeighbor: string;
  labelUpperNeighbor: string;
  labelTieRange: string;
  labelSortedSample: string;
  plotStart: string;
  plotEnd: string;
  emptyPlot: string;
  errorData: string;
  errorTarget: string;
  invalidNotice: string;
  resultExplanation: string;
  labelReport: string;
  btnCopy: string;
  btnCopied: string;
}
