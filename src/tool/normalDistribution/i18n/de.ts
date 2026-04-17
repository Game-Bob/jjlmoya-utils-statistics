import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'rechner-normalverteilung';
const title = 'Rechner für Normalverteilung online';
const description =
  'Berechnen Sie Wahrscheinlichkeiten der Normalverteilung sofort: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) und die inverse Normalverteilung. Geben Sie Mittelwert und Standardabweichung ein und visualisieren Sie die Gaußsche Glockenkurve mit der schattierten Fläche.';

const faqData = [
  {
    question: 'Was ist die Normalverteilung?',
    answer:
      "Die Normalverteilung, auch Gaußsche Glockenkurve genannt, ist die wichtigste kontinuierliche Wahrscheinlichkeitsverteilung in der Statistik. Sie wird durch zwei Parameter definiert: den Mittelwert (μ), der das Zentrum festlegt, und die Standardabweichung (σ), die die Streuung steuert. Sie ist symmetrisch zum Mittelwert und ihre Ausläufer erstrecken sich bis ins Unendliche.",
  },
  {
    question: 'Wie wird die Wahrscheinlichkeit berechnet?',
    answer:
      "Die Wahrscheinlichkeit wird durch Integration der Wahrscheinlichkeitsdichtefunktion (PDF) ermittelt. Da es keine geschlossene Stammfunktion gibt, wird sie mit der Fehlerfunktion (erf) berechnet. Dieser Rechner verwendet die hochpräzise Näherung von Abramowitz und Stegun, um genaue Ergebnisse zu erzielen.",
  },
  {
    question: 'Was ist ein Z-Wert?',
    answer:
      'Ein Z-Wert (oder Standardwert) gibt an, wie viele Standardabweichungen ein Wert vom Mittelwert entfernt ist: z = (X - μ) / σ. Er ermöglicht den Vergleich von Werten aus Verteilungen mit unterschiedlichen Skalen. Ein Z-Wert von 1 bedeutet beispielsweise, dass X genau eine Standardabweichung über dem Mittelwert liegt.',
  },
  {
    question: 'Wofür wird die inverse Normalverteilung verwendet?',
    answer:
      'Die inverse Normalverteilung beantwortet die Frage: Welcher Wert X entspricht dem p-ten Perzentil? Das heißt, gegeben P(X ≤ x) = p, finde x. Sie wird häufig in der Qualitätskontrolle (Toleranzgrenzen), der induktiven Statistik (kritische Werte) und bei der Simulation von Zufallsvariablen verwendet.',
  },
];

