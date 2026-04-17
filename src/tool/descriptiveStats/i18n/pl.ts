import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'kalkulator-statystyki-opisowej';
const title = 'Kalkulator statystyki opisowej online';
const description =
  'Oblicz natychmiast wszystkie kluczowe statystyki opisowe: średnią, medianę, dominantę, odchylenie standardowe, wariancję, kwartyle, skośność, kurtozę i inne. Wklej swoje dane i otrzymaj wyniki w czasie rzeczywistym.';

const faqData = [
  {
    question: 'Jaka jest różnica między odchyleniem standardowym populacji a próby?',
    answer:
      'Odchylenie standardowe populacji dzieli przez N (znane są wszystkie elementy). Odchylenie standardowe próby dzieli przez N-1 (poprawka Bessela), aby skorygować obciążenie przy szacowaniu na podstawie podzbioru. Ten kalkulator używa odchylenia standardowego próby (N-1), co jest najczęstszym wyborem w badaniach i analizie danych.',
  },
  {
    question: 'Co oznacza skośność dodatnia lub ujemna?',
    answer:
      'Skośność mierzy asymetrię rozkładu danych. Skośność dodatnia (prawostronna) oznacza, że ogon rozkładu wydłuża się w prawo, a większość wartości skupia się po lewej stronie. Skośność ujemna (lewostronna) jest przeciwieństwem. Wartość bliska 0 wskazuje na rozkład w przybliżeniu symetryczny.',
  },
  {
    question: 'Co to jest kurtoza i co wskazuje?',
    answer:
      'Kurtoza mierzy "wysmukłość" lub "spłaszczenie" rozkładu w stosunku do rozkładu normalnego. Ten kalkulator zwraca kurtozę eksces ( excess kurtosis), gdzie 0 jest punktem odniesienia (rozkład normalny). Wartości dodatnie (leptokurtyczne) wskazują na wysmukły rozkład i cięższe ogony. Wartości ujemne (platykurtyczne) wskazują na spłaszczony rozkład i lżejsze ogony.',
  },
  {
    question: 'W jakim formacie powinny być moje dane?',
    answer:
      'Wklej liczby rozdzielone przecinkami, spacjami, średnikami lub znakami nowej linii. Przykłady: "1, 2, 3, 4" lub "1 2 3 4" lub jedna wartość w wierszu. Kalkulator automatycznie ignoruje znaki nienumeryczne.',
  },
];

