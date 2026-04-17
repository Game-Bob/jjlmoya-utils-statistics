import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'rechner-deskriptive-statistik';
const title = 'Rechner für deskriptive Statistik online';
const description =
  'Berechnen Sie alle wichtigen deskriptiven Statistiken sofort: Mittelwert, Median, Modus, Standardabweichung, Varianz, Quartile, Schiefe, Kurtosis und mehr. Fügen Sie Ihre Daten ein und erhalten Sie Ergebnisse in Echtzeit.';

const faqData = [
  {
    question: 'Was ist der Unterschied zwischen der Standardabweichung der Grundgesamtheit und der Stichprobe?',
    answer:
      'Die Standardabweichung der Grundgesamtheit dividiert durch N (alle Elemente sind bekannt). Die Stichprobenstandardabweichung dividiert durch N-1 (Bessel-Korrektur), um die Verzerrung bei der Schätzung aus einer Teilmenge zu korrigieren. Dieser Rechner verwendet die Stichprobenstandardabweichung (N-1), da dies die am häufigsten gewählte Methode in Forschung und Datenanalyse ist.',
  },
  {
    question: 'Was bedeutet eine positive oder negative Schiefe?',
    answer:
      'Die Schiefe misst die Asymmetrie Ihrer Datenverteilung. Eine positive Schiefe (Rechtsschiefe) bedeutet, dass der Ausläufer nach rechts reicht und die meisten Werte links gruppiert sind. Eine negative Schiefe (Linksschiefe) ist das Gegenteil. Ein Wert nahe 0 deutet auf eine annähernd symmetrische Verteilung hin.',
  },
  {
    question: 'Was ist Kurtosis und was sagt sie aus?',
    answer:
      'Kurtosis misst die "Wölbung" oder "Steilheit" der Verteilung im Vergleich zu einer Normalverteilung. Dieser Rechner gibt den Kurtosis-Exzess zurück, wobei 0 der Referenzwert (Normalverteilung) ist. Positive Werte (leptokurtisch) deuten auf schwerere Ränder und steilere Gipfel hin. Negative Werte (platykurtisch) deuten auf leichtere Ränder und flachere Gipfel hin.',
  },
  {
    question: 'In welchem Format sollten meine Daten vorliegen?',
    answer:
      'Fügen Sie Ihre Zahlen getrennt durch Kommas, Leerzeichen, Semikolons oder Zeilenumbrüche ein. Beispiele: "1, 2, 3, 4" oder "1 2 3 4" oder ein Wert pro Zeile. Der Rechner ignoriert nicht-numerische Zeichen automatisch.',
  },
];

