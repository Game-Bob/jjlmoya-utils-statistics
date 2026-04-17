import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-korrelationsrechner';
const title = 'Pearson Korrelationsrechner Online';
const description =
  'Berechnen Sie den Pearson-Korrelationskoeffizienten r, das Bestimmtheitsmaß r² und die lineare Regressionsgerade aus Datenpaaren. 100 % privates und lokales Tool.';

const faqData = [
  {
    question: 'Was ist der Pearson-Korrelationskoeffizient?',
    answer:
      'Es ist ein statistisches Maß, das die Stärke und Richtung der linearen Beziehung zwischen zwei quantitativen Variablen quantifiziert. Sein Wert reicht von -1 (perfekte negative Korrelation) bis 1 (perfekte positive Korrelation), wobei 0 keine lineare Beziehung anzeigt.',
  },
  {
    question: 'Kann ich Daten direkt aus Excel einfügen?',
    answer:
      'Ja, unser Rechner ist darauf optimiert, aus Excel, Google Sheets oder CSV-Dateien kopierte und eingefügte Daten zu interpretieren. Er erkennt automatisch Spalten und bereinigt nicht-numerische Zeichen wie Währungssymbole oder Prozentsätze.',
  },
  {
    question: 'Warum ist der r-Wert niedrig, wenn meine Daten verwandt zu sein scheinen?',
    answer:
      'Der Pearson-Koeffizient erkennt nur lineare Beziehungen. Wenn Ihre Daten eine gekrümmte Beziehung aufweisen (z. B. eine Parabel oder logarithmisch), kann der Pearson-Koeffizient sehr niedrig sein, obwohl eine klare Verbindung zwischen den Variablen besteht.',
  },
  {
    question: 'Was bedeutet r² in diesem Rechner?',
    answer:
      'Es ist das Bestimmtheitsmaß. Es stellt den Anteil der Varianz in der abhängigen Variable dar, der aus der unabhängigen Variable vorhersehbar ist. Ein r² von 0,85 zeigt beispielsweise an, dass 85 % der Variabilität durch das lineare Modell erklärt werden.',
  },
];

