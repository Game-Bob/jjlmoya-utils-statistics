import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'calculadora-correlacao-pearson';
const title = 'Calculadora de Correlação de Pearson Online';
const description =
  'Calcule o coeficiente r de Pearson, o coeficiente de determinação r² e a linha de regressão linear a partir de pares de dados. Ferramenta 100% privada e local.';

const faqData = [
  {
    question: 'O que é o coeficiente de correlação de Pearson?',
    answer:
      'É uma medida estatística que quantifica a força e a direção da relação linear entre duas variáveis quantitativas. O seu valor varia de -1 (correlação negativa perfeita) a 1 (correlação positiva perfeita), com 0 indicando a ausência de relação linear.',
  },
  {
    question: 'Posso colar dados diretamente do Excel?',
    answer:
      'Sim, a nossa calculadora está otimizada para interpretar dados copiados e colados do Excel, Google Sheets ou arquivos CSV. Ela deteta automaticamente as colunas e limpa caracteres não numéricos, como símbolos de moeda ou percentagens.',
  },
  {
    question: 'Por que o valor r é baixo se os meus dados parecem estar relacionados?',
    answer:
      'O coeficiente de Pearson apenas deteta relações lineares. Se os seus dados tiverem uma relação curva (como uma parábola ou logarítmica), o coeficiente de Pearson pode ser muito baixo, mesmo que exista uma ligação clara entre as variáveis.',
  },
  {
    question: 'O que significa r² nesta calculadora?',
    answer:
      'É o coeficiente de determinação. Representa a proporção da variância na variável dependente que é previsível a partir da variável independente. Por exemplo, um r² de 0,85 indica que 85% da variabilidade é explicada pelo modelo linear.',
  },
];

