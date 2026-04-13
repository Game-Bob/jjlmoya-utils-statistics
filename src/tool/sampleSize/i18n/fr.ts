import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SampleSizeUI } from '../ui';

const slug = 'calculateur-taille-echantillon';
const title = 'Calculateur de Taille d Echantillon en Ligne';
const description =
  "Calculez le nombre exact de personnes nécessaires pour votre étude. Inclut des options pour une population finie ou infinie, des niveaux de confiance et une marge d'erreur ajustables.";

const faqData = [
  {
    question: "Qu'est-ce que la taille de la population ?",
    answer:
      "C'est le nombre total de personnes qui constituent le groupe que vous souhaitez étudier ou interroger. Si elle est inférieure à 100 000, on la considère généralement comme une population finie. Si vous n'avez pas cette donnée ou qu'elle est inatteignable, sélectionnez l'option population infinie.",
  },
  {
    question: "Quel niveau de confiance dois-je choisir ?",
    answer:
      "95% est la norme la plus utilisée dans les recherches scientifiques, thèses et études de marché. Ne changez cette valeur que si votre professeur, tuteur ou client exige une précision différente (par exemple, 99%).",
  },
  {
    question: "Pourquoi l'outil demande-t-il une marge d'erreur ?",
    answer:
      "Aucun échantillon n'est parfait. La marge d'erreur définit la quantité d'imprécision que vous êtes prêt à accepter. La plus courante est 5%.",
  },
  {
    question: "Quelle proportion attendue (p) dois-je mettre si je ne sais rien de la population ?",
    answer:
      "Laissez la valeur par défaut : 50%. En statistiques, cela représente le \"pire scénario possible\" car cela maximise la variance p(1-p), garantissant que votre taille d'échantillon ne sera jamais trop petite.",
  },
];

