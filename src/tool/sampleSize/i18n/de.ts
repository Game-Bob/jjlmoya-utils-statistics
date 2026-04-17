import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'stichprobenrechner';
const title = 'Stichprobenrechner Online';
const description =
  'Berechnen Sie die genaue Anzahl der für Ihre Studie benötigten Personen. Enthält Optionen für endliche oder unendliche Grundgesamtheiten, einstellbare Konfidenzniveaus und Fehlermargen.';

const faqData = [
  {
    question: 'Was ist die Größe der Grundgesamtheit?',
    answer:
      'Dies ist die Gesamtzahl der Personen, die die Gruppe bilden, die Sie untersuchen oder befragen möchten. Wenn sie weniger als 100.000 beträgt, wird sie normalerweise als endliche Grundgesamtheit betrachtet. Wenn Sie diese Daten nicht haben oder sie unüberschaubar sind, wählen Sie die Option für die unendliche Grundgesamtheit.',
  },
  {
    question: 'Welches Konfidenzniveau sollte ich wählen?',
    answer:
      '95 % ist der am weitesten verbreitete Standard in der wissenschaftlichen Forschung, in Abschlussarbeiten und Marktstudien. Ändern Sie diesen Wert nur, wenn Ihr Professor, Tutor oder Mandant ein anderes Präzisionsniveau erfordert (z. B. 99 %).',
  },
  {
    question: 'Warum fragt das Tool nach einer Fehlermarge?',
    answer:
      'Keine Stichprobe ist perfekt. Die Fehlermarge definiert das Maß an Ungenauigkeit, das Sie zu akzeptieren bereit sind. Am gebräuchlichsten sind 5 %.',
  },
  {
    question: 'Welchen erwarteten Anteil (p) sollte ich verwenden, wenn ich nichts über die Grundgesamtheit weiß?',
    answer:
      'Lassen Sie den Standardwert: 50 %. In der Statistik stellt dies das "Worst-Case-Szenario" dar, da es die Varianz p(1-p) maximiert und sicherstellt, dass Ihre Stichprobengröße unter keinen Umständen zu klein ist.',
  },
];

