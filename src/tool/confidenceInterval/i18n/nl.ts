import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'betrouwbaarheidsinterval-calculator';
const title = 'Betrouwbaarheidsintervalcalculator online';
const description =
  'Bereken betrouwbaarheidsintervallen voor het populatiegemiddelde met behulp van Z- of Student-t-verdelingen. Voer het steekproefgemiddelde, de standaarddeviatie, de steekproefomvang en het betrouwbaarheidsniveau in om direct het interval, de foutmarge en de kritieke waarde te krijgen.';

const faqData = [
  {
    question: 'Wat is een betrouwbaarheidsinterval?',
    answer:
      'Een betrouwbaarheidsinterval (BI) is een bereik van waarden dat is berekend op basis van steekproefgegevens en dat, met een gegeven waarschijnlijkheid (betrouwbaarheidsniveau), de werkelijke populatieparameter bevat. Een 95% BI voor het gemiddelde betekent bijvoorbeeld dat als u de steekproef vele malen herhaalt, 95% van de berekende intervallen het werkelijke populatiegemiddelde zou bevatten.',
  },
  {
    question: 'Wanneer moet ik Z gebruiken in plaats van t?',
    answer:
      'Gebruik Z wanneer de standaarddeviatie van de populatie (σ) bekend is, of wanneer n groot is (>30). Gebruik Student-t wanneer alleen de standaarddeviatie van de steekproef (s) beschikbaar is en n klein is. Voor n > 30 zijn beide verdelingen praktisch equivalent, maar t blijft conservatiever en technisch correcter wanneer σ onbekend is.',
  },
  {
    question: 'Hoe beïnvloedt de steekproefomvang de breedte van het interval?',
    answer:
      'De breedte van het BI is evenredig met 1/√n: het verviervoudigen van de steekproefomvang halveert de foutmarge. Dit verklaart waarom grote steekproeven nauwkeurigere schattingen opleveren en waarom het plannen van de steekproefomvang cruciaal is bij het ontwerp van statistisch onderzoek.',
  },
  {
    question: 'Wat is de foutmarge?',
    answer:
      'De foutmarge (ME) is de helft van de breedte van het BI: ME = kritieke_waarde × SE, waarbij SE = σ/√n de standaardfout is. Het geeft het maximaal verwachte verschil aan tussen de steekproefschatting and de werkelijke populatiewaarde op het gespecificeerde betrouwbaarheidsniveau.',
  },
];

