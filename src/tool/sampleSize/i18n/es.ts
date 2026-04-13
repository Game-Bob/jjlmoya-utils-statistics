import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'calculadora-tamano-muestra';
const title = 'Calculadora de Tamano de Muestra Online';
const description =
  'Calcula el número exacto de personas necesarias para tu estudio. Incluye opciones para población finita o infinita, niveles de confianza y margen de error ajustables.';

const faqData = [
  {
    question: '¿Qué es el tamaño de la población?',
    answer:
      'Es el número total de personas que conforman el grupo que quieres estudiar o encuestar. Si es menor a 100.000, suele considerarse población finita. Si no tienes este dato o es inabarcable, marca la opción de población infinita.',
  },
  {
    question: '¿Qué nivel de confianza debo elegir?',
    answer:
      'El 95% es el estándar más utilizado en investigaciones científicas, tesis (TFG/TFM) y estudios de mercado. Solo cambia este valor si tu profesor, tutor o cliente te exige una precisión diferente (por ejemplo, 99%).',
  },
  {
    question: '¿Por qué el programa me pide un margen de error?',
    answer:
      'Ninguna muestra es perfecta. El margen de error define la cantidad de imprecisión que estás dispuesto a aceptar. Lo más habitual es usar un 5%.',
  },
  {
    question: '¿Qué proporción esperada (p) debo poner si no sé nada sobre la población?',
    answer:
      'Deja el valor por defecto: 50%. En estadística, esto representa el "peor escenario posible" porque maximiza la varianza p(1-p), lo que asegura que tu tamaño de muestra no se quede corto bajo ninguna circunstancia.',
  },
];

