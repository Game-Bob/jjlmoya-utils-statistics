import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'beschrijvende-statistiek-calculator';
const title = 'Beschrijvende statistiek calculator online';
const description =
  'Bereken direct alle belangrijke beschrijvende statistieken: gemiddelde, mediaan, modus, standaarddeviatie, variantie, kwartielen, scheefheid, kurtosis en meer. Plak uw gegevens en krijg real-time resultaten.';

const faqData = [
  {
    question: 'Wat is het verschil tussen de standaarddeviatie van de populatie en de steekproef?',
    answer:
      'De standaarddeviatie van de populatie deelt door N (alle elementen zijn bekend). De standaarddeviatie van de steekproef deelt door N-1 (Bessels correctie) om de vertekening te corrigeren bij het schatten op basis van een deelverzameling. Deze calculator gebruikt de standaarddeviatie van de steekproef (N-1), wat de meest gebruikelijke keuze is in onderzoek en data-analyse.',
  },
  {
    question: 'Wat betekent een positieve of negatieve scheefheid?',
    answer:
      'Scheefheid (skewness) meet de asymmetrie van uw gegevensverdeling. Positieve scheefheid (rechts-scheef) betekent dat de staart naar rechts uitloopt en de meeste waarden zich links groeperen. Negatieve scheefheid (links-scheef) is het tegenovergestelde. Een waarde nabij 0 duidt op een ongeveer symmetrische verdeling.',
  },
  {
    question: 'Wat is kurtosis en wat geeft het aan?',
    answer:
      'Kurtosis meet de "zwaarte" van de staarten ten opzichte van een normale verdeling. Deze calculator geeft de exces kurtosis terug, waarbij 0 de basislijn is (normale verdeling). Positieve waarden (leptokurtisch) duiden op zwaardere staarten en scherpere pieken. Negatieve waarden (platykurtisch) duiden op lichtere staarten en vlakkere pieken.',
  },
  {
    question: 'In welk formaat moeten mijn gegevens staan?',
    answer:
      'Plak uw getallen gescheiden door komma\'s, spaties, puntkomma\'s of regeleinden. Voorbeelden: "1, 2, 3, 4" of "1 2 3 4" of één waarde per regel. De calculator negeert automatisch niet-numerieke tekens.',
  },
];

