import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'konfidenzintervall-rechner';
const title = 'Konfidenzintervall Rechner Online';
const description =
  'Berechnen Sie Konfidenzintervalle für das Populationsmittel mit Z- oder Student-t-Verteilungen. Geben Sie Mittelwert, Standardabweichung, Stichprobengröße und Konfidenzniveau ein, um Intervall, Fehlermarge und kritischen Wert sofort zu erhalten.';

const faqData = [
  {
    question: 'Was ist ein Konfidenzintervall?',
    answer:
      'Ein Konfidenzintervall (KI) ist ein aus Stichprobendaten berechneter Wertebereich, der mit einer bestimmten Wahrscheinlichkeit (Konfidenzniveau) den wahren Populationsparameter enthält. Ein 95%-KI für den Mittelwert bedeutet beispielsweise, dass bei häufiger Wiederholung der Stichprobenziehung 95 % der berechneten Intervalle den wahren Populationsmittelwert enthalten würden.',
  },
  {
    question: 'Wann sollte ich Z anstatt t verwenden?',
    answer:
      'Verwenden Sie Z, wenn die Standardabweichung der Grundgesamtheit (σ) bekannt ist oder wenn n groß ist (>30). Verwenden Sie Student-t, wenn nur die Stichprobenstandardabweichung (s) verfügbar und n klein ist. Für n > 30 sind beide Verteilungen praktisch gleichwertig, aber t bleibt konservativer und technisch korrekter, wenn σ unbekannt ist.',
  },
  {
    question: 'Wie beeinflusst die Stichprobengröße die Breite des Intervalls?',
    answer:
      'Die Breite des KI ist proportional zu 1/√n: Eine Vervierfachung der Stichprobengröße halbiert die Fehlermarge. Dies erklärt, warum große Stichproben präzisere Schätzungen liefern und warum die Stichprobenplanung im statistischen Studiendesign entscheidend ist.',
  },
  {
    question: 'Was ist die Fehlermarge?',
    answer:
      'Die Fehlermarge (ME) ist die halbe Breite des KI: ME = kritischer_Wert × SE, wobei SE = σ/√n der Standardfehler ist. Sie gibt die maximal erwartete Differenz zwischen der Stichprobenschätzung und dem wahren Populationswert bei dem angegebenen Konfidenzniveau an.',
  },
];

