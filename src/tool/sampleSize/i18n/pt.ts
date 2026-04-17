import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'calculadora-tamanho-amostra';
const title = 'Calculadora de Tamanho de Amostra Online';
const description =
  'Calcule o número exato de pessoas necessárias para o seu estudo. Inclui opções para população finita ou infinita, níveis de confiança ajustáveis e margens de erro.';

const faqData = [
  {
    question: 'O que é o tamanho da população?',
    answer:
      'É o número total de pessoas que compõem o grupo que deseja estudar ou inquirir. Se for inferior a 100.000, é geralmente considerada uma população finita. Se não tiver este dado ou se for ingerível, selecione a opção de população infinita.',
  },
  {
    question: 'Que nível de confiança devo escolher?',
    answer:
      '95% é o padrão mais utilizado na investigação científica, teses e estudos de mercado. Apenas altere este valor se o seu professor, tutor ou cliente exigir um nível de precisão diferente (ex: 99%).',
  },
  {
    question: 'Por que a ferramenta pede uma margem de erro?',
    answer:
      'Nenhuma amostra é perfeita. A margem de erro define a quantidade de imprecisão que está disposto a aceitar. O mais comum é 5%.',
  },
  {
    question: 'Que proporção esperada (p) devo usar se não souber nada sobre a população?',
    answer:
      'Deixe o valor padrão: 50%. Em estatística, isto representa o "pior cenário" porque maximiza a variância p(1-p), garantindo que o seu tamanho de amostra nunca seja demasiado pequeno em nenhuma circunstância.',
  },
];

