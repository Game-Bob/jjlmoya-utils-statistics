import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'kalkylator-normalfordelning';
const title = 'Kalkylator för normalfördelning online';
const description =
  'Beräkna sannolikheter för normalfördelning direkt: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) och invers normalfördelning. Ange medelvärde och standardavvikelse och visualisera den gaussiska klockkurvan med det markerade området.';

const faqData = [
  {
    question: 'Vad är normalfördelningen?',
    answer:
      "Normalfördelningen, eller den gaussiska klockkurvan, är den viktigaste kontinuerliga sannolikhetsfördelningen inom statistiken. Den definieras helt av två parametrar: medelvärdet (μ), som bestämmer centrum, och standardavvikelsen (σ), som kontrollerar spridningen. Den är symmetrisk kring medelvärdet och dess svansar sträcker sig till oändligheten.",
  },
  {
    question: 'Hur beräknas sannolikheten?',
    answer:
      "Sannolikheten erhålls genom att integrera täthetsfunktionen (PDF). Eftersom det inte finns någon primitiv funktion i sluten form, beräknas den med hjälp av felfunktionen (erf). Denna kalkylator använder den högprecisa Abramowitz och Stegun-approximationen för att ge noggranna resultat.",
  },
  {
    question: 'Vad är en z-score?',
    answer:
      'En z-score (eller standardiserad variabel) anger hur många standardavvikelser ett värde ligger från medelvärdet: z = (X - μ) / σ. Det gör det möjligt att jämföra värden från fördelningar med olika skalor. Till exempel betyder z = 1 att X ligger exakt 1 standardavvikelse över medelvärdet.',
  },
  {
    question: 'Vad används invers normalfördelning till?',
    answer:
      'Invers normal svarar på frågan: vilket värde X motsvarar den p:te percentilen? Det vill säga, givet P(X ≤ x) = p, hitta x. Det används i stor utsträckning inom kvalitetskontroll (toleransgränser), inferentiell statistik (kritiska värden) och simulering av slumpvariabler.',
  },
];

const howToData = [
  {
    name: 'Ange parametrarna',
    text: 'Skriv in medelvärdet (μ) och standardavvikelsen (σ > 0) för din normalfördelning. Standardnormalfördelningen (μ=0, σ=1) används som standard.',
  },
  {
    name: 'Välj beräkningstyp',
    text: 'Välj ett läge: P(X ≤ a) för vänster svans, P(X ≥ a) för höger svans, P(a ≤ X ≤ b) för ett intervall, eller Invers för att hitta värdet X för en given percentil.',
  },
  {
    name: 'Läs resultatet och diagrammet',
    text: 'Sannolikheten visas direkt tillsammans med z-score. Den gaussiska klockkurvan visar det markerade området som motsvarar den beräknade sannolikheten.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    { name: 'Normalfördelning - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Normalf%C3%B6rdelning' },
    { name: 'Error function - Wikipedia', url: 'https://en.wikipedia.org/wiki/Error_function' },
    { name: 'Abramowitz and Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Z-poäng - Wikipedia', url: 'https://sv.wikipedia.org/wiki/Z-po%C3%A4ng' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkylator för normalfördelning: Sannolikheter i realtid' },
    {
      type: 'paragraph',
      html: '<strong>Kalkylatorn för normalfördelning</strong> beräknar valfri sannolikhet för normalfördelning direkt: vänster svans, höger svans, centralt intervall och invers. Ange bara medelvärde och standardavvikelse för att få resultatet och visualisera det på den gaussiska klockkurvan.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Beräkningslägen', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Resultat i realtid', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Ingen registrering', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Beräkningslägen' },
    {
      type: 'table',
      headers: ['Läge', 'Beskrivning', 'Exempel på användning'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Kumulativ sannolikhet upp till värdet a (vänster svans).', 'Andel elever under en viss betygsgräns.'],
        ['<strong>P(X ≥ a)</strong>', 'Höger svans-sannolikhet från värdet a och framåt.', 'Sannolikhet att överskrida en kvalitetsgräns.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Sannolikhet inom ett centralt eller asymmetriskt intervall.', 'Andel delar inom toleransgränsen.'],
        ['<strong>Invers</strong>', 'Hitta X så att P(X ≤ x) = p (den p:te percentilen).', 'Kritiskt värde i ett hypotestest.'],
      ],
    },
    {
      type: 'tip',
      title: 'Den empiriska 68 95 99,7 regeln',
      html: 'I alla normalfördelningar: <strong>68 %</strong> av data hamnar inom ±1σ från medelvärdet, <strong>95 %</strong> inom ±2σ och <strong>99,7 %</strong> inom ±3σ. Verifiera detta genom att beräkna P(-1 ≤ z ≤ 1) med μ=0 och σ=1.',
    },
    { type: 'title', level: 2, text: 'Snabbreferens   Ordlista' },
    {
      type: 'glossary',
      items: [
        { term: 'Medelvärde (μ)', definition: 'Lägesparameter. Bestämmer centrum för den gaussiska klockkurvan.' },
        { term: 'Standardavvikelse (σ)', definition: 'Skalparameter. Kontrollerar klockkurvans bredd. Måste vara strikt positiv.' },
        { term: 'Z-score', definition: 'Standardiserat värde: z = (X - μ) / σ. Anger hur många standardavvikelser X är från medelvärdet.' },
        { term: 'PDF', definition: 'Täthetsfunktion (Probability Density Function). Arean under PDF:en över ett intervall är lika med sannolikheten för det intervallet.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Normalfördelning',
    labelMean: 'Medelvärde',
    labelStdDev: 'Standardavv.',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Invers',
    labelValue: 'Värde X (a)',
    labelValueA: 'Nedre gräns (a)',
    labelValueB: 'Övre gräns (b)',
    labelPercentile: 'Percentil p (0 < p < 1)',
    resultProbability: 'Sannolikhet',
    resultX: 'Värde X',
    resultZScore: 'Z-score',
    resultZScoreA: 'z₁ (nedre gräns)',
    resultZScoreB: 'z₂ (övre gräns)',
    hintStdDev: 'Standardavvikelsen måste vara större än 0.',
    hintPercentile: 'Percentilen måste vara mellan 0 och 1 (exklusive).',
    labelChart: 'Gaussisk klockkurva',
    chartDesc: 'Det markerade området motsvarar den beräknade sannolikheten.',
    labelReport: 'Sammanfattning för din rapport',
    btnCopy: 'Kopiera sammanfattning',
    btnCopied: 'Kopierad!',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
  },
};