const howToData = [
  {
    name: 'Définissez votre Population',
    text: "Indiquez si vous connaissez le nombre total du groupe à étudier (Finie) ou si vous préférez un calcul conservateur pour des groupes très grands/inconnus (Infinie).",
  },
  {
    name: 'Ajustez votre Niveau de Confiance',
    text: 'Sélectionnez 95% (recommandé), ou entrez une valeur personnalisée dans le menu déroulant.',
  },
  {
    name: "Fixez la Marge d'Erreur",
    text: "Spécifiez la tolérance à l'erreur. N'oubliez pas que la réduire de 5% à 2% multiplie drastiquement le nombre d'enquêtes à réaliser.",
  },
  {
    name: 'Copiez le Résultat',
    text: "Regardez le panneau central et copiez directement le Texte de Justification autogénéré pour l'ajouter à votre thèse ou rapport.",
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

export const content: ToolLocaleContent<SampleSizeUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et Références',
  bibliography: [
    { name: 'Sample size determination - Wikipedia', url: 'https://en.wikipedia.org/wiki/Sample_size_determination' },
    { name: "Calcul de la taille de l'échantillon - PubMed", url: 'https://pubmed.ncbi.nlm.nih.gov/30526013/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: "Calculateur de Taille d Echantillon en Ligne: Guide Definitif" },
    {
      type: 'paragraph',
      html: "Déterminer le nombre adéquat de personnes à interroger est l'une des étapes les plus critiques de toute recherche ou projet académique. Le <strong>Calculateur de Taille d'Échantillon</strong> offre aux étudiants, chercheurs et professionnels du marketing un outil précis, rapide et facile à utiliser.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '95%', label: 'Confiance Standard', icon: 'mdi:check-decagram' },
        { value: '5%', label: "Marge d'Erreur", icon: 'mdi:target' },
        { value: 'Rapide', label: 'Calcul en Temps Réel', icon: 'mdi:lightning-bolt' },
      ],
    },
    { type: 'title', level: 2, text: "Pourquoi est-il fondamental de calculer la taille de l'échantillon ?" },
    {
      type: 'paragraph',
      html: "En statistiques, il est rarement possible d'étudier toute une population. La solution est de sélectionner un sous-groupe représentatif connu sous le nom d'échantillon. Si l'échantillon est trop petit, les résultats seront biaisés.",
    },
    { type: 'title', level: 2, text: 'Les deux modes de calcul : Population Finie et Infinie' },
    {
      type: 'paragraph',
      html: "Notre calculateur s'adapte à votre situation en offrant deux modes de calcul distincts.",
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Population Finie (Connue)',
          description: 'Le nombre total exact d\'individus est connu.',
          icon: 'mdi:account-group',
          highlight: false,
          points: [
            'Nécessite la valeur N',
            'Applique un facteur de correction',
            "Réduit la taille finale de l'échantillon",
          ],
        },
        {
          title: 'Population Infinie (Inconnue)',
          description: 'Taille totale inconnue, inatteignable ou supérieure à 100 000.',
          icon: 'mdi:infinity',
          highlight: true,
          points: [
            'Ne nécessite pas de connaître N',
            'Formule classique standardisée',
            'Scénario le plus conservateur et sûr',
          ],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Comprendre les paramètres du panneau de contrôle' },
    {
      type: 'table',
      headers: ['Paramètre', 'Description', 'Recommandation Standard'],
      rows: [
        ['<strong>Niveau de Confiance (Z)</strong>', "Certitude mathématique que l'échantillon représente la population.", 'Utiliser 95%.'],
        ["<strong>Marge d'Erreur (e)</strong>", 'Pourcentage de déviation toléré par rapport à la réalité.', 'Utiliser 5%.'],
        ['<strong>Proportion Attendue (p)</strong>', "Probabilité que l'événement étudié se produise.", 'Utiliser 50% (maximise la variance).'],
      ],
    },
    {
      type: 'tip',
      title: "Attention à la Marge d'Erreur",
      html: "Réduire la marge d'erreur de 5% à 2% exige une augmentation exponentielle de la taille de l'échantillon. Vérifiez le Graphique de Sensibilité dans la calculatrice avant de décider d'une marge trop stricte.",
    },
    { type: 'title', level: 2, text: 'La formule mathématique derrière le calcul' },
    {
      type: 'list',
      items: [
        '<strong>Population Infinie :</strong> n = (Z² × p × q) / e²',
        '<strong>Z :</strong> Valeur critique dérivée du Niveau de Confiance.',
        '<strong>p :</strong> Proportion attendue (q est 1 - p).',
        "<strong>e :</strong> Marge d'erreur tolérée.",
      ],
    },
    { type: 'title', level: 2, text: 'Glossaire rapide pour les chercheurs' },
    {
      type: 'glossary',
      items: [
        { term: 'Population (N)', definition: "Ensemble total d'éléments ou d'individus partageant une caractéristique et faisant l'objet de l'étude." },
        { term: 'Échantillon (n)', definition: 'Sous-ensemble représentatif sélectionné parmi la population totale.' },
        { term: 'Variance Maximale', definition: "Se produit quand p=0,5 (50%), assurant que l'échantillon calculé est viable pour le cas le plus diversifié possible." },
      ],
    },
  ],
  ui: {
    labelParams: 'Paramètres',
    labelPopType: 'Type de Population',
    btnFinite: 'Finie (Connue)',
    btnInfinite: 'Infinie (Inconnue)',
    labelPopSize: 'Taille de la Population',
    labelConfLevel: 'Niveau de Confiance (%)',
    conf90: '90%',
    conf95: '95%',
    conf99: '99%',
    confCustom: 'Personnalisé',
    labelConfCustom: 'Confiance Personnalisée (%)',
    labelErrorMargin: "Marge d'Erreur (%)",
    labelProportion: 'Proportion Attendue',
    hintProportion: '50% est le "pire cas" qui donne l\'échantillon le plus grand et le plus sûr.',
    hintProportionError: 'Une proportion de 0% ou 100% annule l\'échantillon. Nous suggérons d\'utiliser des valeurs entre 5% et 95%.',
    labelSampleSize: 'Taille Suggérée',
    labelSampleSub: 'enquêtes nécessaires',
    labelZValue: 'Valeur Critique',
    labelReport: 'Texte pour votre rapport',
    defaultJustification: "Pour une population de 10 000 personnes, avec un niveau de confiance de 95% et une marge d'erreur de 5%, la taille d'échantillon représentative est de 370 individus.",
    btnCopy: 'Copier le Texte',
    btnCopied: 'Copié !',
    labelChart: "Sensibilité : Taille vs Marge d'Erreur",
    chartDesc: "Observez comment la taille de l'échantillon s'emballe lorsqu'on tente de réduire la marge d'erreur.",
    justForFinite: 'Pour une population de',
    justPersons: 'personnes',
    justForInfinite: 'Pour une population infinie',
    justConfidence: ', avec un niveau de confiance de',
    justError: "% et une marge d'erreur de",
    justResultIs: "%, la taille d'échantillon représentative est de",
    justUnit: 'individus.',
    faqTitle: 'Questions Fréquentes',
    bibliographyTitle: 'Bibliographie et Références',
  },
};
