import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'calculadora-contraste-hipoteses-ab-test';
const title = 'Calculadora de Teste de Hipóteses A/B Online';
const description =
  'Compare dois grupos (A e B) para determinar se existe uma diferença estatisticamente significativa nas suas conversões ou médias. Calcule o valor-P instantaneamente.';

const faqData = [
  {
    question: 'O que significa o Valor-P?',
    answer:
      'O valor-P indica-lhe a probabilidade de a diferença de desempenho entre o Grupo A e o Grupo B ser puro acaso. Se o valor-P estiver abaixo do nível de significância (normalmente 0,05), significa que pode ter 95% de confiança de que a diferença estrutural é real.',
  },
  {
    question: 'O que é o Nível de Significância (Alfa ou α)?',
    answer:
      'É o seu nível de exigência para o teste. Um Alfa de 0,05 requer estar 95% seguro de que o Grupo B difere do A para o considerar válido. Um Alfa de 0,01 requer muito mais exigência (99%). A convenção académica e industrial é usar 0,05 por defeito.',
  },
  {
    question: 'Qual é a diferença entre o teste de proporções e o teste de médias?',
    answer:
      'O teste de proporções mede variáveis dicotómicas de sucesso ou fracasso: cliques, aberturas de e-mail, conversões. O teste de médias compara o comportamento quantitativo acumulado: gasto médio no carrinho ou dias de recuperação clínica.',
  },
  {
    question: 'E se a minha amostra for inferior a 30 sujeitos?',
    answer:
      'A aproximação pela distribuição normal torna-se menos precisa com amostras tão pequenas (teorema do limite central). Para uma decisão clínica, recomendamos o uso de técnicas de probabilidade exata mais conservadoras ou o teste t de Student ajustado.',
  },
];

