import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'calcolatore-test-indipendenza-chi-quadrato';
const title = 'Calcolatore del test di indipendenza Chi Quadrato online';
const description =
  'Determina se esiste una relazione statistica tra due variabili categoriali. Compila la matrice delle frequenze osservate e calcola istantaneamente il valore P.';

const faqData = [
  {
    question: 'Che cos\'è il test di indipendenza Chi Quadrato?',
    answer:
      'È un test statistico utilizzato per valutare la probabilità che un\'associazione osservata tra due variabili categoriali o nominali sia dovuta al caso. Ad esempio: se il dessert preferito di una persona è correlato alla regione in cui vive.',
  },
  {
    question: 'A cosa serve il coefficiente V di Cramér?',
    answer:
      'Mentre il Chi quadrato ti dice se c\'è "una qualche" relazione, il V di Cramér ti dice "quanta" relazione c\'è. Va da 0 (totale indipendenza) a 1 (assoluta dipendenza matematica). Valori superiori a 0,5 sono considerati molto forti dal punto di vista sociologico.',
  },
  {
    question: 'Cosa succede se le mie frequenze attese sono molto basse?',
    answer:
      'L\'approssimazione matematica del Chi Quadrato perde affidabilità se le frequenze attese sono inferiori a 5 in più del 20% delle celle. Il nostro strumento ti avviserà visivamente se c\'è un rischio. In tal caso, si consiglia di unire le categorie dubbie.',
  },
  {
    question: 'Posso usarlo per sondaggi qualitativi?',
    answer:
      'Assolutamente sì. È l\'utilità principale per la sociologia e la ricerca di mercato, dove raramente si ha a che fare con numeri decimali ma piuttosto con categorie mutuamente esclusive (Celibe/Sposato, Sì/No, Nord/Sud).',
  },
];

