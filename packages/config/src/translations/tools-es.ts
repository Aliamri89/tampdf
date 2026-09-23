import type { ToolTranslationOverride } from "./tools-ar";

export const toolsEs: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Comprimir PDF",
    actionLabel: "Comprimir PDF",
    shortDescription: "Reduce el tamaño de un PDF para compartirlo y subirlo más fácilmente, directamente en tu navegador.",
    longDescription: [
      "Comprimir PDF reduce el tamaño del archivo recodificando las imágenes incrustadas y eliminando datos innecesarios, para que tu documento sea más fácil de enviar por correo, subir o almacenar.",
      "Elige un nivel de compresión para equilibrar tamaño y calidad visual, y compara el tamaño antes/después antes de descargar.",
    ],
    faq: [
      { question: "¿Cuánto se reducirá mi PDF?", answer: "Depende del contenido. Los PDF con imágenes grandes suelen reducirse más, a veces entre un 50 y un 90%. Los PDF con mucho texto se comprimen menos porque hay menos que optimizar." },
      { question: "¿La compresión hará que mi PDF se vea borroso?", answer: "Con la configuración predeterminada, la pérdida de calidad es mínima. Si eliges el nivel de compresión más fuerte, las imágenes se reducen más, lo que puede afectar la nitidez al hacer zoom." },
      { question: "¿La compresión se hace en los servidores de TAMPDF?", answer: "No. Comprimir PDF funciona localmente en tu navegador, así que tu archivo nunca se sube a ningún lugar." },
      { question: "¿Puedo comprimir un PDF protegido con contraseña?", answer: "Actualmente no. Primero quita la protección con otra herramienta y luego comprime el archivo." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF a JPG",
    actionLabel: "Convertir a JPG",
    shortDescription: "Convierte cada página de un PDF en una imagen JPG de alta calidad.",
    longDescription: [
      "PDF a JPG convierte cada página de tu PDF en una imagen JPG independiente, lista para compartir, editar o insertar en una presentación. Un PDF de una sola página se descarga como un JPG; los PDF de varias páginas se agrupan en un .zip.",
      "La conversión se realiza directamente en tu navegador con PDF.js, así que tu documento nunca se sube a un servidor.",
    ],
    faq: [
      { question: "¿Qué pasa si mi PDF tiene varias páginas?", answer: "Cada página se convierte en su propia imagen JPG. Si hay más de una, se agrupan en un único archivo .zip para descargar." },
      { question: "¿Qué nitidez tendrán las imágenes?", answer: "Las páginas se renderizan a una resolución alta adecuada para pantallas y la mayoría de necesidades de impresión. Elige el nivel de calidad para equilibrar nitidez y tamaño." },
      { question: "¿Se sube mi PDF a algún lugar?", answer: "No. PDF a JPG procesa cada página localmente en tu navegador, así que tu archivo nunca sale de tu dispositivo." },
      { question: "¿Puedo convertir solo una página en vez de todo el documento?", answer: "Actualmente se convierten todas las páginas. Usa Combinar PDF o un lector de PDF para aislar una sola página antes si solo necesitas una imagen." },
    ],
  },
  "merge-pdf": {
    name: "Combinar PDF",
    actionLabel: "Combinar PDFs",
    shortDescription: "Combina varios archivos PDF en un solo documento, en el orden que elijas.",
    longDescription: [
      "Combinar PDF te permite unir dos o más archivos PDF en un solo documento sin instalar nada. Añade tus archivos, arrástralos para reordenarlos y descarga un único PDF combinado.",
      "Todo funciona localmente en tu navegador, así que tus archivos nunca se suben a un servidor. Eso significa que funciona incluso con contratos, informes o documentos personales sensibles.",
    ],
    faq: [
      { question: "¿Hay un límite de cuántos PDF puedo combinar?", answer: "No hay un límite fijo. Como la combinación ocurre en tu navegador, el límite práctico es la memoria de tu dispositivo, no una cuota de servidor." },
      { question: "¿Puedo cambiar el orden de las páginas antes de combinar?", answer: "Sí. Después de añadir tus archivos, arrástralos hasta el orden que quieras que siga el documento final antes de combinarlos." },
      { question: "¿Se suben mis archivos a los servidores de TAMPDF?", answer: "No. Combinar PDF procesa los archivos completamente en tu navegador con tecnología del lado del cliente, así que tus documentos nunca salen de tu dispositivo." },
      { question: "¿Combinar afectará la calidad de mis PDF?", answer: "No. Las páginas se combinan tal cual, sin recompresión, así que el texto, las imágenes y el formato se mantienen exactamente igual que en los originales." },
    ],
  },
  "rotate-pdf": {
    name: "Girar PDF",
    actionLabel: "Girar PDF",
    shortDescription: "Gira páginas individuales o un PDF completo 90°, 180° o 270°, directamente en tu navegador.",
    longDescription: [
      "Girar PDF te permite corregir páginas de lado o al revés en segundos. Sube uno o más PDF, ve una miniatura de cada página y gira todo el documento a la vez o solo las páginas que lo necesiten.",
      "Todo funciona localmente en tu navegador, así que tus archivos nunca se suben a un servidor. Sube varios PDF a la vez y cada uno se gira y devuelve de forma independiente.",
    ],
    faq: [
      { question: "¿Puedo girar solo una página en vez de todo el documento?", answer: "Sí. Haz clic en el botón de girar de una página para girar solo esa página, o usa los botones de girar todo para aplicar la misma rotación a todas las páginas a la vez." },
      { question: "¿Qué ángulos de rotación se admiten?", answer: "Puedes girar las páginas 90°, 180° o 270° en cualquier dirección." },
      { question: "¿Puedo girar más de un PDF a la vez?", answer: "Sí. Sube varios PDF y cada uno se gira de forma independiente. Si subes más de un archivo, los PDF girados se agrupan en un .zip para descargar." },
      { question: "¿Se sube mi PDF a algún lugar?", answer: "No. Girar PDF procesa todo localmente en tu navegador, así que tus archivos nunca salen de tu dispositivo." },
    ],
  },
  "compress-image": {
    name: "Comprimir imagen",
    actionLabel: "Comprimir imágenes",
    shortDescription: "Reduce el tamaño de archivos JPG, PNG y WebP manteniendo la calidad visual.",
    longDescription: [
      "Comprimir imagen reduce el tamaño de tus fotos JPG, PNG o WebP, haciéndolas más rápidas de subir, enviar por correo y cargar en sitios web.",
      "La compresión ocurre completamente en tu navegador usando la API canvas, así que tus fotos nunca salen de tu dispositivo, y puedes comprimir varias imágenes a la vez.",
    ],
    faq: [
      { question: "¿Qué formatos de imagen se admiten?", answer: "JPG, PNG y WebP son compatibles tanto de entrada como de salida." },
      { question: "¿Puedo comprimir varias imágenes a la vez?", answer: "Sí. Añade tantas imágenes como quieras y cada una se comprimirá y se agrupará en un único .zip para descargar, o descárgalas individualmente." },
      { question: "¿Cuánto puedo reducir una imagen sin perder calidad?", answer: "La configuración de calidad predeterminada suele reducir el tamaño entre un 60 y un 80% sin diferencia visible. Puedes ajustar el control deslizante de calidad para otro equilibrio." },
      { question: "¿Se suben mis fotos a un servidor?", answer: "No. La compresión funciona localmente en tu navegador con la API canvas, así que tus imágenes nunca se envían a ningún lugar." },
    ],
  },
  "image-to-pdf": {
    name: "JPG a PDF",
    actionLabel: "Convertir a PDF",
    shortDescription: "Convierte una o más imágenes JPG en un solo documento PDF.",
    longDescription: [
      "JPG a PDF combina tus fotos JPG en un único archivo PDF, una imagen por página, en el orden que elijas.",
      "Perfecto para convertir documentos escaneados, recibos o fotos en un PDF fácil de compartir. Todo se procesa localmente en tu navegador para una privacidad total.",
    ],
    faq: [
      { question: "¿Puedo combinar varias imágenes en un PDF?", answer: "Sí. Añade varias imágenes y cada una se convertirá en una página del PDF resultante, en el orden en que las organices." },
      { question: "¿Qué tamaño de página se usa para el PDF?", answer: "Cada página se ajusta a las dimensiones y orientación de su imagen de origen, así que nada se recorta ni se estira." },
      { question: "¿Se suben mis imágenes a algún lugar?", answer: "No. La conversión ocurre completamente en tu navegador, así que tus imágenes se quedan en tu dispositivo." },
      { question: "¿También admite imágenes PNG?", answer: "Sí, las imágenes PNG son compatibles junto con JPG. Las fotos HEIC de un iPhone aún no son compatibles; conviértelas a JPG primero desde las opciones de compartir de tu teléfono." },
    ],
  },
  "rotate-images": {
    name: "Girar imágenes",
    actionLabel: "Girar imágenes",
    shortDescription: "Gira una o más imágenes JPG, PNG o WebP 90°, 180° o 270°.",
    longDescription: [
      "Girar imágenes corrige fotos de lado o al revés en segundos. Sube una o más imágenes, gíralas individualmente o todas a la vez, y descarga el resultado.",
      "Todo funciona localmente en tu navegador, así que tus fotos nunca se suben a un servidor. Sube varias imágenes a la vez y cada una se gira y devuelve de forma independiente.",
    ],
    faq: [
      { question: "¿Qué formatos de imagen se admiten?", answer: "Se admiten imágenes JPG, PNG y WebP. Al girar se conserva el formato original." },
      { question: "¿Puedo girar solo una imagen en vez de todas?", answer: "Sí. Haz clic en el botón de girar de una imagen para girar solo esa, o usa los botones de girar todo para aplicar la misma rotación a todas a la vez." },
      { question: "¿Qué ángulos de rotación se admiten?", answer: "Puedes girar las imágenes 90°, 180° o 270°." },
      { question: "¿Se suben mis fotos a algún lugar?", answer: "No. Girar imágenes procesa todo localmente en tu navegador, así que tus fotos nunca salen de tu dispositivo." },
    ],
  },
  "split-pdf": {
    name: "Dividir PDF",
    actionLabel: "Dividir PDF",
    shortDescription: "Divide un PDF en varios archivos más pequeños por rangos de páginas o en partes de tamaño fijo.",
    longDescription: [
      "Dividir PDF separa un documento grande en varios archivos PDF sin cambiar las páginas en sí. Introduce rangos como 1-3, 5, 8-10 para extraer exactamente las secciones que necesitas, o divide todo el documento en partes iguales de un número fijo de páginas.",
      "Todo funciona en tu navegador — el PDF nunca se sube a un servidor. Un único resultado se descarga como un PDF; varias partes se agrupan en un .zip.",
    ],
    faq: [
      { question: "¿Cómo elijo qué páginas van en cada archivo?", answer: "Usa el campo de rangos: algo como «1-3, 5, 8-10» genera tres PDF — páginas 1 a 3, la página 5 sola, y páginas 8 a 10. O cambia a «cada N páginas» para cortar el documento en partes iguales." },
      { question: "¿Los archivos divididos conservan su calidad original?", answer: "Sí. Las páginas se copian tal cual, sin recompresión, así que el texto, las imágenes, las fuentes y el diseño son idénticos al original." },
      { question: "¿Se sube mi PDF a algún lugar?", answer: "No. La división ocurre completamente en tu navegador, así que tu documento nunca sale de tu dispositivo." },
      { question: "¿Qué pasa con los campos de formulario o firmas digitales?", answer: "El contenido de la página y los widgets de formulario se conservan visualmente, pero el comportamiento interactivo y las firmas no se trasladan a los archivos divididos. Aplánalos o vuelve a firmarlos después si los necesitas." },
    ],
  },
  "delete-pdf-pages": {
    name: "Eliminar páginas de PDF",
    actionLabel: "Eliminar páginas",
    shortDescription: "Quita las páginas no deseadas de un PDF y descarga el documento recortado.",
    longDescription: [
      "Eliminar páginas de PDF te permite descartar páginas que no necesitas — escaneos en blanco, portadas, páginas duplicadas — y mantener el resto en su orden original. Ve una miniatura de cada página, toca las que quieras quitar y descarga el resultado.",
      "Todo el proceso funciona localmente en tu navegador, así que tu PDF nunca se sube. Las páginas restantes se copian sin recompresión, así que nada pierde calidad.",
    ],
    faq: [
      { question: "¿Puedo eliminar más de una página a la vez?", answer: "Sí. Selecciona tantas páginas como quieras en la cuadrícula de miniaturas y elimínalas todas en un solo paso." },
      { question: "¿Puedo quitar todas las páginas?", answer: "No — al menos una página debe quedar, así que el botón se desactiva si las has seleccionado todas." },
      { question: "¿Eliminar páginas reduce el tamaño del archivo?", answer: "Normalmente un poco, ya que se descarta el contenido de las páginas eliminadas. Los recursos compartidos como las fuentes pueden permanecer, así que usa Comprimir PDF después si el tamaño importa." },
      { question: "¿Se suben mis archivos a un servidor?", answer: "No. Todo ocurre en tu navegador y tu PDF nunca sale de tu dispositivo." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Reordenar páginas de PDF",
    actionLabel: "Reordenar páginas",
    shortDescription: "Arrastra las páginas de un PDF a un nuevo orden y guarda el documento reorganizado.",
    longDescription: [
      "Reordenar páginas de PDF te muestra una miniatura de cada página que puedes arrastrar al orden que quieras — mover una página al principio, intercambiar dos secciones, o invertir todo el documento. También hay botones de mover para cambios precisos, página por página.",
      "Reorganizar ocurre completamente en tu navegador, así que tu PDF nunca se sube. Las páginas se copian tal cual, así que la calidad y el formato quedan intactos.",
    ],
    faq: [
      { question: "¿Cómo muevo una página?", answer: "Arrastra su miniatura a la nueva posición, o usa los botones de arriba/abajo en cada página para pasos individuales. El nuevo orden se guarda al hacer clic en el botón." },
      { question: "¿Puedo invertir todo el documento?", answer: "Sí — arrastra las páginas en orden inverso, o usa los botones de mover. Se puede reorganizar cualquier cantidad de páginas de una vez." },
      { question: "¿Reordenar cambiará el contenido de las páginas?", answer: "No. Solo cambia el orden de las páginas; el texto, las imágenes y el diseño de cada página siguen exactamente igual." },
      { question: "¿Se sube el PDF a algún lugar?", answer: "No. Reordenar funciona localmente en tu navegador y tu archivo nunca sale de tu dispositivo." },
    ],
  },
  "crop-pdf": {
    name: "Recortar PDF",
    actionLabel: "Recortar PDF",
    shortDescription: "Recorta los márgenes de cada página del PDF definiendo la cantidad superior, inferior y lateral.",
    longDescription: [
      "Recortar PDF elimina el espacio en blanco no deseado o los bordes de escaneo de los bordes de tus páginas. Define cuánto recortar arriba, abajo, izquierda y derecha como porcentaje, observa la vista previa en vivo y aplícalo a todas las páginas a la vez.",
      "El recorte ajusta el área visible de la página sin eliminar ningún contenido — las partes recortadas simplemente se ocultan. Todo funciona en tu navegador, así que tu PDF nunca se sube.",
    ],
    faq: [
      { question: "¿El recorte elimina el contenido fuera del área recortada?", answer: "No. Recortar PDF cambia el cuadro de recorte de la página, lo que oculta el área exterior en los visores y al imprimir. El contenido subyacente sigue en el archivo y se puede restaurar." },
      { question: "¿Se aplica el mismo recorte a todas las páginas?", answer: "Sí. Los márgenes que definas se aplican a todas las páginas. Las páginas de diferentes tamaños se recortan cada una por el mismo porcentaje." },
      { question: "¿Puedo recortar un documento escaneado para quitar el borde negro?", answer: "Sí — es un uso común. Aumenta los márgenes hasta que la vista previa muestre solo el contenido que quieres conservar." },
      { question: "¿Se sube mi archivo a un servidor?", answer: "No. El recorte ocurre completamente en tu navegador y tu PDF se queda en tu dispositivo." },
    ],
  },
  "resize-pdf": {
    name: "Cambiar tamaño de PDF",
    actionLabel: "Cambiar tamaño de PDF",
    shortDescription: "Cambia el tamaño de página del PDF a A4, Carta o una escala personalizada, con el contenido ajustado y centrado.",
    longDescription: [
      "Cambiar tamaño de PDF modifica el tamaño físico de página de tu documento. Elige un tamaño estándar como A4 o Carta y cada página se escala para ajustarse y se centra, o usa un porcentaje para reducir o ampliar las páginas proporcionalmente.",
      "El cambio de tamaño funciona en tu navegador sin subir nada. El contenido se escala junto con la página, así que nada se corta y el diseño se mantiene proporcional.",
    ],
    faq: [
      { question: "¿Qué tamaños de página puedo elegir?", answer: "A4 y Carta en vertical u horizontal, más A3 y A5. También puedes introducir un porcentaje de escala para cambiar el tamaño sin alterar la proporción." },
      { question: "¿Mi contenido se estirará?", answer: "No. El contenido se escala uniformemente para ajustarse al nuevo tamaño y se centra en la página, así que las proporciones se conservan y nada se recorta." },
      { question: "¿Puedo reducir el tamaño de archivo de un PDF con esto?", answer: "No directamente — esto cambia las dimensiones de página, no el peso del archivo. Usa Comprimir PDF para reducir el tamaño del archivo." },
      { question: "¿Se suben mis archivos a algún lugar?", answer: "No. El cambio de tamaño se hace localmente en tu navegador y tu PDF nunca sale de tu dispositivo." },
    ],
  },
  "png-to-pdf": {
    name: "PNG a PDF",
    actionLabel: "Convertir a PDF",
    shortDescription: "Convierte una o más imágenes PNG en un solo documento PDF, una imagen por página.",
    longDescription: [
      "PNG a PDF combina tus imágenes PNG en un único archivo PDF, con cada imagen en su propia página a su resolución original. Añade varias imágenes, ordénalas y descarga un solo documento.",
      "Ideal para convertir capturas de pantalla, diagramas o gráficos exportados en un PDF fácil de compartir. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben. Las áreas transparentes se colocan sobre un fondo blanco.",
    ],
    faq: [
      { question: "¿Puedo combinar varios PNG en un PDF?", answer: "Sí. Añade tantas imágenes PNG como quieras y cada una se convertirá en una página del PDF resultante, en el orden en que las organices." },
      { question: "¿Qué tamaño de página se usa?", answer: "Cada página coincide con las dimensiones en píxeles de su imagen de origen, así que las imágenes no se recortan ni se estiran." },
      { question: "¿Qué pasa con las partes transparentes de la imagen?", answer: "La transparencia se aplana sobre un fondo blanco para que la página se vea igual en todos los visores de PDF." },
      { question: "¿Se suben mis imágenes a un servidor?", answer: "No. La conversión ocurre completamente en tu navegador y tus imágenes se quedan en tu dispositivo." },
    ],
  },
  "extract-pdf-pages": {
    name: "Extraer páginas de PDF",
    actionLabel: "Extraer páginas",
    shortDescription: "Extrae las páginas que elijas de un PDF a un archivo nuevo, o guarda cada página como su propio PDF.",
    longDescription: [
      "Extraer páginas de PDF te permite elegir exactamente las páginas que necesitas de un documento y guardarlas como un nuevo PDF. Ve una miniatura de cada página, toca las que quieras conservar y descárgalas juntas — o como PDF de una página separados en un ZIP.",
      "Tu archivo original permanece sin cambios, y las páginas se copian tal cual, así que el texto, las imágenes y el formato quedan intactos. Todo ocurre en tu navegador, así que el PDF nunca se sube.",
    ],
    faq: [
      { question: "¿Cuál es la diferencia entre extraer y dividir?", answer: "Extraer guarda solo las páginas que selecciones en un nuevo PDF. Dividir separa todo el documento en varias partes por rangos de páginas o tamaños fijos." },
      { question: "¿Puedo guardar cada página extraída como un archivo separado?", answer: "Sí. Elige «PDF separados» y cada página seleccionada se convierte en su propio PDF, agrupados en una única descarga .zip." },
      { question: "¿Las páginas extraídas perderán calidad?", answer: "No. Las páginas se copian sin recompresión, así que se ven exactamente igual que el original. Los campos de formulario interactivos pueden convertirse en contenido de página normal." },
      { question: "¿Se sube mi PDF a un servidor?", answer: "No. Las páginas se extraen localmente en tu navegador y tu archivo nunca sale de tu dispositivo." },
    ],
  },
  "add-page-numbers": {
    name: "Añadir números de página",
    actionLabel: "Añadir números de página",
    shortDescription: "Numera las páginas de un PDF, eligiendo posición, formato y número inicial.",
    longDescription: [
      "Añadir números de página estampa un número en cada página de tu PDF. Elige entre seis posiciones, un estilo como «1», «1 / 10» o «Página 1 de 10», define el número inicial y omite la portada si quieres.",
      "Los números se dibujan como texto real en una fuente estándar, así que se imprimen con nitidez y se mantienen verticales incluso en páginas giradas. Todo el proceso ocurre en tu navegador — tu documento nunca se sube.",
    ],
    faq: [
      { question: "¿Puedo empezar a numerar desde un número distinto de 1?", answer: "Sí. Define cualquier número inicial — útil cuando tu PDF es un capítulo o anexo de un documento más grande." },
      { question: "¿Puedo dejar la portada sin numerar?", answer: "Sí. Activa «No numerar la primera página» y la numeración empieza en la segunda página." },
      { question: "¿Qué dígitos se usan?", answer: "Dígitos estándar (1, 2, 3), que se muestran correctamente en cualquier lector de PDF. Las etiquetas como «Página 1 de 10» se escriben en español." },
      { question: "¿Se sube mi archivo?", answer: "No. Los números de página se añaden localmente en tu navegador y tu PDF se queda en tu dispositivo." },
    ],
  },
  "add-watermark": {
    name: "Añadir marca de agua",
    actionLabel: "Añadir marca de agua",
    shortDescription: "Estampa texto como CONFIDENCIAL o BORRADOR en cada página de un PDF.",
    longDescription: [
      "Añadir marca de agua coloca tu texto en cada página de un PDF — una vez en el centro o repetido por toda la página. Elige el color, la opacidad, el tamaño y el ángulo, y observa una vista previa en vivo en tu primera página antes de aplicarlo.",
      "El español y otros idiomas son totalmente compatibles. La marca de agua se guarda como un objeto de marca de agua estándar, y todo ocurre en tu navegador, así que tu documento nunca se sube.",
    ],
    faq: [
      { question: "¿Puedo escribir la marca de agua en español?", answer: "Sí. El texto se renderiza con las fuentes de tu navegador, así que el español y otros idiomas se representan correctamente." },
      { question: "¿Se puede repetir la marca de agua por la página?", answer: "Sí. Elige el diseño «Repetido» para mosaico del texto en cada página, o «Una vez, centrado» para un solo sello." },
      { question: "¿Se puede quitar la marca de agua más tarde?", answer: "Se guarda como un objeto de marca de agua estándar, así que herramientas que entienden marcas de agua — incluida Quitar marca de agua de TAMPDF — pueden eliminarla. No es una medida de seguridad." },
      { question: "¿Se sube mi PDF a algún lugar?", answer: "No. La marca de agua se aplica localmente en tu navegador." },
    ],
  },
  "remove-watermark": {
    name: "Quitar marca de agua",
    actionLabel: "Quitar marca de agua",
    shortDescription: "Elimina las marcas de agua añadidas como objetos de marca de agua en un PDF.",
    longDescription: [
      "Quitar marca de agua encuentra y elimina marcas de agua que se añadieron como objetos de marca de agua — el tipo que crean Adobe Acrobat, TAMPDF y la mayoría de editores de PDF — junto con anotaciones de marca de agua y capas llamadas «Watermark». El resto de cada página queda exactamente igual.",
      "Las marcas de agua que forman parte de una imagen escaneada o que se fusionaron con el texto normal de la página no tienen marcador que las distinga del contenido real, así que no se pueden eliminar automáticamente. Por favor, elimina marcas de agua solo de documentos que tengas derecho a editar. El proceso ocurre en tu navegador, así que tu archivo nunca se sube.",
    ],
    faq: [
      { question: "¿Qué marcas de agua se pueden eliminar?", answer: "Marcas de agua añadidas como objetos de marca de agua, anotaciones de marca de agua, o capas llamadas «Watermark» — incluidas las creadas por Adobe Acrobat y la herramienta Añadir marca de agua de TAMPDF." },
      { question: "¿Por qué no se eliminó la marca de agua de mi archivo?", answer: "Si una marca de agua forma parte de la imagen escaneada de una página o se aplanó en el texto de la página, no se puede separar del contenido real sin dañar la página." },
      { question: "¿Eliminar una marca de agua afecta al resto de la página?", answer: "No. Solo se elimina el contenido marcado como marca de agua; el texto, las imágenes y el diseño quedan intactos." },
      { question: "¿Se sube mi archivo?", answer: "No. El PDF se procesa localmente en tu navegador." },
    ],
  },
  "pdf-to-images": {
    name: "PDF a imágenes",
    actionLabel: "Convertir a imágenes",
    shortDescription: "Convierte cada página de un PDF en imágenes PNG, JPG o WEBP, descargadas como ZIP.",
    longDescription: [
      "PDF a imágenes convierte cada página de tu PDF en una imagen independiente en el formato que elijas: PNG para el texto más nítido, JPG para los archivos más pequeños, o WEBP para imágenes modernas y compactas. Elige una resolución y cada página se exporta y agrupa en un único .zip.",
      "La conversión se realiza directamente en tu navegador con PDF.js, así que tu documento nunca se sube a un servidor.",
    ],
    faq: [
      { question: "¿Qué formato de imagen debo elegir?", answer: "PNG mantiene el texto y los gráficos perfectamente nítidos. JPG produce archivos más pequeños y es ideal para fotos. WEBP ofrece un buen equilibrio para uso en la web." },
      { question: "¿Qué resolución tienen las imágenes?", answer: "Estándar renderiza a 108 dpi, Alta a 144 dpi, y Máxima a 216 dpi — suficiente para imprimir la mayoría de documentos." },
      { question: "¿Cómo obtengo todas las páginas a la vez?", answer: "Cada página se convierte y se empaqueta en un archivo .zip. Un PDF de una sola página se descarga como una sola imagen." },
      { question: "¿Se sube mi PDF?", answer: "No. Las páginas se renderizan localmente en tu navegador." },
    ],
  },
  "images-to-pdf": {
    name: "Imágenes a PDF",
    actionLabel: "Crear PDF",
    shortDescription: "Combina imágenes JPG, PNG y WEBP en un solo PDF, en el orden que elijas.",
    longDescription: [
      "Imágenes a PDF convierte un conjunto de fotos, escaneos o capturas de pantalla en un único documento PDF. Añade imágenes JPG, PNG o WEBP, arrastra las miniaturas al orden que quieras y elige una página A4 o Carta (con orientación automática) o páginas que coincidan con cada imagen.",
      "Añade un margen para un aspecto impreso limpio. Las áreas transparentes se colocan sobre blanco, y toda la conversión ocurre en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Puedo cambiar el orden de las imágenes?", answer: "Sí. Arrastra las miniaturas o usa los botones de flecha para definir el orden de las páginas antes de crear el PDF." },
      { question: "¿Qué formatos de imagen se admiten?", answer: "JPG, PNG y WEBP. Puedes mezclar formatos en el mismo PDF." },
      { question: "¿Qué tamaño de página usará el PDF?", answer: "Elige A4 o Carta — cada imagen se ajusta a la página y se gira a horizontal cuando es necesario — o «Ajustar a la imagen» para que cada página tenga exactamente el tamaño de su imagen." },
      { question: "¿Se suben mis imágenes?", answer: "No. El PDF se crea localmente en tu navegador." },
    ],
  },
  "flip-pdf": {
    name: "Voltear PDF",
    actionLabel: "Voltear PDF",
    shortDescription: "Refleja las páginas de un PDF horizontal o verticalmente.",
    longDescription: [
      "Voltear PDF refleja cada página de tu documento — de izquierda a derecha o de arriba a abajo. Es útil para imprimir transferencias de planchado, corregir escaneos hechos del lado equivocado, o preparar diseños reflejados.",
      "Previsualiza el resultado en tu primera página antes de aplicarlo. El volteo también respeta las páginas giradas, y todo ocurre en tu navegador, así que tu archivo nunca se sube.",
    ],
    faq: [
      { question: "¿Cuál es la diferencia entre voltear y girar?", answer: "Girar rota una página en pasos de 90°. Voltear crea una imagen espejo, así que el texto se lee al revés — que es lo que necesitas para transferencias y algunos trabajos de impresión." },
      { question: "¿Puedo voltear solo una página?", answer: "El volteo se aplica a todas las páginas. Para voltear una sola página, extráela primero con Extraer páginas de PDF." },
      { question: "¿Voltear reduce la calidad?", answer: "No. Las páginas se transforman, no se vuelven a renderizar, así que el texto y los gráficos se mantienen tan nítidos como el original." },
      { question: "¿Se sube mi PDF?", answer: "No. El volteo ocurre localmente en tu navegador." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Editar metadatos de PDF",
    actionLabel: "Editar metadatos",
    shortDescription: "Cambia el título, autor, asunto y palabras clave de un PDF.",
    longDescription: [
      "Editar metadatos de PDF te permite ver y cambiar las propiedades del documento almacenadas dentro de un PDF — título, autor, asunto, palabras clave, creador y productor. Esto es lo que los lectores de PDF, buscadores y gestores de archivos muestran sobre tu documento.",
      "Deja un campo vacío para eliminarlo. El contenido de la página no se toca, y toda la edición ocurre en tu navegador, así que tu archivo nunca se sube.",
    ],
    faq: [
      { question: "¿Por qué editar los metadatos de un PDF?", answer: "Un título y autor claros hacen que los documentos sean más fáciles de encontrar y se vean más profesionales al compartirlos, y los buscadores pueden usarlos al indexar PDF." },
      { question: "¿Editar los metadatos cambiará el contenido del documento?", answer: "No. Solo cambian las propiedades del documento; las páginas, el texto y las imágenes quedan exactamente igual." },
      { question: "¿Cómo elimino una propiedad?", answer: "Vacía el campo y guarda. Los campos vacíos se eliminan del archivo." },
      { question: "¿Se sube mi PDF?", answer: "No. Las propiedades se editan localmente en tu navegador." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Quitar metadatos de PDF",
    actionLabel: "Quitar metadatos",
    shortDescription: "Elimina autor, título, software y otras propiedades ocultas de un PDF antes de compartirlo.",
    longDescription: [
      "Quitar metadatos de PDF borra las propiedades del documento y los datos ocultos que lleva un PDF — autor, título, asunto, palabras clave, el software usado para crearlo, fechas de creación y paquetes de metadatos XMP incrustados.",
      "Es un paso rápido de privacidad antes de compartir un archivo públicamente. El contenido de la página no se toca, y la limpieza ocurre en tu navegador, así que tu archivo nunca se sube.",
    ],
    faq: [
      { question: "¿Qué información se elimina?", answer: "Título, autor, asunto, palabras clave, software creador y productor, fechas de creación y modificación, metadatos XMP incrustados y datos privados de la aplicación." },
      { question: "¿Cambia el aspecto del documento?", answer: "No. Solo se eliminan propiedades ocultas; todas las páginas se ven exactamente igual." },
      { question: "¿Esto elimina información personal impresa en las páginas?", answer: "No. Solo elimina metadatos. Los nombres o detalles impresos en las páginas siguen siendo visibles." },
      { question: "¿Se sube mi PDF?", answer: "No. El archivo se limpia localmente en tu navegador." },
    ],
  },
  "pdf-info": {
    name: "Información de PDF",
    actionLabel: "Revisar PDF",
    shortDescription: "Consulta de un vistazo el número de páginas, tamaños, versión y propiedades de un PDF.",
    longDescription: [
      "Información de PDF lee un PDF y muestra qué contiene: el número de páginas, el tamaño de cada página en milímetros con nombres de papel como A4 o Carta, la versión del PDF, si está cifrado o contiene un formulario rellenable, y su título, autor, software y fechas.",
      "Es útil antes de imprimir, enviar o convertir un archivo. El documento solo se lee — nunca se cambia — y todo ocurre en tu navegador, así que nunca se sube.",
    ],
    faq: [
      { question: "¿Qué detalles muestra Información de PDF?", answer: "Número de páginas, tamaños de página con nombres de papel, versión de PDF, tamaño de archivo, cifrado, formularios rellenables, vista web rápida y propiedades del documento como título, autor y fecha de creación." },
      { question: "¿Información de PDF cambia mi archivo?", answer: "No. El PDF solo se lee; nada se modifica ni se guarda." },
      { question: "¿Puedo comprobar un PDF protegido con contraseña?", answer: "Los archivos que necesitan una contraseña para abrirse no se pueden leer sin ella. Los archivos con solo restricciones de edición se muestran como cifrados." },
      { question: "¿Se sube mi PDF?", answer: "No. Se lee localmente en tu navegador." },
    ],
  },
  "resize-image": {
    name: "Cambiar tamaño de imagen",
    actionLabel: "Cambiar tamaño de imágenes",
    shortDescription: "Cambia el ancho y alto de imágenes JPG, PNG y WEBP, por porcentaje o píxeles exactos.",
    longDescription: [
      "Cambiar tamaño de imagen modifica las dimensiones de tus fotos y gráficos. Escala por porcentaje, o escribe un ancho y alto exactos con la proporción bloqueada para que nada se vea estirado. Cambia el tamaño de varias imágenes a la vez y descárgalas juntas en un .zip.",
      "Las imágenes mantienen su formato original, y un suavizado de alta calidad mantiene nítidas las imágenes reducidas. Todo funciona en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Cambiar el tamaño hará que mi imagen se vea borrosa?", answer: "Reducir una imagen la mantiene nítida. Ampliarla más allá de su tamaño original no puede añadir detalle, así que los aumentos grandes pueden verse suaves." },
      { question: "¿Puedo cambiar el tamaño de varias imágenes a la vez?", answer: "Sí. Añade hasta 20 imágenes; con la proporción bloqueada, cada una mantiene sus propias proporciones al ancho que definas." },
      { question: "¿Qué formato tendrá la imagen redimensionada?", answer: "El mismo que el original — JPG sigue siendo JPG, PNG sigue siendo PNG, y WEBP sigue siendo WEBP donde tu navegador lo admite." },
      { question: "¿Se suben mis imágenes?", answer: "No. El cambio de tamaño ocurre localmente en tu navegador." },
    ],
  },
  "crop-image": {
    name: "Recortar imagen",
    actionLabel: "Recortar imagen",
    shortDescription: "Recorta una imagen al área que quieras con un marco de recorte ajustable.",
    longDescription: [
      "Recortar imagen elimina los bordes no deseados de una foto o captura de pantalla. Arrastra el marco de recorte o sus esquinas sobre la vista previa — o ajusta cada borde con un control deslizante — y ve el tamaño exacto del resultado en píxeles.",
      "La imagen recortada mantiene su formato y calidad originales, y todo el proceso funciona en tu navegador, así que tu imagen nunca se sube.",
    ],
    faq: [
      { question: "¿Puedo recortar a dimensiones exactas?", answer: "Ajusta cada borde con los controles deslizantes y observa cómo se actualiza el tamaño del resultado en píxeles a medida que avanzas." },
      { question: "¿Recortar reduce la calidad de la imagen?", answer: "No. Los píxeles que conservas se copian tal cual; solo se eliminan las partes fuera del marco." },
      { question: "¿Qué formatos puedo recortar?", answer: "JPG, PNG y WEBP. El resultado mantiene el mismo formato que el original." },
      { question: "¿Se sube mi imagen?", answer: "No. El recorte ocurre localmente en tu navegador." },
    ],
  },
  "flip-image": {
    name: "Voltear imagen",
    actionLabel: "Voltear imágenes",
    shortDescription: "Refleja imágenes horizontal o verticalmente, una por una o en lote.",
    longDescription: [
      "Voltear imagen crea una imagen espejo de tus fotos: de izquierda a derecha, o de arriba a abajo. Es útil para corregir selfies tomados con cámara frontal, crear reflejos, o preparar diseños para transferencias de impresión.",
      "Voltea varias imágenes a la vez, previsualiza el resultado al instante y descárgalas en su formato original. Todo funciona en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Cuál es la diferencia entre voltear y girar?", answer: "Girar rota una imagen en pasos de 90°. Voltear la refleja, como mirarse en un espejo." },
      { question: "¿Puedo voltear varias imágenes a la vez?", answer: "Sí. Añade hasta 20 imágenes y todas se voltean de la misma manera, luego se descargan juntas como un .zip." },
      { question: "¿Voltear reduce la calidad?", answer: "Sin pérdida notable — PNG sigue siendo sin pérdida, y JPG y WEBP se guardan con alta calidad." },
      { question: "¿Se suben mis imágenes?", answer: "No. El volteo ocurre localmente en tu navegador." },
    ],
  },
  "png-to-jpg": {
    name: "PNG a JPG",
    actionLabel: "Convertir a JPG",
    shortDescription: "Convierte imágenes PNG a JPG para que sean más pequeñas y compatibles.",
    longDescription: [
      "PNG a JPG convierte tus imágenes PNG en archivos JPG, que suelen ser mucho más pequeños — ideal para fotos, adjuntos de correo y formularios de subida que solo aceptan JPG. Convierte varias imágenes a la vez y ajusta la calidad para equilibrar tamaño y nitidez.",
      "JPG no admite transparencia, así que las áreas transparentes se rellenan de blanco. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Por qué convertir PNG a JPG?", answer: "Los archivos JPG suelen ser mucho más pequeños que los PNG para fotos y se aceptan casi en todas partes, desde correo hasta formularios en línea." },
      { question: "¿Qué pasa con los fondos transparentes?", answer: "JPG no tiene transparencia, así que las áreas transparentes se rellenan de blanco." },
      { question: "¿Puedo convertir muchos PNG a la vez?", answer: "Sí. Añade hasta 30 imágenes; se convierten juntas y se descargan como un .zip." },
      { question: "¿Se suben mis imágenes?", answer: "No. La conversión ocurre localmente en tu navegador." },
    ],
  },
  "jpg-to-png": {
    name: "JPG a PNG",
    actionLabel: "Convertir a PNG",
    shortDescription: "Convierte fotos JPG a imágenes PNG sin pérdida de calidad.",
    longDescription: [
      "JPG a PNG convierte tus imágenes JPG o JPEG al formato PNG. PNG no tiene pérdida, así que la imagen no perderá más calidad cuando la edites y guardes de nuevo — útil para gráficos en los que seguirás trabajando, o para herramientas y plataformas que requieren PNG.",
      "Convierte varias imágenes a la vez y descárgalas juntas. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Convertir JPG a PNG mejorará la calidad?", answer: "No — el detalle ya perdido en el JPG no se puede restaurar. Pero PNG evita cualquier pérdida adicional cuando editas y guardas de nuevo." },
      { question: "¿Por qué el PNG es más grande que el JPG?", answer: "PNG almacena cada píxel sin compresión con pérdida, así que las fotos suelen ser más grandes. Ese es el compromiso por la calidad sin pérdida." },
      { question: "¿Puedo convertir varios JPG a la vez?", answer: "Sí. Añade hasta 30 imágenes y descárgalas como un .zip." },
      { question: "¿Se suben mis imágenes?", answer: "No. La conversión ocurre localmente en tu navegador." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP a JPG",
    actionLabel: "Convertir a JPG",
    shortDescription: "Convierte imágenes WEBP a JPG para que se abran en cualquier app o sitio web.",
    longDescription: [
      "WEBP a JPG convierte imágenes WEBP modernas — comunes en sitios web — a JPG, el formato compatible con prácticamente cualquier app, dispositivo y formulario de subida. Convierte una imagen o muchas a la vez, y ajusta la calidad para equilibrar tamaño y nitidez.",
      "Las áreas transparentes se rellenan de blanco, ya que JPG no admite transparencia. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Por qué convertir WEBP a JPG?", answer: "Algunas apps, editores y formularios de subida antiguos no aceptan WEBP. JPG funciona casi en todas partes." },
      { question: "¿Perderé calidad?", answer: "Con la calidad predeterminada la diferencia es difícil de ver. Aumenta el control deslizante de calidad para el resultado más nítido." },
      { question: "¿Puedo convertir varias imágenes WEBP a la vez?", answer: "Sí. Añade hasta 30 imágenes y descárgalas como un .zip." },
      { question: "¿Se suben mis imágenes?", answer: "No. La conversión ocurre localmente en tu navegador." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG a WEBP",
    actionLabel: "Convertir a WEBP",
    shortDescription: "Convierte fotos JPG a WEBP para imágenes más ligeras y de carga más rápida en la web.",
    longDescription: [
      "JPG a WEBP convierte tus imágenes JPG en WEBP, un formato moderno que suele producir archivos notablemente más pequeños con una calidad visual similar — ideal para acelerar sitios web y ahorrar almacenamiento.",
      "Ajusta la calidad para encontrar el equilibrio adecuado y convierte muchas imágenes a la vez. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben. Crear archivos WEBP requiere una versión reciente de Chrome, Edge o Firefox.",
    ],
    faq: [
      { question: "¿Es WEBP más pequeño que JPG?", answer: "Normalmente sí — WEBP suele ahorrar una cantidad significativa de espacio con calidad similar, lo que ayuda a que las páginas carguen más rápido." },
      { question: "¿Todos los navegadores admiten WEBP?", answer: "Todos los navegadores modernos pueden mostrar WEBP. Crear archivos WEBP aquí requiere una versión reciente de Chrome, Edge o Firefox." },
      { question: "¿Puedo convertir varios JPG a la vez?", answer: "Sí. Añade hasta 30 imágenes y descárgalas como un .zip." },
      { question: "¿Se suben mis imágenes?", answer: "No. La conversión ocurre localmente en tu navegador." },
    ],
  },
  "webp-to-png": {
    name: "WEBP a PNG",
    actionLabel: "Convertir a PNG",
    shortDescription: "Convierte imágenes WEBP a PNG conservando la transparencia.",
    longDescription: [
      "WEBP a PNG convierte imágenes WEBP a PNG, el formato sin pérdida compatible con todos los editores de imagen. La transparencia se conserva, así que los logos, iconos y gráficos recortados mantienen sus fondos transparentes.",
      "Convierte varias imágenes a la vez y descárgalas juntas. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben.",
    ],
    faq: [
      { question: "¿Se conserva la transparencia?", answer: "Sí. PNG admite transparencia, así que las áreas transparentes de tu imagen WEBP se mantienen transparentes." },
      { question: "¿Por qué convertir WEBP a PNG?", answer: "PNG se abre en cualquier editor y herramienta de diseño y no perderá calidad cuando lo edites y guardes de nuevo." },
      { question: "¿Puedo convertir varios archivos WEBP a la vez?", answer: "Sí. Añade hasta 30 imágenes y descárgalas como un .zip." },
      { question: "¿Se suben mis imágenes?", answer: "No. La conversión ocurre localmente en tu navegador." },
    ],
  },
  "png-to-webp": {
    name: "PNG a WEBP",
    actionLabel: "Convertir a WEBP",
    shortDescription: "Convierte imágenes PNG a WEBP para archivos más pequeños que conservan la transparencia.",
    longDescription: [
      "PNG a WEBP convierte tus imágenes PNG a WEBP, lo que suele hacer los archivos mucho más pequeños manteniendo la transparencia — ideal para gráficos de sitios web, iconos y capturas de pantalla.",
      "Elige la calidad, convierte muchas imágenes a la vez y descárgalas juntas. La conversión ocurre completamente en tu navegador, así que tus imágenes nunca se suben. Crear archivos WEBP requiere una versión reciente de Chrome, Edge o Firefox.",
    ],
    faq: [
      { question: "¿WEBP conserva la transparencia?", answer: "Sí. WEBP admite transparencia, así que las áreas transparentes del PNG se mantienen transparentes." },
      { question: "¿Cuánto se reducirán mis imágenes?", answer: "Varía, pero los archivos WEBP suelen ser significativamente más pequeños que la misma imagen guardada como PNG." },
      { question: "¿Puedo convertir varios PNG a la vez?", answer: "Sí. Añade hasta 30 imágenes y descárgalas como un .zip." },
      { question: "¿Se suben mis imágenes?", answer: "No. La conversión ocurre localmente en tu navegador." },
    ],
  },
};