const howToData = [
  {
    name: 'Datenvorbereitung',
    text: 'Halten Sie Ihre Wertepaare (X und Y) bereit. Diese können in einer Excel-Datei oder einfach in einer Textliste vorliegen.',
  },
  {
    name: 'Dateneingabe',
    text: 'Fügen Sie Ihre Daten in den Textbereich des Rechners ein. Stellen Sie sicher, dass jedes Wertepaar in einer neuen Zeile steht.',
  },
  {
    name: 'Konfiguration',
    text: 'Wählen Sie das in Ihren Daten verwendete Dezimaltrennzeichen (Punkt oder Komma) aus, um Berechnungsfehler zu vermeiden.',
  },
  {
    name: 'Ergebnisanalyse',
    text: 'Überprüfen Sie sofort den r-Wert, seine Interpretation und beobachten Sie das Streudiagramm, um den Trend zu bestätigen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    { name: 'Korrelationskoeffizient - Wikipedia', url: 'https://de.wikipedia.org/wiki/Korrelationskoeffizient' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: 'Interpretation of Pearson\'s Correlation Coefficient', url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Pearson-Korrelationsrechner Online: Der vollständige Leitfaden' },
    {
      type: 'paragraph',
      html: 'Der <strong>Pearson-Korrelationskoeffizient</strong> (r) ist das statistische Standardwerkzeug, um zu messen, wie zwei numerische Variablen linear miteinander in Beziehung stehen. Ob für akademische Arbeiten, Marktanalysen oder wissenschaftliche Forschung – die Stärke Ihrer Daten zu verstehen, ist entscheidend.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Vollständige Beziehung', icon: 'mdi:trending-up' },
        { value: '0', label: 'Unabhängigkeit', icon: 'mdi:graph-outline' },
        { value: 'Lokal', label: '100 % Datenschutz', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Wofür wird der r-Koeffizient von Pearson verwendet?' },
    {
      type: 'paragraph',
      html: 'Der Pearson-Index zeigt auf, ob ein Trend existiert: Wenn eine Variable zunimmt, nimmt die andere dann ebenfalls zu (<strong>positive Korrelation</strong>) oder ab (<strong>negative Korrelation</strong>)? Dieses Tool ist für die Datenanalyse in Excel, SPSS oder Python unerlässlich.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pearson Korrelation',
          description: 'Ideal für quantitative Variablen mit einer klaren linearen Beziehung.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Numerische Daten', 'Lineare Beziehung', 'Erfordert Normalverteilung'],
        },
        {
          title: 'Spearman Korrelation',
          description: 'Besser für ordinale Daten oder monotone nicht-lineare Beziehungen.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Ordinale Daten (Ränge)', 'Monotone Beziehung', 'Resistent gegen Ausreißer'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Ergebnisinterpretation: Wertetabelle' },
    {
      type: 'table',
      headers: ['Wertebereich (r)', 'Beziehungsstärke', 'Praktische Bedeutung'],
      rows: [
        ['<strong>0,90 bis 1,00</strong>', 'Sehr stark', 'Nahezu perfekte Beziehung. Ideal für Vorhersagen.'],
        ['<strong>0,70 bis 0,89</strong>', 'Stark', 'Eine deutliche lineare Abhängigkeit zwischen den Variablen besteht.'],
        ['<strong>0,40 bis 0,69</strong>', 'Moderat', 'Ein sichtbarer Trend, aber mit nennenswerter Streuung.'],
        ['<strong>0,20 bis 0,39</strong>', 'Schwach', 'Geringe Beziehung; andere Faktoren haben mehr Einfluss.'],
        ['<strong>0,00 bis 0,19</strong>', 'Null/Unerheblich', 'Es besteht keine signifikante lineare Beziehung.'],
      ],
    },
    { type: 'title', level: 2, text: 'Vorteile und Grenzen dieses Rechners' },
    {
      type: 'list',
      items: [
        '<strong>Einfügen aus Excel/CSV:</strong> Daten müssen nicht einzeln eingegeben werden.',
        '<strong>Sofortiges Streudiagramm</strong> mit Regressionsgerade.',
        '<strong>100 % Datenschutz:</strong> Ihre Daten verlassen niemals Ihren PC.',
      ],
    },
    {
      type: 'list',
      items: [
        'Erkennt nur lineare Beziehungen (keine gekrümmten).',
        'Hohe Empfindlichkeit gegenüber Extremwerten (Ausreißern).',
        'Erfordert mindestens 2 gültige Datenpaare.',
      ],
    },
    {
      type: 'tip',
      title: 'Expertentipp',
      html: 'Bevor Sie dem r-Wert blind vertrauen, schauen Sie sich immer das <strong>Streudiagramm</strong> an. Manchmal kann ein hoher Koeffizient durch einen einzelnen Ausreißer verursacht werden, oder ein niedriger Koeffizient kann eine sehr starke gekrümmte Beziehung verbergen, die Pearson nicht erkennen kann.',
    },
    { type: 'title', level: 2, text: 'Statistisches Glossar' },
    {
      type: 'glossary',
      items: [
        { term: 'Kovarianz', definition: 'Maß dafür, wie stark zwei Zufallsvariablen gemeinsam variieren.' },
        { term: 'Lineare Regression', definition: 'Mathematisches Modell zur Annäherung an die Abhängigkeitsbeziehung zwischen Variablen.' },
        { term: 'Koeffizient r²', definition: 'Anteil der Varianz, der aus der unabhängigen Variable vorhersehbar ist.' },
        { term: 'Streudiagramm', definition: 'Punktdiagramm, das die Verteilung von Datenpaaren in einer Ebene zeigt.' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV-Daten',
    btnLoadExample: 'Beispiel laden',
    btnClear: 'Daten löschen',
    placeholder: 'Daten einfügen (X, Y) oder CSV ziehen...',
    labelDecimalSep: 'Dezimaltrennz.',
    optPoint: 'Punkt (.)',
    optComma: 'Komma (,)',
    privacyBadge: 'Private lokale Ausführung',
    labelR: 'Pearson-Koeffizient (r)',
    labelR2: 'Bestimmung (r²)',
    labelN: 'Paare (n)',
    labelSlope: 'Steigung (m)',
    labelMeanXY: 'Mittelwert X | Y',
    labelWaiting: 'Warten auf Daten...',
    interpPerfectPos: 'Perfekte positive Korrelation',
    interpPerfectNeg: 'Perfekte negative Korrelation',
    interpStrong: 'Starke Korrelation',
    interpModerate: 'Moderate Korrelation',
    interpWeak: 'Schwache/Null-Korrelation',
    errorMsg: 'Geben Sie mindestens 2 Datenpaare für das Diagramm ein',
    btnCopyTitle: 'Ergebnisse kopieren',
    btnDownloadTitle: 'Diagramm herunterladen',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
  },
};
