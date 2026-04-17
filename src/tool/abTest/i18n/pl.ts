import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'kalkulator-testowania-hipotez-ab';
const title = 'Kalkulator testowania hipotez A/B online';
const description =
  'Porównaj dwie grupy (A i B), aby ustalić, czy istnieje statystycznie istotna różnica w ich konwersjach lub średnich. Natychmiastowe obliczanie wartości p.';

const faqData = [
  {
    question: 'Co oznacza wartość p?',
    answer:
      'Wartość p informuje o prawdopodobieństwie, że różnica w wynikach między grupą A i grupą B jest czystym przypadkiem. Jeśli wartość p jest niższa niż poziom istotności (zwykle 0,05), oznacza to, że możesz mieć 95% pewności, że różnica strukturalna jest rzeczywista.',
  },
  {
    question: 'Co to jest poziom istotności (alfa lub α)?',
    answer:
      'Jest to poziom rygoru przyjęty dla testu. Alfa wynosząca 0,05 wymaga 95% pewności, że grupa B różni się od grupy A, aby uznać wynik za ważny. Alfa wynosząca 0,01 wymaga znacznie większego rygoru (99%). Konwencją akademicką i przemysłową jest domyślne stosowanie wartości 0,05.',
  },
  {
    question: 'Jaka jest różnica między testem proporcji a testem średnich?',
    answer:
      'Test proporcji mierzy dychotomiczne zmienne sukcesu lub porażki: kliknięcia, otwarcia e-maili, konwersje. Test średnich porównuje skumulowane zachowania ilościowe: średnie wydatki w koszyku lub dni rekonwalescencji klinicznej.',
  },
  {
    question: 'Co jeśli moja próba jest mniejsza niż 30 osób?',
    answer:
      'Aproksymacja rozkładem normalnym staje się mniej precyzyjna przy tak małych próbach (centralne twierdzenie graniczne). W przypadku decyzji klinicznych zalecamy stosowanie bardziej konserwatywnych technik prawdopodobieństwa dokładnego lub skorygowanego testu t-Studenta.',
  },
];

