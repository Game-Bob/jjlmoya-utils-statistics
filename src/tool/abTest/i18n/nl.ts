import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-hypothesetest-calculator';
const title = 'A/B Test Hypothesetest Calculator Online';
const description =
  'Vergelijk twee groepen (A en B) om te bepalen of er een statistisch significant verschil is in hun conversies of gemiddelden. Bereken de P-waarde direct.';

const faqData = [
  {
    question: 'Wat betekent de P-waarde?',
    answer:
      'De P-waarde vertelt u de waarschijnlijkheid dat het prestatieverschil tussen Groep A en Groep B puur toeval is. Als de P-waarde lager is dan het significantieniveau (meestal 0,05), betekent dit dat u er 95% zeker van kunt zijn dat het structurele verschil echt is.',
  },
  {
    question: 'Wat is het significantieniveau (Alpha of α)?',
    answer:
      'Het is uw strengheidsniveau voor de test. Een Alpha van 0,05 vereist 95% zekerheid dat Groep B verschilt van A om het als geldig te beschouwen. Een Alpha van 0,01 vereist veel meer strengheid (99%). De academische en industriële conventie is om standaard 0,05 te gebruiken.',
  },
  {
    question: 'Wat is het verschil tussen de proportietoets en de gemiddeldentoets?',
    answer:
      'De proportietoets meet dichotome succes- of faalvariabelen: klikken, e-mailopens, conversies. De gemiddeldentoets vergelijkt geaccumuleerd kwantitatief gedrag: gemiddelde winkelwagenuitgaven of klinische hersteldagen.',
  },
  {
    question: 'Wat als mijn steekproef kleiner is dan 30 personen?',
    answer:
      'De benadering van de normale verdeling wordt bij zulke kleine steekproeven minder nauwkeurig (centrale limietstelling). Voor een klinische beslissing raden we aan om conservatievere exacte waarschijnlijkheidsmethoden of aangepaste Student-t-toetstechnieken te gebruiken.',
  },
];

