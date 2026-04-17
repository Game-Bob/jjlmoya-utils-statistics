import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'calculadora-estatistica-descritiva';
const title = 'Calculadora de Estatística Descritiva Online';
const description =
  'Calcule instantaneamente todas as principais estatísticas descritivas: média, mediana, moda, desvio padrão, variância, quartis, assimetria, curtose e muito mais. Cole os seus dados e obtenha resultados em tempo real.';

const faqData = [
  {
    question: 'Qual é a diferença entre o desvio padrão da população e da amostra?',
    answer:
      'O desvio padrão da população divide por N (todos os elementos são conhecidos). O desvio padrão da amostra divide por N-1 (correção de Bessel) para corrigir o viés ao estimar a partir de um subconjunto. Esta calculadora utiliza o desvio padrão da amostra (N-1), que é a escolha mais comum em investigação e análise de dados.',
  },
  {
    question: 'O que significa uma assimetria positiva ou negativa?',
    answer:
      'A assimetria (skewness) mede a falta de simetria da distribuição dos seus dados. Uma assimetria positiva (à direita) significa que a cauda se estende para a direita e a maioria dos valores se agrupa à esquerda. Uma assimetria negativa (à esquerda) é o oposto. Um valor próximo de 0 indica uma distribuição aproximadamente simétrica.',
  },
  {
    question: 'O que é a curtose e o que indica?',
    answer:
      'A curtose mede o "peso" das caudas em relação a uma distribuição normal. Esta calculadora devolve o excesso de curtose, onde 0 é a linha de base (distribuição normal). Valores positivos (leptocúrtica) indicam caudas mais pesadas e picos mais agudos. Valores negativos (platicúrtica) indicam caudas mais leves e picos mais achatados.',
  },
  {
    question: 'Em que formato devem estar os meus dados?',
    answer:
      'Cole os seus números separados por vírgulas, espaços, pontos e vírgulas ou quebras de linha. Exemplos: "1, 2, 3, 4" ou "1 2 3 4" ou um valor por linha. A calculadora ignora automaticamente caracteres não numéricos.',
  },
];

