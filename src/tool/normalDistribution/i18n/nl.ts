import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'normale-verdeling-calculator';
const title = 'Normale verdeling calculator online';
const description =
  'Bereken direct kansen voor de normale verdeling: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) en de inverse normale verdeling. Voer het gemiddelde en de standaarddeviatie in en visualiseer de Gauss-klokcurve met het gearceerde gebied.';

const faqData = [
  {
    question: 'Wat is de normale verdeling?',
    answer:
      "De normale verdeling, of Gaussische klokcurve, is de belangrijkste continue kansverdeling in de statistiek. Deze wordt volledig bepaald door twee parameters: het gemiddelde (μ), dat het centrum bepaalt, en de standaarddeviatie (σ), die de spreiding regelt. De verdeling is symmetrisch rond het gemiddelde en de staarten strekken zich uit tot in het oneindige.",
  },
  {
    question: 'Hoe wordt de kans berekend?',
    answer:
      "De kans wordt verkregen door de kansdichtheidsfunctie (PDF) te integreren. Omdat er geen primitieve functie in gesloten vorm bestaat, wordt deze berekend met de foutfunctie (erf). Deze calculator gebruikt de zeer nauwkeurige Abramowitz en Stegun-benadering om accurate resultaten te produceren.",
  },
  {
    question: 'Wat is een z-score?',
    answer:
      'Een z-score (of standaardscore) geeft aan hoeveel standaarddeviaties een waarde van het gemiddelde verwijderd is: z = (X - μ) / σ. Dit maakt het mogelijk om waarden uit verdelingen met verschillende schalen te vergelijken. Een z-score van 1 betekent bijvoorbeeld dat X precies 1 standaarddeviatie boven het gemiddelde ligt.',
  },
  {
    question: 'Waarvoor wordt de inverse normale verdeling gebruikt?',
    answer:
      'De inverse normale verdeling beantwoordt de vraag: welke waarde X komt overeen met het p-de percentiel? Dat wil zeggen, gegeven P(X ≤ x) = p, vind x. Het wordt veel gebruikt in kwaliteitscontrole (tolerantiegrenzen), inferentiële statistiek (kritieke waarden) en simulatie van toevalsvariabelen.',
  },
];

const howToData = [
  {
    name: 'Voer de parameters in',
    text: 'Typ het gemiddelde (μ) en de standaarddeviatie (σ > 0) van uw normale verdeling. De standaard normale verdeling (μ=0, σ=1) wordt standaard gebruikt.',
  },
  {
    name: 'Kies het berekeningstype',
    text: 'Selecteer een modus: P(X ≤ a) voor de linkerstaart, P(X ≥ a) for de rechterstaart, P(a ≤ X ≤ b) voor een interval, of Inverse om de waarde X voor een gegeven percentiel te vinden.',
  },
  {
    name: 'Lees het resultaat en de grafiek',
    text: 'De kans wordt direct weergegeven, samen met de z-score. De Gaussische klokcurve toont het gearceerde gebied dat overeenkomt met de berekende kans.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    { name: 'Normale verdeling - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Normale_verdeling' },
    { name: 'Foutfunctie - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Foutfunctie' },
    { name: 'Abramowitz en Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Z-score - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Z-score' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Normale verdeling calculator: kansen in real time' },
    {
      type: 'paragraph',
      html: 'De <strong>Normale verdeling calculator</strong> berekent direct elke kans voor de normale verdeling: linkerstaart, rechterstaart, centraal interval en inverse. Voer eenvoudigweg het gemiddelde en de standaarddeviatie in om het resultaat te krijgen en dit te visualiseren op de Gauss-klokcurve.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Berekeningsmodi', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Real-time resultaten', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Geen registratie', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Berekeningsmodi' },
    {
      type: 'table',
      headers: ['Modus', 'Beschrijving', 'Voorbeeldgebruik'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Cumulatieve kans tot waarde a (linkerstaart).', 'Percentage studenten onder een bepaalde cijferdrempel.'],
        ['<strong>P(X ≥ a)</strong>', 'Kans vanaf waarde a naar rechts (rechterstaart).', 'Kans op het overschrijden van een kwaliteitsdrempel.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Kans binnen een centraal of asymmetrisch interval.', 'Aandeel onderdelen binnen de tolerantiegrens.'],
        ['<strong>Inverse</strong>', 'Vind X zodat P(X ≤ x) = p (het p-de percentiel).', 'Kritieke waarde bij een hypothesetoets.'],
      ],
    },
    {
      type: 'tip',
      title: 'De empirische 68 95 99,7 regel',
      html: 'Bij elke normale verdeling geldt: <strong>68%</strong> van de gegevens ligt binnen ±1σ van het gemiddelde, <strong>95%</strong> binnen ±2σ en <strong>99,7%</strong> binnen ±3σ. Controleer dit door P(-1 ≤ z ≤ 1) te berekenen met μ=0 en σ=1.',
    },
    { type: 'title', level: 2, text: 'Snelnaslag woordenlijst' },
    {
      type: 'glossary',
      items: [
        { term: 'Gemiddelde (μ)', definition: 'Locatieparameter. Bepaalt het midden van de Gauss-klokcurve.' },
        { term: 'Standaarddeviatie (σ)', definition: 'Schaalparameter. Regelt de breedte van de klokcurve. Moet strikt positief zijn.' },
        { term: 'Z-score', definition: 'Gestandaardiseerde waarde: z = (X - μ) / σ. Geeft aan hoeveel standaarddeviaties X van het gemiddelde verwijderd is.' },
        { term: 'PDF', definition: 'Kansdichtheidsfunctie (Probability Density Function). Het oppervlak onder de PDF over een interval is gelijk aan de kans van dat interval.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Normale verdeling',
    labelMean: 'Gemiddelde',
    labelStdDev: 'Standaarddev.',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inverse',
    labelValue: 'Waarde X (a)',
    labelValueA: 'Ondergrens (a)',
    labelValueB: 'Bovengrens (b)',
    labelPercentile: 'Percentiel p (0 < p < 1)',
    resultProbability: 'Kans',
    resultX: 'Waarde X',
    resultZScore: 'Z-score',
    resultZScoreA: 'z₁ (ondergrens)',
    resultZScoreB: 'z₂ (bovengrens)',
    hintStdDev: 'Standaarddeviatie moet groter zijn dan 0.',
    hintPercentile: 'Percentiel moet tussen 0 en 1 liggen (exclusief).',
    labelChart: 'Gauss-klokcurve',
    chartDesc: 'Het gearceerde gebied komt overeen met de berekende kans.',
    labelReport: 'Samenvatting voor uw rapport',
    btnCopy: 'Samenvatting kopiëren',
    btnCopied: 'Gekopieerd!',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
  },
};
