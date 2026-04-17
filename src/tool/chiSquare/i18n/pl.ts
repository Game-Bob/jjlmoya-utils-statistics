import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'kalkulator-testu-niezaleznosci-chi-kwadrat';
const title = 'Kalkulator testu niezależności chi kwadrat online';
const description =
  'Ustal, czy istnieje statystyczny związek między dwiema zmiennymi kategorialnymi. Wypełnij macierz obserwowanych liczebności i natychmiast oblicz wartość p.';

const faqData = [
  {
    question: 'Co to jest test niezależności chi-kwadrat?',
    answer:
      'Jest to test statystyczny służący do oceny prawdopodobieństwa, czy obserwowany związek między dwiema zmiennymi kategorialnymi lub nominalnymi wynika z przypadku. Na przykład: czy ulubiony deser osoby jest powiązany z regionem, w którym mieszka.',
  },
  {
    question: 'Do czego służy współczynnik V Craméra?',
    answer:
      'Podczas gdy chi-kwadrat mówi, czy istnieje „jakikolwiek” związek, V Craméra mówi, „jak silny” jest ten związek. Przyjmuje wartości od 0 (całkowita niezależność) do 1 (absolutna zależność matematyczna). Wartości powyżej 0,5 są uważane za bardzo silne z punktu widzenia socjologii.',
  },
  {
    question: 'Co się stanie, jeśli moje liczebności oczekiwane są bardzo niskie?',
    answer:
      'Matematyczna aproksymacja chi-kwadrat traci wiarygodność, jeśli liczebności oczekiwane są mniejsze niż 5 w ponad 20% komórek. Nasze narzędzie ostrzeże Cię wizualnie, jeśli istnieje takie ryzyko. W takim przypadku zaleca się łączenie wątpliwych kategorii.',
  },
  {
    question: ' Czy mogę używać tego do badań jakościowych?',
    answer:
      'Zdecydowanie tak. Jest to podstawowe narzędzie w socjologii i badaniach rynku, gdzie rzadko operuje się liczbami dziesiętnymi, a raczej wzajemnie wykluczającymi się kategoriami (Kawaler/Żonaty, Tak/Nie, Północ/Południe).',
  },
];

