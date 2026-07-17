import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'calculateur-statistiques-descriptives';
const title = 'Calculateur de Statistiques Descriptives en Ligne';
const description =
  'Calculez instantanément toutes les mesures de statistiques descriptives: moyenne, médiane, mode, écart type, variance, quartiles, asymétrie, kurtosis et plus. Collez vos données et obtenez les résultats en temps réel.';

const faqData = [
  {
    question: 'Quelle est la différence entre écart type populationnel et échantillon?',
    answer:
      "L'écart type populationnel divise par N (quand tous les éléments sont connus). L'écart type de l'échantillon divise par N-1 (correction de Bessel) pour corriger le biais lors de l'estimation à partir d'un sous-ensemble. Cette calculatrice utilise la formule échantillon (N-1), la plus courante en recherche et analyse de données.",
  },
  {
    question: 'Que signifie une asymétrie positive ou negative?',
    answer:
      "L'asymétrie mesure le manque de symétrie de la distribution de vos données. Une asymétrie positive (queue droite) signifie que les données se concentrent à gauche et la queue s'étend à droite. L'asymétrie négative est l'inverse. Une valeur proche de 0 indique une distribution approximativement symétrique.",
  },
  {
    question: 'Qu\'est-ce que le kurtosis et que signifie-t-il?',
    answer:
      'Le kurtosis mesure le "poids" des queues par rapport à une distribution normale. Cette calculatrice renvoie le kurtosis en excès, où 0 est la référence (distribution normale). Les valeurs positives (leptokurtique) indiquent des queues plus lourdes. Les valeurs négatives (platykurtique) indiquent des queues plus légères.',
  },
  {
    question: 'Dans quel format dois-je saisir mes données?',
    answer:
      'Collez vos nombres séparés par des virgules, des espaces, des points-virgules ou des sauts de ligne. Exemples: "1, 2, 3, 4" ou "1 2 3 4" ou une valeur par ligne. La calculatrice ignore automatiquement les caractères non numériques.',
  },
];

