import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PearsonCorrelationUI } from '../ui';

const slug = 'calculateur-correlation-pearson';
const title = 'Calculateur de Correlation de Pearson en Ligne';
const description =
  "Calculez le coefficient r de Pearson, le coefficient de détermination r² et la droite de régression linéaire à partir de paires de données. Outil 100% privé et local.";

const faqData = [
  {
    question: 'Qu\'est-ce que le coefficient de corrélation de Pearson ?',
    answer:
      'C\'est une mesure statistique qui quantifie la force et la direction de la relation linéaire entre deux variables quantitatives. Sa valeur oscille entre -1 (corrélation négative parfaite) et 1 (corrélation positive parfaite), 0 indiquant l\'absence de relation linéaire.',
  },
  {
    question: 'Puis-je coller des données directement depuis Excel ?',
    answer:
      'Oui, notre calculatrice est optimisée pour interpréter les données copiées-collées depuis Excel, Google Sheets ou des fichiers CSV. Elle détecte automatiquement les colonnes et nettoie les caractères non numériques comme les symboles monétaires ou les pourcentages.',
  },
  {
    question: 'Pourquoi la valeur r est-elle basse si mes données semblent liées ?',
    answer:
      "Le coefficient de Pearson ne détecte que les relations linéaires. Si vos données ont une relation courbe (comme une parabole ou logarithmique), le coefficient de Pearson peut être très bas même s'il existe une connexion claire entre les variables.",
  },
  {
    question: 'Que signifie r² dans cette calculatrice ?',
    answer:
      "C'est le coefficient de détermination. Il représente la proportion de la variance de la variable dépendante qui est prédictible à partir de la variable indépendante. Par exemple, un r² de 0,85 indique que 85% de la variabilité est expliquée par le modèle linéaire.",
  },
];

