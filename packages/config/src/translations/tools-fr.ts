import type { ToolTranslationOverride } from "./tools-ar";

export const toolsFr: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Compresser un PDF",
    actionLabel: "Compresser le PDF",
    shortDescription: "Réduisez la taille d'un PDF pour le partager et l'envoyer plus facilement, directement dans votre navigateur.",
    longDescription: [
      "Compresser un PDF réduit la taille du fichier en réencodant les images intégrées et en supprimant les données inutiles, pour que votre document soit plus facile à envoyer par e-mail, à téléverser ou à stocker.",
      "Choisissez un niveau de compression pour équilibrer taille et qualité visuelle, et comparez la taille avant/après avant de télécharger.",
    ],
    faq: [
      { question: "De combien mon PDF sera-t-il réduit ?", answer: "Cela dépend du contenu. Les PDF avec de grandes images intégrées se réduisent généralement le plus, parfois de 50 à 90 %. Les PDF riches en texte se compressent moins car il y a moins à optimiser." },
      { question: "La compression rendra-t-elle mon PDF flou ?", answer: "Avec le réglage par défaut, la perte de qualité est minime. Si vous choisissez le niveau de compression le plus fort, les images sont sous-échantillonnées plus agressivement, ce qui peut réduire la netteté en cas de zoom." },
      { question: "La compression est-elle effectuée sur les serveurs de TAMPDF ?", answer: "Non. Compresser un PDF fonctionne localement dans votre navigateur, votre fichier n'est donc jamais téléversé nulle part." },
      { question: "Puis-je compresser un PDF protégé par mot de passe ?", answer: "Pas pour l'instant. Retirez d'abord la protection par mot de passe avec un autre outil, puis compressez le fichier." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF en JPG",
    actionLabel: "Convertir en JPG",
    shortDescription: "Transformez chaque page d'un PDF en une image JPG de haute qualité.",
    longDescription: [
      "PDF en JPG convertit chaque page de votre PDF en une image JPG distincte, prête à être partagée, modifiée ou insérée dans une présentation. Un PDF d'une seule page se télécharge en un seul JPG ; les PDF de plusieurs pages sont regroupés dans un fichier .zip.",
      "La conversion s'effectue directement dans votre navigateur grâce à PDF.js, votre document n'est donc jamais envoyé à un serveur.",
    ],
    faq: [
      { question: "Et si mon PDF comporte plusieurs pages ?", answer: "Chaque page devient sa propre image JPG. S'il y en a plusieurs, elles sont regroupées dans un seul fichier .zip à télécharger." },
      { question: "Quelle sera la netteté des images ?", answer: "Les pages sont rendues à haute résolution, adaptée aux écrans et à la plupart des besoins d'impression. Choisissez le niveau de qualité pour équilibrer netteté et taille de fichier." },
      { question: "Mon PDF est-il envoyé quelque part ?", answer: "Non. PDF en JPG traite chaque page localement dans votre navigateur, votre fichier ne quitte donc jamais votre appareil." },
      { question: "Puis-je convertir une seule page plutôt que tout le document ?", answer: "Actuellement, chaque page est convertie. Utilisez Fusionner des PDF ou un lecteur PDF pour isoler une seule page au préalable si vous n'avez besoin que d'une image." },
    ],
  },
  "merge-pdf": {
    name: "Fusionner des PDF",
    actionLabel: "Fusionner les PDF",
    shortDescription: "Combinez plusieurs fichiers PDF en un seul document, dans l'ordre de votre choix.",
    longDescription: [
      "Fusionner des PDF vous permet de combiner deux fichiers PDF ou plus en un seul document sans rien installer. Ajoutez vos fichiers, faites-les glisser pour les réorganiser, puis téléchargez un unique PDF fusionné.",
      "Tout se passe localement dans votre navigateur, vos fichiers ne sont donc jamais téléversés vers un serveur. Cela fonctionne même avec des contrats, rapports ou documents personnels sensibles.",
    ],
    faq: [
      { question: "Y a-t-il une limite au nombre de PDF que je peux fusionner ?", answer: "Aucune limite fixe. La fusion se faisant dans votre navigateur, la limite pratique est la mémoire de votre appareil plutôt qu'un quota serveur." },
      { question: "Puis-je changer l'ordre des pages avant la fusion ?", answer: "Oui. Après avoir ajouté vos fichiers, faites-les glisser dans l'ordre souhaité pour le document final avant de fusionner." },
      { question: "Mes fichiers sont-ils envoyés sur les serveurs de TAMPDF ?", answer: "Non. Fusionner des PDF traite les fichiers entièrement dans votre navigateur grâce à une technologie côté client, vos documents ne quittent donc jamais votre appareil." },
      { question: "La fusion affectera-t-elle la qualité de mes PDF ?", answer: "Non. Les pages sont combinées telles quelles, sans recompression, le texte, les images et la mise en forme restent donc exactement comme dans les originaux." },
    ],
  },
  "rotate-pdf": {
    name: "Faire pivoter un PDF",
    actionLabel: "Faire pivoter le PDF",
    shortDescription: "Faites pivoter des pages ou un PDF entier de 90°, 180° ou 270°, directement dans votre navigateur.",
    longDescription: [
      "Faire pivoter un PDF vous permet de corriger des pages de travers ou à l'envers en quelques secondes. Téléversez un ou plusieurs PDF, consultez une miniature de chaque page, puis faites pivoter tout le document en une fois ou seulement les pages qui en ont besoin.",
      "Tout se passe localement dans votre navigateur, vos fichiers ne sont donc jamais téléversés vers un serveur. Téléversez plusieurs PDF à la fois : chacun est pivoté et renvoyé indépendamment.",
    ],
    faq: [
      { question: "Puis-je faire pivoter une seule page plutôt que tout le document ?", answer: "Oui. Cliquez sur le bouton de rotation d'une page pour ne faire pivoter que celle-ci, ou utilisez les boutons « tout pivoter » pour appliquer la même rotation à toutes les pages à la fois." },
      { question: "Quels angles de rotation sont pris en charge ?", answer: "Vous pouvez faire pivoter les pages de 90°, 180° ou 270° dans les deux sens." },
      { question: "Puis-je faire pivoter plusieurs PDF à la fois ?", answer: "Oui. Téléversez plusieurs PDF et chacun est pivoté indépendamment. Si vous téléversez plus d'un fichier, les PDF pivotés sont regroupés dans un .zip à télécharger." },
      { question: "Mon PDF est-il envoyé quelque part ?", answer: "Non. Faire pivoter un PDF traite tout localement dans votre navigateur, vos fichiers ne quittent donc jamais votre appareil." },
    ],
  },
  "compress-image": {
    name: "Compresser une image",
    actionLabel: "Compresser les images",
    shortDescription: "Réduisez la taille des fichiers JPG, PNG et WebP tout en gardant une bonne qualité visuelle.",
    longDescription: [
      "Compresser une image réduit la taille de vos photos JPG, PNG ou WebP, les rendant plus rapides à téléverser, envoyer par e-mail et charger sur les sites web.",
      "La compression se fait entièrement dans votre navigateur via l'API canvas, vos photos ne quittent donc jamais votre appareil, et vous pouvez compresser plusieurs images à la fois.",
    ],
    faq: [
      { question: "Quels formats d'image sont pris en charge ?", answer: "Les images JPG, PNG et WebP sont prises en charge en entrée comme en sortie." },
      { question: "Puis-je compresser plusieurs images à la fois ?", answer: "Oui. Ajoutez autant d'images que vous le souhaitez ; elles seront chacune compressées et regroupées dans un unique .zip à télécharger, ou téléchargées individuellement." },
      { question: "De combien puis-je réduire une image sans perdre en qualité ?", answer: "Le réglage de qualité par défaut réduit généralement la taille de 60 à 80 % sans différence visible. Vous pouvez ajuster le curseur de qualité pour un autre compromis." },
      { question: "Mes photos sont-elles envoyées sur un serveur ?", answer: "Non. La compression s'effectue localement dans votre navigateur via l'API canvas, vos images ne sont donc jamais envoyées nulle part." },
    ],
  },
  "image-to-pdf": {
    name: "JPG en PDF",
    actionLabel: "Convertir en PDF",
    shortDescription: "Transformez une ou plusieurs images JPG en un seul document PDF.",
    longDescription: [
      "JPG en PDF combine vos photos JPG en un seul fichier PDF, une image par page, dans l'ordre de votre choix.",
      "Parfait pour transformer des documents scannés, reçus ou photos en un PDF facile à partager. Tout est traité localement dans votre navigateur pour une confidentialité totale.",
    ],
    faq: [
      { question: "Puis-je combiner plusieurs images en un seul PDF ?", answer: "Oui. Ajoutez plusieurs images et chacune deviendra une page du PDF final, dans l'ordre où vous les organisez." },
      { question: "Quelle taille de page est utilisée pour le PDF ?", answer: "Chaque page est dimensionnée selon les dimensions et l'orientation de son image source, rien n'est donc recadré ou déformé." },
      { question: "Mes images sont-elles envoyées quelque part ?", answer: "Non. La conversion se fait entièrement dans votre navigateur, vos images restent donc sur votre appareil." },
      { question: "Prend-il aussi en charge les images PNG ?", answer: "Oui, les images PNG sont prises en charge en plus du JPG. Les photos HEIC d'un iPhone ne sont pas encore prises en charge ; convertissez-les d'abord en JPG via les options de partage de votre téléphone." },
    ],
  },
  "rotate-images": {
    name: "Faire pivoter des images",
    actionLabel: "Faire pivoter les images",
    shortDescription: "Faites pivoter une ou plusieurs images JPG, PNG ou WebP de 90°, 180° ou 270°.",
    longDescription: [
      "Faire pivoter des images corrige des photos de travers ou à l'envers en quelques secondes. Téléversez une ou plusieurs images, faites-les pivoter individuellement ou toutes ensemble, et téléchargez le résultat.",
      "Tout se passe localement dans votre navigateur, vos photos ne sont donc jamais téléversées vers un serveur. Téléversez plusieurs images à la fois : chacune est pivotée et renvoyée indépendamment.",
    ],
    faq: [
      { question: "Quels formats d'image sont pris en charge ?", answer: "Les images JPG, PNG et WebP sont prises en charge. La rotation préserve le format original." },
      { question: "Puis-je faire pivoter une seule image plutôt que toutes ?", answer: "Oui. Cliquez sur le bouton de rotation d'une image pour ne faire pivoter que celle-ci, ou utilisez les boutons « tout pivoter » pour appliquer la même rotation à toutes les images à la fois." },
      { question: "Quels angles de rotation sont pris en charge ?", answer: "Vous pouvez faire pivoter les images de 90°, 180° ou 270°." },
      { question: "Mes photos sont-elles envoyées quelque part ?", answer: "Non. Faire pivoter des images traite tout localement dans votre navigateur, vos photos ne quittent donc jamais votre appareil." },
    ],
  },
  "split-pdf": {
    name: "Diviser un PDF",
    actionLabel: "Diviser le PDF",
    shortDescription: "Divisez un PDF en plusieurs fichiers plus petits par plages de pages ou en parties de taille fixe.",
    longDescription: [
      "Diviser un PDF sépare un document volumineux en plusieurs fichiers PDF sans modifier les pages elles-mêmes. Saisissez des plages comme 1-3, 5, 8-10 pour extraire exactement les sections dont vous avez besoin, ou divisez tout le document en parties égales d'un nombre fixe de pages.",
      "Tout se passe dans votre navigateur — le PDF n'est jamais téléversé vers un serveur. Un résultat unique se télécharge en un seul PDF ; plusieurs parties sont regroupées dans un .zip.",
    ],
    faq: [
      { question: "Comment choisir quelles pages vont dans chaque fichier ?", answer: "Utilisez le champ des plages : par exemple « 1-3, 5, 8-10 » produit trois PDF — pages 1 à 3, page 5 seule, et pages 8 à 10. Ou passez en mode « toutes les N pages » pour découper le document en parties égales." },
      { question: "Les fichiers divisés conservent-ils leur qualité d'origine ?", answer: "Oui. Les pages sont copiées telles quelles, sans recompression, le texte, les images, les polices et la mise en page sont donc identiques à la source." },
      { question: "Mon PDF est-il envoyé quelque part ?", answer: "Non. La division se fait entièrement dans votre navigateur, votre document ne quitte donc jamais votre appareil." },
      { question: "Qu'advient-il des champs de formulaire ou des signatures numériques ?", answer: "Le contenu des pages et les widgets de formulaire sont préservés visuellement, mais le comportement interactif des formulaires et les signatures ne sont pas conservés dans les fichiers divisés. Aplatissez-les ou signez-les à nouveau ensuite si besoin." },
    ],
  },
  "delete-pdf-pages": {
    name: "Supprimer des pages PDF",
    actionLabel: "Supprimer les pages",
    shortDescription: "Retirez les pages indésirables d'un PDF et téléchargez le document allégé.",
    longDescription: [
      "Supprimer des pages PDF vous permet d'écarter les pages dont vous n'avez pas besoin — scans vierges, pages de garde, pages en double — et de garder le reste dans son ordre d'origine. Consultez une miniature de chaque page, touchez celles à retirer, puis téléchargez le résultat.",
      "Tout le processus se déroule localement dans votre navigateur, votre PDF n'est donc jamais téléversé. Les pages restantes sont copiées sans recompression, rien ne perd en qualité.",
    ],
    faq: [
      { question: "Puis-je supprimer plusieurs pages à la fois ?", answer: "Oui. Sélectionnez autant de pages que vous le souhaitez dans la grille de miniatures, puis supprimez-les toutes en une seule fois." },
      { question: "Puis-je supprimer toutes les pages ?", answer: "Non — au moins une page doit rester, le bouton est donc désactivé si vous les avez toutes sélectionnées." },
      { question: "Supprimer des pages réduit-il la taille du fichier ?", answer: "Généralement un peu, puisque le contenu des pages retirées est abandonné. Les ressources partagées comme les polices peuvent rester, utilisez donc Compresser un PDF ensuite si la taille compte." },
      { question: "Mes fichiers sont-ils envoyés sur un serveur ?", answer: "Non. Tout se passe dans votre navigateur et votre PDF ne quitte jamais votre appareil." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Réorganiser les pages PDF",
    actionLabel: "Réorganiser les pages",
    shortDescription: "Faites glisser les pages d'un PDF pour les réordonner et enregistrez le document réorganisé.",
    longDescription: [
      "Réorganiser les pages PDF vous montre une miniature de chaque page que vous pouvez glisser dans l'ordre voulu — déplacer une page au début, échanger deux sections, ou inverser tout le document. Des boutons de déplacement sont aussi disponibles pour des changements précis, page par page.",
      "La réorganisation se fait entièrement dans votre navigateur, votre PDF n'est donc jamais téléversé. Les pages sont copiées telles quelles, la qualité et la mise en forme restent donc intactes.",
    ],
    faq: [
      { question: "Comment déplacer une page ?", answer: "Faites glisser sa miniature vers la nouvelle position, ou utilisez les boutons haut/bas sur chaque page pour des déplacements unitaires. Le nouvel ordre est enregistré en cliquant sur le bouton." },
      { question: "Puis-je inverser tout le document ?", answer: "Oui — faites glisser les pages dans l'ordre inverse, ou utilisez les boutons de déplacement. N'importe quel nombre de pages peut être réorganisé en une seule fois." },
      { question: "La réorganisation modifiera-t-elle le contenu des pages ?", answer: "Non. Seul l'ordre des pages change — texte, images et mise en page de chaque page restent exactement les mêmes." },
      { question: "Le PDF est-il envoyé quelque part ?", answer: "Non. La réorganisation s'effectue localement dans votre navigateur et votre fichier ne quitte jamais votre appareil." },
    ],
  },
  "crop-pdf": {
    name: "Rogner un PDF",
    actionLabel: "Rogner le PDF",
    shortDescription: "Rognez les marges de chaque page du PDF en définissant les valeurs haut, bas et latérales.",
    longDescription: [
      "Rogner un PDF supprime les espaces blancs indésirables ou les bordures de scan sur les bords de vos pages. Définissez la quantité à rogner en haut, en bas, à gauche et à droite en pourcentage, observez l'aperçu en direct, et appliquez à toutes les pages en une fois.",
      "Le rognage ajuste la zone visible de la page sans supprimer aucun contenu — les parties rognées sont simplement masquées. Tout se passe dans votre navigateur, votre PDF n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Le rognage supprime-t-il le contenu en dehors de la zone rognée ?", answer: "Non. Rogner un PDF modifie la boîte de rognage de la page, ce qui masque la zone extérieure dans les visionneuses et à l'impression. Le contenu sous-jacent reste dans le fichier et peut être restauré." },
      { question: "Le même rognage est-il appliqué à toutes les pages ?", answer: "Oui. Les marges que vous définissez s'appliquent à toutes les pages. Les pages de tailles différentes sont chacune rognées du même pourcentage." },
      { question: "Puis-je rogner un document scanné pour enlever la bordure noire ?", answer: "Oui — c'est un usage courant. Augmentez les marges jusqu'à ce que l'aperçu n'affiche que le contenu que vous souhaitez conserver." },
      { question: "Mon fichier est-il envoyé sur un serveur ?", answer: "Non. Le rognage se fait entièrement dans votre navigateur et votre PDF reste sur votre appareil." },
    ],
  },
  "resize-pdf": {
    name: "Redimensionner un PDF",
    actionLabel: "Redimensionner le PDF",
    shortDescription: "Modifiez le format des pages du PDF en A4, Lettre ou une échelle personnalisée, avec le contenu ajusté et centré.",
    longDescription: [
      "Redimensionner un PDF modifie le format physique des pages de votre document. Choisissez un format standard comme A4 ou US Letter et chaque page est mise à l'échelle et centrée, ou utilisez un pourcentage pour réduire ou agrandir les pages proportionnellement.",
      "Le redimensionnement s'effectue dans votre navigateur sans téléversement. Le contenu est mis à l'échelle avec la page, rien n'est donc coupé et la mise en page reste proportionnelle.",
    ],
    faq: [
      { question: "Quels formats de page puis-je choisir ?", answer: "A4 et US Letter en portrait ou paysage, plus A3 et A5. Vous pouvez aussi saisir un pourcentage d'échelle pour redimensionner sans changer le rapport d'aspect." },
      { question: "Mon contenu sera-t-il déformé ?", answer: "Non. Le contenu est mis à l'échelle uniformément pour s'adapter au nouveau format et centré sur la page, les proportions sont donc préservées et rien n'est coupé." },
      { question: "Puis-je réduire la taille de fichier d'un PDF avec cet outil ?", answer: "Pas directement — cela modifie les dimensions de page, pas le poids du fichier. Utilisez Compresser un PDF pour réduire la taille du fichier." },
      { question: "Mes fichiers sont-ils envoyés quelque part ?", answer: "Non. Le redimensionnement se fait localement dans votre navigateur et votre PDF ne quitte jamais votre appareil." },
    ],
  },
  "png-to-pdf": {
    name: "PNG en PDF",
    actionLabel: "Convertir en PDF",
    shortDescription: "Transformez une ou plusieurs images PNG en un seul document PDF, une image par page.",
    longDescription: [
      "PNG en PDF combine vos images PNG en un seul fichier PDF, chaque image sur sa propre page à sa résolution d'origine. Ajoutez plusieurs images, organisez leur ordre, et téléchargez un document unique.",
      "Idéal pour transformer captures d'écran, diagrammes ou graphiques exportés en un PDF facile à partager. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées. Les zones transparentes sont placées sur un fond blanc.",
    ],
    faq: [
      { question: "Puis-je combiner plusieurs PNG en un seul PDF ?", answer: "Oui. Ajoutez autant d'images PNG que vous le souhaitez et chacune deviendra une page du PDF final, dans l'ordre où vous les organisez." },
      { question: "Quelle taille de page est utilisée ?", answer: "Chaque page correspond aux dimensions en pixels de son image source, les images ne sont donc ni recadrées ni déformées." },
      { question: "Qu'advient-il des parties transparentes de l'image ?", answer: "La transparence est aplatie sur un fond blanc pour que la page ait le même aspect dans toutes les visionneuses PDF." },
      { question: "Mes images sont-elles envoyées sur un serveur ?", answer: "Non. La conversion se fait entièrement dans votre navigateur et vos images restent sur votre appareil." },
    ],
  },
  "extract-pdf-pages": {
    name: "Extraire des pages PDF",
    actionLabel: "Extraire les pages",
    shortDescription: "Extrayez les pages choisies d'un PDF vers un nouveau fichier, ou enregistrez chaque page comme un PDF distinct.",
    longDescription: [
      "Extraire des pages PDF vous permet de choisir exactement les pages dont vous avez besoin dans un document et de les enregistrer comme nouveau PDF. Consultez une miniature de chaque page, touchez celles à conserver, puis téléchargez-les ensemble — ou en PDF distincts d'une page dans un ZIP.",
      "Votre fichier original reste inchangé, et les pages sont copiées telles quelles, le texte, les images et la mise en forme restent donc intacts. Tout se passe dans votre navigateur, le PDF n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Quelle est la différence entre extraire et diviser ?", answer: "Extraire n'enregistre que les pages sélectionnées dans un nouveau PDF. Diviser sépare tout le document en plusieurs parties par plages de pages ou parties de taille fixe." },
      { question: "Puis-je enregistrer chaque page extraite comme fichier séparé ?", answer: "Oui. Choisissez « PDF séparés » et chaque page sélectionnée devient son propre PDF, regroupés dans un seul téléchargement .zip." },
      { question: "Les pages extraites perdront-elles en qualité ?", answer: "Non. Les pages sont copiées sans recompression, elles ont donc exactement le même aspect que l'original. Les champs de formulaire interactifs peuvent devenir du contenu de page normal." },
      { question: "Mon PDF est-il envoyé sur un serveur ?", answer: "Non. Les pages sont extraites localement dans votre navigateur et votre fichier ne quitte jamais votre appareil." },
    ],
  },
  "add-page-numbers": {
    name: "Ajouter des numéros de page",
    actionLabel: "Ajouter les numéros de page",
    shortDescription: "Numérotez les pages d'un PDF, en choisissant la position, le format et le numéro de départ.",
    longDescription: [
      "Ajouter des numéros de page appose un numéro sur chaque page de votre PDF. Choisissez parmi six positions, un style comme « 1 », « 1 / 10 » ou « Page 1 sur 10 », définissez le numéro de départ, et sautez éventuellement la page de garde.",
      "Les numéros sont dessinés comme du texte réel dans une police standard, ils s'impriment donc nettement et restent bien orientés même sur des pages pivotées. Tout le processus se déroule dans votre navigateur — votre document n'est jamais téléversé.",
    ],
    faq: [
      { question: "Puis-je commencer la numérotation à un autre chiffre que 1 ?", answer: "Oui. Définissez n'importe quel numéro de départ — pratique lorsque votre PDF est un chapitre ou une annexe d'un document plus large." },
      { question: "Puis-je laisser la page de garde sans numéro ?", answer: "Oui. Activez « Ne pas numéroter la première page » et la numérotation commence à la deuxième page." },
      { question: "Quels chiffres sont utilisés ?", answer: "Des chiffres standard (1, 2, 3), qui s'affichent correctement dans tout lecteur PDF. Les libellés comme « Page 1 sur 10 » sont écrits en français." },
      { question: "Mon fichier est-il téléversé ?", answer: "Non. Les numéros de page sont ajoutés localement dans votre navigateur et votre PDF reste sur votre appareil." },
    ],
  },
  "add-watermark": {
    name: "Ajouter un filigrane",
    actionLabel: "Ajouter le filigrane",
    shortDescription: "Apposez un texte comme CONFIDENTIEL ou BROUILLON sur toutes les pages d'un PDF.",
    longDescription: [
      "Ajouter un filigrane place votre texte sur chaque page d'un PDF — une fois au centre ou répété sur toute la page. Choisissez la couleur, l'opacité, la taille et l'angle, et voyez un aperçu en direct sur votre première page avant de l'appliquer.",
      "Le français et les autres écritures sont entièrement pris en charge. Le filigrane est enregistré comme un objet filigrane standard, et tout se passe dans votre navigateur, votre document n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Puis-je écrire le filigrane en français ?", answer: "Oui. Le texte est rendu avec les polices de votre navigateur, le français et les autres écritures sont donc correctement affichés." },
      { question: "Le filigrane peut-il être répété sur la page ?", answer: "Oui. Choisissez la disposition « Répété » pour paver le texte sur toute la page, ou « Une fois, centré » pour un tampon unique." },
      { question: "Le filigrane peut-il être supprimé plus tard ?", answer: "Il est enregistré comme un objet filigrane standard, donc les outils qui reconnaissent les filigranes — dont Supprimer un filigrane de TAMPDF — peuvent le retirer. Ce n'est pas une mesure de sécurité." },
      { question: "Mon PDF est-il envoyé quelque part ?", answer: "Non. Le filigrane est appliqué localement dans votre navigateur." },
    ],
  },
  "remove-watermark": {
    name: "Supprimer un filigrane",
    actionLabel: "Supprimer le filigrane",
    shortDescription: "Supprimez les filigranes ajoutés en tant qu'objets filigrane dans un PDF.",
    longDescription: [
      "Supprimer un filigrane trouve et supprime les filigranes ajoutés en tant qu'objets filigrane — le type créé par Adobe Acrobat, TAMPDF et la plupart des éditeurs PDF — ainsi que les annotations de filigrane et les calques nommés « Watermark ». Le reste de chaque page reste exactement identique.",
      "Les filigranes faisant partie d'une image scannée ou fusionnés dans le texte ordinaire de la page n'ont aucun marqueur permettant de les distinguer du contenu réel, ils ne peuvent donc pas être supprimés automatiquement. Merci de ne retirer des filigranes que de documents que vous avez le droit de modifier. Le traitement se fait dans votre navigateur, votre fichier n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Quels filigranes peuvent être supprimés ?", answer: "Les filigranes ajoutés en tant qu'objets filigrane, annotations de filigrane, ou calques nommés « Watermark » — y compris ceux créés par Adobe Acrobat et l'outil Ajouter un filigrane de TAMPDF." },
      { question: "Pourquoi le filigrane de mon fichier n'a-t-il pas été supprimé ?", answer: "Si un filigrane fait partie de l'image scannée d'une page ou a été aplati dans le texte de la page, il ne peut pas être séparé du contenu réel sans endommager la page." },
      { question: "Supprimer un filigrane affecte-t-il le reste de la page ?", answer: "Non. Seul le contenu marqué comme filigrane est supprimé ; texte, images et mise en page restent intacts." },
      { question: "Mon fichier est-il téléversé ?", answer: "Non. Le PDF est traité localement dans votre navigateur." },
    ],
  },
  "pdf-to-images": {
    name: "PDF en images",
    actionLabel: "Convertir en images",
    shortDescription: "Convertissez chaque page d'un PDF en images PNG, JPG ou WEBP, téléchargées sous forme de ZIP.",
    longDescription: [
      "PDF en images convertit chaque page de votre PDF en une image distincte dans le format de votre choix : PNG pour le texte le plus net, JPG pour les fichiers les plus légers, ou WEBP pour des images modernes et compactes. Choisissez une résolution et chaque page est exportée et regroupée dans un unique .zip.",
      "La conversion s'effectue directement dans votre navigateur grâce à PDF.js, votre document n'est donc jamais téléversé vers un serveur.",
    ],
    faq: [
      { question: "Quel format d'image dois-je choisir ?", answer: "PNG garde le texte et les tracés parfaitement nets. JPG produit des fichiers plus petits et convient aux photos. WEBP offre un bon compromis pour un usage web." },
      { question: "Quelle est la résolution des images ?", answer: "Standard rend à 108 dpi, Élevée à 144 dpi, et Maximale à 216 dpi — suffisant pour imprimer la plupart des documents." },
      { question: "Comment obtenir toutes les pages en une fois ?", answer: "Chaque page est convertie et regroupée dans un fichier .zip. Un PDF d'une seule page se télécharge en une seule image." },
      { question: "Mon PDF est-il téléversé ?", answer: "Non. Les pages sont rendues localement dans votre navigateur." },
    ],
  },
  "images-to-pdf": {
    name: "Images en PDF",
    actionLabel: "Créer le PDF",
    shortDescription: "Combinez des images JPG, PNG et WEBP en un seul PDF, dans l'ordre de votre choix.",
    longDescription: [
      "Images en PDF transforme un ensemble de photos, scans ou captures d'écran en un seul document PDF. Ajoutez des images JPG, PNG ou WEBP, faites glisser les miniatures dans l'ordre voulu, et choisissez une page A4 ou Lettre (avec orientation automatique) ou des pages qui correspondent à chaque image.",
      "Ajoutez une marge pour un rendu imprimé propre. Les zones transparentes sont placées sur fond blanc, et toute la conversion se fait dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "Puis-je changer l'ordre des images ?", answer: "Oui. Faites glisser les miniatures ou utilisez les boutons flèches pour définir l'ordre des pages avant de créer le PDF." },
      { question: "Quels formats d'image sont pris en charge ?", answer: "JPG, PNG et WEBP. Vous pouvez mélanger les formats dans le même PDF." },
      { question: "Quel format de page le PDF utilisera-t-il ?", answer: "Choisissez A4 ou Lettre — chaque image est ajustée à la page et orientée en paysage si besoin — ou « Ajuster à l'image » pour que chaque page ait exactement la taille de son image." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. Le PDF est créé localement dans votre navigateur." },
    ],
  },
  "flip-pdf": {
    name: "Retourner un PDF",
    actionLabel: "Retourner le PDF",
    shortDescription: "Retournez les pages d'un PDF horizontalement ou verticalement.",
    longDescription: [
      "Retourner un PDF met en miroir chaque page de votre document — de gauche à droite ou de haut en bas. Utile pour imprimer des transferts thermocollants, corriger des scans faits à l'envers, ou préparer des visuels en miroir.",
      "Prévisualisez le résultat sur votre première page avant de l'appliquer. Le retournement respecte aussi les pages pivotées, et tout se passe dans votre navigateur, votre fichier n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Quelle est la différence entre retourner et faire pivoter ?", answer: "Faire pivoter tourne une page par paliers de 90°. Retourner crée une image miroir, le texte se lit donc à l'envers — ce dont vous avez besoin pour les transferts et certains travaux d'impression." },
      { question: "Puis-je retourner une seule page ?", answer: "Le retournement s'applique à toutes les pages. Pour retourner une seule page, extrayez-la d'abord avec Extraire des pages PDF." },
      { question: "Le retournement réduit-il la qualité ?", answer: "Non. Les pages sont transformées, pas re-rendues, le texte et les graphiques restent donc aussi nets que l'original." },
      { question: "Mon PDF est-il téléversé ?", answer: "Non. Le retournement se fait localement dans votre navigateur." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Modifier les métadonnées PDF",
    actionLabel: "Modifier les métadonnées",
    shortDescription: "Modifiez le titre, l'auteur, le sujet et les mots-clés d'un PDF.",
    longDescription: [
      "Modifier les métadonnées PDF vous permet de voir et de changer les propriétés du document stockées dans un PDF — titre, auteur, sujet, mots-clés, créateur et producteur. C'est ce que les lecteurs PDF, moteurs de recherche et gestionnaires de fichiers affichent à propos de votre document.",
      "Laissez un champ vide pour le supprimer. Le contenu des pages n'est pas touché, et toute la modification se fait dans votre navigateur, votre fichier n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Pourquoi modifier les métadonnées d'un PDF ?", answer: "Un titre et un auteur clairs rendent les documents plus faciles à trouver et plus professionnels lors du partage, et les moteurs de recherche peuvent les utiliser pour indexer les PDF." },
      { question: "Modifier les métadonnées changera-t-il le contenu du document ?", answer: "Non. Seules les propriétés du document changent ; pages, texte et images restent exactement les mêmes." },
      { question: "Comment supprimer une propriété ?", answer: "Videz le champ et enregistrez. Les champs vides sont retirés du fichier." },
      { question: "Mon PDF est-il téléversé ?", answer: "Non. Les propriétés sont modifiées localement dans votre navigateur." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Supprimer les métadonnées PDF",
    actionLabel: "Supprimer les métadonnées",
    shortDescription: "Retirez l'auteur, le titre, le logiciel et d'autres propriétés cachées d'un PDF avant de le partager.",
    longDescription: [
      "Supprimer les métadonnées PDF efface les propriétés du document et les données cachées portées par un PDF — auteur, titre, sujet, mots-clés, le logiciel utilisé pour le créer, les dates de création et les paquets de métadonnées XMP intégrés.",
      "C'est une étape rapide de confidentialité avant de partager un fichier publiquement. Le contenu des pages n'est pas touché, et le nettoyage se fait dans votre navigateur, votre fichier n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Quelles informations sont supprimées ?", answer: "Titre, auteur, sujet, mots-clés, logiciel créateur et producteur, dates de création et de modification, métadonnées XMP intégrées, et données privées de l'application." },
      { question: "Cela change-t-il l'apparence du document ?", answer: "Non. Seules les propriétés cachées sont supprimées ; chaque page a exactement le même aspect." },
      { question: "Cela supprime-t-il les informations personnelles imprimées sur les pages ?", answer: "Non. Cela ne supprime que les métadonnées. Les noms ou détails imprimés sur les pages restent visibles." },
      { question: "Mon PDF est-il téléversé ?", answer: "Non. Le fichier est nettoyé localement dans votre navigateur." },
    ],
  },
  "pdf-info": {
    name: "Infos PDF",
    actionLabel: "Vérifier le PDF",
    shortDescription: "Consultez en un coup d'œil le nombre de pages, les tailles, la version et les propriétés d'un PDF.",
    longDescription: [
      "Infos PDF lit un PDF et affiche ce qu'il contient : le nombre de pages, la taille de chaque page en millimètres avec des noms de papier comme A4 ou Lettre, la version du PDF, s'il est chiffré ou contient un formulaire à remplir, ainsi que son titre, auteur, logiciel et dates.",
      "Pratique avant d'imprimer, de soumettre ou de convertir un fichier. Le document est seulement lu — jamais modifié — et tout se passe dans votre navigateur, il n'est donc jamais téléversé.",
    ],
    faq: [
      { question: "Quels détails Infos PDF affiche-t-il ?", answer: "Nombre de pages, tailles de page avec noms de papier, version PDF, taille du fichier, chiffrement, formulaires à remplir, affichage web rapide, et propriétés du document comme titre, auteur et date de création." },
      { question: "Infos PDF modifie-t-il mon fichier ?", answer: "Non. Le PDF est seulement lu ; rien n'est modifié ni enregistré." },
      { question: "Puis-je vérifier un PDF protégé par mot de passe ?", answer: "Les fichiers nécessitant un mot de passe pour s'ouvrir ne peuvent pas être lus sans celui-ci. Les fichiers avec seulement des restrictions d'édition sont affichés comme chiffrés." },
      { question: "Mon PDF est-il téléversé ?", answer: "Non. Il est lu localement dans votre navigateur." },
    ],
  },
  "resize-image": {
    name: "Redimensionner une image",
    actionLabel: "Redimensionner les images",
    shortDescription: "Modifiez la largeur et la hauteur d'images JPG, PNG et WEBP, en pourcentage ou en pixels exacts.",
    longDescription: [
      "Redimensionner une image modifie les dimensions de vos photos et graphiques. Mettez à l'échelle en pourcentage, ou saisissez une largeur et une hauteur exactes avec le rapport d'aspect verrouillé pour que rien ne paraisse déformé. Redimensionnez plusieurs images à la fois et téléchargez-les ensemble dans un .zip.",
      "Les images conservent leur format d'origine, et un lissage de haute qualité garde les images réduites nettes. Tout se passe dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "Le redimensionnement rendra-t-il mon image floue ?", answer: "Réduire une image la garde nette. L'agrandir au-delà de sa taille d'origine ne peut pas ajouter de détail, donc les fortes augmentations peuvent paraître moins nettes." },
      { question: "Puis-je redimensionner plusieurs images à la fois ?", answer: "Oui. Ajoutez jusqu'à 20 images ; avec le rapport d'aspect verrouillé, chacune garde ses propres proportions à la largeur que vous définissez." },
      { question: "Quel format aura l'image redimensionnée ?", answer: "Le même que l'original — JPG reste JPG, PNG reste PNG, et WEBP reste WEBP là où votre navigateur le prend en charge." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. Le redimensionnement se fait localement dans votre navigateur." },
    ],
  },
  "crop-image": {
    name: "Rogner une image",
    actionLabel: "Rogner l'image",
    shortDescription: "Découpez une image à la zone souhaitée avec un cadre de recadrage à déplacer.",
    longDescription: [
      "Rogner une image supprime les bords indésirables d'une photo ou capture d'écran. Faites glisser le cadre de recadrage ou ses coins sur l'aperçu — ou ajustez chaque bord avec un curseur — et voyez la taille exacte du résultat en pixels.",
      "L'image rognée conserve son format et sa qualité d'origine, et tout le processus se déroule dans votre navigateur, votre image n'est donc jamais téléversée.",
    ],
    faq: [
      { question: "Puis-je rogner à des dimensions exactes ?", answer: "Ajustez chaque bord avec les curseurs et observez la taille du résultat se mettre à jour en pixels au fur et à mesure." },
      { question: "Le rognage réduit-il la qualité de l'image ?", answer: "Non. Les pixels conservés sont copiés tels quels ; seules les parties en dehors du cadre sont supprimées." },
      { question: "Quels formats puis-je rogner ?", answer: "JPG, PNG et WEBP. Le résultat conserve le même format que l'original." },
      { question: "Mon image est-elle téléversée ?", answer: "Non. Le rognage se fait localement dans votre navigateur." },
    ],
  },
  "flip-image": {
    name: "Retourner une image",
    actionLabel: "Retourner les images",
    shortDescription: "Retournez images horizontalement ou verticalement, une à une ou en lot.",
    longDescription: [
      "Retourner une image crée une image miroir de vos photos : de gauche à droite, ou de haut en bas. Pratique pour corriger des selfies pris avec la caméra frontale, créer des reflets, ou préparer des visuels pour des transferts d'impression.",
      "Retournez plusieurs images à la fois, prévisualisez le résultat instantanément, et téléchargez-les dans leur format d'origine. Tout se passe dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "Quelle est la différence entre retourner et faire pivoter ?", answer: "Faire pivoter tourne une image par paliers de 90°. Retourner la met en miroir, comme dans un miroir." },
      { question: "Puis-je retourner plusieurs images à la fois ?", answer: "Oui. Ajoutez jusqu'à 20 images, elles sont toutes retournées de la même façon, puis téléchargées ensemble sous forme de .zip." },
      { question: "Le retournement réduit-il la qualité ?", answer: "Aucune perte notable — le PNG reste sans perte, et le JPG et le WEBP sont enregistrés en haute qualité." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. Le retournement se fait localement dans votre navigateur." },
    ],
  },
  "png-to-jpg": {
    name: "PNG en JPG",
    actionLabel: "Convertir en JPG",
    shortDescription: "Convertissez des images PNG en JPG pour des fichiers plus légers et plus compatibles.",
    longDescription: [
      "PNG en JPG convertit vos images PNG en fichiers JPG, généralement bien plus légers — idéal pour les photos, les pièces jointes d'e-mail et les formulaires de téléversement qui n'acceptent que le JPG. Convertissez plusieurs images à la fois et ajustez la qualité pour équilibrer taille et netteté.",
      "Le JPG ne prend pas en charge la transparence, les zones transparentes sont donc remplies de blanc. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "Pourquoi convertir un PNG en JPG ?", answer: "Les fichiers JPG sont généralement bien plus légers que les PNG pour les photos et sont acceptés presque partout, de l'e-mail aux formulaires en ligne." },
      { question: "Qu'advient-il des fonds transparents ?", answer: "Le JPG n'a pas de transparence, les zones transparentes sont donc remplies de blanc." },
      { question: "Puis-je convertir plusieurs PNG à la fois ?", answer: "Oui. Ajoutez jusqu'à 30 images ; elles sont converties ensemble et téléchargées sous forme de .zip." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. La conversion se fait localement dans votre navigateur." },
    ],
  },
  "jpg-to-png": {
    name: "JPG en PNG",
    actionLabel: "Convertir en PNG",
    shortDescription: "Convertissez des photos JPG en images PNG sans perte de qualité.",
    longDescription: [
      "JPG en PNG convertit vos images JPG ou JPEG au format PNG. Le PNG est sans perte, l'image ne perdra donc pas plus de qualité lorsque vous la modifierez et l'enregistrerez à nouveau — utile pour des graphiques sur lesquels vous continuerez à travailler, ou pour des outils et plateformes qui exigent le PNG.",
      "Convertissez plusieurs images à la fois et téléchargez-les ensemble. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "Convertir un JPG en PNG améliorera-t-il la qualité ?", answer: "Non — le détail déjà perdu dans le JPG ne peut pas être restauré. Mais le PNG évite toute perte supplémentaire lorsque vous modifiez et enregistrez à nouveau." },
      { question: "Pourquoi le PNG est-il plus volumineux que le JPG ?", answer: "Le PNG stocke chaque pixel sans compression avec perte, les photos sont donc généralement plus volumineuses. C'est le compromis pour une qualité sans perte." },
      { question: "Puis-je convertir plusieurs JPG à la fois ?", answer: "Oui. Ajoutez jusqu'à 30 images et téléchargez-les sous forme de .zip." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. La conversion se fait localement dans votre navigateur." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP en JPG",
    actionLabel: "Convertir en JPG",
    shortDescription: "Convertissez des images WEBP en JPG pour qu'elles s'ouvrent dans n'importe quelle appli ou site.",
    longDescription: [
      "WEBP en JPG convertit les images WEBP modernes — courantes sur les sites web — en JPG, le format pris en charge par pratiquement toutes les applis, appareils et formulaires de téléversement. Convertissez une image ou plusieurs à la fois, et ajustez la qualité pour équilibrer taille et netteté.",
      "Les zones transparentes sont remplies de blanc, le JPG ne prenant pas en charge la transparence. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "Pourquoi convertir un WEBP en JPG ?", answer: "Certaines applis, éditeurs et formulaires de téléversement plus anciens n'acceptent pas le WEBP. Le JPG fonctionne presque partout." },
      { question: "Vais-je perdre en qualité ?", answer: "Avec la qualité par défaut, la différence est difficile à voir. Augmentez le curseur de qualité pour le résultat le plus net." },
      { question: "Puis-je convertir plusieurs images WEBP à la fois ?", answer: "Oui. Ajoutez jusqu'à 30 images et téléchargez-les sous forme de .zip." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. La conversion se fait localement dans votre navigateur." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG en WEBP",
    actionLabel: "Convertir en WEBP",
    shortDescription: "Convertissez des photos JPG en WEBP pour des images plus légères et plus rapides à charger sur le web.",
    longDescription: [
      "JPG en WEBP convertit vos images JPG en WEBP, un format moderne qui produit généralement des fichiers nettement plus légers à qualité visuelle similaire — idéal pour accélérer les sites web et économiser du stockage.",
      "Ajustez la qualité pour trouver le bon équilibre et convertissez plusieurs images à la fois. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées. Créer des fichiers WEBP nécessite une version récente de Chrome, Edge ou Firefox.",
    ],
    faq: [
      { question: "Le WEBP est-il plus léger que le JPG ?", answer: "Généralement, oui — le WEBP économise souvent un espace significatif à qualité similaire, ce qui aide les pages à charger plus vite." },
      { question: "Tous les navigateurs prennent-ils en charge le WEBP ?", answer: "Tous les navigateurs modernes peuvent afficher le WEBP. Créer des fichiers WEBP ici nécessite une version récente de Chrome, Edge ou Firefox." },
      { question: "Puis-je convertir plusieurs JPG à la fois ?", answer: "Oui. Ajoutez jusqu'à 30 images et téléchargez-les sous forme de .zip." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. La conversion se fait localement dans votre navigateur." },
    ],
  },
  "webp-to-png": {
    name: "WEBP en PNG",
    actionLabel: "Convertir en PNG",
    shortDescription: "Convertissez des images WEBP en PNG tout en conservant la transparence.",
    longDescription: [
      "WEBP en PNG convertit des images WEBP en PNG, le format sans perte pris en charge par tous les éditeurs d'images. La transparence est préservée, les logos, icônes et détourages gardent donc leurs fonds transparents.",
      "Convertissez plusieurs images à la fois et téléchargez-les ensemble. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées.",
    ],
    faq: [
      { question: "La transparence est-elle conservée ?", answer: "Oui. Le PNG prend en charge la transparence, les zones transparentes de votre image WEBP restent donc transparentes." },
      { question: "Pourquoi convertir un WEBP en PNG ?", answer: "Le PNG s'ouvre dans tout éditeur et outil de conception et ne perdra pas en qualité lorsque vous le modifierez et l'enregistrerez à nouveau." },
      { question: "Puis-je convertir plusieurs fichiers WEBP à la fois ?", answer: "Oui. Ajoutez jusqu'à 30 images et téléchargez-les sous forme de .zip." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. La conversion se fait localement dans votre navigateur." },
    ],
  },
  "png-to-webp": {
    name: "PNG en WEBP",
    actionLabel: "Convertir en WEBP",
    shortDescription: "Convertissez des images PNG en WEBP pour des fichiers plus légers qui gardent la transparence.",
    longDescription: [
      "PNG en WEBP convertit vos images PNG en WEBP, ce qui rend généralement les fichiers beaucoup plus légers tout en conservant la transparence — idéal pour les graphiques de sites web, icônes et captures d'écran.",
      "Choisissez la qualité, convertissez plusieurs images à la fois, et téléchargez-les ensemble. La conversion se fait entièrement dans votre navigateur, vos images ne sont donc jamais téléversées. Créer des fichiers WEBP nécessite une version récente de Chrome, Edge ou Firefox.",
    ],
    faq: [
      { question: "Le WEBP conserve-t-il la transparence ?", answer: "Oui. Le WEBP prend en charge la transparence, les zones transparentes du PNG restent donc transparentes." },
      { question: "De combien mes images seront-elles réduites ?", answer: "Cela varie, mais les fichiers WEBP sont souvent nettement plus légers que la même image enregistrée en PNG." },
      { question: "Puis-je convertir plusieurs PNG à la fois ?", answer: "Oui. Ajoutez jusqu'à 30 images et téléchargez-les sous forme de .zip." },
      { question: "Mes images sont-elles téléversées ?", answer: "Non. La conversion se fait localement dans votre navigateur." },
    ],
  },
};