const howToData = [
  {
    name: 'Selecteer het numerieke doel',
    text: 'Definieer in het configuratiepaneel of u conversiepercentages (eenvoudige proporties) of algemene gemiddelden zoals bedragen (gemiddelden) wilt meten.',
  },
  {
    name: 'Voer controlegegevens in (Groep A)',
    text: 'Vul het aantal verzonden/blootgestelde gevallen in en hoeveel successen ze hadden (of hun gemiddelde).',
  },
  {
    name: 'Voer experimentele gegevens in (Groep B)',
    text: 'Voer de cijfers in voor het nieuwe initiatief of de variant die u meet.',
  },
  {
    name: 'Noteer het statistische oordeel',
    text: 'Kijk naar de Significantiejury en kopieer de gegenereerde rechtvaardiging over of de werkelijke verbetering (Lift) de toevalsveronderstelling verwerpt.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    { name: 'Statistische hypothesetest - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Statistische_toets' },
    { name: 'A/B Testing Calculator - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'A/B Test Hypothesetest Calculator Online' },
    {
      type: 'paragraph',
      html: 'Beslissingen nemen op basis van intuïtie is gevaarlijk; ze nemen op basis van pure data is de weg naar succes. De <strong>Hypothesetest Calculator (A/B Test)</strong> is het definitieve hulpmiddel voor analisten, marketeers en onderzoekers die moeten valideren of het verschil tussen twee groepen statistisch significant is of simpelweg het resultaat van toeval.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-waarde', label: 'De uiteindelijke jury', icon: 'mdi:scale-balance' },
        { value: 'Lokaal', label: 'Geen gegevensupload', icon: 'mdi:shield-check' },
        { value: 'Direct', label: 'Native grafieken', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Waarom splitsen we tests in Conversies en Gemiddelden?' },
    {
      type: 'paragraph',
      html: 'Afhankelijk van de aard van uw onderzoek verandert de succesmeter. Onze tool ondersteunt standaard de twee meest gebruikte statistische testtypes in de industrie.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Proportietoets (Conversies)',
          description: 'Vergelijkt percentages of succespercentages tussen twee groepen.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideaal voor Marketing (Klikken, Verkoop, Abonnementen)',
            'Gebruikt Totaal aantal gevallen (n) en Successen (x)',
            'Past de Z-toets voor twee proporties toe',
          ],
        },
        {
          title: 'Continue Gemiddeldentoets',
          description: 'Vergelijkt gemiddelde numerieke waarden tussen twee groepen.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideale voor Gemiddelde bon, Tijd op site of Klinische tests',
            'Gebruikt Gemiddelde (μ) en Standaarddeviatie (σ)',
            'Past robuuste normale benadering voor steekproeven toe (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Hoe resultaten te interpreteren: De P-waarde is uw gids' },
    {
      type: 'paragraph',
      html: 'Het hart van deze calculator is de beroemde <strong>P-waarde</strong>. Dit getal vertelt u de waarschijnlijkheid dat u deze waargenomen verschillen zou hebben verkregen als de Nulhypothese (die stelt dat "beide groepen gelijk zijn") waar zou zijn.',
    },
    {
      type: 'table',
      headers: ['Waargenomen P-waarde', 'Praktische betekenis', 'Standaardbesluit'],
      rows: [
        ['<strong>Groter dan 0,05</strong>', 'Het verschil is klein in verhouding tot de variantie. Toeval zou het kunnen verklaren.', 'De Nulhypothese <strong>NIET verwerpen</strong>. Geen bewezen echte verbetering.'],
        ['<strong>Kleiner dan 0,05</strong>', 'Het is uiterst onwaarschijnlijk dat toeval zo\'n verschil veroorzaakt. Er is een echt effect.', 'De Nulhypothese <strong>verwerpen</strong>. Variant B is beter!'],
        ['<strong>Kleiner dan 0,01</strong>', 'Het bewijs ten gunste van verandering is overweldigend (99% vertrouwen).', '<strong>Met klem verwerpen</strong>. Doorslaand succes van het experiment.'],
      ],
    },
    {
      type: 'tip',
      title: 'Correctie voor kleine steekproeven',
      html: 'Als uw groepen minder dan 30 personen verwerken, geeft de tool een waarschuwing "Kleine steekproef" weer. In deze grensgevallen verliest de klassieke normale benadering aan precisie; we raden aan om exacte Student-t-toets- of Fisher-tools te gebruiken.',
    },
    { type: 'title', level: 2, text: 'A/B-testen Glossarium' },
    {
      type: 'glossary',
      items: [
        { term: 'Controlegroep (A)', definition: 'De originele versie of baseline waartegen u uw experiment gaat meten.' },
        { term: 'Variant (B)', definition: 'De nieuwe gewijzigde versie waarvan u verwacht dat deze de metrics verbetert.' },
        { term: 'Lift (Relatieve verbetering)', definition: 'Percentage verandering tussen de prestaties van Groep B ten opzichte van de baseline van Groep A.' },
        { term: 'Significantieniveau (α)', definition: 'De foutdrempel die u bereid bent te accepteren (meestal 5% of 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameters',
    btnConversions: 'Conversies',
    btnMeans: 'Gemiddelden',
    labelGroupA: 'Groep A (Controle)',
    labelGroupB: 'Groep B (Variant)',
    labelTotalCases: 'Totaal aantal gevallen',
    labelSuccesses: 'Successen of conversies',
    labelMean: 'Gemiddeld gemiddelde',
    labelStdDev: 'Standaarddeviatie',
    labelAlpha: 'Significantieniveau',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    labelDirection: 'Toetsrichting',
    btn2Tails: '2-zijdig (Diff.)',
    btn1Tail: '1-zijdig (B > A)',
    alertTitle: 'Waarschuwing statistische betrouwbaarheid',
    alertBody: 'U gebruikt een zeer kleine steekproefomvang of extreme waarden (0 successen). De schatting is mogelijk niet representatief voor de echte wereld.',
    alertLinkText: 'Bereken hier uw ideale steekproefomvang',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-waarde',
    sigDescInitial: 'Er is voldoende bewijs om de nulhypothese te verwerpen',
    labelLift: 'Verbeteringsanalyse (Lift)',
    labelLiftText: 'verbetering ten opzichte van Groep A',
    labelConfidencePrefix: 'Statistisch vertrouwen:',
    labelDistributions: 'Waarschijnlijkheidsverdelingen',
    chartDesc: 'Observeer de overlap: minder overlap impliceert grotere zekerheid dat de verschillen echt zijn en niet het resultaat van toeval.',
    labelReport: 'Tekst voor uw rapport',
    defaultJustification: 'Na analyse van X personen vertoont Groep B een verbetering van Y% met een statistisch vertrouwen van Z% (p=0,00).',
    btnCopy: 'Tekst kopiëren',
    btnCopied: 'Gekopieerd!',
    sigText: 'Er is voldoende bewijs om de nulhypothese te verwerpen.',
    noSigText: 'Het verschil is niet statistisch significant.',
    justIntro: 'Na analyse van in totaal',
    justSamples: ' monsters vertoont Groep B een verandering van ',
    justRespectTo: '% ten opzichte van Groep A.',
    justWithConfidence: ' Met een statistisch vertrouwen van ',
    justDiff: ', is het empirische verschil ',
    justSig: 'statistisch significant',
    justNoSig: 'is NIET statistisch significant',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
  },
};
