import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'kalkulator-interval-kepercayaan';
const title = 'Kalkulator Interval Kepercayaan Online';
const description =
  'Hitung interval kepercayaan untuk rata-rata populasi menggunakan distribusi Z atau Student t. Masukkan rata-rata sampel, standar deviasi, ukuran sampel, dan tingkat kepercayaan untuk mendapatkan interval, margin kesalahan, dan nilai kritis secara instan.';

const faqData = [
  {
    question: 'Apa itu interval kepercayaan?',
    answer:
      'Interval kepercayaan (CI) adalah rentang nilai yang dihitung dari data sampel yang, dengan probabilitas tertentu (tingkat kepercayaan), berisi parameter populasi yang sebenarnya. Misalnya, CI 95% untuk rata-rata berarti jika Anda mengulang pengambilan sampel berkali-kali, 95% dari interval yang dihitung akan berisi rata-rata populasi yang sebenarnya.',
  },
  {
    question: 'Kapan saya harus menggunakan Z daripada t?',
    answer:
      'Gunakan Z ketika standar deviasi populasi (σ) diketahui, atau ketika n besar (>30). Gunakan Student t ketika hanya standar deviasi sampel (s) yang tersedia dan n kecil. Untuk n > 30, kedua distribusi tersebut secara praktis setara, tetapi t tetap lebih konservatif dan benar secara teknis ketika σ tidak diketahui.',
  },
  {
    question: 'Bagaimana ukuran sampel mempengaruhi lebar interval?',
    answer:
      'Lebar CI sebanding dengan 1/√n: melipatgandakan ukuran sampel akan mengurangi margin kesalahan menjadi setengahnya. Ini menjelaskan mengapa sampel besar memberikan perkiraan yang lebih tepat dan mengapa perencanaan ukuran sampel sangat penting dalam desain studi statistik.',
  },
  {
    question: 'Apa itu margin kesalahan?',
    answer:
      'Margin kesalahan (ME) adalah setengah dari lebar CI: ME = nilai_kritis × SE, di mana SE = σ/√n adalah kesalahan standar. Ini menunjukkan perbedaan maksimum yang diharapkan antara perkiraan sampel dan nilai populasi yang sebenarnya pada tingkat kepercayaan yang ditentukan.',
  },
];

