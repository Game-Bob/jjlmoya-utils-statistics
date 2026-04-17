import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'calcolatore-statistica-descrittiva';
const title = 'Calcolatore di statistica descrittiva online';
const description =
  'Calcola istantaneamente tutte le principali statistiche descrittive: media, mediana, moda, deviazione standard, varianza, quartili, asimmetria, curtosi e altro ancora. Incolla i tuoi dati e ottieni risultati in tempo reale.';

const faqData = [
  {
    question: 'Qual è la differenza tra deviazione standard della popolazione e del campione?',
    answer:
      "La deviazione standard della popolazione divide per N (tutti gli elementi sono noti). La deviazione standard del campione divide per N-1 (correzione di Bessel) per correggere la distorsione quando si stima da un sottoinsieme. Questo calcolatore utilizza la deviazione standard del campione (N-1), che è la scelta più comune nella ricerca e nell'analisi dei dati.",
  },
  {
    question: "Cosa significa un'asimmetria positiva o negativa?",
    answer:
      "L'asimmetria (skewness) misura la mancanza di simmetria della distribuzione dei dati. Un'asimmetria positiva (a destra) significa che la coda si estende verso destra e la maggior parte dei valori si raggruppa a sinistra. Un'asimmetria negativa (a sinistra) è l'opposto. Un valore vicino allo 0 indica una distribuzione approssimativamente simmetrica.",
  },
  {
    question: "Che cos'è la curtosi e cosa indica?",
    answer:
      "La curtosi misura la 'pesantezza' delle code rispetto a una distribuzione normale. Questo calcolatore restituisce la curtosi in eccesso, dove lo 0 è il valore di riferimento (distribuzione normale). Valori positivi (leptocurtica) indicano code più pesanti e picchi più pronunciati. Valori negativi (platicurtica) indicano code più leggere e picchi più piatti.",
  },
  {
    question: 'In quale formato devono essere i miei dati?',
    answer:
      "Incolla i tuoi numeri separati da virgole, spazi, punti e virgola o interruzioni di riga. Esempi: '1, 2, 3, 4' o '1 2 3 4' o un valore per riga. Il calcolatore ignora automaticamente i caratteri non numerici.",
  },
];

