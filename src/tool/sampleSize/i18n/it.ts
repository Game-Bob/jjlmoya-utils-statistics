import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'calcolatore-dimensione-campione';
const title = 'Calcolatore dimensione campione online';
const description =
  'Calcola il numero esatto di persone necessarie per il tuo studio. Include opzioni per popolazioni finite o infinite, livelli di confidenza regolabili e margini di errore.';

const faqData = [
  {
    question: 'Che cos\'è la dimensione della popolazione?',
    answer:
      'È il numero totale di persone che compongono il gruppo che vuoi studiare o intervistare. Se è inferiore a 100.000, viene solitamente considerata una popolazione finita. Se non disponi di questo dato o se è ingestibile, seleziona l\'opzione popolazione infinita.',
  },
  {
    question: 'Quale livello di confidenza dovrei scegliere?',
    answer:
      'Il 95% è lo standard più utilizzato nella ricerca scientifica, nelle tesi e negli studi di mercato. Cambia questo valore solo se il tuo professore, tutor o cliente richiede un diverso livello di precisione (es. 99%).',
  },
  {
    question: 'Perché lo strumento chiede un margine di errore?',
    answer:
      'Nessun campione è perfetto. Il margine di errore definisce la quantità di imprecisione che sei disposto ad accettare. Il più comune è il 5%.',
  },
  {
    question: 'Quale proporzione attesa (p) dovrei usare se non so nulla della popolazione?',
    answer:
      'Lascia il valore predefinito: 50%. In statistica, questo rappresenta lo "scenario peggiore" perché massimizza la varianza p(1-p), assicurando che la dimensione del campione non sia mai troppo piccola in nessuna circostanza.',
  },
];

