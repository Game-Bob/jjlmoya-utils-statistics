import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'calculadora-estadistica-descriptiva';
const title = 'Calculadora de Estadística Descriptiva Online';
const description =
  'Calcula al instante todas las medidas de estadística descriptiva: media, mediana, moda, desviación típica, varianza, cuartiles, asimetría, curtosis y más. Pega tus datos y obtén resultados en tiempo real.';

const faqData = [
  {
    question: '¿Cuál es la diferencia entre desviación típica poblacional y muestral?',
    answer:
      'La desviación típica poblacional divide entre N (cuando se conoce toda la población). La desviación típica muestral divide entre N-1 (corrección de Bessel) para corregir el sesgo al estimar a partir de una muestra. Esta calculadora usa la fórmula muestral (N-1), la más habitual en investigación y análisis de datos.',
  },
  {
    question: '¿Qué significa una asimetría positiva o negativa?',
    answer:
      'La asimetría mide la falta de simetría de la distribución de tus datos. Asimetría positiva (cola derecha) significa que los datos se concentran a la izquierda y la cola se extiende a la derecha. Asimetría negativa es lo contrario. Un valor cercano a 0 indica una distribución aproximadamente simétrica.',
  },
  {
    question: '¿Qué es la curtosis y qué indica?',
    answer:
      'La curtosis mide el "peso" de las colas respecto a una distribución normal. Esta calculadora devuelve la curtosis exceso, donde 0 es la referencia (distribución normal). Valores positivos (leptocúrtica) indican colas más pesadas. Valores negativos (platicúrtica) indican colas más ligeras.',
  },
  {
    question: '¿En qué formato debo introducir los datos?',
    answer:
      'Pega tus números separados por comas, espacios, puntos y coma o saltos de línea. Ejemplos: "1, 2, 3, 4" o "1 2 3 4" o un valor por línea. La calculadora ignora automáticamente los caracteres no numéricos.',
  },
];

const howToData = [
  {
    name: 'Introduce tus datos',
    text: 'Escribe o pega tus valores numéricos en el área de texto, separados por comas, espacios o saltos de línea. Necesitas al menos 2 valores.',
  },
  {
    name: 'Lee los resultados',
    text: 'Las 15 estadísticas se actualizan en tiempo real mientras escribes. El histograma muestra la forma de la distribución de tus datos.',
  },
  {
    name: 'Copia el resumen',
    text: 'Usa el botón Copiar para copiar un resumen compacto de las estadísticas clave para tu informe o análisis.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Estadística Descriptiva: 15 Métricas al Instante' },
    {
      type: 'paragraph',
      html: 'Tanto si eres estudiante, investigador o analista de datos, la <strong>Calculadora de Estadística Descriptiva</strong> te ofrece un resumen estadístico completo e instantáneo de cualquier conjunto de datos numéricos. Pega tus datos y obtén 15 estadísticas calculadas simultáneamente.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Estadísticas calculadas', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultados en tiempo real', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Sin registro', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Estadísticas Calculadas' },
    {
      type: 'table',
      headers: ['Estadística', 'Descripción'],
      rows: [
        ['<strong>Recuento (N)</strong>', 'Número total de valores en el conjunto de datos.'],
        ['<strong>Media</strong>', 'Promedio aritmético de todos los valores.'],
        ['<strong>Mediana</strong>', 'Valor central con los datos ordenados. Robusta ante valores extremos.'],
        ['<strong>Moda</strong>', 'El valor o valores que aparecen con más frecuencia.'],
        ['<strong>Desv. Típ.</strong>', 'Desviación típica muestral (divide entre N-1).'],
        ['<strong>Varianza</strong>', 'Cuadrado de la desviación típica muestral.'],
        ['<strong>Mín / Máx</strong>', 'El valor más pequeño y más grande del conjunto.'],
        ['<strong>Rango</strong>', 'Diferencia entre el máximo y el mínimo.'],
        ['<strong>Q1 / Q3</strong>', 'Primer y tercer cuartil (percentiles 25 y 75).'],
        ['<strong>IQR</strong>', 'Rango intercuartílico: Q3 menos Q1. Mide la dispersión central.'],
        ['<strong>Asimetría</strong>', 'Grado de asimetría de la distribución respecto a la media.'],
        ['<strong>Curtosis</strong>', 'Curtosis exceso: peso de las colas frente a la distribución normal.'],
      ],
    },
    {
      type: 'tip',
      title: 'Cuándo usar la mediana en vez de la media',
      html: 'Si tus datos contienen valores extremos (outliers), como salarios o precios de vivienda, la <strong>mediana</strong> es una medida de tendencia central más representativa que la media, que se ve distorsionada por los valores extremos.',
    },
    { type: 'title', level: 2, text: 'Glosario Rápido' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Rango intercuartílico. Dispersión del 50% central de los datos. Se usa para detectar valores atípicos.' },
        { term: 'Asimetría', definition: 'Mide la asimetría de la distribución. Positiva = cola derecha más larga. Negativa = cola izquierda más larga.' },
        { term: 'Curtosis exceso', definition: 'Peso de las colas en comparación con la distribución normal. 0 es normal; positivo indica colas más pesadas.' },
        { term: 'Corrección de Bessel', definition: 'División entre N-1 en lugar de N al calcular la varianza muestral para reducir el sesgo en la estimación.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Estadística Descriptiva',
    labelData: 'Introduce tus datos',
    placeholderData: 'ej. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Introduce al menos 2 valores numéricos separados por comas, espacios o saltos de línea.',
    hintError: 'Introduce al menos 2 valores numéricos válidos para calcular las estadísticas.',
    btnSample: 'Muestra',
    btnPopulation: 'Población',
    groupCentral: 'Tendencia Central',
    groupDispersion: 'Dispersión',
    groupPosition: 'Posición',
    labelCount: 'Recuento (N)',
    labelSum: 'Suma',
    labelMean: 'Media',
    labelMedian: 'Mediana',
    labelMode: 'Moda',
    labelStdDev: 'Desv. Típ.',
    labelVariance: 'Varianza',
    labelCV: 'Coef. Variación',
    labelMin: 'Mínimo',
    labelMax: 'Máximo',
    labelRange: 'Rango',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Asimetría',
    labelKurtosis: 'Curtosis',
    labelBoxplot: 'Diagrama de Caja',
    labelChart: 'Distribución de Frecuencias',
    chartDesc: 'Histograma con amplitud de clase automática según la regla de Sturges.',
    insightTitle: 'Interpretación Automática',
    insightHomogeneous: 'Los datos son homogéneos (CV < 15%).',
    insightModerate: 'Los datos presentan variabilidad moderada (CV 15-35%).',
    insightHeterogeneous: 'Los datos son heterogéneos (CV > 35%).',
    insightSymmetric: 'La distribución es aproximadamente simétrica.',
    insightRightSkewed: 'La distribución presenta asimetría positiva (cola derecha).',
    insightLeftSkewed: 'La distribución presenta asimetría negativa (cola izquierda).',
    insightNoOutliers: 'No se detectan valores atípicos.',
    insightOutliers: 'Se detectan {n} valor(es) atípico(s) según el método IQR.',
    insightIQR: 'El rango intercuartílico es {iqr} (de {q1} a {q3}).',
    filterNotice: '{n} caracter(es) no numérico(s) ignorado(s).',
    labelReport: 'Resumen para tu informe',
    btnCopy: 'Copiar Resumen',
    btnCopied: '¡Copiado!',
    noMode: 'Sin moda',
  },
};
