import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'konfidensintervall-kalkylator';
const title = 'Konfidensintervall-kalkylator online';
const description =
  'Beräkna konfidensintervall för populationsmedelvärdet med hjälp av Z- eller Student t-fördelningar. Ange urvalsmedelvärde, standardavvikelse, urvalsstorlek och konfidensnivå för att få intervallet, felmarginalen och det kritiska värdet direkt.';

const faqData = [
  {
    question: 'Vad är ett konfidensintervall?',
    answer:
      'Ett konfidensintervall (CI) är ett intervall av värden beräknat från urvalsdata som, med en given sannolikhet (konfidensnivå), innehåller den sanna populationsparametern. Till exempel betyder ett 95 % CI för medelvärdet att om du upprepade provtagningen många gånger, skulle 95 % av de beräknade intervallen innehålla det sanna populationsmedelvärdet.',
  },
  {
    question: 'När ska jag använda Z istället för t?',
    answer:
      'Använd Z när populationens standardavvikelse (σ) är känd, eller när n är stort (>30). Använd Student t när endast urvalets standardavvikelse (s) är tillgänglig och n är litet. För n > 30 är båda fördelningarna praktiskt taget likvärdiga, men t förblir mer konservativ och tekniskt korrekt när σ är okänd.',
  },
  {
    question: 'Hur påverkar urvalsstorleken intervallets bredd?',
    answer:
      'Bredden på konfidensintervallet är proportionell mot 1/√n: en fyrdubbling av urvalsstorleken halverar felmarginalen. Detta förklarar varför stora urval ger mer exakta uppskattningar och varför urvalsplanering är avgörande i statistisk studiedesign.',
  },
  {
    question: 'Vad är felmarginal?',
    answer:
      'Felmarginalen (ME) är hälften av konfidensintervallets bredd: ME = kritiskt_värde × SE, där SE = σ/√n är standardfelet. Den anger den maximala förväntade skillnaden mellan urvalsuppskattningen och det sanna populationsvärdet vid den angivna konfidensnivån.',
  },
];

const howToData = [
  {
    name: 'Ange urvalsparametrar',
    text: 'Skriv in urvalsmedelvärdet (x̄), standardavvikelsen (σ eller s > 0) och urvalsstorleken (n ≥ 2).',
  },
  {
    name: 'Välj konfidensnivå',
    text: 'Välj 90 %, 95 % eller 99 % med snabbknapparna, eller skriv in valfritt värde mellan 0 och 100.',
  },
  {
    name: 'Välj fördelning och läs resultatet',
    text: 'Välj Z om populationens standardavvikelse är känd, eller t för ett urval. Intervallet, felmarginalen och det kritiska värdet beräknas direkt.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    { name: 'Konfidensintervall Wikipedia', url: 'https://sv.wikipedia.org/wiki/Konfidensintervall' },
    { name: 'Student t-fördelning Wikipedia', url: 'https://sv.wikipedia.org/wiki/Students_t-f%C3%B6rdelning' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Standardfel Wikipedia', url: 'https://sv.wikipedia.org/wiki/Standardfel' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Konfidensintervall-kalkylator: Resultat i realtid' },
    {
      type: 'paragraph',
      html: '<strong>Konfidensintervall-kalkylatorn</strong> beräknar direkt intervallet, felmarginalen, det kritiska värdet och standardfelet. Den stöder Z-fördelning (känd populations-sigma) och Student t (urvals-sigma), med valfri konfidensnivå mellan 0 och 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z- och t-fördelningar', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Realtidsresultat', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Ingen registrering', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z-fördelning vs Student t' },
    {
      type: 'table',
      headers: ['Kriterium', 'Z-fördelning', 'Student t'],
      rows: [
        ['När den ska användas', 'Känd σ eller n > 30', 'Urval s, valfritt n'],
        ['Kritiskt värde (95 %)', 'z* = 1,960', 't* beror på df = n−1'],
        ['Frihetsgrader', 'Ej tillämpligt', 'df = n − 1'],
        ['För stort n', 'Snävare konfidensintervall', 'Konvergerar mot Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Hur man tolkar ett konfidensintervall korrekt',
      html: 'Ett <strong>95 % konfidensintervall</strong> betyder inte att det är 95 % sannolikhet att det sanna medelvärdet ligger i det specifika intervallet. Det betyder att <strong>proceduren</strong>, om den upprepades med många urval, skulle producera intervall som innehåller det sanna medelvärdet 95 % av gångerna. När det väl är beräknat innehåller intervallet antingen det sanna värdet eller inte.',
    },
    { type: 'title', level: 2, text: 'Snabbreferens - Ordlista' },
    {
      type: 'glossary',
      items: [
        { term: 'Konfidensintervall (CI)', definition: 'Intervall [x̄ − ME, x̄ + ME] som skattar populationsparametern vid den valda konfidensnivån.' },
        { term: 'Konfidensnivå', definition: 'Andel intervall som skulle innehålla den sanna parametern om experimentet upprepades många gånger. Typiska värden: 90 %, 95 %, 99 %.' },
        { term: 'Standardfel (SE)', definition: 'SE = σ/√n. Mäter variabiliteten för urvalsmedelvärdet kring populationsmedelvärdet.' },
        { term: 'Felmarginal (ME)', definition: 'ME = z* × SE (eller t* × SE). Det är hälften av konfidensintervallets bredd.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Konfidensintervall',
    labelMean: 'Urvalsmedelvärde (x̄)',
    labelStdDev: 'Standardavvikelse',
    labelN: 'Urvalsstorlek (n)',
    labelConf: 'Konfidensnivå (%)',
    btnZ: 'Z (σ känd)',
    btnT: 'Student t',
    labelCI: 'Konfidensintervall',
    labelME: 'Felmarginal',
    labelCritical: 'Kritiskt värde',
    labelSE: 'Standardfel',
    labelDF: 'Frihetsgrader',
    hintN: 'n måste vara ett heltal större än eller lika med 2.',
    hintStdDev: 'Standardavvikelsen måste vara större än 0.',
    hintConf: 'Konfidensnivån måste vara mellan 0 och 100.',
    labelChart: 'Intervallvisualisering',
    chartDesc: 'Tallinje med det skuggade konfidensintervallet och felmarginalen.',
    labelReport: 'Sammanfattning för din rapport',
    btnCopy: 'Kopiera sammanfattning',
    btnCopied: 'Kopierad!',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
    tabStats: 'Sammanfattande statistik',
    tabRaw: 'Rådata',
    labelRaw: 'Klistra in data',
    rawPlaceholder: 'Skriv eller klistra in värden separerade med kommatecken, mellanslag eller radbrytningar. T.ex.: 12.3, 15.1, 11.8',
    hintRaw: 'Ange minst 2 giltiga numeriska värden.',
    labelDist: 'Fördelning',
    distAuto: 'Auto',
    noticeAutoRaw: 'Urvalsdata: Student t tillämpas',
    noticeAutoLowN: 'n < 30: Student t rekommenderas',
    noticeAutoHighN: 'n ≥ 30: Z-fördelning rekommenderas',
    calcCI: 'CI-intervall',
    calcInverse: 'Min n',
    labelTargetME: 'Målfelmarginal (E)',
    hintTargetME: 'E måste vara ett tal större än 0.',
    labelReqN: 'Minsta urvalsstorlek',
  },
};
