import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'kalkulator-przedzialu-ufnosci';
const title = 'Kalkulator przedziału ufności online';
const description =
  'Oblicz przedziały ufności dla średniej populacji przy użyciu rozkładu Z lub t-Studenta. Wprowadź średnią z próby, odchylenie standardowe, wielkość próby i poziom ufności, aby natychmiast otrzymać przedział, błąd marginesu i wartość krytyczną.';

const faqData = [
  {
    question: 'Co to jest przedział ufności?',
    answer:
      'Przedział ufności (CI) to zakres wartości obliczony na podstawie danych z próby, który z określonym prawdopodobieństwem (poziomem ufności) zawiera prawdziwy parametr populacji. Na przykład 95% przedział ufności dla średniej oznacza, że gdybyśmy wielokrotnie powtarzali losowanie próby, 95% obliczonych przedziałów zawierałoby prawdziwą średnią populacji.',
  },
  {
    question: 'Kiedy powinienem używać Z zamiast t?',
    answer:
      'Używaj Z, gdy odchylenie standardowe populacji (σ) jest znane lub gdy n jest duże (>30). Używaj rozkładu t-Studenta, gdy dostępne jest tylko odchylenie standardowe z próby (s), a n jest małe. Dla n > 30 oba rozkłady są praktycznie równoważne, ale t pozostaje bardziej konserwatywny i technicznie poprawny, gdy σ jest nieznane.',
  },
  {
    question: 'Jak wielkość próby wpływa na szerokość przedziału?',
    answer:
      'Szerokość przedziału ufności jest proporcjonalna do 1/√n: czterokrotne zwiększenie wielkości próby zmniejsza błąd marginesu o połowę. To wyjaśnia, dlaczego duże próby dają bardziej precyzyjne szacunki i dlaczego planowanie wielkości próby jest kluczowe w projektowaniu badań statystycznych.',
  },
  {
    question: 'Co to jest błąd marginesu?',
    answer:
      'Błąd marginesu (ME) to połowa szerokości przedziału ufności: ME = wartość_krytyczna × SE, gdzie SE = σ/√n to błąd standardowy. Wskazuje on maksymalną oczekiwaną różnicę między szacunkiem z próby a prawdziwą wartością populacji przy określonym poziomie ufności.',
  },
];