const howToData = [
  {
    name: 'Defina a Sua População',
    text: 'Indique se conhece o número total do grupo a estudar (Finita) ou se prefere um cálculo conservador para grupos muito grandes/desconhecidos (Infinita).',
  },
  {
    name: 'Ajuste o Seu Nível de Confiança',
    text: 'Selecione 95% (recomendado), ou introduza um valor personalizado no menu suspenso.',
  },
  {
    name: 'Defina a Margem de Erro',
    text: 'Especifique a tolerância ao erro. Lembre-se que reduzi-la de 5% para 2% multiplica drasticamente o número de inquéritos que precisará de realizar.',
  },
  {
    name: 'Copie o Resultado',
    text: 'Olhe para o painel central e copie diretamente o Texto de Justificação gerado automaticamente para adicionar à sua tese ou relatório.',
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    { name: 'Determinação do tamanho da amostra - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Determina%C3%A7%C3%A3o_do_tamanho_da_amostra' },
    { name: 'Cálculo do tamanho da amostra - PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Tamanho de Amostra Online: O Guia Definitivo' },
    {
      type: 'paragraph',
      html: 'Determinar o número certo de pessoas a inquirir é um dos passos mais críticos em qualquer investigação, estudo de mercado ou projeto académico. A <strong>Calculadora de Tamanho de Amostra</strong> fornece a estudantes, investigadores e profissionais de marketing uma ferramenta precisa, rápida e fácil de usar para calcular o número exato de indivíduos necessários para resultados estatisticamente significativos.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Confiança Padrão', icon: 'mdi:check-decagram' },
        { value: '5%', label: 'Margem de Erro', icon: 'mdi:target' },
        { value: 'Rápido', label: 'Cálculo em Tempo Real', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Por que o Cálculo do Tamanho da Amostra é Fundamental?' },
    {
      type: 'paragraph',
      html: 'Em estatística, raramente é possível estudar uma população inteira. A solução é selecionar um subgrupo representativo conhecido como amostra. Se a amostra for demasiado pequena, os resultados serão enviesados. Se for demasiado grande, desperdiçará tempo e dinheiro desnecessariamente.',
    },
    { type: 'title', level: 2, text: 'Os Dois Modos de Cálculo: População Finita e Infinita' },
    {
      type: 'paragraph',
      html: 'A nossa calculadora adapta-se à sua situação oferecendo dois modos de cálculo distintos.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'População Finita (Conhecida)',
          description: 'O número total exato de indivíduos é conhecido.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Requer o valor N',
            'Aplica fator de correção',
            'Reduz o tamanho final da amostra',
          ],
        },
        {
          title: 'População Infinita (Desconhecida)',
          description: 'Tamanho total desconhecido, ingerível ou superior a 100.000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Não requer conhecer N',
            'Fórmula clássica padrão',
            'Cenário mais conservador e seguro',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Compreender os Parâmetros do Painel de Controlo' },
    {
      type: 'table',
      headers: ['Parâmetro', 'Descrição', 'Recomendação Padrão'],
      rows: [
        ['<strong>Nível de Confiança (Z)</strong>', 'Certeza matemática de que a amostra representa a população.', 'Use 95%.'],
        ['<strong>Margem de Erro (e)</strong>', 'Percentagem de desvio tolerado em relação à realidade.', 'Use 5%.'],
        ['<strong>Proporção Esperada (p)</strong>', 'Probabilidade de o evento estudado ocorrer.', 'Use 50% (maximiza a variância).'],
      ],
    },
    {
      type: 'tip',
      title: 'Cuidado com a Margem de Erro',
      html: 'Reduzir a margem de erro de 5% para 2% requer um aumento exponencial no tamanho da amostra. Verifique o Gráfico de Sensibilidade na calculadora antes de decidir por uma margem demasiado rigorosa.',
    },
    { type: 'title', level: 2, text: 'A Fórmula Matemática por Trás do Cálculo' },
    {
      type: 'list',
      items: [
        '<strong>População Infinita:</strong> n = (Z² × p × q) / e²',
        '<strong>Z:</strong> Valor crítico derivado do Nível de Confiança.',
        '<strong>p:</strong> Proporção esperada (q é 1 - p).',
        '<strong>e:</strong> Margem de erro tolerada.',
      ],
    },
    { type: 'title', level: 2, text: 'Glossário Rápido para Investigadores' },
    {
      type: 'glossary',
      items: [
        { term: 'População (N)', definition: 'Conjunto total de elementos ou indivíduos que partilham uma característica e que são objeto de estudo.' },
        { term: 'Amostra (n)', definition: 'Subconjunto representativo selecionado da população total.' },
        { term: 'Variância Máxima', definition: 'Ocorre quando p=0,5 (50%), garantindo que a amostra calculada é viável para o caso mais diverso possível.' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parâmetros',
    labelPopType: 'Tipo de População',
    btnFinite: 'Finita (Conhecida)',
    btnInfinite: 'Infinita (Desconhecida)',
    labelPopSize: 'Tamanho da População',
    labelConfLevel: 'Nível de Confiança (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Personalizado',
    labelConfCustom: 'Nível de Confiança Personalizado (%)',
    labelErrorMargin: 'Margem de Erro (%)',
    labelProportion: 'Proporção Esperada',
    hintProportion: '50% é o "pior cenário" que dá a maior e mais segura amostra.',
    hintProportionError: 'Uma proporção de 0% ou 100% anula a amostra. Sugerimos usar valores entre 5% e 95%.',
    labelSampleSize: 'Tamanho Sugerido',
    labelSampleSub: 'inquéritos necessários',
    labelZValue: 'Valor Crítico',
    labelReport: 'Texto para o seu relatório',
    defaultJustification: 'Para uma população de 10.000 pessoas, com um nível de confiança de 95% e uma margem de erro de 5%, o tamanho da amostra representativa é de 370 indivíduos.',
    btnCopy: 'Copiar Texto',
    btnCopied: 'Copiado!',
    labelChart: 'Sensibilidade: Tamanho vs Margem de Erro',
    chartDesc: 'Observe como o tamanho da amostra dispara ao tentar reduzir a margem de erro.',
    justForFinite: 'Para uma população de',
    justPersons: 'pessoas',
    justForInfinite: 'Para uma população infinita',
    justConfidence: ', com um nível de confiança de',
    justError: '% e uma margem de erro de',
    justResultIs: '%, o tamanho da amostra representativa é de',
    justUnit: 'indivíduos.',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Bibliografia e Referências',
  },
};