const howToData = [
  {
    name: 'Cole ou Digite os Seus Dados',
    text: 'Insira os seus valores numéricos na área de texto, separados por vírgulas, espaços ou quebras de linha. Precisa de pelo menos 2 valores.',
  },
  {
    name: 'Leia os Resultados',
    text: 'As 15 estatísticas são atualizadas instantaneamente à medida que digita. O histograma mostra a forma da distribuição dos seus dados.',
  },
  {
    name: 'Copie o Resumo',
    text: 'Utilize o botão Copiar Resumo para copiar uma visão geral compacta das principais estatísticas para utilizar no seu relatório ou análise.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    { name: 'Estatística descritiva - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Estat%C3%ADstica_descritiva' },
    { name: 'Desvio padrão - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o' },
    { name: 'Assimetria (estatística) - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Assimetria_(estat%C3%ADstica)' },
    { name: 'Curtose - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Curtose' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Estatística Descritiva: Todas as Métricas num só Lugar' },
    {
      type: 'paragraph',
      html: 'Seja estudante, investigador ou analista de dados, a <strong>Calculadora de Estatística Descritiva</strong> oferece um resumo estatístico instantâneo e completo de qualquer conjunto de dados numéricos. Cole os seus dados e obtenha 15 estatísticas calculadas simultaneamente — sem necessidade de software de folha de cálculo.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Estatísticas Calculadas', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultados em Tempo Real', icon: 'mdi:lightning-bolt' },
        { value: 'Grátis', label: 'Sem Registo', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Estatísticas Calculadas' },
    {
      type: 'table',
      headers: ['Estatística', 'Descrição'],
      rows: [
        ['<strong>Contagem (N)</strong>', 'Número total de valores no conjunto de dados.'],
        ['<strong>Média</strong>', 'A média aritmética de todos os valores.'],
        ['<strong>Mediana</strong>', 'O valor central quando os dados estão ordenados. Robusta a valores discrepantes.'],
        ['<strong>Moda</strong>', 'O valor ou valores que ocorrem com mais frequência.'],
        ['<strong>Desvio Padrão</strong>', 'Desvio padrão da amostra (divide por N-1).'],
        ['<strong>Variância</strong>', 'Quadrado do desvio padrão da amostra.'],
        ['<strong>Mín / Máx</strong>', 'Valores mínimo e máximo no conjunto de dados.'],
        ['<strong>Amplitude</strong>', 'Diferença entre o valor máximo e o mínimo.'],
        ['<strong>Q1 / Q3</strong>', 'Primeiro e terceiro quartis (percentis 25 e 75).'],
        ['<strong>IQR</strong>', 'Intervalo interquartil: Q3 menos Q1. Mede a dispersão central.'],
        ['<strong>Assimetria</strong>', 'Assimetria da distribuição em relação à sua média.'],
        ['<strong>Curtose</strong>', 'Excesso de curtose: peso das caudas em relação a uma distribuição normal.'],
      ],
    },
    {
      type: 'tip',
      title: 'Quando Utilizar a Mediana em vez da Média',
      html: 'Se os seus dados tiverem valores discrepantes significativos (por exemplo, dados de rendimento, preços de habitação), a <strong>mediana</strong> é uma medida de tendência central mais representativa do que a média, que é puxada para valores extremos.',
    },
    { type: 'title', level: 2, text: 'Interpretar o Histograma' },
    {
      type: 'paragraph',
      html: 'O histograma de frequência mostra como os seus valores estão distribuídos por classes de largura igual, calculadas automaticamente utilizando a <strong>regra de Sturges</strong> (k = 1 + log₂N). Uma forma de sino simétrica sugere uma distribuição normal. Formas assimétricas confirmam o valor de assimetria mostrado nos resultados.',
    },
    { type: 'title', level: 2, text: 'Glossário de Referência Rápida' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Intervalo Interquartil. A dispersão dos 50% centrais dos seus dados. Utilizado para identificar valores discrepantes.' },
        { term: 'Assimetria', definition: 'Mede a assimetria da distribuição. Positivo = cauda direita mais longa. Negativo = cauda esquerda mais longa.' },
        { term: 'Excesso de Curtose', definition: 'Peso das caudas comparado com uma distribuição normal. 0 é normal; positivo significa caudas mais pesadas.' },
        { term: 'Correção de Bessel', definition: 'Dividir por N-1 em vez de N ao calcular a variância da amostra para reduzir o viés na estimativa.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Estatística Descritiva',
    labelData: 'Insira os seus dados',
    placeholderData: 'ex: 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Insira pelo menos 2 valores numéricos separados por vírgulas, espaços ou quebras de linha.',
    hintError: 'Insira pelo menos 2 valores numéricos válidos para calcular as estatísticas.',
    btnSample: 'Amostra',
    btnPopulation: 'População',
    groupCentral: 'Tendência Central',
    groupDispersion: 'Dispersão',
    groupPosition: 'Posição',
    labelCount: 'Contagem (N)',
    labelSum: 'Soma',
    labelMean: 'Média',
    labelMedian: 'Mediana',
    labelMode: 'Moda',
    labelStdDev: 'Desvio Padrão',
    labelVariance: 'Variância',
    labelCV: 'CV',
    labelMin: 'Mín',
    labelMax: 'Máx',
    labelRange: 'Amplitude',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Assimetria',
    labelKurtosis: 'Curtose',
    labelBoxplot: 'Box plot',
    labelChart: 'Distribuição de Frequência',
    chartDesc: 'Histograma com largura de classe automática utilizando a regra de Sturges.',
    insightTitle: 'Interpretação Automática',
    insightHomogeneous: 'Os dados são homogéneos (CV < 15%).',
    insightModerate: 'Os dados mostram variabilidade moderada (CV 15-35%).',
    insightHeterogeneous: 'Os dados são heterogéneos (CV > 35%).',
    insightSymmetric: 'A distribuição é aproximadamente simétrica.',
    insightRightSkewed: 'A distribuição mostra assimetria positiva (cauda à direita).',
    insightLeftSkewed: 'A distribuição mostra assimetria negativa (cauda à esquerda).',
    insightNoOutliers: 'Nenhum valor discrepante detetado.',
    insightOutliers: '{n} valor(es) discrepante(s) detetado(s) utilizando o método IQR.',
    insightIQR: 'O intervalo interquartil é {iqr} (de {q1} a {q3}).',
    filterNotice: '{n} caracter(es) não numérico(s) ignorado(s).',
    labelReport: 'Resumo para o seu relatório',
    btnCopy: 'Copiar Resumo',
    btnCopied: 'Copiado!',
    noMode: 'Sem moda',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Bibliografia e Referências',
  },
};
