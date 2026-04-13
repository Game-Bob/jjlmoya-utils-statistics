import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConfidenceIntervalUI } from '../ui';

const slug = 'calculateur-intervalle-confiance';
const title = 'Calculateur Intervalle de Confiance en Ligne';
const description =
  'Calculez des intervalles de confiance pour la moyenne en utilisant les distributions Z ou t de Student. Saisissez la moyenne echantillonnale, l\'ecart type, la taille de l\'echantillon et le niveau de confiance pour obtenir l\'intervalle, la marge d\'erreur et la valeur critique.';

const faqData = [
  {
    question: 'Qu\'est-ce qu\'un intervalle de confiance?',
    answer:
      'Un intervalle de confiance (IC) est une plage de valeurs calculee a partir des donnees de l\'echantillon qui, avec une probabilite donnee (niveau de confiance), contient la vraie valeur du parametre de la population. Par exemple, un IC a 95% pour la moyenne signifie que si vous repétiez l\'echantillonnage de nombreuses fois, 95% des intervalles calcules contiendraient la vraie moyenne de la population.',
  },
  {
    question: 'Quand utiliser Z plutot que t de Student?',
    answer:
      'On utilise Z quand l\'ecart type de la population (σ) est connu ou quand n est grand (>30). On utilise t de Student quand seul l\'ecart type de l\'echantillon (s) est disponible et que n est petit. Pour n > 30, les deux distributions sont pratiquement equivalentes, mais t reste plus prudente et techniquement correcte quand σ est inconnu.',
  },
  {
    question: 'Comment la taille de l\'echantillon influe sur la largeur de l\'intervalle?',
    answer:
      'La largeur de l\'IC est proportionnelle a 1/√n : quadrupler la taille de l\'echantillon reduit de moitie la marge d\'erreur. Cela explique pourquoi les grands echantillons donnent des estimations plus precises et pourquoi la planification de la taille de l\'echantillon est cruciale dans la conception des etudes statistiques.',
  },
  {
    question: 'Qu\'est-ce que la marge d\'erreur?',
    answer:
      'La marge d\'erreur (ME) est la moitie de la largeur de l\'IC : ME = valeur_critique × SE, ou SE = σ/√n est l\'erreur type. Elle indique la difference maximale attendue entre l\'estimation de l\'echantillon et la vraie valeur de la population au niveau de confiance specifie.',
  },
];

