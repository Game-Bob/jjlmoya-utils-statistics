import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'pearson-korelasyon-hesaplama';
const title = 'Online Pearson Korelasyon Hesaplayıcı';
const description =
  'Veri çiftlerinden Pearson r katsayısını, r² belirleme katsayısını ve doğrusal regresyon çizgisini hesaplayın. %100 özel ve yerel araç.';

const faqData = [
  {
    question: 'Pearson korelasyon katsayısı nedir?',
    answer:
      'İki nicel değişken arasındaki doğrusal ilişkinin gücünü ve yönünü nicelleştiren istatistiksel bir ölçüdür. Değeri -1 (mükemmel negatif korelasyon) ile 1 (mükemmel pozitif korelasyon) arasında değişir ve 0 doğrusal bir ilişki olmadığını gösterir.',
  },
  {
    question: 'Verileri doğrudan Excel\'den yapıştırabilir miyim?',
    answer:
      'Evet, hesaplayıcımız Excel, Google Sheets veya CSV dosyalarından kopyalanıp yapıştırılan verileri yorumlamak üzere optimize edilmiştir. Sütunları otomatik olarak algılar ve para birimi sembolleri veya yüzdeler gibi sayısal olmayan karakterleri temizler.',
  },
  {
    question: 'Verilerim ilişkili görünüyor ancak r değeri neden düşük?',
    answer:
      'Pearson katsayısı yalnızca doğrusal ilişkileri algılar. Verileriniz kavisli bir ilişkiye sahipse (parabol veya logaritmik gibi), değişkenler arasında net bir bağlantı olsa bile Pearson katsayısı çok düşük olabilir.',
  },
  {
    question: 'Bu hesaplayıcıdaki r² ne anlama geliyor?',
    answer:
      'Belirleme katsayısıdır. Bağımlı değişkendeki varyansın bağımsız değişkenden tahmin edilebilir oranını temsil eder. Örneğin, 0,85\'lik bir r², değişkenliğin %85\'inin doğrusal modelle açıklandığını gösterir.',
  },
];

