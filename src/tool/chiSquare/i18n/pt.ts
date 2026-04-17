import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'calculadora-teste-independencia-qui-quadrado';
const title = 'Calculadora de Teste de Independência Qui Quadrado Online';
const description =
  'Determine se existe uma relação estatística entre duas variáveis categóricas. Preencha a matriz de frequências observadas e calcule o valor-P instantaneamente.';

const faqData = [
  {
    question: 'O que é o teste de independência Qui-Quadrado?',
    answer:
      'É um teste estatístico utilizado para avaliar a probabilidade de que uma associação observada entre duas variáveis categóricas ou nominais se deva ao acaso. Por exemplo: se a sobremesa favorita de uma pessoa está relacionada com a região onde vive.',
  },
  {
    question: 'Para que serve o coeficiente V de Cramér?',
    answer:
      'Enquanto o Qui-quadrado indica se existe "alguma" relação, o V de Cramér indica "quanta" relação existe. Varia de 0 (independência total) a 1 (dependência matemática absoluta). Valores acima de 0,5 são considerados muito fortes do ponto de vista sociológico.',
  },
  {
    question: 'O que acontece se as minhas Frequências Esperadas forem muito baixas?',
    answer:
      'A aproximação matemática do Qui-Quadrado perde fiabilidade se as frequências esperadas forem menores que 5 em mais de 20% das células. A nossa ferramenta irá avisá-lo visualmente se houver risco. Nesse caso, recomenda-se fundir categorias questionáveis.',
  },
  {
    question: 'Posso usar isto para inquéritos qualitativos?',
    answer:
      'Absolutamente sim. É a principal utilidade para a sociologia e estudos de mercado, onde raramente se lida com números decimais, mas sim com categorias mutuamente exclusivas (Solteiro/Casado, Sim/Não, Norte/Sul).',
  },
];

