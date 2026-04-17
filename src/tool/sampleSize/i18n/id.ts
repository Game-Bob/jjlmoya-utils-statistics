import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'kalkulator-ukuran-sampel';
const title = 'Kalkulator Ukuran Sampel Online';
const description =
  'Hitung jumlah orang yang tepat yang dibutuhkan untuk studi Anda. Termasuk opsi untuk populasi terbatas atau tidak terbatas, tingkat kepercayaan yang dapat disesuaikan, dan margin kesalahan.';

const faqData = [
  {
    question: 'Apa itu ukuran populasi?',
    answer:
      'Ini adalah jumlah total orang yang membentuk kelompok yang ingin Anda pelajari atau survei. Jika kurang dari 100.000, biasanya dianggap sebagai populasi terbatas. Jika Anda tidak memiliki data ini atau tidak dapat dikelola, pilih opsi populasi tidak terbatas.',
  },
  {
    question: 'Tingkat kepercayaan mana yang harus saya pilih?',
    answer:
      '95% adalah standar yang paling banyak digunakan dalam penelitian ilmiah, tesis, dan studi pasar. Hanya ubah nilai ini jika profesor, tutor, atau klien Anda memerlukan tingkat presisi yang berbeda (misalnya, 99%).',
  },
  {
    question: 'Mengapa alat ini menanyakan margin kesalahan?',
    answer:
      'Tidak ada sampel yang sempurna. Margin kesalahan menentukan jumlah ketidaktepatan yang bersedia Anda terima. Yang paling umum adalah 5%.',
  },
  {
    question: 'Proporsi yang diharapkan (p) mana yang harus saya gunakan jika saya tidak tahu apa-apa tentang populasi?',
    answer:
      'Biarkan nilai default: 50%. Dalam statistik, ini mewakili "skenario terburuk" karena memaksimalkan varians p(1-p), memastikan ukuran sampel Anda tidak pernah terlalu kecil dalam keadaan apa pun.',
  },
];

