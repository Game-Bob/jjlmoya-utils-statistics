import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'kalkulator-uji-independensi-chi-square';
const title = 'Kalkulator Uji Independensi Chi Square Online';
const description =
  'Tentukan apakah terdapat hubungan statistik antara dua variabel kategorikal. Isi matriks frekuensi teramati dan hitung P-Value secara instan.';

const faqData = [
  {
    question: 'Apa itu uji independensi Chi-Square?',
    answer:
      'Ini adalah uji statistik yang digunakan untuk mengevaluasi probabilitas bahwa asosiasi yang teramati antara dua variabel kategorikal atau nominal disebabkan oleh kebetulan. Contohnya: apakah hidangan penutup favorit seseorang berhubungan dengan wilayah tempat tinggal mereka.',
  },
  {
    question: "Untuk apa koefisien Cramér's V digunakan?",
    answer:
      "Sementara Chi-square memberi tahu Anda apakah ada 'suatu' hubungan, Cramér's V memberi tahu Anda 'seberapa kuat' hubungan tersebut. Nilainya berkisar dari 0 (independensi total) hingga 1 (dependensi matematika absolut). Nilai di atas 0,5 dianggap sangat kuat secara sosiologis.",
  },
  {
    question: 'Apa yang terjadi jika Frekuensi Harapan saya sangat rendah?',
    answer:
      'Aproksimasi matematika Chi-Square kehilangan keandalan jika frekuensi harapan kurang dari 5 di lebih dari 20% sel. Alat kami akan memperingatkan Anda secara visual jika ada risiko. Dalam hal ini, disarankan untuk menggabungkan kategori yang meragukan.',
  },
  {
    question: 'Dapatkah saya menggunakan ini untuk survei kualitatif?',
    answer:
      'Tentu saja ya. Ini adalah utilitas utama untuk sosiologi dan riset pasar, di mana Anda jarang berurusan dengan angka desimal melainkan dengan kategori yang saling eksklusif (Lajang/Menikah, Ya/Tidak, Utara/Selatan).',
  },
];

