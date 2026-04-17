import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-quadrat-unabhaengigkeitstest-rechner';
const title = 'Chi-Quadrat-Unabhängigkeitstest Rechner Online';
const description =
  'Bestimmen Sie, ob eine statistische Beziehung zwischen zwei kategorialen Variablen besteht. Füllen Sie die beobachtete Häufigkeitsmatrix aus und berechnen Sie den P-Wert sofort.';

const faqData = [
  {
    question: 'Was ist der Chi-Quadrat-Unabhängigkeitstest?',
    answer:
      'Es handelt sich um einen statistischen Test zur Bewertung der Wahrscheinlichkeit, dass ein beobachteter Zusammenhang zwischen zwei kategorialen oder nominalen Variablen auf Zufall beruht. Zum Beispiel: ob das Lieblingsdessert einer Person mit der Region zusammenhängt, in der sie lebt.',
  },
  {
    question: 'Wofür wird der Cramér-V-Koeffizient verwendet?',
    answer:
      'Während Chi-Quadrat Ihnen sagt, ob "überhaupt" eine Beziehung besteht, sagt Ihnen Cramér-V, "wie stark" diese Beziehung ist. Er reicht von 0 (totale Unabhängigkeit) bis 1 (absolute mathematische Abhängigkeit). Werte über 0,5 gelten soziologisch als sehr stark.',
  },
  {
    question: 'Was passiert, wenn meine erwarteten Häufigkeiten sehr niedrig sind?',
    answer:
      'Die mathematische Chi-Quadrat-Annäherung verliert an Zuverlässigkeit, wenn die erwarteten Häufigkeiten in mehr als 20 % der Zellen kleiner als 5 sind. Unser Tool wird Sie visuell warnen, wenn ein Risiko besteht. In diesem Fall wird empfohlen, fragwürdige Kategorien zusammenzufassen.',
  },
  {
    question: 'Kann ich dies für qualitative Umfragen verwenden?',
    answer:
      'Absolut ja. Es ist das primäre Werkzeug für Soziologie und Marktforschung, wo man selten mit Dezimalzahlen, sondern eher mit sich gegenseitig ausschließenden Kategorien (ledig/verheiratet, ja/nein, Nord/Süd) zu tun hat.',
  },
];

