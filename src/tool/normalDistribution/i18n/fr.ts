import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NormalDistributionUI } from '../ui';

const slug = 'calculateur-distribution-normale';
const title = 'Calculateur de Distribution Normale en Ligne';
const description =
  'Calculez instantanément les probabilités de la distribution normale: P(X ≤ a), P(X ≥ a), P(a ≤ X ≤ b) et normale inverse. Entrez la moyenne et l\'écart type et visualisez la courbe de Gauss avec la zone ombrée.';

const faqData = [
  {
    question: 'Qu\'est-ce que la distribution normale?',
    answer:
      "La distribution normale, ou courbe en cloche de Gauss, est la distribution de probabilité continue la plus importante en statistique. Elle est entièrement définie par deux paramètres: la moyenne (μ), qui fixe le centre, et l'écart type (σ), qui contrôle l'étendue. Elle est symétrique par rapport a la moyenne et ses queues s'étendent à l'infini.",
  },
  {
    question: 'Comment la probabilité est-elle calculée?',
    answer:
      "La probabilité est obtenue en intégrant la fonction de densité de probabilité (FDP). Comme il n'existe pas de primitive en forme fermée, elle est calculée via la fonction d'erreur (erf). Cette calculatrice utilise l'approximation haute précision d'Abramowitz et Stegun pour obtenir des résultats précis.",
  },
  {
    question: 'Qu\'est-ce qu\'un score z?',
    answer:
      "Le score z (ou score standardisé) indique de combien d'écarts types une valeur s'éloigne de la moyenne: z = (X - μ) / σ. Il permet de comparer des valeurs issues de distributions d'échelles différentes. Par exemple, z = 1 signifie que X est exactement 1 écart type au-dessus de la moyenne.",
  },
  {
    question: 'À quoi sert la distribution normale inverse?',
    answer:
      "La normale inverse répond à la question: quelle valeur X correspond au p-ième percentile ? C'est-à-dire, étant donné P(X ≤ x) = p, trouver x. Elle est largement utilisée en contrôle qualité (limites de tolérance), en statistique inférentielle (valeurs critiques) et en simulation de variables aléatoires.",
  },
];

const howToData = [
  {
    name: 'Entrez les paramètres',
    text: "Saisissez la moyenne (μ) et l'écart type (σ > 0) de votre distribution normale. La distribution normale standard (μ=0, σ=1) est utilisée par défaut.",
  },
  {
    name: 'Choisissez le type de calcul',
    text: "Sélectionnez un mode: P(X ≤ a) pour la queue gauche, P(X ≥ a) pour la queue droite, P(a ≤ X ≤ b) pour un intervalle, ou Inverse pour trouver la valeur X correspondant à un percentile.",
  },
  {
    name: 'Lisez le résultat et le graphique',
    text: "La probabilité s'affiche instantanément avec le score z. La courbe de Gauss montre la zone ombrée correspondant à la probabilité calculée.",
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de Distribution Normale: Probabilités en Temps Réel' },
    {
      type: 'paragraph',
      html: 'Le <strong>Calculateur de Distribution Normale</strong> calcule instantanément toute probabilité de la loi normale: queue gauche, queue droite, intervalle central et inverse. Il suffit d\'entrer la moyenne et l\'écart type pour obtenir le résultat et le visualiser sur la courbe de Gauss.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '4', label: 'Modes de calcul', icon: 'mdi:function-variant' },
        { value: 'Live', label: 'Résultats en temps réel', icon: 'mdi:lightning-bolt' },
        { value: 'Gratuit', label: 'Sans inscription', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Modes de Calcul' },
    {
      type: 'table',
      headers: ['Mode', 'Description', 'Exemple d\'utilisation'],
      rows: [
        ['<strong>P(X ≤ a)</strong>', 'Probabilité cumulée jusqu\'a la valeur a (queue gauche).', 'Pourcentage d\'élèves en dessous d\'un seuil.'],
        ['<strong>P(X ≥ a)</strong>', 'Probabilité de la queue droite à partir de a.', 'Probabilité de dépasser un seuil de qualité.'],
        ['<strong>P(a ≤ X ≤ b)</strong>', 'Probabilité dans un intervalle central ou asymétrique.', 'Proportion de pièces dans la tolérance.'],
        ['<strong>Inverse</strong>', 'Trouve X tel que P(X ≤ x) = p (le p-ième percentile).', 'Valeur critique dans un test d\'hypothèse.'],
      ],
    },
    {
      type: 'tip',
      title: 'La règle empirique 68 95 99.7',
      html: 'Dans toute distribution normale: <strong>68%</strong> des données tombent dans ±1σ de la moyenne, <strong>95%</strong> dans ±2σ et <strong>99,7%</strong> dans ±3σ. Vérifiez-le en calculant P(-1 ≤ z ≤ 1) avec μ=0 et σ=1.',
    },
    { type: 'title', level: 2, text: 'Glossaire Rapide' },
    {
      type: 'glossary',
      items: [
        { term: 'Moyenne (μ)', definition: 'Paramètre de localisation. Détermine le centre de la courbe de Gauss.' },
        { term: 'Écart type (σ)', definition: 'Paramètre d\'échelle. Contrôle la largeur de la cloche. Doit être strictement positif.' },
        { term: 'Score z', definition: 'Valeur standardisée: z = (X - μ) / σ. Indique de combien d\'écarts types X s\'éloigne de la moyenne.' },
        { term: 'FDP', definition: "Fonction de Densité de Probabilité. L'aire sous la FDP sur un intervalle est égale à la probabilité de cet intervalle." },
      ],
    },
  ],
  ui: {
    labelTitle: 'Distribution Normale',
    labelMean: 'Moyenne',
    labelStdDev: 'Écart type',
    btnLeft: 'P(X ≤ a)',
    btnRight: 'P(X ≥ a)',
    btnBetween: 'P(a ≤ X ≤ b)',
    btnInverse: 'Inverse',
    labelValue: 'Valeur X (a)',
    labelValueA: 'Borne inférieure (a)',
    labelValueB: 'Borne supérieure (b)',
    labelPercentile: 'Percentile p (0 < p < 1)',
    resultProbability: 'Probabilité',
    resultX: 'Valeur X',
    resultZScore: 'Score z',
    resultZScoreA: 'z₁ (borne inférieure)',
    resultZScoreB: 'z₂ (borne supérieure)',
    hintStdDev: "L'écart type doit être supérieur a 0.",
    hintPercentile: 'Le percentile doit être compris entre 0 et 1 (exclusif).',
    labelChart: 'Courbe de Gauss',
    chartDesc: 'Zone ombrée correspondant à la probabilité calculée.',
    labelReport: 'Résumé pour votre rapport',
    btnCopy: 'Copier le Résumé',
    btnCopied: 'Copié !',
  },
};
