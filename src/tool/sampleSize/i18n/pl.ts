import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'kalkulator-wielkosci-proby';
const title = 'Kalkulator wielkości próby online';
const description =
  'Oblicz dokładną liczbę osób potrzebną do Twojego badania. Zawiera opcje dla populacji skończonej lub nieskończonej, regulowane poziomy ufności i marginesy błędu.';

const faqData = [
  {
    question: 'Co to jest wielkość populacji?',
    answer:
      'Jest to całkowita liczba osób tworzących grupę, którą chcesz zbadać lub poddać ankiecie. Jeśli jest ona mniejsza niż 100 000, zazwyczaj uważa się ją za populację skończoną. Jeśli nie posiadasz tych danych lub są one niemożliwe do opanowania, wybierz opcję populacji nieskończonej.',
  },
  {
    question: 'Jaki poziom ufności powinienem wybrać?',
    answer:
      '95% to najczęściej stosowany standard w badaniach naukowych, pracach dyplomowych i badaniach marketingowych. Zmień tę wartość tylko wtedy, gdy Twój profesor, opiekun lub klient wymaga innego poziomu precyzji (np. 99%).',
  },
  {
    question: 'Dlaczego narzędzie pyta o margines błędu?',
    answer:
      'Żadna próba nie jest idealna. Margines błędu definiuje stopień niedokładności, który jesteś skłonny zaakceptować. Najczęściej stosowany to 5%.',
  },
  {
    question: 'Jaką oczekiwaną proporcję (p) powinienem zastosować, jeśli nic nie wiem o populacji?',
    answer:
      'Pozostaw wartość domyślną: 50%. W statystyce reprezentuje to „najgorszy scenariusz”, ponieważ maksymalizuje wariancję p(1-p), zapewniając, że wielkość próby nigdy nie będzie zbyt mała w żadnych okolicznościach.',
  },
];

