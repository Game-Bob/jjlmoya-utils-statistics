import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DescriptiveStatsUI } from '../ui';

const slug = 'calculateur-statistiques-descriptives';
const title = 'Calculateur de Statistiques Descriptives en Ligne';
const description =
  'Calculez instantanement toutes les mesures de statistiques descriptives : moyenne, mediane, mode, ecart type, variance, quartiles, asymetrie, kurtosis et plus. Collez vos donnees et obtenez les resultats en temps reel.';

const faqData = [
  {
    question: 'Quelle est la difference entre ecart type populationnel et echantillon?',
    answer:
      "L'ecart type populationnel divise par N (quand tous les elements sont connus). L'ecart type de l'echantillon divise par N-1 (correction de Bessel) pour corriger le biais lors de l'estimation a partir d'un sous-ensemble. Cette calculatrice utilise la formule echantillon (N-1), la plus courante en recherche et analyse de donnees.",
  },
  {
    question: 'Que signifie une asymetrie positive ou negative?',
    answer:
      "L'asymetrie mesure le manque de symetrie de la distribution de vos donnees. Une asymetrie positive (queue droite) signifie que les donnees se concentrent a gauche et la queue s'etend a droite. L'asymetrie negative est l'inverse. Une valeur proche de 0 indique une distribution approximativement symetrique.",
  },
  {
    question: 'Qu\'est-ce que le kurtosis et que signifie-t-il?',
    answer:
      'Le kurtosis mesure le "poids" des queues par rapport a une distribution normale. Cette calculatrice renvoie le kurtosis en exces, ou 0 est la reference (distribution normale). Les valeurs positives (leptokurtique) indiquent des queues plus lourdes. Les valeurs negatives (platykurtique) indiquent des queues plus legeres.',
  },
  {
    question: 'Dans quel format dois-je saisir mes donnees?',
    answer:
      'Collez vos nombres separes par des virgules, des espaces, des points-virgules ou des sauts de ligne. Exemples : "1, 2, 3, 4" ou "1 2 3 4" ou une valeur par ligne. La calculatrice ignore automatiquement les caracteres non numeriques.',
  },
];

