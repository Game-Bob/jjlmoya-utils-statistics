import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'calculadora-chi-cuadrado-independencia';
const title = 'Calculadora Chi Cuadrado de Independencia Online';
const description =
  'Determina si existe una relación estadística entre dos variables categóricas. Llena la matriz de frecuencias observadas y calcula el P-Valor al instante.';

const faqData = [
  {
    question: '¿Qué es el test de Chi-Cuadrado de independencia?',
    answer:
      'Es una prueba estadística utilizada para evaluar la probabilidad de que una asociación observada entre dos variables categóricas o nominales se deba al azar. Por ejemplo: si el tipo de postre favorito de una persona está relacionado con la región en la que vive.',
  },
  {
    question: '¿Para qué sirve el coeficiente V de Cramer?',
    answer:
      'Mientras que el Chi-cuadrado te dice si hay "alguna" relación, el coeficiente V de Cramer te dice "cuánta" relación hay. Se valora de 0 (independencia total) a 1 (dependencia absoluta matemática). Valores superiores a 0.5 son muy fuertes sociológicamente.',
  },
  {
    question: '¿Qué pasa si mis Frecuencias Esperadas son muy bajas?',
    answer:
      'La aproximación matemática del Chi-Cuadrado pierde fiabilidad si las frecuencias esperadas son inferiores a 5 en más del 20% de las celdas. Nuestra herramienta te avisará visualmente si hay peligro. En ese caso se recomienda unir categorías dudosas.',
  },
  {
    question: '¿Puedo usar esto para encuestas cualitativas?',
    answer:
      'Absolutamente sí. Es la utilidad principal para la sociología y las investigaciones de mercadeo, donde rara vez preguntas números decimales sino categorías excluyentes (Soltero/Casado, Sí/No, Norte/Sur).',
  },
];