const howToData = [
  {
    name: 'Zdefiniuj macierz',
    text: 'Najpierw wybierz rozmiar swojej tabeli wielodzielczej w zależności od tego, ile opcji ma Twoja zmienna A (wiersze) i zmienna B (kolumny).',
  },
  {
    name: 'Wprowadź dane obserwowane',
    text: 'Zastąp liczby bazowe, wypełniając pierwszą tabelę dokładną liczbą swoich rzeczywistych danych.',
  },
  {
    name: 'Przejrzyj reszty',
    text: 'Zaobserwuj, które komórki w naszej tabeli podświetlają się (na jasny zielony lub czerwony). Tam leżą anomalie powodujące, że zmienne nie są niezależne.',
  },
  {
    name: 'Skopiuj wnioski',
    text: 'Wklej do swojej pracy dyplomowej lub raportu z projektu automatycznie wygenerowany tekst z matematycznym uzasadnieniem wartości p.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Bibliografia i źródła',
  bibliography: [
    {
      name: 'Test chi-kwadrat - Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Test_chi-kwadrat',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Kalkulator testu niezależności chi kwadrat',
    },
    {
      type: 'paragraph',
      html: 'Podczas gdy klasyczne narzędzia, takie jak test A/B czy statystyki opisowe, doskonale sprawdzają się w przypadku liczb ciągłych (średnie, zarobki, wagi), świat rzeczywisty jest pełen danych kategorialnych (kolory, marki, poziomy satysfakcji). <strong>Kalkulator niezależności chi-kwadrat</strong> to „królewski” test służący do analitycznego ustalenia, czy dwie zmienne jakościowe są ze sobą powiązane statystycznie, czy też zmieniają się całkowicie niezależnie od siebie.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabela', label: 'Dynamiczna do 3×3', icon: 'mdi:table' },
        { value: 'V Craméra', label: 'Siła związku', icon: 'mdi:link' },
        { value: 'Mapa ciepła', label: 'Reszty i odchylenie', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Do czego dokładnie służy statystyka chi kwadrat (χ²)?',
    },
    {
      type: 'paragraph',
      html: 'Test niezależności chi-kwadrat porównuje <em>liczebności obserwowane</em> (rzeczywiste liczby, które zmierzyłeś i zebrałeś) z <em>liczebnościami oczekiwanymi</em> (liczebności, których spodziewalibyśmy się w każdej komórce, gdyby między zmiennymi nie zachodziły żadne interakcje).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Zmienne zależne (związek istnieje)',
          description: 'Proporcje jednej kategorii zmieniają się drastycznie w zależności od drugiej.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Przykład: Użytkownicy mobilni wolą Projekt A, ale użytkownicy komputerów wolą Projekt B.',
            'Chi-kwadrat (χ²) gwałtownie rośnie, a wartość p spada.',
            'V Craméra wskazuje siłę (np. silny > 0,5).',
          ],
        },
        {
          title: 'Zmienne niezależne (przypadek)',
          description: 'Proporcje pozostają stabilne na wszystkich poziomach.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Przykład: Kolor oczu klienta nie wpływa na markę kupowanego samochodu.',
            'Chi-kwadrat jest maleńki, a wartość p jest większa niż 0,05.',
            'Hipotezy zerowej nie można odrzucić.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'V Craméra: Rozumienie siły powiązania',
    },
    {
      type: 'paragraph',
      html: 'Uzyskanie bardzo niskiej wartości p nie oznacza, że zmienne są powiązane „intensywnie”; wskazuje to jedynie, że przypadek nie może być winowajcą (być może dlatego, że masz dziesiątki tysięcy rzeczywistych przypadków). Aby zmierzyć „wielkość efektu”, automatycznie dołączamy <strong>Współczynnik V Craméra</strong>.',
    },
    {
      type: 'table',
      headers: ['Kalkulator (wartość V)', 'Ocena analityczna', 'Tłumaczenie'],
      rows: [
        [
          '<strong>0,00 do 0,10</strong>',
          'Brak związku / związek trywialny',
          'Teoretycznie zależne, ale w sposób niedostrzegalny i nieprzydatny dla celów biznesowych.',
        ],
        [
          '<strong>0,11 do 0,30</strong>',
          'Słaby związek',
          'Istnieje niewielkie powiązanie, ale wiele innych czynników zewnętrznych ma większą wagę.',
        ],
        [
          '<strong>0,31 do 0,50</strong>',
          'Umiarkowany związek',
          'Obie cechy wyraźnie na siebie wpływają.',
        ],
        [
          '<strong>Powyżej 0,50</strong>',
          'Silny związek',
          'Bardzo jasne połączenie. Znajomość zmiennej A pozwala wyjątkowo dobrze przewidzieć zmienną B.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Warunki wykonalności matematycznej',
      html: 'Uważaj na puste komórki! Aby aproksymacja chi-kwadrat Pearsona pozostała solidna pod krzywą dzwonową, metodologicznie wymagane jest, aby co najmniej 80% <em>liczebności oczekiwanych</em> (nie obserwowanych) było większych niż 5, a żadna komórka nie była poniżej 1. Jeśli ten warunek nie zostanie spełniony, uruchomi się nasz wskaźnik ostrzegawczy, sugerując połączenie kategorii.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Wbudowana mapa ciepła reszt',
    },
    {
      type: 'paragraph',
      html: 'Aby poprawić wrażenia użytkownika i ułatwić wyciąganie wniosków w raportach, nasza macierz automatycznie zabarwi tło komórek na podstawie ich reszt standaryzowanych (odchylenie):<br/><br/><strong>Odcienie zieleni:</strong> komórka ma <em>znacznie więcej sukcesów</em>, niż wynikałoby to z czystej matematyki.<br/><strong>Odcienie czerwieni:</strong> komórka jest niebezpiecznie „pusta” w porównaniu z oczekiwaną normą.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosariusz chi-kwadrat',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Liczebność obserwowana',
          definition: 'Liczba dokładnie taka, jaką fizycznie policzyłeś w laboratorium lub ankietach.',
        },
        {
          term: 'Liczebność oczekiwana',
          definition: 'Obliczenie teoretyczne wynikające z pomnożenia sumy brzegowej wiersza przez sumę brzegową kolumny i podzielenia przez ogólną sumę.',
        },
        {
          term: 'Stopnie swobody (df)',
          definition: 'Geometryczna ilość wolnych danych. Znalezione przez odjęcie 1 od liczby wierszy i kolumn, a następnie ich pomnożenie.',
        },
        {
          term: 'Reszta standaryzowana',
          definition: 'Znormalizowana różnica między tym, co zaobserwowano, a tym, czego oczekiwano. Mierzy, która komórka najbardziej „napędza” odkrycie.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Ustawienia',
    labelTableSize: 'Rozmiar tabeli (Wiersze × Kolumny)',
    labelAlpha: 'Poziom istotności (α)',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    infoText:
      'Automatycznie oblicza liczebność teoretyczną, wartość χ² i siłę związku współczynnik V Craméra przy użyciu czysto lokalnego wnioskowania.',
    labelObserved: 'Liczebności obserwowane (Dane wejściowe)',
    btnShowExpected: 'Pokaż liczebności oczekiwane (H₀)',
    expectedDesc:
      'Są to wartości, które istniałyby w każdej komórce, gdyby między dwiema zmiennymi nie było żadnego związku (rozkład losowy).',
    alertTitle: 'Ostrzeżenie statystyczne (Komórki < 5)',
    alertBody:
      'Występują bardzo niskie liczebności oczekiwane. Aproksymacja χ² może nie być wiarygodna. Sugeruje się połączenie kategorii lub skorzystanie z dokładnego testu Fishera.',
    labelPValue: 'Wartość p (p)',
    sigDescInitial: 'Istnieje istotny związek',
    labelGlobalStats: 'Statystyki ogólne',
    labelChiSquareStat: 'Chi kwadrat (χ²)',
    labelDegrees: 'Stopnie (df)',
    labelCramer: 'Siła związku (V Craméra)',
    labelVisualization: 'Wizualizacja reszt (Obserwowane vs Oczekiwane)',
    heatmapInfo: 'Komórki wejściowe tabeli są kolorowane zgodnie ze zmiennością resztową.',
    labelReport: 'Tekst do raportu',
    defaultJustification:
      'Po przeanalizowaniu łącznie N obserwacji znaleźliśmy wartość χ²(df) = X. Przy wartości p równej P wnioskuje się, że istnieje istotna zależność.',
    btnCopy: 'Kopiuj tekst',
    rowLabel: 'Wiersz',
    colLabel: 'Kol',
    totalLabel: 'SUMA',
    cramerNull: 'Brak',
    cramerWeak: 'Słaba',
    cramerModerate: 'Umiarkowana',
    cramerStrong: 'Silna',
    sigText: 'Istnieje istotny związek (zależność).',
    noSigText: 'Brak dowodów na związek (niezależność).',
    chartLegendObs: 'Wiersz obserwowany',
    chartLegendExp: 'Oczekiwany',
    btnCopied: 'Skopiowano!',
    justificationIntro: 'Po przeanalizowaniu',
    justificationTableOf: 'przypadków w tabeli',
    justificationObtained: ', otrzymaliśmy',
    justificationPAt: '. Po ocenie na poziomie α=',
    justificationConcluded: ', empirycznie stwierdza się, że',
    justificationSig: 'ISTNIEJE SILNY ZWIĄZEK między zmiennymi (V Craméra:',
    justificationNoSig: 'NIE ISTNIEJE statystycznie istotny związek',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i źródła',
  },
};
