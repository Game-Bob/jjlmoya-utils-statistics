import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ABTestUI } from '../ui';

const slug = 'calculateur-test-ab-hypothese';
const title = 'Calculateur de Test AB Hypothese Statistique en Ligne';
const description =
  'Comparez deux groupes (A et B) pour déterminer si une différence statistiquement significative existe entre leurs conversions ou moyennes. Calculez la P-Valeur instantanément.';

const faqData = [
  {
    question: 'Que signifie la P-Valeur ?',
    answer:
      'La P-Valeur vous indique la probabilité que la différence de performance entre le Groupe A et le Groupe B soit pure chance. Si la P-Valeur est inférieure au niveau de signification (généralement 0,05), cela signifie que vous pouvez être sûr à 95% que la différence structurelle est réelle.',
  },
  {
    question: "Qu'est-ce que le Niveau de Signification (Alpha ou α) ?",
    answer:
      "C'est votre niveau d'exigence pour le test. Un Alpha de 0,05 exige d'être sûr à 95% que le Groupe B diffère de A pour le considérer valide. Un Alpha de 0,01 requiert beaucoup plus d'exigence (99%). La convention académique et industrielle est d'utiliser 0,05 par défaut.",
  },
  {
    question: "Quelle est la différence entre le test de proportions et le test de moyennes ?",
    answer:
      "Le test de proportions mesure des variables dichotomiques de succès ou d'échec : clics, ouvertures d'e-mails, conversions. Le test de moyennes compare le comportement quantitatif accumulé : dépense moyenne du panier d'achat ou jours de récupération clinique.",
  },
  {
    question: "Et si mon échantillon est inférieur à 30 sujets ?",
    answer:
      "L'approximation par distribution normale devient moins précise avec de si petits échantillons (théorème central limite). Pour une décision clinique, nous recommandons des techniques plus conservatrices de probabilité exacte ou de Student ajusté.",
  },
];

