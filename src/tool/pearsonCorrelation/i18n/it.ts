import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'calcolatore-correlazione-pearson';
const title = 'Calcolatore correlazione di Pearson online';
const description =
  'Calcola il coefficiente r di Pearson, il coefficiente di determinazione r² e la retta di regressione lineare dai dati a coppie. Strumento 100% privato e locale.';

const faqData = [
  {
    question: "Che cos'è il coefficiente di correlazione di Pearson?",
    answer:
      "È una misura statistica che quantifica la forza e la direzione della relazione lineare tra due variabili quantitative. Il suo valore varia da -1 (correlazione negativa perfetta) a 1 (correlazione positiva perfetta), con 0 che indica l'assenza di relazione lineare.",
  },
  {
    question: 'Posso incollare i dati direttamente da Excel?',
    answer:
      'Sì, il nostro calcolatore è ottimizzato per interpretare i dati copiati e incollati da Excel, Google Sheets o file CSV. Rileva automaticamente le colonne e pulisce i caratteri non numerici come simboli di valuta o percentuali.',
  },
  {
    question: 'Perché il valore r è basso se i miei dati sembrano correlati?',
    answer:
      "Il coefficiente di Pearson rileva solo relazioni lineari. Se i tuoi dati hanno una relazione curva (come una parabola o logaritmica), il coefficiente di Pearson può essere molto basso anche se esiste un chiaro legame tra le variabili.",
  },
  {
    question: 'Cosa significa r² in questo calcolatore?',
    answer:
      "È il coefficiente di determinazione. Rappresenta la proporzione di varianza nella variabile dipendente che è prevedibile dalla variabile indipendente. Ad esempio, un r² di 0,85 indica che l'85% della variabilità è spiegata dal modello lineare.",
  },
];