const howToData = [
  {
    name: 'Defina a Matriz',
    text: 'Primeiro, selecione o tamanho da sua Tabela de Contingência com base em quantas opções têm a sua Variável A (linhas) e a sua Variável B (colunas).',
  },
  {
    name: 'Introduza os Dados Observados',
    text: 'Substitua os números base preenchendo a primeira tabela com a contagem exata dos seus dados reais.',
  },
  {
    name: 'Reveja os Resíduos',
    text: 'Observe quais células na nossa tabela se iluminam (verde brilhante ou vermelho). Ali residem as anomalias que causam a não independência das variáveis.',
  },
  {
    name: 'Copie a Conclusão',
    text: 'Cole na sua tese ou relatório de projeto o texto gerado automaticamente com o suporte matemático do valor-P.',
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

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    {
      name: 'Teste qui-quadrado de Pearson - Wikipédia',
      url: 'https://pt.wikipedia.org/wiki/Teste_qui-quadrado_de_Pearson',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Calculadora de Teste de Independência Qui-Quadrado',
    },
    {
      type: 'paragraph',
      html: 'Enquanto ferramentas clássicas como o Teste A/B ou a Estatística Descritiva funcionam excelentemente com números contínuos (médias, ganhos, pesos), o mundo real está cheio de dados categóricos (cores, marcas, níveis de satisfação). A <strong>Calculadora de Independência Qui-Quadrado</strong> é o teste "Rei" para determinar analiticamente se duas variáveis qualitativas estão estatisticamente ligadas ou se variam de forma completamente independente uma da outra.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tabela', label: 'Dinâmica até 3×3', icon: 'mdi:table' },
        { value: 'V de Cramér', label: 'Força da Associação', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Resíduos e Desvio', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Para que serve exatamente a Estatística Qui-Quadrado (χ²)?',
    },
    {
      type: 'paragraph',
      html: 'O teste de independência Qui-Quadrado compara <em>Frequências Observadas</em> (os números reais que mediu e recolheu) com <em>Frequências Esperadas</em> (as contagens que esperaríamos em cada célula se não houvesse qualquer interação entre as variáveis).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Variáveis Dependentes (Existe Relação)',
          description: 'As proporções de uma categoria variam drasticamente dependendo da outra.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Exemplo: Visitantes mobile preferem o Design A, mas utilizadores de PC preferem o Design B.',
            'O Qui-Quadrado (χ²) dispara e o valor-P cai.',
            'O V de Cramér indica a força (ex: Forte > 0,5).',
          ],
        },
        {
          title: 'Variáveis Independentes (Acaso)',
          description: 'As proporções permanecem estáveis como uma rocha em todos os níveis.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Exemplo: A cor dos olhos de um cliente não afeta qual marca de carro ele compra.',
            'O Qui-Quadrado é minúsculo e o valor-P é superior a 0,05.',
            'A Hipótese Nula não pode ser descartada.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'V de Cramér: Compreender a Força da Ligação',
    },
    {
      type: 'paragraph',
      html: 'Obter um valor-P muito baixo não significa que as variáveis estejam "intensamente" ligadas; apenas indica que o acaso não pode ser o culpado (talvez porque tenha dezenas de milhares de casos reais). Para medir o "tamanho do efeito", incorporamos automaticamente o <strong>Coeficiente V de Cramér</strong>.',
    },
    {
      type: 'table',
      headers: ['Calculadora (Valor V)', 'Avaliação Analítica', 'Tradução'],
      rows: [
        [
          '<strong>0,00 a 0,10</strong>',
          'Associação Nula / Trivial',
          'Teoricamente dependente, mas de forma impercetível e inútil para fins comerciais.',
        ],
        [
          '<strong>0,11 a 0,30</strong>',
          'Associação Fraca',
          'Existe uma ligeira ligação, mas muitos outros fatores externos têm mais peso.',
        ],
        [
          '<strong>0,31 a 0,50</strong>',
          'Associação Moderada',
          'Ambas as características influenciam-se notavelmente.',
        ],
        [
          '<strong>Acima de 0,50</strong>',
          'Associação Forte',
          'Conexão muito clara. Conhecer a variável A prevê a variável B notavelmente bem.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Condições de Viabilidade Matemática',
      html: 'Cuidado com as células vazias! Para que a aproximação qui-quadrado de Pearson permaneça robusta sob a curva de Gauss, é metodologicamente exigido que pelo menos 80% das <em>Frequências Esperadas</em> (não as observadas) sejam superiores a 5, e nenhuma célula seja inferior a 1. Se esta condição não for cumprida, o nosso indicador de aviso disparará, sugerindo que funda categorias.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Heatmap de Resíduos Integrado',
    },
    {
      type: 'paragraph',
      html: 'Para melhorar a experiência do utilizador e facilitar as conclusões dos relatórios, a nossa matriz tingirá automaticamente o fundo das células com base nos seus resíduos padronizados (desvio):<br/><br/><strong>Tons de verde:</strong> A célula tem <em>muitos mais sucessos</em> do que seria puramente esperado matematicamente.<br/><strong>Tons de vermelho:</strong> A célula está perigosamente "vazia" em comparação com a norma esperada.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Glossário Qui-Quadrado',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Frequência Observada',
          definition: 'A contagem exatamente como a contou fisicamente no laboratório ou inquéritos.',
        },
        {
          term: 'Frequência Esperada',
          definition: 'Cálculo teórico resultante do cruzamento da proporção marginal da linha pela da coluna.',
        },
        {
          term: 'Graus de Liberdade (gl)',
          definition: 'A quantidade geométrica de dados livres. Obtido subtraindo 1 tanto às linhas como às colunas e multiplicando-os.',
        },
        {
          term: 'Resíduo Padronizado',
          definition: 'Diferença normalizada entre observado e esperado. Mede qual célula "empurra" mais a descoberta.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Definições',
    labelTableSize: 'Tamanho da Tabela (Linhas × Colunas)',
    labelAlpha: 'Nível de Significância (α)',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    infoText:
      'Calcula automaticamente a frequência teórica, o valor χ² e a força da associação através do coeficiente V de Cramér usando inferência puramente local.',
    labelObserved: 'Frequências Observadas (Dados de Entrada)',
    btnShowExpected: 'Mostrar Frequências Esperadas (H₀)',
    expectedDesc:
      'Estes são os valores que existiriam em cada célula se não houvesse qualquer relação entre as duas variáveis (distribuição aleatória).',
    alertTitle: 'Aviso Estatístico (Células < 5)',
    alertBody:
      'Existem frequências esperadas muito baixas. A aproximação χ² pode não ser fiável. Sugere-se fundir categorias ou usar o teste exato de Fisher.',
    labelPValue: 'Valor-P (p)',
    sigDescInitial: 'Existe uma relação significativa',
    labelGlobalStats: 'Estatísticas Globais',
    labelChiSquareStat: 'Qui-Quadrado (χ²)',
    labelDegrees: 'Graus (gl)',
    labelCramer: 'Força da Associação (V de Cramér)',
    labelVisualization: 'Visualização de Resíduos (Observado vs Esperado)',
    heatmapInfo: 'As células de entrada da tabela são coloridas de acordo com a variação residual.',
    labelReport: 'Texto para o seu relatório',
    defaultJustification:
      'Após analisar um total de N observações, encontramos um valor de χ²(gl) = X. Com um valor-p de P, conclui-se que existe uma dependência significativa.',
    btnCopy: 'Copiar Texto',
    rowLabel: 'Linha',
    colLabel: 'Col',
    totalLabel: 'TOTAL',
    cramerNull: 'Nenhuma',
    cramerWeak: 'Fraca',
    cramerModerate: 'Moderada',
    cramerStrong: 'Forte',
    sigText: 'Existe associação significativa (dependência).',
    noSigText: 'Nenhuma evidência de relação (independência).',
    chartLegendObs: 'Linha Observada',
    chartLegendExp: 'Esperado',
    btnCopied: 'Copiado!',
    justificationIntro: 'Após analisar',
    justificationTableOf: 'casos numa tabela',
    justificationObtained: ', obtivemos',
    justificationPAt: '. Avaliado ao nível α=',
    justificationConcluded: ', conclui-se empiricamente que',
    justificationSig: 'EXISTE UMA FORTE ASSOCIAÇÃO entre as variáveis (V de Cramér:',
    justificationNoSig: 'NÃO EXISTE associação estatisticamente significativa',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Bibliografia e Referências',
  },
};
