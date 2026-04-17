import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-kalkylator-hypotestest';
const title = 'AB test Kalkylator för hypotestest online';
const description =
  'Jämför två grupper (A och B) för att avgöra om det finns en statistiskt signifikant skillnad i deras konverteringar eller medelvärden. Beräkna P-värdet direkt.';

const faqData = [
  {
    question: 'Vad betyder P-värdet?',
    answer:
      'P-värdet anger sannolikheten för att skillnaden i prestation mellan Grupp A och Grupp B är ren slump. Om P-värdet ligger under signifikansnivån (vanligtvis 0,05) betyder det att du kan vara 95 % säker på att den strukturella skillnaden är verklig.',
  },
  {
    question: 'Vad är signifikansnivå (alfa eller α)?',
    answer:
      'Det är ditt krav på provets stränghet. Ett alfa på 0,05 kräver att du är 95 % säker på att Grupp B skiljer sig från A för att anse resultatet giltigt. Ett alfa på 0,01 kräver mycket högre stränghet (99 %). Den akademiska och industriella konventionen är att använda 0,05 som standard.',
  },
  {
    question: 'Vad är skillnaden mellan proportionstest och medelvärdestest?',
    answer:
      'Proportionstestet mäter dikotoma variabler för framgång eller misslyckande: klick, e-postöppningar, konverteringar. Medelvärdestestet jämför ackumulerat kvantitativt beteende: genomsnittligt varukorgsvärde eller kliniska återhämtningsdagar.',
  },
  {
    question: 'Vad händer om mitt urval är mindre än 30 personer?',
    answer:
      'Normalfördelningsapproximationen blir mindre exakt med så små urval (centrala gränsvärdessatsen). För kliniska beslut rekommenderar vi att använda mer konservativa tekniker för exakt sannolikhet eller justerat Student t-test.',
  },
];

