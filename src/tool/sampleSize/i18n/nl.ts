import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'steekproefcalculator';
const title = 'Steekproefcalculator online';
const description =
  'Bereken het exacte aantal personen dat nodig is voor uw onderzoek. Inclusief opties voor eindige of oneindige populaties, instelbare betrouwbaarheidsniveaus en foutmarges.';

const faqData = [
  {
    question: 'Wat is de populatiegrootte?',
    answer:
      'Dit is het totale aantal mensen waaruit de groep bestaat die u wilt bestuderen of enquêteren. Als dit minder dan 100.000 is, wordt het meestal als een eindige populatie beschouwd. Als u deze gegevens niet hebt of als het onbeheersbaar is, selecteer dan de optie voor een oneindige populatie.',
  },
  {
    question: 'Welk betrouwbaarheidsniveau moet ik kiezen?',
    answer:
      '95% is de meest gebruikte standaard in wetenschappelijk onderzoek, scripties en marktstudies. Verander deze waarde alleen als uw professor, tutor of klant een ander precisieniveau vereist (bijv. 99%).',
  },
  {
    question: 'Waarom vraagt de tool om een foutmarge?',
    answer:
      'Geen enkele steekproef is perfect. De foutmarge definieert de mate van onnauwkeurigheid die u bereid bent te accepteren. De meest voorkomende is 5%.',
  },
  {
    question: 'Welke verwachte proportie (p) moet ik gebruiken als ik niets over de populatie weet?',
    answer:
      'Laat de standaardwaarde staan: 50%. In de statistiek vertegenwoordigt dit het "worst-case scenario" omdat het de variantie p(1-p) maximaliseert, waardoor uw steekproefomvang onder geen enkele omstandigheid te klein is.',
  },
];