const howToData = [
  {
    name: 'Definisci la matrice',
    text: 'Innanzitutto, seleziona la dimensione della tua tabella di contingenza in base a quante opzioni hanno la tua Variabile A (righe) e la tua Variabile B (colonne).',
  },
  {
    name: 'Inserisci i dati osservati',
    text: 'Sostituisci i numeri di base compilando la prima tabella con il conteggio esatto dei tuoi dati reali.',
  },
  {
    name: 'Esamina i residui',
    text: 'Osserva quali celle nella nostra tabella si illuminano (verde brillante o rosso). Lì risiedono le anomalie che causano la non indipendenza delle variabili.',
  },
  {
    name: 'Copia la conclusione',
    text: 'Incolla nella tua tesi o nel rapporto di progetto il testo generato automaticamente con il supporto matematico del valore P.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e riferimenti',
  bibliography: [
    {
      name: 'Test chi quadrato - Wikipedia',
      url: 'https://it.wikipedia.org/wiki/Test_chi_quadrato',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Calcolatore del test di indipendenza Chi Quadrato',
    },
    {
      type: 'paragraph',
      html: 'Mentre gli strumenti classici come l\'A/B Test o la statistica descrittiva funzionano in modo eccellente con numeri continui (medie, guadagni, pesi), il mondo reale è pieno di dati categoriali (colori, marchi, livelli di soddisfazione). Il <strong>calcolatore di indipendenza Chi Quadrato</strong> è il test "Re" per determinare analiticamente se due variabili qualitative sono statisticamente collegate o se variano in modo completamente indipendente l\'una dall\'altra.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabella', label: 'Dinamica fino a 3×3', icon: 'mdi:table' },
        { value: 'V di Cramér', label: 'Forza dell\'associazione', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Residui e deviazione', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'A cosa serve esattamente la statistica Chi Quadrato (χ²)?',
    },
    {
      type: 'paragraph',
      html: 'Il test di indipendenza Chi Quadrato confronta le <em>frequenze osservate</em> (i numeri reali che hai misurato e raccolto) con le <em>frequenze attese</em> (i conteggi che ci aspetteremmo in ogni cella se non ci fosse alcuna interazione tra le variabili).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Variabili dipendenti (la relazione esiste)',
          description: 'Le proporzioni di una categoria variano sensibilmente a seconda dell\'altra.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Esempio: I visitatori da mobile preferiscono il Design A, ma gli utenti da PC preferiscono il Design B.',
            'Il Chi Quadrato (χ²) aumenta e il valore P diminuisce.',
            'Il V di Cramér indica la forza (es. Forte > 0,5).',
          ],
        },
        {
          title: 'Variabili indipendenti (caso)',
          description: 'Le proporzioni rimangono stabili come una roccia in tutti i livelli.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Esempio: Il colore degli occhi di un cliente non influisce sulla marca di auto che acquista.',
            'Il Chi Quadrato è minimo e il valore P è superiore a 0,05.',
            'L\'ipotesi nulla non può essere scartata.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'V di Cramér: capire la forza del legame',
    },
    {
      type: 'paragraph',
      html: "Ottenere un valore P molto basso non significa che le variabili siano collegate 'intensamente'; indica solo che il caso non può essere il colpevole (forse perché hai decine di migliaia di casi reali). Per misurare la 'dimensione dell'effetto', incorporiamo automaticamente il <strong>coefficiente V di Cramér</strong>.",
    },
    {
      type: 'table',
      headers: ['Calcolatore (valore V)', 'Valutazione analitica', 'Traduzione'],
      rows: [
        [
          '<strong>da 0,00 a 0,10</strong>',
          'Associazione nulla / banale',
          'Teoricamente dipendente, ma in modo impercettibile e inutile ai fini aziendali.',
        ],
        [
          '<strong>da 0,11 a 0,30</strong>',
          'Associazione debole',
          'Esiste un leggero legame, ma molti altri fattori esterni hanno più peso.',
        ],
        [
          '<strong>da 0,31 a 0,50</strong>',
          'Associazione moderata',
          'Entrambe le caratteristiche si influenzano notevolmente a vicenda.',
        ],
        [
          '<strong>Superiore a 0,50</strong>',
          'Associazione forte',
          'Connessione molto chiara. Conoscere la variabile A predice la variabile B notevolmente bene.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Condizioni di fattibilità matematica',
      html: "Attenzione alle celle vuote! Affinché l'approssimazione del chi quadrato di Pearson rimanga robusta sotto la curva a campana, è metodologicamente richiesto che almeno l'80% delle <em>frequenze attese</em> (non quelle osservate) siano superiori a 5 e nessuna cella sia inferiore a 1. Se questa condizione non è soddisfatta, il nostro indicatore di avvertimento si attiverà, suggerendo di unire le categorie.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Heatmap dei residui integrata',
    },
    {
      type: 'paragraph',
      html: "Per migliorare l'esperienza utente e facilitare le conclusioni dei rapporti, la nostra matrice tingerà automaticamente lo sfondo delle celle in base ai loro residui standardizzati (deviazione):<br/><br/><strong>Tonalità di verde:</strong> la cella ha <em>molti più successi</em> di quanto ci si aspetterebbe puramente dal punto di vista matematico.<br/><strong>Tonalità di rosso:</strong> la cella è pericolosamente 'vuota' rispetto alla norma attesa.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Glossario Chi Quadrato',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Frequenza osservata',
          definition: 'Il conteggio esattamente come lo hai contato fisicamente in laboratorio o nei sondaggi.',
        },
        {
          term: 'Frequenza attesa',
          definition: "Calcolo teorico risultante dall'incrocio del rapporto marginale della riga con quello della colonna.",
        },
        {
          term: 'Gradi di libertà (gl)',
          definition: 'La quantità geometrica di dati liberi. Si trova sottraendo 1 sia dalle righe che dalle colonne e moltiplicandoli.',
        },
        {
          term: 'Residuo standardizzato',
          definition: "Differenza normalizzata tra osservato e atteso. Misura quale cella 'spinge' di più la scoperta.",
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Impostazioni',
    labelTableSize: 'Dimensione tabella (righe × colonne)',
    labelAlpha: 'Livello di significativitá (α)',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    infoText:
      "Calcola automaticamente la frequenza teorica, il valore χ² e la forza dell'associazione attraverso il coefficiente V di Cramér utilizzando un'inferenza puramente locale.",
    labelObserved: 'Frequenze osservate (input)',
    btnShowExpected: 'Mostra frequenze attese (H₀)',
    expectedDesc:
      'Questi sono i valori che esisterebbero in ogni cella se non ci fosse alcuna relazione tra le due variabili (distribuzione casuale).',
    alertTitle: 'Avviso statistico (Celle < 5)',
    alertBody:
      "Sono presenti frequenze attese molto basse. L'approssimazione χ² potrebbe non essere affidabile. Si consiglia di unire le categorie o utilizzare il test esatto di Fisher.",
    labelPValue: 'Valore P (p)',
    sigDescInitial: 'Esiste una relazione significativa',
    labelGlobalStats: 'Statistiche globali',
    labelChiSquareStat: 'Chi Quadrato (χ²)',
    labelDegrees: 'Gradi (gl)',
    labelCramer: 'Forza associazione (V di Cramér)',
    labelVisualization: 'Visualizzazione residui (osservati vs attesi)',
    heatmapInfo: 'Le celle di input della tabella sono colorate in base alla variazione residua.',
    labelReport: 'Testo per il tuo rapporto',
    defaultJustification:
      'Dopo aver analizzato un totale di N osservazioni, abbiamo trovato un valore χ²(gl) = X. Con un valore p di P, si conclude che esiste una dipendenza significativa.',
    btnCopy: 'Copia testo',
    rowLabel: 'Riga',
    colLabel: 'Col',
    totalLabel: 'TOTALE',
    cramerNull: 'Nessuna',
    cramerWeak: 'Debole',
    cramerModerate: 'Moderata',
    cramerStrong: 'Forte',
    sigText: 'Esiste un\'associazione significativa (dipendenza).',
    noSigText: 'Nessuna prova di relazione (indipendenza).',
    chartLegendObs: 'Riga osservata',
    chartLegendExp: 'Attesa',
    btnCopied: 'Copiato!',
    justificationIntro: 'Dopo aver analizzato',
    justificationTableOf: 'casi in una tabella',
    justificationObtained: ', abbiamo ottenuto',
    justificationPAt: '. Valutato al livello α=',
    justificationConcluded: ', si conclude empiricamente che',
    justificationSig: 'ESISTE UNA FORTE ASSOCIAZIONE tra le variabili (V di Cramér:',
    justificationNoSig: 'NON ESISTE un\'associazione statisticamente significativa',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Bibliografia e riferimenti',
  },
};
