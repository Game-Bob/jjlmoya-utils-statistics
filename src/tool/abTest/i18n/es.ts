import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'calculadora-contraste-hipotesis-ab-test';
const title = 'Calculadora de Contraste de Hipotesis AB Test Online';
const description =
  'Compara dos grupos (A y B) para determinar si existe una diferencia estadísticamente significativa entre sus conversiones o medias. Calcula el P-Valor al instante.';

const faqData = [
  {
    question: '¿Qué significa el P-Valor?',
    answer:
      'El P-Valor te dice la probabilidad de que la diferencia de rendimiento entre el Grupo A y el Grupo B sea simple casualidad. Si el P-Valor es menor al nivel de significancia (usualmente 0.05), significa que con un 95% de confianza la diferencia estructural existe.',
  },
  {
    question: '¿Qué es el Nivel de Significancia (Alfa o α)?',
    answer:
      'Es tu nivel de exigencia para el test. Un Alfa de 0.05 requiere estar un 95% seguro de que el Grupo B es distinto al A para darlo por válido. Un Alfa de 0.01 requiere mucha más exigencia (99%). La convención académica e industrial es usar 0.05 por defecto.',
  },
  {
    question: '¿Cuál es la diferencia entre el test de proporciones y el de medias?',
    answer:
      'El test de proporciones mide variables dicotómicas de éxito o fracaso: clics, aperturas de email, conversiones. El test de medias compara el comportamiento cuantitativo acumulado: gasto promedio en carrito de compras o días de recuperación clínicos.',
  },
  {
    question: '¿Y si mi muestra es menor a 30 sujetos?',
    answer:
      'La aproximación por distribución normal comienza a ser menos precisa con muestras tan pequeñas (teorema del límite central). Para una decisión clínica recomendamos usar técnicas más conservadoras de probabilidad exacta o T de Student ajustada.',
  },
];

