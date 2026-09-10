import type { ToolDefinition } from "./types";

export const tools: ToolDefinition[] = [
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    actionLabel: "Compress PDF",
    shortDescription:
      "Shrink PDF file size for easier sharing and uploading, right in your browser.",
    longDescription: [
      "Compress PDF reduces file size by re-encoding embedded images and stripping unnecessary data, so your document is easier to email, upload, or store.",
      "Choose a compression level to balance file size against visual quality, and compare the before/after size before you download.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Minimize2",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: true,
    outputExtension: ".pdf",
    faq: [
      {
        question: "How much smaller will my PDF get?",
        answer:
          "It depends on the content. PDFs with large embedded images typically shrink the most, sometimes by 50-90%. Text-heavy PDFs compress less since there's less to optimize.",
      },
      {
        question: "Will compression make my PDF blurry?",
        answer:
          "At the default setting, quality loss is minimal. If you choose the strongest compression level, images are downsampled more aggressively, which can reduce sharpness on zoomed-in images.",
      },
      {
        question: "Is compression done on TAMPDF's servers?",
        answer:
          "No. Compress PDF runs locally in your browser, so your file is never uploaded anywhere.",
      },
      {
        question: "Can I compress a password-protected PDF?",
        answer:
          "Not currently. Remove the password protection with another tool first, then compress the file.",
      },
    ],
    relatedSlugs: ["merge-pdf", "pdf-to-jpg", "rotate-pdf"],
    keywords: ["reduce pdf size", "shrink pdf", "pdf compressor online"],
  },
  {
    slug: "pdf-to-jpg",
    name: "PDF to JPG",
    actionLabel: "Convert to JPG",
    shortDescription: "Turn every page of a PDF into a high-quality JPG image.",
    longDescription: [
      "PDF to JPG renders each page of your PDF as a separate JPG image, ready to share, edit, or drop into a slide deck. A single-page PDF downloads as one JPG; multi-page PDFs are bundled into a .zip.",
      "Rendering happens directly in your browser using PDF.js, so your document is never uploaded to a server.",
    ],
    category: "pdf",
    processing: "client",
    icon: "FileImage",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: true,
    outputExtension: ".zip",
    faq: [
      {
        question: "What if my PDF has multiple pages?",
        answer:
          "Each page becomes its own JPG image. If there's more than one, they're bundled into a single .zip file for download.",
      },
      {
        question: "How sharp will the images be?",
        answer:
          "Pages are rendered at a high resolution suitable for screens and most printing needs. Choose the quality level to balance sharpness against file size.",
      },
      {
        question: "Is my PDF uploaded anywhere?",
        answer:
          "No. PDF to JPG renders every page locally in your browser, so your file never leaves your device.",
      },
      {
        question: "Can I convert just one page instead of the whole document?",
        answer:
          "Currently every page is converted. Use Merge PDF or a PDF reader to isolate a single page beforehand if you only need one image.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-pdf", "rotate-pdf"],
    keywords: ["pdf to jpg", "convert pdf to image", "pdf to jpeg online"],
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    actionLabel: "Merge PDFs",
    shortDescription:
      "Combine multiple PDF files into a single document, in the order you choose.",
    longDescription: [
      "Merge PDF lets you combine two or more PDF files into one document without installing anything. Drag your files in, drag to reorder them, and download a single merged PDF.",
      "Everything runs locally in your browser, so your files are never uploaded to a server. That means it works even with sensitive contracts, reports, or personal documents.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Combine",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: true,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Is there a limit to how many PDFs I can merge?",
        answer:
          "No hard limit. Since merging happens in your browser, the practical limit is your device's memory rather than a server quota.",
      },
      {
        question: "Can I change the order of the pages before merging?",
        answer:
          "Yes. After adding your files, drag them into the order you want the final document to follow before merging.",
      },
      {
        question: "Do my files get uploaded to TAMPDF's servers?",
        answer:
          "No. Merge PDF processes files entirely in your browser using client-side technology, so your documents never leave your device.",
      },
      {
        question: "Will merging affect the quality of my PDFs?",
        answer:
          "No. Pages are combined as-is with no re-compression, so text, images, and formatting stay exactly as they were in the originals.",
      },
    ],
    relatedSlugs: ["pdf-to-jpg", "compress-pdf", "rotate-pdf"],
    keywords: ["combine pdf", "join pdf files", "merge pdf online", "pdf merger"],
  },
  {
    slug: "rotate-pdf",
    name: "Rotate PDF",
    actionLabel: "Rotate PDF",
    shortDescription:
      "Rotate individual pages or an entire PDF by 90°, 180°, or 270°, right in your browser.",
    longDescription: [
      "Rotate PDF lets you fix sideways or upside-down pages in seconds. Upload one or more PDFs, see a thumbnail of every page, then rotate the whole document at once or just the pages that need it.",
      "Everything runs locally in your browser, so your files are never uploaded to a server. Upload multiple PDFs at once and each one is rotated and returned independently.",
    ],
    category: "pdf",
    processing: "client",
    icon: "RotateCw",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: true,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I rotate just one page instead of the whole document?",
        answer:
          "Yes. Click a page's rotate button to rotate only that page, or use the rotate-all buttons to apply the same rotation to every page at once.",
      },
      {
        question: "What rotation angles are supported?",
        answer: "You can rotate pages by 90°, 180°, or 270° in either direction.",
      },
      {
        question: "Can I rotate more than one PDF at a time?",
        answer:
          "Yes. Upload multiple PDFs and each is rotated independently. If you upload more than one file, the rotated PDFs are bundled into a .zip for download.",
      },
      {
        question: "Is my PDF uploaded anywhere?",
        answer:
          "No. Rotate PDF processes everything locally in your browser, so your files never leave your device.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-pdf", "pdf-to-jpg"],
    keywords: ["rotate pdf", "turn pdf pages", "fix sideways pdf online"],
  },
  {
    slug: "compress-image",
    name: "Compress Image",
    actionLabel: "Compress Images",
    shortDescription:
      "Reduce JPG, PNG, and WebP file sizes while keeping visual quality intact.",
    longDescription: [
      "Compress Image shrinks the file size of your JPG, PNG, or WebP photos, making them faster to upload, email, and load on websites.",
      "Compression happens entirely in your browser using the canvas API, so your photos never leave your device, and you can compress multiple images at once.",
    ],
    category: "image",
    processing: "client",
    icon: "ImageDown",
    acceptedExtensions: [".jpg", ".jpeg", ".png", ".webp"],
    acceptedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    multipleFiles: true,
    outputExtension: ".zip",
    faq: [
      {
        question: "Which image formats are supported?",
        answer: "JPG, PNG, and WebP images are supported as both input and output.",
      },
      {
        question: "Can I compress multiple images at once?",
        answer:
          "Yes. Add as many images as you like and they'll each be compressed and bundled into a single .zip for download, or download individually.",
      },
      {
        question: "How much can I shrink an image without losing quality?",
        answer:
          "The default quality setting typically reduces file size by 60-80% with no visible difference. You can adjust the quality slider for a different trade-off.",
      },
      {
        question: "Are my photos uploaded to a server?",
        answer:
          "No. Compression runs locally in your browser using the canvas API, so your images are never sent anywhere.",
      },
    ],
    relatedSlugs: ["image-to-pdf", "compress-pdf", "merge-pdf"],
    keywords: ["compress jpg", "compress png", "reduce image size online", "image compressor"],
  },
  {
    slug: "image-to-pdf",
    name: "JPG to PDF",
    actionLabel: "Convert to PDF",
    shortDescription: "Turn one or more JPG images into a single PDF document.",
    longDescription: [
      "JPG to PDF combines your JPG photos into a single PDF file, one image per page, in the order you choose.",
      "Perfect for turning scanned documents, receipts, or photos into a shareable PDF. Everything is processed locally in your browser for full privacy.",
    ],
    category: "image",
    processing: "client",
    icon: "ImagePlus",
    acceptedExtensions: [".jpg", ".jpeg", ".png"],
    acceptedMimeTypes: ["image/jpeg", "image/png"],
    multipleFiles: true,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes. Add multiple images and they'll each become a page in the resulting PDF, in the order you arrange them.",
      },
      {
        question: "What page size is used for the PDF?",
        answer:
          "Each page is sized to match its source image's dimensions and orientation, so nothing gets cropped or stretched.",
      },
      {
        question: "Are my images uploaded anywhere?",
        answer:
          "No. The conversion happens entirely in your browser, so your images stay on your device.",
      },
      {
        question: "Does it support PNG images too?",
        answer:
          "Yes, PNG images are supported alongside JPG. HEIC photos from an iPhone aren't supported yet; convert them to JPG first using your phone's share options.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-image", "compress-pdf"],
    keywords: ["jpg to pdf", "convert jpg to pdf online", "image to pdf"],
  },
  {
    slug: "rotate-images",
    name: "Rotate Images",
    actionLabel: "Rotate Images",
    shortDescription: "Rotate one or more JPG, PNG, or WebP images by 90°, 180°, or 270°.",
    longDescription: [
      "Rotate Images fixes sideways or upside-down photos in seconds. Upload one or more images, rotate each individually or all at once, and download the results.",
      "Everything runs locally in your browser, so your photos are never uploaded to a server. Upload multiple images at once and each is rotated and returned independently.",
    ],
    category: "image",
    processing: "client",
    icon: "RotateCw",
    acceptedExtensions: [".jpg", ".jpeg", ".png", ".webp"],
    acceptedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    multipleFiles: true,
    outputExtension: ".zip",
    faq: [
      {
        question: "Which image formats are supported?",
        answer: "JPG, PNG, and WebP images are supported. Rotating preserves the original format.",
      },
      {
        question: "Can I rotate just one image instead of all of them?",
        answer:
          "Yes. Click an image's rotate button to rotate only that image, or use the rotate-all buttons to apply the same rotation to every image at once.",
      },
      {
        question: "What rotation angles are supported?",
        answer: "You can rotate images by 90°, 180°, or 270°.",
      },
      {
        question: "Are my photos uploaded anywhere?",
        answer:
          "No. Rotate Images processes everything locally in your browser, so your photos never leave your device.",
      },
    ],
    relatedSlugs: ["compress-image", "image-to-pdf", "rotate-pdf"],
    keywords: ["rotate image", "rotate photo online", "turn image 90 degrees", "rotate jpg png"],
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    actionLabel: "Split PDF",
    shortDescription:
      "Split one PDF into several smaller files by page ranges or in fixed-size chunks.",
    longDescription: [
      "Split PDF breaks a large document into separate PDF files without changing the pages themselves. Enter page ranges like 1-3, 5, 8-10 to pull out exactly the sections you need, or split the whole document into equal chunks of a fixed number of pages.",
      "Everything runs in your browser — the PDF is never uploaded to a server. A single output downloads as one PDF; multiple parts are bundled into a .zip.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Scissors",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".zip",
    faq: [
      {
        question: "How do I choose which pages go into each file?",
        answer:
          'Use the ranges field: something like "1-3, 5, 8-10" produces three PDFs — pages 1 to 3, page 5 on its own, and pages 8 to 10. Or switch to "every N pages" to cut the document into equal chunks.',
      },
      {
        question: "Do the split files keep their original quality?",
        answer:
          "Yes. Pages are copied as-is with no re-compression, so text, images, fonts, and layout are identical to the source.",
      },
      {
        question: "Is my PDF uploaded anywhere?",
        answer:
          "No. Splitting happens entirely in your browser, so your document never leaves your device.",
      },
      {
        question: "What happens to form fields or digital signatures?",
        answer:
          "Page content and form widgets are preserved visually, but interactive form behaviour and signatures are not carried into the split files. Flatten or re-sign afterwards if you need them.",
      },
    ],
    relatedSlugs: ["merge-pdf", "delete-pdf-pages", "reorder-pdf-pages"],
    keywords: [
      "split pdf",
      "split pdf online",
      "separate pdf pages",
      "extract pdf pages",
      "divide pdf",
    ],
  },
  {
    slug: "delete-pdf-pages",
    name: "Delete PDF Pages",
    actionLabel: "Delete Pages",
    shortDescription: "Remove unwanted pages from a PDF and download the trimmed document.",
    longDescription: [
      "Delete PDF Pages lets you drop pages you don't need — blank scans, cover sheets, duplicate pages — and keep the rest in their original order. See a thumbnail of every page, tap the ones to remove, and download the result.",
      "The whole process runs locally in your browser, so your PDF is never uploaded. The remaining pages are copied without re-compression, so nothing loses quality.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Trash2",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I delete more than one page at a time?",
        answer:
          "Yes. Select as many pages as you like in the thumbnail grid, then delete them all in one step.",
      },
      {
        question: "Can I remove every page?",
        answer:
          "No — at least one page must remain, so the button is disabled if you've selected all of them.",
      },
      {
        question: "Does deleting pages shrink the file size?",
        answer:
          "Usually a little, since the removed pages' content is dropped. Shared resources like fonts may stay, so use Compress PDF afterwards if size matters.",
      },
      {
        question: "Are my files uploaded to a server?",
        answer: "No. Everything happens in your browser and your PDF never leaves your device.",
      },
    ],
    relatedSlugs: ["split-pdf", "reorder-pdf-pages", "merge-pdf"],
    keywords: [
      "delete pages from pdf",
      "remove pdf pages",
      "erase pdf page",
      "pdf page remover",
    ],
  },
  {
    slug: "reorder-pdf-pages",
    name: "Reorder PDF Pages",
    actionLabel: "Reorder Pages",
    shortDescription: "Drag PDF pages into a new order and save the rearranged document.",
    longDescription: [
      "Reorder PDF Pages gives you a thumbnail of every page that you can drag into the order you want — move a page to the front, swap two sections, or reverse the whole document. Move buttons are there too for precise, one-page-at-a-time changes.",
      "Rearranging happens entirely in your browser, so your PDF is never uploaded. Pages are copied as-is, so quality and formatting are untouched.",
    ],
    category: "pdf",
    processing: "client",
    icon: "ArrowUpDown",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "How do I move a page?",
        answer:
          "Drag its thumbnail to the new position, or use the up/down buttons on each page for single steps. The new order is saved when you click the button.",
      },
      {
        question: "Can I reverse the entire document?",
        answer:
          "Yes — drag pages into reverse order, or use the move buttons. Any number of pages can be rearranged in one pass.",
      },
      {
        question: "Will reordering change the page content?",
        answer:
          "No. Only the page order changes — text, images, and layout on each page stay exactly the same.",
      },
      {
        question: "Is the PDF uploaded anywhere?",
        answer:
          "No. Reordering runs locally in your browser and your file never leaves your device.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf", "delete-pdf-pages"],
    keywords: [
      "reorder pdf pages",
      "rearrange pdf",
      "sort pdf pages",
      "move pdf pages",
      "organize pdf",
    ],
  },
  {
    slug: "crop-pdf",
    name: "Crop PDF",
    actionLabel: "Crop PDF",
    shortDescription:
      "Trim the margins of every PDF page by setting top, bottom, and side amounts.",
    longDescription: [
      "Crop PDF removes unwanted white space or scan borders from the edges of your pages. Set how much to trim from the top, bottom, left, and right as a percentage, watch the live preview, and apply it to every page at once.",
      "Cropping adjusts the visible page area without deleting any content — the trimmed parts are simply hidden. It all runs in your browser, so your PDF is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Crop",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Does cropping delete the content outside the crop area?",
        answer:
          "No. Crop PDF changes the page's crop box, which hides the outer area in viewers and when printing. The underlying content is still in the file and can be restored.",
      },
      {
        question: "Is the same crop applied to all pages?",
        answer:
          "Yes. The margins you set are applied to every page. Pages of different sizes are each trimmed by the same percentage.",
      },
      {
        question: "Can I crop a scanned document to remove the black border?",
        answer:
          "Yes — that's a common use. Increase the margins until the preview shows only the content you want to keep.",
      },
      {
        question: "Is my file uploaded to a server?",
        answer:
          "No. Cropping happens entirely in your browser and your PDF stays on your device.",
      },
    ],
    relatedSlugs: ["resize-pdf", "compress-pdf", "rotate-pdf"],
    keywords: [
      "crop pdf",
      "trim pdf margins",
      "cut pdf edges",
      "remove pdf white space",
      "crop pdf online",
    ],
  },
  {
    slug: "resize-pdf",
    name: "Resize PDF",
    actionLabel: "Resize PDF",
    shortDescription:
      "Change PDF page size to A4, Letter, or a custom scale, with content fitted and centered.",
    longDescription: [
      "Resize PDF changes the physical page size of your document. Pick a standard size like A4 or US Letter and every page is scaled to fit and centered, or use a percentage to shrink or enlarge the pages proportionally.",
      "Resizing runs in your browser with no upload. Content is scaled together with the page, so nothing is cut off and the layout stays proportional.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Scaling",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "What page sizes can I choose?",
        answer:
          "A4 and US Letter in portrait or landscape, plus A3 and A5. You can also enter a scale percentage to resize without changing the aspect ratio.",
      },
      {
        question: "Will my content get stretched?",
        answer:
          "No. Content is scaled uniformly to fit the new size and centered on the page, so proportions are preserved and nothing is clipped.",
      },
      {
        question: "Can I make a PDF smaller in file size with this?",
        answer:
          "Not directly — this changes page dimensions, not file weight. Use Compress PDF to reduce the file size.",
      },
      {
        question: "Are my files uploaded anywhere?",
        answer:
          "No. Resizing is done locally in your browser and your PDF never leaves your device.",
      },
    ],
    relatedSlugs: ["crop-pdf", "compress-pdf", "pdf-to-jpg"],
    keywords: [
      "resize pdf",
      "change pdf page size",
      "pdf to a4",
      "scale pdf",
      "pdf page resizer",
    ],
  },
  {
    slug: "png-to-pdf",
    name: "PNG to PDF",
    actionLabel: "Convert to PDF",
    shortDescription:
      "Turn one or more PNG images into a single PDF document, one image per page.",
    longDescription: [
      "PNG to PDF combines your PNG images into one PDF file, with each image on its own page at its original resolution. Add multiple images, arrange their order, and download a single document.",
      "Great for turning screenshots, diagrams, or exported graphics into a shareable PDF. Conversion happens entirely in your browser, so your images are never uploaded. Transparent areas are placed on a white background.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Images",
    acceptedExtensions: [".png"],
    acceptedMimeTypes: ["image/png"],
    multipleFiles: true,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I combine several PNGs into one PDF?",
        answer:
          "Yes. Add as many PNG images as you like and each becomes a page in the resulting PDF, in the order you arrange them.",
      },
      {
        question: "What page size is used?",
        answer:
          "Each page matches its source image's pixel dimensions, so images aren't cropped or stretched.",
      },
      {
        question: "What happens to transparent parts of the image?",
        answer:
          "Transparency is flattened onto a white background so the page looks the same in every PDF viewer.",
      },
      {
        question: "Are my images uploaded to a server?",
        answer:
          "No. The conversion runs entirely in your browser and your images stay on your device.",
      },
    ],
    relatedSlugs: ["image-to-pdf", "compress-image", "merge-pdf"],
    keywords: [
      "png to pdf",
      "convert png to pdf",
      "png to pdf online",
      "images to pdf",
      "screenshot to pdf",
    ],
  },
];