const howToData = [
  {
    name: 'Zdefiniuj swoją populację',
    text: 'Określ, czy znasz całkowitą liczbę osób w badanej grupie (Skończona), czy wolisz konserwatywne obliczenia dla bardzo dużych/nieznanych grup (Nieskończona).',
  },
  {
    name: 'Dostosuj poziom ufności',
    text: 'Wybierz 95% (zalecane) lub wprowadź niestandardową wartość w menu rozwijanym.',
  },
  {
    name: 'Ustaw margines błędu',
    text: 'Określ tolerancję błędu. Pamiętaj, że zmniejszenie jej z 5% do 2% drastycznie zwielokrotni liczbę ankiet, które będziesz musiał przeprowadzić.',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Spójrz na panel środkowy i bezpośrednio skopiuj automatycznie wygenerowany tekst uzasadnienia, aby dodać go do swojej pracy dyplomowej lub raportu.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    { name: 'Dobór wielkości próby - Wikipedia', url: 'https://pl.wikipedia.org/wiki/Dob%C3%B3r_wielko%C5%9Bci_pr%C3%B3by' },
    { name: 'Obliczanie wielkości próby - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator wielkości próby online: Ostateczny przewodnik' },
    {
      type: 'paragraph',
      html: 'Określenie odpowiedniej liczby osób do przebadania jest jednym z najbardziej krytycznych kroków w każdym badaniu, analizie rynku czy projekcie akademickim. <strong>Kalkulator wielkości próby</strong> zapewnia studentom, badaczom i specjalistom od marketingu precyzyjne, szybkie i łatwe w użyciu narzędzie do obliczania dokładnej liczby osób potrzebnej do uzyskania statystycznie istotnych wyników.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Standardowa ufność', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Margines błędu', icon: 'mdi:target' },
        { value: 'Szybko', label: 'Obliczanie w czasie rzeczywistym', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Dlaczego obliczanie wielkości próby jest kluczowe?' },
    {
      type: 'paragraph',
      html: 'W statystyce rzadko możliwe jest zbadanie całej populacji. Rozwiązaniem jest wybór reprezentatywnej podgrupy znanej jako próba. Jeśli próba jest zbyt mała, wyniki będą obarczone błędem. Jeśli jest zbyt duża, niepotrzebnie stracisz czas i pieniądze.',
    },
    { type: 'title', level: 2, text: 'Dwa tryby obliczeń: Populacja skończona i nieskończona' },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator dostosowuje się do Twojej sytuacji, oferując dwa odrębne tryby obliczeń.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Populacja skończona (znana)',
          description: 'Dokładna całkowita liczba osób jest znana.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Wymaga wartości N',
            'Stosuje współczynnik korygujący',
            'Zmniejsza ostateczną wielkość próby',
          ],
        },
        {
          title: 'Populacja nieskończona (nieznana)',
          description: 'Wielkość całkowita jest nieznana, niemożliwa do opanowania lub większa niż 100 000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Nie wymaga znajomości N',
            'Standardowa klasyczna formuła',
            'Najbardziej konserwatywny i bezpieczny scenariusz',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Zrozumienie parametrów panelu sterowania' },
    {
      type: 'table',
      headers: ['Parametr', 'Opis', 'Standardowe zalecenie'],
      rows: [
        ['<strong>Poziom ufności (Z)</strong>', 'Matematyczna pewność, że próba reprezentuje populację.', 'Użyj 95%.'],
        ['<strong>Margines błędu (e)</strong>', 'Tolerowany procentowy stopień odchylenia od rzeczywistości.', 'Użyj 5%.'],
        ['<strong>Oczekiwana proporcja (p)</strong>', 'Prawdopodobieństwo wystąpienia badanego zdarzenia.', 'Użyj 50% (maksymalizuje wariancję).'],
      ],
    },
    {
      type: 'tip',
      title: 'Uwaga na margines błędu',
      html: 'Zmniejszenie marginesu błędu z 5% do 2% wymaga wykładniczego zwiększenia wielkości próby. Sprawdź wykres wrażliwości w kalkulatorze, zanim zdecydujesz się na zbyt rygorystyczny margines.',
    },
    { type: 'title', level: 2, text: 'Formuła matematyczna stojąca za obliczeniami' },
    {
      type: 'list',
      items: [
        '<strong>Populacja nieskończona:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Wartość krytyczna pochodząca z poziomu ufności.',
        '<strong>p:</strong> Oczekiwana proporcja (q to 1 - p).',
        '<strong>e:</strong> Tolerowany margines błędu.',
      ],
    },
    { type: 'title', level: 2, text: 'Szybki glosariusz dla badaczy' },
    {
      type: 'glossary',
      items: [
        { term: 'Populacja (N)', definition: 'Całkowity zbiór elementów lub osób wykazujących wspólną cechę, będących przedmiotem badania.' },
        { term: 'Próba (n)', definition: 'Reprezentatywny podzbiór wybrany z całej populacji.' },
        { term: 'Maksymalna wariancja', definition: 'Występuje, gdy p=0,5 (50%), co zapewnia, że obliczona próba jest wykonalna dla najbardziej zróżnicowanego możliwego przypadku.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametry',
    labelPopType: 'Typ populacji',
    btnFinite: 'Skończona (znana)',
    btnInfinite: 'Nieskończona (nieznana)',
    labelPopSize: 'Wielkość populacji',
    labelConfLevel: 'Poziom ufności (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Niestandardowy',
    labelConfCustom: 'Niestandardowy poziom ufności (%)',
    labelErrorMargin: 'Margines błędu (%)',
    labelProportion: 'Oczekiwana proporcja',
    hintProportion: '50% to „najgorszy przypadek”, który daje największą i najbezpieczniejszą próbę.',
    hintProportionError: 'Proporcja 0% lub 100% unieważnia próbę. Sugerujemy stosowanie wartości między 5% a 95%.',
    labelSampleSize: 'Sugerowana wielkość',
    labelSampleSub: 'potrzebnych ankiet',
    labelZValue: 'Wartość krytyczna',
    labelReport: 'Tekst do raportu',
    defaultJustification: 'Dla populacji liczącej 10 000 osób, przy poziomie ufności 95% i marginesie błędu 5%, reprezentatywna wielkość próby wynosi 370 osób.',
    btnCopy: 'Kopiuj tekst',
    btnCopied: 'Skopiowano!',
    labelChart: 'Wrażliwość: Wielkość vs Margines błędu',
    chartDesc: 'Zaobserwuj, jak gwałtownie rośnie wielkość próby przy próbie zmniejszenia marginesu błędu.',
    justForFinite: 'Dla populacji liczącej',
    justPersons: 'osób',
    justForInfinite: 'Dla populacji nieskończonej',
    justConfidence: ', przy poziomie ufności',
    justError: '% i marginesie błędu',
    justResultIs: '%, reprezentatywna wielkość próby to',
    justUnit: 'osób.',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
  },
};
