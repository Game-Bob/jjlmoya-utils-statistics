import type { StatisticsToolEntry } from '../../types';
import type { PercentileRankUI } from './ui';

export type { PercentileRankUI };

const englishContent = () => import('./i18n/en').then((module) => module.content);
const germanContent = () => import('./i18n/de').then((module) => module.content);
const spanishContent = () => import('./i18n/es').then((module) => module.content);
const frenchContent = () => import('./i18n/fr').then((module) => module.content);
const indonesianContent = () => import('./i18n/id').then((module) => module.content);
const italianContent = () => import('./i18n/it').then((module) => module.content);
const japaneseContent = () => import('./i18n/ja').then((module) => module.content);
const koreanContent = () => import('./i18n/ko').then((module) => module.content);
const dutchContent = () => import('./i18n/nl').then((module) => module.content);
const polishContent = () => import('./i18n/pl').then((module) => module.content);
const portugueseContent = () => import('./i18n/pt').then((module) => module.content);
const russianContent = () => import('./i18n/ru').then((module) => module.content);
const swedishContent = () => import('./i18n/sv').then((module) => module.content);
const turkishContent = () => import('./i18n/tr').then((module) => module.content);
const chineseContent = () => import('./i18n/zh').then((module) => module.content);

export const percentileRank: StatisticsToolEntry<PercentileRankUI> = {
  id: 'percentile-rank',
  icons: {
    bg: 'mdi:chart-bell-curve-cumulative',
    fg: 'mdi:format-list-numbered',
  },
  i18n: {
    de: germanContent,
    en: englishContent,
    es: spanishContent,
    fr: frenchContent,
    id: indonesianContent,
    it: italianContent,
    ja: japaneseContent,
    ko: koreanContent,
    nl: dutchContent,
    pl: polishContent,
    pt: portugueseContent,
    ru: russianContent,
    sv: swedishContent,
    tr: turkishContent,
    zh: chineseContent,
  },
};