const howToData = [
  {
    name: 'Selecciona el Objetivo Numérico',
    text: 'En el panel de configuración, define si quieres medir tasas de Conversión (proporciones simples) o promedios generales como importes (Medias).',
  },
  {
    name: 'Introduce los Datos de Control (Grupo A)',
    text: 'Rellena los casos enviados/expuestos y cuántos éxitos han tenido (o su media).',
  },
  {
    name: 'Introduce los Datos Experimentales (Grupo B)',
    text: 'Sube los números de la nueva iniciativa o variante que estás midiendo.',
  },
  {
    name: 'Anota el Veredicto Estadístico',
    text: 'Baja la vista al Juez de Significación y copia la justificación generada sobre si la mejora real (Lift) rechaza la asunción al azar.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía y Referencias',
  bibliography: [
    { name: 'Statistical hypothesis testing - Wikipedia', url: 'https://en.wikipedia.org/wiki/Statistical_hypothesis_testing' },
    { name: 'A/B Testing Calculator - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Contraste de Hipotesis AB Test Online' },
    {
      type: 'paragraph',
      html: 'Tomar decisiones basadas en intuiciones es peligroso; tomarlas basadas en datos puros es el camino al éxito. La <strong>Calculadora de Contraste de Hipótesis (A/B Test)</strong> es la herramienta definitiva para analistas, marketers e investigadores que necesitan validar si la diferencia entre dos grupos es estadísticamente significativa o simplemente fruto del azar.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-Valor', label: 'El Juez Final', icon: 'mdi:scale-balance' },
        { value: 'Local', label: 'Sin Subida de Datos', icon: 'mdi:shield-check' },
        { value: 'Instantáneo', label: 'Gráficos Nativos', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: '¿Por qué dividimos los test en Conversiones y Medias?' },
    {
      type: 'paragraph',
      html: 'Dependiendo de la naturaleza de tu estudio, la métrica de éxito cambiará. Nuestra herramienta soporta de forma nativa los dos tipos de test estadísticos más utilizados en la industria.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Test de Proporciones (Conversiones)',
          description: 'Compara porcentajes o tasas de éxito entre dos grupos.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideal para Marketing (Clics, Ventas, Suscripciones)',
            'Usa Casos Totales (n) y Éxitos (x)',
            'Aplica Z-Test de dos proporciones',
          ],
        },
        {
          title: 'Test de Medias Continuas',
          description: 'Compara valores numéricos promedio entre dos grupos.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideal para Ticket Medio, Tiempo en Web o Pruebas Clínicas',
            'Usa Media (μ) y Desviación Típica (σ)',
            'Aplica aproximación normal robusta para muestras (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Cómo interpretar los resultados: el P-Valor es tu guía' },
    {
      type: 'paragraph',
      html: 'El corazón de esta calculadora es el famoso <strong>P-Valor</strong>. Este número te indica la probabilidad de haber obtenido estas diferencias observadas si la Hipótesis Nula (que postula que "ambos grupos son iguales") fuera cierta.',
    },
    {
      type: 'table',
      headers: ['P-Valor Observado', 'Significado Práctico', 'Decisión Estándar'],
      rows: [
        ['<strong>Mayor a 0.05</strong>', 'La diferencia es pequeña frente a la varianza. El azar podría explicarlo.', '<strong>NO Rechazar</strong> la Hipótesis Nula. No hay mejora real probada.'],
        ['<strong>Menor a 0.05</strong>', 'Es muy improbable que el azar cause tanta diferencia. Hay un efecto real.', '<strong>Rechazar</strong> la Hipótesis Nula. La variante B es mejor.'],
        ['<strong>Menor a 0.01</strong>', 'La evidencia a favor del cambio es aplastante (99% de confianza).', '<strong>Rechazar con firmeza</strong>. Éxito rotundo del experimento.'],
      ],
    },
    {
      type: 'tip',
      title: 'Corrección para Muestras Pequeñas',
      html: 'Si tus grupos procesan menos de 30 sujetos, la herramienta imprimirá un aviso de "Muestra Pequeña". En estos escenarios la aproximación normal clásica pierde precisión; recomendamos usar Test de Student exacto o Fisher.',
    },
    { type: 'title', level: 2, text: 'Glosario del A/B Testing' },
    {
      type: 'glossary',
      items: [
        { term: 'Grupo de Control (A)', definition: 'La versión original o la línea base contra la cual vas a medir tu experimento.' },
        { term: 'Variante (B)', definition: 'La nueva versión modificada que esperas que mejore las métricas.' },
        { term: 'Lift (Mejora Relativa)', definition: 'Porcentaje de cambio entre el desempeño del Grupo B respecto a la base del Grupo A.' },
        { term: 'Nivel de Significancia (α)', definition: 'El umbral de error que estás dispuesto a aceptar (normalmente 5% o 0.05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parámetros',
    btnConversions: 'Conversiones',
    btnMeans: 'Medias',
    labelGroupA: 'Grupo A (Control)',
    labelGroupB: 'Grupo B (Variante)',
    labelTotalCases: 'Casos Totales',
    labelSuccesses: 'Éxitos o Conversiones',
    labelMean: 'Media Promedio',
    labelStdDev: 'Desviación Típica',
    labelAlpha: 'Nivel de Significancia',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    labelDirection: 'Dirección del Test',
    btn2Tails: '2 Colas (Dif.)',
    btn1Tail: '1 Cola (B > A)',
    alertTitle: 'Advertencia de Fiabilidad Estadística',
    alertBody: 'Estás utilizando un tamaño de muestra muy pequeño o valores extremos (0 éxitos). La estimación puede no ser representativa del mundo real.',
    alertLinkText: 'Calcula tu tamaño muestral ideal aquí',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-Valor',
    sigDescInitial: 'Hay evidencia suficiente para rechazar la hipótesis nula',
    labelLift: 'Análisis de Mejora (Lift)',
    labelLiftText: 'de mejora respecto al Grupo A',
    labelConfidencePrefix: 'Confianza estadística:',
    labelDistributions: 'Distribuciones de Probabilidad',
    chartDesc: 'Observa el solapamiento: menor solapamiento implica mayor certeza de que las diferencias son reales y no fruto del azar.',
    labelReport: 'Texto para tu informe',
    defaultJustification: 'Tras analizar X sujetos, el Grupo B presenta una mejora del Y% con una confianza estadística del Z% (p=0.00).',
    btnCopy: 'Copiar Texto',
    btnCopied: '¡Copiado!',
    sigText: 'Hay evidencia suficiente para rechazar la hipótesis nula.',
    noSigText: 'La diferencia no es estadísticamente significativa.',
    justIntro: 'Tras analizar un total de',
    justSamples: ' muestras, el Grupo B presenta un cambio del ',
    justRespectTo: '% respecto al Grupo A.',
    justWithConfidence: ' Con una confianza estadística del ',
    justDiff: ', la diferencia empírica ',
    justSig: 'ES estadísticamente significativa',
    justNoSig: 'NO es estadísticamente significativa',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografía y Referencias',
  },
};