const howToData = [
  {
    name: 'Masukkan parameter sampel',
    text: 'Ketik rata-rata sampel (x̄), standar deviasi (σ atau s > 0), dan ukuran sampel (n ≥ 2).',
  },
  {
    name: 'Pilih tingkat kepercayaan',
    text: 'Pilih 90%, 95%, atau 99% menggunakan tombol akses cepat, atau ketik nilai apa pun antara 0 dan 100.',
  },
  {
    name: 'Pilih distribusi dan baca hasilnya',
    text: 'Pilih Z jika standar deviasi populasi diketahui, atau t untuk sampel. Interval, margin kesalahan, dan nilai kritis dihitung secara instan.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    { name: 'Interval kepercayaan Wikipedia', url: 'https://id.wikipedia.org/wiki/Interval_kepercayaan' },
    { name: 'Distribusi t Student Wikipedia', url: 'https://id.wikipedia.org/wiki/Distribusi-t_Student' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Kesalahan standar Wikipedia', url: 'https://id.wikipedia.org/wiki/Galat_baku' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator Interval Kepercayaan: Hasil Real-Time' },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator Interval Kepercayaan</strong> secara instan menghitung interval, margin kesalahan, nilai kritis, dan kesalahan standar. Ini mendukung distribusi Z (sigma populasi diketahui) dan Student t (sigma sampel), dengan tingkat kepercayaan apa pun antara 0 dan 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Distribusi Z dan t', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Hasil Real-Time', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Tanpa Registrasi', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Distribusi Z vs Student t' },
    {
      type: 'table',
      headers: ['Kriteria', 'Distribusi Z', 'Student t'],
      rows: [
        ['Kapan digunakan', 'σ diketahui atau n > 30', 'Sampel s, n berapa pun'],
        ['Nilai kritis (95%)', 'z* = 1,960', 't* tergantung pada df = n−1'],
        ['Derajat kebebasan', 'Tidak berlaku', 'df = n − 1'],
        ['Untuk n besar', 'CI lebih sempit', 'Konvergen ke Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Cara Menginterpretasikan Interval Kepercayaan dengan Benar',
      html: '<strong>Interval kepercayaan 95%</strong> tidak berarti ada probabilitas 95% bahwa rata-rata yang sebenarnya terletak pada interval spesifik tersebut. Ini berarti <strong>prosedur</strong> tersebut, jika diulang dengan banyak sampel, akan menghasilkan interval yang berisi rata-rata yang sebenarnya sebanyak 95% dari waktu pengulangan. Setelah dihitung, interval tersebut bisa berisi nilai sebenarnya atau tidak.',
    },
    { type: 'title', level: 2, text: 'Glosarium Referensi Cepat' },
    {
      type: 'glossary',
      items: [
        { term: 'Interval Kepercayaan (CI)', definition: 'Rentang [x̄ − ME, x̄ + ME] yang memperkirakan parameter populasi pada tingkat kepercayaan yang dipilih.' },
        { term: 'Tingkat Kepercayaan', definition: 'Proporsi interval yang akan berisi parameter sebenarnya jika eksperimen diulang berkali-kali. Nilai umum: 90%, 95%, 99%.' },
        { term: 'Kesalahan Standar (SE)', definition: 'SE = σ/√n. Mengukur variabilitas rata-rata sampel di sekitar rata-rata populasi.' },
        { term: 'Margin Kesalahan (ME)', definition: 'ME = z* × SE (atau t* × SE). Ini adalah setengah dari lebar interval kepercayaan.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Interval Kepercayaan',
    labelMean: 'Rata-rata Sampel (x̄)',
    labelStdDev: 'Standar Deviasi',
    labelN: 'Ukuran Sampel (n)',
    labelConf: 'Tingkat Kepercayaan (%)',
    btnZ: 'Z (σ diketahui)',
    btnT: 'Student t',
    labelCI: 'Interval Kepercayaan',
    labelME: 'Margin Kesalahan',
    labelCritical: 'Nilai Kritis',
    labelSE: 'Kesalahan Standar',
    labelDF: 'Derajat Kebebasan',
    hintN: 'n harus berupa bilangan bulat yang lebih besar dari atau sama dengan 2.',
    hintStdDev: 'Standar deviasi harus lebih besar dari 0.',
    hintConf: 'Tingkat kepercayaan harus antara 0 dan 100.',
    labelChart: 'Visualisasi Interval',
    chartDesc: 'Garis bilangan dengan CI yang diarsir dan margin kesalahan.',
    labelReport: 'Ringkasan untuk laporan Anda',
    btnCopy: 'Salin Ringkasan',
    btnCopied: 'Disalin!',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
    tabStats: 'Statistik Ringkasan',
    tabRaw: 'Data Mentah',
    labelRaw: 'Tempel data',
    rawPlaceholder: 'Ketik atau tempel nilai yang dipisahkan oleh koma, spasi, atau baris baru. Contoh: 12.3, 15.1, 11.8',
    hintRaw: 'Masukkan setidaknya 2 nilai numerik yang valid.',
    labelDist: 'Distribusi',
    distAuto: 'Otomatis',
    noticeAutoRaw: 'Data sampel: Student t diterapkan',
    noticeAutoLowN: 'n < 30: Student t disarankan',
    noticeAutoHighN: 'n ≥ 30: distribusi Z disarankan',
    calcCI: 'Interval CI',
    calcInverse: 'n min',
    labelTargetME: 'Target margin kesalahan (E)',
    hintTargetME: 'E harus berupa angka yang lebih besar dari 0.',
    labelReqN: 'Ukuran sampel minimum',
  },
};
