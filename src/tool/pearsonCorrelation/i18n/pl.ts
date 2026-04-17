import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'kalkulator-korelacji-pearsona';
const title = 'Kalkulator korelacji Pearsona online';
const description =
  'Oblicz współczynnik r Pearsona, współczynnik determinacji r² oraz linię regresji liniowej na podstawie par danych. W 100% prywatne i lokalne narzędzie.';

const faqData = [
  {
    question: 'Co to jest współczynnik korelacji Pearsona?',
    answer:
      'Jest to miara statystyczna określająca siłę i kierunek liniowej zależności między dwiema zmiennymi ilościowymi. Jego wartość mieści się w zakresie od -1 (idealna korelacja ujemna) do 1 (idealna korelacja dodatnia), przy czym 0 oznacza brak zależności liniowej.',
  },
  {
    question: 'Czy mogę wkleić dane bezpośrednio z Excela?',
    answer:
      'Tak, nasz kalkulator jest zoptymalizowany pod kątem interpretacji danych skopiowanych i wklejonych z programów Excel, Google Sheets lub plików CSV. Automatycznie wykrywa kolumny i usuwa znaki nienumeryczne, takie jak symbole walut czy procenty.',
  },
  {
    question: 'Dlaczego wartość r jest niska, jeśli moje dane wydają się powiązane?',
    answer:
      'Współczynnik Pearsona wykrywa jedynie zależności liniowe. Jeśli Twoje dane wykazują zależność krzywoliniową (np. parabolę lub logarytmiczną), współczynnik Pearsona może być bardzo niski, mimo że między zmiennymi istnieje wyraźny związek.',
  },
  {
    question: 'Co oznacza r² w tym kalkulatorze?',
    answer:
      'Jest to współczynnik determinacji. Informuje o tym, jaka część wariancji zmiennej zależnej jest przewidywalna na podstawie zmiennej niezależnej. Na przykład r² wynoszące 0,85 oznacza, że 85% zmienności jest wyjaśniane przez model liniowy.',
  },
];

