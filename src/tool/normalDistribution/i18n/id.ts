import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'kalkulator-distribusi-normal';
const title = 'Kalkulator Distribusi Normal Online';
const description =
  'Hitung probabilitas distribusi normal secara instan: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) dan normal terbalik. Masukkan mean dan standar deviasi lalu visualisasikan kurva lonceng Gaussian dengan area yang diarsir.';

const faqData = [
  {
    question: 'Apa itu distribusi normal?',
    answer:
      "Distribusi normal, atau kurva lonceng Gaussian, adalah distribusi probabilitas kontinu yang paling penting dalam statistik. Distribusi ini sepenuhnya ditentukan oleh dua parameter: mean (μ), yang menetapkan pusat, dan standar deviasi (σ), yang mengontrol penyebaran. Distribusi ini simetris di sekitar mean dan ekornya memanjang hingga tak terhingga.",
  },
  {
    question: 'Bagaimana probabilitas dihitung?',
    answer:
      "Probabilitas diperoleh dengan mengintegrasikan fungsi padat probabilitas (PDF). Karena tidak ada antiturunan bentuk tertutup, probabilitas dihitung menggunakan fungsi kesalahan (erf). Kalkulator ini menggunakan pendekatan Abramowitz dan Stegun presisi tinggi untuk menghasilkan hasil yang akurat.",
  },
  {
    question: 'Apa itu z-score?',
    answer:
      'Z-score (atau skor standar) menunjukkan berapa banyak standar deviasi suatu nilai dari mean: z = (X - μ) / σ. Ini memungkinkan perbandingan nilai dari distribusi dengan skala yang berbeda. Misalnya, z = 1 berarti X berada tepat 1 standar deviasi di atas mean.',
  },
  {
    question: 'Untuk apa distribusi normal terbalik digunakan?',
    answer:
      'Normal terbalik menjawab pertanyaan: nilai X apa yang sesuai dengan persentil ke-p? Yaitu, jika diketahui P(X ≤ x) = p, carilah x. Ini banyak digunakan dalam pengendalian kualitas (batas toleransi), statistik inferensial (nilai kritis), dan simulasi variabel acak.',
  },
];

const howToData = [
  {
    name: 'Masukkan parameter',
    text: 'Ketik mean (μ) dan standar deviasi (σ > 0) dari distribusi normal Anda. Distribusi normal standar (μ=0, σ=1) digunakan secara default.',
  },
  {
    name: 'Pilih jenis penghitungan',
    text: 'Pilih mode: P(X ≤ a) untuk ekor kiri, P(X ≥ a) untuk ekor kiri, P(a ≤ X ≤ b) untuk interval, atau Terbalik (Inverse) untuk mencari nilai X bagi persentil tertentu.',
  },
  {
    name: 'Baca hasil dan grafik',
    text: 'Probabilitas ditampilkan secara instan bersama dengan z-score. Kurva lonceng Gaussian menunjukkan area yang diarsir sesuai dengan probabilitas yang dihitung.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    { name: 'Distribusi normal - Wikipedia', url: 'https://id.wikipedia.org/wiki/Distribusi_normal' },
    { name: 'Fungsi galat - Wikipedia', url: 'https://id.wikipedia.org/wiki/Fungsi_galat' },
    { name: 'Abramowitz dan Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Skor standar - Wikipedia', url: 'https://id.wikipedia.org/wiki/Skor_standar' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator Distribusi Normal: Probabilitas dalam Waktu Nyata' },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator Distribusi Normal</strong> menghitung probabilitas distribusi normal apa pun secara instan: ekor kiri, ekor kanan, interval tengah, dan terbalik. Cukup masukkan mean dan standar deviasi untuk mendapatkan hasil dan memvisualisasikannya pada kurva lonceng Gaussian.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Mode Penghitungan', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Hasil Real-Time', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Tanpa Registrasi', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Mode Penghitungan' },
    {
      type: 'table',
      headers: ['Mode', 'Deskripsi', 'Contoh Penggunaan'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilitas kumulatif hingga nilai a (ekor kiri).', 'Persentase siswa di bawah ambang batas nilai.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilitas ekor kanan mulai dari nilai a dan seterusnya.', 'Probabilitas melampaui ambang batas kualitas.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilitas dalam interval tengah atau asimetris.', 'Proporsi bagian dalam toleransi.'],
        ['<strong>Terbalik (Inverse)</strong>', 'Temukan X sedemikian hingga P(X ≤ x) = p (persentil ke-p).', 'Nilai kritis dalam uji hipotesis.'],
      ],
    },
    {
      type: 'tip',
      title: 'Aturan Empiris 68-95-99,7',
      html: 'Dalam distribusi normal apa pun: <strong>68%</strong> data berada dalam ±1σ dari mean, <strong>95%</strong> dalam ±2σ, dan <strong>99,7%</strong> dalam ±3σ. Verifikasi ini dengan menghitung P(-1 ≤ z ≤ 1) dengan μ=0 dan σ=1.',
    },
    { type: 'title', level: 2, text: 'Glosarium Referensi Cepat' },
    {
      type: 'glossary',
      items: [
        { term: 'Mean (μ)', definition: 'Parameter lokasi. Menentukan pusat kurva lonceng Gaussian.' },
        { term: 'Standar Deviasi (σ)', definition: 'Parameter skala. Mengontrol lebar kurva lonceng. Harus positif secara ketat.' },
        { term: 'Z-score', definition: 'Nilai standar: z = (X - μ) / σ. Menunjukkan berapa banyak standar deviasi X dari mean.' },
        { term: 'PDF', definition: 'Probability Density Function (Fungsi Padat Probabilitas). Luas di bawah PDF pada suatu interval sama dengan probabilitas interval tersebut.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribusi Normal',
    labelMean: 'Mean',
    labelStdDev: 'Std Dev',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Terbalik',
    labelValue: 'Nilai X (a)',
    labelValueA: 'Batas bawah (a)',
    labelValueB: 'Batas atas (b)',
    labelPercentile: 'Persentil p (0 < p < 1)',
    resultProbability: 'Probabilitas',
    resultX: 'Nilai X',
    resultZScore: 'Z-score',
    resultZScoreA: 'z₁ (batas bawah)',
    resultZScoreB: 'z₂ (batas atas)',
    hintStdDev: 'Standar deviasi harus lebih besar dari 0.',
    hintPercentile: 'Persentil harus antara 0 dan 1 (eksklusif).',
    labelChart: 'Kurva Lonceng Gaussian',
    chartDesc: 'Area yang diarsir sesuai dengan probabilitas yang dihitung.',
    labelReport: 'Ringkasan untuk laporan Anda',
    btnCopy: 'Salin Ringkasan',
    btnCopied: 'Disalin!',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
  },
};
