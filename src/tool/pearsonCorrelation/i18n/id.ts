import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'kalkulator-korelasi-pearson';
const title = 'Kalkulator Korelasi Pearson Online';
const description =
  'Hitung koefisien r Pearson, koefisien determinasi r², dan garis regresi linier dari pasangan data. Alat 100% pribadi dan lokal.';

const faqData = [
  {
    question: 'Apa itu koefisien korelasi Pearson?',
    answer:
      'Ini adalah ukuran statistik yang mengukur kekuatan dan arah hubungan linier antara dua variabel kuantitatif. Nilainya berkisar dari -1 (korelasi negatif sempurna) hingga 1 (korelasi positif sempurna), dengan 0 menunjukkan tidak ada hubungan linier.',
  },
  {
    question: 'Dapatkah saya menempelkan data langsung dari Excel?',
    answer:
      'Ya, kalkulator kami dioptimalkan untuk menafsirkan data yang disalin dan ditempel dari Excel, Google Sheets, atau file CSV. Ini secara otomatis mendeteksi kolom dan membersihkan karakter non-numerik seperti simbol mata uang atau persentase.',
  },
  {
    question: 'Mengapa nilai r rendah jika data saya tampak berhubungan?',
    answer:
      'Koefisien Pearson hanya mendeteksi hubungan linier. Jika data Anda memiliki hubungan melengkung (seperti parabola atau logaritmik), koefisien Pearson mungkin sangat rendah meskipun ada hubungan yang jelas antara variabel-variabel tersebut.',
  },
  {
    question: 'Apa arti r² dalam kalkulator ini?',
    answer:
      'Ini adalah koefisien determinasi. Ini mewakili proporsi varians dalam variabel dependen yang dapat diprediksi dari variabel independen. Misalnya, r² sebesar 0,85 menunjukkan bahwa 85% variabilitas dijelaskan oleh model linier.',
  },
];

