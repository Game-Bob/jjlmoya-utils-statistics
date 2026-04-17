import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'kalkulator-rozklladu-normalnego';
const title = 'Kalkulator rozkładu normalnego online';
const description =
  'Oblicz natychmiast prawdopodobieństwa w rozkładzie normalnym: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) oraz odwrotny rozkład normalny. Wprowadź średnią i odchylenie standardowe, aby zwizualizować krzywą Gaussa z zaznaczonym obszarem.';

const faqData = [
  {
    question: 'Co to jest rozkład normalny?',
    answer:
      "Rozkład normalny, zwany również krzywą dzwonową Gaussa, jest najważniejszym ciągłym rozkładem prawdopodobieństwa w statystyce. Jest w pełni zdefiniowany przez dwa parametry: średnią (μ), która wyznacza środek, oraz odchylenie standardowe (σ), które kontroluje rozproszenie. Jest symetryczny względem średniej, a jego ogony rozciągają się do nieskończoności.",
  },
  {
    question: 'Jak obliczane jest prawdopodobieństwo?',
    answer:
      "Prawdopodobieństwo uzyskuje się poprzez całkowanie funkcji gęstości prawdopodobieństwa (PDF). Ponieważ nie istnieje funkcja pierwotna w postaci zamkniętej, oblicza się je za pomocą funkcji błędu (erf). Ten kalkulator wykorzystuje wysokiej precyzji aproksymację Abramowitza i Steguna w celu uzyskania dokładnych wyników.",
  },
  {
    question: 'Co to jest z-score?',
    answer:
      'Wskaźnik z-score (lub wynik standaryzowany) informuje, o ile odchyleń standardowych dana wartość różni się od średniej: z = (X - μ) / σ. Pozwala to na porównywanie wartości z rozkładów o różnych skalach. Na przykład z = 1 oznacza, że X znajduje się dokładnie 1 odchylenie standardowe powyżej średniej.',
  },
  {
    question: 'Do czego służy odwrotny rozkład normalny?',
    answer:
      'Odwrotny rozkład normalny odpowiada na pytanie: jaka wartość X odpowiada p-temu percentylowi? Czyli, mając dane P(X ≤ x) = p, wyznacz x. Jest on szeroko stosowany w kontroli jakości (limity tolerancji), statystyce indukcyjnej (wartości krytyczne) oraz symulacji zmiennych losowych.',
  },
];

const howToData = [
  {
    name: 'Wprowadź parametry',
    text: 'Wpisz średnią (μ) i odchylenie standardowe (σ > 0) swojego rozkładu normalnego. Domyślnie używany jest standardowy rozkład normalny (μ=0, σ=1).',
  },
  {
    name: 'Wybierz typ obliczeń',
    text: 'Wybierz tryb: P(X ≤ a) dla lewego ogona, P(X ≥ a) dla prawego ogona, P(a ≤ X ≤ b) dla przedziału lub Odwrotny (Inverse), aby znaleźć wartość X dla danego percentyla.',
  },
  {
    name: 'Odczytaj wynik i wykres',
    text: 'Prawdopodobieństwo jest wyświetlane natychmiast wraz ze wskaźnikiem z-score. Krzywa Gaussa pokazuje zaznaczony obszar odpowiadający obliczonemu prawdopodobieństwu.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    { name: 'Rozkład normalny - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Rozk%C5%82ad_normalny' },
    { name: 'Funkcja błędu - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Funkcja_b%C5%82%C4%99du' },
    { name: 'Abramowitz i Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Wynik standaryzowany - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Wynik_standaryzowany' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator rozkładu normalnego: prawdopodobieństwa w czasie rzeczywistym' },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator rozkładu normalnego</strong> natychmiast oblicza dowolne prawdopodobieństwo w rozkładzie normalnym: lewy ogon, prawy ogon, przedział środkowy oraz rozkład odwrotny. Po prostu wprowadź średnią i odchylenie standardowe, aby otrzymać wynik i zwizualizować go na krzywej dzwonowej Gaussa.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Tryby obliczeń', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Wyniki w czasie rzeczywistym', icon: 'mdi:lightning-bolt' },
        { value: 'Darmowy', label: 'Bez rejestracji', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Tryby obliczeń' },
    {
      type: 'table',
      headers: ['Tryb', 'Opis', 'Przykładowe zastosowanie'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Prawdopodobieństwo skumulowane do wartości a (lewy ogon).', 'Procent uczniów poniżej określonego progu punktowego.'],
        ['<strong>P(X ≥ a)</strong>', 'Prawdopodobieństwo prawostronne od wartości a (prawy ogon).', 'Prawdopodobieństwo przekroczenia progu jakości.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Prawdopodobieństwo w przedziale środkowym lub asymetrycznym.', 'Proporcja części mieszczących się w granicach tolerancji.'],
        ['<strong>Odwrotny (Inverse)</strong>', 'Znajdź X takie, że P(X ≤ x) = p (p-ty percentyl).', 'Wartość krytyczna w teście hipotez.'],
      ],
    },
    {
      type: 'tip',
      title: 'Reguła empiryczna 68-95-99,7',
      html: 'W dowolnym rozkładzie normalnym: <strong>68%</strong> danych mieści się w granicach ±1σ od średniej, <strong>95%</strong> w granicach ±2σ, a <strong>99,7%</strong> w granicach ±3σ. Sprawdź to, obliczając P(-1 ≤ z ≤ 1) przy μ=0 i σ=1.',
    },
    { type: 'title', level: 2, text: 'Szybki słowniczek' },
    {
      type: 'glossary',
      items: [
        { term: 'Średnia (μ)', definition: 'Parametr położenia. Wyznacza środek krzywej Gaussa.' },
        { term: 'Odchylenie standardowe (σ)', definition: 'Parametr skali. Kontroluje szerokość krzywej dzwonowej. Musi być ściśle dodatnie.' },
        { term: 'Z-score', definition: 'Wartość standaryzowana: z = (X - μ) / σ. Wskazuje, o ile odchyleń standardowych X różni się od średniej.' },
        { term: 'PDF', definition: 'Funkcja gęstości prawdopodobieństwa (Probability Density Function). Pole pod PDF w danym przedziale jest równe prawdopodobieństwu tego przedziału.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Rozkład normalny',
    labelMean: 'Średnia',
    labelStdDev: 'Odchylenie std',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Odwrotny',
    labelValue: 'Wartość X (a)',
    labelValueA: 'Dolna granica (a)',
    labelValueB: 'Górna granica (b)',
    labelPercentile: 'Percentyl p (0 < p < 1)',
    resultProbability: 'Prawdopodobieństwo',
    resultX: 'Wartość X',
    resultZScore: 'Wskaźnik z-score',
    resultZScoreA: 'z₁ (dolna granica)',
    resultZScoreB: 'z₂ (górna granica)',
    hintStdDev: 'Odchylenie standardowe musi być większe od 0.',
    hintPercentile: 'Percentyl musi zawierać się między 0 a 1 (bez 0 i 1).',
    labelChart: 'Krzywa dzwonowa Gaussa',
    chartDesc: 'Zaznaczony obszar odpowiada obliczonemu prawdopodobieństwu.',
    labelReport: 'Podsumowanie do raportu',
    btnCopy: 'Kopiuj podsumowanie',
    btnCopied: 'Skopiowano!',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
  },
};
