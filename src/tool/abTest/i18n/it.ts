import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'calcolatore-contrasto-ipotesi-ab-test';
const title = 'Calcolatore di test d\'ipotesi A/B online';
const description =
  'Confronta due gruppi (A e B) per determinare se esiste una differenza statisticamente significativa nelle loro conversioni o medie. Calcola istantaneamente il valore P.';

const faqData = [
  {
    question: 'Cosa significa il valore P?',
    answer:
      'Il valore P indica la probabilità che la differenza di rendimento tra il Gruppo A e il Gruppo B sia frutto del caso. Se il valore P è inferiore al livello di significatività (solitamente 0,05), significa che puoi essere sicuro al 95% che la differenza strutturale sia reale.',
  },
  {
    question: 'Che cos\'è il livello di significatività (alfa o α)?',
    answer:
      'È il tuo livello di rigore per il test. Un alfa di 0,05 richiede di essere sicuri al 95% che il Gruppo B sia diverso da A per considerarlo valido. Un alfa di 0,01 richiede un rigore molto maggiore (99%). La convenzione accademica e industriale è quella di utilizzare 0,05 per impostazione predefinita.',
  },
  {
    question: 'Qual è la differenza tra il test delle proporzioni e il test delle medie?',
    answer:
      'Il test delle proporzioni misura variabili dicotomiche di successo o fallimento: clic, aperture di e-mail, conversioni. Il test delle medie confronta il comportamento quantitativo accumulato: spesa media nel carrello o giorni di recupero clinico.',
  },
  {
    question: 'E se il mio campione è inferiore a 30 soggetti?',
    answer:
      'L\'approssimazione della distribuzione normale inizia a essere meno precisa con campioni così piccoli (teorema del limite centrale). Per una decisione clinica raccomandiamo l\'uso di tecniche più conservative di probabilità esatta o il test t di Student aggiustato.',
  },
];

