import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'calculadora-distribucion-normal';
const title = 'Calculadora de Distribución Normal Online';
const description =
  'Calcula probabilidades de la distribución normal de forma instantánea: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) y distribución normal inversa. Introduce media y desviación típica y visualiza la campana de Gauss con el área sombreada.';

const faqData = [
  {
    question: '¿Qué es la distribución normal?',
    answer:
      'La distribución normal o campana de Gauss es la distribución de probabilidad continua más importante en estadística. Queda completamente definida por dos parámetros: la media (μ), que indica el centro, y la desviación típica (σ), que controla la amplitud. Es simétrica respecto a la media y sus colas se extienden hasta el infinito.',
  },
  {
    question: '¿Cómo se calcula la probabilidad en la distribución normal?',
    answer:
      'La probabilidad se obtiene integrando la función de densidad de probabilidad (FDP). Como no tiene solución analítica cerrada, se calcula mediante la función de error (erf). Esta calculadora aplica la aproximación de alta precisión de Abramowitz y Stegun para obtener resultados exactos.',
  },
  {
    question: '¿Qué es la puntuación z?',
    answer:
      'La puntuación z (o tipificada) indica cuántas desviaciones típicas se aleja un valor de la media: z = (X - μ) / σ. Permite comparar valores de distribuciones con distintas escalas. Por ejemplo, z = 1 significa que X está 1 desviación típica por encima de la media.',
  },
  {
    question: '¿Para qué sirve la distribución normal inversa?',
    answer:
      'La distribución normal inversa responde a la pregunta: ¿qué valor X tiene el percentil p? Es decir, dado que P(X ≤ x) = p, encuentra x. Es muy útil en control de calidad (límites de tolerancia), estadística inferencial (valores críticos) y en simulación de variables aleatorias.',
  },
];

const howToData = [
  {
    name: 'Introduce los parámetros',
    text: 'Escribe la media (μ) y la desviación típica (σ > 0) de tu distribución normal. Por defecto se usa la distribución normal estándar (μ=0, σ=1).',
  },
  {
    name: 'Elige el tipo de cálculo',
    text: 'Selecciona el modo: P(X ≤ a) para cola izquierda, P(X ≥ a) para cola derecha, P(a ≤ X ≤ b) para un intervalo, o Inversa para encontrar el valor X dado un percentil.',
  },
  {
    name: 'Lee el resultado y el gráfico',
    text: 'La probabilidad se muestra de forma instantánea junto con la puntuación z. La campana de Gauss visualiza el área sombreada correspondiente a la probabilidad calculada.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Distribución Normal: Probabilidades al Instante' },
    {
      type: 'paragraph',
      html: 'La <strong>Calculadora de Distribución Normal</strong> calcula de forma instantánea cualquier probabilidad de la distribución normal: cola izquierda, cola derecha, intervalo central e inversa. Solo necesitas introducir la media y la desviación típica para obtener el resultado y visualizarlo en la campana de Gauss.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Modos de cálculo', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Resultados en tiempo real', icon: 'mdi:lightning-bolt' },
        { value: 'Gratis', label: 'Sin registro', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Modos de Cálculo' },
    {
      type: 'table',
      headers: ['Modo', 'Descripción', 'Ejemplo de uso'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilidad acumulada hasta el valor a (cola izquierda).', 'Porcentaje de alumnos por debajo de una nota.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilidad en la cola derecha a partir del valor a.', 'Probabilidad de superar un umbral de calidad.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilidad en un intervalo central o asimétrico.', 'Proporción de piezas dentro de tolerancia.'],
        ['<strong>Inversa</strong>', 'Encuentra X tal que P(X ≤ x) = p (percentil p).', 'Valor crítico en un test de hipótesis.'],
      ],
    },
    {
      type: 'tip',
      title: 'Regla empírica 68 95 99.7',
      html: 'En cualquier distribución normal: el <strong>68%</strong> de los datos cae dentro de ±1σ de la media, el <strong>95%</strong> dentro de ±2σ y el <strong>99.7%</strong> dentro de ±3σ. Puedes comprobarlo calculando P(-1 ≤ z ≤ 1) con μ=0 y σ=1.',
    },
    { type: 'title', level: 2, text: 'Glosario Rápido' },
    {
      type: 'glossary',
      items: [
        { term: 'Media (μ)', definition: 'Parámetro de localización. Determina el centro de la campana de Gauss.' },
        { term: 'Desviación típica (σ)', definition: 'Parámetro de escala. Controla la anchura de la campana. Debe ser estrictamente positiva.' },
        { term: 'Puntuación z', definition: 'Valor tipificado: z = (X - μ) / σ. Indica cuántas desviaciones típicas está X de la media.' },
        { term: 'FDP', definition: 'Función de Densidad de Probabilidad. El área bajo la FDP en un intervalo es la probabilidad de ese intervalo.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribución Normal',
    labelMean: 'Media',
    labelStdDev: 'Desv. Típica',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inversa',
    labelValue: 'Valor X (a)',
    labelValueA: 'Límite inferior (a)',
    labelValueB: 'Límite superior (b)',
    labelPercentile: 'Percentil p (0 < p < 1)',
    resultProbability: 'Probabilidad',
    resultX: 'Valor X',
    resultZScore: 'Puntuación z',
    resultZScoreA: 'z₁ (límite inferior)',
    resultZScoreB: 'z₂ (límite superior)',
    hintStdDev: 'La desviación típica debe ser mayor que 0.',
    hintPercentile: 'El percentil debe estar entre 0 y 1 (exclusivo).',
    labelChart: 'Campana de Gauss',
    chartDesc: 'Área sombreada correspondiente a la probabilidad calculada.',
    labelReport: 'Resumen para tu informe',
    btnCopy: 'Copiar Resumen',
    btnCopied: '¡Copiado!',
  },
};