const howToData = [
  {
    name: 'Matrix definieren',
    text: 'Wählen Sie zunächst die Größe Ihrer Kontingenztabelle basierend darauf aus, wie viele Optionen Ihre Variable A (Zeilen) und Variable B (Spalten) haben.',
  },
  {
    name: 'Beobachtete Daten eingeben',
    text: 'Ersetzen Sie die Basiswerte, indem Sie die erste Tabelle mit der genauen Anzahl Ihrer realen Daten füllen.',
  },
  {
    name: 'Residuen überprüfen',
    text: 'Beobachten Sie, welche Zellen in unserer Tabelle aufleuchten (entweder hellgrün oder rot). Dort liegen die Anomalien, die dazu führen, dass die Variablen nicht unabhängig sind.',
  },
  {
    name: 'Schlussfolgerung kopieren',
    text: 'Fügen Sie den automatisch generierten Text mit der mathematischen Untermauerung des P-Werts in Ihre Abschlussarbeit oder Ihren Projektbericht ein.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    {
      name: 'Chi-Quadrat-Test - Wikipedia',
      url: 'https://de.wikipedia.org/wiki/Chi-Quadrat-Test',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Chi-Quadrat-Unabhängigkeitstest Rechner',
    },
    {
      type: 'paragraph',
      html: 'Während klassische Werkzeuge wie der A/B-Test oder die deskriptive Statistik hervorragend mit kontinuierlichen Zahlen (Mittelwerte, Einnahmen, Gewichte) funktionieren, ist die reale Welt voller kategorialer Daten (Farben, Marken, Zufriedenheitsgrade). Der <strong>Chi-Quadrat-Unabhängigkeitsrechner</strong> ist der "Königstest", um analytisch zu bestimmen, ob zwei qualitative Variablen statistisch verbunden sind oder ob sie völlig unabhängig voneinander variieren.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabelle', label: 'Dynamisch bis 3×3', icon: 'mdi:table' },
        { value: 'Cramér-V', label: 'Zusammenhangsstärke', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Residuen & Abweichung', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Wofür genau wird die Chi-Quadrat-Statistik (χ²) verwendet?',
    },
    {
      type: 'paragraph',
      html: 'Der Chi-Quadrat-Unabhängigkeitstest vergleicht <em>beobachtete Häufigkeiten</em> (die realen Zahlen, die Sie gemessen und gesammelt haben) mit <em>erwarteten Häufigkeiten</em> (die Anzahl, die wir in jeder Zelle erwarten würden, wenn es überhaupt keine Interaktion zwischen den Variablen gäbe).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Abhängige Variablen (Beziehung besteht)',
          description: 'Die Proportionen einer Kategorie variieren stark in Abhängigkeit von der anderen.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Beispiel: Mobile Besucher bevorzugen Design A, PC-Nutzer dagegen Design B.',
            'Das Chi-Quadrat (χ²) steigt an und der P-Wert sinkt.',
            'Cramér-V zeigt die Stärke an (z. B. Stark > 0,5).',
          ],
        },
        {
          title: 'Unabhängige Variablen (Zufall)',
          description: 'Die Proportionen bleiben über alle Ebenen hinweg stabil.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Beispiel: Die Augenfarbe eines Kunden hat keinen Einfluss darauf, welche Automarke er kauft.',
            'Chi-Quadrat ist winzig und der P-Wert ist größer als 0,05.',
            'Die Nullhypothese kann nicht verworfen werden.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Cramér-V: Die Stärke des Zusammenhangs verstehen',
    },
    {
      type: 'paragraph',
      html: 'Einen sehr niedrigen P-Wert zu erhalten bedeutet nicht, dass die Variablen "intensiv" verknüpft sind; es zeigt nur an, dass der Zufall nicht der Verursacher sein kann (vielleicht weil Sie Zehntausende realer Fälle haben). Um die "Effektstärke" zu messen, integrieren wir automatisch den <strong>Cramér-V-Koeffizienten</strong>.',
    },
    {
      type: 'table',
      headers: ['Rechner (V-Wert)', 'Analytische Bewertung', 'Übersetzung'],
      rows: [
        [
          '<strong>0,00 bis 0,10</strong>',
          'Kein / trivialer Zusammenhang',
          'Theoretisch abhängig, aber unmerklich und für geschäftliche Zwecke nutzlos.',
        ],
        [
          '<strong>0,11 bis 0,30</strong>',
          'Schwacher Zusammenhang',
          'Es besteht eine leichte Verbindung, aber viele andere externe Faktoren fallen stärker ins Gewicht.',
        ],
        [
          '<strong>0,31 bis 0,50</strong>',
          'Moderater Zusammenhang',
          'Beide Merkmale beeinflussen sich gegenseitig spürbar.',
        ],
        [
          '<strong>Über 0,50</strong>',
          'Starker Zusammenhang',
          'Sehr klare Verbindung. Die Kenntnis der Variable A lässt die Variable B bemerkenswert gut vorhersagen.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Mathematische Machbarkeitsbedingungen',
      html: 'Vorsicht vor leeren Zellen! Damit die Chi-Quadrat-Annäherung nach Pearson unter der Glockenkurve robust bleibt, ist es methodisch erforderlich, dass mindestens 80 % der <em>erwarteten Häufigkeiten</em> (nicht der beobachteten) größer als 5 sind und keine Zelle unter 1 liegt. Wenn diese Bedingung nicht erfüllt ist, wird unsere Warnanzeige ausgelöst und empfiehlt Ihnen, Kategorien zusammenzufassen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Integrierte Residuen-Heatmap',
    },
    {
      type: 'paragraph',
      html: 'Um die Benutzererfahrung zu verbessern und Schlussfolgerungen für Berichte zu erleichtern, färbt unsere Matrix den Hintergrund der Zellen automatisch basierend auf ihren standardisierten Residuen (Abweichung) ein:<br/><br/><strong>Grüntöne:</strong> Die Zelle hat <em>viel mehr Erfolge</em>, als rein mathematisch zu erwarten wäre.<br/><strong>Rottöne:</strong> Die Zelle ist im Vergleich zur erwarteten Norm gefährlich "leer".',
    },
    {
      type: 'title',
      level: 2,
      text: 'Chi-Quadrat-Glossar',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Beobachtete Häufigkeit',
          definition: 'Die Anzahl genau so, wie Sie sie im Labor oder in Umfragen physisch gezählt haben.',
        },
        {
          term: 'Erwartete Häufigkeit',
          definition: 'Theoretische Berechnung, die sich aus der Kreuzung des Randverhältnisses der Zeile mit dem der Spalte ergibt.',
        },
        {
          term: 'Freiheitsgrade (df)',
          definition: 'Die geometrische Menge an freien Daten. Wird ermittelt, indem man 1 von Zeilen und Spalten abzieht und diese multipliziert.',
        },
        {
          term: 'Standardisiertes Residuum',
          definition: 'Normalisierte Differenz zwischen beobachtetem und erwartetem Wert. Misst, welche Zelle die Entdeckung am stärksten "vorantreibt".',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Einstellungen',
    labelTableSize: 'Tabellengröße (Zeilen × Spalten)',
    labelAlpha: 'Signifikanzniveau (α)',
    alpha90: '0,10 (90 %)',
    alpha95: '0,05 (95 %)',
    alpha99: '0,01 (99 %)',
    infoText:
      'Berechnet automatisch die theoretische Häufigkeit, den χ²-Wert und die Zusammenhangsstärke Cramér-V unter Verwendung rein lokaler Inferenz.',
    labelObserved: 'Beobachtete Häufigkeiten (Eingabe)',
    btnShowExpected: 'Erwartete Häufigkeiten anzeigen (H₀)',
    expectedDesc:
      'Dies sind die Werte, die in jeder Zelle existieren würden, wenn es überhaupt keine Beziehung zwischen den beiden Variablen gäbe (Zufallsverteilung).',
    alertTitle: 'Statistische Warnung (Zellen < 5)',
    alertBody:
      'Es liegen sehr niedrige erwartete Häufigkeiten vor. Die χ²-Annäherung ist möglicherweise nicht zuverlässig. Es wird empfohlen, Kategorien zusammenzufassen oder den exakten Fisher-Test zu verwenden.',
    labelPValue: 'P-Wert (p)',
    sigDescInitial: 'Signifikanter Zusammenhang besteht',
    labelGlobalStats: 'Globale Statistiken',
    labelChiSquareStat: 'Chi-Quadrat (χ²)',
    labelDegrees: 'Freiheitsgrade (df)',
    labelCramer: 'Zusammenhangsstärke (Cramér-V)',
    labelVisualization: 'Visualisierung der Residuen (Beobachtet vs. Erwartet)',
    heatmapInfo: 'Die Zellen der Tabelle werden entsprechend der Residuenabweichung eingefärbt.',
    labelReport: 'Text für Ihren Bericht',
    defaultJustification:
      'Nach Analyse von insgesamt N Beobachtungen haben wir einen χ²(df) = X Wert gefunden. Bei einem P-Wert von P wird geschlussfolgert, dass eine signifikante Abhängigkeit besteht.',
    btnCopy: 'Text kopieren',
    rowLabel: 'Zeile',
    colLabel: 'Spalte',
    totalLabel: 'GESAMT',
    cramerNull: 'Keine',
    cramerWeak: 'Schwach',
    cramerModerate: 'Moderat',
    cramerStrong: 'Stark',
    sigText: 'Signifikanter Zusammenhang besteht (Abhängigkeit).',
    noSigText: 'Kein Nachweis einer Beziehung (Unabhängigkeit).',
    chartLegendObs: 'Beobachtete Zeile',
    chartLegendExp: 'Erwartet',
    btnCopied: 'Kopiert!',
    justificationIntro: 'Nach Analyse von',
    justificationTableOf: 'Fällen in einer',
    justificationObtained: ' Tabelle erhielten wir',
    justificationPAt: '. Ausgewertet auf dem Niveau α=',
    justificationConcluded: ' wird empirisch geschlussfolgert, dass',
    justificationSig: 'ein STARKER ZUSAMMENHANG zwischen den Variablen BESTEHT (Cramér-V:',
    justificationNoSig: 'KEIN statistisch signifikanter Zusammenhang BESTEHT',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
  },
};
