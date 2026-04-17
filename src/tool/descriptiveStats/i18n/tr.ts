import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'betimsel-istatistik-hesaplama';
const title = 'Online Betimsel İstatistik Hesaplayıcı';
const description =
  'Tüm temel betimsel istatistikleri anında hesaplayın: ortalama, medyan, mod, standart sapma, varyans, çeyreklikler, çarpıklık, basıklık ve daha fazlası. Verilerinizi yapıştırın ve sonuçları gerçek zamanlı olarak alın.';

const faqData = [
  {
    question: 'Popülasyon ve örneklem standart sapması arasındaki fark nedir?',
    answer:
      'Popülasyon standart sapması N\'ye böler (tüm elemanlar bilinmektedir). Örneklem standart sapması, bir alt kümeden tahmin yaparken yanlılığı düzeltmek için N-1\'e (Bessel düzeltmesi) böler. Bu hesaplayıcı, araştırma ve veri analizinde en yaygın seçenek olan örneklem standart sapmasını (N-1) kullanır.',
  },
  {
    question: 'Pozitif veya negatif çarpıklık ne anlama gelir?',
    answer:
      'Çarpıklık (skewness), veri dağılımınızın asimetrisini ölçer. Pozitif çarpıklık (sağa çarpıklık), kuyruğun sağa uzandığı ve çoğu değerin solda kümelendiği anlamına gelir. Negatif çarpıklık (sola çarpıklık) bunun tam tersidir. 0\'a yakın bir değer, yaklaşık olarak simetrik bir dağılımı gösterir.',
  },
  {
    question: 'Basıklık nedir ve neyi gösterir?',
    answer:
      'Basıklık (kurtosis), kuyrukların normal bir dağılıma göre "ağırlığını" ölçer. Bu hesaplayıcı, 0\'ın temel hat (normal dağılım) olduğu basıklık fazlalığını (excess kurtosis) döndürür. Pozitif değerler (leptokurtik), daha ağır kuyrukları ve daha keskin tepeleri gösterir. Negatif değerler (platykurtik), daha hafif kuyrukları ve daha düz tepeleri gösterir.',
  },
  {
    question: 'Verilerim hangi formatta olmalı?',
    answer:
      'Sayılarınızı virgül, boşluk, noktalı virgül veya satır sonu ile ayrılmış olarak yapıştırın. Örnekler: "1, 2, 3, 4" veya "1 2 3 4" veya her satıra bir değer. Hesaplayıcı sayısal olmayan karakterleri otomatik olarak yoksayar.',
  },
];