const howToData = [
  {
    name: 'Parameter eingeben',
    text: 'Geben Sie den Mittelwert (μ) und die Standardabweichung (σ > 0) Ihrer Normalverteilung ein. Standardmäßig wird die Standardnormalverteilung (μ=0, σ=1) verwendet.',
  },
  {
    name: 'Berechnungsart wählen',
    text: 'Wählen Sie einen Modus: P(X ≤ a) für den linken Rand, P(X ≥ a) für den rechten Rand, P(a ≤ X ≤ b) für ein Intervall oder Invers, um den Wert X für ein bestimmtes Perzentil zu finden.',
  },
  {
    name: 'Ergebnis und Diagramm lesen',
    text: 'Die Wahrscheinlichkeit wird zusammen mit dem Z-Wert sofort angezeigt. Die Gaußsche Glockenkurve zeigt die schattierte Fläche, die der berechneten Wahrscheinlichkeit entspricht.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    { name: 'Normalverteilung - Wikipedia', url: 'https://de.wikipedia.org/wiki/Normalverteilung' },
    { name: 'Fehlerfunktion - Wikipedia', url: 'https://de.wikipedia.org/wiki/Fehlerfunktion' },
    { name: 'Abramowitz und Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Standardisierung (Statistik) - Wikipedia', url: 'https://de.wikipedia.org/wiki/Standardisierung_(Statistik)' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Rechner für Normalverteilung: Wahrscheinlichkeiten in Echtzeit' },
    {
      type: 'paragraph',
      html: 'Der <strong>Rechner für Normalverteilung</strong> berechnet jede Wahrscheinlichkeit der Normalverteilung sofort: linker Rand, rechter Rand, zentrales Intervall und invers. Geben Sie einfach Mittelwert und Standardabweichung ein, um das Ergebnis zu erhalten und es auf der Gaußschen Glockenkurve zu visualisieren.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Berechnungsmodi', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Echtzeit-Ergebnisse', icon: 'mdi:lightning-bolt' },
        { value: 'Kostenlos', label: 'Ohne Anmeldung', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Berechnungsmodi' },
    {
      type: 'table',
      headers: ['Modus', 'Beschreibung', 'Beispielanwendung'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Kumulierte Wahrscheinlichkeit bis Wert a (linker Rand).', 'Prozentsatz der Schüler unter einer Notenschwelle.'],
        ['<strong>P(X ≥ a)</strong>', 'Rechtsschwänzige Wahrscheinlichkeit ab Wert a.', 'Wahrscheinlichkeit für das Überschreiten einer Qualitätsschwelle.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Wahrscheinlichkeit innerhalb eines zentralen oder asymmetrischen Intervalls.', 'Anteil der Teile innerhalb der Toleranz.'],
        ['<strong>Invers</strong>', 'Finde X, so dass P(X ≤ x) = p (das p-te Perzentil).', 'Kritischer Wert in einem Hypothesentest.'],
      ],
    },
    {
      type: 'tip',
      title: 'Die empirische 68-95-99,7-Regel',
      html: 'In jeder Normalverteilung liegen: <strong>68 %</strong> der Daten innerhalb von ±1σ um den Mittelwert, <strong>95 %</strong> innerhalb von ±2σ und <strong>99,7 %</strong> innerhalb von ±3σ. Überprüfen Sie dies, indem Sie P(-1 ≤ z ≤ 1) mit μ=0 und σ=1 berechnen.',
    },
    { type: 'title', level: 2, text: 'Kurzreferenz Glossar' },
    {
      type: 'glossary',
      items: [
        { term: 'Mittelwert (μ)', definition: 'Lageparameter. Bestimmt das Zentrum der Gaußschen Glockenkurve.' },
        { term: 'Standardabweichung (σ)', definition: 'Skalenparameter. Steuert die Breite der Glockenkurve. Muss streng positiv sein.' },
        { term: 'Z-Wert', definition: 'Standardisierter Wert: z = (X - μ) / σ. Gibt an, wie viele Standardabweichungen X vom Mittelwert entfernt ist.' },
        { term: 'PDF', definition: 'Wahrscheinlichkeitsdichtefunktion. Die Fläche unter der PDF über einem Intervall entspricht der Wahrscheinlichkeit dieses Intervalls.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Normalverteilung',
    labelMean: 'Mittelwert',
    labelStdDev: 'Standardabweichung',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Invers',
    labelValue: 'Wert X (a)',
    labelValueA: 'Untere Grenze (a)',
    labelValueB: 'Obere Grenze (b)',
    labelPercentile: 'Perzentil p (0 < p < 1)',
    resultProbability: 'Wahrscheinlichkeit',
    resultX: 'Wert X',
    resultZScore: 'Z-Wert',
    resultZScoreA: 'z₁ (untere Grenze)',
    resultZScoreB: 'z₂ (obere Grenze)',
    hintStdDev: 'Die Standardabweichung muss größer als 0 sein.',
    hintPercentile: 'Das Perzentil muss zwischen 0 und 1 liegen (exklusiv).',
    labelChart: 'Gaußsche Glockenkurve',
    chartDesc: 'Die schattierte Fläche entspricht der berechneten Wahrscheinlichkeit.',
    labelReport: 'Zusammenfassung für Ihren Bericht',
    btnCopy: 'Zusammenfassung kopieren',
    btnCopied: 'Kopiert!',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
  },
};