const howToData = [
  {
    name: 'Seleziona l\'obiettivo numerico',
    text: 'Nel pannello di configurazione, definisci se desideri misurare i tassi di conversione (proporzioni semplici) o medie generali come gli importi (medie).',
  },
  {
    name: 'Inserisci i dati di controllo (Gruppo A)',
    text: 'Compila i casi inviati/esposti e quanti successi hanno avuto (o la loro media).',
  },
  {
    name: 'Inserisci i dati sperimentali (Gruppo B)',
    text: 'Inserisci i numeri per la nuova iniziativa o variante che stai misurando.',
  },
  {
    name: 'Annota il verdetto statistico',
    text: 'Guarda il Giudice di Significatività e copia la giustificazione generata sul fatto che il miglioramento reale (Lift) rifiuti l\'assunzione casuale.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    { name: 'Test d\'ipotesi statistica - Wikipedia', url: 'https://it.wikipedia.org/wiki/Test_di_verifica_delle_ipotesi' },
    { name: 'Calcolatore A/B Testing - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore di test d\'ipotesi A/B online' },
    {
      type: 'paragraph',
      html: 'Prendere decisioni basate sulle intuizioni è pericoloso; prenderle basate su dati puri è la via per il successo. Il <strong>calcolatore di test d\'ipotesi (Test A/B)</strong> è lo strumento definitivo per analisti, esperti di marketing e ricercatori che hanno bisogno di convalidare se la differenza tra due gruppi è statisticamente significativa o semplicemente frutto del caso.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Valore P', label: 'Il giudice finale', icon: 'mdi:scale-balance' },
        { value: 'Locale', label: 'Nessun caricamento dati', icon: 'mdi:shield-check' },
        { value: 'Istantaneo', label: 'Grafici nativi', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Perché dividiamo i test in Conversioni e Medie?' },
    {
      type: 'paragraph',
      html: 'A seconda della natura del tuo studio, la metrica di successo cambierà. Il nostro strumento supporta nativamente i due tipi di test statistici più comunemente usati nel settore.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Test delle proporzioni (conversioni)',
          description: 'Confronta percentuali o tassi di successo tra due gruppi.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideale per il marketing (clic, vendite, iscrizioni)',
            'Utilizza casi totali (n) e successi (x)',
            'Applica lo Z-test per due proporzioni',
          ],
        },
        {
          title: 'Test delle medie continue',
          description: 'Confronta valori numerici medi tra due gruppi.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideale per scontrino medio, tempo sul sito o test clinici',
            'Utilizza la media (μ) e la deviazione standard (σ)',
            'Applica una robusta approssimazione normale per campioni (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Come interpretare i risultati: il valore P è la tua guida' },
    {
      type: 'paragraph',
      html: 'Il cuore di questo calcolatore è il famoso <strong>Valore P</strong>. Questo numero indica la probabilità di aver ottenuto queste differenze osservate se l\'ipotesi nulla (che postula che "entrambi i gruppi siano uguali") fosse vera.',
    },
    {
      type: 'table',
      headers: ['Valore P osservato', 'Significato pratico', 'Decisione standard'],
      rows: [
        ['<strong>Maggiore di 0,05</strong>', 'La differenza è piccola rispetto alla varianza. Il caso potrebbe spiegarla.', '<strong>NON rifiutare</strong> l\'ipotesi nulla. Nessun miglioramento reale provato.'],
        ['<strong>Minore di 0,05</strong>', 'È estremamente improbabile che il caso causi una tale differenza. C\'è un effetto reale.', '<strong>Rifiuta</strong> l\'ipotesi nulla. La variante B è migliore!'],
        ['<strong>Minore di 0,01</strong>', 'L\'evidenza a favore del cambiamento è schiacciante (95% di fiducia).', '<strong>Rifiuta con fermezza</strong>. Successo clamoroso dell\'esperimento.'],
      ],
    },
    {
      type: 'tip',
      title: 'Correzione per campioni piccoli',
      html: 'Se i tuoi gruppi elaborano meno di 30 soggetti, lo strumento mostrerà un avviso di "campione piccolo". In questi scenari limite, la classica approssimazione normale perde precisione; raccomandiamo l\'uso di test t di Student esatti o strumenti di Fisher.',
    },
    { type: 'title', level: 2, text: 'Glossario dell\'A/B Testing' },
    {
      type: 'glossary',
      items: [
        { term: 'Gruppo di controllo (A)', definition: 'La versione originale o la linea di base rispetto alla quale misurerai il tuo esperimento.' },
        { term: 'Variante (B)', definition: 'La nuova versione modificata che ti aspetti migliori le metriche.' },
        { term: 'Lift (miglioramento relativo)', definition: 'Variazione percentuale tra il rendimento del Gruppo B rispetto alla linea di base del Gruppo A.' },
        { term: 'Livello di significatività (α)', definition: 'La soglia di errore che sei disposto ad accettare (normalmente 5% o 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametri',
    btnConversions: 'Conversioni',
    btnMeans: 'Medie',
    labelGroupA: 'Gruppo A (Controllo)',
    labelGroupB: 'Gruppo B (Variante)',
    labelTotalCases: 'Casi totali',
    labelSuccesses: 'Successi o conversioni',
    labelMean: 'Media media',
    labelStdDev: 'Deviazione standard',
    labelAlpha: 'Livello di significatività',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    labelDirection: 'Direzione del test',
    btn2Tails: '2 code (diff.)',
    btn1Tail: '1 coda (B > A)',
    alertTitle: 'Avviso di affidabilità statistica',
    alertBody: 'Stai utilizzando una dimensione del campione molto piccola o valori estremi (0 successi). La stima potrebbe non essere rappresentativa del mondo reale.',
    alertLinkText: 'Calcola qui la dimensione ideale del tuo campione',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'Valore P',
    sigDescInitial: 'Ci sono prove sufficienti per rifiutare l\'ipotesi nulla',
    labelLift: 'Analisi del miglioramento (Lift)',
    labelLiftText: 'di miglioramento rispetto al Gruppo A',
    labelConfidencePrefix: 'Fiducia statistica:',
    labelDistributions: 'Distribuzioni di probabilità',
    chartDesc: 'Osserva la sovrapposizione: una minore sovrapposizione implica una maggiore certezza che le differenze siano reali e non frutto del caso.',
    labelReport: 'Testo per il tuo rapporto',
    defaultJustification: 'Dopo aver analizzato X soggetti, il Gruppo B mostra un miglioramento del Y% con una fiducia statistica del Z% (p=0,00).',
    btnCopy: 'Copia testo',
    btnCopied: 'Copiato!',
    sigText: 'Ci sono prove sufficienti per rifiutare l\'ipotesi nulla.',
    noSigText: 'La differenza non è statisticamente significativa.',
    justIntro: 'Dopo aver analizzato un totale di',
    justSamples: ' campioni, il Gruppo B mostra un cambiamento del ',
    justRespectTo: '% rispetto al Gruppo A.',
    justWithConfidence: ' Con una fiducia statistica del ',
    justDiff: ', la differenza empirica ',
    justSig: 'È statisticamente significativa',
    justNoSig: 'NON è statisticamente significativa',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
  },
};
