import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'ab-test-hipotez-testi-hesaplama';
const title = 'A/B Testi Hipotez Testi Hesaplama Aracı Online';
const description =
  'Dönüşümlerinde veya ortalamalarında istatistiksel olarak anlamlı bir fark olup olmadığını belirlemek için iki grubu (A ve B) karşılaştırın. P-Değerini anında hesaplayın.';

const faqData = [
  {
    question: 'P-Değeri ne anlama gelir?',
    answer:
      'P-Değeri, Grup A ve Grup B arasındaki performans farkının saf şans olma olasılığını size söyler. P-Değeri anlamlılık seviyesinin (genellikle 0,05) altındaysa, yapısal farkın gerçek olduğundan %95 emin olabileceğiniz anlamına gelir.',
  },
  {
    question: 'Anlamlılık Seviyesi (Alfa veya α) nedir?',
    answer:
      'Test için katılık seviyenizdir. 0,05\'lik bir Alfa, Grup B\'nin A\'dan farklı olduğundan emin olmak için %95 kesinlik gerektirir. 0,01\'lik bir Alfa çok daha fazla katılık gerektirir (%99). Akademik ve endüstriyel kural varsayılan olarak 0,05 kullanmaktır.',
  },
  {
    question: 'Oran testi ile ortalama testi arasındaki fark nedir?',
    answer:
      'Oran testi; tıklamalar, e-posta açılmaları, dönüşümler gibi ikili başarı veya başarısızlık değişkenlerini ölçer. Ortalama testi; ortalama sepet harcaması veya klinik iyileşme günleri gibi birikimli nicel davranışları karşılaştırır.',
  },
  {
    question: 'Örneklemim 30 kişiden küçükse ne olur?',
    answer:
      'Normal dağılım yaklaşımı bu kadar küçük örneklemlerde daha az kesin hale gelir (merkezi limit teoremi). Klinik kararlar için daha muhafazakar tam olasılık veya düzeltilmiş Student t-testi tekniklerini kullanmanızı öneririz.',
  },
];

