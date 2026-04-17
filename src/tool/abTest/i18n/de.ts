import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-hypothesentest-rechner';
const title = 'A/B-Test Hypothesentest Rechner Online';
const description =
  'Vergleichen Sie zwei Gruppen (A und B), um festzustellen, ob ein statistisch signifikanter Unterschied in ihren Konversionen oder Mittelwerten besteht. Berechnen Sie den P-Wert sofort.';

const faqData = [
  {
    question: 'Was bedeutet der P-Wert?',
    answer:
      'Der P-Wert gibt die Wahrscheinlichkeit an, dass der Leistungsunterschied zwischen Gruppe A und Gruppe B reiner Zufall ist. Wenn der P-Wert unter dem Signifikanzniveau (normalerweise 0,05) liegt, bedeutet dies, dass Sie zu 95 % sicher sein können, dass der strukturelle Unterschied real ist.',
  },
  {
    question: 'Was ist das Signifikanzniveau (Alpha oder α)?',
    answer:
      'Es ist Ihr Strengegrad für den Test. Ein Alpha von 0,05 erfordert eine 95-prozentige Sicherheit, dass Gruppe B von A abweicht, um es als gültig anzusehen. Ein Alpha von 0,01 erfordert eine viel höhere Strenge (99 %). Die akademische und industrielle Konvention besteht darin, standardmäßig 0,05 zu verwenden.',
  },
  {
    question: 'Was ist der Unterschied zwischen dem Proportionstest und dem Mittelwerttest?',
    answer:
      'Der Proportionstest misst dichotome Erfolgs- oder Misserfolgsvariablen: Klicks, E-Mail-Öffnungen, Konversionen. Der Mittelwerttest vergleicht das kumulierte quantitative Verhalten: durchschnittliche Warenkorbausgaben oder klinische Erholungstage.',
  },
  {
    question: 'Was ist, wenn meine Stichprobe kleiner als 30 Personen ist?',
    answer:
      'Die Annäherung an die Normalverteilung wird bei so kleinen Stichproben weniger präzise (Zentraler Grenzwertsatz). Für eine klinische Entscheidung empfehlen wir die Verwendung konservativerer exakter Wahrscheinlichkeitsmethoden oder angepasster Student-t-Test-Techniken.',
  },
];

