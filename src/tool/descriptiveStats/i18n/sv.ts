import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'kalkylator-beskrivande-statistik';
const title = 'Kalkylator för beskrivande statistik online';
const description =
  'Beräkna alla viktiga beskrivande statistiska mått direkt: medelvärde, median, typvärde, standardavvikelse, varians, kvartiler, skevhet, kurtosis med mera. Klistra in dina data och få resultat i realtid.';

const faqData = [
  {
    question: 'Vad är skillnaden mellan populationens och urvalets standardavvikelse?',
    answer:
      'Populationens standardavvikelse dividerar med N (alla element är kända). Urvalets standardavvikelse dividerar med N-1 (Bessels korrigering) för att korrigera för skevhet vid uppskattning från en delmängd. Denna kalkylator använder urvalets standardavvikelse (N-1), vilket är det vanligaste valet inom forskning och dataanalys.',
  },
  {
    question: 'Vad betyder en positiv eller negativ skevhet?',
    answer:
      'Skevhet mäter asymmetrin i din datafördelning. Positiv skevhet (högerskevhet) betyder att svansen sträcker sig åt höger och de flesta värden samlas till vänster. Negativ skevhet (vänsterskevhet) är motsatsen. Ett värde nära 0 indikerar en ungefärligt symmetrisk fördelning.',
  },
  {
    question: 'Vad är kurtosis och vad indikerar det?',
    answer:
      'Kurtosis mäter "tyngden" i svansarna i förhållande till en normalfördelning. Denna kalkylator returnerar excess kurtosis, där 0 är utgångspunkten (normalfördelning). Positiva värden (leptokurtisk) indikerar tyngre svansar och skarpare toppar. Negativa värden (platykurtisk) indikerar lättare svansar och flackare toppar.',
  },
  {
    question: 'Vilket format ska mina data ha?',
    answer:
      'Klistra in dina siffror separerade med kommatecken, mellanslag, semikolon eller radbrytningar. Exempel: "1, 2, 3, 4" eller "1 2 3 4" eller ett värde per rad. Kalkylatorn ignorerar automatiskt icke-numeriska tecken.',
  },
];

