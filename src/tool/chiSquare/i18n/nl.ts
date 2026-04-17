import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'chi-kwadraat-onafhankelijkheidstoets-calculator';
const title = 'Chi kwadraat onafhankelijkheidstoets online calculator';
const description =
  'Bepaal of er een statistisch verband bestaat tussen twee categorische variabelen. Vul de tabel met waargenomen frequenties in en bereken direct de P-waarde.';

const faqData = [
  {
    question: 'Wat is de chi-kwadraat onafhankelijkheidstoets?',
    answer:
      'Het is een statistische toets die wordt gebruikt om de waarschijnlijkheid te evalueren dat een waargenomen associatie tussen twee categorische of nominale variabelen op toeval berust. Bijvoorbeeld: of iemands favoriete dessert gerelateerd is aan de regio waarin hij woont.',
  },
  {
    question: "Waar wordt de Cramér's V coëfficiënt voor gebruikt?",
    answer:
      "Terwijl chi-kwadraat u vertelt of er 'enig' verband is, vertelt Cramér's V u 'hoeveel' verband er is. Het varieert van 0 (totale onafhankelijkheid) tot 1 (absolute wiskundige afhankelijkheid). Waarden boven 0,5 worden sociologisch als zeer sterk beschouwd.",
  },
  {
    question: 'Wat gebeurt er als mijn verwachte frequenties erg laag zijn?',
    answer:
      'De wiskundige chi-kwadraat benadering verliest betrouwbaarheid als de verwachte frequenties kleiner zijn dan 5 in meer dan 20% van de cellen. Onze tool zal u visueel waarschuwen als er een risico is. In dat geval wordt aangeraden om twijfelachtige categorieën samen te voegen.',
  },
  {
    question: 'Kan ik dit gebruiken voor kwalitatieve enquêtes?',
    answer:
      'Absoluut ja. Het is het belangrijkste hulpmiddel voor sociologie en marktonderzoek, waar u zelden te maken hebt met decimale getallen maar eerder met wederzijds uitsluitende categorieën (Ongehuwd/Gehuwd, Ja/Nee, Noord/Zuid).',
  },
];