const howToData = [
  {
    name: 'Wklej lub wpisz swoje dane',
    text: 'Wprowadź wartości liczbowe w polu tekstowym, rozdzielając je przecinkami, spacjami lub znakami nowej linii. Potrzebujesz co najmniej 2 wartości.',
  },
  {
    name: 'Odczytaj wyniki',
    text: '15 statystyk aktualizuje się natychmiast podczas wpisywania. Histogram pokazuje kształt rozkładu Twoich danych.',
  },
  {
    name: 'Skopiuj podsumowanie',
    text: 'Użyj przycisku "Kopiuj podsumowanie", aby skopiować zwięzłe zestawienie kluczowych statystyk do wykorzystania w raporcie lub analizie.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    { name: 'Statystyka opisowa - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Statystyka_opisowa' },
    { name: 'Odchylenie standardowe - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Odchylenie_standardowe' },
    { name: 'Skośność - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Sko%C5%9Bno%C5%9B%C4%87' },
    { name: 'Kurtoza - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Kurtoza' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator statystyki opisowej: wszystkie kluczowe parametry w jednym miejscu' },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy jesteś studentem, naukowcem czy analitykiem danych, <strong>Kalkulator statystyki opisowej</strong> zapewnia natychmiastowe i kompletne podsumowanie statystyczne dowolnego zbioru danych numerycznych. Wklej swoje dane i otrzymaj 15 statystyk obliczonych jednocześnie – bez potrzeby korzystania z arkuszy kalkulacyjnych.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Obliczone statystyki', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Wyniki w czasie rzeczywistym', icon: 'mdi:lightning-bolt' },
        { value: 'Darmowy', label: 'Bez rejestracji', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Obliczane statystyki' },
    {
      type: 'table',
      headers: ['Statystyka', 'Opis'],
      rows: [
        ['<strong>Liczebność (N)</strong>', 'Całkowita liczba wartości w zbiorze danych.'],
        ['<strong>Średnia</strong>', 'Średnia arytmetyczna wszystkich wartości.'],
        ['<strong>Mediana</strong>', 'Wartość środkowa posortowanych danych. Odporna na wartości odstające.'],
        ['<strong>Dominanta</strong>', 'Wartość(ci) występująca najczęściej.'],
        ['<strong>Odchylenie std</strong>', 'Odchylenie standardowe próby (podzielone przez N-1).'],
        ['<strong>Wariancja</strong>', 'Kwadrat odchylenia standardowego próby.'],
        ['<strong>Min / Max</strong>', 'Najmniejsza i największa wartość w zbiorze.'],
        ['<strong>Rozstęp</strong>', 'Różnica między wartością maksymalną a minimalną.'],
        ['<strong>Q1 / Q3</strong>', 'Pierwszy i trzeci kwartyl (25. i 75. percentyl).'],
        ['<strong>Rozstęp ćwiartkowy (IQR)</strong>', 'Q3 minus Q1. Mierzy rozproszenie centralne.'],
        ['<strong>Skośność</strong>', 'Asymetria rozkładu względem jego średniej.'],
        ['<strong>Kurtoza</strong>', 'Kurtoza eksces: "ciężar" ogonów względem rozkładu normalnego.'],
      ],
    },
    {
      type: 'tip',
      title: 'Kiedy używać mediany zamiast średniej',
      html: 'Jeśli Twoje dane zawierają istotne wartości odstające (np. dane o dochodach, ceny mieszkań), <strong>mediana</strong> jest bardziej reprezentatywną miarą tendencji centralnej niż średnia, która jest przyciągana przez wartości ekstremalne.',
    },
    { type: 'title', level: 2, text: 'Interpretacja histogramu' },
    {
      type: 'paragraph',
      html: 'Histogram częstości pokazuje, jak Twoje wartości są rozłożone w przedziałach o równej szerokości, obliczonych automatycznie za pomocą <strong>reguły Sturgesa</strong> (k = 1 + log₂N). Symetryczny kształt dzwonu sugeruje rozkład normalny. Kształty asymetryczne potwierdzają wartość skośności widoczną w wynikach.',
    },
    { type: 'title', level: 2, text: 'Szybki słowniczek' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Rozstęp międzykwartylny. Rozproszenie środkowych 50% danych. Używany do identyfikacji wartości odstających.' },
        { term: 'Skośność', definition: 'Mierzy asymetrię rozkładu. Dodatnia = dłuższy prawy ogon. Ujemna = dłuższy lewy ogon.' },
        { term: 'Kurtoza eksces', definition: 'Waga ogonów w porównaniu do rozkładu normalnego. 0 to norma; wartości dodatnie oznaczają cięższe ogony.' },
        { term: 'Poprawka Bessela', definition: 'Dzielenie przez N-1 zamiast N przy obliczaniu wariancji próby w celu zmniejszenia błędu oszacowania.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Statystyka opisowa',
    labelData: 'Wprowadź swoje dane',
    placeholderData: 'np. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Wprowadź co najmniej 2 wartości liczbowe oddzielone przecinkami, spacjami lub znakami nowej linii.',
    hintError: 'Wprowadź co najmniej 2 prawidłowe wartości liczbowe, aby obliczyć statystyki.',
    btnSample: 'Próba',
    btnPopulation: 'Populacja',
    groupCentral: 'Tendencja centralna',
    groupDispersion: 'Rozproszenie',
    groupPosition: 'Pozycja',
    labelCount: 'Liczebność (N)',
    labelSum: 'Suma',
    labelMean: 'Średnia',
    labelMedian: 'Mediana',
    labelMode: 'Dominanta',
    labelStdDev: 'Odchylenie std',
    labelVariance: 'Wariancja',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Max',
    labelRange: 'Rozstęp',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Skośność',
    labelKurtosis: 'Kurtoza',
    labelBoxplot: 'Wykres pudełkowy',
    labelChart: 'Rozkład częstości',
    chartDesc: 'Histogram z automatyczną szerokością przedziałów według reguły Sturgesa.',
    insightTitle: 'Automatyczna interpretacja',
    insightHomogeneous: 'Dane są jednorodne (CV < 15%).',
    insightModerate: 'Dane wykazują umiarkowaną zmienność (CV 15-35%).',
    insightHeterogeneous: 'Dane są niejednorodne (CV > 35%).',
    insightSymmetric: 'Rozkład jest w przybliżeniu symetryczny.',
    insightRightSkewed: 'Rozkład wykazuje skośność dodatnią (prawostronny).',
    insightLeftSkewed: 'Rozkład wykazuje skośność ujemną (lewostronny).',
    insightNoOutliers: 'Nie wykryto wartości odstających.',
    insightOutliers: 'Wykryto {n} wartości odstających metodą IQR.',
    insightIQR: 'Rozstęp ćwiartkowy wynosi {iqr} (od {q1} do {q3}).',
    filterNotice: 'Zignorowano {n} znaków nienumerycznych.',
    labelReport: 'Podsumowanie do raportu',
    btnCopy: 'Kopiuj podsumowanie',
    btnCopied: 'Skopiowano!',
    noMode: 'Brak dominanty',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
  },
};