const howToData = [
  {
    name: 'Saisissez vos donnees',
    text: 'Tapez ou collez vos valeurs numeriques dans la zone de texte, separees par des virgules, des espaces ou des sauts de ligne. Vous avez besoin d\'au moins 2 valeurs.',
  },
  {
    name: 'Lisez les resultats',
    text: 'Les 15 statistiques se mettent a jour en temps reel pendant que vous tapez. L\'histogramme montre la forme de la distribution de vos donnees.',
  },
  {
    name: 'Copiez le resume',
    text: 'Utilisez le bouton Copier pour copier un resume compact des statistiques cles pour votre rapport ou analyse.',
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
  faqTitle: 'Questions Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et References',
  bibliography: [
    { name: 'Statistique descriptive - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Statistique_descriptive' },
    { name: 'Ecart type - Wikipedia', url: 'https://fr.wikipedia.org/wiki/%C3%89cart_type' },
    { name: 'Asymetrie statistique - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Asymetrie_(statistiques)' },
    { name: 'Kurtosis - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Kurtosis' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de Statistiques Descriptives : 15 Metriques en un Clic' },
    {
      type: 'paragraph',
      html: 'Que vous soyez etudiant, chercheur ou analyste de donnees, le <strong>Calculateur de Statistiques Descriptives</strong> vous offre un resume statistique complet et instantane de tout ensemble de donnees numeriques. Collez vos donnees et obtenez 15 statistiques calculees simultanement.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '15', label: 'Statistiques calculees', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultats en temps reel', icon: 'mdi:lightning-bolt' },
        { value: 'Gratuit', label: 'Sans inscription', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Statistiques Calculees' },
    {
      type: 'table',
      headers: ['Statistique', 'Description'],
      rows: [
        ['<strong>Effectif (N)</strong>', 'Nombre total de valeurs dans le jeu de donnees.'],
        ['<strong>Moyenne</strong>', 'Moyenne arithmetique de toutes les valeurs.'],
        ['<strong>Mediane</strong>', 'Valeur centrale avec les donnees triees. Robuste aux valeurs aberrantes.'],
        ['<strong>Mode</strong>', 'La ou les valeurs les plus frequentes.'],
        ['<strong>Ecart type</strong>', 'Ecart type de l\'echantillon (divise par N-1).'],
        ['<strong>Variance</strong>', 'Carre de l\'ecart type de l\'echantillon.'],
        ['<strong>Min / Max</strong>', 'La plus petite et la plus grande valeur du jeu de donnees.'],
        ['<strong>Etendue</strong>', 'Difference entre le maximum et le minimum.'],
        ['<strong>Q1 / Q3</strong>', 'Premier et troisieme quartiles (percentiles 25 et 75).'],
        ['<strong>IQR</strong>', 'Ecart interquartile : Q3 moins Q1. Mesure la dispersion centrale.'],
        ['<strong>Asymetrie</strong>', 'Degre d\'asymetrie de la distribution par rapport a la moyenne.'],
        ['<strong>Kurtosis</strong>', 'Kurtosis en exces : poids des queues par rapport a la loi normale.'],
      ],
    },
    {
      type: 'tip',
      title: 'Quand utiliser la mediane plutot que la moyenne',
      html: 'Si vos donnees contiennent des valeurs aberrantes significatives (salaires, prix immobiliers), la <strong>mediane</strong> est une mesure de tendance centrale plus representative que la moyenne, qui est influencee par les valeurs extremes.',
    },
    { type: 'title', level: 2, text: 'Glossaire Rapide' },
    {
      type: 'glossary',
      items: [
        { term: 'IQR', definition: 'Ecart interquartile. Dispersion des 50% centraux des donnees. Utilise pour identifier les valeurs aberrantes.' },
        { term: 'Asymetrie', definition: 'Mesure l\'asymetrie de la distribution. Positive = queue droite plus longue. Negative = queue gauche plus longue.' },
        { term: 'Kurtosis en exces', definition: 'Poids des queues compare a la distribution normale. 0 est normal ; positif indique des queues plus lourdes.' },
        { term: 'Correction de Bessel', definition: 'Division par N-1 au lieu de N lors du calcul de la variance echantillon pour reduire le biais d\'estimation.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Statistiques Descriptives',
    labelData: 'Saisissez vos donnees',
    placeholderData: 'ex. 12, 45, 7, 23, 89, 34, 56, 11...',
    hintData: 'Entrez au moins 2 valeurs numeriques separees par des virgules, espaces ou sauts de ligne.',
    hintError: 'Entrez au moins 2 valeurs numeriques valides pour calculer les statistiques.',
    btnSample: 'Echantillon',
    btnPopulation: 'Population',
    groupCentral: 'Tendance Centrale',
    groupDispersion: 'Dispersion',
    groupPosition: 'Position',
    labelCount: 'Effectif (N)',
    labelSum: 'Somme',
    labelMean: 'Moyenne',
    labelMedian: 'Mediane',
    labelMode: 'Mode',
    labelStdDev: 'Ecart type',
    labelVariance: 'Variance',
    labelCV: 'CV',
    labelMin: 'Minimum',
    labelMax: 'Maximum',
    labelRange: 'Etendue',
    labelQ1: 'Q1 (25%)',
    labelQ3: 'Q3 (75%)',
    labelIQR: 'IQR',
    labelSkewness: 'Asymetrie',
    labelKurtosis: 'Kurtosis',
    labelBoxplot: 'Boite a Moustaches',
    labelChart: 'Distribution des Frequences',
    chartDesc: 'Histogramme avec largeur de classe automatique selon la regle de Sturges.',
    insightTitle: 'Interpretation Automatique',
    insightHomogeneous: 'Les donnees sont homogenes (CV < 15%).',
    insightModerate: 'Les donnees presentent une variabilite moderee (CV 15-35%).',
    insightHeterogeneous: 'Les donnees sont heterogenes (CV > 35%).',
    insightSymmetric: 'La distribution est approximativement symetrique.',
    insightRightSkewed: 'La distribution presente une asymetrie positive (queue droite).',
    insightLeftSkewed: 'La distribution presente une asymetrie negative (queue gauche).',
    insightNoOutliers: 'Aucune valeur aberrante detectee.',
    insightOutliers: '{n} valeur(s) aberrante(s) detectee(s) selon la methode IQR.',
    insightIQR: "L'ecart interquartile est {iqr} (de {q1} a {q3}).",
    filterNotice: '{n} caractere(s) non numerique(s) ignore(s).',
    labelReport: 'Resume pour votre rapport',
    btnCopy: 'Copier le Resume',
    btnCopied: 'Copie !',
    noMode: 'Pas de mode',
    faqTitle: 'Questions Frequentes',
    bibliographyTitle: 'Bibliographie et References',
  },
};
