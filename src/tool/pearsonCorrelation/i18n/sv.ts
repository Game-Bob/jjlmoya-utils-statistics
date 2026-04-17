import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'kalkylator-pearson-korrelation';
const title = 'Kalkylator för Pearson korrelation online';
const description =
  'Beräkna Pearsons r-koefficient, determinationskoefficienten r² och den linjära regressionslinjen från datapar. 100 % privat och lokalt verktyg.';

const faqData = [
  {
    question: 'Vad är Pearsons korrelationskoefficient?',
    answer:
      'Det är ett statistiskt mått som kvantifierar styrkan och riktningen på det linjära sambandet mellan två kvantitativa variabler. Dess värde sträcker sig från -1 (perfekt negativ korrelation) till 1 (perfekt positiv korrelation), där 0 indikerar inget linjärt samband.',
  },
  {
    question: 'Kan jag klistra in data direkt från Excel?',
    answer:
      'Ja, vår kalkylator är optimerad för att tolka data som kopierats och klistrats in från Excel, Google Sheets eller CSV-filer. Den upptäcker automatiskt kolumner och rensar icke-numeriska tecken som valutasymboler eller procentsatser.',
  },
  {
    question: 'Varför är r-värdet lågt om mina data verkar relaterade?',
    answer:
      'Pearsons koefficient upptäcker endast linjära samband. Om dina data har ett kurvigt samband (som en parabel eller logaritmisk), kan Pearson-koefficienten vara mycket låg även om det finns en tydlig koppling mellan variablerna.',
  },
  {
    question: 'Vad betyder r² i denna kalkylator?',
    answer:
      'Det är determinationskoefficienten. Den representerar den andel av variansen i den beroende variabeln som är förutsägbar från den oberoende variabeln. Till exempel indikerar ett r² på 0,85 att 85 % av variabiliteten förklaras av den linjära modellen.',
  },
];

