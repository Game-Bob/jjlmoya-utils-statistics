import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'orneklem-buyuklugu-hesaplama';
const title = 'Online Örneklem Büyüklüğü Hesaplayıcı';
const description =
  'Çalışmanız için gereken kesin kişi sayısını hesaplayın. Sonlu veya sonsuz popülasyon seçeneklerini, ayarlanabilir güven düzeylerini ve hata paylarını içerir.';

const faqData = [
  {
    question: 'Popülasyon büyüklüğü nedir?',
    answer:
      'İncelemek veya anket yapmak istediğiniz grubu oluşturan toplam kişi sayısıdır. 100.000\'den az ise genellikle sonlu popülasyon olarak kabul edilir. Bu veriye sahip değilseniz veya yönetilemez durumdaysa sonsuz popülasyon seçeneğini seçin.',
  },
  {
    question: 'Hangi güven düzeyini seçmeliyim?',
    answer:
      'Bilimsel araştırmalarda, tezlerde ve pazar araştırmalarında %95 en yaygın kullanılan standarttır. Bu değeri yalnızca profesörünüz, danışmanınız veya müşteriniz farklı bir hassasiyet düzeyi (örneğin %99) gerektiriyorsa değiştirin.',
  },
  {
    question: 'Araç neden hata payı soruyor?',
    answer:
      'Hiçbir örneklem mükemmel değildir. Hata payı, kabul etmeye hazır olduğunuz belirsizlik miktarını tanımlar. En yaygın olanı %5\'tir.',
  },
  {
    question: 'Popülasyon hakkında hiçbir şey bilmiyorsam hangi beklenen oranı (p) kullanmalıyım?',
    answer:
      'Varsayılan değeri bırakın: %50. İstatistikte bu, p(1-p) varyansını maksimize ettiği için "en kötü durum senaryosunu" temsil eder ve örneklem büyüklüğünüzün hiçbir koşulda çok küçük olmamasını sağlar.',
  },
];

