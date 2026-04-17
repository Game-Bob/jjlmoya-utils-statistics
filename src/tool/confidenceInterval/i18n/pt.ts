import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'calculadora-intervalo-confianca';
const title = 'Calculadora de Intervalo de Confiança Online';
const description =
  'Calcule intervalos de confiança para a média da população usando as distribuições Z ou t de Student. Insira a média da amostra, o desvio padrão, o tamanho da amostra e o nível de confiança para obter instantaneamente o intervalo, a margem de erro e o valor crítico.';

const faqData = [
  {
    question: 'O que é um intervalo de confiança?',
    answer:
      'Um intervalo de confiança (IC) é um intervalo de valores calculado a partir de dados amostrais que, com uma determinada probabilidade (nível de confiança), contém o verdadeiro parâmetro da população. Por exemplo, um IC de 95% para a média significa que, se você repetisse a amostragem muitas vezes, 95% dos intervalos calculados conteriam a verdadeira média da população.',
  },
  {
    question: 'Quando devo usar Z em vez de t?',
    answer:
      'Use Z quando o desvio padrão da população (σ) for conhecido ou quando n for grande (>30). Use t de Student quando apenas o desvio padrão da amostra (s) estiver disponível e n for pequeno. Para n > 30, ambas as distribuições são praticamente equivalentes, mas t permanece mais conservadora e tecnicamente correta quando σ é desconhecido.',
  },
  {
    question: 'Como o tamanho da amostra afeta a largura do intervalo?',
    answer:
      'A largura do IC é proporcional a 1/√n: quadruplicar o tamanho da amostra reduz a margem de erro pela metade. Isso explica por que amostras grandes produzem estimativas mais precisas e por que o planeamento do tamanho da amostra é crítico no desenho de estudos estatísticos.',
  },
  {
    question: 'O que é a margem de erro?',
    answer:
      'A margem de erro (ME) é metade da largura do IC: ME = valor_crítico × SE, onde SE = σ/√n é o erro padrão. Indica a diferença máxima esperada entre a estimativa da amostra e o verdadeiro valor da população no nível de confiança especificado.',
  },
];

const howToData = [
  {
    name: 'Insira os parâmetros da amostra',
    text: 'Digite a média da amostra (x̄), o desvio padrão (σ ou s > 0) e o tamanho da amostra (n ≥ 2).',
  },
  {
    name: 'Escolha o nível de confiança',
    text: 'Selecione 90%, 95% ou 99% usando os botões de acesso rápido ou digite qualquer valor entre 0 e 100.',
  },
  {
    name: 'Selecione a distribuição e leia o resultado',
    text: 'Escolha Z se o desvio padrão da população for conhecido, ou t para uma amostra. O intervalo, a margem de erro e o valor crítico são calculados instantaneamente.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    { name: 'Intervalo de confiança - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Intervalo_de_confian%C3%A7a' },
    { name: 'Distribuição t de Student - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_t_de_Student' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Erro padrão - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Erro_padr%C3%A3o' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Intervalo de Confiança: Resultados em Tempo Real' },
    {
      type: 'paragraph',
      html: 'A <strong>Calculadora de Intervalo de Confiança</strong> calcula instantaneamente o intervalo, a margem de erro, o valor crítico e o erro padrão. Suporta a distribuição Z (sigma da população conhecido) e t de Student (sigma da amostra), com qualquer nível de confiança entre 0 e 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Distribuições Z e t', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultados em Tempo Real', icon: 'mdi:lightning-bolt' },
        { value: 'Grátis', label: 'Sem Registo', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Distribuição Z vs t de Student' },
    {
      type: 'table',
      headers: ['Critério', 'Distribuição Z', 't de Student'],
      rows: [
        ['Quando usar', 'σ conhecido ou n > 30', 's da amostra, qualquer n'],
        ['Valor crítico (95%)', 'z* = 1,960', 't* depende de gl = n−1'],
        ['Graus de liberdade', 'Não aplicável', 'gl = n − 1'],
        ['Para n grande', 'IC mais estreito', 'Converge para Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Como Interpretar Corretamente um Intervalo de Confiança',
      html: 'Um <strong>intervalo de confiança de 95%</strong> não significa que haja uma probabilidade de 95% de a verdadeira média estar nesse intervalo específico. Significa que o <strong>procedimento</strong>, se repetido com muitas amostras, produziria intervalos contendo a verdadeira média 95% das vezes. Uma vez calculado, o intervalo ou contém o valor verdadeiro ou não.',
    },
    { type: 'title', level: 2, text: 'Glossário de Referência Rápida' },
    {
      type: 'glossary',
      items: [
        { term: 'Intervalo de Confiança (IC)', definition: 'Intervalo [x̄ − ME, x̄ + ME] que estima o parâmetro da população no nível de confiança escolhido.' },
        { term: 'Nível de Confiança', definition: 'Proporção de intervalos que conteriam o verdadeiro parâmetro se a experiência fosse repetida muitas vezes. Valores típicos: 90%, 95%, 99%.' },
        { term: 'Erro Padrão (SE)', definition: 'SE = σ/√n. Mede a variabilidade da média da amostra em torno da média da população.' },
        { term: 'Margem de Erro (ME)', definition: 'ME = z* × SE (ou t* × SE). É a metade da largura do intervalo de confiança.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Intervalo de Confiança',
    labelMean: 'Média da Amostra (x̄)',
    labelStdDev: 'Desvio Padrão',
    labelN: 'Tamanho da Amostra (n)',
    labelConf: 'Nível de Confiança (%)',
    btnZ: 'Z (σ conhecido)',
    btnT: 't de Student',
    labelCI: 'Intervalo de Confiança',
    labelME: 'Margem de Erro',
    labelCritical: 'Valor Crítico',
    labelSE: 'Erro Padrão',
    labelDF: 'Graus de Liberdade',
    hintN: 'n deve ser um número inteiro igual ou superior a 2.',
    hintStdDev: 'O desvio padrão deve ser superior a 0.',
    hintConf: 'O nível de confiança deve estar entre 0 e 100.',
    labelChart: 'Visualização do Intervalo',
    chartDesc: 'Linha numérica com o IC sombreado e a margem de erro.',
    labelReport: 'Resumo para o seu relatório',
    btnCopy: 'Copiar Resumo',
    btnCopied: 'Copiado!',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Bibliografia e Referências',
    tabStats: 'Estatísticas de Resumo',
    tabRaw: 'Dados Brutos',
    labelRaw: 'Colar dados',
    rawPlaceholder: 'Digite ou cole valores separados por vírgulas, espaços ou novas linhas. Ex.: 12.3, 15.1, 11.8',
    hintRaw: 'Insira pelo menos 2 valores numéricos válidos.',
    labelDist: 'Distribuição',
    distAuto: 'Auto',
    noticeAutoRaw: 'Dados da amostra: t de Student aplicado',
    noticeAutoLowN: 'n < 30: t de Student recomendado',
    noticeAutoHighN: 'n ≥ 30: distribuição Z recomendada',
    calcCI: 'Intervalo IC',
    calcInverse: 'n min',
    labelTargetME: 'Margem de erro alvo (E)',
    hintTargetME: 'E deve ser um número superior a 0.',
    labelReqN: 'Tamanho mínimo da amostra',
  },
};