const howToData = [
  {
    name: 'Preparação de Dados',
    text: 'Tenha os seus pares de valores (X e Y) prontos. Eles podem estar num arquivo Excel ou simplesmente numa lista de texto.',
  },
  {
    name: 'Entrada de Dados',
    text: 'Cole os seus dados na área de texto da calculadora. Certifique-se de que cada par de valores esteja numa nova linha.',
  },
  {
    name: 'Configuração',
    text: 'Selecione o separador decimal (ponto ou vírgula) utilizado nos seus dados para evitar erros de cálculo.',
  },
  {
    name: 'Análise de Resultados',
    text: 'Reveja instantaneamente o valor r, a sua interpretação e observe o diagrama de dispersão para confirmar a tendência.',
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    { name: 'Coeficiente de correlação de Pearson - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Coeficiente_de_correla%C3%A7%C3%A3o_de_Pearson' },
    { name: 'Pearson Correlation: Definition, Formula and Interpretation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: 'Interpretation of Pearson\'s Correlation Coefficient', url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Correlação de Pearson Online: Guia Completo' },
    {
      type: 'paragraph',
      html: 'O <strong>coeficiente de correlação de Pearson</strong> (r) é a ferramenta estatística padrão para medir como duas variáveis numéricas se relacionam linearmente entre si. Seja para trabalhos académicos, análise de mercado ou investigação científica, compreender a força dos seus dados é vital.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Relação Total', icon: 'mdi:trending-up' },
        { value: '0', label: 'Independência', icon: 'mdi:graph-outline' },
        { value: 'Local', label: '100% Privacidade', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'Para que serve o coeficiente r de Pearson?' },
    {
      type: 'paragraph',
      html: 'O índice de Pearson revela se existe uma tendência: quando uma variável aumenta, a outra também aumenta (<strong>correlação positiva</strong>) ou diminui (<strong>correlação negativa</strong>)? Esta ferramenta é essencial para a análise de dados em Excel, SPSS ou Python.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Correlação de Pearson',
          description: 'Ideal para variáveis quantitativas com uma relação linear clara.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Dados Numéricos', 'Relação Linear', 'Requer Normalidade'],
        },
        {
          title: 'Correlação de Spearman',
          description: 'Melhor para dados ordinais ou relações monótonas não lineares.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Dados Ordinais (Ranks)', 'Relação Monótona', 'Resistente a Outliers'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interpretação de Resultados: Tabela de Valores' },
    {
      type: 'table',
      headers: ['Intervalo de Valores (r)', 'Força da Relação', 'Significado Prático'],
      rows: [
        ['<strong>0,90 a 1,00</strong>', 'Muito Forte', 'Relação quase perfeita. Ideal para previsões.'],
        ['<strong>0,70 a 0,89</strong>', 'Forte', 'Existe uma dependência linear clara entre as variáveis.'],
        ['<strong>0,40 a 0,69</strong>', 'Moderada', 'Uma tendência visível, mas com dispersão notável.'],
        ['<strong>0,20 a 0,39</strong>', 'Fraca', 'Relação pobre; outros fatores têm mais influência.'],
        ['<strong>0,00 a 0,19</strong>', 'Nula/Insignificante', 'Não existe nenhuma relação linear significativa.'],
      ],
    },
    { type: 'title', level: 2, text: 'Vantagens e limitações desta calculadora' },
    {
      type: 'list',
      items: [
        '<strong>Colar do Excel/CSV:</strong> Não é necessário inserir os dados um a um.',
        '<strong>Diagrama de Dispersão Instantâneo</strong> com linha de regressão.',
        '<strong>100% Privacidade:</strong> Os seus dados nunca saem do seu PC.',
      ],
    },
    {
      type: 'list',
      items: [
        'Apenas deteta relações lineares (não curvas).',
        'Alta sensibilidade a valores extremos (outliers).',
        'Requer pelo menos 2 pares de dados válidos.',
      ],
    },
    {
      type: 'tip',
      title: 'Dica de Especialista',
      html: 'Antes de confiar cegamente no valor r, olhe sempre para o <strong>Diagrama de Dispersão</strong>. Às vezes, um coeficiente alto pode ser causado por um único outlier, ou um coeficiente baixo pode esconder uma relação curva muito forte que o Pearson não consegue detetar.',
    },
    { type: 'title', level: 2, text: 'Glossário Estatístico' },
    {
      type: 'glossary',
      items: [
        { term: 'Covariância', definition: 'Medida de quanto duas variáveis aleatórias mudam juntas.' },
        { term: 'Regressão Linear', definition: 'Modelo matemático usado para aproximar a relação de dependência entre variáveis.' },
        { term: 'Coeficiente r²', definition: 'Proporção da variância que é previsível a partir da variável independente.' },
        { term: 'Diagrama de Dispersão', definition: 'Gráfico de pontos que mostra a distribuição dos pares de dados num plano.' },
      ],
    },
  ],
  ui: {
    headingData: 'Dados CSV',
    btnLoadExample: 'Carregar exemplo',
    btnClear: 'Limpar dados',
    placeholder: 'Cole os seus dados (X, Y) ou arraste um CSV...',
    labelDecimalSep: 'Sep. Decimal',
    optPoint: 'Ponto (.)',
    optComma: 'Vírgula (,)',
    privacyBadge: 'Execução local privada',
    labelR: 'Coeficiente de Pearson (r)',
    labelR2: 'Determinação (r²)',
    labelN: 'Pares (n)',
    labelSlope: 'Pendente (m)',
    labelMeanXY: 'Média X | Y',
    labelWaiting: 'Aguardando dados...',
    interpPerfectPos: 'Correlação positiva perfeita',
    interpPerfectNeg: 'Correlação negativa perfeita',
    interpStrong: 'Correlação forte',
    interpModerate: 'Correlação moderada',
    interpWeak: 'Correlação fraca/nula',
    errorMsg: 'Insira pelo menos 2 pares de dados para o gráfico',
    btnCopyTitle: 'Copiar resultados',
    btnDownloadTitle: 'Descarregar gráfico',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Bibliografia e Referências',
  },
};