const howToData = [
  {
    name: 'Datapreberedelse',
    text: 'Ha dina värdepar (X och Y) redo. De kan finnas i en Excel-fil eller helt enkelt i en textlista.',
  },
  {
    name: 'Datainmatning',
    text: 'Klistra in dina data i kalkylatorns textområde. Se till att varje par av värden är på en ny rad.',
  },
  {
    name: 'Konfiguration',
    text: 'Välj det decimaltecken (punkt eller komma) som används i dina data för att undvika beräkningsfel.',
  },
  {
    name: 'Resultatanalys',
    text: 'Granska omedelbart r-värdet, dess tolkning och observera spridningsdiagrammet för att bekräfta trenden.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    { name: 'Pearsons korrelationskoefficient - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Pearsons_korrelationskoefficient' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkylator för Pearson-korrelation online: Komplett guide' },
    {
      type: 'paragraph',
      html: '<strong>Pearsons korrelationskoefficient</strong> (r) är det statistiska standardverktyget för att mäta hur två numeriska variabler förhåller sig till varandra linjärt. Oavsett om det är för akademiskt arbete, marknadsanalys eller vetenskaplig forskning, är det avgörande att förstå styrkan i dina data.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Total relation', icon: 'mdi:trending-up' },
        { value: '0', label: 'Oberoende', icon: 'mdi:graph-outline' },
        { value: 'Lokalt', label: '100 % integritet', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Vad används Pearsons r-koefficient till?' },
    {
      type: 'paragraph',
      html: 'Pearsons index avslöjar om en trend existerar: när en variabel ökar, ökar den andra också (<strong>positiv korrelation</strong>) eller minskar den (<strong>negativ korrelation</strong>)? Detta verktyg är viktigt för dataanalys i Excel, SPSS eller Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pearson korrelation',
          description: 'Idealisk för kvantitativa variabler med ett tydligt linjärt samband.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Numeriska data', 'Linjärt samband', 'Kräver normalitet'],
        },
        {
          title: 'Spearman korrelation',
          description: 'Bättre för ordinaldata eller monotona icke-linjära samband.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Ordinaldata (rankning)', 'Monotont samband', 'Resistent mot utstickare'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Tolka resultat: Värdetabell' },
    {
      type: 'table',
      headers: ['Värdeintervall (r)', 'Sambandsstyrka', 'Praktisk betydelse'],
      rows: [
        ['<strong>0,90 till 1,00</strong>', 'Mycket stark', 'Näst intill perfekt relation. Idealisk för förutsägelser.'],
        ['<strong>0,70 till 0,89</strong>', 'Stark', 'Ett tydligt linjärt beroende mellan variablerna finns.'],
        ['<strong>0,40 till 0,69</strong>', 'Måttlig', 'En synlig trend, men med betydande spridning.'],
        ['<strong>0,20 till 0,39</strong>', 'Svag', 'Dålig relation; andra faktorer har mer inflytande.'],
        ['<strong>0,00 till 0,19</strong>', 'Noll/Försumbar', 'Inget signifikant linjärt samband finns.'],
      ],
    },
    { type: 'title', level: 2, text: 'Fördelar och begränsningar med denna kalkylator' },
    {
      type: 'list',
      items: [
        '<strong>Klistra in från Excel/CSV:</strong> Inget behov av att mata in data en och en.',
        '<strong>Omedelbart spridningsdiagram</strong> med regressionslinje.',
        '<strong>100 % integritet:</strong> Dina data lämnar aldrig din dator.',
      ],
    },
    {
      type: 'list',
      items: [
        'Upptäcker endast linjära samband (inte kurviga).',
        'Hög känslighet för extremvärden (utstickare).',
        'Kräver minst 2 giltiga datapar.',
      ],
    },
    {
      type: 'tip',
      title: 'Experttips',
      html: 'Innan du blint litar på r-värdet, titta alltid på <strong>spridningsdiagrammet</strong>. Ibland kan en hög koefficient orsakas av en enstaka utstickare, eller så kan en låg koefficient dölja ett mycket starkt kurvigt samband som Pearson inte kan upptäcka.',
    },
    { type: 'title', level: 2, text: 'Statistisk ordlista' },
    {
      type: 'glossary',
      items: [
        { term: 'Kovarians', definition: 'Mått på hur mycket två slumpvariabler förändras tillsammans.' },
        { term: 'Linjär regression', definition: 'Matematisk modell som används för att approximera beroendeförhållandet mellan variabler.' },
        { term: 'Koefficient r²', definition: 'Andel av variansen som är förutsägbar från den oberoende variabeln.' },
        { term: 'Spridningsdiagram', definition: 'Punktdiagram som visar fördelningen av datapar på ett plan.' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV-data',
    btnLoadExample: 'Ladda exempel',
    btnClear: 'Rensa data',
    placeholder: 'Klistra in data (X, Y) eller dra en CSV...',
    labelDecimalSep: 'Decimalsep.',
    optPoint: 'Punkt (.)',
    optComma: 'Komma (,)',
    privacyBadge: 'Privat lokal körning',
    labelR: 'Pearson-koefficient (r)',
    labelR2: 'Bestämning (r²)',
    labelN: 'Par (n)',
    labelSlope: 'Lutning (m)',
    labelMeanXY: 'Medelvärde X | Y',
    labelWaiting: 'Väntar på data...',
    interpPerfectPos: 'Perfekt positiv korrelation',
    interpPerfectNeg: 'Perfekt negativ korrelation',
    interpStrong: 'Stark korrelation',
    interpModerate: 'Måttlig korrelation',
    interpWeak: 'Svag/noll korrelation',
    errorMsg: 'Ange minst 2 datapar för att rita diagrammet',
    btnCopyTitle: 'Kopiera resultat',
    btnDownloadTitle: 'Ladda ner diagram',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
  },
};