const howToData = [
  {
    name: 'Definieer de Matrix',
    text: 'Selecteer eerst de grootte van uw kruistabel op basis van het aantal opties van uw Variabele A (rijen) und Variabele B (kolommen).',
  },
  {
    name: 'Voer Waargenomen Gegevens in',
    text: 'Vervang de basisgetallen door de eerste tabel te vullen met de exacte telling van uw echte gegevens.',
  },
  {
    name: 'Bekijk de Residuen',
    text: 'Observeer welke cellen in onze tabel oplichten (felgroen of rood). Daar liggen de anomalieën die ervoor zorgen dat de variabelen niet onafhankelijk zijn.',
  },
  {
    name: 'Kopieer de Conclusie',
    text: 'Plak de automatisch gegenereerde tekst met de wiskundige onderbouwing van de P-waarde in uw scriptie of projectrapport.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bibliografie & Referenties',
  bibliography: [
    {
      name: 'Chi-kwadraattoets - Wikipedia',
      url: 'https://nl.wikipedia.org/wiki/Chi-kwadraattoets',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Chi-kwadraat onafhankelijkheidstoets calculator',
    },
    {
      type: 'paragraph',
      html: 'Terwijl klassieke tools zoals de A/B Toets of Beschrijvende Statistiek uitstekend werken met continue getallen (gemiddelden, inkomsten, gewichten), zit de echte wereld vol met categorische gegevens (kleuren, merken, tevredenheidsniveaus). De <strong>chi-kwadraat onafhankelijkheidscalculator</strong> is de "koningstoets" om analytisch te bepalen of twee kwalitatieve variabelen statistisch verbonden zijn of dat ze volledig onafhankelijk van elkaar variëren.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabel', label: 'Dynamisch tot 3×3', icon: 'mdi:table' },
        { value: "Cramér's V", label: 'Associatiesterkte', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Residuen & Afwijking', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Waar wordt de chi-kwadraat statistiek (χ²) precies voor gebruikt?',
    },
    {
      type: 'paragraph',
      html: 'De chi-kwadraat onafhankelijkheidstoets vergelijkt <em>Waargenomen Frequenties</em> (de echte getallen die u hebt gemeten en verzameld) met <em>Verwachte Frequenties</em> (de aantallen die we in elke cel zouden verwachten als er helemaal geen interactie zou zijn tussen de variabelen).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Afhankelijke Variabelen (Verband Bestaat)',
          description: 'De proporties van de ene categorie variëren sterk afhankelijk van de andere.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Voorbeeld: Mobiele bezoekers geven de voorkeur aan Ontwerp A, maar pc-gebruikers geven de voorkeur aan Ontwerp B.',
            'De chi-kwadraat (χ²) stijgt en de P-waarde daalt.',
            "Cramér's V geeft de sterkte aan (bijv. Sterk > 0,5).",
          ],
        },
        {
          title: 'Onafhankelijke Variabelen (Toeval)',
          description: 'Proporties blijven stabiel over alle niveaus heen.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            "Voorbeeld: De oogkleur van een klant heeft geen invloed op welk automerk hij koopt.",
            'Chi-kwadraat is minuscuul en de P-waarde is groter dan 0,05.',
            'De nulhypothese kan niet worden verworpen.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: "Cramér's V: De sterkte van het verband begrijpen",
    },
    {
      type: 'paragraph',
      html: "Het verkrijgen van een zeer lage P-waarde betekent niet dat de variabelen 'intens' verbonden zijn; het geeft alleen aan dat toeval niet de schuldige kan zijn (misschien omdat u tienduizenden echte gevallen hebt). Om de 'effectgrootte' te meten, nemen we automatisch de <strong>Cramér's V coëfficiënt</strong> op.",
    },
    {
      type: 'table',
      headers: ['Calculator (V-waarde)', 'Analytische Beoordeling', 'Vertaling'],
      rows: [
        [
          '<strong>0,00 tot 0,10</strong>',
          'Geen / Triviale Associatie',
          'Theoretisch afhankelijk, maar onmerkbaar en nutteloos voor zakelijke doeleinden.',
        ],
        [
          '<strong>0,11 tot 0,30</strong>',
          'Zwakke Associatie',
          'Er is een klein verband, maar veel andere externe factoren wegen zwaarder.',
        ],
        [
          '<strong>0,31 tot 0,50</strong>',
          'Matige Associatie',
          'Beide kenmerken beïnvloeden elkaar aanzienlijk.',
        ],
        [
          '<strong>Boven 0,50</strong>',
          'Sterke Associatie',
          'Zeer duidelijke verbinding. Kennis van variabele A voorspelt variabele B opmerkelijk goed.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Wiskundige Voorwaarden',
      html: "Pas op voor lege cellen! Om de chi-kwadraat benadering van Pearson robuust te houden onder de normale verdeling, is het methodologisch vereist dat ten minste 80% van de <em>Verwachte Frequenties</em> (niet de waargenomen) groter zijn dan 5, en geen enkele cel lager is dan 1. Als aan deze voorwaarde niet wordt voldaan, wordt onze waarschuwing geactiveerd, wat suggereert dat u categorieën samenvoegt.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Ingebouwde Residuen-Heatmap',
    },
    {
      type: 'paragraph',
      html: 'Om de gebruikerservaring te verbeteren en conclusies in rapporten te vergemakkelijken, kleurt onze tabel automatisch de achtergrond van cellen op basis van hun gestandaardiseerde residuen (afwijking):<br/><br/><strong>Groene tinten:</strong> de cel heeft <em>veel meer successen</em> dan puur wiskundig verwacht zou worden.<br/><strong>Rode tinten:</strong> de cel is gevaarlijk "leeg" vergeleken met de verwachte norm.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Chi-kwadraat Glossarium',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Waargenomen Frequentie',
          definition: 'De telling precies zoals u die fysiek hebt geteld in het lab of de enquêtes.',
        },
        {
          term: 'Verwachte Frequentie',
          definition: 'Theoretische berekening die voortvloeit uit het kruisen van de marginale verhouding van de rij met die van de kolom.',
        },
        {
          term: 'Vrijheidsgraden (df)',
          definition: 'De geometrische hoeveelheid vrije gegevens. Wordt gevonden door 1 af te trekken van zowel rijen als kolommen en deze met elkaar te vermenigvuldigen.',
        },
        {
          term: 'Gestandaardiseerd Residu',
          definition: 'Genormaliseerd verschil tussen waargenomen en verwacht. Meet welke cel de ontdekking het meest "stuurt".',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Instellingen',
    labelTableSize: 'Tabelgrootte (Rijen × Kolommen)',
    labelAlpha: 'Significantieniveau (α)',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    infoText:
      "Berekent automatisch de theoretische frequentie, χ²-waarde en associatiesterkte Cramér's V coëfficiënt met behulp van puur lokale inferentie.",
    labelObserved: 'Waargenomen Frequenties (Invoer)',
    btnShowExpected: 'Toon Verwachte Frequenties (H₀)',
    expectedDesc:
      'Dit zijn de waarden die in elke cel zouden bestaan als er helemaal geen verband zou zijn tussen de twee variabelen (willekeurige verdeling).',
    alertTitle: 'Statistische Waarschuwing (Cellen < 5)',
    alertBody:
      'Er zijn zeer lage verwachte frequenties. De χ²-benadering is mogelijk niet betrouwbaar. Het wordt gesuggereerd om categorieën samen te voegen of de exacte toets van Fisher te gebruiken.',
    labelPValue: 'P-Waarde (p)',
    sigDescInitial: 'Significant verband aanwezig',
    labelGlobalStats: 'Globale Statistieken',
    labelChiSquareStat: 'Chi-kwadraat (χ²)',
    labelDegrees: 'Vrijheidsgraden (df)',
    labelCramer: "Associatiesterkte (Cramér's V)",
    labelVisualization: 'Residuen Visualisatie (Waargenomen vs. Verwacht)',
    heatmapInfo: 'Rij-invoercellen worden gekleurd volgens de residuele variatie.',
    labelReport: 'Tekst voor uw rapport',
    defaultJustification:
      'Na analyse van een totaal van N waarnemingen, vonden we een χ²(df) = X waarde. Met een p-waarde van P, wordt geconcludeerd dat er een significante afhankelijkheid bestaat.',
    btnCopy: 'Tekst kopiëren',
    rowLabel: 'Rij',
    colLabel: 'Kol',
    totalLabel: 'TOTAAL',
    cramerNull: 'Geen',
    cramerWeak: 'Zwak',
    cramerModerate: 'Matig',
    cramerStrong: 'Sterk',
    sigText: 'Significant verband aanwezig (afhankelijkheid).',
    noSigText: 'Geen bewijs voor verband (onafhankelijkheid).',
    chartLegendObs: 'Rij Waargenomen',
    chartLegendExp: 'Verwacht',
    btnCopied: 'Gekopieerd!',
    justificationIntro: 'Na analyse van',
    justificationTableOf: 'gevallen in een',
    justificationObtained: ' tabel, kregen we',
    justificationPAt: '. Geëvalueerd op niveau α=',
    justificationConcluded: ', wordt empirisch geconcludeerd dat',
    justificationSig: "ER EEN STERK VERBAND BESTAAT tussen de variabelen (Cramér's V:",
    justificationNoSig: 'ER GEEN statistisch significant verband BESTAAT',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Bibliografie & Referenties',
  },
};
