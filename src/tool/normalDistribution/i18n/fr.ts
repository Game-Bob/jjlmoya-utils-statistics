import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'calculateur-distribution-normale';
const title = 'Calculateur de Distribution Normale en Ligne';
const description =
  'Calculez instantanement les probabilites de la distribution normale : P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) et normale inverse. Entrez la moyenne et l\'ecart type et visualisez la courbe de Gauss avec la zone ombreee.';

const faqData = [
  {
    question: 'Qu\'est-ce que la distribution normale?',
    answer:
      "La distribution normale, ou courbe en cloche de Gauss, est la distribution de probabilite continue la plus importante en statistique. Elle est entierement definie par deux parametres : la moyenne (μ), qui fixe le centre, et l'ecart type (σ), qui controle l'etendue. Elle est symetrique par rapport a la moyenne et ses queues s'etendent a l'infini.",
  },
  {
    question: 'Comment la probabilite est-elle calculee?',
    answer:
      "La probabilite est obtenue en integrant la fonction de densite de probabilite (FDP). Comme il n'existe pas de primitive en forme fermee, elle est calculee via la fonction d'erreur (erf). Cette calculatrice utilise l'approximation haute precision d'Abramowitz et Stegun pour obtenir des resultats precis.",
  },
  {
    question: 'Qu\'est-ce qu\'un score z?',
    answer:
      "Le score z (ou score standardise) indique de combien d'ecarts types une valeur s'eloigne de la moyenne : z = (X - μ) / σ. Il permet de comparer des valeurs issues de distributions d'echelles differentes. Par exemple, z = 1 signifie que X est exactement 1 ecart type au-dessus de la moyenne.",
  },
  {
    question: 'A quoi sert la distribution normale inverse?',
    answer:
      "La normale inverse repond a la question : quelle valeur X correspond au p-ieme percentile ? C'est-a-dire, etant donne P(X ≤ x) = p, trouver x. Elle est largement utilisee en controle qualite (limites de tolerance), en statistique inferentielle (valeurs critiques) et en simulation de variables aleatoires.",
  },
];

const howToData = [
  {
    name: 'Entrez les parametres',
    text: "Saisissez la moyenne (μ) et l'ecart type (σ > 0) de votre distribution normale. La distribution normale standard (μ=0, σ=1) est utilisee par defaut.",
  },
  {
    name: 'Choisissez le type de calcul',
    text: "Selectionnez un mode : P(X ≤ a) pour la queue gauche, P(X ≥ a) pour la queue droite, P(a ≤ X ≤ b) pour un intervalle, ou Inverse pour trouver la valeur X correspondant a un percentile.",
  },
  {
    name: 'Lisez le resultat et le graphique',
    text: "La probabilite s'affiche instantanement avec le score z. La courbe de Gauss montre la zone ombreee correspondant a la probabilite calculee.",
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<NormalDistributionUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et References',
  bibliography: [
    { name: 'Distribution normale - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Loi_normale' },
    { name: "Fonction d'erreur - Wikipedia", url: 'https://fr.wikipedia.org/wiki/Fonction_d%27erreur' },
    { name: 'Abramowitz et Stegun - NIST', url: 'https://dlmf.nist.gov/' },
    { name: 'Score standard - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Variable_centree_reduite' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de Distribution Normale : Probabilites en Temps Reel' },
    {
      type: 'paragraph',
      html: 'Le <strong>Calculateur de Distribution Normale</strong> calcule instantanement toute probabilite de la loi normale : queue gauche, queue droite, intervalle central et inverse. Il suffit d\'entrer la moyenne et l\'ecart type pour obtenir le resultat et le visualiser sur la courbe de Gauss.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Modes de calcul', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Resultats en temps reel', icon: 'mdi:lightning-bolt' },
        { value: 'Gratuit', label: 'Sans inscription', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Modes de Calcul' },
    {
      type: 'table',
      headers: ['Mode', 'Description', 'Exemple d\'utilisation'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilite cumulee jusqu\'a la valeur a (queue gauche).', 'Pourcentage d\'eleves en dessous d\'un seuil.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilite de la queue droite a partir de a.', 'Probabilite de depasser un seuil de qualite.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilite dans un intervalle central ou asymetrique.', 'Proportion de pieces dans la tolerance.'],
        ['<strong>Inverse</strong>', 'Trouve X tel que P(X ≤ x) = p (le p-ieme percentile).', 'Valeur critique dans un test d\'hypothese.'],
      ],
    },
    {
      type: 'tip',
      title: 'La regle empirique 68 95 99.7',
      html: 'Dans toute distribution normale : <strong>68%</strong> des donnees tombent dans ±1σ de la moyenne, <strong>95%</strong> dans ±2σ et <strong>99,7%</strong> dans ±3σ. Verifiez-le en calculant P(-1 ≤ z ≤ 1) avec μ=0 et σ=1.',
    },
    { type: 'title', level: 2, text: 'Glossaire Rapide' },
    {
      type: 'glossary',
      items: [
        { term: 'Moyenne (μ)', definition: 'Parametre de localisation. Determine le centre de la courbe de Gauss.' },
        { term: 'Ecart type (σ)', definition: 'Parametre d\'echelle. Controle la largeur de la cloche. Doit etre strictement positif.' },
        { term: 'Score z', definition: 'Valeur standardisee : z = (X - μ) / σ. Indique de combien d\'ecarts types X s\'eloigne de la moyenne.' },
        { term: 'FDP', definition: "Fonction de Densite de Probabilite. L'aire sous la FDP sur un intervalle est egale a la probabilite de cet intervalle." },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribution Normale',
    labelMean: 'Moyenne',
    labelStdDev: 'Ecart type',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inverse',
    labelValue: 'Valeur X (a)',
    labelValueA: 'Borne inferieure (a)',
    labelValueB: 'Borne superieure (b)',
    labelPercentile: 'Percentile p (0 < p < 1)',
    resultProbability: 'Probabilite',
    resultX: 'Valeur X',
    resultZScore: 'Score z',
    resultZScoreA: 'z₁ (borne inferieure)',
    resultZScoreB: 'z₂ (borne superieure)',
    hintStdDev: "L'ecart type doit etre superieur a 0.",
    hintPercentile: 'Le percentile doit etre compris entre 0 et 1 (exclusif).',
    labelChart: 'Courbe de Gauss',
    chartDesc: 'Zone ombreee correspondant a la probabilite calculee.',
    labelReport: 'Resume pour votre rapport',
    btnCopy: 'Copier le Resume',
    btnCopied: 'Copie !',
    faqTitle: 'Questions Frequentes',
    bibliographyTitle: 'Bibliographie et References',
  },
};
