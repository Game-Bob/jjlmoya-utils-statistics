import type { FAQItem, HowToStep, BibliographyEntry, ToolLocaleContent, SEOSection } from '../../types';
import type { PercentileRankUI } from './ui';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

type SeoCopy = {
  titles: [string, string, string, string];
  paragraphs: [string, string, string];
  stats: [string, string, string];
  tableHeaders: [string, string];
  tableRows: [string, string][];
  tipTitle: string;
  tipHtml: string;
  glossary: [string, string][];
};

export interface LocaleCopy {
  slug: string;
  title: string;
  description: string;
  ui: PercentileRankUI;
  faq: FAQItem[];
  howTo: HowToStep[];
  bibliography: BibliographyEntry[];
  seo: SeoCopy;
}

export const makeFaq = (items: [string, string][]): FAQItem[] => items.map(([question, answer]) => ({ question, answer }));
export const makeHowTo = (items: [string, string][]): HowToStep[] => items.map(([name, text]) => ({ name, text }));

const UI_KEYS: (keyof PercentileRankUI)[] = [
  'labelTitle', 'labelData', 'placeholderData', 'hintData', 'labelTarget', 'placeholderTarget', 'labelMethod',
  'methodBelow', 'methodAtOrBelow', 'methodMidrank', 'methodHelp', 'btnExample', 'btnClear', 'resultEyebrow',
  'resultPercentile', 'resultPosition', 'positionOf', 'labelBelow', 'labelEqual', 'labelAbove', 'labelLowerNeighbor',
  'labelUpperNeighbor', 'labelTieRange', 'labelSortedSample', 'plotStart', 'plotEnd', 'emptyPlot', 'errorData',
  'errorTarget', 'invalidNotice', 'resultExplanation', 'labelReport', 'btnCopy', 'btnCopied',
];

export const makeUi = (values: readonly string[]): PercentileRankUI => Object.fromEntries(
  UI_KEYS.map((key, index) => [key, values[index] ?? '']),
) as PercentileRankUI;

function buildSchemas(copy: LocaleCopy): WithContext<FAQPage | HowTo | SoftwareApplication>[] {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: copy.description,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  return [faqSchema, howToSchema, appSchema];
}

function buildSeo(copy: SeoCopy): SEOSection[] {
  return [
    { type: 'title' as const, level: 2, text: copy.titles[0] },
    { type: 'paragraph' as const, html: copy.paragraphs[0] },
    { type: 'stats' as const, columns: 3, items: [{ value: '3', label: copy.stats[0], icon: 'mdi:format-list-numbered' }, { value: '0', label: copy.stats[1], icon: 'mdi:shield-check-outline' }, { value: '1', label: copy.stats[2], icon: 'mdi:map-marker-radius-outline' }] },
    { type: 'title' as const, level: 2, text: copy.titles[1] },
    { type: 'table' as const, headers: copy.tableHeaders, rows: copy.tableRows },
    { type: 'tip' as const, title: copy.tipTitle, html: copy.tipHtml },
    { type: 'title' as const, level: 2, text: copy.titles[2] },
    { type: 'paragraph' as const, html: copy.paragraphs[1] },
    { type: 'glossary' as const, items: copy.glossary.map(([term, definition]) => ({ term, definition })) },
    { type: 'title' as const, level: 2, text: copy.titles[3] },
    { type: 'paragraph' as const, html: copy.paragraphs[2] },
  ];
}

export function createLocalizedContent(copy: LocaleCopy): ToolLocaleContent<PercentileRankUI> {
  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    faq: copy.faq,
    bibliography: copy.bibliography,
    howTo: copy.howTo,
    schemas: buildSchemas(copy),
    seo: buildSeo(copy.seo),
  };
}