const howToData = [
  {
    name: 'Persiapan Data',
    text: 'Siapkan pasangan nilai Anda (X dan Y). Anda bisa menggunakannya dalam file Excel atau hanya dalam daftar teks.',
  },
  {
    name: 'Input Data',
    text: 'Tempelkan data Anda di area teks kalkulator. Pastikan setiap pasangan nilai berada di baris baru.',
  },
  {
    name: 'Konfigurasi',
    text: 'Pilih pemisah desimal (titik atau koma) yang digunakan dalam data Anda untuk menghindari kesalahan perhitungan.',
  },
  {
    name: 'Analisis Hasil',
    text: 'Tinjau nilai r secara instan, interpretasinya, dan amati diagram sebar untuk mengonfirmasi tren.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Bibliografi & Referensi',
  bibliography: [
    { name: 'Koefisien korelasi Pearson - Wikipedia', url: 'https://id.wikipedia.org/wiki/Koefisien_korelasi_Pearson' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: "Interpretation of Pearson's Correlation Coefficient", url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator Korelasi Pearson Online: Panduan Lengkap' },
    {
      type: 'paragraph',
      html: '<strong>Koefisien korelasi Pearson</strong> (r) adalah alat statistik standar untuk mengukur bagaimana dua variabel numerik berhubungan satu sama lain secara linier. Baik untuk tugas akademik, analisis pasar, atau penelitian ilmiah, memahami kekuatan data Anda sangatlah penting.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Hubungan Total', icon: 'mdi:trending-up' },
        { value: '0', label: 'Independensi', icon: 'mdi:graph-outline' },
        { value: 'Lokal', label: '100% Privasi', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Untuk apa koefisien r Pearson digunakan?' },
    {
      type: 'paragraph',
      html: 'Indeks Pearson mengungkapkan apakah ada tren: ketika satu variabel meningkat, apakah yang lain juga meningkat (<strong>korelasi positif</strong>) atau menurun (<strong>korelasi negatif</strong>)? Alat ini sangat penting untuk analisis data di Excel, SPSS, atau Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Korelasi Pearson',
          description: 'Ideal untuk variabel kuantitatif dengan hubungan linier yang jelas.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Data Numerik', 'Hubungan Linier', 'Membutuhkan Normalitas'],
        },
        {
          title: 'Korelasi Spearman',
          description: 'Lebih baik untuk data ordinal atau hubungan non-linier monoton.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Data Ordinal (Rank)', 'Hubungan Monoton', 'Tahan terhadap Outlier'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretasi Hasil: Tabel Nilai' },
    {
      type: 'table',
      headers: ['Rentang Nilai (r)', 'Kekuatan Hubungan', 'Makna Praktis'],
      rows: [
        [
          '<strong>0,90 hingga 1,00</strong>',
          'Sangat Kuat',
          'Hubungan yang hampir sempurna. Ideal untuk prediksi.',
        ],
        [
          '<strong>0,70 hingga 0,89</strong>',
          'Kuat',
          'Terdapat ketergantungan linier yang jelas antara variabel.',
        ],
        [
          '<strong>0,40 hingga 0,69</strong>',
          'Moderat',
          'Tren yang terlihat, tetapi dengan sebaran yang mencolok.',
        ],
        [
          '<strong>0,20 hingga 0,39</strong>',
          'Lemah',
          'Hubungan yang buruk; faktor lain memiliki pengaruh lebih besar.',
        ],
        [
          '<strong>0,00 hingga 0,19</strong>',
          'Nol/Dapat Diabaikan',
          'Tidak terdapat hubungan linier yang signifikan.',
        ],
      ],
    },
    { type: 'title', level: 2, text: 'Keuntungan dan batasan kalkulator ini' },
    {
      type: 'list',
      items: [
        '<strong>Tempel dari Excel/CSV:</strong> Tidak perlu memasukkan data satu per satu.',
        '<strong>Diagram Sebar Instan</strong> dengan garis regresi.',
        '<strong>100% Privasi:</strong> Data Anda tidak pernah keluar dari PC Anda.',
      ],
    },
    {
      type: 'list',
      items: [
        'Hanya mendeteksi hubungan linier (bukan melengkung).',
        'Sensitivitas tinggi terhadap nilai ekstrim (outlier).',
        'Membutuhkan setidaknya 2 pasangan data yang valid.',
      ],
    },
    {
      type: 'tip',
      title: 'Tips Ahli',
      html: 'Sebelum mempercayai nilai r begitu saja, selalu lihat <strong>Diagram Sebar</strong>. Terkadang koefisien yang tinggi dapat disebabkan oleh satu outlier, atau koefisien yang rendah dapat menyembunyikan hubungan melengkung yang sangat kuat yang tidak dapat dideteksi oleh Pearson.',
    },
    { type: 'title', level: 2, text: 'Glosarium Statistik', },
    {
      type: 'glossary',
      items: [
        { term: 'Kovarians', definition: 'Ukuran seberapa banyak dua variabel acak berubah bersama.' },
        { term: 'Regresi Linier', definition: 'Model matematika yang digunakan untuk mendekati hubungan ketergantungan antar variabel.' },
        { term: 'Koefisien r²', definition: 'Proporsi varians yang dapat diprediksi dari variabel independen.' },
        { term: 'Diagram Sebar', definition: 'Grafik titik yang menunjukkan distribusi pasangan data pada suatu bidang.' },
      ],
    },
  ],
  ui: {
    headingData: 'Data CSV',
    btnLoadExample: 'Muat contoh',
    btnClear: 'Hapus data',
    placeholder: 'Tempel data Anda (X, Y) atau seret CSV...',
    labelDecimalSep: 'Sep. Desimal',
    optPoint: 'Titik (.)',
    optComma: 'Koma (,)',
    privacyBadge: 'Eksekusi lokal pribadi',
    labelR: 'Koefisien Pearson (r)',
    labelR2: 'Determinasi (r²)',
    labelN: 'Pasangan (n)',
    labelSlope: 'Kemiringan (m)',
    labelMeanXY: 'Rata-rata X | Y',
    labelWaiting: 'Menunggu data...',
    interpPerfectPos: 'Korelasi positif sempurna',
    interpPerfectNeg: 'Korelasi negatif sempurna',
    interpStrong: 'Korelasi kuat',
    interpModerate: 'Korelasi moderat',
    interpWeak: 'Korelasi lemah/nol',
    errorMsg: 'Masukkan setidaknya 2 pasangan data untuk grafik',
    btnCopyTitle: 'Salin hasil',
    btnDownloadTitle: 'Unduh grafik',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Bibliografi & Referensi',
  },
};
