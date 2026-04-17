import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-correlatie-calculator';
const title = 'Pearson correlatie calculator online';
const description =
  "Bereken de r-coëfficiënt van Pearson, de determinatiecoëfficiënt r² en de lineaire regressielijn uit gegevensparen. 100% privé en lokale tool.";

const faqData = [
  {
    question: "Wat is de correlatiecoëfficiënt van Pearson?",
    answer:
      "Het is een statistische maatstaf die de sterkte en richting van de lineaire relatie tussen twee kwantitatieve variabelen kwantificeert. De waarde varieert van -1 (perfecte negatieve correlatie) tot 1 (perfecte positieve correlatie), waarbij 0 aangeeft dat er geen lineaire relatie is.",
  },
  {
    question: 'Kan ik gegevens rechtstreeks uit Excel plakken?',
    answer:
      'Ja, onze calculator is geoptimaliseerd om gegevens te interpreteren die zijn gekopieerd en geplakt uit Excel, Google Sheets of CSV-bestanden. Het detecteert automatisch kolommen en verwijdert niet-numerieke tekens zoals valutasymbolen of percentages.',
  },
  {
    question: 'Waarom is de r-waarde laag als mijn gegevens gerelateerd lijken?',
    answer:
      "De coëfficiënt van Pearson detecteert alleen lineaire relaties. Als uw gegevens een gebogen relatie hebben (zoals een parabool of logaritmisch), kan de Pearson-coëfficiënt erg laag zijn, ook al bestaat er een duidelijke verbinding tussen de variabelen.",
  },
  {
    question: 'Wat betekent r² in deze calculator?',
    answer:
      'Het is de determinatiecoëfficiënt. Het vertegenwoordigt het deel van de variantie in de afhankelijke variabele dat voorspelbaar is vanuit de onafhankelijke variabele. Een r² van 0,85 geeft bijvoorbeeld aan dat 85% van de variabiliteit wordt verklaard door het lineaire model.',
  },
];