const howToData = [
  {
    name: 'Preparazione dei dati',
    text: 'Prepara le tue coppie di valori (X e Y). Possono essere in un file Excel o semplicemente in un elenco di testo.',
  },
  {
    name: 'Inserimento dei dati',
    text: 'Incolla i tuoi dati nell\'area di testo del calcolatore. Assicurati che ogni coppia di valori sia su una nuova riga.',
  },
  {
    name: 'Configurazione',
    text: 'Seleziona il separatore decimale (punto o virgola) utilizzato nei tuoi dati per evitare errori di calcolo.',
  },
  {
    name: 'Analisi dei risultati',
    text: 'Controlla istantaneamente il valore r, la sua interpretazione e osserva il diagramma a dispersione per confermare la tendenza.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    { name: 'Coefficiente di correlazione di Pearson - Wikipedia', url: 'https://it.wikipedia.org/wiki/Coefficiente_di_correlazione_di_Pearson' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: 'Interpretation of Pearson\'s Correlation Coefficient', url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore correlazione di Pearson online: guida completa' },
    {
      type: 'paragraph',
      html: 'Il <strong>coefficiente di correlazione di Pearson</strong> (r) è lo strumento statistico standard per misurare come due variabili numeriche si relazionano tra loro linearmente. Che sia per lavori accademici, analisi di mercato o ricerca scientifica, capire la forza dei tuoi dati è fondamentale.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Relazione totale', icon: 'mdi:trending-up' },
        { value: '0', label: 'Indipendenza', icon: 'mdi:graph-outline' },
        { value: 'Locale', label: '100% Privacy', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'A cosa serve il coefficiente r di Pearson?' },
    {
      type: 'paragraph',
      html: 'L\'indice di Pearson rivela se esiste una tendenza: quando una variabile aumenta, anche l\'altra aumenta (<strong>correlazione positiva</strong>) o diminuisce (<strong>correlazione negativa</strong>)? Questo strumento è essenziale per l\'analisi dei dati in Excel, SPSS o Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Correlazione di Pearson',
          description: 'Ideale per variabili quantitative con una chiara relazione lineare.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Dati numerici', 'Relazione lineare', 'Richiede normalità'],
        },
        {
          title: 'Correlazione di Spearman',
          description: 'Migliore per dati ordinali o relazioni monotone non lineari.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Dati ordinali (ranghi)', 'Relazione monotona', 'Resistente ai valori anomali'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretazione dei risultati: tabella dei valori' },
    {
      type: 'table',
      headers: ['Intervallo di valori (r)', 'Forza della relazione', 'Significato pratico'],
      rows: [
        ['<strong>da 0,90 a 1,00</strong>', 'Molto forte', 'Relazione quasi perfetta. Ideale per le previsioni.'],
        ['<strong>da 0,70 a 0,89</strong>', 'Forte', 'Esiste una chiara dipendenza lineare tra le variabili.'],
        ['<strong>da 0,40 a 0,69</strong>', 'Moderata', 'Una tendenza visibile, ma con notevole dispersione.'],
        ['<strong>da 0,20 a 0,39</strong>', 'Debole', 'Relazione scarsa; altri fattori hanno maggiore influenza.'],
        ['<strong>da 0,00 a 0,19</strong>', 'Nulla/Trascurabile', 'Non esiste alcuna relazione lineare significativa.'],
      ],
    },
    { type: 'title', level: 2, text: 'Vantaggi e limiti di questo calcolatore' },
    {
      type: 'list',
      items: [
        '<strong>Incolla da Excel/CSV:</strong> non è necessario inserire i dati uno per uno.',
        '<strong>Diagramma a dispersione istantaneo</strong> con retta di regressione.',
        '<strong>100% Privacy:</strong> i tuoi dati non lasciano mai il tuo PC.',
      ],
    },
    {
      type: 'list',
      items: [
        'Rileva solo relazioni lineari (non curve).',
        'Alta sensibilità ai valori estremi (outlier).',
        'Richiede almeno 2 coppie di dati validi.',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio dell\'esperto',
      html: 'Prima di fidarti ciecamente del valore r, guarda sempre il <strong>Diagramma a dispersione</strong>. A volte un coefficiente alto può essere causato da un singolo valore anomalo, o un coefficiente basso può nascondere una relazione curva molto forte che Pearson non può rilevare.',
    },
    { type: 'title', level: 2, text: 'Glossario statistico' },
    {
      type: 'glossary',
      items: [
        { term: 'Covarianza', definition: 'Misura di quanto due variabili casuali cambiano insieme.' },
        { term: 'Regressione lineare', definition: 'Modello matematico utilizzato per approssimare la relazione di dipendenza tra variabili.' },
        { term: 'Coefficiente r²', definition: 'Proporzione di varianza che è prevedibile dalla variabile indipendente.' },
        { term: 'Diagramma a dispersione', definition: 'Grafico a punti che mostra la distribuzione delle coppie di dati su un piano.' },
      ],
    },
  ],
  ui: {
    headingData: 'Dati CSV',
    btnLoadExample: 'Carica esempio',
    btnClear: 'Cancella dati',
    placeholder: 'Incolla i tuoi dati (X, Y) o trascina un CSV...',
    labelDecimalSep: 'Sep. Decimale',
    optPoint: 'Punto (.)',
    optComma: 'Virgola (,)',
    privacyBadge: 'Esecuzione locale privata',
    labelR: 'Coefficiente di Pearson (r)',
    labelR2: 'Determinazione (r²)',
    labelN: 'Coppie (n)',
    labelSlope: 'Pendenza (m)',
    labelMeanXY: 'Media X | Y',
    labelWaiting: 'In attesa di dati...',
    interpPerfectPos: 'Correlazione positiva perfetta',
    interpPerfectNeg: 'Correlazione negativa perfetta',
    interpStrong: 'Correlazione forte',
    interpModerate: 'Correlazione moderata',
    interpWeak: 'Correlazione debole/nulla',
    errorMsg: 'Inserisci almeno 2 coppie di dati per il grafico',
    btnCopyTitle: 'Copia risultati',
    btnDownloadTitle: 'Scarica grafico',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
  },
};