const howToData = [
  {
    name: 'Definieer uw populatie',
    text: 'Geef aan of u het totale aantal van de te bestuderen groep kent (Eindig) of de voorkeur geeft aan een conservatieve berekening voor zeer grote/onbekende groepen (Oneindig).',
  },
  {
    name: 'Pas uw betrouwbaarheidsniveau aan',
    text: 'Selecteer 95% (aanbevolen), of voer een aangepaste waarde in via het dropdown-menu.',
  },
  {
    name: 'Stel de foutmarge in',
    text: 'Specificeer de fouttolerantie. Houd er rekening mee dat het verlagen van 5% naar 2% het aantal enquêtes dat u moet uitvoeren drastisch verhoogt.',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Kijk in het centrale paneel en kopier direct de automatisch gegenereerde rechtvaardigingstekst om toe te voegen aan uw scriptie of rapport.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    { name: 'Bepaling van de steekproefomvang - Wikipedia', url: 'https://nl.wikipedia.org/wiki/Steekproef' },
    { name: 'Berekening van de steekproefomvang - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Steekproefcalculator online: De definitieve gids' },
    {
      type: 'paragraph',
      html: 'Het bepalen van het juiste aantal mensen om te enquêteren is een van de meest kritieke stappen in elk onderzoek, marktstudie of academisch project. De <strong>steekproefcalculator</strong> biedt studenten, onderzoekers en marketingprofessionals een nauwkeurige, snelle en gebruiksvriendelijke tool om het exacte aantal individuen te berekenen dat nodig is voor statistisch significante resultaten.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Standaard betrouwbaarheid', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Foutmarge', icon: 'mdi:target' },
        { value: 'Snel', label: 'Real-time berekening', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Waarom is het berekenen van de steekproefomvang fundamenteel?' },
    {
      type: 'paragraph',
      html: 'In de statistiek is het zelden mogelijk om een hele populatie te bestuderen. De oplossing is om een representatieve subgroep te selecteren, ook wel een steekproef genoemd. Als de steekproef te klein is, zullen de resultaten vertekend zijn. Als deze te groot is, verspilt u onnodig tijd en geld.',
    },
    { type: 'title', level: 2, text: 'De twee berekeningsmodi: eindige und oneindige populatie' },
    {
      type: 'paragraph',
      html: 'Onze calculator past zich aan uw situatie aan door twee verschillende berekeningsmodi aan te bieden.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Eindige Populatie (Bekend)',
          description: 'Het exacte totale aantal individuen is bekend.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Vereist de N-waarde',
            'Past correctiefactor toe',
            'Vermindert de uiteindelijke steekproefomvang',
          ],
        },
        {
          title: 'Oneindige Populatie (Onbekend)',
          description: 'Totale grootte onbekend, onbeheersbaar of groter dan 100.000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Vereist geen kennis van N',
            'Klassieke standaardformule',
            'Meest conservatieve en veilige scenario',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'De parameters van het bedieningspaneel begrijpen' },
    {
      type: 'table',
      headers: ['Parameter', 'Beschrijving', 'Standaard aanbeveling'],
      rows: [
        ['<strong>Betrouwbaarheidsniveau (Z)</strong>', 'Wiskundige zekerheid dat de steekproef de populatie vertegenwoordigt.', 'Gebruik 95%.'],
        ['<strong>Foutmarge (e)</strong>', 'Toegestaan afwijkingspercentage van de werkelijkheid.', 'Gebruik 5%.'],
        ['<strong>Verwachte proportie (p)</strong>', 'Waarschijnlijkheid dat de bestudeerde gebeurtenis plaatsvindt.', 'Gebruik 50% (maximaliseert de variantie).'],
      ],
    },
    {
      type: 'tip',
      title: 'Pas op met de foutmarge',
      html: 'Het verlagen van de foutmarge van 5% naar 2% vereist een exponentiële toename van de steekproefomvang. Bekijk de gevoeligheidsgrafiek in de calculator voordat u beslist over een marge die te streng is.',
    },
    { type: 'title', level: 2, text: 'De wiskundige formule achter de berekening' },
    {
      type: 'list',
      items: [
        '<strong>Oneindige Populatie:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Kritieke waarde afgeleid van het betrouwbaarheidsniveau.',
        '<strong>p:</strong> Verwachte proportie (q is 1 - p).',
        '<strong>e:</strong> Toegestane foutmarge.',
      ],
    },
    { type: 'title', level: 2, text: 'Korte woordenlijst voor onderzoekers' },
    {
      type: 'glossary',
      items: [
        { term: 'Populatie (N)', definition: 'Totale set elementen of individuen die een kenmerk delen en het onderwerp van studie zijn.' },
        { term: 'Steekproef (n)', definition: 'Representatieve deelverzameling geselecteerd uit de totale populatie.' },
        { term: 'Maximale variantie', definition: 'Treedt op wanneer p=0,5 (50%), wat ervoor zorgt dat de berekende steekproef haalbaar is voor het meest uiteenlopende geval.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameters',
    labelPopType: 'Populatietype',
    btnFinite: 'Eindig (Bekend)',
    btnInfinite: 'Oneindig (Onbekend)',
    labelPopSize: 'Populatiegrootte',
    labelConfLevel: 'Betrouwbaarheidsniveau (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Aangepast',
    labelConfCustom: 'Aangepast betr.niveau (%)',
    labelErrorMargin: 'Foutmarge (%)',
    labelProportion: 'Verwachte proportie',
    hintProportion: '50% is het "worst case" dat de grootste en veiligste steekproef oplevert.',
    hintProportionError: 'Een proportie van 0% of 100% maakt de steekproef ongeldig. We raden aan waarden tussen 5% en 95% te gebruiken.',
    labelSampleSize: 'Voorgestelde omvang',
    labelSampleSub: 'enquêtes nodig',
    labelZValue: 'Kritieke waarde',
    labelReport: 'Tekst voor uw rapport',
    defaultJustification: 'Voor een populatie van 10.000 mensen, met een betrouwbaarheidsniveau van 95% und een foutmarge van 5%, is de representatieve steekproefomvang 370 personen.',
    btnCopy: 'Tekst kopiëren',
    btnCopied: 'Gekopieerd!',
    labelChart: 'Gevoeligheid: Omvang vs. Foutmarge',
    chartDesc: 'Observeer hoe de steekproefomvang omhoog schiet wanneer u probeert de foutmarge te verkleinen.',
    justForFinite: 'Voor een populatie van',
    justPersons: 'personen',
    justForInfinite: 'Voor een oneindige populatie',
    justConfidence: ', met een betrouwbaarheidsniveau van',
    justError: '% en een foutmarge van',
    justResultIs: '%, is de representatieve steekproefomvang',
    justUnit: 'personen.',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
  },
};