const howToData = [
  {
    name: 'Sayısal Hedefi Seçin',
    text: 'Yapılandırma panelinde, Dönüşüm oranlarını mı (basit oranlar) yoksa tutarlar (Ortalamalar) gibi genel ortalamaları mı ölçmek istediğinizi tanımlayın.',
  },
  {
    name: 'Kontrol Verilerini Girin (Grup A)',
    text: 'Gönderilen/maruz kalan vaka sayısını ve kaç başarı elde ettiklerini (veya ortalamalarını) girin.',
  },
  {
    name: 'Deneysel Verileri Girin (Grup B)',
    text: 'Ölçtüğünüz yeni girişim veya varyant için sayıları girin.',
  },
  {
    name: 'İstatistiksel Kararı Kaydedin',
    text: 'Anlamlılık Yargıcına bakın ve gerçek iyileşmenin (Lift) rastgelelik varsayımını reddedip reddetmediğine dair oluşturulan gerekçeyi kopyalayın.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    { name: 'İstatistiksel hipotez testi - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Hipotez_testi' },
    { name: 'A/B Testi Hesaplayıcı - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'A/B Testi Hipotez Testi Hesaplama Aracı Online' },
    {
      type: 'paragraph',
      html: 'Sezgilere dayanarak karar vermek tehlikelidir; saf verilere dayanarak karar vermek başarıya giden yoldur. <strong>Hipotez Testi Hesaplayıcısı (A/B Testi)</strong>, iki grup arasındaki farkın istatistiksel olarak anlamlı mı yoksa sadece bir şans eseri mi olduğunu doğrulaması gereken analistler, pazarlamacılar ve araştırmacılar için kesin araçtır.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-Değeri', label: 'Nihai Yargıç', icon: 'mdi:scale-balance' },
        { value: 'Yerel', label: 'Veri Yükleme Yok', icon: 'mdi:shield-check' },
        { value: 'Anında', label: 'Yerel Grafikler', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Neden Testleri Dönüşümler ve Ortalamalar Olarak Ayırıyoruz?' },
    {
      type: 'paragraph',
      html: 'Çalışmanızın doğasına bağlı olarak başarı metriği değişecektir. Aracımız, endüstride en yaygın kullanılan iki istatistiksel test türünü yerel olarak destekler.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Oran Testi (Dönüşümler)',
          description: 'İki grup arasındaki yüzdeleri veya başarı oranlarını karşılaştırır.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Pazarlama için ideal (Tıklamalar, Satışlar, Abonelikler)',
            'Toplam Vakaları (n) ve Başarıları (x) kullanır',
            'İki oranlı Z-Testi uygular',
          ],
        },
        {
          title: 'Sürekli Ortalamalar Testi',
          description: 'İki grup arasındaki ortalama sayısal değerleri karşılaştırır.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ortalama Sepet Tutarı, Sitede Geçirilen Süre veya Klinik Deneyler için ideal',
            'Ortalama (μ) ve Standart Sapmayı (σ) kullanır',
            'Örneklemler için sağlam normal yaklaşım uygular (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Sonuçlar Nasıl Yorumlanır: P-Değeri Rehberinizdir' },
    {
      type: 'paragraph',
      html: 'Bu hesaplayıcının kalbi ünlü <strong>P-Değeridir</strong>. Bu sayı, Sıfır Hipotezi ("her iki grup da eşittir") doğru olsaydı, gözlemlenen bu farkları elde etme olasılığınızı size söyler.',
    },
    {
      type: 'table',
      headers: ['Gözlemlenen P-Değeri', 'Pratik Anlam', 'Standart Karar'],
      rows: [
        ['<strong>0,05\'ten büyük</strong>', 'Fark varyansa göre küçüktür. Şans bunu açıklayabilir.', 'Sıfır Hipotezini <strong>Reddetmeyin</strong>. Kanıtlanmış gerçek bir iyileşme yok.'],
        ['<strong>0,05\'ten küçük</strong>', 'Şansın böyle bir farka neden olması son derece olası değildir. Gerçek bir etkiden söz edilebilir.', 'Sıfır Hipotezini <strong>Reddedin</strong>. Varyant B daha iyi!'],
        ['<strong>0,01\'den küçük</strong>', 'Değişim lehine kanıtlar ezicidir (%99 güven).', '<strong>Kesinlikle Reddedin</strong>. Deneyin yankı uyandıran başarısı.'],
      ],
    },
    {
      type: 'tip',
      title: 'Küçük Örneklemler İçin Düzeltme',
      html: 'Gruplarınız 30 kişiden az vakayı işliyorsa, araç "Küçük Örneklem" uyarısı verir. Bu sınır senaryolarında, klasik normal yaklaşım kesinliğini kaybeder; tam Student t-testi veya Fisher araçlarını kullanmanızı öneririz.',
    },
    { type: 'title', level: 2, text: 'A/B Testi Terimler Sözlüğü' },
    {
      type: 'glossary',
      items: [
        { term: 'Kontrol Grubu (A)', definition: 'Deneyinizi biçeceğiniz orijinal sürüm veya temel seviye.' },
        { term: 'Varyant (B)', definition: 'Metrikleri iyileştirmesini beklediğiniz yeni değiştirilmiş sürüm.' },
        { term: 'Lift (Göreceli İyileşme)', definition: 'Grup B\'nin performansının Grup A\'nın temel seviyesine göre yüzde değişimi.' },
        { term: 'Anlamlılık Seviyesi (α)', definition: 'Kabul etmeye istekli olduğunuz hata eşiği (normalde %5 veya 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametreler',
    btnConversions: 'Dönüşümler',
    btnMeans: 'Ortalamalar',
    labelGroupA: 'Grup A (Kontrol)',
    labelGroupB: 'Grup B (Varyant)',
    labelTotalCases: 'Toplam Vakalar',
    labelSuccesses: 'Başarılar veya Dönüşümler',
    labelMean: 'Ortalama Değer',
    labelStdDev: 'Standart Sapma',
    labelAlpha: 'Anlamlılık Seviyesi',
    alpha90: '0,10 (%90)',
    alpha95: '0,05 (%95)',
    alpha99: '0,01 (%99)',
    labelDirection: 'Test Yönü',
    btn2Tails: '2 Kuyruklu (Fark)',
    btn1Tail: '1 Kuyruklu (B > A)',
    alertTitle: 'İstatistiksel Güvenilirlik Uyarısı',
    alertBody: 'Çok küçük bir örneklem boyutu veya uç değerler (0 başarı) kullanıyorsunuz. Tahmin gerçek dünyayı temsil etmeyebilir.',
    alertLinkText: 'İdeal örneklem boyutunuzu buradan hesaplayın',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-Değeri',
    sigDescInitial: 'Sıfır hipotezini reddetmek için yeterli kanıt var',
    labelLift: 'İyileşme Analizi (Lift)',
    labelLiftText: 'Grup A\'ya göre iyileşme',
    labelConfidencePrefix: 'İstatistiksel güven:',
    labelDistributions: 'Olasılık Dağılımları',
    chartDesc: 'Örtüşmeyi gözlemleyin: daha az örtüşme, farkların gerçek olduğu ve şans eseri olmadığı konusunda daha fazla kesinlik anlamına gelir.',
    labelReport: 'Raporunuz için metin',
    defaultJustification: 'X deneği analiz ettikten sonra, Grup B %Z istatistiksel güvenle (p=0,00) %Y iyileşme gösteriyor.',
    btnCopy: 'Metni Kopyala',
    btnCopied: 'Kopyalandı!',
    sigText: 'Sıfır hipotezini reddetmek için yeterli kanıt var.',
    noSigText: 'Fark istatistiksel olarak anlamlı değildir.',
    justIntro: 'Toplam',
    justSamples: ' örnek analiz edildikten sonra, Grup B ',
    justRespectTo: ' oranında Grup A\'ya göre değişim gösteriyor.',
    justWithConfidence: ' % istatistiksel güven ile ',
    justDiff: ', deneysel fark ',
    justSig: 'istatistiksel olarak anlamlıdır',
    justNoSig: 'istatistiksel olarak anlamlı DEĞİLDİR',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
  },
};