const howToData = [
  {
    name: 'Klistra in eller skriv in dina data',
    text: 'Ange dina numeriska värden i textområdet, separerade med kommatecken, mellanslag eller radbrytningar. Du behöver minst 2 värden.',
  },
  {
    name: 'Läs resultaten',
    text: 'De 15 statistiska måtten uppdateras omedelbart när du skriver. Histogrammet visar formen på din datafördelning.',
  },
  {
    name: 'Kopiera sammanfattningen',
    text: 'Använd knappen "Kopiera sammanfattning" för att kopiera en kompakt översikt av de viktigaste måtten för användning i din rapport eller analys.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    { name: 'Beskrivande statistik - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Beskrivande_statistik' },
    { name: 'Standardavvikelse - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Standardavvikelse' },
    { name: 'Skevhet - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Skevhet' },
    { name: 'Kurtosis - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Kurtosis' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkylator för beskrivande statistik: Alla viktiga mått på ett ställe' },
    {
      type: 'paragraph',
      html: 'Oavsett om du är student, forskare eller dataanalytiker ger <strong>Kalkylatorn för beskrivande statistik</strong> dig en omedelbar och fullständig statistisk sammanfattning av alla numeriska dataset. Klistra in dina data och få 15 statistiska mått beräknade samtidigt – utan behov av kalkylprogram.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Beräknade mått', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultat i realtid', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Ingen registrering', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Beräknade statistiska mått' },
    {
      type: 'table',
      headers: ['Statistiskt mått', 'Beskrivning'],
      rows: [
        ['<strong>Antal (N)</strong>', 'Totalt antal värden i datasetet.'],
        ['<strong>Medelvärde</strong>', 'Det aritmetiska medelvärdet av alla värden.'],
        ['<strong>Median</strong>', 'Det mittersta värdet efter sortering. Robust mot extremvärden.'],
        ['<strong>Typvärde</strong>', 'Det eller de vanligast förekommande värdena.'],
        ['<strong>Standardavvikelse</strong>', 'Urvalets standardavvikelse (dividerar med N-1).'],
        ['<strong>Varians</strong>', 'Kvadraten på urvalets standardavvikelse.'],
        ['<strong>Min / Max</strong>', 'Minsta och största värdet i datasetet.'],
        ['<strong>Variationsbredd</strong>', 'Skillnaden mellan det största och minsta värdet.'],
        ['<strong>Q1 / Q3</strong>', 'Första och tredje kvartilen (25:e och 75:e percentilen).'],
        ['<strong>IQR</strong>', 'Kvartilavstånd: Q3 minus Q1. Mäter central spridning.'],
        ['<strong>Skevhet</strong>', 'Asymmetrin i fördelningen i förhållande till dess medelvärde.'],
        ['<strong>Kurtosis</strong>', 'Excess kurtosis: svansvikt i förhållande till en normalfördelning.'],
      ],
    },
    {
      type: 'tip',
      title: 'När man ska använda median istället för medelvärde',
      html: 'Om dina data har betydande extremvärden (t.ex. inkomstdata, huspriser) är <strong>medianen</strong> ett mer representativt mått på centraltendens än medelvärdet, som dras mot extrema värden.',
    },
    { type: 'title', level: 2, text: 'Tolka histogrammet' },
    {
      type: 'paragraph',
      html: 'Frekvenshistogrammet visar hur dina värden är fördelade över klasser med lika bredd, beräknade automatiskt enligt <strong>Sturges regel</strong> (k = 1 + log₂N). En symmetrisk klockform tyder på en normalfördelning. Skeva former bekräftar det skevhetsvärde som visas i resultaten.',
    },
    { type: 'title', level: 2, text: 'Snabbreferens - Ordlista' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Kvartilavstånd (Interquartile Range). Spridningen av de mittersta 50 % av dina data. Används för att identifiera extremvärden.' },
        { term: 'Skevhet', definition: 'Mäter fördelningens asymmetri. Positiv = höger svans längre. Negativ = vänster svans längre.' },
        { term: 'Excess Kurtosis', definition: 'Svansvikt jämfört med en normalfördelning. 0 är normalt; positivt betyder tyngre svansar.' },
        { term: 'Bessels korrigering', definition: 'Att dividera med N-1 istället för N vid beräkning av urvalsvarians för att minska skevhet i uppskattningen.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Beskrivande statistik',
    labelData: 'Ange dina data',
    placeholderData: 't.ex. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Ange minst 2 numeriska värden separerade med kommatecken, mellanslag eller radbrytningar.',
    hintError: 'Ange minst 2 giltiga numeriska värden för att beräkna statistik.',
    btnSample: 'Urval',
    btnPopulation: 'Population',
    groupCentral: 'Centraltendens',
    groupDispersion: 'Spridning',
    groupPosition: 'Position',
    labelCount: 'Antal (N)',
    labelSum: 'Summa',
    labelMean: 'Medelvärde',
    labelMedian: 'Median',
    labelMode: 'Typvärde',
    labelStdDev: 'Standardavv.',
    labelVariance: 'Varians',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Max',
    labelRange: 'Variationsbredd',
    labelQ1: 'Q1 (25 %)',
    labelQ3: 'Q3 (75 %)',
    labelIQR: 'IQR',
    labelSkewness: 'Skevhet',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Boxplot',
    labelChart: 'Frekvensfördelning',
    chartDesc: 'Histogram med automatisk klassbredd enligt Sturges regel.',
    insightTitle: 'Automatisk tolkning',
    insightHomogeneous: 'Data är homogen (CV < 15 %).',
    insightModerate: 'Data visar måttlig variabilitet (CV 15-35 %).',
    insightHeterogeneous: 'Data är heterogen (CV > 35 %).',
    insightSymmetric: 'Fördelningen är ungefär symmetrisk.',
    insightRightSkewed: 'Fördelningen visar positiv skevhet (högerskev).',
    insightLeftSkewed: 'Fördelningen visar negativ skevhet (vänsterskev).',
    insightNoOutliers: 'Inga extremvärden detekterade.',
    insightOutliers: '{n} extremvärde(n) detekterade med IQR-metoden.',
    insightIQR: 'Kvartilavståndet är {iqr} (från {q1} till {q3}).',
    filterNotice: '{n} icke-numeriska tecken ignorerade.',
    labelReport: 'Sammanfattning för din rapport',
    btnCopy: 'Kopiera sammanfattning',
    btnCopied: 'Kopierad!',
    noMode: 'Inget typvärde',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
  },
};
