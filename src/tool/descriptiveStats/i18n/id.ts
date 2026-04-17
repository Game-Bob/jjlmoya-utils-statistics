import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'kalkulator-statistik-deskriptif';
const title = 'Kalkulator Statistik Deskriptif Online';
const description =
  'Hitung semua statistik deskriptif utama secara instan: rata-rata, median, modus, standar deviasi, varians, kuartil, kemiringan, kurtosis, dan banyak lagi. Tempel data Anda dan dapatkan hasil secara real-time.';

const faqData = [
  {
    question: 'Apa perbedaan antara standar deviasi populasi dan sampel?',
    answer:
      'Standar deviasi populasi membagi dengan N (semua elemen diketahui). Standar deviasi sampel membagi dengan N-1 (koreksi Bessel) untuk mengoreksi bias saat memperkirakan dari subset. Kalkulator ini menggunakan standar deviasi sampel (N-1), yang merupakan pilihan paling umum dalam penelitian dan analisis data.',
  },
  {
    question: 'Apa arti kemiringan positif atau negatif?',
    answer:
      'Kemiringan (skewness) mengukur asimetri distribusi data Anda. Kemiringan positif (miring ke kanan) berarti ekor memanjang ke kanan dan sebagian besar nilai berkerumun di sebelah kiri. Kemiringan negatif (miring ke kiri) adalah sebaliknya. Nilai mendekati 0 menunjukkan distribusi yang kira-kira simetris.',
  },
  {
    question: 'Apa itu kurtosis dan apa fungsinya?',
    answer:
      'Kurtosis mengukur "berat" ekor relatif terhadap distribusi normal. Kalkulator ini mengembalikan excess kurtosis, di mana 0 adalah garis dasar (distribusi normal). Nilai positif (leptokurtik) menunjukkan ekor yang lebih berat dan puncak yang lebih tajam. Nilai negatif (platykurtik) menunjukkan ekor yang lebih ringan dan puncak yang lebih datar.',
  },
  {
    question: 'Format data apa yang harus saya gunakan?',
    answer:
      'Tempelkan angka Anda yang dipisahkan oleh koma, spasi, titik koma, atau jeda baris. Contoh: "1, 2, 3, 4" atau "1 2 3 4" atau satu nilai per baris. Kalkulator mengabaikan karakter non-numerik secara otomatis.',
  },
];