const howToData = [
  {
    name: 'Stichprobenparameter eingeben',
    text: 'Geben Sie den Stichprobenmittelwert (x̄), die Standardabweichung (σ oder s > 0) und die Stichprobengröße (n ≥ 2) ein.',
  },
  {
    name: 'Konfidenzniveau wählen',
    text: 'Wählen Sie 90 %, 95 % oder 99 % über die Schnellzugriffstasten oder geben Sie einen beliebigen Wert zwischen 0 und 100 ein.',
  },
  {
    name: 'Verteilung wählen und Ergebnis lesen',
    text: 'Wählen Sie Z, wenn die Standardabweichung der Grundgesamtheit bekannt ist, oder t für eine Stichprobe. Das Intervall, die Fehlermarge und der kritische Wert werden sofort berechnet.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    { name: 'Konfidenzintervall Wikipedia', url: 'https://de.wikipedia.org/wiki/Konfidenzintervall' },
    { name: 'Student t Verteilung Wikipedia', url: 'https://de.wikipedia.org/wiki/Studentsche_t-Verteilung' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Standardfehler Wikipedia', url: 'https://de.wikipedia.org/wiki/Standardfehler' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Konfidenzintervall-Rechner: Ergebnisse in Echtzeit' },
    {
      type: 'paragraph',
      html: 'Der <strong>Konfidenzintervall-Rechner</strong> berechnet sofort das Intervall, die Fehlermarge, den kritischen Wert und den Standardfehler. Er unterstützt die Z-Verteilung (bekanntes Populations-Sigma) und Student-t (Stichproben-Sigma) mit jedem Konfidenzniveau zwischen 0 und 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z- und t-Verteilungen', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Echtzeit-Ergebnisse', icon: 'mdi:lightning-bolt' },
        { value: 'Kostenlos', label: 'Keine Registrierung', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z-Verteilung vs. Student-t' },
    {
      type: 'table',
      headers: ['Kriterium', 'Z-Verteilung', 'Student-t'],
      rows: [
        ['Anwendung', 'Bekanntes σ oder n > 30', 'Stichproben-s, beliebiges n'],
        ['Kritischer Wert (95 %)', 'z* = 1,960', 't* abhängig von df = n−1'],
        ['Freiheitsgrade', 'Nicht anwendbar', 'df = n − 1'],
        ['Für großes n', 'Engeres KI', 'Konvergiert gegen Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Konfidenzintervalle richtig interpretieren',
      html: 'Ein <strong>95%-Konfidenzintervall</strong> bedeutet nicht, dass mit einer Wahrscheinlichkeit von 95 % der wahre Mittelwert in diesem spezifischen Intervall liegt. Es bedeutet, dass das <strong>Verfahren</strong> bei vielen Stichproben in 95 % der Fälle Intervalle liefern würde, die den wahren Mittelwert enthalten. Einmal berechnet, enthält das Intervall den wahren Wert entweder oder nicht.',
    },
    { type: 'title', level: 2, text: 'Kurzreferenz Glossar' },
    {
      type: 'glossary',
      items: [
        { term: 'Konfidenzintervall (KI)', definition: 'Bereich [x̄ − ME, x̄ + ME], der den Populationsparameter auf dem gewählten Konfidenzniveau schätzt.' },
        { term: 'Konfidenzniveau', definition: 'Anteil der Intervalle, die den wahren Parameter enthalten würden, wenn das Experiment oft wiederholt würde. Typische Werte: 90 %, 95 %, 99 %.' },
        { term: 'Standardfehler (SE)', definition: 'SE = σ/√n. Misst die Variabilität des Stichprobenmittelwerts um den Populationsmittelwert.' },
        { term: 'Fehlermarge (ME)', definition: 'ME = z* × SE (oder t* × SE). Es ist die halbe Breite des Konfidenzintervalls.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Konfidenzintervall',
    labelMean: 'Mittelwert (x̄)',
    labelStdDev: 'Standardabweichung',
    labelN: 'Stichprobengröße (n)',
    labelConf: 'Konfidenzniveau (%)',
    btnZ: 'Z (σ bekannt)',
    btnT: 'Student-t',
    labelCI: 'Konfidenzintervall',
    labelME: 'Fehlermarge',
    labelCritical: 'Kritischer Wert',
    labelSE: 'Standardfehler',
    labelDF: 'Freiheitsgrade',
    hintN: 'n muss eine positive ganze Zahl ≥ 2 sein.',
    hintStdDev: 'Standardabweichung muss > 0 sein.',
    hintConf: 'Konfidenzniveau muss zwischen 0 und 100 liegen.',
    labelChart: 'Intervall-Visualisierung',
    chartDesc: 'Zahlenstrahl mit schattiertem KI und Fehlermarge.',
    labelReport: 'Zusammenfassung für Ihren Bericht',
    btnCopy: 'Kopie Zusammenfassung',
    btnCopied: 'Kopiert!',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
    tabStats: 'Zusammenfassung',
    tabRaw: 'Rohdaten',
    labelRaw: 'Daten einfügen',
    rawPlaceholder: 'Werte getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche. Z.B.: 12,3, 15,1, 11,8',
    hintRaw: 'Geben Sie mindestens 2 gültige numerische Werte ein.',
    labelDist: 'Verteilung',
    distAuto: 'Auto',
    noticeAutoRaw: 'Stichprobendaten: Student-t angewendet',
    noticeAutoLowN: 'n < 30: Student-t empfohlen',
    noticeAutoHighN: 'n ≥ 30: Z-Verteilung empfohlen',
    calcCI: 'KI-Intervall',
    calcInverse: 'Min n',
    labelTargetME: 'Ziel-Fehlermarge (E)',
    hintTargetME: 'E muss eine Zahl > 0 sein.',
    labelReqN: 'Mindeststichprobengröße',
  },
};
