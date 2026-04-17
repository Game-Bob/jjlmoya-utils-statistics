import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'ki-kare-bagimsizlik-testi-hesaplama';
const title = 'Online Ki Kare Bağımsızlık Testi Hesaplama Aracı';
const description =
  'İki kategorik değişken arasında istatistiksel bir ilişki olup olmadığını belirleyin. Gözlemlenen frekans matrisini doldurun ve P-Değerini anında hesaplayın.';

const faqData = [
  {
    question: 'Ki-Kare bağımsızlık testi nedir?',
    answer:
      'İki kategorik veya nominal değişken arasında gözlemlenen bir ilişkinin şans eseri olma olasılığını değerlendirmek için kullanılan istatistiksel bir testtir. Örneğin: Bir kişinin en sevdiği tatlının yaşadığı bölgeyle ilgili olup olmadığı.',
  },
  {
    question: "Cramér'ın V katsayısı ne için kullanılır?",
    answer:
      "Ki-kare size 'herhangi bir' ilişki olup olmadığını söylerken, Cramér'ın V'si ilişkinin 'ne kadar' olduğunu söyler. 0 (tam bağımsızlık) ile 1 (mutlak matematiksel bağımlılık) arasında değişir. 0,5'in üzerindeki değerler sosyolojik olarak çok güçlü kabul edilir.",
  },
  {
    question: 'Beklenen Frekanslarım çok düşükse ne olur?',
    answer:
      "Hücrelerin %20'den fazlasında beklenen frekanslar 5'ten küçükse, matematiksel Ki-Kare yaklaşımı güvenilirliğini kaybeder. Bir risk olduğunda aracımız sizi görsel olarak uyaracaktır. Bu durumda, şüpheli kategorilerin birleştirilmesi önerilir.",
  },
  {
    question: 'Bunu nitel araştırmalar için kullanabilir miyim?',
    answer:
      'Kesinlikle evet. Genellikle ondalık sayılarla değil, birbirini dışlayan kategorilerle (Bekar/Evli, Evet/Hayır, Kuzey/Güney) ilgilendiğiniz sosyoloji ve pazar araştırmaları için temel araçtır.',
  },
];