const howToData = [
  {
    name: 'Przygotowanie danych',
    text: 'Przygotuj pary swoich wartości (X i Y). Mogą one znajdować się w pliku Excel lub po prostu w formie listy tekstowej.',
  },
  {
    name: 'Wprowadzanie danych',
    text: 'Wklej swoje dane w obszarze tekstowym kalkulatora. Upewnij się, że każda para wartości znajduje się w nowym wierszu.',
  },
  {
    name: 'Konfiguracja',
    text: 'Wybierz separator dziesiętny (kropka lub przecinek) używany w Twoich danych, aby uniknąć błędów w obliczeniach.',
  },
  {
    name: 'Analiza wyników',
    text: 'Natychmiast sprawdź wartość r, jej interpretację i przyjrzyj się diagramowi rozrzutu, aby potwierdzić trend.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    { name: 'Współczynnik korelacji Pearsona - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Wsp%C3%B3%C5%82czynnik_korelacji_Pearsona' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator korelacji Pearsona online: Kompletny przewodnik' },
    {
      type: 'paragraph',
      html: '<strong>Współczynnik korelacji Pearsona</strong> (r) to standardowe narzędzie statystyczne służące do mierzenia liniowej zależności między dwiema zmiennymi numerycznymi. Niezależnie od tego, czy chodzi o pracę akademicką, analizę rynku czy badania naukowe, zrozumienie siły Twoich danych jest kluczowe.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Pełna zależność', icon: 'mdi:trending-up' },
        { value: '0', label: 'Niezależność', icon: 'mdi:graph-outline' },
        { value: 'Lokalnie', label: '100% prywatności', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Do czego służy współczynnik r Pearsona?' },
    {
      type: 'paragraph',
      html: 'Indeks Pearsona ujawnia, czy istnieje trend: czy gdy jedna zmienna rośnie, druga również rośnie (<strong>korelacja dodatnia</strong>) czy może maleje (<strong>korelacja ujemna</strong>)? To narzędzie jest niezbędne do analizy danych w programach Excel, SPSS czy Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Korelacja Pearsona',
          description: 'Idealna dla zmiennych ilościowych o wyraźnej zależności liniowej.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Dane numeryczne', 'Zależność liniowa', 'Wymaga normalności'],
        },
        {
          title: 'Korelacja Spearmana',
          description: 'Lepsza dla danych porządkowych lub monotonicznych zależności nieliniowych.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Dane porządkowe (rangi)', 'Zależność monotoniczna', 'Odporna na wartości odstające'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretacja wyników: Tabela wartości' },
    {
      type: 'table',
      headers: ['Zakres wartości (r)', 'Siła zależności', 'Znaczenie praktyczne'],
      rows: [
        ['<strong>0,90 do 1,00</strong>', 'Bardzo silna', 'Zależność niemal idealna. Idealna do prognozowania.'],
        ['<strong>0,70 do 0,89</strong>', 'Silna', 'Istnieje wyraźna liniowa zależność między zmiennymi.'],
        ['<strong>0,40 do 0,69</strong>', 'Umiarkowana', 'Widoczny trend, ale ze znacznym rozproszeniem.'],
        ['<strong>0,20 do 0,39</strong>', 'Słaba', 'Słaba zależność; większy wpływ mają inne czynniki.'],
        ['<strong>0,00 do 0,19</strong>', 'Zerowa/Pomijalna', 'Brak istotnej zależności liniowej.'],
      ],
    },
    { type: 'title', level: 2, text: 'Zalety i ograniczenia tego kalkulatora' },
    {
      type: 'list',
      items: [
        '<strong>Wklejanie z Excela/CSV:</strong> Brak konieczności wpisywania danych jeden po drugim.',
        '<strong>Natychmiastowy wykres rozrzutu</strong> z linią regresji.',
        '<strong>100% prywatności:</strong> Twoje dane nigdy nie opuszczają Twojego komputera.',
      ],
    },
    {
      type: 'list',
      items: [
        'Wykrywa tylko zależności liniowe (nie krzywoliniowe).',
        'Wysoka wrażliwość na wartości ekstremalne (odstające).',
        'Wymaga co najmniej 2 prawidłowych par danych.',
      ],
    },
    {
      type: 'tip',
      title: 'Wskazówka eksperta',
      html: 'Zanim ślepo zaufasz wartości r, zawsze spójrz na <strong>wykres rozrzutu</strong>. Czasami wysoki współczynnik może być spowodowany przez pojedynczą wartość odstającą, a niski współczynnik może ukrywać bardzo silną zależność krzywoliniową, której współczynnik Pearsona nie jest w stanie wykryć.',
    },
    { type: 'title', level: 2, text: 'Słowniczek statystyczny' },
    {
      type: 'glossary',
      items: [
        { term: 'Kowariancja', definition: 'Miara określająca, jak dwie zmienne losowe zmieniają się wspólnie.' },
        { term: 'Regresja liniowa', definition: 'Model matematyczny używany do aproksymacji zależności między zmiennymi.' },
        { term: 'Współczynnik r²', definition: 'Część wariancji, którą można przewidzieć na podstawie zmiennej niezależnej.' },
        { term: 'Wykres rozrzutu', definition: 'Wykres punktowy pokazujący rozkład par danych na płaszczyźnie.' },
      ],
    },
  ],
  ui: {
    headingData: 'Dane CSV',
    btnLoadExample: 'Załaduj przykład',
    btnClear: 'Wyczyść dane',
    placeholder: 'Wklej dane (X, Y) lub przeciągnij CSV...',
    labelDecimalSep: 'Sep. dziesiętny',
    optPoint: 'Kropka (.)',
    optComma: 'Przecinek (,)',
    privacyBadge: 'Prywatne wykonanie lokalne',
    labelR: 'Współczynnik Pearsona (r)',
    labelR2: 'Determinacja (r²)',
    labelN: 'Pary (n)',
    labelSlope: 'Nachylenie (m)',
    labelMeanXY: 'Średnia X | Y',
    labelWaiting: 'Oczekiwanie na dane...',
    interpPerfectPos: 'Idealna korelacja dodatnia',
    interpPerfectNeg: 'Idealna korelacja ujemna',
    interpStrong: 'Silna korelacja',
    interpModerate: 'Umiarkowana korelacja',
    interpWeak: 'Słaba/zerowa korelacja',
    errorMsg: 'Wprowadź co najmniej 2 pary danych dla wykresu',
    btnCopyTitle: 'Kopiuj wyniki',
    btnDownloadTitle: 'Pobierz wykres',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
  },
};