const howToData = [
  {
    name: 'Definieren Sie Ihre Grundgesamtheit',
    text: 'Geben Sie an, ob Sie die Gesamtzahl der zu untersuchenden Gruppe kennen (Endlich) oder eine konservative Berechnung für sehr große/unbekannte Gruppen bevorzugen (Unendlich).',
  },
  {
    name: 'Passen Sie Ihr Konfidenzniveau an',
    text: 'Wählen Sie 95 % (empfohlen) oder geben Sie im Dropdown-Menü einen benutzerdefinierten Wert ein.',
  },
  {
    name: 'Legen Sie die Fehlermarge fest',
    text: 'Geben Sie die Fehlertoleranz an. Denken Sie daran, dass eine Reduzierung von 5 % auf 2 % die Anzahl der Umfragen, die Sie durchführen müssen, drastisch vervielfacht.',
  },
  {
    name: 'Kopieren Sie das Ergebnis',
    text: 'Schauen Sie auf das mittlere Feld und kopieren Sie direkt den automatisch generierten Begründungstext, um ihn Ihrer Abschlussarbeit oder Ihrem Bericht hinzuzufügen.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Bibliographie & Referenzen',
  bibliography: [
    { name: 'Stichprobenumfang - Wikipedia', url: 'https://de.wikipedia.org/wiki/Stichprobenumfang' },
    { name: 'Stichprobenberechnung - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Stichprobenrechner Online: Der definitive Leitfaden' },
    {
      type: 'paragraph',
      html: 'Die Bestimmung der richtigen Anzahl an zu befragenden Personen ist einer der kritischsten Schritte in jeder Forschung, Marktstudie oder akademischen Arbeit. Der <strong>Stichprobenrechner</strong> bietet Studierenden, Forschern und Marketingprofis ein präzises, schnelles und einfach zu bedienendes Werkzeug zur Berechnung der für statistisch signifikante Ergebnisse erforderlichen Personenanzahl.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95 %', label: 'Standard-Konfidenz', icon: 'mdi:check-decagram' },
        { value: '5 %', label: 'Fehlermarge', icon: 'mdi:target' },
        { value: 'Schnell', label: 'Echtzeit-Berechnung', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Warum ist die Berechnung des Stichprobenumfangs grundlegend?' },
    {
      type: 'paragraph',
      html: 'In der Statistik ist es selten möglich, eine gesamte Grundgesamtheit zu untersuchen. Die Lösung besteht darin, eine repräsentative Teilgruppe auszuwählen, die als Stichprobe bezeichnet wird. Ist die Stichprobe zu klein, sind die Ergebnisse verzerrt. Ist sie zu groß, verschwenden Sie unnötig Zeit und Geld.',
    },
    { type: 'title', level: 2, text: 'Die zwei Berechnungsmodi: Endliche und unendliche Grundgesamtheit' },
    {
      type: 'paragraph',
      html: 'Unser Rechner passt sich Ihrer Situation an, indem er zwei verschiedene Berechnungsmodi anbietet.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Endliche Grundgesamtheit (Bekannt)',
          description: 'Die exakte Gesamtzahl der Individuen ist bekannt.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Erfordert den N-Wert',
            'Wendet Korrekturfaktor an',
            'Reduziert den endgültigen Stichprobenumfang',
          ],
        },
        {
          title: 'Unendliche Grundgesamtheit (Unbekannt)',
          description: 'Gesamtgröße unbekannt, unüberschaubar oder größer als 100.000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Erfordert keine Kenntnis von N',
            'Klassische Standardformel',
            'Konservativstes und sicherstes Szenario',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Verständnis der Parameter des Kontrollfelds' },
    {
      type: 'table',
      headers: ['Parameter', 'Beschreibung', 'Standardempfehlung'],
      rows: [
        ['<strong>Konfidenzniveau (Z)</strong>', 'Mathematische Gewissheit, dass die Stichprobe die Grundgesamtheit repräsentiert.', 'Verwenden Sie 95 %.'],
        ['<strong>Fehlermarge (e)</strong>', 'Zulässiger Prozentsatz der Abweichung von der Realität.', 'Verwenden Sie 5 %.'],
        ['<strong>Erwarteter Anteil (p)</strong>', 'Wahrscheinlichkeit, dass das untersuchte Ereignis eintritt.', 'Verwenden Sie 50 % (maximiert die Varianz).'],
      ],
    },
    {
      type: 'tip',
      title: 'Vorsicht bei der Fehlermarge',
      html: 'Die Reduzierung der Fehlermarge von 5 % auf 2 % erfordert eine exponentielle Erhöhung des Stichprobenumfangs. Überprüfen Sie das Sensitivitätsdiagramm im Rechner, bevor Sie sich für eine zu strenge Marge entscheiden.',
    },
    { type: 'title', level: 2, text: 'Die mathematische Formel hinter der Berechnung' },
    {
      type: 'list',
      items: [
        '<strong>Unendliche Grundgesamtheit:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Kritischer Wert abgeleitet vom Konfidenzniveau.',
        '<strong>p:</strong> Erwarteter Anteil (q ist 1 - p).',
        '<strong>e:</strong> Zulässige Fehlermarge.',
      ],
    },
    { type: 'title', level: 2, text: 'Kurzes Glossar für Forscher' },
    {
      type: 'glossary',
      items: [
        { term: 'Grundgesamtheit (N)', definition: 'Gesamtmenge der Elemente oder Personen, die ein Merkmal teilen und Gegenstand der Untersuchung sind.' },
        { term: 'Stichprobe (n)', definition: 'Aus der Grundgesamtheit ausgewählte repräsentative Teilmenge.' },
        { term: 'Maximale Varianz', definition: 'Tritt ein, wenn p=0,5 (50 %) ist, wodurch sichergestellt wird, dass die berechnete Stichprobe für den denkbarsten Fall tragfähig ist.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameter',
    labelPopType: 'Typ der Grundgesamtheit',
    btnFinite: 'Endlich (Bekannt)',
    btnInfinite: 'Unendlich (Unbekannt)',
    labelPopSize: 'Größe der Grundgesamtheit',
    labelConfLevel: 'Konfidenzniveau (%)',
    conf90: '90 %',
    conf95: '95 %',
    conf99: '99 %',
    confCustom: 'Benutzerdefiniert',
    labelConfCustom: 'Benutzerdefiniertes Konfidenzniveau (%)',
    labelErrorMargin: 'Fehlermarge (%)',
    labelProportion: 'Erwarteter Anteil',
    hintProportion: '50 % ist der "Worst-Case", der die größte und sicherste Stichprobe ergibt.',
    hintProportionError: 'Ein Anteil von 0 % oder 100 % macht die Stichprobe ungültig. Wir empfehlen Werte zwischen 5 % und 95 %.',
    labelSampleSize: 'Vorgeschlagene Größe',
    labelSampleSub: 'benötigte Umfragen',
    labelZValue: 'Kritischer Wert',
    labelReport: 'Text für Ihren Bericht',
    defaultJustification: 'Für eine Grundgesamtheit von 10.000 Personen, mit einem Konfidenzniveau von 95 % und einer Fehlermarge von 5 %, beträgt der repräsentative Stichprobenumfang 370 Personen.',
    btnCopy: 'Text kopieren',
    btnCopied: 'Kopiert!',
    labelChart: 'Sensitivität: Umfang vs. Fehlermarge',
    chartDesc: 'Beobachten Sie, wie der Stichprobenumfang in die Höhe schnellt, wenn Sie versuchen, die Fehlermarge zu reduzieren.',
    justForFinite: 'Für eine Grundgesamtheit von',
    justPersons: 'Personen',
    justForInfinite: 'Für eine unendliche Grundgesamtheit',
    justConfidence: ', mit einem Konfidenzniveau von',
    justError: ' % und einer Fehlermarge von',
    justResultIs: ' %, beträgt der repräsentative Stichprobenumfang',
    justUnit: 'Personen.',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Bibliographie & Referenzen',
  },
};
