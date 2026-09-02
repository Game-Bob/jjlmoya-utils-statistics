import type { OneWayAnovaUI } from './ui';
import type { AnovaResult } from './logic';
import type { AnovaEvaluation } from './evaluator';

function formatNumber(value: number, digits = 3): string {
  if (!Number.isFinite(value)) return '∞';
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: digits }).format(value);
}

function formatProbability(value: number): string {
  if (value === 0) return '< 0.001';
  if (value < 0.001) return '< 0.001';
  return formatNumber(value, 4);
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const target = root.querySelector<HTMLElement>(selector);
  if (target) target.textContent = value;
}

function renderRows(root: HTMLElement, result: AnovaResult, ui: OneWayAnovaUI): void {
  const table = root.querySelector<HTMLTableSectionElement>('[data-anova-rows]');
  if (!table) return;
  table.replaceChildren();
  const rows = [
    [ui.betweenGroups, result.between],
    [ui.withinGroups, result.within],
    [ui.total, result.total],
  ] as const;
  rows.forEach(([label, row]) => {
    const tr = document.createElement('tr');
    [label, formatNumber(row.sumOfSquares), String(row.degreesOfFreedom), row.meanSquare === null ? '...' : formatNumber(row.meanSquare), row.fStatistic === null ? '...' : formatNumber(row.fStatistic), row.pValue === null ? '...' : formatProbability(row.pValue)].forEach((value, index) => {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
      cell.textContent = value;
      if (index === 0) cell.scope = 'row';
      tr.append(cell);
    });
    table.append(tr);
  });
}

function renderGroupSummary(root: HTMLElement, result: AnovaResult, ui: OneWayAnovaUI): void {
  const summary = root.querySelector<HTMLElement>('[data-group-summary]');
  if (!summary) return;
  summary.replaceChildren();
  result.groups.forEach((group) => {
    const row = document.createElement('div');
    row.className = 'anova-group-summary-row';
    [group.label, String(group.n), formatNumber(group.mean), formatNumber(group.standardDeviation)].forEach((value, index) => {
      const cell = document.createElement('span');
      cell.textContent = value;
      cell.setAttribute('data-label', [ui.labelGroupName, ui.labelN, ui.labelMean, ui.labelSD][index] ?? '');
      row.append(cell);
    });
    summary.append(row);
  });
}

function renderVariation(root: HTMLElement, result: AnovaResult, ui: OneWayAnovaUI): void {
  const total = result.total.sumOfSquares || 1;
  const between = (result.between.sumOfSquares / total) * 100;
  const within = (result.within.sumOfSquares / total) * 100;
  renderVariationBars(root, between, within);
  renderVariationMetrics(root, result, { between, within }, ui);
  renderGroupPlot(root, result, ui);
}

function renderVariationBars(root: HTMLElement, between: number, within: number): void {
  const betweenBar = root.querySelector<HTMLElement>('[data-between-bar]');
  const withinBar = root.querySelector<HTMLElement>('[data-within-bar]');
  if (betweenBar) betweenBar.style.width = `${between}%`;
  if (withinBar) withinBar.style.width = `${within}%`;
}

function renderVariationMetrics(root: HTMLElement, result: AnovaResult, percentages: { between: number; within: number }, ui: OneWayAnovaUI): void {
  setText(root, '[data-between-percent]', `${formatNumber(percentages.between, 1)}%`);
  setText(root, '[data-within-percent]', `${formatNumber(percentages.within, 1)}%`);
  setText(root, '[data-between-value]', formatNumber(result.between.sumOfSquares));
  setText(root, '[data-within-value]', formatNumber(result.within.sumOfSquares));
  setText(root, '[data-grand-mean]', formatNumber(result.grandMean));
  setText(root, '[data-p-value]', formatProbability(result.pValue));
  setText(root, '[data-f-statistic]', formatNumber(result.between.fStatistic ?? 0));
  setText(root, '[data-eta-squared]', formatNumber(result.etaSquared, 3));
  setText(root, '[data-result-state]', result.significant ? ui.significant : ui.notSignificant);
  setText(root, '[data-significant-copy]', result.significant ? ui.interpretationSignificant : ui.interpretationNotSignificant);
  const report = `${ui.reportIntro} ${result.totalN} ${ui.reportBetween} ${formatNumber(result.between.fStatistic ?? 0)} F ${ui.reportWith} ${formatProbability(result.pValue)} ${ui.reportAt} ${formatNumber(result.alpha, 2)}. ${result.significant ? ui.reportSignificant : ui.reportNotSignificant}`;
  setText(root, '[data-report]', report);
  root.setAttribute('data-significant', String(result.significant));
}