const howToData = [
  {
    name: 'Tentukan Populasi Anda',
    text: 'Tentukan apakah Anda mengetahui jumlah total kelompok yang akan dipelajari (Terbatas) atau lebih memilih perhitungan konservatif untuk kelompok yang sangat besar/tidak diketahui (Tidak Terbatas).',
  },
  {
    name: 'Sesuaikan Tingkat Kepercayaan Anda',
    text: 'Pilih 95% (disarankan), atau masukkan nilai khusus di menu tarik-turun.',
  },
  {
    name: 'Atur Margin Kesalahan',
    text: 'Tentukan toleransi kesalahan. Ingatlah bahwa menguranginya dari 5% menjadi 2% akan melipatgandakan jumlah survei yang perlu Anda lakukan secara drastis.',
  },
  {
    name: 'Salin Hasilnya',
    text: 'Lihat panel tengah dan langsung salin Teks Justifikasi yang dibuat secara otomatis untuk ditambahkan ke tesis atau laporan Anda.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    { name: 'Penentuan ukuran sampel - Wikipedia', url: 'https://id.wikipedia.org/wiki/Sampel_(statistika)' },
    { name: 'Perhitungan ukuran sampel - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator Ukuran Sampel Online: Panduan Definitif' },
    {
      type: 'paragraph',
      html: 'Menentukan jumlah orang yang tepat untuk disurvei adalah salah satu langkah paling kritis dalam penelitian, studi pasar, atau proyek akademik apa pun. <strong>Kalkulator Ukuran Sampel</strong> menyediakan alat yang presisi, cepat, dan mudah digunakan bagi mahasiswa, peneliti, dan profesional pemasaran untuk menghitung jumlah individu yang tepat yang dibutuhkan untuk hasil yang signifikan secara statistik.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Kepercayaan Standar', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Margin Kesalahan', icon: 'mdi:target' },
        { value: 'Cepat', label: 'Perhitungan Real-Time', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Mengapa Menghitung Ukuran Sampel Sangat Mendasar?' },
    {
      type: 'paragraph',
      html: 'Dalam statistik, jarang sekali mungkin untuk mempelajari seluruh populasi. Solusinya adalah dengan memilih subkelompok representatif yang dikenal sebagai sampel. Jika sampel terlalu kecil, hasilnya akan bias. Jika terlalu besar, Anda akan membuang waktu dan uang secara tidak perlu.',
    },
    { type: 'title', level: 2, text: 'Dua Mode Perhitungan: Populasi Terbatas dan Tidak Terbatas' },
    {
      type: 'paragraph',
      html: 'Kalkulator kami beradaptasi dengan situasi Anda dengan menawarkan dua mode perhitungan yang berbeda.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Populasi Terbatas (Diketahui)',
          description: 'Jumlah total individu yang tepat diketahui.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Membutuhkan nilai N',
            'Menerapkan faktor koreksi',
            'Mengurangi ukuran sampel akhir',
          ],
        },
        {
          title: 'Populasi Tidak Terbatas (Tidak Diketahui)',
          description: 'Ukuran total tidak diketahui, tidak dapat dikelola, atau lebih besar dari 100.000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Tidak perlu mengetahui N',
            'Rumus klasik standar',
            'Skenario paling konservatif dan aman',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Memahami Parameter Panel Kontrol' },
    {
      type: 'table',
      headers: ['Parameter', 'Deskripsi', 'Rekomendasi Standar'],
      rows: [
        ['<strong>Tingkat Kepercayaan (Z)</strong>', 'Kepastian matematis bahwa sampel mewakili populasi.', 'Gunakan 95%.'],
        ['<strong>Margin Kesalahan (e)</strong>', 'Persentase penyimpangan yang ditoleransi dari kenyataan.', 'Gunakan 5%.'],
        ['<strong>Proporsi yang Diharapkan (p)</strong>', 'Probabilitas bahwa peristiwa yang dipelajari terjadi.', 'Gunakan 50% (memaksimalkan varians).'],
      ],
    },
    {
      type: 'tip',
      title: 'Waspadai Margin Kesalahan',
      html: 'Mengurangi margin kesalahan dari 5% menjadi 2% membutuhkan peningkatan ukuran sampel secara eksponensial. Periksa Grafik Sensitivitas di kalkulator sebelum memutuskan margin yang terlalu ketat.',
    },
    { type: 'title', level: 2, text: 'Rumus Matematika di Balik Perhitungan' },
    {
      type: 'list',
      items: [
        '<strong>Populasi Tidak Terbatas:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Nilai kritis yang diturunkan dari Tingkat Kepercayaan.',
        '<strong>p:</strong> Proporsi yang diharapkan (q adalah 1 - p).',
        '<strong>e:</strong> Margin kesalahan yang ditoleransi.',
      ],
    },
    { type: 'title', level: 2, text: 'Glosarium Cepat untuk Peneliti' },
    {
      type: 'glossary',
      items: [
        { term: 'Populasi (N)', definition: 'Kumpulan total elemen atau individu yang berbagi karakteristik yang menjadi subjek studi.' },
        { term: 'Sampel (n)', definition: 'Subset representatif yang dipilih dari total populasi.' },
        { term: 'Varians Maksimum', definition: 'Terjadi ketika p=0,5 (50%), memastikan sampel yang dihitung layak untuk kasus yang paling beragam.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameter',
    labelPopType: 'Tipe Populasi',
    btnFinite: 'Terbatas (Diketahui)',
    btnInfinite: 'Tidak Terbatas (Tidak Diketahui)',
    labelPopSize: 'Ukuran Populasi',
    labelConfLevel: 'Tingkat Kepercayaan (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Khusus',
    labelConfCustom: 'Tingkat Keperc. Khusus (%)',
    labelErrorMargin: 'Margin Kesalahan (%)',
    labelProportion: 'Proporsi Diharapkan',
    hintProportion: '50% adalah "skenario terburuk" yang memberikan sampel terbesar dan teraman.',
    hintProportionError: 'Proporsi 0% atau 100% membatalkan sampel. Kami menyarankan menggunakan nilai antara 5% dan 95%.',
    labelSampleSize: 'Ukuran yang Disarankan',
    labelSampleSub: 'survei dibutuhkan',
    labelZValue: 'Nilai Kritis',
    labelReport: 'Teks untuk laporan Anda',
    defaultJustification: 'Untuk populasi 10.000 orang, dengan tingkat kepercayaan 95% dan margin kesalahan 5%, ukuran sampel representatif adalah 370 individu.',
    btnCopy: 'Salin Teks',
    btnCopied: 'Disalin!',
    labelChart: 'Sensitivitas: Ukuran vs Margin Kesalahan',
    chartDesc: 'Amati bagaimana ukuran sampel melonjak saat mencoba mengurangi margin kesalahan.',
    justForFinite: 'Untuk populasi sebanyak',
    justPersons: 'orang',
    justForInfinite: 'Untuk populasi tidak terbatas',
    justConfidence: ', dengan tingkat kepercayaan',
    justError: '% dan margin kesalahan',
    justResultIs: '%, ukuran sampel representatif adalah',
    justUnit: 'individu.',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
  },
};
