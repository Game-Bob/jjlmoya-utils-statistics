import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ChiSquareUI } from '../ui';

const slug = 'calculateur-chi-deux-independance';
const title = 'Calculateur du Test du Chi Deux d\'Indépendance en Ligne';
const description =
  'Déterminez s\'il existe une relation statistique entre deux variables catégorielles. Remplissez la matrice des fréquences observées et calculez la valeur P instantanément.';

const faqData = [
  {
    question: 'Qu\'est-ce que le test du Chi-Deux d\'indépendance ?',
    answer:
      'C\'est un test statistique utilisé pour évaluer la probabilité qu\'une association observée entre deux variables catégorielles ou nominales soit due au hasard. Par exemple : si le dessert préféré d\'une personne est lié à la région dans laquelle elle vit.',
  },
  {
    question: 'À quoi sert le coefficient V de Cramér ?',
    answer:
      'Tandis que le Chi-deux vous indique s\'il y a "une" relation, le coefficient V de Cramér vous indique "combien" de relation il y a. Il va de 0 (indépendance totale) à 1 (dépendance absolue mathématique). Les valeurs supérieures à 0,5 sont considérées comme très fortes sociologiquement.',
  },
  {
    question: 'Que se passe-t-il si mes Fréquences Attendues sont très faibles ?',
    answer:
      'L\'approximation mathématique du Chi-Deux perd en fiabilité si les fréquences attendues sont inférieures à 5 dans plus de 20 % des cellules. Notre outil vous avertira visuellement en cas de risque. Il est alors recommandé de fusionner les catégories douteuses.',
  },
  {
    question: 'Puis-je l\'utiliser pour des enquêtes qualitatives ?',
    answer:
      'Absolument oui. C\'est l\'outil principal pour la sociologie et les études de marché, où vous avez rarement affaire à des nombres décimaux mais plutôt à des catégories mutuellement exclusives (Célibataire/Marié, Oui/Non, Nord/Sud).',
  },
];

