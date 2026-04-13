import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'calculadora-correlacion-pearson';
const title = 'Calculadora de Correlacion de Pearson Online';
const description =
  'Calcula el coeficiente r de Pearson, el coeficiente de determinación r² y la recta de regresión lineal a partir de pares de datos. Herramienta 100% privada y local.';

const faqData = [
  {
    question: '¿Qué es el coeficiente de correlación de Pearson?',
    answer:
      'Es una medida estadística que cuantifica la fuerza y la dirección de la relación lineal entre dos variables cuantitativas. Su valor oscila entre -1 (correlación negativa perfecta) y 1 (correlación positiva perfecta), siendo 0 la ausencia de relación lineal.',
  },
  {
    question: '¿Puedo pegar datos directamente desde Excel?',
    answer:
      'Sí, nuestra calculadora está optimizada para interpretar datos copiados y pegados desde Excel, Google Sheets o archivos CSV. Automáticamente detecta las columnas y limpia caracteres no numéricos como símbolos de moneda o porcentajes.',
  },
  {
    question: '¿Por qué el valor de r es bajo si mis datos parecen estar relacionados?',
    answer:
      'El coeficiente de Pearson solo detecta relaciones lineales. Si tus datos tienen una relación curva (como una parábola o logarítmica), el coeficiente de Pearson puede ser muy bajo a pesar de que exista una conexión clara entre las variables.',
  },
  {
    question: '¿Qué significa r² en esta calculadora?',
    answer:
      'Es el coeficiente de determinación. Representa la proporción de la varianza en la variable dependiente que es predecible a partir de la variable independiente. Por ejemplo, un r² de 0.85 indica que el 85% de la variabilidad está explicada por el modelo lineal.',
  },
];