const howToData = [
  {
    name: 'Plak of typ uw gegevens',
    text: 'Voer uw numerieke waarden in het tekstveld in, gescheiden door komma\'s, spaties of regeleinden. U heeft minimaal 2 waarden nodig.',
  },
  {
    name: 'Lees de resultaten',
    text: 'De 15 statistieken worden direct bijgewerkt terwijl u typt. Het histogram toont de vorm van de verdeling van uw gegevens.',
  },
  {
    name: 'Kopieer de samenvatting',
    text: 'Gebruik de knop "Samenvatting kopiëren" om een compact overzicht van de belangrijkste statistieken te kopiëren voor gebruik in uw rapport of analyse.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    { name: 'Beschrijvende statistiek - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Beschrijvende_statistiek' },
    { name: 'Standaardafwijking - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Standaardafwijking' },
    { name: 'Scheefheid - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Scheefheid' },
    { name: 'Kurtosis - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Kurtosis' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Beschrijvende statistiek calculator: Alle belangrijke statistieken op één plek' },
    {
      type: 'paragraph',
      html: 'Of u nu een student, onderzoeker of data-analist bent, de <strong>Beschrijvende statistiek calculator</strong> geeft u direct een compleet statistisch overzicht van elke numerieke dataset. Plak uw gegevens en krijg 15 tegelijkertijd berekende statistieken — geen spreadsheetsoftware nodig.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Berekende statistieken', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Real-time resultaten', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Geen registratie', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Berekende statistieken' },
    {
      type: 'table',
      headers: ['Statistiek', 'Beschrijving'],
      rows: [
        ['<strong>Aantal (N)</strong>', 'Totaal aantal waarden in de dataset.'],
        ['<strong>Gemiddelde</strong>', 'Het rekenkundig gemiddelde van alle waarden.'],
        ['<strong>Mediaan</strong>', 'De middelste waarde bij gesorteerde gegevens. Robuust voor uitschieters.'],
        ['<strong>Modus</strong>', 'De meest voorkomende waarde(n).'],
        ['<strong>Standaarddev.</strong>', 'Standaarddeviatie van de steekproef (deelt door N-1).'],
        ['<strong>Variantie</strong>', 'Kwadraat van de standaarddeviatie van de steekproef.'],
        ['<strong>Min / Max</strong>', 'Kleinste en grootste waarden in de dataset.'],
        ['<strong>Bereik</strong>', 'Verschil tussen de maximale en minimale waarden.'],
        ['<strong>Q1 / Q3</strong>', 'Eerste en derde kwartiel (25e and 75e percentielen).'],
        ['<strong>IQR</strong>', 'Interkwartielafstand: Q3 minus Q1. Meet centrale spreiding.'],
        ['<strong>Scheefheid</strong>', 'Asymmetrie van de verdeling ten opzichte van het gemiddelde.'],
        ['<strong>Kurtosis</strong>', 'Exces kurtosis: zwaarte van de staarten t.o.v. een normale verdeling.'],
      ],
    },
    {
      type: 'tip',
      title: 'Wanneer de mediaan gebruiken in plaats van het gemiddelde',
      html: 'Als uw gegevens aanzienlijke uitschieters bevatten (bijv. inkomensgegevens, huizenprijzen), is de <strong>mediaan</strong> een representatievere maatstaf voor het centrum dan het gemiddelde, dat naar extreme waarden wordt getrokken.',
    },
    { type: 'title', level: 2, text: 'Het histogram interpreteren' },
    {
      type: 'paragraph',
      html: 'Het frequentiehistogram toont hoe uw waarden verdeeld zijn over klassen van gelijke breedte, automatisch berekend met de <strong>regel van Sturges</strong> (k = 1 + log₂N). Een symmetrische klokvorm suggereert een normale verdeling. Scheve vormen bevestigen de scheefheidswaarde die in de resultaten wordt getoond.',
    },
    { type: 'title', level: 2, text: 'Snelnaslag-woordenlijst' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Interkwartielafstand. De spreiding van de middelste 50% van uw gegevens. Gebruikt om uitschieters te identificeren.' },
        { term: 'Scheefheid', definition: 'Meet de asymmetrie van de verdeling. Positief = rechterstaart langer. Negatief = linkerstaart langer.' },
        { term: 'Exces Kurtosis', definition: 'Zwaarte van de staarten vergeleken met een normale verdeling. 0 is normaal; positief betekent zwaardere staarten.' },
        { term: 'Bessels correctie', definition: 'Delen door N-1 in plaats van N bij het berekenen van de steekproefvariantie om de vertekening in de schatting te verminderen.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Beschrijvende statistiek',
    labelData: 'Voer uw gegevens in',
    placeholderData: 'bijv. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Voer minimaal 2 numerieke waarden in, gescheiden door komma\'s, spaties of regeleinden.',
    hintError: 'Voer minimaal 2 geldige numerieke waarden in om statistieken te berekenen.',
    btnSample: 'Steekproef',
    btnPopulation: 'Populatie',
    groupCentral: 'Centrummaten',
    groupDispersion: 'Spreidingsmaten',
    groupPosition: 'Positiematen',
    labelCount: 'Aantal (N)',
    labelSum: 'Som',
    labelMean: 'Gemiddelde',
    labelMedian: 'Mediaan',
    labelMode: 'Modus',
    labelStdDev: 'Standaarddev.',
    labelVariance: 'Variantie',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Max',
    labelRange: 'Bereik',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Scheefheid',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Boxplot',
    labelChart: 'Frequentieverdeling',
    chartDesc: 'Histogram met automatische klassebreedte volgens de regel van Sturges.',
    insightTitle: 'Automatische interpretatie',
    insightHomogeneous: 'Gegevens zijn homogeen (CV < 15%).',
    insightModerate: 'Gegevens vertonen matige variabiliteit (CV 15-35%).',
    insightHeterogeneous: 'Gegevens zijn heterogeen (CV > 35%).',
    insightSymmetric: 'Verdeling is ongeveer symmetrisch.',
    insightRightSkewed: 'Verdeling vertoont positieve scheefheid (rechterstaart).',
    insightLeftSkewed: 'Verdeling vertoont negatieve scheefheid (linkerstaart).',
    insightNoOutliers: 'Geen uitschieters gedetecteerd.',
    insightOutliers: '{n} uitschieter(s) gedetecteerd met de IQR-methode.',
    insightIQR: 'De interkwartielafstand is {iqr} (van {q1} tot {q3}).',
    filterNotice: '{n} niet-numerieke tekens genegeerd.',
    labelReport: 'Samenvatting voor uw rapport',
    btnCopy: 'Samenvatting kopiëren',
    btnCopied: 'Gekopieerd!',
    noMode: 'Geen modus',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
  },
};
