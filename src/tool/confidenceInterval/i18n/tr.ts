import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'guven-araligi-hesaplama';
const title = 'Online Güven Aralığı Hesaplayıcı';
const description =
  'Z veya Student t dağılımlarını kullanarak popülasyon ortalaması için güven aralıklarını hesaplayın. Aralığı, hata payını ve kritik değeri anında almak için örneklem ortalamasını, standart sapmayı, örneklem büyüklüğünü ve güven düzeyini girin.';

const faqData = [
  {
    question: 'Güven aralığı nedir?',
    answer:
      'Güven aralığı (GA), örneklem verilerinden hesaplanan ve belirli bir olasılıkla (güven düzeyi) gerçek popülasyon parametresini içeren bir değerler aralığıdır. Örneğin, ortalama için %95\'lik bir GA, örneklemeyi birçok kez tekrarlarsanız, hesaplanan aralıkların %95\'inin gerçek popülasyon ortalamasını içereceği anlamına gelir.',
  },
  {
    question: 'Z dağılımını t yerine ne zaman kullanmalıyım?',
    answer:
      'Popülasyon standart sapması (σ) bilindiğinde veya n büyük olduğunda (>30) Z kullanın. Yalnızca örneklem standart sapması (s) mevcut olduğunda ve n küçük olduğunda Student t kullanın. n > 30 için her iki dağılım da pratikte eşdeğerdir, ancak σ bilinmediğinde t daha muhafazakar ve teknik olarak doğru olmaya devam eder.',
  },
  {
    question: 'Örneklem büyüklüğü aralığın genişliğini nasıl etkiler?',
    answer:
      'GA\'nın genişliği 1/√n ile orantılıdır: örneklem büyüklüğünü dört katına çıkarmak hata payını yarıya indirir. Bu, büyük örneklemlerin neden daha kesin tahminler sağladığını ve örneklem büyüklüğü planlamasının istatistiksel çalışma tasarımında neden kritik olduğunu açıklar.',
  },
  {
    question: 'Hata payı nedir?',
    answer:
      'Hata payı (ME), GA genişliğinin yarısıdır: ME = kritik_değer × SE, burada SE = σ/√n standart hatadır. Belirtilen güven düzeyinde örneklem tahmini ile gerçek popülasyon değeri arasındaki beklenen maksimum farkı gösterir.',
  },
];