const howToData = [
  {
    name: 'Incolla o digita i tuoi dati',
    text: 'Inserisci i tuoi valori numerici nell\'area di testo, separati da virgole, spazi o interruzioni di riga. Sono necessari almeno 2 valori.',
  },
  {
    name: 'Leggi i risultati',
    text: 'Le 15 statistiche si aggiornano istantaneamente mentre digiti. L\'istogramma mostra la forma della distribuzione dei tuoi dati.',
  },
  {
    name: 'Copia il riepilogo',
    text: 'Usa il pulsante \'Copia riepilogo\' per copiare un riepilogo compatto delle statistiche principali da utilizzare nel tuo rapporto o analisi.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    { name: 'Statistica descrittiva - Wikipedia', url: 'https://it.wikipedia.org/wiki/Statistica_descrittiva' },
    { name: 'Deviazione standard - Wikipedia', url: 'https://it.wikipedia.org/wiki/Deviazione_standard' },
    { name: 'Asimmetria (statistica) - Wikipedia', url: 'https://it.wikipedia.org/wiki/Asimmetria_(statistica)' },
    { name: 'Curtosi - Wikipedia', url: 'https://it.wikipedia.org/wiki/Curtosi' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore di statistica descrittiva: tutti i parametri in un unico posto' },
    {
      type: 'paragraph',
      html: 'Che tu sia uno studente, un ricercatore o un analista di dati, il <strong>Calcolatore di statistica descrittiva</strong> ti offre un riepilogo statistico completo e immediato di qualsiasi set di dati numerici. Incolla i tuoi dati e ottieni 15 statistiche calcolate simultaneamente, senza bisogno di software per fogli di calcolo.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Statistiche calcolate', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Risultati in tempo reale', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Senza registrazione', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Statistiche calcolate' },
    {
      type: 'table',
      headers: ['Statistica', 'Descrizione'],
      rows: [
        ['<strong>Conteggio (N)</strong>', 'Numero totale di valori nel set di dati.'],
        ['<strong>Media</strong>', 'La media aritmetica di tutti i valori.'],
        ['<strong>Mediana</strong>', 'Il valore centrale quando i dati sono ordinati. Robusta agli outlier.'],
        ['<strong>Moda</strong>', 'Il valore o i valori che ricorrono più frequentemente.'],
        ['<strong>Deviazione Std</strong>', 'Deviazione standard campionaria (divide per N-1).'],
        ['<strong>Varianza</strong>', 'Quadrato della deviazione standard campionaria.'],
        ['<strong>Min / Max</strong>', 'Valori minimo e massimo nel set di dati.'],
        ['<strong>Intervallo</strong>', 'Differenza tra il valore massimo e quello minimo.'],
        ['<strong>Q1 / Q3</strong>', 'Primo e terzo quartile (25° e 75° percentile).'],
        ['<strong>IQR</strong>', 'Differenza interquartile: Q3 meno Q1. Misura la dispersione centrale.'],
        ['<strong>Asimmetria</strong>', 'Mancanza di simmetria della distribuzione rispetto alla sua media.'],
        ['<strong>Curtosi</strong>', 'Curtosi in eccesso: peso delle code rispetto a una distribuzione normale.'],
      ],
    },
    {
      type: 'tip',
      title: 'Quando usare la mediana invece della media',
      html: 'Se i tuoi dati presentano outlier significativi (es. dati sul reddito, prezzi delle case), la <strong>mediana</strong> è una misura di tendenza centrale più rappresentativa della media, che viene influenzata dai valori estremi.',
    },
    { type: 'title', level: 2, text: 'Interpretazione dell\'istogramma' },
    {
      type: 'paragraph',
      html: 'L\'istogramma di frequenza mostra come i tuoi valori sono distribuiti in classi di uguale ampiezza, calcolate automaticamente utilizzando la <strong>regola di Sturges</strong> (k = 1 + log₂N). Una forma a campana simmetrica suggerisce una distribuzione normale. Forme asimmetriche confermano il valore di asimmetria mostrato nei risultati.',
    },
    { type: 'title', level: 2, text: 'Glossario di riferimento rapido' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Differenza interquartile. La dispersione del 50% centrale dei tuoi dati. Usata per identificare gli outlier.' },
        { term: 'Asimmetria', definition: 'Misura la mancanza di simmetria della distribuzione. Positiva = coda destra più lunga. Negativa = coda sinistra più lunga.' },
        { term: 'Curtosi in eccesso', definition: 'Pesantezza delle code rispetto a una distribuzione normale. 0 è normale; valori positivi indicano code più pesanti.' },
        { term: 'Correzione di Bessel', definition: 'Dividere per N-1 invece di N quando si calcola la varianza campionaria per ridurre la distorsione nella stima.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Statistica descrittiva',
    labelData: 'Inserisci i tuoi dati',
    placeholderData: 'es. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Inserisci almeno 2 valori numerici separati da virgole, spazi o interruzioni di riga.',
    hintError: 'Inserisci almeno 2 valori numerici validi per calcolare le statistiche.',
    btnSample: 'Campione',
    btnPopulation: 'Popolazione',
    groupCentral: 'Tendenza centrale',
    groupDispersion: 'Dispersione',
    groupPosition: 'Posizione',
    labelCount: 'Conteggio (N)',
    labelSum: 'Somma',
    labelMean: 'Media',
    labelMedian: 'Mediana',
    labelMode: 'Moda',
    labelStdDev: 'Dev. Std.',
    labelVariance: 'Varianza',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Max',
    labelRange: 'Intervallo',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Asimmetria',
    labelKurtosis: 'Curtosi',
    labelBoxplot: 'Box plot',
    labelChart: 'Distribuzione di frequenza',
    chartDesc: 'Istogramma con ampiezza delle classi automatica utilizzando la regola di Sturges.',
    insightTitle: 'Interpretazione automatica',
    insightHomogeneous: 'I dati sono omogenei (CV < 15%).',
    insightModerate: 'I dati mostrano una variabilità moderata (CV 15-35%).',
    insightHeterogeneous: 'I dati sono eterogenei (CV > 35%).',
    insightSymmetric: 'La distribuzione è approssimativamente simmetrica.',
    insightRightSkewed: 'La distribuzione mostra un\'asimmetria positiva (coda a destra).',
    insightLeftSkewed: 'La distribuzione mostra un\'asimmetria negativa (coda a sinistra).',
    insightNoOutliers: 'Nessun outlier rilevato.',
    insightOutliers: '{n} outlier rilevati utilizzando il metodo IQR.',
    insightIQR: 'L\'intervallo interquartile è {iqr} (da {q1} a {q3}).',
    filterNotice: '{n} caratteri non numerici ignorati.',
    labelReport: 'Riepilogo per il tuo rapporto',
    btnCopy: 'Copia riepilogo',
    btnCopied: 'Copiato!',
    noMode: 'Nessuna moda',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
  },
};