const howToData = [
  {
    name: 'Définir la matrice',
    text: 'Commencez par sélectionner la taille de votre tableau de contingence selon le nombre d\'options de votre Variable A (lignes) et de votre Variable B (colonnes).',
  },
  {
    name: 'Saisir les données observées',
    text: 'Remplacez les chiffres de base en remplissant le premier tableau avec le compte exact de vos données réelles.',
  },
  {
    name: 'Examiner les résidus',
    text: 'Observez quelles cellules de notre tableau s\'illuminent (en vert vif ou en rouge). C\'est là que se trouvent les anomalies causant la non-indépendance des variables.',
  },
  {
    name: 'Copier la conclusion',
    text: 'Collez dans votre mémoire ou rapport de projet le texte auto-généré avec la validation mathématique de la valeur P.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<ChiSquareUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et Références',
  bibliography: [
    {
      name: 'Chi-squared test - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Chi-squared_test',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Calculateur du Test du Chi-Deux d\'Indépendance',
    },
    {
      type: 'paragraph',
      html: 'Tandis que les outils classiques comme le Test A/B ou la Statistique Descriptive fonctionnent parfaitement avec des nombres continus (moyennes, gains, poids), le monde réel est plein de données catégorielles (couleurs, marques, niveaux de satisfaction). Le <strong>Calculateur du Chi-Deux d\'Indépendance</strong> est le test "Reine" pour déterminer analytiquement si deux variables qualitatives sont statistiquement connectées ou si elles varient de manière totalement indépendante.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'Tableau', label: 'Dynamique jusqu\'à 3×3', icon: 'mdi:table' },
        { value: 'V de Cramér', label: 'Force d\'Association', icon: 'mdi:link' },
        { value: 'Heatmap', label: 'Résidus et Déviation', icon: 'mdi:fire' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'À quoi sert exactement la Statistique Chi-Deux (χ²) ?',
    },
    {
      type: 'paragraph',
      html: 'Le Test d\'Indépendance Chi-Deux compare les <em>Fréquences Observées</em> (les chiffres réels que vous avez mesurés et collectés) avec les <em>Fréquences Attendues</em> (les effectifs que nous attendrions dans chaque cellule s\'il n\'y avait aucune interaction entre les variables).',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Variables Dépendantes (Relation Existante)',
          description: 'Les proportions d\'une catégorie varient fortement selon l\'autre.',
          icon: 'mdi:link',
          highlight: true,
          points: [
            'Exemple : Les visiteurs mobiles préfèrent le Design A, mais les utilisateurs PC le Design B.',
            'Le Chi-Deux (χ²) monte en flèche et la valeur P chute.',
            'Le V de Cramér indique la force (ex. Fort > 0,5).',
          ],
        },
        {
          title: 'Variables Indépendantes (Hasard)',
          description: 'Les proportions restent stables à tous les niveaux.',
          icon: 'mdi:link-off',
          highlight: false,
          points: [
            'Exemple : La couleur des yeux d\'un client n\'affecte pas quelle marque de voiture il achète.',
            'Le Chi-Deux est minuscule et la valeur P est supérieure à 0,05.',
            'L\'Hypothèse Nulle ne peut pas être rejetée.',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'V de Cramér : Comprendre la Force du Lien',
    },
    {
      type: 'paragraph',
      html: 'Obtenir une valeur P très basse ne signifie pas que les variables sont "intensément" liées ; cela indique seulement que le hasard ne peut pas être responsable (peut-être parce que vous avez des dizaines de milliers de cas réels). Pour mesurer la "taille de l\'effet", nous incorporons automatiquement le <strong>Coefficient V de Cramér</strong>.',
    },
    {
      type: 'table',
      headers: ['Calculateur (Valeur V)', 'Qualification Analytique', 'Traduction'],
      rows: [
        [
          '<strong>0,00 à 0,10</strong>',
          'Association Nulle / Triviale',
          'Théoriquement dépendants, mais de manière imperceptible et inutile pour les affaires.',
        ],
        [
          '<strong>0,11 à 0,30</strong>',
          'Association Faible',
          'Un lien léger existe, mais de nombreux autres facteurs externes ont plus de poids.',
        ],
        [
          '<strong>0,31 à 0,50</strong>',
          'Association Modérée',
          'Les deux caractéristiques s\'influencent notablement l\'une l\'autre.',
        ],
        [
          '<strong>Plus de 0,50</strong>',
          'Association Forte',
          'Lien très clair. Connaître la variable A prédit remarquablement la variable B.',
        ],
      ],
    },
    {
      type: 'tip',
      title: 'Conditions de Faisabilité Mathématique',
      html: 'Attention aux cellules vides ! Pour que l\'approximation chi-deux de Pearson reste robuste sous la courbe en cloche, il est méthodologiquement requis qu\'au moins 80 % des <em>Fréquences Attendues</em> (et non observées) soient supérieures à 5, et aucune cellule inférieure à 1. Si cette condition n\'est pas remplie, notre indicateur d\'alerte se déclenchera, vous suggérant de fusionner des catégories.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Carte de Chaleur Résiduelle Intégrée',
    },
    {
      type: 'paragraph',
      html: 'Pour améliorer l\'UX et faciliter les conclusions des rapports, notre matrice colorera automatiquement le fond des cellules en fonction de leurs résidus standardisés (déviation) :<br/><br/><strong>Teintes vertes :</strong> La cellule a <em>beaucoup plus de succès</em> que ce qui serait purement mathématiquement attendu.<br/><strong>Teintes rouges :</strong> La cellule est dangereusement "vide" par rapport à la norme attendue.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Glossaire du Chi-Deux',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fréquence Observée',
          definition:
            'Le décompte tel que vous l\'avez physiquement compté en laboratoire ou dans les enquêtes.',
        },
        {
          term: 'Fréquence Attendue',
          definition:
            'Calcul théorique résultant du croisement du ratio marginal de la ligne par celui de la colonne.',
        },
        {
          term: 'Degrés de Liberté (df)',
          definition:
            'La quantité géométrique de données libres. On l\'obtient en soustrayant 1 aux lignes et aux colonnes, puis en les multipliant.',
        },
        {
          term: 'Résidu Standardisé',
          definition:
            'Différence normalisée entre l\'observé et le réel. Mesure quelle cellule "pousse" le plus la découverte.',
        },
      ],
    },
  ],
  ui: {
    labelConfig: 'Configuration',
    labelTableSize: 'Taille du Tableau (Lignes × Colonnes)',
    labelAlpha: 'Niveau de Signification (α)',
    alpha90: '0,10 (90 %)',
    alpha95: '0,05 (95 %)',
    alpha99: '0,01 (99 %)',
    infoText:
      'Calcule automatiquement la fréquence théorique, la valeur χ² et le coefficient V de Cramér de force d\'association en utilisant une inférence purement locale.',
    labelObserved: 'Fréquences Observées (Entrée)',
    btnShowExpected: 'Voir les Fréquences Attendues (H₀)',
    expectedDesc:
      'Ce sont les valeurs qui existeraient dans chaque cellule s\'il n\'y avait aucune relation entre les deux variables (distribution aléatoire).',
    alertTitle: 'Avertissement Statistique (Cellules < 5)',
    alertBody:
      'Il y a des fréquences attendues très faibles. L\'approximation χ² pourrait ne pas être fiable. Il est suggéré de fusionner des catégories ou d\'utiliser le test exact de Fisher.',
    labelPValue: 'Valeur P (p)',
    sigDescInitial: 'Relation significative détectée',
    labelGlobalStats: 'Statistiques Globales',
    labelChiSquareStat: 'Chi-Deux (χ²)',
    labelDegrees: 'Degrés (df)',
    labelCramer: 'Force d\'Association (V de Cramér)',
    labelVisualization: 'Visualisation des Résidus (Observé vs Attendu)',
    heatmapInfo: 'Les cellules du tableau d\'entrée sont colorées selon la variation résiduelle.',
    labelReport: 'Texte pour votre rapport',
    defaultJustification:
      'Après avoir analysé un total de N observations, nous avons trouvé une valeur χ²(df) = X. Avec une valeur p de P, on conclut qu\'une dépendance significative existe.',
    btnCopy: 'Copier le Texte',
    rowLabel: 'Ligne',
    colLabel: 'Col',
    totalLabel: 'TOTAL',
    cramerNull: 'Nulle',
    cramerWeak: 'Faible',
    cramerModerate: 'Modérée',
    cramerStrong: 'Forte',
    sigText: 'Association significative détectée (dépendance).',
    noSigText: 'Aucune preuve de relation (indépendance).',
    chartLegendObs: 'Ligne Observée',
    chartLegendExp: 'Attendu',
    btnCopied: 'Copié !',
    justificationIntro: 'Après avoir analysé',
    justificationTableOf: 'cas dans un tableau',
    justificationObtained: ', nous avons obtenu',
    justificationPAt: '. Évalué au niveau α=',
    justificationConcluded: ', on conclut empiriquement que',
    justificationSig: 'UNE ASSOCIATION FORTE EXISTE entre les variables (V de Cramér :',
    justificationNoSig: 'AUCUNE association statistiquement significative N\'EXISTE',
    faqTitle: 'Questions Fréquentes',
    bibliographyTitle: 'Bibliographie et Références',
  },
};
