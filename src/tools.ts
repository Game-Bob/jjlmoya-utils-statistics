import type { ToolDefinition } from './types';
import { CHI_SQUARE_TOOL } from './tool/chiSquare/index';
import { AB_TEST_TOOL } from './tool/abTest/index';
import { SAMPLE_SIZE_TOOL } from './tool/sampleSize/index';
import { PEARSON_CORRELATION_TOOL } from './tool/pearsonCorrelation/index';

export const ALL_TOOLS: ToolDefinition[] = [CHI_SQUARE_TOOL, AB_TEST_TOOL, SAMPLE_SIZE_TOOL, PEARSON_CORRELATION_TOOL];