const howToData = [
  {
    name: 'Gegevensvoorbereiding',
    text: 'Houd uw waardeparen (X en Y) gereed. Deze kunnen in een Excel-bestand staan of gewoon in een tekstlijst.',
  },
  {
    name: 'Gegevensinvoer',
    text: 'Plak uw gegevens in het tekstveld van de calculator. Zorg ervoor dat elk paar waarden op een nieuwe regel staat.',
  },
  {
    name: 'Configuratie',
    text: 'Selecteer het decimaalscheidingsteken (punt of komma) dat in uw gegevens wordt gebruikt om berekeningsfouten te voorkomen.',
  },
  {
    name: 'Resultatenanalyse',
    text: 'Bekijk direct de r-waarde, de interpretatie ervan en observeer het spreidingsdiagram om de trend te bevestigen.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    { name: 'Pearson-correlatiecoëfficiënt - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Pearson-correlatieco%C3%ABffici%C3%ABnt' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: 'Interpretation of Pearson\'s Correlation Coefficient', url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Pearson-correlatiecalculator online: Volledige gids' },
    {
      type: 'paragraph',
      html: 'De <strong>Pearson-correlatiecoëfficiënt</strong> (r) is het standaard statistische hulpmiddel om te meten hoe twee numerieke variabelen lineair met elkaar samenhangen. Of het nu gaat om academisch werk, marktanalyse of wetenschappelijk onderzoek, het begrijpen van de sterkte van uw gegevens is essentieel.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Totale relatie', icon: 'mdi:trending-up' },
        { value: '0', label: 'Onafhankelijkheid', icon: 'mdi:graph-outline' },
        { value: 'Lokaal', label: '100% Privacy', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Waar wordt de r-coëfficiënt van Pearson voor gebruikt?' },
    {
      type: 'paragraph',
      html: 'De index van Pearson onthult of er een trend bestaat: als de ene variabele toeneemt, neemt de andere dan ook toe (<strong>positieve correlatie</strong>) of af (<strong>negatieve correlatie</strong>)? Deze tool is essentieel voor gegevensanalyse in Excel, SPSS of Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pearson correlatie',
          description: 'Ideaal voor kwantitatieve variabelen met een duidelijke lineaire relatie.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Numerieke gegevens', 'Lineaire relatie', 'Vereist normaliteit'],
        },
        {
          title: 'Spearman correlatie',
          description: 'Beter voor ordinale gegevens of monotone niet-lineaire relaties.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Ordinale gegevens (rangen)', 'Monotone relatie', 'Bestand tegen uitschieters'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretatie van resultaten: Waardetabel' },
    {
      type: 'table',
      headers: ['Waardebereik (r)', 'Relatiesterkte', 'Praktische betekenis'],
      rows: [
        ['<strong>0,90 tot 1,00</strong>', 'Zeer sterk', 'Bijna perfecte relatie. Ideaal voor voorspellingen.'],
        ['<strong>0,70 tot 0,89</strong>', 'Sterk', 'Er bestaat een duidelijke lineaire afhankelijkheid tussen variabelen.'],
        ['<strong>0,40 tot 0,69</strong>', 'Gemiddeld', 'Een zichtbare trend, maar met aanzienlijke spreiding.'],
        ['<strong>0,20 tot 0,39</strong>', 'Zwak', 'Geringe relatie; andere factoren hebben meer invloed.'],
        ['<strong>0,00 tot 0,19</strong>', 'Nul/Verwaarloosbaar', 'Er bestaat geen significante lineaire relatie.'],
      ],
    },
    { type: 'title', level: 2, text: 'Voordelen en beperkingen van deze calculator' },
    {
      type: 'list',
      items: [
        '<strong>Plakken vanuit Excel/CSV:</strong> Het is niet nodig om gegevens één voor één in te voeren.',
        '<strong>Instant spreidingsdiagram</strong> met regressielijn.',
        '<strong>100% Privacy:</strong> Uw gegevens verlaten nooit uw pc.',
      ],
    },
    {
      type: 'list',
      items: [
        'Detecteert alleen lineaire relaties (geen gebogen relaties).',
        'Hoge gevoeligheid voor extreme waarden (uitschieters).',
        'Vereist minimaal 2 geldige gegevensparen.',
      ],
    },
    {
      type: 'tip',
      title: 'Tip van een expert',
      html: 'Voordat u blindelings op de r-waarde vertrouwt, moet u altijd naar het <strong>Spreidingsdiagram</strong> kijken. Soms kan een hoge coëfficiënt worden veroorzaakt door een enkele uitschieter, of kan een lage coëfficiënt een zeer sterke gebogen relatie verbergen die Pearson niet kan detecteren.',
    },
    { type: 'title', level: 2, text: 'Statistische woordenlijst' },
    {
      type: 'glossary',
      items: [
        { term: 'Covariantie', definition: 'Maatstaf voor hoeveel twee stochastische variabelen samen veranderen.' },
        { term: 'Lineaire regressie', definition: 'Wiskundig model dat wordt gebruikt om de afhankelijkheidsrelatie tussen variabelen te benaderen.' },
        { term: 'Coëfficiënt r²', definition: 'Deel van de variantie dat voorspelbaar is vanuit de onafhankelijke variabele.' },
        { term: 'Spreidingsdiagram', definition: 'Puntdiagram dat de verdeling van gegevensparen op een vlak toont.' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV-gegevens',
    btnLoadExample: 'Voorbeeld laden',
    btnClear: 'Gegevens wissen',
    placeholder: 'Plak uw gegevens (X, Y) of sleep een CSV...',
    labelDecimalSep: 'Decimaalscheid.',
    optPoint: 'Punt (.)',
    optComma: 'Komma (,)',
    privacyBadge: 'Privé lokale uitvoering',
    labelR: 'Pearson-coëfficiënt (r)',
    labelR2: 'Determinatie (r²)',
    labelN: 'Paren (n)',
    labelSlope: 'Helling (m)',
    labelMeanXY: 'Gemiddelde X | Y',
    labelWaiting: 'Wachten op gegevens...',
    interpPerfectPos: 'Perfecte positieve correlatie',
    interpPerfectNeg: 'Perfecte negatieve correlatie',
    interpStrong: 'Sterke correlatie',
    interpModerate: 'Gemiddelde correlatie',
    interpWeak: 'Zwakke/geen correlatie',
    errorMsg: 'Voer minimaal 2 gegevensparen in voor de grafiek',
    btnCopyTitle: 'Resultaten kopiëren',
    btnDownloadTitle: 'Grafiek downloaden',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
  },
};