const howToData = [
  {
    name: 'Definisci la tua popolazione',
    text: 'Indica se conosci il numero totale del gruppo da studiare (Finita) o se preferisci un calcolo conservativo per gruppi molto grandi/sconosciuti (Infinita).',
  },
  {
    name: 'Regola il tuo livello di confidenza',
    text: 'Seleziona il 95% (raccomandato) o inserisci un valore personalizzato nel menu a discesa.',
  },
  {
    name: 'Imposta il margine di errore',
    text: 'Specifica la tolleranza all\'errore. Ricorda che ridurlo dal 5% al 2% moltiplica drasticamente il numero di interviste che dovrai condurre.',
  },
  {
    name: 'Copia il risultato',
    text: 'Guarda il pannello centrale e copia direttamente il testo di giustificazione generato automaticamente da aggiungere alla tua tesi o al tuo rapporto.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    { name: 'Determinazione della dimensione del campione - Wikipedia', url: 'https://it.wikipedia.org/wiki/Determinazione_della_dimensione_del_campione' },
    { name: 'Calcolo della dimensione del campione - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore dimensione campione online: la guida definitiva' },
    {
      type: 'paragraph',
      html: 'Determinare il giusto numero di persone da intervistare è uno dei passaggi più critici in qualsiasi ricerca, studio di mercato o progetto accademico. Il <strong>calcolatore della dimensione del campione</strong> fornisce a studenti, ricercatori e professionisti del marketing uno strumento preciso, veloce e facile da usare per calcolare l\'esatto numero di individui necessari per risultati statisticamente significativi.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Confidenza standard', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Margine di errore', icon: 'mdi:target' },
        { value: 'Veloce', label: 'Calcolo in tempo reale', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Perché calcolare la dimensione del campione è fondamentale?' },
    {
      type: 'paragraph',
      html: 'In statistica, raramente è possibile studiare un\'intera popolazione. La soluzione è selezionare un sottogruppo rappresentativo noto come campione. Se il campione è troppo piccolo, i risultati saranno distorti. Se è troppo grande, sprecherai tempo e denaro inutilmente.',
    },
    { type: 'title', level: 2, text: 'Le due modalità di calcolo: popolazione finita e infinita' },
    {
      type: 'paragraph',
      html: 'Il nostro calcolatore si adatta alla tua situazione offrendo due distinte modalità di calcolo.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Popolazione finita (conosciuta)',
          description: 'Il numero totale esatto di individui è noto.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Richiede il valore N',
            'Applica il fattore di correzione',
            'Riduce la dimensione finale del campione',
          ],
        },
        {
          title: 'Popolazione infinita (sconosciuta)',
          description: 'Dimensione totale sconosciuta, ingestibile o superiore a 100.000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Non richiede la conoscenza di N',
            'Formula classica standard',
            'Scenario più conservativo e sicuro',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Comprendere i parametri del pannello di controllo' },
    {
      type: 'table',
      headers: ['Parametro', 'Descrizione', 'Raccomandazione standard'],
      rows: [
        ['<strong>Livello di confidenza (Z)</strong>', 'Certezza matematica che il campione rappresenti la popolazione.', 'Usa il 95%.'],
        ['<strong>Margine di errore (e)</strong>', 'Percentuale di deviazione tollerata dalla realtà.', 'Usa il 5%.'],
        ['<strong>Proporzione attesa (p)</strong>', 'Probabilità che l\'evento studiato si verifichi.', 'Usa il 50% (massimizza la varianza).'],
      ],
    },
    {
      type: 'tip',
      title: 'Attenzione al margine di errore',
      html: 'Ridurre il margine di errore dal 5% al 2% richiede un aumento esponenziale della dimensione del campione. Controlla il grafico di sensibilità nel calcolatore prima di decidere per un margine troppo rigoroso.',
    },
    { type: 'title', level: 2, text: 'La formula matematica dietro il calcolo' },
    {
      type: 'list',
      items: [
        '<strong>Popolazione infinita:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Valore critico derivato dal livello di confidenza.',
        '<strong>p:</strong> Proporzione attesa (q è 1 - p).',
        '<strong>e:</strong> Margine di errore tollerato.',
      ],
    },
    { type: 'title', level: 2, text: 'Breve glossario per i ricercatori' },
    {
      type: 'glossary',
      items: [
        { term: 'Popolazione (N)', definition: 'Insieme totale di elementi o individui che condividono una caratteristica e sono oggetto di studio.' },
        { term: 'Campione (n)', definition: 'Sottogruppo rappresentativo selezionato dalla popolazione totale.' },
        { term: 'Varianza massima', definition: 'Si verifica quando p=0,5 (50%), assicurando che il campione calcolato sia fattibile per il caso più vario possibile.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametri',
    labelPopType: 'Tipo di popolazione',
    btnFinite: 'Finita (conosciuta)',
    btnInfinite: 'Infinita (sconosciuta)',
    labelPopSize: 'Dimensione della popolazione',
    labelConfLevel: 'Livello di confidenza (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Personalizzato',
    labelConfCustom: 'Livello di confidenza pers. (%)',
    labelErrorMargin: 'Margine di errore (%)',
    labelProportion: 'Proporzione attesa',
    hintProportion: 'Il 50% è il "caso peggiore" che fornisce il campione più grande e sicuro.',
    hintProportionError: 'Una proporzione dello 0% o del 100% annulla il campione. Suggeriamo di utilizzare valori tra il 5% e il 95%.',
    labelSampleSize: 'Dimensione suggerita',
    labelSampleSub: 'interviste necessarie',
    labelZValue: 'Valore critico',
    labelReport: 'Testo per il tuo rapporto',
    defaultJustification: 'Per una popolazione di 10.000 persone, con un livello di confidenza del 95% e un margine di errore del 5%, la dimensione del campione rappresentativo è di 370 individui.',
    btnCopy: 'Copia testo',
    btnCopied: 'Copiato!',
    labelChart: 'Sensibilità: Dimensione vs Margine di Errore',
    chartDesc: 'Osserva come la dimensione del campione subisce un\'impennata quando si tenta di ridurre il margine di errore.',
    justForFinite: 'Per una popolazione di',
    justPersons: 'persone',
    justForInfinite: 'Per una popolazione infinita',
    justConfidence: ', con un livello di confidenza del',
    justError: '% e un margine di errore del',
    justResultIs: '%, la dimensione del campione rappresentativo è di',
    justUnit: 'individui.',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
  },
};
