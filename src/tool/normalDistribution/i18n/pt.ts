import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'calculadora-distribuicao-normal';
const title = 'Calculadora de Distribuição Normal Online';
const description =
  'Calcule probabilidades da distribuição normal instantaneamente: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) e normal inversa. Insira a média e o desvio padrão e visualize a curva de Gauss com a área sombreada.';

const faqData = [
  {
    question: 'O que é a distribuição normal?',
    answer:
      "A distribuição normal, ou curva de Gauss, é a distribuição de probabilidade contínua mais importante em estatística. É totalmente definida por dois parâmetros: a média (μ), que define o centro, e o desvio padrão (σ), que controla a dispersão. É simétrica em relação à média e as suas caudas estendem-se até ao infinito.",
  },
  {
    question: 'Como é calculada a probabilidade?',
    answer:
      "A probabilidade é obtida integrando a função de densidade de probabilidade (PDF). Como não existe uma primitiva em forma fechada, é calculada utilizando a função de erro (erf). Esta calculadora utiliza a aproximação de alta precisão de Abramowitz e Stegun para produzir resultados precisos.",
  },
  {
    question: 'O que é um z-score?',
    answer:
      'Um z-score (ou valor padronizado) indica quantos desvios padrão um valor está afastado da média: z = (X - μ) / σ. Permite comparar valores de distribuições com escalas diferentes. Por exemplo, z = 1 significa que X está exatamente 1 desvio padrão acima da média.',
  },
  {
    question: 'Para que serve a distribuição normal inversa?',
    answer:
      'A normal inversa responde à questão: que valor X corresponde ao p-ésimo percentil? Ou seja, dado P(X ≤ x) = p, encontre x. É amplamente utilizada em controlo de qualidade (limites de tolerância), estatística inferencial (valores críticos) e simulação de variáveis aleatórias.',
  },
];

const howToData = [
  {
    name: 'Insira os parâmetros',
    text: 'Digite a média (μ) e o desvio padrão (σ > 0) da sua distribuição normal. A distribuição normal padrão (μ=0, σ=1) é utilizada por defeito.',
  },
  {
    name: 'Escolha o tipo de cálculo',
    text: 'Selecione um modo: P(X ≤ a) para a cauda esquerda, P(X ≥ a) para a cauda direita, P(a ≤ X ≤ b) para um intervalo, ou Inverso para encontrar o valor X para um determinado percentil.',
  },
  {
    name: 'Leia o resultado e o gráfico',
    text: 'A probabilidade é exibida instantaneamente juntamente com o z-score. A curva de Gauss mostra a área sombreada correspondente à probabilidade calculada.',
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

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    { name: 'Distribuição normal - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_normal' },
    { name: 'Função de erro - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_de_erro' },
    { name: 'Abramowitz e Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Escore padrão - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Escore_padr%C3%A3o' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Distribuição Normal: Probabilidades em Tempo Real' },
    {
      type: 'paragraph',
      html: 'A <strong>Calculadora de Distribuição Normal</strong> calcula qualquer probabilidade de distribuição normal instantaneamente: cauda esquerda, cauda direita, intervalo central e inversa. Basta inserir a média e o desvio padrão para obter o resultado e visualizá-lo na curva de Gauss.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Modos de Cálculo', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Resultados em Tempo Real', icon: 'mdi:lightning-bolt' },
        { value: 'Grátis', label: 'Sem Registo', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Modos de Cálculo' },
    {
      type: 'table',
      headers: ['Modo', 'Descrição', 'Exemplo de Uso'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilidade cumulativa até ao valor a (cauda esquerda).', 'Percentagem de alunos abaixo de um determinado patamar de nota.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilidade da cauda direita a partir do valor a.', 'Probabilidade de exceder um patamar de qualidade.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilidade dentro de um intervalo central ou assimétrico.', 'Proporção de peças dentro da tolerância.'],
        ['<strong>Inverso</strong>', 'Encontre X tal que P(X ≤ x) = p (o p-ésimo percentil).', 'Valor crítico num teste de hipóteses.'],
      ],
    },
    {
      type: 'tip',
      title: 'A Regra Empírica 68 95 99,7',
      html: 'Em qualquer distribuição normal: <strong>68%</strong> dos dados situam-se dentro de ±1σ da média, <strong>95%</strong> dentro de ±2σ e <strong>99,7%</strong> dentro de ±3σ. Verifique isto calculando P(-1 ≤ z ≤ 1) com μ=0 e σ=1.',
    },
    { type: 'title', level: 2, text: 'Glossário de Referência Rápida' },
    {
      type: 'glossary',
      items: [
        { term: 'Média (μ)', definition: 'Parâmetro de localização. Determina o centro da curva de Gauss.' },
        { term: 'Desvio Padrão (σ)', definition: 'Parâmetro de escala. Controla a largura da curva de sino. Deve ser estritamente positivo.' },
        { term: 'Z-score', definition: 'Valor padronizado: z = (X - μ) / σ. Indica quantos desvios padrão X está afastado da média.' },
        { term: 'PDF', definition: 'Função de Densidade de Probabilidade. A área sob a PDF num intervalo é igual à probabilidade desse intervalo.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribuição Normal',
    labelMean: 'Média',
    labelStdDev: 'Desvio Padrão',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inverso',
    labelValue: 'Valor X (a)',
    labelValueA: 'Limite inferior (a)',
    labelValueB: 'Limite superior (b)',
    labelPercentile: 'Percentil p (0 < p < 1)',
    resultProbability: 'Probabilidade',
    resultX: 'Valor X',
    resultZScore: 'Z-score',
    resultZScoreA: 'z₁ (limite inferior)',
    resultZScoreB: 'z₂ (limite superior)',
    hintStdDev: 'O desvio padrão deve ser superior a 0.',
    hintPercentile: 'O percentil deve estar entre 0 e 1 (exclusivo).',
    labelChart: 'Curva de Gauss',
    chartDesc: 'A área sombreada corresponde à probabilidade calculada.',
    labelReport: 'Resumo para o seu relatório',
    btnCopy: 'Copiar Resumo',
    btnCopied: 'Copiado!',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Bibliografia e Referências',
  },
};
