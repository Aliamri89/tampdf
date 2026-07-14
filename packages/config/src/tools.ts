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
    multipleFiles: false,
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
    multipleFiles: false,
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
];