interface PlotScale {
  min: number;
  max: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

function createSvgNode<K extends keyof SVGElementTagNameMap>(tag: K): SVGElementTagNameMap[K] {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function addSvgText(svg: SVGSVGElement, settings: { text: string; x: number; y: number; className: string; anchor?: string }): void {
  const text = createSvgNode('text');
  text.textContent = settings.text;
  text.setAttribute('x', String(settings.x));
  text.setAttribute('y', String(settings.y));
  text.setAttribute('class', settings.className);
  text.setAttribute('text-anchor', settings.anchor ?? 'start');
  svg.append(text);
}

function addSvgLine(svg: SVGSVGElement, settings: { x1: number; y1: number; x2: number; y2: number; className: string }): void {
  const line = createSvgNode('line');
  Object.entries(settings).forEach(([key, value]) => {
    if (key !== 'className') line.setAttribute(key, String(value));
  });
  line.setAttribute('class', settings.className);
  svg.append(line);
}

function plotScale(result: AnovaResult): PlotScale {
  const values = result.groups.flatMap((group) => group.values);
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const padding = Math.max((rawMax - rawMin) * 0.12, 1);
  const min = rawMin - padding;
  const max = rawMax + padding;
  return { min, max, left: 52, right: 660, top: 28, bottom: 226 };
}

function plotY(value: number, scale: PlotScale): number {
  return scale.bottom - ((value - scale.min) / (scale.max - scale.min)) * (scale.bottom - scale.top);
}

function renderPlotGrid(svg: SVGSVGElement, scale: PlotScale, result: AnovaResult, ui: OneWayAnovaUI): void {
  const grandY = plotY(result.grandMean, scale);
  addSvgLine(svg, { x1: scale.left, y1: grandY, x2: scale.right, y2: grandY, className: 'anova-plot-grand-line' });
  addSvgText(svg, { text: ui.labelGrandMean, x: scale.right, y: grandY - 7, className: 'anova-plot-grand-label', anchor: 'end' });
  for (let index = 0; index <= 4; index += 1) {
    const value = scale.min + ((scale.max - scale.min) * index) / 4;
    const y = plotY(value, scale);
    addSvgLine(svg, { x1: scale.left, y1: y, x2: scale.right, y2: y, className: 'anova-plot-grid-line' });
    addSvgText(svg, { text: formatNumber(value, 1), x: scale.left - 10, y: y + 4, className: 'anova-plot-axis-label', anchor: 'end' });
  }
}

function renderPlotGroup(svg: SVGSVGElement, group: AnovaResult['groups'][number], groupIndex: number, layout: { scale: PlotScale; totalGroups: number }): void {
  const { scale, totalGroups } = layout;
  const x = scale.left + ((scale.right - scale.left) * (groupIndex + 0.5)) / totalGroups;
  const meanY = plotY(group.mean, scale);
  const whiskerTop = plotY(group.mean + group.standardDeviation, scale);
  const whiskerBottom = plotY(group.mean - group.standardDeviation, scale);
  addSvgLine(svg, { x1: x, y1: whiskerTop, x2: x, y2: whiskerBottom, className: 'anova-plot-whisker' });
  for (let valueIndex = 0; valueIndex < group.values.length; valueIndex += 1) {
    const value = group.values[valueIndex] ?? group.mean;
    const dot = createSvgNode('circle');
    const jitter = ((valueIndex % 3) - 1) * 7;
    dot.setAttribute('cx', String(x + jitter));
    dot.setAttribute('cy', String(plotY(value, scale)));
    dot.setAttribute('r', '4');
    dot.setAttribute('class', 'anova-plot-observation');
    svg.append(dot);
  }
  const ring = createSvgNode('circle');
  ring.setAttribute('cx', String(x));
  ring.setAttribute('cy', String(meanY));
  ring.setAttribute('r', '8');
  ring.setAttribute('class', 'anova-plot-mean');
  svg.append(ring);
  addSvgText(svg, { text: group.label, x, y: scale.bottom + 28, className: 'anova-plot-group-label', anchor: 'middle' });
  addSvgText(svg, { text: formatNumber(group.mean), x, y: meanY - 14, className: 'anova-plot-mean-label', anchor: 'middle' });
}

function renderGroupPlot(root: HTMLElement, result: AnovaResult, ui: OneWayAnovaUI): void {
  const svg = root.querySelector<SVGSVGElement>('[data-group-plot]');
  if (!svg) return;
  svg.replaceChildren();
  const title = createSvgNode('title');
  title.textContent = ui.labelGroupPlot;
  svg.append(title);
  const description = createSvgNode('desc');
  description.textContent = ui.plotDescription;
  svg.append(description);
  const scale = plotScale(result);
  renderPlotGrid(svg, scale, result, ui);
  result.groups.forEach((group, index) => renderPlotGroup(svg, group, index, { scale, totalGroups: result.groups.length }));
}

export function renderAnovaResult(root: HTMLElement, result: AnovaResult, evaluation: AnovaEvaluation, ui: OneWayAnovaUI): void {
  root.querySelector<HTMLElement>('[data-empty]')?.setAttribute('hidden', '');
  root.querySelector<HTMLElement>('[data-results]')?.removeAttribute('hidden');
  renderRows(root, result, ui);
  renderGroupSummary(root, result, ui);
  renderVariation(root, result, ui);
  const warnings = root.querySelector<HTMLElement>('[data-warnings]');
  if (warnings) {
    warnings.replaceChildren();
    const warningText: Record<string, string> = {
      'small-samples': ui.warningSmallSamples,
      unbalanced: ui.warningUnbalanced,
      'zero-error': ui.warningZeroError,
    };
    evaluation.warnings.forEach((warning) => {
      const item = document.createElement('li');
      item.textContent = warningText[warning] ?? warning;
      warnings.append(item);
    });
    warnings.toggleAttribute('hidden', evaluation.warnings.length === 0);
  }
}

export function renderAnovaError(root: HTMLElement, message: string): void {
  const error = root.querySelector<HTMLElement>('[data-error]');
  if (!error) return;
  error.textContent = message;
  error.removeAttribute('hidden');
  root.querySelector<HTMLElement>('[data-results]')?.setAttribute('hidden', '');
  root.querySelector<HTMLElement>('[data-empty]')?.setAttribute('hidden', '');
}

export function clearAnovaFeedback(root: HTMLElement): void {
  root.querySelector<HTMLElement>('[data-error]')?.setAttribute('hidden', '');
}