const howToData = [
  {
    name: 'Veri Hazırlama',
    text: 'Değer çiftlerinizi (X ve Y) hazırlayın. Bunlar bir Excel dosyasında veya sadece bir metin listesinde olabilir.',
  },
  {
    name: 'Veri Girişi',
    text: 'Verilerinizi hesaplayıcının metin alanına yapıştırın. Her bir değer çiftinin yeni bir satırda olduğundan emin olun.',
  },
  {
    name: 'Yapılandırma',
    text: 'Hesaplama hatalarını önlemek için verilerinizde kullanılan ondalık ayırıcıyı (nokta veya virgül) seçin.',
  },
  {
    name: 'Sonuç Analizi',
    text: 'Anında r değerini ve yorumunu inceleyin ve eğilimi doğrulamak için dağılım grafiğini gözlemleyin.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    { name: 'Pearson korelasyon katsayısı - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Pearson_korelasyon_katsay%C4%B1s%C4%B1' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Online Pearson Korelasyon Hesaplayıcı: Tam Kılavuz' },
    {
      type: 'paragraph',
      html: '<strong>Pearson korelasyon katsayısı</strong> (r), iki sayısal değişkenin birbirleriyle doğrusal olarak nasıl ilişkili olduğunu ölçmek için kullanılan standart istatistiksel araçtır. Akademik çalışmalar, pazar analizi veya bilimsel araştırmalar için olsun; verilerinizin gücünü anlamak çok önemlidir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Tam İlişki', icon: 'mdi:trending-up' },
        { value: '0', label: 'Bağımsızlık', icon: 'mdi:graph-outline' },
        { value: 'Yerel', label: '%100 Gizlilik', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Pearson r katsayısı ne için kullanılır?' },
    {
      type: 'paragraph',
      html: 'Pearson indeksi bir eğilimin olup olmadığını ortaya çıkarır: Bir değişken arttığında diğeri de artıyor mu (<strong>pozitif korelasyon</strong>) yoksa azalıyor mu (<strong>negatif korelasyon</strong>)? Bu araç Excel, SPSS veya Python\'da veri analizi için temel bir gerekliliktir.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pearson Korelasyonu',
          description: 'Net bir doğrusal ilişkiye sahip nicel değişkenler için idealdir.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Sayısal Veri', 'Doğrusal İlişki', 'Normallik Gerektirir'],
        },
        {
          title: 'Spearman Korelasyonu',
          description: 'Sıralı veriler veya monoton doğrusal olmayan ilişkiler için daha iyidir.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Sıralı Veri (Sıralamalar)', 'Monoton İlişki', 'Aykırı Değerlere Dirençli'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Sonuçları Yorumlama: Değer Tablosu' },
    {
      type: 'table',
      headers: ['Değer Aralığı (r)', 'İlişki Gücü', 'Pratik Anlamı'],
      rows: [
        ['<strong>0,90 - 1,00</strong>', 'Çok Güçlü', 'Neredeyse mükemmel ilişki. Tahminler için ideal.'],
        ['<strong>0,70 - 0,89</strong>', 'Güçlü', 'Değişkenler arasında net bir doğrusal bağımlılık vardır.'],
        ['<strong>0,40 - 0,69</strong>', 'Orta', 'Görünür bir eğilim ancak belirgin bir dağılma var.'],
        ['<strong>0,20 - 0,39</strong>', 'Zayıf', 'Yetersiz ilişki; diğer faktörler daha fazla etkiye sahiptir.'],
        ['<strong>0,00 - 0,19</strong>', 'Yok/İhmal Edilebilir', 'Anlamlı bir doğrusal ilişki yoktur.'],
      ],
    },
    { type: 'title', level: 2, text: 'Bu hesaplayıcının avantajları ve sınırlamaları' },
    {
      type: 'list',
      items: [
        '<strong>Excel/CSV\'den Yapıştır:</strong> Verileri tek tek girmeye gerek yok.',
        '<strong>Anında Dağılım Grafiği</strong> ve regresyon çizgisi.',
        '<strong>%100 Gizlilik:</strong> Verileriniz asla bilgisayarınızdan çıkmaz.',
      ],
    },
    {
      type: 'list',
      items: [
        'Yalnızca doğrusal ilişkileri algılar (eğrisel olanları değil).',
        'Uç değerlere (aykırı değerlere) karşı yüksek hassasiyet.',
        'En az 2 geçerli veri çifti gerektirir.',
      ],
    },
    {
      type: 'tip',
      title: 'Uzman İpucu',
      html: 'r değerine körü körüne güvenmeden önce her zaman <strong>Dağılım Grafiğine</strong> bakın. Bazen yüksek bir katsayı tek bir aykırı değerden kaynaklanabilir veya düşük bir katsayı Pearson\'ın algılayamadığı çok güçlü bir eğrisel ilişkiyi gizleyebilir.',
    },
    { type: 'title', level: 2, text: 'İstatistik Sözlüğü' },
    {
      type: 'glossary',
      items: [
        { term: 'Kovaryans', definition: 'İki rastgele değişkenin birlikte ne kadar değiştiğinin ölçüsü.' },
        { term: 'Doğrusal Regresyon', definition: 'Değişkenler arasındaki bağımlılık ilişkisine yaklaşmak için kullanılan matematiksel model.' },
        { term: 'r² Katsayısı', definition: 'Bağımsız değişkenden tahmin edilebilen varyans oranı.' },
        { term: 'Dağılım Grafiği', definition: 'Bir düzlemdeki veri çiftlerinin dağılımını gösteren nokta grafiği.' },
      ],
    },
  ],
  ui: {
    headingData: 'CSV Verisi',
    btnLoadExample: 'Örneği yükle',
    btnClear: 'Verileri temizle',
    placeholder: 'Verilerinizi yapıştırın (X, Y) veya bir CSV sürükleyin...',
    labelDecimalSep: 'Ondalık Ayr.',
    optPoint: 'Nokta (.)',
    optComma: 'Virgül (,)',
    privacyBadge: 'Özel yerel yürütme',
    labelR: 'Pearson Katsayısı (r)',
    labelR2: 'Belirleme (r²)',
    labelN: 'Çift (n)',
    labelSlope: 'Eğim (m)',
    labelMeanXY: 'Ortalama X | Y',
    labelWaiting: 'Veri bekleniyor...',
    interpPerfectPos: 'Mükemmel pozitif korelasyon',
    interpPerfectNeg: 'Mükemmel negatif korelasyon',
    interpStrong: 'Güçlü korelasyon',
    interpModerate: 'Orta korelasyon',
    interpWeak: 'Zayıf/yok korelasyon',
    errorMsg: 'Grafik için en az 2 veri çifti girin',
    btnCopyTitle: 'Sonuçları kopyala',
    btnDownloadTitle: 'Grafiği indir',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
  },
};