const howToData = [
  {
    name: 'Wählen Sie das numerische Ziel',
    text: 'Definieren Sie im Konfigurationspanel, ob Sie Konversionsraten (einfache Proportionen) oder allgemeine Durchschnitte wie Beträge (Mittelwerte) messen möchten.',
  },
  {
    name: 'Kontrolldaten eingeben (Gruppe A)',
    text: 'Füllen Sie die gesendeten/exponierten Fälle aus und geben Sie an, wie viele Erfolge sie hatten (oder deren Mittelwert).',
  },
  {
    name: 'Experimentelle Daten eingeben (Gruppe B)',
    text: 'Geben Sie die Zahlen für die neue Initiative oder Variante ein, die Sie messen.',
  },
  {
    name: 'Notieren Sie das statistische Urteil',
    text: 'Schauen Sie auf den Signifikanzrichter und kopieren Sie die generierte Begründung darüber, ob die reale Verbesserung (Lift) die Zufallsannahme ablehnt.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    { name: 'Statistischer Hypothesentest - Wikipedia', url: 'https://de.wikipedia.org/wiki/Statistischer_Test' },
    { name: 'A/B-Testing Rechner - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'A/B-Test Hypothesentest Rechner Online' },
    {
      type: 'paragraph',
      html: 'Entscheidungen auf der Grundlage von Intuitionen zu treffen, ist gefährlich; sie auf der Grundlage reiner Daten zu treffen, ist der Weg zum Erfolg. Der <strong>Hypothesentest-Rechner (A/B-Test)</strong> ist das definitive Werkzeug für Analysten, Marketer und Forscher, die validieren müssen, ob der Unterschied zwischen zwei Gruppen statistisch signifikant oder einfach das Ergebnis des Zufalls ist.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-Wert', label: 'Der finale Richter', icon: 'mdi:scale-balance' },
        { value: 'Lokal', label: 'Kein Daten-Upload', icon: 'mdi:shield-check' },
        { value: 'Sofort', label: 'Native Diagramme', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Warum teilen wir Tests in Konversionen und Mittelwerte auf?' },
    {
      type: 'paragraph',
      html: 'Je nach Art Ihrer Studie ändert sich die Erfolgsmetrik. Unser Werkzeug unterstützt nativ die beiden am weitesten verbreiteten statistischen Testtypen in der Branche.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Proportionstest (Konversionen)',
          description: 'Vergleicht Prozentsätze oder Erfolgsraten zwischen zwei Gruppen.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideal für Marketing (Klicks, Verkäufe, Abonnements)',
            'Verwendet Gesamtfälle (n) und Erfolge (x)',
            'Wendet Z-Test für zwei Proportionen an',
          ],
        },
        {
          title: 'Test auf kontinuierliche Mittelwerte',
          description: 'Vergleicht durchschnittliche numerische Werte zwischen zwei Gruppen.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideal für Durchschnittsbon, Zeit auf der Seite oder klinische Studien',
            'Verwendet Mittelwert (μ) und Standardabweichung (σ)',
            'Wendet robuste Normalverteilungsannäherung für Stichproben an (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretation der Ergebnisse: Der P-Wert ist Ihr Leitfaden' },
    {
      type: 'paragraph',
      html: 'Das Herzstück dieses Rechners ist der berühmte <strong>P-Wert</strong>. Diese Zahl gibt die Wahrscheinlichkeit an, diese beobachteten Unterschiede erhalten zu haben, wenn die Nullhypothese (die besagt, dass "beide Gruppen gleich sind") wahr wäre.',
    },
    {
      type: 'table',
      headers: ['Beobachteter P-Wert', 'Praktische Bedeutung', 'Standardentscheidung'],
      rows: [
        ['<strong>Größer als 0,05</strong>', 'Der Unterschied ist im Verhältnis zur Varianz gering. Der Zufall könnte es erklären.', 'Nullhypothese <strong>NICHT ablehnen</strong>. Keine nachgewiesene reale Verbesserung.'],
        ['<strong>Kleiner als 0,05</strong>', 'Es ist extrem unwahrscheinlich, dass der Zufall einen solchen Unterschied verursacht. Es gibt einen realen Effekt.', 'Nullhypothese <strong>ablehnen</strong>. Variante B ist besser!'],
        ['<strong>Kleiner als 0,01</strong>', 'Die Beweise für eine Änderung sind überwältigend (99 % Vertrauen).', '<strong>Energisch ablehnen</strong>. Durchschlagender Erfolg des Experiments.'],
      ],
    },
    {
      type: 'tip',
      title: 'Korrektur für kleine Stichproben',
      html: 'Wenn Ihre Gruppen weniger als 30 Personen verarbeiten, zeigt das Tool eine Warnung "Kleine Stichprobe" an. In diesen Grenzszenarien verliert die klassische Normalverteilungsannäherung an Präzision; wir empfehlen die Verwendung exakter Student-t-Tests oder Fisher-Tools.',
    },
    { type: 'title', level: 2, text: 'A/B-Testing Glossar' },
    {
      type: 'glossary',
      items: [
        { term: 'Kontrollgruppe (A)', definition: 'Die Originalversion oder Baseline, an der Sie Ihr Experiment messen.' },
        { term: 'Variante (B)', definition: 'Die neue modifizierte Version, von der Sie erwarten, dass sie die Metriken verbessert.' },
        { term: 'Lift (Relative Verbesserung)', definition: 'Prozentuale Änderung zwischen der Leistung von Gruppe B im Vergleich zur Baseline von Gruppe A.' },
        { term: 'Signifikanzniveau (α)', definition: 'Die Fehlerschwelle, die Sie bereit sind zu akzeptieren (normalerweise 5 % oder 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameter',
    btnConversions: 'Konversionen',
    btnMeans: 'Mittelwerte',
    labelGroupA: 'Gruppe A (Kontrolle)',
    labelGroupB: 'Gruppe B (Variante)',
    labelTotalCases: 'Gesamtfälle',
    labelSuccesses: 'Erfolge oder Konversionen',
    labelMean: 'Durchschnittlicher Mittelwert',
    labelStdDev: 'Standardabweichung',
    labelAlpha: 'Signifikanzniveau',
    alpha90: '0,10 (90 %)',
    alpha95: '0,05 (95 %)',
    alpha99: '0,01 (99 %)',
    labelDirection: 'Testrichtung',
    btn2Tails: '2-seitig (Diff.)',
    btn1Tail: '1-seitig (B > A)',
    alertTitle: 'Warnung zur statistischen Zuverlässigkeit',
    alertBody: 'Sie verwenden eine sehr kleine Stichprobengröße oder Extremwerte (0 Erfolge). Die Schätzung ist möglicherweise nicht repräsentativ für die reale Welt.',
    alertLinkText: 'Berechnen Sie hier Ihre ideale Stichprobengröße',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-Wert',
    sigDescInitial: 'Es gibt ausreichende Beweise, um die Nullhypothese abzulehnen',
    labelLift: 'Verbesserungsanalyse (Lift)',
    labelLiftText: 'Verbesserung im Vergleich zu Gruppe A',
    labelConfidencePrefix: 'Statistisches Vertrauen:',
    labelDistributions: 'Wahrscheinlichkeitsverteilungen',
    chartDesc: 'Beobachten Sie die Überlappung: Weniger Überlappung bedeutet eine größere Gewissheit, dass die Unterschiede real sind und nicht das Ergebnis des Zufalls.',
    labelReport: 'Text für Ihren Bericht',
    defaultJustification: 'Nach Analyse von X Personen zeigt Gruppe B eine Verbesserung von Y % mit einem statistischen Vertrauen von Z % (p=0,00).',
    btnCopy: 'Text kopieren',
    btnCopied: 'Kopiert!',
    sigText: 'Es gibt ausreichende Beweise, um die Nullhypothese abzulehnen.',
    noSigText: 'Der Unterschied ist statistisch nicht signifikant.',
    justIntro: 'Nach Analyse von insgesamt',
    justSamples: ' Stichproben zeigt Gruppe B eine Änderung von ',
    justRespectTo: ' % im Vergleich zu Gruppe A.',
    justWithConfidence: ' Mit einem statistischen Vertrauen von ',
    justDiff: ', ist der empirische Unterschied ',
    justSig: 'statistisch signifikant',
    justNoSig: 'NICHT statistisch signifikant',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
  },
};