const howToData = [
  {
    name: 'Define tu Población',
    text: 'Indica si conoces el número total del grupo a estudiar (Finita) o si prefieres un cálculo conservador para grupos muy grandes/desconocidos (Infinita).',
  },
  {
    name: 'Ajusta tu Nivel de Confianza',
    text: 'Selecciona 95% (recomendado), o introduce un valor personalizado en el menú desplegable.',
  },
  {
    name: 'Fija el Margen de Error',
    text: 'Especifica la tolerancia al error. Recuerda que bajarlo del 5% al 2% multiplica drásticamente el número de encuestas que deberás realizar.',
  },
  {
    name: 'Copia el Resultado',
    text: 'Mira el panel central y copia directamente el Texto de Justificación autogenerado para añadirlo a tu Tesis o informe.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía y Referencias',
  bibliography: [
    { name: 'Sample size determination - Wikipedia', url: 'https://en.wikipedia.org/wiki/Sample_size_determination' },
    { name: 'Cálculo del tamaño de la muestra - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Tamano de Muestra Online: Guia Definitiva' },
    {
      type: 'paragraph',
      html: 'Determinar el número adecuado de personas a encuestar es uno de los pasos más críticos en cualquier investigación o proyecto académico. La <strong>Calculadora de Tamaño de Muestra</strong> ofrece a estudiantes, investigadores y profesionales del marketing una herramienta precisa, rápida y fácil de usar para calcular la cantidad exacta de individuos necesarios para que sus resultados sean estadísticamente significativos.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Confianza Estándar', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Margen de Error', icon: 'mdi:target' },
        { value: 'Rápido', label: 'Cálculo en Tiempo Real', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: '¿Por qué es fundamental calcular el tamaño de la muestra?' },
    {
      type: 'paragraph',
      html: 'En estadística, rara vez es posible estudiar a toda una población. La solución es seleccionar un subgrupo representativo conocido como muestra. Si la muestra es demasiado pequeña, los resultados estarán sesgados. Si es demasiado grande, estarás malgastando tiempo y dinero innecesariamente.',
    },
    { type: 'title', level: 2, text: 'Los dos modos de cálculo: Población Finita e Infinita' },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora se adapta a tu situación ofreciendo dos modos de cálculo diferenciados.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Población Finita (Conocida)',
          description: 'Se conoce exactamente el número total de individuos.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Requiere el valor N',
            'Aplica factor de corrección',
            'Reduce el tamaño de muestra final',
          ],
        },
        {
          title: 'Población Infinita (Desconocida)',
          description: 'Tamaño total desconocido, inabarcable o superior a 100.000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'No requiere conocer N',
            'Fórmula clásica estandarizada',
            'Escenario más conservador y seguro',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Entendiendo los parámetros del panel de control' },
    {
      type: 'table',
      headers: ['Parámetro', 'Descripción', 'Recomendación Estándar'],
      rows: [
        ['<strong>Nivel de Confianza (Z)</strong>', 'Certeza matemática de que la muestra representa a la población.', 'Usar el 95%.'],
        ['<strong>Margen de Error (e)</strong>', 'Porcentaje de desviación tolerada respecto a la realidad.', 'Usar el 5%.'],
        ['<strong>Proporción Esperada (p)</strong>', 'Probabilidad de que ocurra el evento estudiado.', 'Usar 50% (maximiza varianza).'],
      ],
    },
    {
      type: 'tip',
      title: 'Atención con el Margen de Error',
      html: 'Reducir el margen de error del 5% al 2% exige un aumento exponencial en el tamaño de la muestra. Verifica el Gráfico de Sensibilidad en la calculadora antes de decidir un margen demasiado estricto.',
    },
    { type: 'title', level: 2, text: 'La fórmula matemática detrás del cálculo' },
    {
      type: 'list',
      items: [
        '<strong>Población Infinita:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Valor crítico derivado del Nivel de Confianza.',
        '<strong>p:</strong> Proporción esperada (q es 1 - p).',
        '<strong>e:</strong> Margen de error tolerado.',
      ],
    },
    { type: 'title', level: 2, text: 'Glosario rápido para investigadores' },
    {
      type: 'glossary',
      items: [
        { term: 'Población (N)', definition: 'Conjunto total de elementos o individuos que comparten una característica y son objeto de estudio.' },
        { term: 'Muestra (n)', definition: 'Subconjunto representativo seleccionado de la población total.' },
        { term: 'Varianza Máxima', definition: 'Se da cuando p=0.5 (50%), asegurando que la muestra calculada sea viable para el caso más diverso posible.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parámetros',
    labelPopType: 'Tipo de Población',
    btnFinite: 'Finita (Conocida)',
    btnInfinite: 'Infinita (Desconocida)',
    labelPopSize: 'Tamaño de la Población',
    labelConfLevel: 'Nivel de Confianza (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Personalizado',
    labelConfCustom: 'Confianza Personalizada (%)',
    labelErrorMargin: 'Margen de Error (%)',
    labelProportion: 'Proporción Esperada',
    hintProportion: 'El 50% es el "peor caso" que da la muestra más grande y segura.',
    hintProportionError: 'Una proporción de 0% o 100% anula la muestra. Sugerimos usar valores entre 5% y 95%.',
    labelSampleSize: 'Tamaño Sugerido',
    labelSampleSub: 'encuestas necesarias',
    labelZValue: 'Valor Crítico',
    labelReport: 'Texto para tu informe',
    defaultJustification: 'Para una población de 10.000 personas, con un nivel de confianza del 95% y un margen de error del 5%, el tamaño de muestra representativo es de 370 individuos.',
    btnCopy: 'Copiar Texto',
    btnCopied: '¡Copiado!',
    labelChart: 'Sensibilidad: Tamaño vs Margen de Error',
    chartDesc: 'Observa cómo se dispara el tamaño de la muestra al intentar reducir el margen de error.',
    justForFinite: 'Para una población de',
    justPersons: 'personas',
    justForInfinite: 'Para una población infinita',
    justConfidence: ', con un nivel de confianza del',
    justError: '% y un margen de error del',
    justResultIs: '%, el tamaño de muestra representativo es de',
    justUnit: 'individuos.',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografía y Referencias',
  },
};
