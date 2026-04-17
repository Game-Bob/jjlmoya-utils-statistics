import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'kalkylator-urvalsstorlek';
const title = 'Kalkylator för urvalsstorlek online';
const description =
  'Beräkna exakt hur många personer som behövs för din studie. Inkluderar alternativ för ändlig eller oändlig population, justerbara konfidensnivåer och felmarginal.';

const faqData = [
  {
    question: 'Vad är populationsstorlek?',
    answer:
      'Det är det totala antalet personer som utgör den grupp du vill studera eller undersöka. Om den är mindre än 100 000 betraktas den vanligtvis som en ändlig population. Om du inte har dessa data eller om den är ohanterlig, välj alternativet oändlig population.',
  },
  {
    question: 'Vilken konfidensnivå ska jag välja?',
    answer:
      '95 % är den mest använda standarden inom vetenskaplig forskning, avhandlingar och marknadsundersökningar. Ändra endast detta värde om din professor, handledare eller kund kräver en annan precisionsnivå (t.ex. 99 %).',
  },
  {
    question: 'Varför ber verktyget om en felmarginal?',
    answer:
      'Inget urval är perfekt. Felmarginalen definierar den mängd oprecision du är villig att acceptera. Den vanligaste är 5 %.',
  },
  {
    question: 'Vilken förväntad proportion (p) ska jag använda om jag inte vet något om populationen?',
    answer:
      'Lämna standardvärdet: 50 %. Inom statistik representerar detta "värsta tänkbara scenario" eftersom det maximerar variansen p(1-p), vilket säkerställer att din urvalsstorlek aldrig blir för liten under några omständigheter.',
  },
];

