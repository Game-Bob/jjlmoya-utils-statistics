import type { ToolDefinition } from './types';
import { CHI_SQUARE_TOOL } from './tool/chiSquare/index';
import { AB_TEST_TOOL } from './tool/abTest/index';
import { SAMPLE_SIZE_TOOL } from './tool/sampleSize/index';
import { PEARSON_CORRELATION_TOOL } from './tool/pearsonCorrelation/index';
import { DESCRIPTIVE_STATS_TOOL } from './tool/descriptiveStats/index';
import { NORMAL_DISTRIBUTION_TOOL } from './tool/normalDistribution/index';
import { CONFIDENCE_INTERVAL_TOOL } from './tool/confidenceInterval/index';

export const ALL_TOOLS: ToolDefinition[] = [CHI_SQUARE_TOOL, AB_TEST_TOOL, SAMPLE_SIZE_TOOL, PEARSON_CORRELATION_TOOL, DESCRIPTIVE_STATS_TOOL, NORMAL_DISTRIBUTION_TOOL, CONFIDENCE_INTERVAL_TOOL];


export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
