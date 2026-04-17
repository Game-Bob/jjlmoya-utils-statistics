import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'calcolatore-distribuzione-normale';
const title = 'Calcolatore distribuzione normale online';
const description =
  'Calcola istantaneamente le probabilità della distribuzione normale: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) e normale inversa. Inserisci media e deviazione standard e visualizza la curva a campana di Gauss con l\'area ombreggiata.';

const faqData = [
  {
    question: 'Cos\'è la distribuzione normale?',
    answer:
      "La distribuzione normale, o curva a campana di Gauss, è la più importante distribuzione di probabilità continua in statistica. È completamente definita da due parametri: la media (μ), che stabilisce il centro, e la deviazione standard (σ), che controlla la dispersione. È simmetrica rispetto alla media e le sue code si estendono all'infinito.",
  },
  {
    question: 'Come viene calcolata la probabilità?',
    answer:
      "La probabilità si ottiene integrando la funzione di densità di probabilità (PDF). Poiché non esiste una primitiva in forma chiusa, viene calcolata utilizzando la funzione di errore (erf). Questo calcolatore utilizza l'approssimazione ad alta precisione di Abramowitz e Stegun per produrre risultati accurati.",
  },
  {
    question: 'Cos\'è un punteggio z?',
    answer:
      'Un punteggio z (o punteggio standard) indica di quante deviazioni standard un valore è distante dalla media: z = (X - μ) / σ. Consente il confronto di valori provenienti da distribuzioni con scale diverse. Ad esempio, z = 1 significa che X è esattamente 1 deviazione standard sopra la media.',
  },
  {
    question: 'A cosa serve la distribuzione normale inversa?',
    answer:
      'La normale inversa risponde alla domanda: quale valore X corrisponde al p-esimo percentile? Ovvero, dato P(X ≤ x) = p, trovare x. È ampiamente utilizzata nel controllo qualità (limiti di tolleranza), nella statistica inferenziale (valori critici) e nella simulazione di variabili casuali.',
  },
];

const howToData = [
  {
    name: 'Inserisci i parametri',
    text: 'Digita la media (μ) e la deviazione standard (σ > 0) della tua distribuzione normale. La distribuzione normale standard (μ=0, σ=1) è usata per impostazione predefinita.',
  },
  {
    name: 'Scegli il tipo di calcolo',
    text: 'Seleziona una modalità: P(X ≤ a) per la coda sinistra, P(X ≥ a) per la coda destra, P(a ≤ X ≤ b) per un intervallo, o Inversa per trovare il valore X per un dato percentile.',
  },
  {
    name: 'Leggi il risultato e il grafico',
    text: 'La probabilità viene visualizzata istantaneamente insieme al punteggio z. La curva a campana di Gauss mostra l\'area ombreggiata corrispondente alla probabilità calcolata.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    { name: 'Distribuzione normale - Wikipedia', url: 'https://it.wikipedia.org/wiki/Distribuzione_normale' },
    { name: 'Funzione di errore - Wikipedia', url: 'https://it.wikipedia.org/wiki/Funzione_di_errore' },
    { name: 'Abramowitz e Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Punto z - Wikipedia', url: 'https://it.wikipedia.org/wiki/Punto_z' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore distribuzione normale: probabilità in tempo reale' },
    {
      type: 'paragraph',
      html: 'Il <strong>Calcolatore distribuzione normale</strong> calcola istantaneamente qualsiasi probabilità della distribuzione normale: coda sinistra, coda destra, intervallo centrale e inversa. Basta inserire la media e la deviazione standard per ottenere il risultato e visualizzarlo sulla curva a campana di Gauss.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Modalità di calcolo', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Risultati in tempo reale', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Senza registrazione', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Modalità di calcolo' },
    {
      type: 'table',
      headers: ['Modalità', 'Descrizione', 'Esempio di utilizzo'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilità cumulata fino al valore a (coda sinistra).', 'Percentuale di studenti al di sotto di una soglia di voto.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilità della coda destra a partire dal valore a.', 'Probabilità di superare una soglia di qualità.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilità all\'interno di un intervallo centrale o asimmetrico.', 'Proporzione di parti entro la tolleranza.'],
        ['<strong>Inversa</strong>', 'Trova X tale che P(X ≤ x) = p (il p-esimo percentile).', 'Valore critico in un test di ipotesi.'],
      ],
    },
    {
      type: 'tip',
      title: 'La regola empirica 68-95-99,7',
      html: 'In qualsiasi distribuzione normale: il <strong>68%</strong> dei dati ricade entro ±1σ dalla media, il <strong>95%</strong> entro ±2σ e il <strong>99,7%</strong> entro ±3σ. Verificalo calcolando P(-1 ≤ z ≤ 1) con μ=0 e σ=1.',
    },
    { type: 'title', level: 2, text: 'Glossario di riferimento rapido' },
    {
      type: 'glossary',
      items: [
        { term: 'Media (μ)', definition: 'Parametro di posizione. Determina il centro della curva a campana di Gauss.' },
        { term: 'Deviazione standard (σ)', definition: 'Parametro di scala. Controlla l\'ampiezza della curva a campana. Deve essere strettamente positiva.' },
        { term: 'Punteggio z', definition: 'Valore standardizzato: z = (X - μ) / σ. Indica di quante deviazioni standard X dista dalla media.' },
        { term: 'PDF', definition: 'Funzione di densità di probabilità. L\'area sotto la PDF in un intervallo è uguale alla probabilità di quell\'intervallo.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribuzione normale',
    labelMean: 'Media',
    labelStdDev: 'Dev. Std.',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inversa',
    labelValue: 'Valore X (a)',
    labelValueA: 'Limite inferiore (a)',
    labelValueB: 'Limite superiore (b)',
    labelPercentile: 'Percentile p (0 < p < 1)',
    resultProbability: 'Probabilità',
    resultX: 'Valore X',
    resultZScore: 'Punteggio z',
    resultZScoreA: 'z₁ (limite inferiore)',
    resultZScoreB: 'z₂ (limite superiore)',
    hintStdDev: 'La deviazione standard deve essere maggiore di 0.',
    hintPercentile: 'Il percentile deve essere compreso tra 0 e 1 (esclusi).',
    labelChart: 'Curva a campana di Gauss',
    chartDesc: 'L\'area ombreggiata corrisponde alla probabilità calcolata.',
    labelReport: 'Riepilogo per il tuo rapporto',
    btnCopy: 'Copia riepilogo',
    btnCopied: 'Copiato!',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
  },
};
