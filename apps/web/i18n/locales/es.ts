import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const es: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Cambiar idioma" } },
  breadcrumb: { home: "Inicio" },
  tool: {
    processedClient: "Procesado en tu navegador — los archivos nunca se suben",
    faqHeading: "Preguntas frecuentes",
    relatedHeading: "Herramientas relacionadas",
    metaTitleSuffix: "— Herramienta gratuita en línea",
  },
  article: {
    tocHeading: "Índice",
    readingTime: "{minutes} min de lectura",
    readingTimeOne: "1 min de lectura",
    readingTimeTwo: "2 min de lectura",
    published: "Publicado el {date}",
    updated: "Actualizado el {date}",
    relatedHeading: "Artículos relacionados",
    previousArticle: "Anterior",
    nextArticle: "Siguiente",
    ctaDefaultHeading: "¿Listo para probar {tool}?",
    ctaCompressPdfButtonLabel: "Comprimir PDF gratis",
  },
  card: { comingSoon: "Próximamente" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Herramientas PDF gratuitas, rápidas y fáciles de usar",
    toolPicker: {
      trigger: "Elegir una herramienta PDF",
      ariaLabel: "Menú de herramientas PDF",
      loadMore: "Más herramientas",
      allShown: "Se muestran todas las herramientas",
    },
    features: { devices: "Funciona en cualquier dispositivo", fast: "Rápido", secure: "Seguro" },
  },
  footer: {
    rights: "Todos los derechos reservados.",
    privacyNote: "Los archivos se procesan de forma segura y nunca se almacenan más tiempo del necesario.",
    moreCount: "+{count} más",
    company: "Empresa",
    legal: "Legal",
    aboutUs: "Sobre nosotros",
    contactUs: "Contacto",
    blog: "Blog",
    faq: "Preguntas frecuentes",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos de servicio",
    cookiePolicy: "Política de cookies",
  },
  staticPages: {
    note: "Esta página es un marcador de posición — el contenido completo llegará pronto.",
    aboutUs: {
      title: "Sobre nosotros",
      intro:
        "TAMPDF es un conjunto de herramientas gratuitas en línea creado para que las tareas diarias con archivos — combinar, dividir, comprimir y convertir PDF, imágenes y documentos — sean rápidas, privadas y sencillas.",
    },
    contactUs: {
      title: "Contacto",
      intro: "¿Tienes una pregunta, encontraste un error o quieres sugerir una nueva herramienta? Nos encantaría saber de ti.",
    },
    blog: { title: "Blog", intro: "Estamos preparando artículos sobre formatos de archivo, consejos de productividad y novedades del producto." },
    faq: {
      title: "Preguntas frecuentes",
      intro: "Pronto publicaremos aquí respuestas generales sobre TAMPDF. Mientras tanto, cada herramienta tiene sus propias preguntas frecuentes.",
    },
    privacyPolicy: {
      title: "Política de privacidad",
      intro: "Nuestra política de privacidad completa, que explica cómo TAMPDF trata tus archivos y datos, se está finalizando y se publicará aquí en breve.",
    },
    termsOfService: {
      title: "Términos de servicio",
      intro: "Estos Términos de servicio rigen el uso de las herramientas y el sitio web de TAMPDF, incluida nuestra exención de garantías y limitación de responsabilidad.",
    },
    cookiePolicy: {
      title: "Política de cookies",
      intro: "Pronto se publicarán aquí los detalles sobre las cookies y tecnologías similares que usa TAMPDF.",
    },
  },
  dropzone: {
    browse: "o haz clic para explorar",
    defaultLabel: "Arrastra y suelta tu archivo aquí",
    unsupportedType: "{name} no es un tipo de archivo compatible y se omitió.",
    unsupportedTypePlural: "{count} archivos no tenían un tipo compatible y se omitieron.",
    tooLarge: "{name} es demasiado grande (máx. {max}) y se omitió.",
    tooLargePlural: "{count} archivos eran demasiado grandes (máx. {max}) y se omitieron.",
    maxFilesReached: "Ya agregaste el máximo de {max} archivos para esta herramienta.",
    maxFilesExceeded: "Esta herramienta permite hasta {max} archivos a la vez, así que solo se agregaron {added} de tus archivos.",
  },
  fileList: { moveUp: "Subir", moveDown: "Bajar", remove: "Quitar {name}" },
  result: {
    ready: "Tu archivo está listo",
    download: "Descargar",
    startOver: "Empezar de nuevo",
    smaller: "más pequeño",
    originalSize: "Tamaño original",
    newSize: "Nuevo tamaño",
    reducedBy: "Reducido en",
    spaceSaved: "Espacio ahorrado",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o pudo haberse movido.",
    cta: "Volver al inicio",
  },
};
