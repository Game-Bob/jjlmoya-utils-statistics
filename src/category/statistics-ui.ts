import type { KnownLocale } from "../types";

export interface StatisticsUi {
  catalogLabel: string;
  allTools: string;
  describeTools: string;
  compareTools: string;
  estimateTools: string;
  modelTools: string;
  exploreCatalog: string;
  toolsAvailable: string;
  readoutLabel: string;
  journeyLabel: string;
}

export const STATISTICS_UI: Record<KnownLocale, StatisticsUi> = {
  es: { catalogLabel: "Elige cómo leer tus datos", allTools: "Todas", describeTools: "Describir", compareTools: "Comparar", estimateTools: "Estimar", modelTools: "Modelar", exploreCatalog: "Explorar instrumentos", toolsAvailable: "herramientas disponibles", readoutLabel: "Lectura del sistema", journeyLabel: "Un recorrido estadístico" },
  en: { catalogLabel: "Choose how to read your data", allTools: "All", describeTools: "Describe", compareTools: "Compare", estimateTools: "Estimate", modelTools: "Model", exploreCatalog: "Explore instruments", toolsAvailable: "tools available", readoutLabel: "System readout", journeyLabel: "A statistical route" },
  fr: { catalogLabel: "Choisissez comment lire vos données", allTools: "Toutes", describeTools: "Décrire", compareTools: "Comparer", estimateTools: "Estimer", modelTools: "Modéliser", exploreCatalog: "Explorer les instruments", toolsAvailable: "outils disponibles", readoutLabel: "Lecture du système", journeyLabel: "Un parcours statistique" },
  de: { catalogLabel: "Wähle, wie du deine Daten liest", allTools: "Alle", describeTools: "Beschreiben", compareTools: "Vergleichen", estimateTools: "Schätzen", modelTools: "Modellieren", exploreCatalog: "Instrumente erkunden", toolsAvailable: "verfügbare Werkzeuge", readoutLabel: "Systemanzeige", journeyLabel: "Eine statistische Route" },
  it: { catalogLabel: "Scegli come leggere i tuoi dati", allTools: "Tutti", describeTools: "Descrivere", compareTools: "Confrontare", estimateTools: "Stimare", modelTools: "Modellare", exploreCatalog: "Esplora gli strumenti", toolsAvailable: "strumenti disponibili", readoutLabel: "Lettura del sistema", journeyLabel: "Un percorso statistico" },
  pt: { catalogLabel: "Escolha como ler os seus dados", allTools: "Todas", describeTools: "Descrever", compareTools: "Comparar", estimateTools: "Estimar", modelTools: "Modelar", exploreCatalog: "Explorar instrumentos", toolsAvailable: "ferramentas disponíveis", readoutLabel: "Leitura do sistema", journeyLabel: "Um percurso estatístico" },
  nl: { catalogLabel: "Kies hoe je je gegevens leest", allTools: "Alle", describeTools: "Beschrijven", compareTools: "Vergelijken", estimateTools: "Schatten", modelTools: "Modelleren", exploreCatalog: "Instrumenten verkennen", toolsAvailable: "beschikbare tools", readoutLabel: "Systeemweergave", journeyLabel: "Een statistische route" },
  sv: { catalogLabel: "Välj hur du läser dina data", allTools: "Alla", describeTools: "Beskriv", compareTools: "Jämför", estimateTools: "Uppskatta", modelTools: "Modellera", exploreCatalog: "Utforska instrument", toolsAvailable: "tillgängliga verktyg", readoutLabel: "Systemavläsning", journeyLabel: "En statistisk rutt" },
  pl: { catalogLabel: "Wybierz sposób odczytu danych", allTools: "Wszystkie", describeTools: "Opisz", compareTools: "Porównaj", estimateTools: "Oszacuj", modelTools: "Modeluj", exploreCatalog: "Poznaj instrumenty", toolsAvailable: "dostępnych narzędzi", readoutLabel: "Odczyt systemu", journeyLabel: "Statystyczna trasa" },
  id: { catalogLabel: "Pilih cara membaca data Anda", allTools: "Semua", describeTools: "Deskripsikan", compareTools: "Bandingkan", estimateTools: "Perkirakan", modelTools: "Modelkan", exploreCatalog: "Jelajahi instrumen", toolsAvailable: "alat tersedia", readoutLabel: "Pembacaan sistem", journeyLabel: "Rute statistik" },
  tr: { catalogLabel: "Verilerinizi nasıl okuyacağınızı seçin", allTools: "Tümü", describeTools: "Tanımla", compareTools: "Karşılaştır", estimateTools: "Tahmin et", modelTools: "Modelle", exploreCatalog: "Araçları keşfet", toolsAvailable: "kullanılabilir araç", readoutLabel: "Sistem okuması", journeyLabel: "İstatistiksel rota" },
  ru: { catalogLabel: "Выберите способ чтения данных", allTools: "Все", describeTools: "Описать", compareTools: "Сравнить", estimateTools: "Оценить", modelTools: "Моделировать", exploreCatalog: "Изучить инструменты", toolsAvailable: "доступных инструментов", readoutLabel: "Показания системы", journeyLabel: "Статистический маршрут" },
  ja: { catalogLabel: "データの読み方を選ぶ", allTools: "すべて", describeTools: "記述", compareTools: "比較", estimateTools: "推定", modelTools: "モデル化", exploreCatalog: "ツールを探す", toolsAvailable: "利用可能なツール", readoutLabel: "システム表示", journeyLabel: "統計のルート" },
  ko: { catalogLabel: "데이터를 읽는 방법 선택", allTools: "전체", describeTools: "기술", compareTools: "비교", estimateTools: "추정", modelTools: "모델링", exploreCatalog: "도구 탐색", toolsAvailable: "사용 가능한 도구", readoutLabel: "시스템 판독", journeyLabel: "통계 경로" },
  zh: { catalogLabel: "选择读取数据的方式", allTools: "全部", describeTools: "描述", compareTools: "比较", estimateTools: "估计", modelTools: "建模", exploreCatalog: "探索工具", toolsAvailable: "个可用工具", readoutLabel: "系统读数", journeyLabel: "统计路线" },
};

export const getStatisticsUi = (locale: KnownLocale): StatisticsUi => STATISTICS_UI[locale];