const howToData = [
  {
    name: 'Selecione o Objetivo Numérico',
    text: 'No painel de configuração, defina se deseja medir taxas de conversão (proporções simples) ou médias gerais como valores (médias).',
  },
  {
    name: 'Introduza os Dados de Controlo (Grupo A)',
    text: 'Preencha os casos enviados/expostos e quantos sucessos tiveram (ou a sua média).',
  },
  {
    name: 'Introduza os Dados Experimentais (Grupo B)',
    text: 'Introduza os números para a nova iniciativa ou variante que está a medir.',
  },
  {
    name: 'Anote o Veredito Estatístico',
    text: 'Observe o Juiz de Significância e copie a justificação gerada sobre se a melhoria real (Lift) rejeita a assunção aleatória.',
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Referências',
  bibliography: [
    { name: 'Teste de hipóteses - Wikipédia', url: 'https://pt.wikipedia.org/wiki/Teste_de_hip%C3%B3teses' },
    { name: 'Calculadora de Teste A/B - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de Teste de Hipóteses A/B Online' },
    {
      type: 'paragraph',
      html: 'Tomar decisões baseadas em intuições é perigoso; tomá-las baseadas em dados puros é o caminho para o sucesso. A <strong>Calculadora de Teste de Hipóteses (Teste A/B)</strong> é a ferramenta definitiva para analistas, profissionais de marketing e investigadores que precisam de validar se a diferença entre dois grupos é estatisticamente significativa ou simplesmente resultado do acaso.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Valor-P', label: 'O Juiz Final', icon: 'mdi:scale-balance' },
        { value: 'Local', label: 'Sem Upload de Dados', icon: 'mdi:shield-check' },
        { value: 'Instantâneo', label: 'Gráficos Nativos', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Porque dividimos os testes em Conversões e Médias?' },
    {
      type: 'paragraph',
      html: 'Dependendo da natureza do seu estudo, a métrica de sucesso mudará. A nossa ferramenta suporta nativamente os dois tipos de testes estatísticos mais utilizados na indústria.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Teste de Proporções (Conversões)',
          description: 'Compara percentagens ou taxas de sucesso entre dois grupos.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Ideal para Marketing (Cliques, Vendas, Subscrições)',
            'Usa Casos Totais (n) e Sucessos (x)',
            'Aplica teste-Z de duas proporções',
          ],
        },
        {
          title: 'Teste de Médias Contínuas',
          description: 'Compara valores numéricos médios entre dois grupos.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Ideal para Ticket Médio, Tempo no Site ou Ensaios Clínicos',
            'Usa Média (μ) e Desvio Padrão (σ)',
            'Aplica uma aproximação normal robusta para amostras (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Como interpretar os resultados: O Valor-P é o seu guia' },
    {
      type: 'paragraph',
      html: 'O coração desta calculadora é o famoso <strong>Valor-P</strong>. Este número indica-lhe a probabilidade de ter obtido estas diferenças observadas se a Hipótese Nula (que postula que "ambos os grupos são iguais") fosse verdadeira.',
    },
    {
      type: 'table',
      headers: ['Valor-P Observado', 'Significado Prático', 'Decisão Padrão'],
      rows: [
        ['<strong>Superior a 0,05</strong>', 'A diferença é pequena em relação à variância. O acaso poderia explicá-la.', '<strong>NÃO Rejeitar</strong> a Hipótese Nula. Nenhuma melhoria real provada.'],
        ['<strong>Inferior a 0,05</strong>', 'é extremamente improvável que o acaso cause tal diferença. Existe um efeito real.', '<strong>Rejeitar</strong> a Hipótese Nula. A variante B é melhor!'],
        ['<strong>Inferior a 0,01</strong>', 'A evidência a favor da mudança é esmagadora (99% de confiança).', '<strong>Rejeitar com firmeza</strong>. Sucesso retumbante da experiência.'],
      ],
    },
    {
      type: 'tip',
      title: 'Correção para Pequenas Amostras',
      html: 'Se os seus grupos processarem menos de 30 sujeitos, a ferramenta exibirá um aviso de "Amostra Pequena". Nestes cenários limite, a aproximação normal clássica perde precisão; recomendamos o uso de testes t de Student exatos ou ferramentas de Fisher.',
    },
    { type: 'title', level: 2, text: 'Glossário do Teste A/B' },
    {
      type: 'glossary',
      items: [
        { term: 'Grupo de Controlo (A)', definition: 'A versão original ou a linha de base contra a qual irá medir a sua experiência.' },
        { term: 'Variante (B)', definition: 'A nova versão modificada que espera que melhore as métricas.' },
        { term: 'Lift (Melhoria Relativa)', definition: 'Mudança percentual entre o desempenho do Grupo B em relação à base do Grupo A.' },
        { term: 'Nível de Significância (α)', definition: 'O limiar de erro que está disposto a aceitar (normalmente 5% ou 0,05).' },
      ],
    },
  ],
  ui: {
    labelParams: 'Parâmetros',
    btnConversions: 'Conversões',
    btnMeans: 'Médias',
    labelGroupA: 'Grupo A (Controlo)',
    labelGroupB: 'Grupo B (Variante)',
    labelTotalCases: 'Casos Totais',
    labelSuccesses: 'Sucessos ou Conversões',
    labelMean: 'Média Média',
    labelStdDev: 'Desvio Padrão',
    labelAlpha: 'Nível de Significância',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    labelDirection: 'Direção do Teste',
    btn2Tails: '2 Caudas (Dif.)',
    btn1Tail: '1 Cauda (B > A)',
    alertTitle: 'Aviso de Fiabilidade Estatística',
    alertBody: 'Está a usar um tamanho de amostra muito pequeno ou valores extremos (0 sucessos). A estimativa pode não ser representativa do mundo real.',
    alertLinkText: 'Calcule o seu tamanho de amostra ideal aqui',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'Valor-P',
    sigDescInitial: 'Existe evidência suficiente para rejeitar a hipótese nula',
    labelLift: 'Análise de Melhoria (Lift)',
    labelLiftText: 'de melhoria em relação ao Grupo A',
    labelConfidencePrefix: 'Confiança estatística:',
    labelDistributions: 'Distribuições de Probabilidade',
    chartDesc: 'Observe a sobreposição: menos sobreposição implica maior certeza de que as diferenças são reais e não resultado do acaso.',
    labelReport: 'Texto para o seu relatório',
    defaultJustification: 'Após analisar X sujeitos, o Grupo B apresenta uma melhoria de Y% com uma confiança estatística de Z% (p=0,00).',
    btnCopy: 'Copiar Texto',
    btnCopied: 'Copiado!',
    sigText: 'Existe evidência suficiente para rejeitar a hipótese nula.',
    noSigText: 'A diferença não é estatisticamente significativa.',
    justIntro: 'Após analisar um total de',
    justSamples: ' amostras, o Grupo B apresenta uma mudança de ',
    justRespectTo: '% em relação ao Grupo A.',
    justWithConfidence: ' Com uma confiança estatística de ',
    justDiff: ', a diferença empírica ',
    justSig: 'É estatisticamente significativa',
    justNoSig: 'NÃO é estatisticamente significativa',
    faqTitle: 'Perguntas Frecuentes',
    bibliographyTitle: 'Bibliografia e Referências',
  },
};