const howToData = [
  {
    name: 'Definiera din population',
    text: 'Ange om du känner till det totala antalet i gruppen som ska studeras (Ändlig) eller föredrar en konservativ beräkning för mycket stora/okända grupper (Oändlig).',
  },
  {
    name: 'Justera din konfidensnivå',
    text: 'Välj 95 % (rekommenderas), eller ange ett anpassat värde i rullgardinsmenyn.',
  },
  {
    name: 'Ställ in felmarginalen',
    text: 'Ange feltoleransen. Kom ihåg att en minskning från 5 % till 2 % drastiskt multiplicerar antalet undersökningar du behöver genomföra.',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Titta på den centrala panelen och kopiera direkt den autogenererade motiveringstexten för att lägga till i din avhandling eller rapport.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    { name: 'Bestämning av urvalsstorlek - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Urval' },
    { name: 'Beräkning av urvalsstorlek - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkylator för urvalsstorlek online: Den definitiva guiden' },
    {
      type: 'paragraph',
      html: 'Att bestämma rätt antal personer att undersöka är ett av de mest kritiska stegen i all forskning, marknadsundersökning eller akademiska projekt. <strong>Kalkylatorn för urvalsstorlek</strong> ger studenter, forskare och marknadsförare ett exakt, snabbt och lättanvänt verktyg för att beräkna det exakta antalet individer som behövs för statistiskt signifikanta resultat.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95 %', label: 'Standardkonfidens', icon: 'mdi:check-decagram' },
        { value: '5 %', label: 'Felmarginal', icon: 'mdi:target' },
        { value: 'Snabbt', label: 'Realtidsberäkning', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Varför är det grundläggande att beräkna urvalsstorlek?' },
    {
      type: 'paragraph',
      html: 'Inom statistik är det sällan möjligt att studera en hel population. Lösningen är att välja en representativ undergrupp som kallas ett urval. Om urvalet är för litet blir resultaten vinklade. Om det är för stort slösar du tid och pengar i onödan.',
    },
    { type: 'title', level: 2, text: 'De två beräkningslägena: Ändlig och oändlig population' },
    {
      type: 'paragraph',
      html: 'Vår kalkylator anpassar sig till din situation genom att erbjuda två olika beräkningslägen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ändlig population (Känd)',
          description: 'Det exakta totala antalet individer är känt.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Kräver N-värdet',
            'Tillämpar korrektionsfaktor',
            'Minskar den slutliga urvalsstorleken',
          ],
        },
        {
          title: 'Oändlig population (Okänd)',
          description: 'Total storlek okänd, ohanterlig eller större än 100 000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Kräver inte kunskap om N',
            'Klassisk standardformel',
            'Mest konservativa och säkra scenario',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Förstå parametrarna i kontrollpanelen' },
    {
      type: 'table',
      headers: ['Parameter', 'Beskrivning', 'Standardrekommendation'],
      rows: [
        ['<strong>Konfidensnivå (Z)</strong>', 'Matematisk säkerhet att urvalet representerar populationen.', 'Använd 95 %.'],
        ['<strong>Felmarginal (e)</strong>', 'Tolererad avvikelse i procent från verkligheten.', 'Använd 5 %.'],
        ['<strong>Förväntad proportion (p)</strong>', 'Sannolikhet att den studerade händelsen inträffar.', 'Använd 50 % (maximerar variansen).'],
      ],
    },
    {
      type: 'tip',
      title: 'Se upp med felmarginalen',
      html: 'Att minska felmarginalen från 5 % till 2 % kräver en exponentiell ökning av urvalsstorleken. Kontrollera känslighetsdiagrammet i kalkylatorn innan du bestämmer dig för en för strikt marginal.',
    },
    { type: 'title', level: 2, text: 'Den matematiska formeln bakom beräkningen' },
    {
      type: 'list',
      items: [
        '<strong>Oändlig population:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Kritiskt värde härlett från konfidensnivån.',
        '<strong>p:</strong> Förväntad proportion (q är 1 - p).',
        '<strong>e:</strong> Tolererad felmarginal.',
      ],
    },
    { type: 'title', level: 2, text: 'Snabb ordlista för forskare' },
    {
      type: 'glossary',
      items: [
        { term: 'Population (N)', definition: 'Den totala mängden element eller individer som delar en egenskap och som är föremål för studien.' },
        { term: 'Urval (n)', definition: 'Representativ delmängd vald från den totala populationen.' },
        { term: 'Maximal varians', definition: 'Inträffar när p=0,5 (50 %), vilket säkerställer att det beräknade urvalet är hållbart för det mest mångsidiga möjliga fallet.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametrar',
    labelPopType: 'Populationstyp',
    btnFinite: 'Ändlig (Känd)',
    btnInfinite: 'Oändlig (Okänd)',
    labelPopSize: 'Populationsstorlek',
    labelConfLevel: 'Konfidensnivå (%)',
    conf90: '90 %',
    conf95: '95 %',
    conf99: '99 %',
    confCustom: 'Anpassad',
    labelConfCustom: 'Anpassad konfidensnivå (%)',
    labelErrorMargin: 'Felmarginal (%)',
    labelProportion: 'Förväntad proportion',
    hintProportion: '50 % är "värsta tänkbara scenario" som ger det största och säkraste urvalet.',
    hintProportionError: 'En proportion på 0 % eller 100 % ogiltigförklarar urvalet. Vi föreslår att du använder värden mellan 5 % och 95 %.',
    labelSampleSize: 'Föreslagen storlek',
    labelSampleSub: 'undersökningar behövs',
    labelZValue: 'Kritiskt värde',
    labelReport: 'Text för din rapport',
    defaultJustification: 'För en population på 10 000 personer, med en konfidensnivå på 95 % och en felmarginal på 5 %, är den representativa urvalsstorleken 370 personer.',
    btnCopy: 'Kopiera text',
    btnCopied: 'Kopierat!',
    labelChart: 'Känslighet: Storlek vs Felmarginal',
    chartDesc: 'Observera hur urvalsstorleken skjuter i höjden när man försöker minska felmarginalen.',
    justForFinite: 'För en population på',
    justPersons: 'personer',
    justForInfinite: 'För en oändlig population',
    justConfidence: ', med en konfidensnivå på',
    justError: ' % och en felmarginal på',
    justResultIs: ' %, är den representativa urvalsstorleken',
    justUnit: 'personer.',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
  },
};