const howToData = [
  {
    name: 'Preparación de datos',
    text: 'Ten a mano tus pares de valores (X e Y). Pueden estar en un Excel o simplemente en una lista de texto.',
  },
  {
    name: 'Introducción de los datos',
    text: 'Pega tus datos en el área de texto de la calculadora. Asegúrate de que cada par de valores esté en una línea nueva.',
  },
  {
    name: 'Configuración',
    text: 'Selecciona el separador decimal (punto o coma) que utilizan tus datos para evitar errores en el cálculo.',
  },
  {
    name: 'Análisis de resultados',
    text: 'Revisa instantáneamente el valor de r, su interpretación y observa el diagrama de dispersión para confirmar la tendencia.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía y Referencias',
  bibliography: [
    { name: "Pearson's correlation coefficient - Wikipedia", url: 'https://en.wikipedia.org/wiki/Pearson_correlation_coefficient' },
    { name: 'Correlación de Pearson: Definición, fórmula e interpretación', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: 'Interpretación del Coeficiente de Correlación de Pearson', url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Correlacion de Pearson Online: Guia Completa' },
    {
      type: 'paragraph',
      html: 'El <strong>coeficiente de correlación de Pearson</strong> (r) es la herramienta estándar en estadística para medir cómo dos variables numéricas se relacionan entre sí de forma lineal. Ya sea para un trabajo académico, un análisis de mercado o una investigación científica, entender la fuerza de tus datos es vital.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Relación Total', icon: 'mdi:trending-up' },
        { value: '0', label: 'Independencia', icon: 'mdi:graph-outline' },
        { value: 'Local', label: 'Privacidad 100%', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: '¿Para qué sirve el coeficiente r de Pearson?' },
    {
      type: 'paragraph',
      html: 'El índice de Pearson permite descubrir si existe una tendencia: cuando una variable aumenta, ¿la otra también lo hace (<strong>correlación positiva</strong>) o disminuye (<strong>correlación negativa</strong>)? Esta herramienta es fundamental en el análisis de datos con Excel, SPSS o Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Correlación de Pearson',
          description: 'Ideal para variables cuantitativas con una relación lineal clara.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Datos Numéricos', 'Relación Lineal', 'Requiere Normalidad'],
        },
        {
          title: 'Correlación de Spearman',
          description: 'Mejor para datos ordinales o relaciones no lineales monótonas.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Datos Ordinales (Rangos)', 'Relación Monótona', 'Resistente a Outliers'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretación de los resultados: tabla de valores' },
    {
      type: 'table',
      headers: ['Rango de Valor (r)', 'Fuerza de la Relación', 'Significado Práctico'],
      rows: [
        ['<strong>0.90 a 1.00</strong>', 'Muy Fuerte', 'Relación casi perfecta. Ideal para predicciones.'],
        ['<strong>0.70 a 0.89</strong>', 'Fuerte', 'Existe una clara dependencia lineal entre las variables.'],
        ['<strong>0.40 a 0.69</strong>', 'Moderada', 'Hay una tendencia visible, pero con dispersión notable.'],
        ['<strong>0.20 a 0.39</strong>', 'Débil', 'La relación es pobre; otros factores influyen más.'],
        ['<strong>0.00 a 0.19</strong>', 'Nula/Despreciable', 'No existe relación lineal significativa.'],
      ],
    },
    { type: 'title', level: 2, text: 'Ventajas y limitaciones de esta calculadora' },
    {
      type: 'list',
      items: [
        '<strong>Pegado desde Excel/CSV:</strong> No metas datos uno a uno.',
        '<strong>Diagrama de Dispersión instantáneo</strong> con recta de regresión.',
        '<strong>Privacidad 100%:</strong> Los datos no salen de tu PC.',
      ],
    },
    {
      type: 'list',
      items: [
        'Solo detecta relaciones lineales (no curvas).',
        'Sensibilidad alta a valores extremos (outliers).',
        'Requiere al menos 2 pares de datos válidos.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo para Expertos',
      html: 'Antes de confiar ciegamente en el valor de r, mira siempre el <strong>Diagrama de Dispersión</strong>. A veces, un coeficiente alto puede estar causado por un único valor atípico, o un coeficiente bajo puede ocultar una relación curva muy fuerte que Pearson no es capaz de ver.',
    },
    { type: 'title', level: 2, text: 'Glosario estadístico' },
    {
      type: 'glossary',
      items: [
        { term: 'Covarianza', definition: 'Medida de cuánto cambian dos variables aleatorias de forma conjunta.' },
        { term: 'Regresión Lineal', definition: 'Modelo matemático usado para aproximar la relación de dependencia entre variables.' },
        { term: 'Coeficiente r²', definition: 'Proporción de la varianza que es predecible a partir de la variable independiente.' },
        { term: 'Diagrama de Dispersión', definition: 'Gráfico de puntos que muestra la distribución de pares de datos en un plano.' },
      ],
    },
  ],
  ui: {
    headingData: 'Datos CSV',
    btnLoadExample: 'Cargar ejemplo',
    btnClear: 'Limpiar datos',
    placeholder: 'Pega tus datos (X, Y) o arrastra un CSV...',
    labelDecimalSep: 'Sep. Decimal',
    optPoint: 'Punto (.)',
    optComma: 'Coma (,)',
    privacyBadge: 'Ejecución local privada',
    labelR: 'Coeficiente de Pearson (r)',
    labelR2: 'Determinación (r²)',
    labelN: 'Parejas (n)',
    labelSlope: 'Pendiente (m)',
    labelMeanXY: 'Media X | Y',
    labelWaiting: 'Esperando datos...',
    interpPerfectPos: 'Correlación positiva perfecta',
    interpPerfectNeg: 'Correlación negativa perfecta',
    interpStrong: 'Correlación fuerte',
    interpModerate: 'Correlación moderada',
    interpWeak: 'Correlación débil/nula',
    errorMsg: 'Introduce al menos 2 pares de datos para graficar',
    btnCopyTitle: 'Copiar resultados',
    btnDownloadTitle: 'Descargar gráfico',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografía y Referencias',
  },
};