const howToData = [
  {
    name: "Sélectionnez l'Objectif Numérique",
    text: "Dans le panneau de configuration, définissez si vous souhaitez mesurer des taux de Conversion (proportions simples) ou des moyennes générales comme des montants (Moyennes).",
  },
  {
    name: 'Saisissez les Données de Contrôle (Groupe A)',
    text: "Renseignez les cas envoyés/exposés et combien de succès ils ont eus (ou leur moyenne).",
  },
  {
    name: 'Saisissez les Données Expérimentales (Groupe B)',
    text: "Entrez les chiffres de la nouvelle initiative ou variante que vous mesurez.",
  },
  {
    name: 'Notez le Verdict Statistique',
    text: "Regardez le Juge de Signification et copiez la justification générée sur si l'amélioration réelle (Lift) rejette l'hypothèse aléatoire.",
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

export const content: ToolLocaleContent<ABTestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et Références',
  bibliography: [
    { name: 'Statistical hypothesis testing - Wikipedia', url: 'https://en.wikipedia.org/wiki/Statistical_hypothesis_testing' },
    { name: 'A/B Testing Calculator - Optimizely', url: 'https://www.optimizely.com/sample-size-calculator/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de Test AB Hypothese Statistique en Ligne' },
    {
      type: 'paragraph',
      html: "Prendre des décisions basées sur l'intuition est dangereux ; les prendre sur la base de données pures est la voie du succès. Le <strong>Calculateur de Test A/B</strong> est l'outil définitif pour les analystes, marketeurs et chercheurs qui doivent valider si la différence entre deux groupes est statistiquement significative ou simplement due au hasard.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P-Valeur', label: 'Le Juge Final', icon: 'mdi:scale-balance' },
        { value: 'Local', label: 'Sans Envoi de Données', icon: 'mdi:shield-check' },
        { value: 'Instantané', label: 'Graphiques Natifs', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: 'Pourquoi diviser les tests en Conversions et Moyennes ?' },
    {
      type: 'paragraph',
      html: "Selon la nature de votre étude, la métrique de succès changera. Notre outil supporte nativement les deux types de tests statistiques les plus utilisés dans l'industrie.",
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Test de Proportions (Conversions)',
          description: 'Compare des pourcentages ou des taux de succès entre deux groupes.',
          icon: 'mdi:percent',
          highlight: true,
          points: [
            'Idéal pour le Marketing (Clics, Ventes, Abonnements)',
            'Utilise les Cas Totaux (n) et les Succès (x)',
            'Applique le Z-Test de deux proportions',
          ],
        },
        {
          title: 'Test de Moyennes Continues',
          description: 'Compare des valeurs numériques moyennes entre deux groupes.',
          icon: 'mdi:chart-bell-curve',
          highlight: false,
          points: [
            'Idéal pour Ticket Moyen, Temps sur Site ou Essais Cliniques',
            'Utilise la Moyenne (μ) et l\'Écart-Type (σ)',
            'Applique une approximation normale robuste pour les échantillons (Z/T)',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Comment interpréter les résultats : la P-Valeur est votre guide' },
    {
      type: 'paragraph',
      html: "Le coeur de cette calculatrice est la fameuse <strong>P-Valeur</strong>. Ce nombre vous indique la probabilité d'avoir obtenu ces différences observées si l'Hypothèse Nulle (qui postule que \"les deux groupes sont égaux\") était vraie.",
    },
    {
      type: 'table',
      headers: ['P-Valeur Observée', 'Signification Pratique', 'Décision Standard'],
      rows: [
        ['<strong>Supérieure à 0,05</strong>', 'La différence est faible par rapport à la variance. Le hasard pourrait l\'expliquer.', '<strong>NE PAS Rejeter</strong> l\'Hypothèse Nulle. Pas d\'amélioration réelle prouvée.'],
        ['<strong>Inférieure à 0,05</strong>', 'Il est très improbable que le hasard cause une telle différence. Il y a un effet réel.', '<strong>Rejeter</strong> l\'Hypothèse Nulle. La variante B est meilleure !'],
        ['<strong>Inférieure à 0,01</strong>', 'Les preuves en faveur du changement sont écrasantes (99% de confiance).', '<strong>Rejeter fermement</strong>. Succès retentissant de l\'expérience.'],
      ],
    },
    {
      type: 'tip',
      title: 'Correction pour Petits Échantillons',
      html: "Si vos groupes traitent moins de 30 sujets, l'outil affichera un avertissement \"Petit Échantillon\". Dans ces scénarios, l'approximation normale classique perd en précision ; nous recommandons d'utiliser le test exact de Student ou Fisher.",
    },
    { type: 'title', level: 2, text: 'Glossaire du Test A/B' },
    {
      type: 'glossary',
      items: [
        { term: 'Groupe de Contrôle (A)', definition: 'La version originale ou la ligne de base contre laquelle vous allez mesurer votre expérience.' },
        { term: 'Variante (B)', definition: "La nouvelle version modifiée que vous espérez améliorer les métriques." },
        { term: 'Lift (Amélioration Relative)', definition: 'Pourcentage de changement entre la performance du Groupe B par rapport à la base du Groupe A.' },
        { term: 'Niveau de Signification (α)', definition: "Le seuil d'erreur que vous êtes prêt à accepter (normalement 5% ou 0,05)." },
      ],
    },
  ],
  ui: {
    labelParams: 'Paramètres',
    btnConversions: 'Conversions',
    btnMeans: 'Moyennes',
    labelGroupA: 'Groupe A (Contrôle)',
    labelGroupB: 'Groupe B (Variante)',
    labelTotalCases: 'Cas Totaux',
    labelSuccesses: 'Succès ou Conversions',
    labelMean: 'Moyenne',
    labelStdDev: 'Écart-Type',
    labelAlpha: 'Niveau de Signification',
    alpha90: '0,10 (90%)',
    alpha95: '0,05 (95%)',
    alpha99: '0,01 (99%)',
    labelDirection: 'Direction du Test',
    btn2Tails: '2 Queues (Diff.)',
    btn1Tail: '1 Queue (B > A)',
    alertTitle: 'Avertissement de Fiabilité Statistique',
    alertBody: 'Vous utilisez une taille d\'échantillon très petite ou des valeurs extrêmes (0 succès). L\'estimation peut ne pas être représentative du monde réel.',
    alertLinkText: 'Calculez votre taille d\'échantillon idéale ici',
    alertLinkUrl: '/utilidades/calculadora-tamano-muestra/',
    labelPValue: 'P-Valeur',
    sigDescInitial: 'Il y a suffisamment de preuves pour rejeter l\'hypothèse nulle',
    labelLift: 'Analyse d\'Amélioration (Lift)',
    labelLiftText: 'd\'amélioration par rapport au Groupe A',
    labelConfidencePrefix: 'Confiance statistique :',
    labelDistributions: 'Distributions de Probabilité',
    chartDesc: 'Observez le chevauchement : moins de chevauchement implique une plus grande certitude que les différences sont réelles et non dues au hasard.',
    labelReport: 'Texte pour votre rapport',
    defaultJustification: 'Après analyse de X sujets, le Groupe B présente une amélioration de Y% avec une confiance statistique de Z% (p=0,00).',
    btnCopy: 'Copier le Texte',
    btnCopied: 'Copié !',
    sigText: 'Il y a suffisamment de preuves pour rejeter l\'hypothèse nulle.',
    noSigText: 'La différence n\'est pas statistiquement significative.',
    justIntro: 'Après analyse d\'un total de',
    justSamples: ' échantillons, le Groupe B présente un changement de ',
    justRespectTo: '% par rapport au Groupe A.',
    justWithConfidence: ' Avec une confiance statistique de ',
    justDiff: ', la différence empirique ',
    justSig: 'EST statistiquement significative',
    justNoSig: "n'est PAS statistiquement significative",
    faqTitle: 'Questions Fréquentes',
    bibliographyTitle: 'Bibliographie et Références',
  },
};