const howToData = [
  {
    name: 'Popülasyonunuzu Tanımlayın',
    text: 'İncelenecek grubun toplam sayısını bilip bilmediğinizi (Sonlu) veya çok büyük/bilinmeyen gruplar için muhafazakar bir hesaplamayı mı (Sonsuz) tercih ettiğinizi belirtin.',
  },
  {
    name: 'Güven Düzeyinizi Ayarlayın',
    text: '%%95\'i (önerilen) seçin veya açılır menüden özel bir değer girin.',
  },
  {
    name: 'Hata Payını Belirleyin',
    text: 'Hata toleransını belirtin. Bunu %5\'ten %2\'ye düşürmenin, yapmanız gereken anket sayısını büyük ölçüde artıracağını unutmayın.',
  },
  {
    name: 'Sonucu Kopyalayın',
    text: 'Merkezi panele bakın ve tezinize veya raporunuza eklemek için otomatik olarak oluşturulan Gerekçe Metnini doğrudan kopyalayın.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    { name: 'Örneklem büyüklüğü belirleme - Vikipedi', url: 'https://tr.wikipedia.org/wiki/%C3%96rnekleme' },
    { name: 'Örneklem büyüklüğü hesaplama - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Online Örneklem Büyüklüğü Hesaplayıcı: Kesin Kılavuz' },
    {
      type: 'paragraph',
      html: 'Anket yapılacak doğru kişi sayısını belirlemek; herhangi bir araştırma, pazar çalışması veya akademik projedeki en kritik adımlardan biridir. <strong>Örneklem Büyüklüğü Hesaplayıcı</strong>; öğrencilere, araştırmacılara ve pazarlama profesyonellerine istatistiksel olarak anlamlı sonuçlar için gereken tam kişi sayısını hesaplamak üzere hassas, hızlı ve kullanımı kolay bir araç sunar.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '%95', label: 'Standart Güven', icon: 'mdi:check-decagram' },
        { value: '%5', label: 'Hata Payı', icon: 'mdi:target' },
        { value: 'Hızlı', label: 'Gerçek Zamanlı Hesaplama', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Örneklem Büyüklüğünü Hesaplamak Neden Temeldir?' },
    {
      type: 'paragraph',
      html: 'İstatistikte tüm popülasyonu incelemek nadiren mümkündür. Çözüm, örneklem olarak bilinen temsil edici bir alt grubu seçmektir. Örneklem çok küçükse sonuçlar yanlı olur. Çok büyükse gereksiz yere zaman ve para harcarsınız.',
    },
    { type: 'title', level: 2, text: 'İki Hesaplama Modu: Sonlu ve Sonsuz Popülasyon' },
    {
      type: 'paragraph',
      html: 'Hesaplayıcımız, iki farklı hesaplama modu sunarak durumunuza uyum sağlar.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sonlu Popülasyon (Bilinen)',
          description: 'Bireylerin tam toplam sayısı bilinir.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'N değerini gerektirir',
            'Düzeltme faktörü uygular',
            'Nihai örneklem büyüklüğünü azaltır',
          ],
        },
        {
          title: 'Sonsuz Popülasyon (Bilinmeyen)',
          description: 'Toplam büyüklük bilinmiyor, yönetilemiyor veya 100.000\'den büyük.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'N bilgisini gerektirmez',
            'Standart klasik formül',
            'En muhafazakar ve güvenli senaryo',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Kontrol Paneli Parametrelerini Anlamak' },
    {
      type: 'table',
      headers: ['Parametre', 'Açıklama', 'Standart Öneri'],
      rows: [
        ['<strong>Güven Düzeyi (Z)</strong>', 'Örneklemin popülasyonu temsil ettiğine dair matematiksel kesinlik.', '%95 kullanın.'],
        ['<strong>Hata Payı (e)</strong>', 'Gerçeklikten tolere edilen sapma yüzdesi.', '%5 kullanın.'],
        ['<strong>Beklenen Oran (p)</strong>', 'İncelenen olayın gerçekleşme olasılığı.', '%50 kullanın (varyansı maksimize eder).'],
      ],
    },
    {
      type: 'tip',
      title: 'Hata Payına Dikkat Edin',
      html: 'Hata payını %5\'ten %2\'ye düşürmek, örneklem büyüklüğünde üstel bir artış gerektirir. Çok katı bir sınıra karar vermeden önce hesaplayıcıdaki Hassasiyet Grafiğini kontrol edin.',
    },
    { type: 'title', level: 2, text: 'Hesaplamanın Arkasındaki Matematiksel Formül' },
    {
      type: 'list',
      items: [
        '<strong>Sonsuz Popülasyon:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Güven Düzeyinden türetilen kritik değer.',
        '<strong>p:</strong> Beklenen oran (q, 1 - p\'dir).',
        '<strong>e:</strong> Tolere edilen hata payı.',
      ],
    },
    { type: 'title', level: 2, text: 'Araştırmacılar İçin Hızlı Sözlük' },
    {
      type: 'glossary',
      items: [
        { term: 'Popülasyon (N)', definition: 'Bir özelliği paylaşan ve incelemeye konu olan tüm öğeler veya bireyler kümesi.' },
        { term: 'Örneklem (n)', definition: 'Toplam popülasyondan seçilen temsil edici alt küme.' },
        { term: 'Maksimum Varyans', definition: 'p=0,5 (%50) olduğunda oluşur ve hesaplanan örneklemin en çeşitli olası durum için uygulanabilir olmasını sağlar.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parametreler',
    labelPopType: 'Popülasyon Tipi',
    btnFinite: 'Sonlu (Bilinen)',
    btnInfinite: 'Sonsuz (Bilinmeyen)',
    labelPopSize: 'Popülasyon Büyüklüğü',
    labelConfLevel: 'Güven Düzeyi (%)',
    conf90: '%90',
    conf95: '%95',
    conf99: '%99',
    confCustom: 'Özel',
    labelConfCustom: 'Özel Güven Düzeyi (%)',
    labelErrorMargin: 'Hata Payı (%)',
    labelProportion: 'Beklenen Oran',
    hintProportion: '%50, en büyük ve en güvenli örneklemi veren "en kötü durum"dur.',
    hintProportionError: '%0 veya %100\'lük bir oran örneklemi geçersiz kılar. %5 ile %95 arasındaki değerleri kullanmanızı öneririz.',
    labelSampleSize: 'Önerilen Büyüklük',
    labelSampleSub: 'anket gerekiyor',
    labelZValue: 'Kritik Değer',
    labelReport: 'Raporunuz için metin',
    defaultJustification: '10.000 kişilik bir popülasyon için, %95 güven düzeyi ve %5 hata payı ile temsil edici örneklem büyüklüğü 370 kişidir.',
    btnCopy: 'Metni Kopyala',
    btnCopied: 'Kopyalandı!',
    labelChart: 'Hassasiyet: Büyüklük vs Hata Payı',
    chartDesc: 'Hata payını düşürmeye çalışırken örneklem büyüklüğünün nasıl fırladığını gözlemleyin.',
    justForFinite: 'Şu büyüklükte bir popülasyon için:',
    justPersons: 'kişi',
    justForInfinite: 'Sonsuz bir popülasyon için',
    justConfidence: ', şu güven düzeyi ile:',
    justError: '% ve şu hata payı ile:',
    justResultIs: '%, temsil edici örneklem büyüklüğü:',
    justUnit: 'kişidir.',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
  },
};
