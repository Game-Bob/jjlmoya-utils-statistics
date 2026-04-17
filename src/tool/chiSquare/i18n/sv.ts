import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-tva-test-oberoende-kalkylator';
const title = 'Chi två test för oberoende online kalkylator';
const description =
  'Avgör om det finns ett statistiskt samband mellan två kategoriala variabler. Fyll i matrisen för observerade frekvenser och beräkna P-värdet direkt.';

const faqData = [
  {
    question: 'Vad är Chi-två-test för oberoende?',
    answer:
      'Det är ett statistiskt test som används för att utvärdera sannolikheten för att ett observerat samband mellan två kategoriala variabler beror på slumpen. Till exempel: om en persons favoritdessert är relaterad till regionen de bor i.',
  },
  {
    question: "Vad används Cramér's V-koefficient till?",
    answer:
      "Medan Chi-två talar om för dig om det finns 'något' samband, talar Cramér's V om 'hur mycket' samband det finns. Det sträcker sig från 0 (totalt oberoende) till 1 (absolut matematiskt beroende). Värden över 0,5 anses sociologiskt vara mycket starka.",
  },
  {
    question: 'Vad händer om mina förväntade frekvenser är mycket låga?',
    answer:
      'Den matematiska Chi-två-approximationen förlorar tillförlitlighet om förväntade frekvenser är mindre än 5 i mer än 20 % av cellerna. Vårt verktyg kommer att varna dig visuellt om det finns en risk. I så fall rekommenderas att slå samman tveksamma kategorier.',
  },
  {
    question: 'Kan jag använda detta för kvalitativa undersökningar?',
    answer:
      'Absolut ja. Det är det främsta verktyget för sociologi och marknadsundersökningar, där man sällan hanterar decimaltal utan snarare ömsesidigt uteslutande kategorier (Ogift/Gift, Ja/Nej, Norr/Söder).',
  },
];