const howToData = [
  {
    name: 'Tempel atau Ketik Data Anda',
    text: 'Masukkan nilai numerik Anda di area teks, dipisahkan oleh koma, spasi, atau jeda baris. Anda memerlukan setidaknya 2 nilai.',
  },
  {
    name: 'Baca Hasilnya',
    text: 'Ke-15 statistik diperbarui secara instan saat Anda mengetik. Histogram menunjukkan bentuk distribusi data Anda.',
  },
  {
    name: 'Salin Ringkasan',
    text: 'Gunakan tombol Salin Teks untuk menyalin ringkasan ringkas statistik utama untuk digunakan dalam laporan atau analisis Anda.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    { name: 'Statistik deskriptif - Wikipedia', url: 'https://id.wikipedia.org/wiki/Statistik_deskriptif' },
    { name: 'Simpangan baku - Wikipedia', url: 'https://id.wikipedia.org/wiki/Simpangan_baku' },
    { name: 'Kemiringan (statistik) - Wikipedia', url: 'https://id.wikipedia.org/wiki/Kemiringan_(statistik)' },
    { name: 'Kurtosis - Wikipedia', url: 'https://id.wikipedia.org/wiki/Kurtosis' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator Statistik Deskriptif: Semua Metrik Utama di Satu Tempat' },
    {
      type: 'paragraph',
      html: 'Baik Anda seorang pelajar, peneliti, atau analis data, <strong>Kalkulator Statistik Deskriptif</strong> memberi Anda ringkasan statistik instan dan lengkap dari kumpulan data numerik apa pun. Tempelkan data Anda dan dapatkan 15 statistik yang dihitung secara bersamaan — tidak memerlukan perangkat lunak spreadsheet.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Statistik Dihitung', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Hasil Real-Time', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Tanpa Registrasi', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Statistik yang Dihitung' },
    {
      type: 'table',
      headers: ['Statistik', 'Deskripsi'],
      rows: [
        ['<strong>Jumlah (N)</strong>', 'Jumlah total nilai dalam kumpulan data.'],
        ['<strong>Rata-rata (Mean)</strong>', 'Rata-rata aritmatika dari semua nilai.'],
        ['<strong>Median</strong>', 'Nilai tengah saat data diurutkan. Tahan terhadap outlier.'],
        ['<strong>Modus</strong>', 'Nilai yang paling sering muncul.'],
        ['<strong>Std Dev</strong>', 'Standar deviasi sampel (membagi dengan N-1).'],
        ['<strong>Varians</strong>', 'Kuadrat dari standar deviasi sampel.'],
        ['<strong>Min / Maks</strong>', 'Nilai terkecil dan terbesar dalam kumpulan data.'],
        ['<strong>Rentang (Range)</strong>', 'Selisih antara nilai maksimum dan minimum.'],
        ['<strong>Q1 / Q3</strong>', 'Kuartil pertama dan ketiga (persentil ke-25 dan ke-75).'],
        ['<strong>IQR</strong>', 'Rentang interkuartil: Q3 dikurangi Q1. Mengukur penyebaran pusat.'],
        ['<strong>Kemiringan</strong>', 'Asimetri distribusi relatif terhadap rata-ratanya.'],
        ['<strong>Kurtosis</strong>', 'Excess kurtosis: berat ekor relatif terhadap distribusi normal.'],
      ],
    },
    {
      type: 'tip',
      title: 'Kapan Menggunakan Median Daripada Mean',
      html: 'Jika data Anda memiliki outlier yang signifikan (misalnya, data pendapatan, harga rumah), <strong>median</strong> adalah ukuran tendensi sentral yang lebih representatif daripada mean, yang ditarik ke arah nilai ekstrem.',
    },
    { type: 'title', level: 2, text: 'Menginterpretasi Histogram' },
    {
      type: 'paragraph',
      html: 'Histogram frekuensi menunjukkan bagaimana nilai Anda didistribusikan di seluruh bin dengan lebar yang sama, dihitung secara otomatis menggunakan <strong>aturan Sturges</strong> (k = 1 + log₂N). Bentuk lonceng simetris menunjukkan distribusi normal. Bentuk miring mengonfirmasi nilai kemiringan yang ditampilkan dalam hasil.',
    },
    { type: 'title', level: 2, text: 'Glosarium Referensi Cepat' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Rentang Interkuartil. Penyebaran 50% tengah data Anda. Digunakan untuk mengidentifikasi outlier.' },
        { term: 'Kemiringan', definition: 'Mengukur asimetri distribusi. Positif = ekor kanan lebih panjang. Negatif = ekor kiri lebih panjang.' },
        { term: 'Excess Kurtosis', definition: 'Berat ekor dibandingkan dengan distribusi normal. 0 adalah normal; positif berarti ekor lebih berat.' },
        { term: 'Koreksi Bessel', definition: 'Membagi dengan N-1 alih-alih N saat menghitung varians sampel untuk mengurangi bias dalam estimasi.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Statistik Deskriptif',
    labelData: 'Masukkan data Anda',
    placeholderData: 'misal. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Masukkan setidaknya 2 nilai numerik yang dipisahkan oleh koma, spasi, atau jeda baris.',
    hintError: 'Masukkan setidaknya 2 nilai numerik yang valid untuk menghitung statistik.',
    btnSample: 'Sampel',
    btnPopulation: 'Populasi',
    groupCentral: 'Tendensi Sentral',
    groupDispersion: 'Dispersi',
    groupPosition: 'Posisi',
    labelCount: 'Jumlah (N)',
    labelSum: 'Jumlah Total',
    labelMean: 'Mean',
    labelMedian: 'Median',
    labelMode: 'Modus',
    labelStdDev: 'Std Dev',
    labelVariance: 'Varians',
    labelCV: 'CV',
    labelMin: 'Min',
    labelMax: 'Maks',
    labelRange: 'Rentang',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Kemiringan',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Box Plot',
    labelChart: 'Distribusi Frekuensi',
    chartDesc: 'Histogram dengan lebar bin otomatis menggunakan aturan Sturges.',
    insightTitle: 'Interpretasi Otomatis',
    insightHomogeneous: 'Data bersifat homogen (CV < 15%).',
    insightModerate: 'Data menunjukkan variabilitas sedang (CV 15-35%).',
    insightHeterogeneous: 'Data bersifat heterogen (CV > 35%).',
    insightSymmetric: 'Distribusi kira-kira simetris.',
    insightRightSkewed: 'Distribusi menunjukkan kemiringan positif (ekor kanan).',
    insightLeftSkewed: 'Distribusi menunjukkan kemiringan negatif (ekor kiri).',
    insightNoOutliers: 'Tidak ada outlier yang terdeteksi.',
    insightOutliers: '{n} outlier terdeteksi menggunakan metode IQR.',
    insightIQR: 'Rentang interkuartil adalah {iqr} (dari {q1} ke {q3}).',
    filterNotice: '{n} karakter non-numerik diabaikan.',
    labelReport: 'Ringkasan untuk laporan Anda',
    btnCopy: 'Salin Ringkasan',
    btnCopied: 'Disalin!',
    noMode: 'Tidak ada modus',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
  },
};
