import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'kalkulator-uji-hipotesis-ab-test';
const title = 'Kalkulator Uji Hipotesis AB Test Online';
const description =
  'Bandingkan dua grup (A dan B) untuk menentukan apakah terdapat perbedaan yang signifikan secara statistik dalam konversi atau rata-rata mereka. Hitung P-Value secara instan.';

const faqData = [
  {
    question: 'Apa arti dari P-Value?',
    answer:
      'P-Value memberi tahu Anda probabilitas bahwa perbedaan kinerja antara Grup A dan Grup B adalah murni kebetulan. Jika P-Value berada di bawah tingkat signifikansi (biasanya 0,05), itu berarti Anda dapat yakin 95% bahwa perbedaan struktural tersebut nyata.',
  },
  {
    question: 'Apa itu Tingkat Signifikansi (Alfa atau α)?',
    answer:
      'Ini adalah tingkat ketatnya ujian Anda. Alfa 0,05 mengharuskan Anda yakin 95% bahwa Grup B berbeda dari A untuk menganggapnya valid. Alfa 0,01 mengharuskan ketajaman yang jauh lebih tinggi (99%). Konvensi akademis dan industri adalah menggunakan 0,05 secara default.',
  },
  {
    question: 'Apa perbedaan antara uji proporsi dan uji rata-rata?',
    answer:
      'Uji proporsi mengukur variabel keberhasilan atau kegagalan dikotomis: klik, pembukaan email, konversi. Uji rata-rata membandingkan perilaku kuantitatif yang terakumulasi: rata-rata pengeluaran keranjang belanja atau hari pemulihan klinis.',
  },
  {
    question: 'Bagaimana jika sampel saya lebih kecil dari 30 subjek?',
    answer:
      'Aproksimasi distribusi normal menjadi kurang presisi dengan sampel kecil tersebut (teorema limit pusat). Untuk keputusan klinis kami menyarankan penggunaan teknik probabilitas eksak yang lebih konservatif atau uji t Student yang disesuaikan.',
  },
];