const howToData = [
  {
    name: 'Definiera matrisen',
    text: 'Välj först storleken på din korstabell baserat på hur många alternativ din variabel A (rader) och variabel B (kolumner) har.',
  },
  {
    name: 'Ange observerade data',
    text: 'Ersätt basnumren genom att fylla i den första tabellen med det exakta antalet från dina verkliga data.',
  },
  {
    name: 'Granska residualerna',
    text: 'Observera vilka celler i vår tabell som lyser upp (antingen ljusgrönt eller rött). Där ligger de anomalier som gör att variablerna inte är oberoende.',
  },
  {
    name: 'Kopiera slutsatsen',
    text: 'Klistra in den automatiskt genererade texten med det matematiska stödet från P-värdet i din avhandling eller projektrapport.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och referenser',
  bibliography: [
    {
      name: 'Chi-två-test - Wikipedia',
      url: 'https://sv.wikipedia.org/wiki/Chi-tv%C3%A5-test',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Kalkylator för Chi-två-test för oberoende',
    },
    {
      type: 'paragraph',
      html: 'Medan klassiska verktyg som A/B-test eller deskriptiv statistik fungerar utmärkt med kontinuerliga tal (medelvärden, inkomster, vikter), är den verkliga världen full av kategoriala data (färger, märken, nöjdhetsnivåer). <strong>Kalkylatorn för Chi-två-oberoende</strong> är "kungen" av tester för att analytiskt avgöra om två kvalitativa variabler är statistiskt kopplade eller om de varierar helt oberoende av varandra.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabell', label: 'Dynamisk upp till 3×3', icon: 'mdi:table' },
        { value: "Cramér's V", label: 'Sambandsstyrka', icon: 'mdi:link' },
        { value: 'Värmekarta', label: 'Residualer & avvikelse', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Vad exakt används Chi-två-statistiken (χ²) till?',
    },
    {
      type: 'paragraph',
      html: 'Chi-två-testet för oberoende jämför <em>observerade frekvenser</em> (de verkliga siffrorna du har mätt och samlat in) med <em>förväntade frekvenser</em> (de antal vi skulle förvänta oss i varje cell om det inte fanns någon interaktion alls mellan variablerna).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Beroende variabler (samband finns)',
          description: 'Proportionerna i en kategori varierar kraftigt beroende på den andra.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Exempel: Mobilbesökare föredrar Design A, men PC-användare föredrar Design B.',
            'Chi-två (χ²) stiger och P-värdet sjunker.',
            "Cramér's V indikerar styrkan (t.ex. stark > 0,5).",
          ],
        },
        {
          title: 'Oberoende variabler (slump)',
          description: 'Proportionerna förblir stabila över alla nivåer.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Exempel: En kunds ögonfärg påverkar inte vilket bilmärke de köper.',
            'Chi-två är pyttelitet och P-värdet är större än 0,05.',
            'Nollhypotesen kan inte förkastas.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: "Cramér's V: Att förstå styrkan i kopplingen",
    },
    {
      type: 'paragraph',
      html: "Att få ett mycket lågt P-värde betyder inte att variablerna är 'intensivt' kopplade. Det indikerar bara att slumpen inte kan vara orsaken (kanske för att du har tiotusentals verkliga fall). För att mäta 'effektstorleken' inkluderar vi automatiskt <strong>Cramér's V-koefficient</strong>.",
    },
    {
      type: 'table',
      headers: ['Kalkylator (V-värde)', 'Analytisk bedömning', 'Översättning'],
      rows: [
        [
          '<strong>0,00 till 0,10</strong>',
          'Inget / trivialt samband',
          'Teoretiskt beroende, men omärkbart och oanvändbart för affärsändamål.',
        ],
        [
          '<strong>0,11 till 0,30</strong>',
          'Svagt samband',
          'Det finns en liten koppling, men många andra externa faktorer väger tyngre.',
        ],
        [
          '<strong>0,31 till 0,50</strong>',
          'Måttligt samband',
          'Båda egenskaperna påverkar varandra märkbart.',
        ],
        [
          '<strong>Över 0,50</strong>',
          'Starkt samband',
          'Mycket tydlig koppling. Att känna till variabel A förutsäger variabel B anmärkningsvärt väl.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Matematiska förutsättningar',
      html: "Se upp för tomma celler! För att Pearsons chi-två-approximation ska förbli robust krävs metodmässigt att minst 80 % av de <em>förväntade frekvenserna</em> (inte de observerade) är större än 5, och att ingen cell är under 1. Om detta villkor inte uppfylls kommer vår varningsindikator att aktiveras och föreslå att du slår samman kategorier.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Inbyggd värmekarta för residualer',
    },
    {
      type: 'paragraph',
      html: 'För att förbättra användarupplevelsen och underlätta slutsatser i rapporter kommer vår matris automatiskt att färga cellernas bakgrund baserat på deras standardiserade residualer (avvikelse):<br/><br/><strong>Gröna toner:</strong> cellen har <em>många fler framgångar</em> än vad som rent matematiskt vore förväntat.<br/><strong>Röda toner:</strong> cellen är farligt "tom" jämfört med den förväntade normen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Chi-två ordlista',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Observerad frekvens',
          definition: 'Antalet exakt som du fysiskt räknade det i labbet eller enkäter.',
        },
        {
          term: 'Förväntad frekvens',
          definition: 'Teoretisk beräkning som erhålls genom att multiplicera radsumman med kolumnsumman och dividera med totalsumman.',
        },
        {
          term: 'Frihetsgrader (df)',
          definition: 'Den geometriska mängden fria data. Hittas genom att dra bort 1 från både rader och kolumner och multiplicera dem.',
        },
        {
          term: 'Standardiserad residual',
          definition: 'Normaliserad skillnad mellan observerat och förväntat. Mäter vilken cell som "driver" upptäckten mest.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Inställningar',
    labelTableSize: 'Tabellstorlek (Rader × Kolumner)',
    labelAlpha: 'Signifikansnivå (α)',
    alpha90: '0,10 (90 %)',
    alpha95: '0,05 (95 %)',
    alpha99: '0,01 (99 %)',
    infoText:
      "Beräknar automatiskt den teoretiska frekvensen, χ²-värdet och sambandsstyrkan Cramér's V-koefficient med hjälp av rent lokal slutledning.",
    labelObserved: 'Observerade frekvenser (Inmatning)',
    btnShowExpected: 'Visa förväntade frekvenser (H₀)',
    expectedDesc:
      'Dessa är de värden som skulle finnas i varje cell om det inte fanns något samband alls mellan de två variablerna (slumpmässig fördelning).',
    alertTitle: 'Statistisk varning (Celler < 5)',
    alertBody:
      'Det finns mycket låga förväntade frekvenser. χ²-approximationen kanske inte är tillförlitlig. Det föreslås att slå samman kategorier eller använda Fishers exakta test.',
    labelPValue: 'P-värde (p)',
    sigDescInitial: 'Signifikant samband finns',
    labelGlobalStats: 'Global statistik',
    labelChiSquareStat: 'Chi-två (χ²)',
    labelDegrees: 'Grader (df)',
    labelCramer: "Sambandsstyrka (Cramér's V)",
    labelVisualization: 'Visualisering av residualer (Observerat vs Förväntat)',
    heatmapInfo: 'Tabellens inmatningsceller färgas enligt residualvariationen.',
    labelReport: 'Text för din rapport',
    defaultJustification:
      'Efter att ha analyserat totalt N observationer hittade vi ett χ²(df) = X värde. Med ett p-värde på P dras slutsatsen att ett signifikant beroende finns.',
    btnCopy: 'Kopiera text',
    rowLabel: 'Rad',
    colLabel: 'Kol',
    totalLabel: 'TOTALT',
    cramerNull: 'Inget',
    cramerWeak: 'Svagt',
    cramerModerate: 'Måttligt',
    cramerStrong: 'Starkt',
    sigText: 'Signifikant samband finns (beroende).',
    noSigText: 'Inga bevis på samband (oberoende).',
    chartLegendObs: 'Observerad rad',
    chartLegendExp: 'Förväntad',
    btnCopied: 'Kopierat!',
    justificationIntro: 'Efter att ha analyserat',
    justificationTableOf: 'fall i en',
    justificationObtained: ' tabell, erhöll vi',
    justificationPAt: '. Utvärderat vid nivån α=',
    justificationConcluded: ', dras den empiriska slutsatsen att',
    justificationSig: "ETT STARKT SAMBAND FINNS mellan variablerna (Cramér's V:",
    justificationNoSig: 'INGET statistiskt signifikant samband FINNS',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Bibliografi och referenser',
  },
};