const howToData = [
  {
    name: 'Daten einfügen oder eingeben',
    text: 'Geben Sie Ihre numerischen Werte in das Textfeld ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche. Sie benötigen mindestens 2 Werte.',
  },
  {
    name: 'Ergebnisse lesen',
    text: 'Die 15 Statistiken werden sofort während der Eingabe aktualisiert. Das Histogramm zeigt die Form der Verteilung Ihrer Daten.',
  },
  {
    name: 'Zusammenfassung kopieren',
    text: 'Verwenden Sie die Schaltfläche "Zusammenfassung kopieren", um eine kompakte Übersicht der wichtigsten Statistiken für Ihren Bericht oder Ihre Analyse zu erhalten.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    { name: 'Deskriptive Statistik - Wikipedia', url: 'https://de.wikipedia.org/wiki/Deskriptive_Statistik' },
    { name: 'Standardabweichung - Wikipedia', url: 'https://de.wikipedia.org/wiki/Standardabweichung' },
    { name: 'Schiefe (Statistik) - Wikipedia', url: 'https://de.wikipedia.org/wiki/Schiefe_(Statistik)' },
    { name: 'Wölbung (Statistik) - Wikipedia', url: 'https://de.wikipedia.org/wiki/W%C3%B6lbung_(Statistik)' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Rechner für deskriptive Statistik: Alle Kennzahlen auf einen Blick' },
    {
      type: 'paragraph',
      html: 'Egal ob Student, Forscher oder Datenanalyst – der <strong>Rechner für deskriptive Statistik</strong> liefert Ihnen sofort eine vollständige statistische Zusammenfassung jedes numerischen Datensatzes. Fügen Sie Ihre Daten ein und erhalten Sie 15 gleichzeitig berechnete Statistiken – ganz ohne Tabellenkalkulationsprogramm.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Statistische Kennwerte', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Echtzeit-Ergebnisse', icon: 'mdi:lightning-bolt' },
        { value: 'Kostenlos', label: 'Ohne Anmeldung', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Berechnete Statistiken' },
    {
      type: 'table',
      headers: ['Statistik', 'Beschreibung'],
      rows: [
        ['<strong>Anzahl (N)</strong>', 'Gesamtzahl der Werte im Datensatz.'],
        ['<strong>Mittelwert</strong>', 'Das arithmetische Mittel aller Werte.'],
        ['<strong>Median</strong>', 'Der mittlere Wert nach Sortierung. Robust gegenüber Ausreißern.'],
        ['<strong>Modus</strong>', 'Der oder die am häufigsten vorkommenden Werte.'],
        ['<strong>Standardabweichung</strong>', 'Stichprobenstandardabweichung (Division durch N-1).'],
        ['<strong>Varianz</strong>', 'Quadrat der Stichprobenstandardabweichung.'],
        ['<strong>Min / Max</strong>', 'Kleinster und größter Wert im Datensatz.'],
        ['<strong>Spannweite</strong>', 'Differenz zwischen Maximum und Minimum.'],
        ['<strong>Q1 / Q3</strong>', 'Erstes und drittes Quartil (25 % und 75 % Quantile).'],
        ['<strong>IQR</strong>', 'Interquartilsabstand: Q3 minus Q1. Misst die zentrale Streuung.'],
        ['<strong>Schiefe</strong>', 'Asymmetrie der Verteilung im Verhältnis zum Mittelwert.'],
        ['<strong>Kurtosis</strong>', 'Kurtosis-Exzess: Wölbung/Steilheit im Vergleich zur Normalverteilung.'],
      ],
    },
    {
      type: 'tip',
      title: 'Wann man den Median anstatt des Mittelwerts verwendet',
      html: 'Wenn Ihre Daten signifikante Ausreißer aufweisen (z. B. Einkommensdaten, Immobilienpreise), ist der <strong>Median</strong> ein repräsentativeres Maß für die zentrale Tendenz als der Mittelwert, der von Extremwerten stark beeinflusst wird.',
    },
    { type: 'title', level: 2, text: 'Histogramm interpretieren' },
    {
      type: 'paragraph',
      html: 'Das Häufigkeitshistogramm zeigt, wie Ihre Werte über gleich breite Klassen verteilt sind, automatisch berechnet nach der <strong>Regel von Sturges</strong> (k = 1 + log₂N). Eine symmetrische Glockenform deutet auf eine Normalverteilung hin. Schiefe Formen bestätigen den in den Ergebnissen angezeigten Schiefewert.',
    },
    { type: 'title', level: 2, text: 'Kurzreferenz Glossar' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Interquartilsabstand. Die Streuung der mittleren 50 % Ihrer Daten. Wird zur Identifizierung von Ausreißern verwendet.' },
        { term: 'Schiefe', definition: 'Misst die Asymmetrie der Verteilung. Positiv = rechter Ausläufer länger. Negativ = linker Ausläufer länger.' },
        { term: 'Kurtosis-Exzess', definition: 'Wölbung im Vergleich zur Normalverteilung. 0 ist normal; positive Werte bedeuten steilere Verteilung.' },
        { term: 'Bessel-Korrektur', definition: 'Division durch N-1 statt N bei der Berechnung der Stichprobenvarianz zur Reduzierung der Schätzverzerrung.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Deskriptive Statistik',
    labelData: 'Geben Sie Ihre Daten ein',
    placeholderData: 'z.B. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Geben Sie mindestens 2 numerische Werte ein, getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche.',
    hintError: 'Geben Sie mindestens 2 gültige numerische Werte ein, um die Statistik zu berechnen.',
    btnSample: 'Stichprobe',
    btnPopulation: 'Grundgesamtheit',
    groupCentral: 'Zentrale Tendenz',
    groupDispersion: 'Dispersion / Streuung',
    groupPosition: 'Position',
    labelCount: 'Anzahl (N)',
    labelSum: 'Summe',
    labelMean: 'Mittelwert',
    labelMedian: 'Median',
    labelMode: 'Modus',
    labelStdDev: 'Std.-Abw.',
    labelVariance: 'Varianz',
    labelCV: 'Variationskoeff. (CV)',
    labelMin: 'Min',
    labelMax: 'Max',
    labelRange: 'Spannweite',
    labelQ1: 'Q1 (25 %)',
    labelQ3: 'Q3 (75 %)',
    labelIQR: 'IQR',
    labelSkewness: 'Schiefe',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Boxplot',
    labelChart: 'Häufigkeitsverteilung',
    chartDesc: 'Histogramm mit automatischer Klassenbreite nach der Regel von Sturges.',
    insightTitle: 'Automatische Interpretation',
    insightHomogeneous: 'Die Daten sind homogen (CV < 15 %).',
    insightModerate: 'Die Daten weisen eine moderate Variabilität auf (CV 15-35 %).',
    insightHeterogeneous: 'Die Daten sind heterogen (CV > 35 %).',
    insightSymmetric: 'Die Verteilung ist annähernd symmetrisch.',
    insightRightSkewed: 'Die Verteilung weist eine positive Schiefe auf (rechtsschief).',
    insightLeftSkewed: 'Die Verteilung weist eine negative Schiefe auf (linksschief).',
    insightNoOutliers: 'Keine Ausreißer erkannt.',
    insightOutliers: '{n} Ausreißer mittels IQR-Methode erkannt.',
    insightIQR: 'Der Interquartilsabstand beträgt {iqr} (von {q1} bis {q3}).',
    filterNotice: '{n} nicht-numerische Zeichen ignoriert.',
    labelReport: 'Zusammenfassung für Ihren Bericht',
    btnCopy: 'Zusammenfassung kopieren',
    btnCopied: 'Kopiert!',
    noMode: 'Kein Modus',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
  },
};