const howToData = [
  {
    name: 'Verilerinizi Yapıştırın veya Yazın',
    text: 'Sayısal değerlerinizi metin alanına virgül, boşluk veya satır sonu ile ayrılmış olarak girin. En az 2 değere ihtiyacınız vardır.',
  },
  {
    name: 'Sonuçları Okuyun',
    text: 'Siz yazarken 15 istatistik anında güncellenir. Histogram, verilerinizin dağılım şeklini gösterir.',
  },
  {
    name: 'Özeti Kopyalayın',
    text: 'Raporunuzda veya analizinizde kullanmak üzere temel istatistiklerin kompakt bir özetini kopyalamak için Metni Kopyala düğmesini kullanın.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    { name: 'Betimsel istatistik - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Betimsel_istatistik' },
    { name: 'Standart sapma - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Standart_sapma' },
    { name: 'Çarpıklık - Vikipedi', url: 'https://tr.wikipedia.org/wiki/%C3%87arp%C4%B1kl%C4%B1k' },
    { name: 'Basıklık - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Bas%C4%B1kl%C4%B1k' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Betimsel İstatistik Hesaplayıcı: Tüm Temel Metrikler Tek Bir Yerde' },
    {
      type: 'paragraph',
      html: 'İster öğrenci, ister araştırmacı veya veri analisti olun, <strong>Betimsel İstatistik Hesaplayıcı</strong> size herhangi bir sayısal veri kümesinin anında ve eksiksiz bir istatistiksel özetini sunar. Verilerinizi yapıştırın ve e-tablo yazılımına ihtiyaç duymadan aynı anda hesaplanan 15 istatistiği alın.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Hesaplanan İstatistik', icon: 'mdi:sigma' },
        { value: 'Canlı', label: 'Gerçek Zamanlı Sonuçlar', icon: 'mdi:lightning-bolt' },
        { value: 'Ücretsiz', label: 'Kayıt Gerekmez', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Hesaplanan İstatistikler' },
    {
      type: 'table',
      headers: ['İstatistik', 'Açıklama'],
      rows: [
        ['<strong>Sayım (N)</strong>', 'Veri kümesindeki toplam değer sayısı.'],
        ['<strong>Ortalama</strong>', 'Tüm değerlerin aritmetik ortalaması.'],
        ['<strong>Medyan</strong>', 'Veriler sıralandığında ortadaki değer. Aykırı değerlere karşı dayanıklıdır.'],
        ['<strong>Mod</strong>', 'En sık tekrarlanan değer(ler).'],
        ['<strong>Std Sapma</strong>', 'Örneklem standart sapması (N-1\'e böler).'],
        ['<strong>Varyans</strong>', 'Örneklem standart sapmasının karesi.'],
        ['<strong>Min / Maks</strong>', 'Veri kümesindeki en küçük ve en büyük değerler.'],
        ['<strong>Aralık (Range)</strong>', 'Maksimum ve minimum değerler arasındaki fark.'],
        ['<strong>Q1 / Q3</strong>', 'Birinci ve üçüncü çeyreklikler (%25 ve %75 yüzdelikler).'],
        ['<strong>IQR</strong>', 'Çeyreklikler arası aralık: Q3 eksi Q1. Merkezi yayılımı ölçer.'],
        ['<strong>Çarpıklık</strong>', 'Dağılımın ortalamasına göre asimetrisi.'],
        ['<strong>Basıklık</strong>', 'Basıklık fazlalığı: normal dağılıma göre kuyruk ağırlığı.'],
      ],
    },
    {
      type: 'tip',
      title: 'Medyan Ne Zaman Ortalama Yerine Kullanılmalı?',
      html: 'Verilerinizde önemli ölçüde aykırı değerler varsa (örneğin gelir verileri, konut fiyatları), <strong>medyan</strong>, uç değerlere doğru çekilen ortalamadan daha temsili bir merkezi eğilim ölçüsüdür.',
    },
    { type: 'title', level: 2, text: 'Histogramı Yorumlama' },
    {
      type: 'paragraph',
      html: 'Frekans histogramı, değerlerinizin <strong>Sturges kuralı</strong> (k = 1 + log₂N) kullanılarak otomatik olarak hesaplanan eşit genişlikteki kutulara nasıl dağıldığını gösterir. Simetrik bir çan şekli normal dağılımı gösterir. Çarpık şekiller, sonuçlarda gösterilen çarpıklık değerini doğrular.',
    },
    { type: 'title', level: 2, text: 'Hızlı Başvuru Sözlüğü' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Çeyreklikler Arası Aralık. Verilerinizin merkezi %50\'sinin yayılımı. Aykırı değerleri belirlemek için kullanılır.' },
        { term: 'Çarpıklık', definition: 'Dağılım asimetrisini ölçer. Pozitif = sağ kuyruk daha uzun. Negatif = sol kuyruk daha uzun.' },
        { term: 'Basıklık Fazlalığı', definition: 'Normal bir dağılıma kıyasla kuyruk ağırlığı. 0 normaldir; pozitif olması daha ağır kuyruklar anlamına gelir.' },
        { term: 'Bessel Düzeltmesi', definition: 'Tahmindeki yanlılığı azaltmak için örneklem varyansını hesaplarken N yerine N-1\'e bölmek.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Betimsel İstatistik',
    labelData: 'Verilerinizi girin',
    placeholderData: 'örn. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Virgül, boşluk veya satır sonu ile ayrılmış en az 2 sayısal değer girin.',
    hintError: 'İstatistikleri hesaplamak için en az 2 geçerli sayısal değer girin.',
    btnSample: 'Örneklem',
    btnPopulation: 'Popülasyon',
    groupCentral: 'Merkezi Eğilim',
    groupDispersion: 'Dağılım',
    groupPosition: 'Konum',
    labelCount: 'Sayım (N)',
    labelSum: 'Toplam',
    labelMean: 'Ortalama',
    labelMedian: 'Medyan',
    labelMode: 'Mod',
    labelStdDev: 'Std Sapma',
    labelVariance: 'Varyans',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Maks',
    labelRange: 'Aralık',
    labelQ1: 'Q1 (%25)',
    labelQ3: 'Q3 (%75)',
    labelIQR: 'IQR',
    labelSkewness: 'Çarpıklık',
    labelKurtosis: 'Basıklık',
    labelBoxplot: 'Kutu Grafiği',
    labelChart: 'Frekans Dağılımı',
    chartDesc: 'Sturges kuralı kullanılarak otomatik kutu genişliğine sahip histogram.',
    insightTitle: 'Otomatik Yorumlama',
    insightHomogeneous: 'Veriler homojendir (CV < %15).',
    insightModerate: 'Veriler orta derecede değişkenlik göstermektedir (CV %15-35).',
    insightHeterogeneous: 'Veriler heterojendir (CV > %35).',
    insightSymmetric: 'Dağılım yaklaşık olarak simetriktir.',
    insightRightSkewed: 'Dağılım pozitif çarpıklık göstermektedir (sağa çarpık).',
    insightLeftSkewed: 'Dağılım negatif çarpıklık göstermektedir (sola çarpık).',
    insightNoOutliers: 'Aykırı değer saptanmadı.',
    insightOutliers: 'IQR yöntemi kullanılarak {n} aykırı değer saptandı.',
    insightIQR: 'Çeyreklikler arası aralık {iqr} ({q1}\'den {q3}\'e).',
    filterNotice: '{n} sayısal olmayan karakter yoksayıldı.',
    labelReport: 'Raporunuz için özet',
    btnCopy: 'Özeti Kopyala',
    btnCopied: 'Kopyalandı!',
    noMode: 'Mod yok',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
  },
};