const howToData = [
  {
    name: 'Wprowadź parametry próby',
    text: 'Wpisz średnią z próby (x̄), odchylenie standardowe (σ lub s > 0) oraz wielkość próby (n ≥ 2).',
  },
  {
    name: 'Wybierz poziom ufności',
    text: 'Wybierz 90%, 95% lub 99% za pomocą przycisków szybkiego dostępu lub wpisz dowolną wartość od 0 do 100.',
  },
  {
    name: 'Wybierz rozkład i odczytaj wynik',
    text: 'Wybierz Z, jeśli odchylenie standardowe populacji jest znane, lub t dla próby. Przedział, błąd marginesu i wartość krytyczna są obliczane natychmiast.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    { name: 'Przedział ufności - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Przedzia%C5%82_ufno%C5%9Bci' },
    { name: 'Rozkład t-Studenta - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Rozk%C5%82ad_t-Studenta' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Błąd standardowy - Wikipedia', url: 'https://pl.wikipedia.org/wiki/B%C5%82%C4%85d_standardowy' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator przedziału ufności: wyniki w czasie rzeczywistym' },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator przedziału ufności</strong> natychmiast oblicza przedział, błąd marginesu, wartość krytyczną i błąd standardowy. Obsługuje rozkład Z (znane sigma populacji) oraz t-Studenta (sigma z próby), z dowolnym poziomem ufności od 0 do 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Rozkłady Z i t', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Wyniki w czasie rzeczywistym', icon: 'mdi:lightning-bolt' },
        { value: 'Darmowy', label: 'Bez rejestracji', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Rozkład Z vs t-Studenta' },
    {
      type: 'table',
      headers: ['Kryterium', 'Rozkład Z', 't-Studenta'],
      rows: [
        ['Kiedy stosować', 'Znane σ populacji lub n > 30', 'Odchylenie z próby s, dowolne n'],
        ['Wartość krytyczna (95%)', 'z* = 1,960', 't* zależy od df = n−1'],
        ['Stopnie swobody', 'Nie dotyczy', 'df = n − 1'],
        ['Dla dużego n', 'Węższy przedział ufności', 'Zbiega do Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Jak poprawnie interpretować przedział ufności',
      html: '<strong>95% przedział ufności</strong> nie oznacza, że istnieje 95% prawdopodobieństwa, iż prawdziwa średnia znajduje się w tym konkretnym przedziale. Oznacza to, że <strong>procedura</strong>, jeśli zostanie powtórzona dla wielu prób, wygeneruje przedziały zawierające prawdziwą średnią w 95% przypadków. Raz obliczony przedział albo zawiera prawdziwą wartość, albo nie.',
    },
    { type: 'title', level: 2, text: 'Szybki słowniczek' },
    {
      type: 'glossary',
      items: [
        { term: 'Przedział ufności (CI)', definition: 'Zakres [x̄ − ME, x̄ + ME] szacujący parametr populacji na wybranym poziomie ufności.' },
        { term: 'Poziom ufności', definition: 'Część przedziałów, które zawierałyby prawdziwy parametr, gdyby eksperyment był wielokrotnie powtarzany. Typowe wartości: 90%, 95%, 99%.' },
        { term: 'Błąd standardowy (SE)', definition: 'SE = σ/√n. Mierzy zmienność średniej z próby wokół średniej populacji.' },
        { term: 'Błąd marginesu (ME)', definition: 'ME = z* × SE (lub t* × SE). Jest to połowa szerokości przedziału ufności.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Przedział ufności',
    labelMean: 'Średnia z próby (x̄)',
    labelStdDev: 'Odchylenie standardowe',
    labelN: 'Wielkość próby (n)',
    labelConf: 'Poziom ufności (%)',
    btnZ: 'Z (znane σ)',
    btnT: 't-Studenta',
    labelCI: 'Przedział ufności',
    labelME: 'Błąd marginesu',
    labelCritical: 'Wartość krytyczna',
    labelSE: 'Błąd standardowy',
    labelDF: 'Stopnie swobody',
    hintN: 'n musi być liczbą całkowitą większą lub równą 2.',
    hintStdDev: 'Odchylenie standardowe musi być większe od 0.',
    hintConf: 'Poziom ufności musi mieścić się w przedziale od 0 do 100.',
    labelChart: 'Wizualizacja przedziału',
    chartDesc: 'Oś liczbowa z zacienionym przedziałem ufności i błędem marginesu.',
    labelReport: 'Podsumowanie do raportu',
    btnCopy: 'Kopiuj podsumowanie',
    btnCopied: 'Skopiowano!',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
    tabStats: 'Statystyki opisowe',
    tabRaw: 'Surowe dane',
    labelRaw: 'Wklej dane',
    rawPlaceholder: 'Wpisz lub wklej wartości oddzielone przecinkami, spacjami lub nowymi liniami. Np.: 12.3, 15.1, 11.8',
    hintRaw: 'Wprowadź co najmniej 2 prawidłowe wartości numeryczne.',
    labelDist: 'Rozkład',
    distAuto: 'Auto',
    noticeAutoRaw: 'Dane z próby: zastosowano t-Studenta',
    noticeAutoLowN: 'n < 30: zalecany rozkład t-Studenta',
    noticeAutoHighN: 'n ≥ 30: zalecany rozkład Z',
    calcCI: 'Przedział CI',
    calcInverse: 'Minimalne n',
    labelTargetME: 'Docelowy błąd marginesu (E)',
    hintTargetME: 'E musi być liczbą większą od 0.',
    labelReqN: 'Minimalna wielkość próby',
  },
};
