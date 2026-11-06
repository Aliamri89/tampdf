import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Publicité"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Aperçu — appliqué à l'image",
      formatsNote: "Fichiers pris en charge : PDF, JPG, PNG et WebP"
    },
    removeWatermark: {
      intro: "Supprime les filigranes ajoutés comme objets de filigrane : dans les PDF (par Adobe Acrobat, TAMPDF et la plupart des éditeurs) et dans les documents Word (Création ▸ Filigrane). Les filigranes incrustés dans les pixels d'une image ne peuvent pas en être séparés, c'est pourquoi les images ne sont pas prises en charge.",
      formatsNote: "Fichiers pris en charge : PDF et Word (.docx)",
      noneFoundWord: "Aucun filigrane Word n'a été trouvé dans ce document. Seuls les filigranes ajoutés avec la fonction Filigrane de Word peuvent être supprimés."
    }
  },
  consent: {
    title: "Cookies et analyses",
    description: "Nous utilisons des cookies d'analyse (Google Analytics et Microsoft Clarity) pour comprendre comment le site est utilisé. Ils ne s'exécutent que si vous acceptez. Vos fichiers ne quittent jamais votre navigateur.",
    accept: "Accepter",
    reject: "Refuser",
    settings: "Paramètres des cookies",
    statusOn: "Les cookies d'analyse sont actuellement activés.",
    statusOff: "Les cookies d'analyse sont actuellement désactivés.",
    close: "Fermer"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Comment TAMPDF traite vos fichiers et vos données : les fichiers sont traités dans votre navigateur et jamais envoyés ; ce que collectent les outils d'analyse, les cookies et la publicité ; et vos droits.",
      updated: "Dernière mise à jour : 6 novembre 2026.",
      sections: [
        {
          heading: "Présentation",
          text: "TAMPDF (tampdf.com) propose des outils gratuits, dans le navigateur, pour les PDF et les images. Cette politique explique ce que nous collectons et ce que nous ne collectons pas."
        },
        {
          heading: "Vos fichiers restent sur votre appareil",
          text: "Les fichiers sont traités localement dans votre navigateur et ne sont jamais envoyés, stockés ni partagés avec nos serveurs ou un tiers. Si vous choisissez « Enregistrer dans Google Drive » ou « Enregistrer dans Dropbox », votre navigateur envoie le résultat directement au service auquel vous êtes connecté ; nous ne le recevons jamais."
        },
        {
          heading: "Informations collectées automatiquement",
          text: "Pour comprendre comment le site est utilisé, nous tenons de simples compteurs internes sur notre serveur et, uniquement avec votre consentement lorsqu'il est requis, nous utilisons Google Analytics et Microsoft Clarity. Ils peuvent enregistrer les pages visitées, la localisation approximative, l'appareil, le navigateur, la langue, le site référent, ainsi que l'outil utilisé et son succès. Nous ne collectons jamais votre nom, votre adresse e-mail ni le contenu de vos fichiers."
        },
        {
          heading: "Cookies et technologies similaires",
          text: "Les services d'analyse et de publicité peuvent déposer des cookies ou utiliser le stockage local. Notre Politique de cookies les répertorie et explique comment les contrôler, et vous pouvez modifier votre choix à tout moment avec « Paramètres des cookies » en bas de page."
        },
        {
          heading: "Vos droits",
          text: "Lorsque des lois telles que le RGPD, le RGPD britannique ou le CCPA s'appliquent, vous pouvez demander l'accès aux données personnelles que nous détenons à votre sujet, leur rectification ou leur suppression, vous opposer à leur traitement ou le limiter, retirer votre consentement à tout moment et déposer une réclamation auprès de votre autorité de protection des données. Utilisez la page Contact pour faire votre demande."
        },
        {
          heading: "Conservation des données",
          text: "Les données d'analyse ne sont conservées que le temps nécessaire aux statistiques et à l'amélioration du service, selon les paramètres de conservation de chaque fournisseur."
        },
        {
          heading: "Services et liens tiers",
          text: "Le site peut renvoyer vers des services d'autres sociétés ou les charger (par exemple Google, Microsoft et Dropbox). Elles ont leurs propres politiques de confidentialité et nous n'en sommes pas responsables."
        },
        {
          heading: "Enfants",
          text: "TAMPDF ne s'adresse pas aux enfants de moins de 13 ans (ou de moins de 16 ans lorsque la loi locale l'exige) et nous ne collectons pas sciemment leurs informations personnelles."
        },
        {
          heading: "Sécurité",
          text: "Les fichiers sont traités dans votre navigateur et ne nous sont jamais envoyés. Le site est servi en HTTPS."
        },
        {
          heading: "Modifications de cette politique",
          text: "Nous pouvons mettre à jour cette politique ; la date de « Dernière mise à jour » indique la version la plus récente. Continuer à utiliser le site vaut acceptation de la mise à jour."
        },
        {
          heading: "Contact",
          text: "Des questions sur cette politique ? Utilisez la page Contact."
        }
      ]
    },
    cookiePolicy: {
      intro: "Les cookies et technologies similaires utilisés par TAMPDF pour les préférences, l'analyse et la publicité, et comment les contrôler.",
      updated: "Dernière mise à jour : 6 novembre 2026.",
      sections: [
        {
          heading: "Que sont les cookies ?",
          text: "De petits fichiers texte qu'un site web enregistre sur votre appareil. Des technologies similaires, comme le stockage local et les pixels, fonctionnent de façon comparable ; cette politique les couvre toutes."
        },
        {
          heading: "Stockage strictement nécessaire",
          text: "TAMPDF mémorise votre thème clair/sombre et votre choix en matière de cookies dans le stockage local de votre navigateur. Ils ne contiennent aucune donnée personnelle et ne nous sont jamais envoyés."
        },
        {
          heading: "Cookies d'analyse",
          text: "Avec votre consentement lorsqu'il est requis, nous utilisons Google Analytics 4 (cookies tels que _ga et _ga_*) et Microsoft Clarity (tels que _clck et _clsk) pour mesurer la fréquentation et comprendre comment le site est utilisé ; Clarity peut aussi créer des enregistrements de session et des cartes de chaleur anonymisés."
        },
        {
          heading: "Gérer votre choix",
          text: "Lorsque le consentement est requis, vous pouvez accepter ou refuser les cookies d'analyse dans la bannière et changer d'avis à tout moment avec « Paramètres des cookies » en bas de page ; retirer son consentement arrête les scripts d'analyse et supprime leurs cookies. Vous pouvez aussi bloquer les cookies dans votre navigateur : les outils continuent de fonctionner, car vos fichiers sont traités localement."
        },
        {
          heading: "Autres contrôles",
          text: "Vous pouvez refuser la publicité personnalisée sur https://adssettings.google.com ou https://www.aboutads.info/choices (https://www.youronlinechoices.eu en Europe) et gérer les données Microsoft sur https://account.microsoft.com/privacy."
        },
        {
          heading: "Modifications et contact",
          text: "Nous pouvons mettre à jour cette politique ; la date ci-dessus indique la version la plus récente. Des questions ? Utilisez la page Contact."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Acceptation des conditions",
          text: "En utilisant TAMPDF, vous acceptez ces Conditions d'utilisation. Si vous n'êtes pas d'accord, n'utilisez pas nos outils."
        },
        {
          heading: "Le service",
          text: "TAMPDF propose des outils gratuits, dans le navigateur, pour travailler avec des PDF et des images. Tout le traitement a lieu localement dans votre navigateur ; vos fichiers ne sont jamais envoyés à nos serveurs."
        },
        {
          heading: "Exclusion de garanties",
          text: "Les outils sont fournis « en l'état » et « selon disponibilité », sans garantie d'aucune sorte, expresse ou implicite, notamment d'exactitude, de fiabilité, de qualité marchande ou d'adéquation à un usage particulier. Nous ne garantissons pas qu'ils seront exempts d'erreurs, ininterrompus ou compatibles avec tous les fichiers, navigateurs ou appareils."
        },
        {
          heading: "Limitation de responsabilité",
          text: "Dans toute la mesure permise par la loi, TAMPDF et ses propriétaires ne sont pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs — y compris la perte de données, la corruption de fichiers ou l'interruption d'activité — résultant de l'utilisation ou de l'impossibilité d'utiliser les outils."
        },
        {
          heading: "Vos fichiers",
          text: "Vous êtes responsable de la sauvegarde de vos originaux et de la vérification de tout résultat avant de vous y fier. Le traitement ayant lieu dans votre navigateur, nous ne pouvons ni accéder à vos fichiers ni les récupérer."
        },
        {
          heading: "Utilisation acceptable",
          text: "Utilisez TAMPDF uniquement à des fins légales et avec des fichiers que vous avez le droit de traiter. N'utilisez pas les outils pour porter atteinte aux droits d'autrui, pour retirer des filigranes ou une protection d'un contenu que vous n'avez pas le droit de modifier, ni pour perturber le site."
        },
        {
          heading: "Services tiers et publicité",
          text: "Le site peut afficher de la publicité et renvoyer vers des services tiers ou les intégrer (comme Google AdSense, Google Drive et Dropbox). Nous ne les contrôlons pas ; leur utilisation est régie par leurs propres conditions et politiques de confidentialité."
        },
        {
          heading: "Propriété intellectuelle",
          text: "Le nom, le logo, le design, les textes et le code de TAMPDF appartiennent à TAMPDF ou à ses concédants. Vos fichiers restent les vôtres ; nous ne revendiquons aucun droit sur eux."
        },
        {
          heading: "Modifications de ces conditions",
          text: "Nous pouvons mettre à jour ces conditions de temps à autre. Continuer à utiliser TAMPDF après la publication des changements vaut acceptation."
        }
      ]
    },
    adsDisclosure: {
      heading: "Publicité",
      paragraphs: [
        "Nous utilisons Google AdSense pour afficher des annonces. Google et ses partenaires sont des prestataires tiers qui utilisent des cookies, des balises web et des technologies similaires pour diffuser des annonces en fonction de vos visites précédentes sur ce site et d'autres sites.",
        "Vous pouvez refuser la publicité personnalisée dans les Paramètres des annonces Google (https://adssettings.google.com) ou sur https://www.aboutads.info/choices, et consulter la manière dont Google utilise les données des sites qui utilisent ses services sur https://policies.google.com/technologies/partner-sites.",
        "Dans l'Espace économique européen, au Royaume-Uni et en Suisse, les annonces ne sont personnalisées qu'avec votre consentement, que vous pouvez donner ou retirer via le message de consentement affiché sur le site."
      ]
    }
  }
};
