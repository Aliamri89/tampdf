import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Publicidad"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Vista previa — se aplica a la imagen",
      formatsNote: "Archivos admitidos: PDF, JPG, PNG y WebP"
    },
    removeWatermark: {
      intro: "Elimina las marcas de agua añadidas como objetos de marca de agua: en PDF (con Adobe Acrobat, TAMPDF y la mayoría de editores) y en documentos de Word (Diseño ▸ Marca de agua). Las marcas incrustadas en los píxeles de una imagen no se pueden separar de ella, por eso no se admiten imágenes.",
      formatsNote: "Archivos admitidos: PDF y Word (.docx)",
      noneFoundWord: "No se encontró ninguna marca de agua de Word en este documento. Solo se pueden eliminar las marcas añadidas con la función Marca de agua del propio Word."
    }
  },
  consent: {
    title: "Cookies y analítica",
    description: "Usamos cookies de analítica (Google Analytics y Microsoft Clarity) para entender cómo se usa el sitio. Solo funcionan si aceptas. Tus archivos nunca salen de tu navegador.",
    accept: "Aceptar",
    reject: "Rechazar",
    settings: "Configuración de cookies",
    statusOn: "Las cookies de analítica están activadas.",
    statusOff: "Las cookies de analítica están desactivadas.",
    close: "Cerrar"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Cómo trata TAMPDF tus archivos y datos: los archivos se procesan en tu navegador y nunca se suben; qué recogen la analítica, las cookies y la publicidad; y tus derechos.",
      updated: "Última actualización: 6 de noviembre de 2026.",
      sections: [
        {
          heading: "Descripción general",
          text: "TAMPDF (tampdf.com) ofrece herramientas gratuitas en el navegador para PDF e imágenes. Esta política explica qué recogemos y qué no."
        },
        {
          heading: "Tus archivos permanecen en tu dispositivo",
          text: "Los archivos se procesan localmente en tu navegador y nunca se suben, almacenan ni comparten con nuestros servidores ni con terceros. Si eliges «Guardar en Google Drive» o «Guardar en Dropbox», tu navegador envía el resultado directamente al servicio en el que iniciaste sesión; nosotros nunca lo recibimos."
        },
        {
          heading: "Información recogida automáticamente",
          text: "Para entender cómo se usa el sitio mantenemos contadores sencillos propios en nuestro servidor y, solo con tu consentimiento cuando sea necesario, usamos Google Analytics y Microsoft Clarity. Pueden registrar las páginas visitadas, la ubicación aproximada, el dispositivo, el navegador, el idioma, la página de referencia, y qué herramienta usaste y si funcionó. Nunca recogemos tu nombre, tu correo electrónico ni el contenido de tus archivos."
        },
        {
          heading: "Cookies y tecnologías similares",
          text: "Los servicios de analítica y publicidad pueden instalar cookies o usar el almacenamiento local. Nuestra Política de cookies las enumera y explica cómo controlarlas, y puedes cambiar tu elección en cualquier momento con «Configuración de cookies» en el pie de página."
        },
        {
          heading: "Tus derechos",
          text: "Cuando se apliquen leyes como el RGPD, el RGPD del Reino Unido o la CCPA, puedes solicitar el acceso a los datos personales que tenemos sobre ti, su corrección o eliminación, oponerte a su tratamiento o limitarlo, retirar tu consentimiento en cualquier momento y presentar una reclamación ante tu autoridad de protección de datos. Usa la página de Contacto para hacer tu solicitud."
        },
        {
          heading: "Conservación de datos",
          text: "Los datos de analítica se conservan solo el tiempo necesario para las estadísticas y para mejorar el servicio, según la configuración de conservación de cada proveedor."
        },
        {
          heading: "Servicios y enlaces de terceros",
          text: "El sitio puede enlazar o cargar servicios de otras empresas (por ejemplo Google, Microsoft y Dropbox). Tienen sus propias políticas de privacidad y no somos responsables de ellas."
        },
        {
          heading: "Menores",
          text: "TAMPDF no está dirigido a menores de 13 años (o de 16 donde lo exija la ley local) y no recogemos a sabiendas su información personal."
        },
        {
          heading: "Seguridad",
          text: "Los archivos se procesan en tu navegador y nunca se nos envían. El sitio se sirve por HTTPS."
        },
        {
          heading: "Cambios en esta política",
          text: "Podemos actualizar esta política; la fecha de «Última actualización» indica la versión más reciente. Seguir usando el sitio supone aceptar la actualización."
        },
        {
          heading: "Contacto",
          text: "¿Preguntas sobre esta política? Usa la página de Contacto."
        }
      ]
    },
    cookiePolicy: {
      intro: "Las cookies y tecnologías similares que TAMPDF usa para preferencias, analítica y publicidad, y cómo controlarlas.",
      updated: "Última actualización: 6 de noviembre de 2026.",
      sections: [
        {
          heading: "¿Qué son las cookies?",
          text: "Pequeños archivos de texto que un sitio web guarda en tu dispositivo. Tecnologías similares, como el almacenamiento local y los píxeles, funcionan de forma parecida; esta política las cubre todas."
        },
        {
          heading: "Almacenamiento estrictamente necesario",
          text: "TAMPDF recuerda tu tema claro/oscuro y tu elección sobre cookies en el almacenamiento local de tu navegador. No contienen datos personales y nunca se nos envían."
        },
        {
          heading: "Cookies de analítica",
          text: "Con tu consentimiento cuando sea necesario, usamos Google Analytics 4 (cookies como _ga y _ga_*) y Microsoft Clarity (como _clck y _clsk) para medir el tráfico y entender cómo se usa el sitio; Clarity también puede crear grabaciones de sesión y mapas de calor anonimizados."
        },
        {
          heading: "Gestionar tu elección",
          text: "Cuando se requiere consentimiento puedes aceptar o rechazar las cookies de analítica en el aviso y cambiar de opinión en cualquier momento con «Configuración de cookies» en el pie de página; retirar el consentimiento detiene los scripts de analítica y elimina sus cookies. También puedes bloquear las cookies en tu navegador: las herramientas siguen funcionando porque tus archivos se procesan localmente."
        },
        {
          heading: "Más controles",
          text: "Puedes rechazar la publicidad personalizada en https://adssettings.google.com o https://www.aboutads.info/choices (https://www.youronlinechoices.eu en Europa) y gestionar los datos de Microsoft en https://account.microsoft.com/privacy."
        },
        {
          heading: "Cambios y contacto",
          text: "Podemos actualizar esta política; la fecha de arriba indica la versión más reciente. ¿Preguntas? Usa la página de Contacto."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Aceptación de los términos",
          text: "Al usar TAMPDF aceptas estas Condiciones del servicio. Si no estás de acuerdo, no uses nuestras herramientas."
        },
        {
          heading: "El servicio",
          text: "TAMPDF ofrece herramientas gratuitas en el navegador para trabajar con PDF e imágenes. Todo el procesamiento ocurre localmente en tu navegador; tus archivos nunca se suben a nuestros servidores."
        },
        {
          heading: "Exención de garantías",
          text: "Las herramientas se ofrecen «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluidas la exactitud, la fiabilidad, la comerciabilidad o la idoneidad para un fin concreto. No garantizamos que estén libres de errores, sean ininterrumpidas o compatibles con todos los archivos, navegadores o dispositivos."
        },
        {
          heading: "Limitación de responsabilidad",
          text: "En la máxima medida permitida por la ley, TAMPDF y sus propietarios no son responsables de daños indirectos, incidentales, especiales o consecuentes —incluida la pérdida de datos, la corrupción de archivos o la interrupción de la actividad— derivados del uso o la imposibilidad de usar las herramientas."
        },
        {
          heading: "Tus archivos",
          text: "Eres responsable de conservar copias de seguridad de tus originales y de revisar cualquier resultado antes de confiar en él. Como el procesamiento ocurre en tu navegador, no podemos acceder a tus archivos ni recuperarlos."
        },
        {
          heading: "Uso aceptable",
          text: "Usa TAMPDF solo con fines lícitos y solo con archivos que tengas derecho a procesar. No uses las herramientas para infringir derechos de terceros, para quitar marcas de agua o protecciones de contenido que no puedas modificar, ni para perturbar el sitio web."
        },
        {
          heading: "Servicios de terceros y publicidad",
          text: "El sitio puede mostrar publicidad y enlazar o integrar servicios de terceros (como Google AdSense, Google Drive y Dropbox). No los controlamos; tu uso se rige por sus propios términos y políticas de privacidad."
        },
        {
          heading: "Propiedad intelectual",
          text: "El nombre, el logotipo, el diseño, los textos y el código de TAMPDF pertenecen a TAMPDF o a sus licenciantes. Tus archivos siguen siendo tuyos; no reclamamos derechos sobre ellos."
        },
        {
          heading: "Cambios en estos términos",
          text: "Podemos actualizar estos términos de vez en cuando. Seguir usando TAMPDF tras la publicación de cambios supone aceptarlos."
        }
      ]
    },
    adsDisclosure: {
      heading: "Publicidad",
      paragraphs: [
        "Usamos Google AdSense para mostrar anuncios. Google y sus socios son proveedores externos que usan cookies, balizas web y tecnologías similares para mostrar anuncios basados en tus visitas anteriores a este y otros sitios web.",
        "Puedes rechazar la publicidad personalizada en la Configuración de anuncios de Google (https://adssettings.google.com) o en https://www.aboutads.info/choices, y consultar cómo usa Google los datos de los sitios que usan sus servicios en https://policies.google.com/technologies/partner-sites.",
        "En el Espacio Económico Europeo, el Reino Unido y Suiza, los anuncios solo se personalizan con tu consentimiento, que puedes dar o retirar mediante el mensaje de consentimiento que se muestra en el sitio."
      ]
    }
  }
};