const howToData = [
  {
    name: 'Voer de steekproefparameters in',
    text: 'Typ het steekproefgemiddelde (x̄), de standaarddeviatie (σ of s > 0) en de steekproefomvang (n ≥ 2).',
  },
  {
    name: 'Kies het betrouwbaarheidsniveau',
    text: 'Selecteer 90%, 95% of 99% met de sneltoetsen, of typ een waarde tussen 0 en 100.',
  },
  {
    name: 'Selecteer de verdeling en lees het resultaat',
    text: 'Kies Z als de standaarddeviatie van de populatie bekend is, of t voor een steekproef. Het interval, de foutmarge en de kritieke waarde worden direct berekend.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    { name: 'Betrouwbaarheidsinterval Wikipedia', url: 'https://nl.wikipedia.org/wiki/Betrouwbaarheidsinterval' },
    { name: 'Student-t-verdeling Wikipedia', url: 'https://nl.wikipedia.org/wiki/Student-verdeling' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Standaardfout Wikipedia', url: 'https://nl.wikipedia.org/wiki/Standaardfout' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Betrouwbaarheidsinterval-calculator: Resultaten in real-time' },
    {
      type: 'paragraph',
      html: 'De <strong>Betrouwbaarheidsintervalcalculator</strong> berekent direct het interval, de foutmarge, de kritieke waarde en de standaardfout. Het ondersteunt de Z-verdeling (bekende populatie-sigma) en Student-t (steekproef-sigma), met elk betrouwbaarheidsniveau tussen 0 en 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z- en t-verdelingen', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Real-time resultaten', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Geen registratie', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z-verdeling vs Student-t' },
    {
      type: 'table',
      headers: ['Criterium', 'Z-verdeling', 'Student-t'],
      rows: [
        ['Wanneer te gebruiken', 'Bekende σ of n > 30', 'Steekproef-s, elke n'],
        ['Kritieke waarde (95%)', 'z* = 1,960', 't* hangt af van df = n−1'],
        ['Vrijheidsgraden', 'Niet van toepassing', 'df = n − 1'],
        ['Voor grote n', 'Smaller BI', 'Convergeert naar Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Hoe u een betrouwbaarheidsinterval correct interpreteert',
      html: 'Een <strong>95% betrouwbaarheidsinterval</strong> betekent niet dat er een kans van 95% is dat het werkelijke gemiddelde in dat specifieke interval ligt. Het betekent dat de <strong>procedure</strong>, indien herhaald met vele steekproeven, in 95% van de gevallen intervallen zou produceren die het werkelijke gemiddelde bevatten. Eenmaal berekend, bevat het interval de werkelijke waarde of niet.',
    },
    { type: 'title', level: 2, text: 'Snelnaslag-woordenlijst' },
    {
      type: 'glossary',
      items: [
        { term: 'Betrouwbaarheidsinterval (BI)', definition: 'Bereik [x̄ − ME, x̄ + ME] dat de populatieparameter schat op het gekozen betrouwbaarheidsniveau.' },
        { term: 'Betrouwbaarheidsniveau', definition: 'Deel van de intervallen die de werkelijke parameter zouden bevatten als het experiment vele malen zou worden herhaald. Typische waarden: 90%, 95%, 99%.' },
        { term: 'Standaardfout (SE)', definition: 'SE = σ/√n. Meet de variabiliteit van het steekproefgemiddelde rond het populatiegemiddelde.' },
        { term: 'Foutmarge (ME)', definition: 'ME = z* × SE (of t* × SE). Het is de helft van de breedte van het betrouwbaarheidsinterval.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Betrouwbaarheidsinterval',
    labelMean: 'Steekproefgemiddelde (x̄)',
    labelStdDev: 'Standaarddeviatie',
    labelN: 'Steekproefomvang (n)',
    labelConf: 'Betrouwbaarheidsniveau (%)',
    btnZ: 'Z (σ bekend)',
    btnT: 'Student-t',
    labelCI: 'Betrouwbaarheidsinterval',
    labelME: 'Foutmarge',
    labelCritical: 'Kritieke waarde',
    labelSE: 'Standaardfout',
    labelDF: 'Vrijheidsgraden',
    hintN: 'n moet een geheel getal zijn groter dan of gelijk aan 2.',
    hintStdDev: 'Standaarddeviatie moet groter zijn dan 0.',
    hintConf: 'Betrouwbaarheidsniveau moet tussen 0 en 100 liggen.',
    labelChart: 'Interval-visualisatie',
    chartDesc: 'Getallenlijn met het gearceerde BI en de foutmarge.',
    labelReport: 'Samenvatting voor uw rapport',
    btnCopy: 'Samenvatting kopiëren',
    btnCopied: 'Gekopieerd!',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
    tabStats: 'Statistieken',
    tabRaw: 'Ruwe data',
    labelRaw: 'Data plakken',
    rawPlaceholder: 'Typ of plak waarden gescheiden door komma\'s, spaties of nieuwe regels. Bijv.: 12.3, 15.1, 11.8',
    hintRaw: 'Voer minimaal 2 geldige numerieke waarden in.',
    labelDist: 'Verdeling',
    distAuto: 'Auto',
    noticeAutoRaw: 'Steekproefgegevens: Student-t toegepast',
    noticeAutoLowN: 'n < 30: Student-t aanbevolen',
    noticeAutoHighN: 'n ≥ 30: Z-verdeling aanbevolen',
    calcCI: 'BI Interval',
    calcInverse: 'Min n',
    labelTargetME: 'Gewenste foutmarge (E)',
    hintTargetME: 'E moet een getal groter dan 0 zijn.',
    labelReqN: 'Minimale steekproefomvang',
  },
};
