import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'calculadora-intervalo-confianza';
const title = 'Calculadora de Intervalo de Confianza Online';
const description =
  'Calcula intervalos de confianza para la media poblacional con distribuciones Z o t de Student. Introduce la media muestral, desviación típica, tamaño muestral y nivel de confianza y obtén el intervalo, margen de error y valor crítico al instante.';

const faqData = [
  {
    question: '¿Qué es un intervalo de confianza?',
    answer:
      'Un intervalo de confianza (IC) es un rango de valores calculado a partir de los datos de la muestra que, con una determinada probabilidad (nivel de confianza), contiene el valor verdadero del parámetro poblacional. Por ejemplo, un IC del 95% para la media significa que, si repetieras el muestreo muchas veces, el 95% de los intervalos calculados contendrían la media real de la población.',
  },
  {
    question: '¿Cuándo se usa la distribución Z y cuándo la t de Student?',
    answer:
      'Se usa Z cuando se conoce la desviación típica poblacional (σ) o cuando n es muy grande (>30). Se usa t de Student cuando solo se dispone de la desviación típica muestral (s) y n es pequeño. Para n > 30, ambas distribuciones son prácticamente equivalentes, pero la t sigue siendo más conservadora y técnicamente correcta cuando no se conoce σ.',
  },
  {
    question: '¿Cómo afecta el tamaño muestral a la amplitud del intervalo?',
    answer:
      'La amplitud del IC es proporcional a 1/√n: si cuadruplicas el tamaño de la muestra, el margen de error se reduce a la mitad. Esto explica por qué las muestras grandes producen estimaciones más precisas y por qué la planificación del tamaño muestral es crucial en el diseño de estudios estadísticos.',
  },
  {
    question: '¿Qué es el margen de error?',
    answer:
      'El margen de error (ME) es la mitad de la anchura del IC: ME = valor_crítico × SE, donde SE = σ/√n es el error estándar. Indica la máxima diferencia esperada entre la estimación muestral y el valor poblacional verdadero con el nivel de confianza especificado.',
  },
];

const howToData = [
  {
    name: 'Introduce los parámetros de la muestra',
    text: 'Escribe la media muestral (x̄), la desviación típica (σ o s > 0) y el tamaño muestral (n ≥ 2).',
  },
  {
    name: 'Elige el nivel de confianza',
    text: 'Selecciona 90%, 95%, 99% mediante los botones de acceso rápido o escribe cualquier valor entre 0 y 100.',
  },
  {
    name: 'Selecciona la distribución y lee el resultado',
    text: 'Elige Z si conoces la desviación típica poblacional o t si trabajas con una muestra. El intervalo, el margen de error y el valor crítico se calculan al instante.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Intervalo de Confianza: Resultados al Instante' },
    {
      type: 'paragraph',
      html: 'La <strong>Calculadora de Intervalo de Confianza</strong> calcula al instante el intervalo, el margen de error, el valor crítico y el error estándar. Admite la distribución Z (sigma poblacional conocida) y la t de Student (sigma muestral), con cualquier nivel de confianza entre 0 y 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Distribuciones Z y t', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultados en tiempo real', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Sin registro', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Distribución Z vs t de Student' },
    {
      type: 'table',
      headers: ['Criterio', 'Distribución Z', 'Distribución t'],
      rows: [
        ['Cuando usar', 'σ poblacional conocida o n > 30', 's muestral, cualquier n'],
        ['Valor crítico (95%)', 'z* = 1.960', 't* depende de df = n−1'],
        ['Grados de libertad', 'No aplica', 'df = n − 1'],
        ['Para n grande', 'IC más estrecho', 'Converge a Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Cómo interpretar correctamente el intervalo de confianza',
      html: 'Un IC del <strong>95%</strong> no significa que hay un 95% de probabilidad de que la media esté en ese intervalo. Significa que el <strong>método</strong> produce intervalos que contienen la media verdadera el 95% de las veces en repetidas muestras. Una vez calculado, el intervalo o contiene la media o no la contiene.',
    },
    { type: 'title', level: 2, text: 'Glosario Rápido' },
    {
      type: 'glossary',
      items: [
        { term: 'Intervalo de confianza (IC)', definition: 'Rango [x̄ − ME, x̄ + ME] que estima el parámetro poblacional con el nivel de confianza elegido.' },
        { term: 'Nivel de confianza', definition: 'Proporción de intervalos que contendrían el parámetro verdadero si el experimento se repitiera muchas veces. Valores típicos: 90%, 95%, 99%.' },
        { term: 'Error estándar (SE)', definition: 'SE = σ/√n. Mide la variabilidad de la media muestral respecto a la media poblacional.' },
        { term: 'Margen de error (ME)', definition: 'ME = z* × SE (o t* × SE). Es la semiamplitud del IC.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Intervalo de Confianza',
    labelMean: 'Media muestral (x̄)',
    labelStdDev: 'Desviación típica',
    labelN: 'Tamaño muestral (n)',
    labelConf: 'Nivel de confianza (%)',
    btnZ: 'Z (σ conocida)',
    btnT: 't de Student',
    labelCI: 'Intervalo de Confianza',
    labelME: 'Margen de Error',
    labelCritical: 'Valor Crítico',
    labelSE: 'Error Estándar',
    labelDF: 'Grados de Libertad',
    hintN: 'n debe ser un entero mayor o igual a 2.',
    hintStdDev: 'La desviación típica debe ser mayor que 0.',
    hintConf: 'El nivel de confianza debe estar entre 0 y 100 (exclusivo).',
    labelChart: 'Representación del Intervalo',
    chartDesc: 'Línea numérica con el IC sombreado y el margen de error.',
    labelReport: 'Resumen para tu informe',
    btnCopy: 'Copiar Resumen',
    btnCopied: '¡Copiado!',
    tabStats: 'Estadísticos',
    tabRaw: 'Datos Crudos',
    labelRaw: 'Pega los datos',
    rawPlaceholder: 'Escribe o pega valores separados por comas, espacios o saltos de línea. Ej: 12.3, 15.1, 11.8',
    hintRaw: 'Introduce al menos 2 valores numéricos válidos.',
    labelDist: 'Distribución',
    distAuto: 'Auto',
    noticeAutoRaw: 'Datos de muestra: t de Student',
    noticeAutoLowN: 'n < 30: t de Student recomendada',
    noticeAutoHighN: 'n ≥ 30: distribución Z recomendada',
    calcCI: 'Intervalo IC',
    calcInverse: 'n mínimo',
    labelTargetME: 'Error máximo deseado (E)',
    hintTargetME: 'E debe ser un número mayor que 0.',
    labelReqN: 'Tamaño muestral mínimo',
  },
};
