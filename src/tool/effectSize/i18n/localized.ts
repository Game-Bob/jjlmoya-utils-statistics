import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';
import { bibliography } from '../bibliography';
import type { EffectSizeUI } from '../ui';

interface LocaleCopy {
  language: string;
  slug: string;
  title: string;
  description: string;
  faq: FAQItem[];
  howTo: HowToStep[];
  introTitle: string;
  introOne: string;
  introTwo: string;
  calculationTitle: string;
  tableHeaders: [string, string];
  tableRows: Array<[string, string]>;
  directionTitle: string;
  direction: string;
  actions: string[];
  thresholdTitle: string;
  threshold: string;
  precisionTitle: string;
  precision: string;
  glossaryTitle: string;
  glossary: Array<[string, string]>;
  limitsTitle: string;
  limits: string;
  ui: EffectSizeUI;
}

const buildSchemas = (copy: LocaleCopy): WithContext<FAQPage | HowTo | SoftwareApplication>[] => {
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
    inLanguage: copy.language,
  };
  return [faqSchema, howToSchema, appSchema];
};

const buildSeo = (copy: LocaleCopy): SEOSection[] => [
  { type: 'title', level: 2, text: copy.introTitle },
  { type: 'paragraph', html: copy.introOne },
  { type: 'paragraph', html: copy.introTwo },
  { type: 'title', level: 2, text: copy.calculationTitle },
  { type: 'table', headers: copy.tableHeaders, rows: copy.tableRows.map(([output, reading]) => [`<strong>${output}</strong>`, reading]) },
  { type: 'title', level: 2, text: copy.directionTitle },
  { type: 'paragraph', html: copy.direction },
  { type: 'list', items: copy.actions },
  { type: 'tip', title: copy.thresholdTitle, html: copy.threshold },
  { type: 'title', level: 2, text: copy.precisionTitle },
  { type: 'paragraph', html: copy.precision },
  { type: 'glossary', items: copy.glossary.map(([term, definition]) => ({ term, definition })) },
  { type: 'title', level: 2, text: copy.limitsTitle },
  { type: 'paragraph', html: copy.limits },
];

export const makeEffectContent = (copy: LocaleCopy): ToolLocaleContent<EffectSizeUI> => ({
  slug: copy.slug,
  title: copy.title,
  description: copy.description,
  ui: copy.ui,
  seo: buildSeo(copy),
  faq: copy.faq,
  bibliography,
  howTo: copy.howTo,
  schemas: buildSchemas(copy),
});
