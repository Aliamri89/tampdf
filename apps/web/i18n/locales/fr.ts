import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const fr: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Changer de langue" } },
  breadcrumb: { home: "Accueil" },
  tool: {
    processedClient: "Traité dans votre navigateur — les fichiers ne sont jamais envoyés",
    faqHeading: "Questions fréquentes",
    relatedHeading: "Outils similaires",
    metaTitleSuffix: "— Outil gratuit en ligne",
  },
  article: {
    tocHeading: "Table des matières",
    readingTime: "{minutes} min de lecture",
    readingTimeOne: "1 min de lecture",
    readingTimeTwo: "2 min de lecture",
    published: "Publié le {date}",
    updated: "Mis à jour le {date}",
    relatedHeading: "Articles similaires",
    previousArticle: "Précédent",
    nextArticle: "Suivant",
    ctaDefaultHeading: "Prêt à essayer {tool} ?",
    ctaCompressPdfButtonLabel: "Compresser un PDF gratuitement",
  },
  card: { comingSoon: "Bientôt disponible" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Des outils PDF gratuits, rapides et faciles à utiliser",
    toolPicker: {
      trigger: "Choisir un outil PDF",
      ariaLabel: "Menu des outils PDF",
      loadMore: "Plus d'outils",
      allShown: "Tous les outils sont affichés",
    },
    features: { devices: "Fonctionne sur tous les appareils", fast: "Rapide", secure: "Sécurisé" },
  },
  footer: {
    rights: "Tous droits réservés.",
    privacyNote: "Les fichiers sont traités de manière sécurisée et ne sont jamais stockés plus longtemps que nécessaire.",
    moreCount: "+{count} autres",
    company: "Entreprise",
    legal: "Mentions légales",
    aboutUs: "À propos",
    contactUs: "Nous contacter",
    blog: "Blog",
    faq: "Questions fréquentes",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    cookiePolicy: "Politique de cookies",
  },
  staticPages: {
    note: "Cette page est provisoire — le contenu complet arrive bientôt.",
    aboutUs: {
      title: "À propos",
      intro:
        "TAMPDF est une boîte à outils en ligne gratuite conçue pour rendre les tâches quotidiennes sur les fichiers — fusionner, diviser, compresser et convertir des PDF, images et documents — rapides, privées et sans effort.",
    },
    contactUs: {
      title: "Nous contacter",
      intro: "Une question, un bug trouvé ou une idée d'outil à suggérer ? Nous serions ravis de vous lire.",
    },
    blog: { title: "Blog", intro: "Nous préparons des articles sur les formats de fichiers, des astuces de productivité et les nouveautés du produit." },
    faq: {
      title: "Questions fréquentes",
      intro: "Des réponses générales sur TAMPDF seront bientôt publiées ici. En attendant, chaque outil dispose de sa propre FAQ.",
    },
    privacyPolicy: {
      title: "Politique de confidentialité",
      intro: "Notre politique de confidentialité complète, expliquant précisément comment TAMPDF traite vos fichiers et données, est en cours de finalisation et sera publiée ici sous peu.",
    },
    termsOfService: {
      title: "Conditions d'utilisation",
      intro: "Ces conditions d'utilisation régissent votre usage des outils et du site TAMPDF, y compris notre exclusion de garanties et limitation de responsabilité.",
    },
    cookiePolicy: {
      title: "Politique de cookies",
      intro: "Les détails sur les cookies et technologies similaires utilisés par TAMPDF seront bientôt publiés ici.",
    },
  },
  dropzone: {
    browse: "ou cliquez pour parcourir",
    defaultLabel: "Glissez-déposez votre fichier ici",
    unsupportedType: "{name} n'est pas un type de fichier pris en charge et a été ignoré.",
    unsupportedTypePlural: "{count} fichiers n'avaient pas un type pris en charge et ont été ignorés.",
    tooLarge: "{name} est trop volumineux (max {max}) et a été ignoré.",
    tooLargePlural: "{count} fichiers étaient trop volumineux (max {max}) et ont été ignorés.",
    maxFilesReached: "Vous avez déjà ajouté le maximum de {max} fichiers pour cet outil.",
    maxFilesExceeded: "Cet outil accepte jusqu'à {max} fichiers à la fois, seuls {added} de vos fichiers ont donc été ajoutés.",
  },
  fileList: { moveUp: "Monter", moveDown: "Descendre", remove: "Retirer {name}" },
  result: {
    ready: "Votre fichier est prêt",
    download: "Télécharger",
    startOver: "Recommencer",
    smaller: "plus léger",
    originalSize: "Taille d'origine",
    newSize: "Nouvelle taille",
    reducedBy: "Réduit de",
    spaceSaved: "Espace économisé",
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous cherchez n'existe pas ou a peut-être été déplacée.",
    cta: "Retour à l'accueil",
  },
};