const howToData = [
  {
    name: 'Wybierz cel numeryczny',
    text: 'W panelu konfiguracji określ, czy chcesz mierzyć współczynniki konwersji (proste proporcje), czy ogólne średnie, takie jak kwoty (średnie).',
  },
  {
    name: 'Wprowadź dane kontrolne (Grupa A)',
    text: 'Wypełnij liczbę wysłanych/wyeksponowanych przypadków oraz liczbę odnotowanych sukcesów (lub ich średnią).',
  },
  {
    name: 'Wprowadź dane eksperymentalne (Grupa B)',
    text: 'Wprowadź liczby dla nowej inicjatywy lub wariantu, który mierzysz.',
  },
  {
    name: 'Zanotuj werdykt statystyczny',
    text: 'Spójrz na Sędziego Istotności i skopiuj wygenerowane uzasadnienie dotyczące tego, czy rzeczywista poprawa (Lift) pozwala odrzucić założenie o losowości.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    { name: 'Statystyczne testowanie hipotez - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Statystyczne_testowanie_hipotez' },
    { name: 'Kalkulator testów A/B - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator testowania hipotez A/B online' },
    {
      type: 'paragraph',
      html: 'Podejmowanie decyzji na podstawie intuicji jest niebezpieczne; podejmowanie ich na podstawie czystych danych to droga do sukcesu. <strong>Kalkulator Testowania Hipotez (A/B Test)</strong> to ostateczne narzędzie dla analityków, marketerów i badaczy, którzy muszą zweryfikować, czy różnica między dwiema grupami jest statystycznie istotna, czy po prostu jest wynikiem przypadku.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Wartość p', label: 'Ostateczny Sędzia', icon: 'mdi:scale-balance' },
        { value: 'Lokalnie', label: 'Brak przesyłu danych', icon: 'mdi:shield-check' },
        { value: 'Natychmiast', label: 'Natywne wykresy', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Dlaczego dzielimy testy na konwersje i średnie?' },
    {
      type: 'paragraph',
      html: 'W zależności od charakteru badania, metryka sukcesu ulegnie zmianie. Nasze narzędzie natywnie obsługuje dwa najczęściej stosowane typy testów statystycznych w branży.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Test proporcji (konwersje)',
          description: 'Porównuje wartości procentowe lub współczynniki sukcesu między dwiema grupami.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Idealny dla marketingu (kliknięcia, sprzedaż, subskrypcje)',
            'Wykorzystuje sumę przypadków (n) i sukcesy (x)',
            'Stosuje test Z dla dwóch proporcji',
          ],
        },
        {
          title: 'Test średnich ciągłych',
          description: 'Porównuje średnie wartości liczbowe między dwiema grupami.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Idealny dla średniego koszyka, czasu na stronie lub prób klinicznych',
            'Wykorzystuje średnią (μ) i odchylenie standardowe (σ)',
            'Stosuje solidną aproksymację normalną dla prób (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Jak interpretować wyniki: Wartość p jest Twoim przewodnikiem' },
    {
      type: 'paragraph',
      html: 'Sercem tego kalkulatora jest słynna <strong>wartość p</strong>. Liczba ta informuje o prawdopodobieństwie uzyskania obserwowanej różnicy, gdyby hipoteza zerowa (zakładająca, że „obie grupy są równe”) była prawdziwa.',
    },
    {
      type: 'table',
      headers: ['Obserwowana wartość p', 'Znaczenie praktyczne', 'Standardowa decyzja'],
      rows: [
        ['<strong>Większa niż 0,05</strong>', 'Różnica jest mała w stosunku do wariancji. Przypadek może ją wyjaśnić.', '<strong>NIE odrzucaj</strong> hipotezy zerowej. Brak udowodnionej realnej poprawy.'],
        ['<strong>Mniejsza niż 0,05</strong>', 'Jest niezwykle mało prawdopodobne, aby przypadek spowodował taką różnicę. Istnieje rzeczywisty efekt.', '<strong>Odrzuć</strong> hipotezę zerową. Wariant B jest lepszy!'],
        ['<strong>Mniejsza niż 0,01</strong>', 'Dowody przemawiające za zmianą są przytłaczające (99% pewności).', '<strong>Zdecydowanie odrzuć</strong>. Oszałamiający sukces eksperymentu.'],
      ],
    },
    {
      type: 'tip',
      title: 'Korekta dla małych prób',
      html: 'Jeśli Twoje grupy obejmują mniej niż 30 osób, narzędzie wyświetli ostrzeżenie o „małej próbie”. W tych granicznych scenariuszach klasyczna aproksymacja normalna traci precyzję; zalecamy korzystanie z dokładnego testu t-Studenta lub narzędzi Fishera.',
    },
    { type: 'title', level: 2, text: 'Glosariusz testowania A/B' },
    {
      type: 'glossary',
      items: [
        { term: 'Grupa kontrolna (A)', definition: 'Oryginalna wersja lub punkt odniesienia, względem którego będziesz mierzyć eksperyment.' },
        { term: 'Wariant (B)', definition: 'Nowa, zmodyfikowana wersja, która ma poprawić wyniki.' },
        { term: 'Lift (względna poprawa)', definition: 'Procentowa zmiana wydajności grupy B w stosunku do punktu odniesienia grupy A.' },
        { term: 'Poziom istotności (α)', definition: 'Próg błędu, który jesteś skłonny zaakceptować (zwykle 5% lub 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametry',
    btnConversions: 'Konwersje',
    btnMeans: 'Średnie',
    labelGroupA: 'Grupa A (Kontrolna)',
    labelGroupB: 'Grupa B (Wariant)',
    labelTotalCases: 'Suma przypadków',
    labelSuccesses: 'Sukcesy lub konwersje',
    labelMean: 'Średnia',
    labelStdDev: 'Odchylenie standardowe',
    labelAlpha: 'Poziom istotności',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    labelDirection: 'Kierunek testu',
    btn2Tails: '2-stronny (Różnica)',
    btn1Tail: '1-stronny (B > A)',
    alertTitle: 'Ostrzeżenie o wiarygodności statystycznej',
    alertBody: 'Używasz bardzo małej próby lub ekstremalnych wartości (0 sukcesów). Szacunek może nie być reprezentatywny dla rzeczywistego świata.',
    alertLinkText: 'Oblicz idealną wielkość próby tutaj',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'Wartość p',
    sigDescInitial: 'Istnieją wystarczające dowody, aby odrzucić hipotezę zerową',
    labelLift: 'Analiza poprawy (Lift)',
    labelLiftText: 'poprawy względem grupy A',
    labelConfidencePrefix: 'Pewność statystyczna:',
    labelDistributions: 'Rozkłady prawdopodobieństwa',
    chartDesc: 'Obserwuj nakładanie się: mniejsze nakładanie się oznacza większą pewność, że różnice są rzeczywiste, a nie wynikają z przypadku.',
    labelReport: 'Tekst do raportu',
    defaultJustification: 'Po przeanalizowaniu X osób, grupa B wykazuje poprawę o Y% z pewnością statystyczną Z% (p=0,00).',
    btnCopy: 'Kopiuj tekst',
    btnCopied: 'Skopiowano!',
    sigText: 'Istnieją wystarczające dowody, aby odrzucić hipotezę zerową.',
    noSigText: 'Różnica nie jest statystycznie istotna.',
    justIntro: 'Po przeanalizowaniu łącznie',
    justSamples: ' prób, grupa B wykazuje zmianę o ',
    justRespectTo: '% względem grupy A.',
    justWithConfidence: ' Przy pewności statystycznej ',
    justDiff: ', różnica empiryczna ',
    justSig: 'JEST statystycznie istotna',
    justNoSig: 'NIE jest statystycznie istotna',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
  },
};
