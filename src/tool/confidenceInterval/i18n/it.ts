import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'calcolatore-intervallo-confidenza';
const title = 'Calcolatore intervallo di confidenza online';
const description =
  `Calcola gli intervalli di confidenza per la media della popolazione utilizzando le distribuzioni Z o t di Student. Inserisci la media campionaria, la deviazione standard, la dimensione del campione e il livello di confidenza per ottenere istantaneamente l'intervallo, il margine d'errore e il valore critico.`;

const faqData = [
  {
    question: "Che cos'è un intervallo di confidenza?",
    answer:
      "Un intervallo di confidenza (IC) è un intervallo di valori calcolato dai dati campionari che, con una data probabilità (livello di confidenza), contiene il vero parametro della popolazione. Ad esempio, un IC al 95% per la media significa che se si ripetesse il campionamento molte volte, il 95% degli intervalli calcolati conterrebbe la vera media della popolazione.",
  },
  {
    question: 'Quando dovrei usare Z invece di t?',
    answer:
      'Usa Z quando la deviazione standard della popolazione (σ) è nota o quando n è grande (>30). Usa t di Student quando è disponibile solo la deviazione standard campionaria (s) e n è piccolo. Per n > 30, entrambe le distributions sono praticamente equivalenti, ma t rimane più conservativa e tecnicamente corretta quando σ è ignota.',
  },
  {
    question: "In che modo la dimensione del campione influisce sull'ampiezza dell'intervallo?",
    answer:
      "L'ampiezza dell'IC è proporzionale a 1/√n: quadruplicando la dimensione del campione si dimezza il margine d'errore. Questo spiega perché i campioni grandi producono stime più precise e perché la pianificazione della dimensione campionaria è fondamentale nel disegno di uno studio statistico.",
  },
  {
    question: "Che cos'è il margine d'errore?",
    answer:
      "Il margine d'errore (ME) è la metà dell'ampiezza dell'IC: ME = valore_critico × SE, dove SE = σ/√n è l'errore standard. Indica la massima differenza attesa tra la stima campionaria e il vero valore della popolazione al livello di confidenza specificato.",
  },
];

const howToData = [
  {
    name: 'Inserisci i parametri campionari',
    text: 'Digita la media campionaria (x̄), la deviazione standard (σ o s > 0) e la dimensione del campione (n ≥ 2).',
  },
  {
    name: 'Scegli il livello di confidenza',
    text: 'Seleziona 90%, 95% o 99% utilizzando i pulsanti di accesso rapido, oppure digita qualsiasi valore compreso tra 0 e 100.',
  },
  {
    name: 'Seleziona la distribuzione e leggi il risultato',
    text: `Scegli Z se la deviazione standard della popolazione è nota, o t per un campione. L'intervallo, il margine d'errore e il valore critico vengono calcolati istantaneamente.`,
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    { name: 'Intervallo di confidenza - Wikipedia', url: 'https://it.wikipedia.org/wiki/Intervallo_di_confidenza' },
    { name: 'Distribuzione t di Student - Wikipedia', url: 'https://it.wikipedia.org/wiki/Distribuzione_t_di_Student' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Errore standard - Wikipedia', url: 'https://it.wikipedia.org/wiki/Errore_standard' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore intervallo di confidenza: risultati in tempo reale' },
    {
      type: 'paragraph',
      html: `Il <strong>Calcolatore di intervallo di confidenza</strong> calcola istantaneamente l'intervallo, il margine d'errore, il valore critico e l'errore standard. Supporta la distribuzione Z (sigma della popolazione nota) e t di Student (sigma campionaria), con qualsiasi livello di confidenza compreso tra 0 e 100.`,
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Distribuzioni Z e t', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Risultati in tempo reale', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Senza registrazione', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Distribuzione Z vs t di Student' },
    {
      type: 'table',
      headers: ['Criterio', 'Distribuzione Z', 't di Student'],
      rows: [
        ['Quando usare', 'σ nota o n > 30', 's campionaria, qualsiasi n'],
        ['Valore critico (95%)', 'z* = 1,960', 't* dipende da gl = n−1'],
        ['Gradi di libertà', 'Non applicabile', 'gl = n − 1'],
        ['Per n grande', 'IC più stretto', 'Converge a Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Come interpretare correttamente un intervallo di confidenza',
      html: `Un <strong>intervallo di confidenza al 95%</strong> non significa che ci sia una probabilità del 95% che la vera media risieda in quello specifico intervallo. Significa che la <strong>procedura</strong>, se ripetuta con molti campioni, produrrebbe intervalli contenenti la vera media il 95% delle volte. Una volta calcolato, l'intervallo contiene il valore reale oppure no.`,
    },
    { type: 'title', level: 2, text: 'Glossario di riferimento rapido' },
    {
      type: 'glossary',
      items: [
        { term: 'Intervallo di confidenza (IC)', definition: `Intervallo [x̄ − ME, x̄ + ME] che stima il parametro della popolazione al livello di confidenza scelto.` },
        { term: 'Livello di confidenza', definition: `Proporzione di intervalli che conterrebbero il parametro reale se l'esperimento venisse ripetuto molte volte. Valori tipici: 90%, 95%, 99%.` },
        { term: 'Errore standard (SE)', definition: `SE = σ/√n. Misura la variabilità della media campionaria attorno alla media della popolazione.` },
        { term: 'Margine d\'errore (ME)', definition: `ME = z* × SE (o t* × SE). È la metà dell'ampiezza dell'intervallo di confidenza.` },
      ],
    },
  ],
  ui: {
    labelTitle: 'Intervallo di confidenza',
    labelMean: 'Media campionaria (x̄)',
    labelStdDev: 'Deviazione standard',
    labelN: 'Dimensione campione (n)',
    labelConf: 'Livello di confidenza (%)',
    btnZ: 'Z (σ nota)',
    btnT: 't di Student',
    labelCI: 'Intervallo di confidenza',
    labelME: `Margine d'errore`,
    labelCritical: 'Valore critico',
    labelSE: 'Errore standard',
    labelDF: 'Gradi di libertà',
    hintN: 'n deve essere un numero intero maggiore o uguale a 2.',
    hintStdDev: 'La deviazione standard deve essere maggiore di 0.',
    hintConf: 'Il livello di confidenza deve essere compreso tra 0 e 100.',
    labelChart: 'Visualizzazione intervallo',
    chartDesc: `Linea dei numeri con IC ombreggiato e margine d'errore.`,
    labelReport: 'Riepilogo per il tuo rapporto',
    btnCopy: 'Copia riepilogo',
    btnCopied: 'Copiato!',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
    tabStats: 'Statistiche riepilogative',
    tabRaw: 'Dati grezzi',
    labelRaw: 'Incolla dati',
    rawPlaceholder: 'Digita o incolla valori separati da virgole, spazi o a capo. Es: 12.3, 15.1, 11.8',
    hintRaw: 'Inserisci almeno 2 valori numerici validi.',
    labelDist: 'Distribuzione',
    distAuto: 'Auto',
    noticeAutoRaw: 'Dati campionari: t di Student applicata',
    noticeAutoLowN: 'n < 30: t di Student raccomandata',
    noticeAutoHighN: 'n ≥ 30: distribuzione Z raccomandata',
    calcCI: 'CI Intervallo',
    calcInverse: 'n min',
    labelTargetME: "Margine d'errore desiderato (E)",
    hintTargetME: 'E deve essere un numero maggiore di 0.',
    labelReqN: 'Dimensione minima del campione',
  },
};