const howToData = [
  {
    name: 'Saisissez vos données',
    text: 'Tapez ou collez vos valeurs numériques dans la zone de texte, séparées par des virgules, des espaces ou des sauts de ligne. Vous avez besoin d\'au moins 2 valeurs.',
  },
  {
    name: 'Lisez les résultats',
    text: 'Les 15 statistiques se mettent à jour en temps réel pendant que vous tapez. L\'histogramme montre la forme de la distribution de vos données.',
  },
  {
    name: 'Copiez le résumé',
    text: 'Utilisez le bouton Copier pour copier un résumé compact des statistiques clés pour votre rapport ou analyse.',
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

export const content: ToolLocaleContent<DescriptiveStatsUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de Statistiques Descriptives: 15 Métriques en un Clic' },
    {
      type: 'paragraph',
      html: 'Que vous soyez étudiant, chercheur ou analyste de données, le <strong>Calculateur de Statistiques Descriptives</strong> vous offre un résumé statistique complet et instantané de tout ensemble de données numériques. Pega tus datos y obtén 15 statistiques calculées simultanément.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Statistiques calculées', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Résultats en temps réel', icon: 'mdi:lightning-bolt' },
        { value: 'Gratuit', label: 'Sans inscription', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Statistiques Calculées' },
    {
      type: 'table',
      headers: ['Statistique', 'Description'],
      rows: [
        ['<strong>Effectif (N)</strong>', 'Nombre total de valeurs dans le jeu de données.'],
        ['<strong>Moyenne</strong>', 'Moyenne arithmétique de toutes les valeurs.'],
        ['<strong>Médiane</strong>', 'Valeur centrale avec les données triées. Robuste aux valeurs aberrantes.'],
        ['<strong>Mode</strong>', 'La ou les valeurs les plus fréquentes.'],
        ['<strong>Écart type</strong>', 'Écart type de l\'échantillon (divisé par N-1).'],
        ['<strong>Variance</strong>', 'Carré de l\'écart type de l\'échantillon.'],
        ['<strong>Min / Max</strong>', 'La plus petite et la plus grande valeur du jeu de données.'],
        ['<strong>Étendue</strong>', 'Différence entre le maximum et le minimum.'],
        ['<strong>Q1 / Q3</strong>', 'Premier et troisième quartiles (percentiles 25 et 75).'],
        ['<strong>IQR</strong>', 'Écart interquartile: Q3 moins Q1. Mesure la dispersion centrale.'],
        ['<strong>Asymétrie</strong>', 'Degré d\'asymétrie de la distribution par rapport à la moyenne.'],
        ['<strong>Kurtosis</strong>', 'Kurtosis en excès: poids des queues par rapport à la loi normale.'],
      ],
    },
    {
      type: 'tip',
      title: 'Quand utiliser la médiane plutôt que la moyenne',
      html: 'Si vos données contiennent des valeurs aberrantes significatives (salaires, prix immobiliers), la <strong>médiane</strong> est une mesure de tendance centrale plus représentative que la moyenne, qui est influencée par les valeurs extrêmes.',
    },
    { type: 'title', level: 2, text: 'Glossaire Rapide' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Écart interquartile. Dispersion des 50% centraux des données. Utilisé pour identifier les valeurs aberrantes.' },
        { term: 'Asymétrie', definition: 'Mesure l\'asymétrie de la distribution. Positive = queue droite plus longue. Négative = queue gauche plus longue.' },
        { term: 'Kurtosis en excès', definition: 'Poids des queues comparé à la distribution normale. 0 est normal ; positif indique des queues plus lourdes.' },
        { term: 'Correction de Bessel', definition: 'Division par N-1 au lieu de N lors du calcul de la variance échantillon pour réduire le biais d\'estimation.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Statistiques Descriptives',
    labelData: 'Saisissez vos données',
    placeholderData: 'ex. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Entrez au moins 2 valeurs numériques séparées par des virgules, espaces ou sauts de ligne.',
    hintError: 'Entrez au moins 2 valeurs numériques valides pour calculer les statistiques.',
    btnSample: 'Échantillon',
    btnPopulation: 'Population',
    groupCentral: 'Tendance Centrale',
    groupDispersion: 'Dispersion',
    groupPosition: 'Position',
    labelCount: 'Effectif (N)',
    labelSum: 'Somme',
    labelMean: 'Moyenne',
    labelMedian: 'Médiane',
    labelMode: 'Mode',
    labelStdDev: 'Écart type',
    labelVariance: 'Variance',
    labelCV: 'CV',
    labelMin: 'Minimum',
    labelMax: 'Maximum',
    labelRange: 'Étendue',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Asymétrie',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Boîte à Moustaches',
    labelChart: 'Distribution des Fréquences',
    chartDesc: 'Histogramme avec largeur de classe automatique selon la règle de Sturges.',
    insightTitle: 'Interprétation Automatique',
    insightHomogeneous: 'Les données sont homogènes (CV < 15%).',
    insightModerate: 'Les données présentent une variabilité modérée (CV 15-35%).',
    insightHeterogeneous: 'Les données sont hétérogènes (CV > 35%).',
    insightSymmetric: 'La distribution est approximativement symétrique.',
    insightRightSkewed: 'La distribution présente une asymétrie positive (queue droite).',
    insightLeftSkewed: 'La distribution présente une asymétrie négative (queue gauche).',
    insightNoOutliers: 'Aucune valeur aberrante détectée.',
    insightOutliers: '{n} valeur(s) aberrante(s) détectée(s) selon la méthode IQR.',
    insightIQR: "L'écart interquartile est {iqr} (de {q1} à {q3}).",
    filterNotice: '{n} caractère(s) non numérique(s) ignoré(s).',
    labelReport: 'Résumé pour votre rapport',
    btnCopy: 'Copier le Résumé',
    btnCopied: 'Copié !',
    noMode: 'Pas de mode',
  },
};
