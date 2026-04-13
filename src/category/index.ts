import type { StatisticsCategoryEntry } from '../types';
import { chiSquare } from '../tool/chiSquare/index';
import { abTest } from '../tool/abTest/index';
import { sampleSize } from '../tool/sampleSize/index';
import { pearsonCorrelation } from '../tool/pearsonCorrelation/index';

export const statisticsCategory: StatisticsCategoryEntry = {
  icon: 'mdi:chart-bar',
  tools: [chiSquare, abTest, sampleSize, pearsonCorrelation],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