const howToData = [
  {
    name: 'Tentukan Matriks',
    text: 'Pertama, pilih ukuran Tabel Kontingensi Anda berdasarkan berapa banyak pilihan yang dimiliki Variabel A (baris) dan Variabel B (kolom) Anda.',
  },
  {
    name: 'Masukkan Data Teramati',
    text: 'Ganti angka dasar dengan mengisi tabel pertama dengan hitungan tepat dari data asli Anda.',
  },
  {
    name: 'Tinjau Residual',
    text: 'Amati sel mana di tabel kami yang menyala (hijau terang atau merah). Di sanalah letak anomali yang menyebabkan variabel tidak independen.',
  },
  {
    name: 'Salin Kesimpulan',
    text: 'Tempelkan ke dalam tesis atau laporan proyek Anda teks yang dihasilkan secara otomatis dengan dukungan matematika dari P-value.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    {
      name: 'Uji chi-kuadrat - Wikipedia',
      url: 'https://id.wikipedia.org/wiki/Uji_chi-kuadrat',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Kalkulator Uji Independensi Chi-Square',
    },
    {
      type: 'paragraph',
      html: 'Sementara alat klasik seperti A/B Test atau Statistik Deskriptif bekerja sangat baik dengan angka kontinu (rata-rata, pendapatan, berat), dunia nyata penuh dengan data kategorikal (warna, merek, tingkat kepuasan). <strong>Kalkulator Independensi Chi-Square</strong> adalah uji "Raja" untuk menentukan secara analitis apakah dua variabel kualitatif terhubung secara statistik atau apakah mereka bervariasi secara independen satu sama lain.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabel', label: 'Dinamis hingga 3×3', icon: 'mdi:table' },
        { value: "Cramér's V", label: 'Kekuatan Asosiasi', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Residual & Deviasi', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Untuk apa sebenarnya Statistik Chi-Square (χ²) digunakan?',
    },
    {
      type: 'paragraph',
      html: 'Uji Independensi Chi-Square membandingkan <em>Frekuensi Teramati</em> (angka sebenarnya yang telah Anda ukur dan kumpulkan) dengan <em>Frekuensi Harapan</em> (hitungan yang kita harapkan di setiap sel jika tidak ada interaksi sama sekali antar variabel).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Variabel Dependen (Hubungan Ada)',
          description: 'Proporsi satu kategori sangat bervariasi tergantung pada kategori lainnya.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Contoh: Pengunjung seluler lebih menyukai Desain A, tetapi pengguna PC lebih menyukai Desain B.',
            'Nilai Chi-Square (χ²) melonjak dan P-Value turun.',
            "Cramér's V menunjukkan kekuatannya (misalnya Kuat > 0,5).",
          ],
        },
        {
          title: 'Variabel Independen (Kebetulan)',
          description: 'Proporsi tetap stabil di semua level.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Contoh: Warna mata pelanggan tidak memengaruhi merek mobil yang mereka beli.',
            'Chi-Square sangat kecil dan P-Value lebih besar dari 0,05.',
            'Hipotesis Nol tidak dapat ditolak.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: "Cramér's V: Memahami Kekuatan Hubungan",
    },
    {
      type: 'paragraph',
      html: "Mendapatkan P-Value yang sangat rendah tidak berarti variabel terhubung secara 'intens'; itu hanya menunjukkan bahwa kebetulan tidak mungkin menjadi penyebabnya (mungkin karena Anda memiliki puluhan ribu kasus nyata). Untuk mengukur 'ukuran efek', kami secara otomatis menyertakan <strong>Koefisien Cramér's V</strong>.",
    },
    {
      type: 'table',
      headers: ['Kalkulator (Nilai V)', 'Peringkat Analitis', 'Terjemahan'],
      rows: [
        [
          '<strong>0,00 hingga 0,10</strong>',
          'Asosiasi Nol / Trivial',
          'Secara teoritis dependen, tetapi secara tidak terlihat dan tidak berguna untuk tujuan bisnis.',
        ],
        [
          '<strong>0,11 hingga 0,30</strong>',
          'Asosiasi Lemah',
          'Terdapat sedikit hubungan, tetapi banyak faktor eksternal lainnya yang lebih berpengaruh.',
        ],
        [
          '<strong>0,31 hingga 0,50</strong>',
          'Asosiasi Moderat',
          'Kedua karakteristik saling memengaruhi secara nyata.',
        ],
        [
          '<strong>Di atas 0,50</strong>',
          'Asosiasi Kuat',
          'Hubungan yang sangat jelas. Mengetahui variabel A memprediksi variabel B dengan sangat baik.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Kondisi Kelayakan Matematika',
      html: "Waspadai sel yang kosong! Agar aproksimasi chi-square Pearson tetap kuat di bawah kurva lonceng, secara metodologi disyaratkan bahwa setidaknya 80% dari <em>Frekuensi Harapan</em> (bukan yang teramati) lebih besar dari 5, dan tidak ada sel yang di bawah 1. Jika kondisi ini tidak terpenuhi, indikator peringatan kami akan muncul, menyarankan Anda untuk menggabungkan kategori.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Heatmap Residual Bawaan',
    },
    {
      type: 'paragraph',
      html: 'Untuk meningkatkan UX dan memfasilitasi kesimpulan laporan, matriks kami secara otomatis akan mewarnai latar belakang sel berdasarkan residual standar (deviasi) mereka:<br/><br/><strong>Nuansa hijau:</strong> Sel memiliki <em>lebih banyak keberhasilan</em> daripada yang diharapkan secara matematis.<br/><strong>Nuansa merah:</strong> Sel sangat "kosong" dibandingkan dengan norma yang diharapkan.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosarium Chi-Square',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Frekuensi Teramati',
          definition: 'Hitungan tepat seperti yang Anda hitung secara fisik di lab atau survei.',
        },
        {
          term: 'Frekuensi Harapan',
          definition: 'Perhitungan teoritis yang dihasilkan dari perkalian total baris dengan total kolom dibagi dengan total keseluruhan.',
        },
        {
          term: 'Derajat Kebebasan (df)',
          definition: 'Kuantitas geometris dari data bebas. Ditemukan dengan mengurangi 1 dari jumlah baris dan kolom, lalu mengalikannya.',
        },
        {
          term: 'Residual Standar',
          definition: 'Perbedaan yang dinormalisasi antara yang teramati dan yang diharapkan. Mengukur sel mana yang paling "mendorong" penemuan tersebut.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Pengaturan',
    labelTableSize: 'Ukuran Tabel (Baris × Kolom)',
    labelAlpha: 'Tingkat Signifikansi (α)',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    infoText:
      "Secara otomatis menghitung frekuensi teoritis, nilai χ², dan kekuatan asosiasi koefisien Cramér's V menggunakan inferensi lokal murni.",
    labelObserved: 'Frekuensi Teramati (Input)',
    btnShowExpected: 'Tampilkan Frekuensi Harapan (H₀)',
    expectedDesc:
      'Ini adalah nilai yang akan ada di setiap sel jika tidak ada hubungan sama sekali antara kedua variabel (distribusi acak).',
    alertTitle: 'Peringatan Statistik (Sel < 5)',
    alertBody:
      'Terdapat frekuensi harapan yang sangat rendah. Aproksimasi χ² mungkin tidak dapat diandalkan. Disarankan untuk menggabungkan kategori atau menggunakan uji eksak Fisher.',
    labelPValue: 'P-Value (p)',
    sigDescInitial: 'Hubungan signifikan ada',
    labelGlobalStats: 'Statistik Global',
    labelChiSquareStat: 'Chi-Square (χ²)',
    labelDegrees: 'Derajat (df)',
    labelCramer: "Kekuatan Asosiasi (Cramér's V)",
    labelVisualization: 'Visualisasi Residual (Teramati vs Harapan)',
    heatmapInfo: 'Sel input tabel diwarnai sesuai dengan variasi residual.',
    labelReport: 'Teks untuk laporan Anda',
    defaultJustification:
      'Setelah menganalisis total N observasi, kami menemukan nilai χ²(df) = X. Dengan p-value sebesar P, disimpulkan bahwa terdapat dependensi yang signifikan.',
    btnCopy: 'Salin Teks',
    rowLabel: 'Baris',
    colLabel: 'Kol',
    totalLabel: 'TOTAL',
    cramerNull: 'Tidak ada',
    cramerWeak: 'Lemah',
    cramerModerate: 'Sedang',
    cramerStrong: 'Kuat',
    sigText: 'Terdapat asosiasi signifikan (dependensi).',
    noSigText: 'Tidak ada bukti hubungan (independensi).',
    chartLegendObs: 'Baris Teramati',
    chartLegendExp: 'Harapan',
    btnCopied: 'Disalin!',
    justificationIntro: 'Setelah menganalisis',
    justificationTableOf: 'kasus dalam tabel',
    justificationObtained: ', kami memperoleh',
    justificationPAt: '. Dievaluasi pada tingkat α=',
    justificationConcluded: ', secara empiris disimpulkan bahwa',
    justificationSig: "TERDAPAT ASOSIASI YANG KUAT antara variabel (Cramér's V:",
    justificationNoSig: 'TIDAK TERDAPAT asosiasi yang signifikan secara statistik',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
  },
};