const howToData = [
  {
    name: 'Préparation des données',
    text: 'Ayez vos paires de valeurs (X et Y) à portée de main. Elles peuvent être dans un fichier Excel ou simplement dans une liste de texte.',
  },
  {
    name: 'Saisie des données',
    text: 'Collez vos données dans la zone de texte de la calculatrice. Assurez-vous que chaque paire de valeurs est sur une nouvelle ligne.',
  },
  {
    name: 'Configuration',
    text: "Sélectionnez le séparateur décimal (point ou virgule) utilisé dans vos données pour éviter les erreurs de calcul.",
  },
  {
    name: 'Analyse des résultats',
    text: "Vérifiez instantanément la valeur r, son interprétation et observez le diagramme de dispersion pour confirmer la tendance.",
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

export const content: ToolLocaleContent<PearsonCorrelationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et Références',
  bibliography: [
    { name: "Pearson's correlation coefficient - Wikipedia", url: 'https://en.wikipedia.org/wiki/Pearson_correlation_coefficient' },
    { name: 'Corrélation de Pearson : Définition, formule et interprétation', url: 'https://numiqo.es/tutorial/pearson-correlation' },
    { name: 'Interprétation du Coefficient de Corrélation de Pearson', url: 'https://www.cimec.es/coeficiente-correlacion-pearson/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de Correlation de Pearson en Ligne: Guide Complet' },
    {
      type: 'paragraph',
      html: "Le <strong>coefficient de corrélation de Pearson</strong> (r) est l'outil statistique standard pour mesurer comment deux variables numériques se rapportent l'une à l'autre de manière linéaire. Que ce soit pour un travail académique, une analyse de marché ou une recherche scientifique, comprendre la force de vos données est vital.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1', label: 'Relation Totale', icon: 'mdi:trending-up' },
        { value: '0', label: 'Indépendance', icon: 'mdi:graph-outline' },
        { value: 'Local', label: 'Confidentialité 100%', icon: 'mdi:shield-lock' },
      ],
    },
    { type: 'title', level: 2, text: 'À quoi sert le coefficient r de Pearson ?' },
    {
      type: 'paragraph',
      html: "L'indice de Pearson permet de découvrir s'il existe une tendance : quand une variable augmente, l'autre augmente-t-elle aussi (<strong>corrélation positive</strong>) ou diminue-t-elle (<strong>corrélation négative</strong>) ? Cet outil est fondamental pour l'analyse de données avec Excel, SPSS ou Python.",
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Corrélation de Pearson',
          description: 'Idéale pour les variables quantitatives avec une relation linéaire claire.',
          icon: 'mdi:chart-line',
          highlight: true,
          points: ['Données Numériques', 'Relation Linéaire', 'Requiert la Normalité'],
        },
        {
          title: 'Corrélation de Spearman',
          description: 'Meilleure pour les données ordinales ou les relations monotones non linéaires.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: ['Données Ordinales (Rangs)', 'Relation Monotone', 'Résistante aux Valeurs Extrêmes'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Interprétation des résultats : tableau de valeurs' },
    {
      type: 'table',
      headers: ['Plage de Valeur (r)', 'Force de la Relation', 'Signification Pratique'],
      rows: [
        ['<strong>0,90 à 1,00</strong>', 'Très Forte', 'Relation quasi parfaite. Idéale pour les prédictions.'],
        ['<strong>0,70 à 0,89</strong>', 'Forte', 'Une dépendance linéaire claire entre les variables existe.'],
        ['<strong>0,40 à 0,69</strong>', 'Modérée', 'Une tendance visible, mais avec une dispersion notable.'],
        ['<strong>0,20 à 0,39</strong>', 'Faible', "La relation est pauvre ; d'autres facteurs ont plus d'influence."],
        ['<strong>0,00 à 0,19</strong>', 'Nulle/Négligeable', 'Aucune relation linéaire significative n\'existe.'],
      ],
    },
    { type: 'title', level: 2, text: 'Avantages et limites de cette calculatrice' },
    {
      type: 'list',
      items: [
        '<strong>Collage depuis Excel/CSV :</strong> Pas besoin de saisir les données une par une.',
        '<strong>Diagramme de Dispersion instantané</strong> avec droite de régression.',
        '<strong>Confidentialité 100% :</strong> Vos données ne quittent jamais votre PC.',
      ],
    },
    {
      type: 'list',
      items: [
        'Détecte uniquement les relations linéaires (pas les courbes).',
        'Haute sensibilité aux valeurs extrêmes (outliers).',
        'Nécessite au moins 2 paires de données valides.',
      ],
    },
    {
      type: 'tip',
      title: 'Conseil pour les Experts',
      html: "Avant de faire confiance aveuglément à la valeur r, regardez toujours le <strong>Diagramme de Dispersion</strong>. Parfois, un coefficient élevé peut être causé par une seule valeur aberrante, ou un coefficient faible peut masquer une relation courbe très forte que Pearson ne peut pas voir.",
    },
    { type: 'title', level: 2, text: 'Glossaire statistique' },
    {
      type: 'glossary',
      items: [
        { term: 'Covariance', definition: 'Mesure dans quelle mesure deux variables aléatoires changent conjointement.' },
        { term: 'Régression Linéaire', definition: 'Modèle mathématique utilisé pour approximer la relation de dépendance entre variables.' },
        { term: 'Coefficient r²', definition: 'Proportion de la variance prédictible à partir de la variable indépendante.' },
        { term: 'Diagramme de Dispersion', definition: 'Graphique de points montrant la distribution de paires de données dans un plan.' },
      ],
    },
  ],
  ui: {
    headingData: 'Données CSV',
    btnLoadExample: 'Charger un exemple',
    btnClear: 'Effacer les données',
    placeholder: 'Collez vos données (X, Y) ou glissez un CSV...',
    labelDecimalSep: 'Sép. Décimal',
    optPoint: 'Point (.)',
    optComma: 'Virgule (,)',
    privacyBadge: 'Exécution locale privée',
    labelR: 'Coefficient de Pearson (r)',
    labelR2: 'Détermination (r²)',
    labelN: 'Paires (n)',
    labelSlope: 'Pente (m)',
    labelMeanXY: 'Moyenne X | Y',
    labelWaiting: 'En attente de données...',
    interpPerfectPos: 'Corrélation positive parfaite',
    interpPerfectNeg: 'Corrélation négative parfaite',
    interpStrong: 'Corrélation forte',
    interpModerate: 'Corrélation modérée',
    interpWeak: 'Corrélation faible/nulle',
    errorMsg: 'Saisissez au moins 2 paires de données pour le graphique',
    btnCopyTitle: 'Copier les résultats',
    btnDownloadTitle: 'Télécharger le graphique',
    faqTitle: 'Questions Fréquentes',
    bibliographyTitle: 'Bibliographie et Références',
  },
};
