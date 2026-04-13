import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'calculadora-estadistica-descriptiva';
const title = 'Calculadora de Estadistica Descriptiva Online';
const description =
  'Calcula al instante todas las medidas de estadistica descriptiva: media, mediana, moda, desviacion tipica, varianza, cuartiles, asimetria, curtosis y mas. Pega tus datos y obtén resultados en tiempo real.';

const faqData = [
  {
    question: 'Cual es la diferencia entre desviacion tipica poblacional y muestral?',
    answer:
      'La desviacion tipica poblacional divide entre N (cuando se conoce toda la poblacion). La desviacion tipica muestral divide entre N-1 (correccion de Bessel) para corregir el sesgo al estimar a partir de una muestra. Esta calculadora usa la formula muestral (N-1), la mas habitual en investigacion y analisis de datos.',
  },
  {
    question: 'Que significa una asimetria positiva o negativa?',
    answer:
      'La asimetria mide la falta de simetria de la distribucion de tus datos. Asimetria positiva (cola derecha) significa que los datos se concentran a la izquierda y la cola se extiende a la derecha. Asimetria negativa es lo contrario. Un valor cercano a 0 indica una distribucion aproximadamente simetrica.',
  },
  {
    question: 'Que es la curtosis y que indica?',
    answer:
      'La curtosis mide el "peso" de las colas respecto a una distribucion normal. Esta calculadora devuelve la curtosis exceso, donde 0 es la referencia (distribucion normal). Valores positivos (leptocurtica) indican colas mas pesadas. Valores negativos (platicurtica) indican colas mas ligeras.',
  },
  {
    question: 'En que formato debo introducir los datos?',
    answer:
      'Pega tus numeros separados por comas, espacios, puntos y coma o saltos de linea. Ejemplos: "1, 2, 3, 4" o "1 2 3 4" o un valor por linea. La calculadora ignora automaticamente los caracteres no numericos.',
  },
];

