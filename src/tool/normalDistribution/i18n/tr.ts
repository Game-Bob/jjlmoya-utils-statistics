import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'normal-dagilim-hesaplama';
const title = 'Online Normal Dağılım Hesaplayıcı';
const description =
  'Normal dağılım olasılıklarını anında hesaplayın: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) ve ters normal dağılım. Ortalama ve standart sapmayı girin, taranmış alanla birlikte Gauss çan eğrisini görselleştirin.';

const faqData = [
  {
    question: 'Normal dağılım nedir?',
    answer:
      "Normal dağılım veya Gauss çan eğrisi, istatistikteki en önemli sürekli olasılık dağılımıdır. İki parametre ile tam olarak tanımlanır: merkezi belirleyen ortalama (μ) ve yayılımı kontrol eden standart sapma (σ). Ortalamaya göre simetriktir ve kuyrukları sonsuza uzanır.",
  },
  {
    question: 'Olasılık nasıl hesaplanır?',
    answer:
      "Olasılık, olasılık yoğunluk fonksiyonunun (PDF) entegre edilmesiyle elde edilir. Kapalı formda bir ters türevi olmadığı için hata fonksiyonu (erf) kullanılarak hesaplanır. Bu hesaplayıcı, doğru sonuçlar üretmek için yüksek hassasiyetli Abramowitz ve Stegun yaklaşımını kullanır.",
  },
  {
    question: 'Z-puanı nedir?',
    answer:
      'Z-puanı (veya standart puan), bir değerin ortalamadan kaç standart sapma uzaklıkta olduğunu belirtir: z = (X - μ) / σ. Farklı ölçeklere sahip dağılımlardaki değerlerin karşılaştırılmasına olanak tanır. Örneğin, z = 1, X\'in ortalamanın tam 1 standart sapma üzerinde olduğu anlamına gelir.',
  },
  {
    question: 'Ters normal dağılım ne için kullanılır?',
    answer:
      'Ters normal şu soruya cevap verir: p-inci yüzdeliğe hangi X değeri karşılık gelir? Yani, P(X ≤ x) = p verildiğinde x\'i bulur. Kalite kontrol (tolerans sınırları), tümevarımsal istatistik (kritik değerler) ve rastgele değişken simülasyonunda yaygın olarak kullanılır.',
  },
];

const howToData = [
  {
    name: 'Parametreleri girin',
    text: 'Normal dağılımınızın ortalamasını (μ) ve standart sapmasını (σ > 0) yazın. Varsayılan olarak standart normal dağılım (μ=0, σ=1) kullanılır.',
  },
  {
    name: 'Hesaplama türünü seçin',
    text: 'Bir mod seçin: Sol kuyruk için P(X ≤ a), sağ kuyruk için P(X ≥ a), bir aralık için P(a ≤ X ≤ b) veya belirli bir yüzdelik dilim için X değerini bulmak üzere Ters (Inverse).',
  },
  {
    name: 'Sonucu ve grafiği okuyun',
    text: 'Olasılık, z-puanı ile birlikte anında görüntülenir. Gauss çan eğrisi, hesaplanan olasılığa karşılık gelen taranmış alanı gösterir.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Bibliyografya & Referanslar',
  bibliography: [
    { name: 'Normal dağılım - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Normal_da%C4%9F%C4%B1l%C4%B1m' },
    { name: 'Hata fonksiyonu - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Hata_fonksiyonu' },
    { name: 'Abramowitz ve Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Z puanı - Vikipedi', url: 'https://tr.wikipedia.org/wiki/Z_puan%C4%B1' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Normal Dağılım Hesaplayıcı: Gerçek Zamanlı Olasılıklar' },
    {
      type: 'paragraph',
      html: '<strong>Normal Dağılım Hesaplayıcı</strong> her türlü normal dağılım olasılığını anında hesaplar: sol kuyruk, sağ kuyruk, merkezi aralık ve ters. Sonucu almak ve Gauss çan eğrisi üzerinde görselleştirmek için ortalama ve standart sapmayı girmeniz yeterlidir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Hesaplama Modu', icon: 'mdi:function-variant' },
        { value: 'Canlı', label: 'Gerçek Zamanlı Sonuçlar', icon: 'mdi:lightning-bolt' },
        { value: 'Ücretsiz', label: 'Kayıt Gerekmez', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Hesaplama Modları' },
    {
      type: 'table',
      headers: ['Mod', 'Açıklama', 'Örnek Kullanım'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'a değerine kadar birikimli olasılık (sol kuyruk).', 'Bir not eşiğinin altındaki öğrencilerin yüzdesi.'],
        ['<strong>P(X ≥ a)</strong>', 'a değerinden itibaren sağ kuyruk olasılığı.', 'Bir kalite eşiğini aşma olasılığı.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Merkezi veya asimetrik bir aralıktaki olasılık.', 'Tolerans dahilindeki parça oranı.'],
        ['<strong>Ters (Inverse)</strong>', 'P(X ≤ x) = p olacak şekilde X\'i bulun (p-inci yüzdelik).', 'Bir hipotez testindeki kritik değer.'],
      ],
    },
    {
      type: 'tip',
      title: '68-95-99,7 Ampirik Kuralı',
      html: 'Herhangi bir normal dağılımda: verilerin <strong>%68</strong>\'i ortalamanın ±1σ, <strong>%95</strong>\'i ±2σ ve <strong>%99,7</strong>\'si ±3σ dahilindedir. Bunu μ=0 ve σ=1 ile P(-1 ≤ z ≤ 1) hesaplayarak doğrulayın.',
    },
    { type: 'title', level: 2, text: 'Hızlı Başvuru Sözlüğü' },
    {
      type: 'glossary',
      items: [
        { term: 'Ortalama (μ)', definition: 'Konum parametresi. Gauss çan eğrisinin merkezini belirler.' },
        { term: 'Standart Sapma (σ)', definition: 'Ölçek parametresi. Çan eğrisinin genişliğini kontrol eder. Kesinlikle pozitif olmalıdır.' },
        { term: 'Z-puanı', definition: 'Standartlaştırılmış değer: z = (X - μ) / σ. X\'in ortalamadan kaç standart sapma uzaklıkta olduğunu gösterir.' },
        { term: 'PDF', definition: 'Olasılık Yoğunluk Fonksiyonu. Bir aralık üzerindeki PDF altındaki alan, o aralığın olasılığına eşittir.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Normal Dağılım',
    labelMean: 'Ortalama',
    labelStdDev: 'Std Sapma',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Ters',
    labelValue: 'X Değeri (a)',
    labelValueA: 'Alt sınır (a)',
    labelValueB: 'Üst sınır (b)',
    labelPercentile: 'Yüzdelik p (0 < p < 1)',
    resultProbability: 'Olasılık',
    resultX: 'X Değeri',
    resultZScore: 'Z-puanı',
    resultZScoreA: 'z₁ (alt sınır)',
    resultZScoreB: 'z₂ (üst sınır)',
    hintStdDev: 'Standart sapma 0\'dan büyük olmalıdır.',
    hintPercentile: 'Yüzdelik dilim 0 ile 1 arasında olmalıdır (0 ve 1 hariç).',
    labelChart: 'Gauss Çan Eğrisi',
    chartDesc: 'Taranmış alan hesaplanan olasılığa karşılık gelir.',
    labelReport: 'Raporunuz için özet',
    btnCopy: 'Özeti Kopyala',
    btnCopied: 'Kopyalandı!',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografya & Referanslar',
  },
};