const howToData = [
  {
    name: 'Välj det numeriska målet',
    text: 'I konfigurationspanelen definierar du om du vill mäta konverteringsgrader (enkla proportioner) eller generella genomsnitt som belopp (medelvärden).',
  },
  {
    name: 'Ange kontrolldata (Grupp A)',
    text: 'Fyll i antalet skickade/exponerade fall och hur många framgångar de hade (eller deras medelvärde).',
  },
  {
    name: 'Ange experimentella data (Grupp B)',
    text: 'Ange siffrorna för det nya initiativet eller den variant du mäter.',
  },
  {
    name: 'Notera det statistiska utslaget',
    text: 'Titta på Signifikansdomaren och kopiera den genererade motiveringen om huruvida den verkliga förbättringen (Lift) förkastar slumpantagandet.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    { name: 'Statistisk hypotestestning - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Hypotestest' },
    { name: 'A/B-testningsverktyg - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'A/B-test Kalkylator för hypotestest online' },
    {
      type: 'paragraph',
      html: 'Att fatta beslut baserat på intuition är farligt. Att fatta dem baserat på rena data är vägen till framgång. <strong>Kalkylatorn för hypotestest (A/B-test)</strong> är det definitiva verktyget för analytiker, marknadsförare och forskare som behöver validera om skillnaden mellan två grupper är statistiskt signifikant eller helt enkelt resultatet av slumpen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-värde', label: 'Slutgiltig domare', icon: 'mdi:scale-balance' },
        { value: 'Lokalt', label: 'Ingen datauppladdning', icon: 'mdi:shield-check' },
        { value: 'Direkt', label: 'Inbyggda diagram', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Varför delar vi upp tester i konverteringar och medelvärden?' },
    {
      type: 'paragraph',
      html: 'Beroende på din undersöknings karaktär kommer framgångsmåttet att ändras. Vårt verktyg stöder nativt de två mest använda statistiska testtyperna i branschen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Proportionstest (konverteringar)',
          description: 'Jämför procentsatser eller framgångsgrader mellan två grupper.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Idealiskt för marknadsföring (klick, försäljning, prenumerationer)',
            'Använder totalt antal fall (n) och framgångar (x)',
            'Tillämpar Z-test för två proportioner',
          ],
        },
        {
          title: 'Test av kontinuerliga medelvärden',
          description: ' jämför genomsnittliga numeriska värden mellan två grupper.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Idealiskt för genomsnittsköp, tid på webbplatsen eller kliniska prövningar',
            'Använder medelvärde (μ) och standardavvikelse (σ)',
            'Tillämpar robust normalfördelningsapproximation för urval (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Hur du tolkar resultaten: P-värdet är din guide' },
    {
      type: 'paragraph',
      html: 'Hjärtat i denna kalkylator är det berömda <strong>P-värdet</strong>. Siffran anger sannolikheten för att du skulle ha fått de observerade skillnaderna om nollhypotesen (som postulerar att "båda grupperna är lika") vore sann.',
    },
    {
      type: 'table',
      headers: ['Observerat P-värde', 'Praktisk innebörd', 'Standardbeslut'],
      rows: [
        ['<strong>Större än 0,05</strong>', 'Skillnaden är liten i förhållande till variansen. Slumpen kan förklara det.', '<strong>Förkasta INTE</strong> nollhypotesen. Ingen bevisad verklig förbättring.'],
        ['<strong>Mindre än 0,05</strong>', 'Det är extremt osannolikt att slumpen orsakar en sådan skillnad. Det finns en verklig effekt.', '<strong>Förkasta</strong> nollhypotesen. Variant B är bättre!'],
        ['<strong>Mindre än 0,01</strong>', 'Bevisen för förändring är överväldigande (99 % konfidens).', '<strong>Förkasta bestämt</strong>. Stor framgång för experimentet.'],
      ],
    },
    {
      type: 'tip',
      title: 'Korrigering för små urval',
      html: 'Om dina grupper processar färre än 30 personer kommer verktyget att visa en varning för "litet urval". I dessa gränsfall tappar den klassiska normalfördelningsapproximationen i precision. Vi rekommenderar att använda exakta Student t-test eller Fisher-verktyg.',
    },
    { type: 'title', level: 2, text: 'Ordlista för A/B-testning' },
    {
      type: 'glossary',
      items: [
        { term: 'Kontrollgrupp (A)', definition: 'Den ursprungliga versionen eller baslinjen som du mäter ditt experiment mot.' },
        { term: 'Variant (B)', definition: 'Den nya modifierade versionen som du förväntar dig ska förbättra mätvärdena.' },
        { term: 'Lift (relativ förbättring)', definition: 'Procentuell förändring mellan Grupp B:s prestation jämfört med Grupp A:s baslinje.' },
        { term: 'Signifikansnivå (α)', definition: 'Den felmarginal du är villig att acceptera (normalt 5 % eller 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametrar',
    btnConversions: 'Konverteringar',
    btnMeans: 'Medelvärden',
    labelGroupA: 'Grupp A (Kontroll)',
    labelGroupB: 'Grupp B (Variant)',
    labelTotalCases: 'Totalt antal fall',
    labelSuccesses: 'Framgångar eller konverteringar',
    labelMean: 'Genomsnittligt medelvärde',
    labelStdDev: 'Standardavvikelse',
    labelAlpha: 'Signifikansnivå',
    alpha90: '0,10 (90 %)',
    alpha95: '0,05 (95 %)',
    alpha99: '0,01 (99 %)',
    labelDirection: 'Testriktning',
    btn2Tails: '2 sidor (Skilln.)',
    btn1Tail: '1 sida (B > A)',
    alertTitle: 'Varning om statistisk tillförlitlighet',
    alertBody: 'Du använder ett mycket litet urval eller extremvärden (0 framgångar). Uppskattningen kanske inte är representativ för verkligheten.',
    alertLinkText: 'Beräkna din ideala urvalsstorlek här',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-värde',
    sigDescInitial: 'Det finns tillräckliga bevis för att förkasta nollhypotesen',
    labelLift: 'Analys av förbättring (Lift)',
    labelLiftText: 'förbättring jämfört med Grupp A',
    labelConfidencePrefix: 'Statistisk konfidens:',
    labelDistributions: 'Sannolikhetsfördelningar',
    chartDesc: 'Observera överlappningen: mindre överlappning innebär större visshet om att skillnaderna är verkliga och inte ett resultat av slumpen.',
    labelReport: 'Text för din rapport',
    defaultJustification: 'Efter att ha analyserat X personer visar Grupp B en förbättring på Y % med en statistisk konfidens på Z % (p=0,00).',
    btnCopy: 'Kopiera text',
    btnCopied: 'Kopierat!',
    sigText: 'Det finns tillräckliga bevis för att förkasta nollhypotesen.',
    noSigText: 'Skillnaden är inte statistiskt signifikant.',
    justIntro: 'Efter att ha analyserat totalt',
    justSamples: ' urval visar Grupp B en förändring på ',
    justRespectTo: ' % jämfört med Grupp A.',
    justWithConfidence: ' Med en statistisk konfidens på ',
    justDiff: ', är den empiriska skillnaden ',
    justSig: 'ÄR statistiskt signifikant',
    justNoSig: 'är INTE statistiskt signifikant',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
  },
};
