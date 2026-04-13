import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'calculadora-distribucion-normal';
const title = 'Calculadora de Distribucion Normal Online';
const description =
  'Calcula probabilidades de la distribucion normal de forma instantanea: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) y distribucion normal inversa. Introduce media y desviacion tipica y visualiza la campana de Gauss con el area sombreada.';

const faqData = [
  {
    question: 'Que es la distribucion normal?',
    answer:
      'La distribucion normal o campana de Gauss es la distribucion de probabilidad continua mas importante en estadistica. Queda completamente definida por dos parametros: la media (μ), que indica el centro, y la desviacion tipica (σ), que controla la amplitud. Es simetrica respecto a la media y sus colas se extienden hasta el infinito.',
  },
  {
    question: 'Como se calcula la probabilidad en la distribucion normal?',
    answer:
      'La probabilidad se obtiene integrando la funcion de densidad de probabilidad (FDP). Como no tiene solucion analitica cerrada, se calcula mediante la funcion de error (erf). Esta calculadora aplica la aproximacion de alta precision de Abramowitz y Stegun para obtener resultados exactos.',
  },
  {
    question: 'Que es la puntuacion z?',
    answer:
      'La puntuacion z (o tipificada) indica cuantas desviaciones tipicas se aleja un valor de la media: z = (X - μ) / σ. Permite comparar valores de distribuciones con distintas escalas. Por ejemplo, z = 1 significa que X esta 1 desviacion tipica por encima de la media.',
  },
  {
    question: 'Para que sirve la distribucion normal inversa?',
    answer:
      'La distribucion normal inversa responde a la pregunta: ¿que valor X tiene el percentil p? Es decir, dado que P(X ≤ x) = p, encuentra x. Es muy util en control de calidad (limites de tolerancia), estadistica inferencial (valores criticos) y en simulacion de variables aleatorias.',
  },
];

const howToData = [
  {
    name: 'Introduce los parametros',
    text: 'Escribe la media (μ) y la desviacion tipica (σ > 0) de tu distribucion normal. Por defecto se usa la distribucion normal estandar (μ=0, σ=1).',
  },
  {
    name: 'Elige el tipo de calculo',
    text: 'Selecciona el modo: P(X ≤ a) para cola izquierda, P(X ≥ a) para cola derecha, P(a ≤ X ≤ b) para un intervalo, o Inversa para encontrar el valor X dado un percentil.',
  },
  {
    name: 'Lee el resultado y el grafico',
    text: 'La probabilidad se muestra de forma instantanea junto con la puntuacion z. La campana de Gauss visualiza el area sombreada correspondiente a la probabilidad calculada.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia y Referencias',
  bibliography: [
    { name: 'Distribucion normal - Wikipedia', url: 'https://es.wikipedia.org/wiki/Distribuci%C3%B3n_normal' },
    { name: 'Funcion de error - Wikipedia', url: 'https://es.wikipedia.org/wiki/Funci%C3%B3n_error' },
    { name: 'Abramowitz and Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Puntuacion z - Wikipedia', url: 'https://es.wikipedia.org/wiki/Puntuaci%C3%B3n_z' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Distribucion Normal: Probabilidades al Instante' },
    {
      type: 'paragraph',
      html: 'La <strong>Calculadora de Distribucion Normal</strong> calcula de forma instantanea cualquier probabilidad de la distribucion normal: cola izquierda, cola derecha, intervalo central e inversa. Solo necesitas introducir la media y la desviacion tipica para obtener el resultado y visualizarlo en la campana de Gauss.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Modos de calculo', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Resultados en tiempo real', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Sin registro', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Modos de Calculo' },
    {
      type: 'table',
      headers: ['Modo', 'Descripcion', 'Ejemplo de uso'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilidad acumulada hasta el valor a (cola izquierda).', 'Porcentaje de alumnos por debajo de una nota.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilidad en la cola derecha a partir del valor a.', 'Probabilidad de superar un umbral de calidad.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilidad en un intervalo central o asimetrico.', 'Proporcion de piezas dentro de tolerancia.'],
        ['<strong>Inversa</strong>', 'Encuentra X tal que P(X ≤ x) = p (percentil p).', 'Valor critico en un test de hipotesis.'],
      ],
    },
    {
      type: 'tip',
      title: 'Regla empirica 68 95 99.7',
      html: 'En cualquier distribucion normal: el <strong>68%</strong> de los datos cae dentro de ±1σ de la media, el <strong>95%</strong> dentro de ±2σ y el <strong>99.7%</strong> dentro de ±3σ. Puedes comprobarlo calculando P(-1 ≤ z ≤ 1) con μ=0 y σ=1.',
    },
    { type: 'title', level: 2, text: 'Glosario Rapido' },
    {
      type: 'glossary',
      items: [
        { term: 'Media (μ)', definition: 'Parametro de localizacion. Determina el centro de la campana de Gauss.' },
        { term: 'Desviacion tipica (σ)', definition: 'Parametro de escala. Controla la anchura de la campana. Debe ser estrictamente positiva.' },
        { term: 'Puntuacion z', definition: 'Valor tipificado: z = (X - μ) / σ. Indica cuantas desviaciones tipicas esta X de la media.' },
        { term: 'FDP', definition: 'Funcion de Densidad de Probabilidad. El area bajo la FDP en un intervalo es la probabilidad de ese intervalo.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribucion Normal',
    labelMean: 'Media',
    labelStdDev: 'Desv. Tipica',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inversa',
    labelValue: 'Valor X (a)',
    labelValueA: 'Limite inferior (a)',
    labelValueB: 'Limite superior (b)',
    labelPercentile: 'Percentil p (0 < p < 1)',
    resultProbability: 'Probabilidad',
    resultX: 'Valor X',
    resultZScore: 'Puntuacion z',
    resultZScoreA: 'z₁ (limite inferior)',
    resultZScoreB: 'z₂ (limite superior)',
    hintStdDev: 'La desviacion tipica debe ser mayor que 0.',
    hintPercentile: 'El percentil debe estar entre 0 y 1 (exclusivo).',
    labelChart: 'Campana de Gauss',
    chartDesc: 'Area sombreada correspondiente a la probabilidad calculada.',
    labelReport: 'Resumen para tu informe',
    btnCopy: 'Copiar Resumen',
    btnCopied: 'Copiado!',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografia y Referencias',
  },
};