const howToData = [
  {
    name: 'Introduce tus datos',
    text: 'Escribe o pega tus valores numericos en el area de texto, separados por comas, espacios o saltos de linea. Necesitas al menos 2 valores.',
  },
  {
    name: 'Lee los resultados',
    text: 'Las 15 estadisticas se actualizan en tiempo real mientras escribes. El histograma muestra la forma de la distribucion de tus datos.',
  },
  {
    name: 'Copia el resumen',
    text: 'Usa el boton Copiar para copiar un resumen compacto de las estadisticas clave para tu informe o analisis.',
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
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia y Referencias',
  bibliography: [
    { name: 'Estadistica descriptiva - Wikipedia', url: 'https://es.wikipedia.org/wiki/Estad%C3%ADstica_descriptiva' },
    { name: 'Desviacion tipica - Wikipedia', url: 'https://es.wikipedia.org/wiki/Desviaci%C3%B3n_t%C3%ADpica' },
    { name: 'Asimetria estadistica - Wikipedia', url: 'https://es.wikipedia.org/wiki/Asimetr%C3%ADa_estad%C3%ADstica' },
    { name: 'Curtosis - Wikipedia', url: 'https://es.wikipedia.org/wiki/Curtosis' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Estadistica Descriptiva: 15 Metricas al Instante' },
    {
      type: 'paragraph',
      html: 'Tanto si eres estudiante, investigador o analista de datos, la <strong>Calculadora de Estadistica Descriptiva</strong> te ofrece un resumen estadistico completo e instantaneo de cualquier conjunto de datos numericos. Pega tus datos y obtén 15 estadisticas calculadas simultaneamente.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Estadisticas calculadas', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultados en tiempo real', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Sin registro', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Estadisticas Calculadas' },
    {
      type: 'table',
      headers: ['Estadistica', 'Descripcion'],
      rows: [
        ['<strong>Recuento (N)</strong>', 'Numero total de valores en el conjunto de datos.'],
        ['<strong>Media</strong>', 'Promedio aritmetico de todos los valores.'],
        ['<strong>Mediana</strong>', 'Valor central con los datos ordenados. Robusta ante valores extremos.'],
        ['<strong>Moda</strong>', 'El valor o valores que aparecen con mas frecuencia.'],
        ['<strong>Desv. Tip.</strong>', 'Desviacion tipica muestral (divide entre N-1).'],
        ['<strong>Varianza</strong>', 'Cuadrado de la desviacion tipica muestral.'],
        ['<strong>Min / Max</strong>', 'El valor mas pequeno y mas grande del conjunto.'],
        ['<strong>Rango</strong>', 'Diferencia entre el maximo y el minimo.'],
        ['<strong>Q1 / Q3</strong>', 'Primer y tercer cuartil (percentiles 25 y 75).'],
        ['<strong>IQR</strong>', 'Rango intercuartilico: Q3 menos Q1. Mide la dispersion central.'],
        ['<strong>Asimetria</strong>', 'Grado de asimetria de la distribucion respecto a la media.'],
        ['<strong>Curtosis</strong>', 'Curtosis exceso: peso de las colas frente a la distribucion normal.'],
      ],
    },
    {
      type: 'tip',
      title: 'Cuando usar la mediana en vez de la media',
      html: 'Si tus datos contienen valores extremos (outliers), como salarios o precios de vivienda, la <strong>mediana</strong> es una medida de tendencia central mas representativa que la media, que se ve distorsionada por los valores extremos.',
    },
    { type: 'title', level: 2, text: 'Glosario Rapido' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Rango intercuartilico. Dispersion del 50% central de los datos. Se usa para detectar valores atipicos.' },
        { term: 'Asimetria', definition: 'Mide la asimetria de la distribucion. Positiva = cola derecha mas larga. Negativa = cola izquierda mas larga.' },
        { term: 'Curtosis exceso', definition: 'Peso de las colas en comparacion con la distribucion normal. 0 es normal; positivo indica colas mas pesadas.' },
        { term: 'Correccion de Bessel', definition: 'Division entre N-1 en lugar de N al calcular la varianza muestral para reducir el sesgo en la estimacion.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Estadistica Descriptiva',
    labelData: 'Introduce tus datos',
    placeholderData: 'ej. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Introduce al menos 2 valores numericos separados por comas, espacios o saltos de linea.',
    hintError: 'Introduce al menos 2 valores numericos validos para calcular las estadisticas.',
    btnSample: 'Muestra',
    btnPopulation: 'Poblacion',
    groupCentral: 'Tendencia Central',
    groupDispersion: 'Dispersion',
    groupPosition: 'Posicion',
    labelCount: 'Recuento (N)',
    labelSum: 'Suma',
    labelMean: 'Media',
    labelMedian: 'Mediana',
    labelMode: 'Moda',
    labelStdDev: 'Desv. Tip.',
    labelVariance: 'Varianza',
    labelCV: 'Coef. Variacion',
    labelMin: 'Minimo',
    labelMax: 'Maximo',
    labelRange: 'Rango',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Asimetria',
    labelKurtosis: 'Curtosis',
    labelBoxplot: 'Diagrama de Caja',
    labelChart: 'Distribucion de Frecuencias',
    chartDesc: 'Histograma con amplitud de clase automatica segun la regla de Sturges.',
    insightTitle: 'Interpretacion Automatica',
    insightHomogeneous: 'Los datos son homogeneos (CV < 15%).',
    insightModerate: 'Los datos presentan variabilidad moderada (CV 15-35%).',
    insightHeterogeneous: 'Los datos son heterogeneos (CV > 35%).',
    insightSymmetric: 'La distribucion es aproximadamente simetrica.',
    insightRightSkewed: 'La distribucion presenta asimetria positiva (cola derecha).',
    insightLeftSkewed: 'La distribucion presenta asimetria negativa (cola izquierda).',
    insightNoOutliers: 'No se detectan valores atipicos.',
    insightOutliers: 'Se detectan {n} valor(es) atipico(s) segun el metodo IQR.',
    insightIQR: 'El rango intercuartilico es {iqr} (de {q1} a {q3}).',
    filterNotice: '{n} caracter(es) no numerico(s) ignorado(s).',
    labelReport: 'Resumen para tu informe',
    btnCopy: 'Copiar Resumen',
    btnCopied: 'Copiado!',
    noMode: 'Sin moda',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografia y Referencias',
  },
};