const howToData = [
  {
    name: 'Pilih Tujuan Numerik',
    text: 'Di panel konfigurasi, tentukan apakah Anda ingin mengukur tingkat Konversi (proporsi sederhana) atau rata-rata umum seperti nominal (Rata-rata).',
  },
  {
    name: 'Masukkan Data Kontrol (Grup A)',
    text: 'Isi jumlah kasus yang dikirim/terpapar dan berapa banyak keberhasilan yang mereka miliki (atau rata-rata mereka).',
  },
  {
    name: 'Masukkan Data Eksperimental (Grup B)',
    text: 'Masukkan angka untuk inisiatif atau varian baru yang sedang Anda ukur.',
  },
  {
    name: 'Catat Putusan Statistik',
    text: 'Lihatlah Hakim Signifikansi dan salin pembenaran yang dihasilkan tentang apakah peningkatan nyata (Lift) menolak asumsi acak.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    { name: 'Pengujian hipotesis statistik - Wikipedia', url: 'https://id.wikipedia.org/wiki/Uji_hipotesis' },
    { name: 'Kalkulator A/B Testing - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator Uji Hipotesis AB Test Online' },
    {
      type: 'paragraph',
      html: 'Mengambil keputusan berdasarkan intuisi sangatlah berbahaya; mengambil keputusan berdasarkan data murni adalah jalan menuju kesuksesan. <strong>Kalkulator Uji Hipotesis (A/B Test)</strong> adalah alat definitif bagi analis, pemasar, dan peneliti yang perlu memvalidasi apakah perbedaan antara dua kelompok signifikan secara statistik atau sekadar hasil dari kebetulan.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-Value', label: 'Hakim Terakhir', icon: 'mdi:scale-balance' },
        { value: 'Lokal', label: 'Tanpa Unggah Data', icon: 'mdi:shield-check' },
        { value: 'Instan', label: 'Grafik Asli', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Mengapa Kami Memisahkan Pengujian menjadi Konversi dan Rata-rata?' },
    {
      type: 'paragraph',
      html: 'Tergantung pada sifat studi Anda, metrik keberhasilan akan berubah. Alat kami secara asli mendukung dua jenis uji statistik yang paling banyak digunakan di industri.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Uji Proporsi (Konversi)',
          description: 'Membandingkan persentase atau tingkat keberhasilan antara dua kelompok.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideal untuk Pemasaran (Klik, Penjualan, Langganan)',
            'Menggunakan Total Kasus (n) dan Keberhasilan (x)',
            'Menerapkan Z-Test dua proporsi',
          ],
        },
        {
          title: 'Uji Rata-rata Kontinu',
          description: 'Membandingkan nilai numerik rata-rata antara dua kelompok.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideal untuk Rata-rata Belanja, Waktu di Situs, atau Uji Klinis',
            'Menggunakan Rata-rata (μ) dan Standar Deviasi (σ)',
            'Menerapkan aproksimasi normal yang kuat untuk sampel (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Cara Menginterpretasikan Hasil: P-Value Adalah Panduan Anda' },
    {
      type: 'paragraph',
      html: 'Jantung dari kalkulator ini adalah <strong>P-Value</strong> yang terkenal. Angka ini memberi tahu Anda probabilitas telah memperoleh perbedaan yang diamati ini jika Hipotesis Nol (yang menyatakan bahwa "kedua kelompok adalah sama") adalah benar.',
    },
    {
      type: 'table',
      headers: ['P-Value Teramati', 'Makna Praktis', 'Keputusan Standar'],
      rows: [
        ['<strong>Lebih dari 0,05</strong>', 'Perbedaan kecil dibandingkan varians. Kebetulan bisa menjelaskannya.', '<strong>JANGAN Tolak</strong> Hipotesis Nol. Tidak ada perbaikan nyata yang terbukti.'],
        ['<strong>Kurang dari 0,05</strong>', 'Sangat tidak mungkin kebetulan menyebabkan perbedaan seperti itu. Ada efek nyata.', '<strong>Tolak</strong> Hipotesis Nol. Varian B lebih baik!'],
        ['<strong>Kurang dari 0,01</strong>', 'Bukti yang mendukung perubahan sangat kuat (kepercayaan 99%).', '<strong>Tolak dengan tegas</strong>. Keberhasilan gemilang dari eksperimen.'],
      ],
    },
    {
      type: 'tip',
      title: 'Koreksi untuk Sampel Kecil',
      html: 'Jika grup Anda memproses kurang dari 30 subjek, alat ini akan menampilkan peringatan "Sampel Kecil". Dalam skenario batas ini, aproksimasi normal klasik kehilangan presisi; kami menyarankan penggunaan uji t Student eksak atau alat Fisher.',
    },
    { type: 'title', level: 2, text: 'Glosarium A/B Testing' },
    {
      type: 'glossary',
      items: [
        { term: 'Grup Kontrol (A)', definition: 'Versi asli atau baseline yang akan Anda gunakan untuk mengukur eksperimen Anda.' },
        { term: 'Varian (B)', definition: 'Versi modifikasi baru yang Anda harapkan dapat meningkatkan metrik.' },
        { term: 'Lift (Peningkatan Relatif)', definition: 'Persentase perubahan antara kinerja Grup B relatif terhadap baseline Grup A.' },
        { term: 'Tingkat Signifikansi (α)', definition: 'Ambang batas kesalahan yang bersedia Anda terima (biasanya 5% atau 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parameter',
    btnConversions: 'Konversi',
    btnMeans: 'Rata-rata',
    labelGroupA: 'Grup A (Kontrol)',
    labelGroupB: 'Grup B (Varian)',
    labelTotalCases: 'Total Kasus',
    labelSuccesses: 'Keberhasilan atau Konversi',
    labelMean: 'Rata-rata',
    labelStdDev: 'Standar Deviasi',
    labelAlpha: 'Tingkat Signifikansi',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    labelDirection: 'Arah Pengujian',
    btn2Tails: '2 Ekor (Diff.)',
    btn1Tail: '1 Ekor (B > A)',
    alertTitle: 'Peringatan Keandalan Statistik',
    alertBody: 'Anda menggunakan ukuran sampel yang sangat kecil atau nilai ekstrem (0 keberhasilan). Estimasi mungkin tidak representatif untuk dunia nyata.',
    alertLinkText: 'Hitung ukuran sampel ideal Anda di sini',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-Value',
    sigDescInitial: 'Ada cukup bukti untuk menolak hipotesis nol',
    labelLift: 'Analisis Peningkatan (Lift)',
    labelLiftText: 'peningkatan relatif terhadap Grup A',
    labelConfidencePrefix: 'Kepercayaan statistik:',
    labelDistributions: 'Distribusi Probabilitas',
    chartDesc: 'Amati tumpang tindihnya: semakin sedikit tumpang tindih berarti semakin besar kepastian bahwa perbedaan tersebut nyata dan bukan hasil dari kebetulan.',
    labelReport: 'Teks untuk laporan Anda',
    defaultJustification: 'Setelah menganalisis X subjek, Grup B menunjukkan peningkatan Y% dengan kepercayaan statistik Z% (p=0,00).',
    btnCopy: 'Salin Teks',
    btnCopied: 'Disalin!',
    sigText: 'Ada cukup bukti untuk menolak hipotesis nol.',
    noSigText: 'Perbedaan tidak signifikan secara statistik.',
    justIntro: 'Setelah menganalisis total',
    justSamples: ' sampel, Grup B menunjukkan perubahan sebesar ',
    justRespectTo: '% relatif terhadap Grup A.',
    justWithConfidence: ' Dengan kepercayaan statistik sebesar ',
    justDiff: ', perbedaan empiris ',
    justSig: 'ADALAH signifikan secara statistik',
    justNoSig: 'TIDAK signifikan secara statistik',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
  },
};