const howToData = [
  {
    name: 'Örneklem parametrelerini girin',
    text: 'Örneklem ortalamasını (x̄), standart sapmayı (σ veya s > 0) ve örneklem büyüklüğünü (n ≥ 2) yazın.',
  },
  {
    name: 'Güven düzeyini seçin',
    text: 'Hızlı erişim düğmelerini kullanarak %90, %95 veya %99\'u seçin veya 0 ile 100 arasında herhangi bir değer yazın.',
  },
  {
    name: 'Dağılımı seçin ve sonucu okuyun',
    text: 'Popülasyon standart sapması biliniyorsa Z\'yi, bir örneklem için t\'yi seçin. Aralık, hata payı ve kritik değer anında hesaplanır.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    { name: 'Güven aralığı Vikipedi', url: 'https://tr.wikipedia.org/wiki/G%C3%BCven_aral%C4%B1%C4%9F%C4%B1' },
    { name: 'Student t dağılımı Vikipedi', url: 'https://tr.wikipedia.org/wiki/Student_t_da%C4%9F%C4%B1l%C4%B1m%C4%B1' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Standart hata Vikipedi', url: 'https://tr.wikipedia.org/wiki/Standart_hata' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Güven Aralığı Hesaplayıcı: Gerçek Zamanlı Sonuçlar' },
    {
      type: 'paragraph',
      html: '<strong>Güven Aralığı Hesaplayıcı</strong>; aralığı, hata payını, kritik değeri ve standart hatayı anında hesaplar. 0 ile 100 arasındaki herhangi bir güven düzeyiyle Z dağılımını (bilinen popülasyon sigması) ve Student t\'yi (örneklem sigması) destekler.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Z ve t Dağılımları', icon: 'mdi:sigma' },
        { value: 'Canlı', label: 'Gerçek Zamanlı Sonuçlar', icon: 'mdi:lightning-bolt' },
        { value: 'Ücretsiz', label: 'Kayıt Gerekmez', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Z Dağılımı vs Student t' },
    {
      type: 'table',
      headers: ['Kriter', 'Z Dağılımı', 'Student t'],
      rows: [
        ['Ne zaman kullanılır', 'Bilinen σ veya n > 30', 'Örneklem s, herhangi bir n'],
        ['Kritik değer (%95)', 'z* = 1,960', 't*, df = n−1\'e bağlıdır'],
        ['Serbestlik derecesi', 'Uygulanamaz', 'df = n − 1'],
        ['Büyük n için', 'Daha dar GA', 'Z\'ye yakınsar'],
      ],
    },
    {
      type: 'tip',
      title: 'Güven Aralığı Doğru Şekilde Nasıl Yorumlanır?',
      html: '<strong>%95\'lik bir güven aralığı</strong>, gerçek ortalamanın bu spesifik aralıkta olma olasılığının %95 olduğu anlamına gelmez. Bu, <strong>prosedürün</strong> birçok örneklemle tekrarlanması durumunda, üretilen aralıkların %95\'inin gerçek ortalamayı içereceği anlamına gelir. Hesaplandıktan sonra aralık ya gerçek değeri içerir ya da içermez.',
    },
    { type: 'title', level: 2, text: 'Hızlı Başvuru Sözlüğü' },
    {
      type: 'glossary',
      items: [
        { term: 'Güven Aralığı (GA)', definition: 'Seçilen güven düzeyinde popülasyon parametresini tahmin eden [x̄ − ME, x̄ + ME] aralığı.' },
        { term: 'Güven Düzeyi', definition: 'Deney birçok kez tekrarlansaydı, gerçek parametreyi içerecek aralıkların oranı. Tipik değerler: %90, %95, %99.' },
        { term: 'Standart Hata (SE)', definition: 'SE = σ/√n. Örneklem ortalamasının popülasyon ortalaması etrafındaki değişkenliğini ölçer.' },
        { term: 'Hata Payı (ME)', definition: 'ME = z* × SE (veya t* × SE). Güven aralığının yarı genişliğidir.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Güven Aralığı',
    labelMean: 'Örneklem Ortalaması (x̄)',
    labelStdDev: 'Standart Sapma',
    labelN: 'Örneklem Büyüklüğü (n)',
    labelConf: 'Güven Düzeyi (%)',
    btnZ: 'Z (σ biliniyor)',
    btnT: 'Student t',
    labelCI: 'Güven Aralığı',
    labelME: 'Hata Payı',
    labelCritical: 'Kritik Değer',
    labelSE: 'Standart Hata',
    labelDF: 'Serbestlik Derecesi',
    hintN: 'n, 2\'ye eşit veya 2\'den büyük bir tam sayı olmalıdır.',
    hintStdDev: 'Standart sapma 0\'dan büyük olmalıdır.',
    hintConf: 'Güven düzeyi 0 ile 100 arasında olmalıdır.',
    labelChart: 'Aralık Görselleştirme',
    chartDesc: 'Gölgeli GA ve hata payını içeren sayı doğrusu.',
    labelReport: 'Raporunuz için özet',
    btnCopy: 'Özeti Kopyala',
    btnCopied: 'Kopyalandı!',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
    tabStats: 'Özet İstatistikler',
    tabRaw: 'Ham Veri',
    labelRaw: 'Veriyi yapıştırın',
    rawPlaceholder: 'Değerleri virgül, boşluk veya yeni satırla ayırarak yazın veya yapıştırın. Örn: 12.3, 15.1, 11.8',
    hintRaw: 'En az 2 geçerli sayısal değer girin.',
    labelDist: 'Dağılım',
    distAuto: 'Otomatik',
    noticeAutoRaw: 'Örneklem verisi: Student t uygulandı',
    noticeAutoLowN: 'n < 30: Student t önerilir',
    noticeAutoHighN: 'n ≥ 30: Z dağılımı önerilir',
    calcCI: 'GA Aralığı',
    calcInverse: 'Min n',
    labelTargetME: 'Hedef hata payı (E)',
    hintTargetME: 'E, 0\'dan büyük bir sayı olmalıdır.',
    labelReqN: 'Minimum örneklem büyüklüğü',
  },
};