const howToData = [
  {
    name: 'Define la Matriz',
    text: 'Primero debes seleccionar el tamaño de tu Tabla de Contingencia según cuántas opciones tiene tu Variable A (filas) y tu Variable B (columnas).',
  },
  {
    name: 'Vacía los Datos Observados',
    text: 'Sustituye los números base rellenando la primera tabla con la cuenta exacta de tus datos reales.',
  },
  {
    name: 'Revisa los Residuos',
    text: 'Observa en qué celdas se ilumina nuestra tabla (por verde o por rojo intenso). Ahí residen las anomalías de tu mercado causantes de que las variables no sean independientes.',
  },
  {
    name: 'Copia la Conclusión',
    text: 'Pega en tu TFG o memoria de proyecto el texto auto-generado con el aval matemático del valor de P.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía y Referencias',
  bibliography: [
    {
      name: 'Chi-squared test - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Chi-squared_test',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Calculadora Chi-Cuadrado de Independencia',
    },
    {
      type: 'paragraph',
      html: 'Mientras que las herramientas clásicas como el Test A/B o la Estadística Descriptiva trabajan excelentemente con números continuos (medias, ganancias, pesos), el mundo real está lleno de datos categóricos (colores, marcas, niveles de satisfacción). La <strong>Calculadora Chi-Cuadrado de Independencia</strong> es la prueba "Reina" para determinar analíticamente si dos variables cualitativas están estadísticamente conectadas o si bailan de forma completamente independiente.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabla', label: 'Dinámica hasta 3×3', icon: 'mdi:table' },
        { value: 'V de Cramer', label: 'Fuerza de Asociación', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Residuos y Desviación', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '¿Para qué sirve exactamente el Estadístico Chi-Cuadrado (χ²)?',
    },
    {
      type: 'paragraph',
      html: 'El Test de Independencia Chi-cuadrado compara las <em>Frecuencias Observadas</em> (los números reales que tú has medido y recogido) con las <em>Frecuencias Esperadas</em> (los recuentos que esperaríamos tener en cada celda si no hubiera interacción alguna entre las variables).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Variables Dependientes (Hay Relación)',
          description: 'Las proporciones de una categoría varían salvajemente dependiendo de la otra.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Ejemplo: Los visitantes de móvil prefieren el Diseño A, pero los de PC el Diseño B.',
            'El Chi-Cuadrado (χ²) se dispara y el P-Valor cae.',
            'El valor V de Cramer señala la fuerza (ej. Fuerte > 0.5).',
          ],
        },
        {
          title: 'Variables Independientes (Azar)',
          description: 'Las proporciones se mantienen estables como una roca en todos los niveles.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Ejemplo: El color de ojos de un cliente no afecta a qué marca de coche compra.',
            'El Chi-Cuadrado es diminuto y el P-Valor es mayor de 0.05.',
            'La Hipótesis Nula no puede ser descartada.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'V de Cramer: Entendiendo la Fuerza del Vínculo',
    },
    {
      type: 'paragraph',
      html: 'Obtener un P-Valor bajísimo no significa que las variables estén "intensamente" unidas; solo indica que el azar no puede ser el culpable (quizás porque tienes docenas de miles de casos reales). Para medir el "tamaño del efecto", incorporamos automáticamente el <strong>Coeficiente V de Cramer</strong>.',
    },
    {
      type: 'table',
      headers: ['Calculadora (Valor V)', 'Calificación Analítica', 'Traducción'],
      rows: [
        [
          '<strong>0.00 a 0.10</strong>',
          'Asociación Nula / Trivial',
          'Son teóricamente dependientes, pero de forma imperceptible e inútil para el negocio.',
        ],
        [
          '<strong>0.11 a 0.30</strong>',
          'Asociación Débil',
          'Existe un vínculo leve, pero multitud de otros factores externos tienen más peso.',
        ],
        [
          '<strong>0.31 a 0.50</strong>',
          'Asociación Moderada',
          'Ambas características influyen de forma notable la una sobre la otra.',
        ],
        [
          '<strong>Más de 0.50</strong>',
          'Asociación Fuerte',
          'Nexo clarísimo. Conocer la variable A predice asombrosamente la variable B.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Condiciones de Viabilidad Matemática',
      html: '¡Ojo con las celdas desérticas! Para que la aproximación chi-cuadrada de Pearson siga siendo robusta bajo la campana, se requiere metodológicamente que al menos el 80% de las <em>Frecuencias Esperadas</em> (y no las observadas) sean superiores a 5, y ninguna celda inferior a 1. Si esto no se cumple, nuestro semáforo de alerta se disparará sugiriéndote fusionar categorías.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Mapa de Calor Residual Incorporado',
    },
    {
      type: 'paragraph',
      html: 'Para potenciar el UX y facilitar conclusiones para informes, nuestra matriz tintará automáticamente el fondo de las celdas basándose en sus residuos estandarizados (desviación):<br/><br/><strong>Tintes Verdes:</strong> La celda tiene <em>muchos más éxitos</em> de los puramente matemáticamente esperables.<br/><strong>Tintes Rojos:</strong> La celda está peligrosamente "vacía" en comparación a la norma esperada.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Glosario del Chi-Cuadrado',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Frecuencia Observada',
          definition:
            'El recuento tal y como tú lo has contado en laboratorio o encuestas físicamente.',
        },
        {
          term: 'Frecuencia Esperada',
          definition:
            'Cálculo teórico resultante de cruzar el ratio marginal de la fila por el de la columna.',
        },
        {
          term: 'Grados de Libertad (df)',
          definition:
            'La cantidad geométrica de datos libres. Se halla restando 1 a las filas y a las columnas, y multiplicándolos.',
        },
        {
          term: 'Residuo Estandarizado',
          definition:
            'Diferencia normalizada entre lo observado y lo real. Mide qué celda "empuja" más el descubrimiento.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Configuración',
    labelTableSize: 'Tamaño de la Tabla (Filas × Columnas)',
    labelAlpha: 'Nivel de Significancia (α)',
    alpha90: '0.10 (90%)',
    alpha95: '0.05 (95%)',
    alpha99: '0.01 (99%)',
    infoText:
      'Calcula automáticamente la frecuencia teórica, el valor χ² y el coeficiente V de Cramer de fuerza de asociación usando inferencia puramente local.',
    labelObserved: 'Frecuencias Observadas (Input)',
    btnShowExpected: 'Ver Frecuencias Esperadas (H₀)',
    expectedDesc:
      'Estos son los valores que habría en cada celda si no existiera relación alguna entre las dos variables (distribución aleatoria).',
    alertTitle: 'Advertencia Estadística (Celdas < 5)',
    alertBody:
      'Hay frecuencias esperadas muy bajas. La aproximación χ² podría no ser fiable. Se sugiere juntar categorías o usar test exacto de Fisher.',
    labelPValue: 'P-Valor (p)',
    sigDescInitial: 'Existe relación significativa',
    labelGlobalStats: 'Estadísticos Globales',
    labelChiSquareStat: 'Chi-Cuadrado (χ²)',
    labelDegrees: 'Grados (df)',
    labelCramer: 'Fuerza de Relación (V de Cramer)',
    labelVisualization: 'Visualización de Residuos (Observado vs Esperado)',
    heatmapInfo: 'Las celdas de la tabla de input se tiñen según la variación residual.',
    labelReport: 'Texto para tu informe',
    defaultJustification:
      'Tras analizar un total de N observaciones, encontramos un valor χ²(df) = X. Con un p-valor de P, se concluye que existe dependencia significativa.',
    btnCopy: 'Copiar Texto',
    rowLabel: 'Fila',
    colLabel: 'Col',
    totalLabel: 'TOTAL',
    cramerNull: 'Nula',
    cramerWeak: 'Débil',
    cramerModerate: 'Moderada',
    cramerStrong: 'Fuerte',
    sigText: 'Hay asociación significativa (dependencia).',
    noSigText: 'No hay evidencia de relación (independencia).',
    chartLegendObs: 'Fila Observada',
    chartLegendExp: 'Esperado',
    btnCopied: '¡Copiado!',
    justificationIntro: 'Tras analizar',
    justificationTableOf: 'casos en una tabla',
    justificationObtained: ', obtuvimos',
    justificationPAt: '. Evaluado al nivel α=',
    justificationConcluded: ', se concluye empíricamente que',
    justificationSig: 'EXISTE una asociación fuerte entre las variables (V de Cramer:',
    justificationNoSig: 'NO EXISTE asociación estadísticamente significativa',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografía y Referencias',
  },
};