const howToData = [
  {
    name: 'Matrisi Tanımlayın',
    text: 'İlk olarak, Değişken A (satırlar) ve Değişken B (sütunlar) için kaç seçeneğiniz olduğuna bağlı olarak Kontenjans Tablonuzun boyutunu seçin.',
  },
  {
    name: 'Gözlemlenen Verileri Girin',
    text: 'İlk tabloyu gerçek verilerinizin tam sayısıyla doldurarak temel sayıları değiştirin.',
  },
  {
    name: 'Artıkları İnceleyin',
    text: 'Tablomuzdaki hangi hücrelerin yandığını (parlak yeşil veya kırmızı) gözlemleyin. Değişkenlerin bağımsız olmamasına neden olan anomaliler burada yatmaktadır.',
  },
  {
    name: 'Sonucu Kopyalayın',
    text: 'P-değerinin matematiksel desteğiyle otomatik olarak oluşturulan metni tezinize veya proje raporunuza yapıştırın.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    {
      name: 'Ki-kare testi - Vikipedi',
      url: 'https://tr.wikipedia.org/wiki/Ki-kare_testi',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Ki-Kare Bağımsızlık Testi Hesaplama Aracı',
    },
    {
      type: 'paragraph',
      html: 'A/B Testi veya Tanımlayıcı İstatistikler gibi klasik araçlar sürekli sayılarla (ortalamalar, kazançlar, ağırlıklar) mükemmel çalışırken, gerçek dünya kategorik verilerle (renkler, markalar, memnuniyet seviyeleri) doludur. <strong>Ki-Kare Bağımsızlık Hesaplayıcısı</strong>, iki nitel değişkenin istatistiksel olarak bağlantılı olup olmadığını veya birbirlerinden tamamen bağımsız olarak değişip değişmediklerini analitik olarak belirlemek için kullanılan "Kral" testtir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tablo', label: '3×3\'e kadar dinamik', icon: 'mdi:table' },
        { value: "Cramér'ın V'si", label: 'İlişki Şiddeti', icon: 'mdi:link' },
        { value: 'Isı Haritası', label: 'Artıklar & Sapma', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Ki-Kare İstatistiği (χ²) tam olarak ne için kullanılır?',
    },
    {
      type: 'paragraph',
      html: 'Ki-Kare Bağımsızlık Testi, <em>Gözlemlenen Frekansları</em> (ölçtüğünüz ve topladığınız gerçek sayılar) <em>Beklenen Frekanslarla</em> (değişkenler arasında hiçbir etkileşim olmasaydı her hücrede bekleyeceğimiz sayılar) karşılaştırır.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Bağımlı Değişkenler (İlişki Mevcut)',
          description: 'Bir kategorinin oranları diğerine bağlı olarak büyük ölçüde değişir.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Örnek: Mobil ziyaretçiler Tasarım A\'yı tercih ederken, PC kullanıcıları Tasarım B\'yi tercih ediyor.',
            'Ki-Kare (χ²) yükselir ve P-Değeri düşer.',
            "Cramér'ın V'si şiddeti gösterir (örneğin Güçlü > 0,5).",
          ],
        },
        {
          title: 'Bağımsız Değişkenler (Şans)',
          description: 'Oranlar tüm seviyelerde kaya gibi sabit kalır.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Örnek: Bir müşterinin göz rengi, hangi araba markasını satın aldığını etkilemez.',
            'Ki-Kare çok küçüktür ve P-Değeri 0,05\'ten büyüktür.',
            'Sıfır Hipotezi reddedilemez.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: "Cramér'ın V'si: Bağlantının Şiddetini Anlamak",
    },
    {
      type: 'paragraph',
      html: "Çok düşük bir P-Değeri elde etmek, değişkenlerin 'yoğun' bir şekilde bağlantılı olduğu anlamına gelmez; sadece şansın sorumlu olamayacağını gösterir (belki de on binlerce gerçek vakanız olduğu için). 'Etki büyüklüğünü' ölçmek için <strong>Cramér'ın V Katsayısını</strong> otomatik olarak dahil ediyoruz.",
    },
    {
      type: 'table',
      headers: ['Hesaplayıcı (V Değeri)', 'Analitik Derecelendirme', 'Çeviri'],
      rows: [
        [
          '<strong>0,00 - 0,10</strong>',
          'Yok / Önemsiz İlişki',
          'Teorik olarak bağımlı, ancak ticari amaçlar için fark edilemez ve kullanışsız.',
        ],
        [
          '<strong>0,11 - 0,30</strong>',
          'Zayıf İlişki',
          'Hafif bir bağlantı var, ancak diğer birçok dış faktör daha fazla ağırlık taşıyor.',
        ],
        [
          '<strong>0,31 - 0,50</strong>',
          'Orta İlişki',
          'Her iki özellik de birbirini önemli ölçüde etkiler.',
        ],
        [
          '<strong>0,50 Üzeri</strong>',
          'Güçlü İlişki',
          'Çok net bağlantı. Değişken A\'yı bilmek, değişken B\'yi olağanüstü iyi tahmin eder.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Matematiksel Fizibilite Koşulları',
      html: "Boş hücrelere dikkat edin! Pearson'ın ki-kare yaklaşımının çan eğrisi altında sağlam kalması için yöntemsel olarak, <em>Beklenen Frekansların</em> (gözlemlenenlerin değil) en az %80'inin 5'ten büyük olması ve hiçbir hücrenin 1'in altında olmaması gerekir. Bu koşul karşılanmazsa, uyarı göstergemiz tetiklenerek kategorileri birleştirmenizi önerecektir.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Dahili Artık Isı Haritası',
    },
    {
      type: 'paragraph',
      html: 'Kullanıcı deneyimini geliştirmek ve rapor sonuçlarını kolaylaştırmak için matrisimiz, hücrelerin arka planını standartlaştırılmış artıklarına (sapma) göre otomatik olarak renklendirecektir:<br/><br/><strong>Yeşil tonlar:</strong> Hücre, saf matematiksel olarak beklenenden <em>çok daha fazla başarıya</em> sahiptir.<br/><strong>Kırmızı tonlar:</strong> Hücre, beklenen norma göre tehlikeli bir şekilde "boş"tur.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Ki-Kare Sözlüğü',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Gözlemlenen Frekans',
          definition: 'Laboratuvarda veya anketlerde fiziksel olarak saydığınız tam sayı.',
        },
        {
          term: 'Beklenen Frekans',
          definition: 'Satırın marjinal oranının sütununkiyle çarpılmasıyla elde edilen teorik hesaplama.',
        },
        {
          term: 'Serbestlik Derecesi (df)',
          definition: 'Serbest verilerin geometrik miktarı. Satır ve sütun sayısından 1 çıkarıp bunları çarparak bulunur.',
        },
        {
          term: 'Standartlaştırılmış Artık',
          definition: 'Gözlemlenen ile beklenen arasındaki normalize edilmiş fark. Hangi hücrenin keşfi en çok "ittiğini" ölçer.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Ayarlar',
    labelTableSize: 'Tablo Boyutu (Satır × Sütun)',
    labelAlpha: 'Anlamlılık Seviyesi (α)',
    alpha90: '0,10 (%90)',
    alpha95: '0,05 (%95)',
    alpha99: '0,01 (%99)',
    infoText:
      "Tamamen yerel çıkarım kullanarak teorik frekansı, χ² değerini ve ilişki şiddeti Cramér'ın V katsayısını otomatik olarak hesaplar.",
    labelObserved: 'Gözlemlenen Frekanslar (Giriş)',
    btnShowExpected: 'Beklenen Frekansları Göster (H₀)',
    expectedDesc:
      'Bunlar, iki değişken arasında hiçbir ilişki olmasaydı (rastgele dağılım) her hücrede bulunacak değerlerdir.',
    alertTitle: 'İstatistiksel Uyarı (Hücreler < 5)',
    alertBody:
      'Çok düşük beklenen frekanslar var. χ² yaklaşımı güvenilir olmayabilir. Kategorilerin birleştirilmesi veya Fisher\'ın kesinlik testinin kullanılması önerilir.',
    labelPValue: 'P-Değeri (p)',
    sigDescInitial: 'Anlamlı ilişki mevcut',
    labelGlobalStats: 'Genel İstatistikler',
    labelChiSquareStat: 'Ki-Kare (χ²)',
    labelDegrees: 'Dereceler (df)',
    labelCramer: "İlişki Şiddeti (Cramér'ın V'si)",
    labelVisualization: 'Artık Görselleştirme (Gözlemlenen vs Beklenen)',
    heatmapInfo: 'Tablo giriş hücreleri artık varyasyona göre renklendirilir.',
    labelReport: 'Raporunuz için metin',
    defaultJustification:
      'Toplam N gözlemi analiz ettikten sonra χ²(df) = X değeri bulduk. P p-değeri ile anlamlı bağımlılığın mevcut olduğu sonucuna varıldı.',
    btnCopy: 'Metni Kopyala',
    rowLabel: 'Satır',
    colLabel: 'Sütun',
    totalLabel: 'TOPLAM',
    cramerNull: 'Yok',
    cramerWeak: 'Zayıf',
    cramerModerate: 'Orta',
    cramerStrong: 'Güçlü',
    sigText: 'Anlamlı ilişki mevcut (bağımlılık).',
    noSigText: 'İlişki kanıtı yok (bağımsızlık).',
    chartLegendObs: 'Gözlemlenen Satır',
    chartLegendExp: 'Beklenen',
    btnCopied: 'Kopyalandı!',
    justificationIntro: 'Analiz ettikten sonra',
    justificationTableOf: 'vakayı bir',
    justificationObtained: ' tablosunda inceledik ve elde ettik',
    justificationPAt: '. α= seviyesinde değerlendirildiğinde',
    justificationConcluded: ', deneysel olarak şu sonuca varılmıştır:',
    justificationSig: "Değişkenler arasında GÜÇLÜ BİR İLİŞKİ MEVCUTTUR (Cramér'ın V'si:",
    justificationNoSig: 'İstatistiksel olarak anlamlı bir ilişki MEVCUT DEĞİLDİR',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
  },
};