const howToData = [
  {
    name: 'Saisissez les parametres de l\'echantillon',
    text: 'Entrez la moyenne echantillonnale (x̄), l\'ecart type (σ ou s > 0) et la taille de l\'echantillon (n ≥ 2).',
  },
  {
    name: 'Choisissez le niveau de confiance',
    text: 'Selectionnez 90%, 95% ou 99% via les boutons de raccourci, ou saisissez n\'importe quelle valeur entre 0 et 100.',
  },
  {
    name: 'Selectionnez la distribution et lisez le resultat',
    text: 'Choisissez Z si l\'ecart type de la population est connu, ou t pour un echantillon. L\'intervalle, la marge d\'erreur et la valeur critique sont calcules instantanement.',
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

export const content: ToolLocaleContent<ConfidenceIntervalUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et References',
  bibliography: [
    { name: 'Intervalle de confiance Wikipedia', url: 'https://fr.wikipedia.org/wiki/Intervalle_de_confiance' },
    { name: 'Loi de Student Wikipedia', url: 'https://fr.wikipedia.org/wiki/Loi_de_Student' },
    { name: 'NIST e Handbook of Statistical Methods', url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm' },
    { name: 'Erreur type Wikipedia', url: 'https://fr.wikipedia.org/wiki/Erreur_type' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur Intervalle de Confiance : Resultats en Temps Reel' },
    {
      type: 'paragraph',
      html: 'Le <strong>Calculateur Intervalle de Confiance</strong> calcule instantanement l\'intervalle, la marge d\'erreur, la valeur critique et l\'erreur type. Il prend en charge la distribution Z (sigma de population connu) et t de Student (sigma de l\'echantillon), avec n\'importe quel niveau de confiance entre 0 et 100.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '2', label: 'Distributions Z et t', icon: 'mdi:sigma' },
        { value: 'Live', label: 'Resultats en temps reel', icon: 'mdi:lightning-bolt' },
        { value: 'Gratuit', label: 'Sans inscription', icon: 'mdi:check-decagram' },
      ],
    },
    { type: 'title', level: 2, text: 'Distribution Z vs t de Student' },
    {
      type: 'table',
      headers: ['Critere', 'Distribution Z', 't de Student'],
      rows: [
        ['Quand utiliser', 'σ de population connu ou n > 30', 's de l\'echantillon, tout n'],
        ['Valeur critique (95%)', 'z* = 1,960', 't* depend de df = n−1'],
        ['Degres de liberte', 'Non applicable', 'df = n − 1'],
        ['Pour n grand', 'IC plus etroit', 'Converge vers Z'],
      ],
    },
    {
      type: 'tip',
      title: 'Comment interpreter correctement l intervalle de confiance',
      html: 'Un IC a <strong>95%</strong> ne signifie pas qu\'il y a 95% de probabilite que la moyenne soit dans cet intervalle. Cela signifie que la <strong>procedure</strong>, repetee sur de nombreux echantillons, produirait des intervalles contenant la vraie moyenne 95% du temps. Une fois calcule, l\'intervalle contient ou non la vraie valeur.',
    },
    { type: 'title', level: 2, text: 'Glossaire Rapide' },
    {
      type: 'glossary',
      items: [
        { term: 'Intervalle de confiance (IC)', definition: 'Plage [x̄ − ME, x̄ + ME] estimant le parametre de la population au niveau de confiance choisi.' },
        { term: 'Niveau de confiance', definition: 'Proportion d\'intervalles qui contiendraient le vrai parametre si l\'experience etait repetee de nombreuses fois. Valeurs typiques : 90%, 95%, 99%.' },
        { term: 'Erreur type (SE)', definition: 'SE = σ/√n. Mesure la variabilite de la moyenne de l\'echantillon autour de la moyenne de la population.' },
        { term: 'Marge d\'erreur (ME)', definition: 'ME = z* × SE (ou t* × SE). C\'est la demi largeur de l\'intervalle de confiance.' },
      ],
    },
  ],
  ui: {
    labelTitle: 'Intervalle de Confiance',
    labelMean: 'Moyenne echantillonnale (x̄)',
    labelStdDev: 'Ecart type',
    labelN: 'Taille de l\'echantillon (n)',
    labelConf: 'Niveau de confiance (%)',
    btnZ: 'Z (σ connu)',
    btnT: 't de Student',
    labelCI: 'Intervalle de Confiance',
    labelME: 'Marge d\'Erreur',
    labelCritical: 'Valeur Critique',
    labelSE: 'Erreur Type',
    labelDF: 'Degres de Liberte',
    hintN: 'n doit etre un entier superieur ou egal a 2.',
    hintStdDev: "L'ecart type doit etre superieur a 0.",
    hintConf: 'Le niveau de confiance doit etre compris entre 0 et 100 (exclusif).',
    labelChart: 'Visualisation de l\'Intervalle',
    chartDesc: 'Droite numerique avec l\'IC ombre et la marge d\'erreur.',
    labelReport: 'Resume pour votre rapport',
    btnCopy: 'Copier le Resume',
    btnCopied: 'Copie !',
    faqTitle: 'Questions Frequentes',
    bibliographyTitle: 'Bibliographie et References',
    tabStats: 'Statistiques',
    tabRaw: 'Donnees Brutes',
    labelRaw: 'Collez les donnees',
    rawPlaceholder: 'Saisissez ou collez des valeurs separees par virgules, espaces ou sauts de ligne. Ex : 12.3, 15.1, 11.8',
    hintRaw: 'Entrez au moins 2 valeurs numeriques valides.',
    labelDist: 'Distribution',
    distAuto: 'Auto',
    noticeAutoRaw: 'Donnees echantillon: t de Student',
    noticeAutoLowN: 'n < 30: t de Student recommandee',
    noticeAutoHighN: 'n ≥ 30: distribution Z recommandee',
    calcCI: 'Intervalle IC',
    calcInverse: 'n minimum',
    labelTargetME: 'Marge d erreur cible (E)',
    hintTargetME: 'E doit etre superieur a 0.',
    labelReqN: 'Taille d echantillon minimale',
  },
};
