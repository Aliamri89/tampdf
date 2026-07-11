import type { ToolDefinition } from "./types";

export const tools: ToolDefinition[] = [
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
        question: "Do my files get uploaded to Fileati's servers?",
        answer:
          "No. Merge PDF processes files entirely in your browser using client-side technology, so your documents never leave your device.",
      },
      {
        question: "Will merging affect the quality of my PDFs?",
        answer:
          "No. Pages are combined as-is with no re-compression, so text, images, and formatting stay exactly as they were in the originals.",
      },
    ],
    relatedSlugs: ["split-pdf", "compress-pdf", "image-to-pdf"],
    keywords: ["combine pdf", "join pdf files", "merge pdf online", "pdf merger"],
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    actionLabel: "Split PDF",
    shortDescription:
      "Extract pages or split a PDF into multiple separate files by range.",
    longDescription: [
      "Split PDF breaks a single PDF into smaller files. Pull out individual pages, extract a page range, or split every page into its own document.",
      "Splitting happens directly in your browser, so large or confidential files stay private while you get exactly the pages you need.",
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
        question: "Can I select a specific page range to extract?",
        answer:
          "Yes. Enter a page range such as 2-5 to extract just those pages, or split the document into individual single-page files.",
      },
      {
        question: "What format do I get back after splitting?",
        answer:
          "If you extract more than one output file, they're bundled into a single .zip you can download. Extracting a single range downloads directly as a PDF.",
      },
      {
        question: "Is my PDF uploaded anywhere when I split it?",
        answer:
          "No. Split PDF runs entirely client-side in your browser, so the file never leaves your device.",
      },
      {
        question: "Does splitting reduce PDF quality?",
        answer:
          "No. Pages are extracted at their original resolution and formatting with no re-compression involved.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-pdf", "pdf-to-word"],
    keywords: ["split pdf pages", "extract pdf pages", "pdf splitter online"],
  },
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
        question: "Is compression done on Fileati's servers?",
        answer:
          "No. Compress PDF runs locally in your browser, so your file is never uploaded anywhere.",
      },
      {
        question: "Can I compress a password-protected PDF?",
        answer:
          "Not currently. Remove the password protection with another tool first, then compress the file.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf", "pdf-to-word"],
    keywords: ["reduce pdf size", "shrink pdf", "pdf compressor online"],
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    actionLabel: "Convert to Word",
    shortDescription:
      "Convert a PDF into an editable Word (.docx) document while preserving layout.",
    longDescription: [
      "PDF to Word converts your PDF into a fully editable .docx file, preserving paragraphs, headings, and formatting as closely as possible so you can keep working in Microsoft Word or Google Docs.",
      "Because high-fidelity document conversion needs a real word processing engine, this tool processes your file securely on Fileati's servers and deletes it immediately afterward.",
    ],
    category: "document",
    processing: "server",
    icon: "FileOutput",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".docx",
    faq: [
      {
        question: "Will the formatting of my PDF be preserved?",
        answer:
          "Fileati aims to preserve text, headings, tables, and layout as closely as possible. Very complex layouts or scanned image-only PDFs may need manual touch-ups after conversion.",
      },
      {
        question: "Can I convert a scanned PDF to Word?",
        answer:
          "Scanned PDFs without a text layer will convert but the text won't be selectable or editable, since this tool doesn't currently run OCR. Support for scanned documents is planned.",
      },
      {
        question: "Is my file stored after conversion?",
        answer:
          "No. Your file is processed on our server and permanently deleted immediately after conversion completes. We don't keep copies or view your content.",
      },
      {
        question: "What Word format do I get?",
        answer:
          "You'll receive a standard .docx file compatible with Microsoft Word, Google Docs, LibreOffice Writer, and Apple Pages.",
      },
    ],
    relatedSlugs: ["word-to-pdf", "compress-pdf", "split-pdf"],
    keywords: ["pdf to docx", "convert pdf to word online", "pdf to editable word"],
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    actionLabel: "Convert to PDF",
    shortDescription:
      "Convert Word (.doc/.docx) documents into polished, universally readable PDFs.",
    longDescription: [
      "Word to PDF converts your .doc or .docx file into a PDF that looks the same on every device, ready to share, print, or archive.",
      "Conversion runs securely on Fileati's servers using a real document engine to preserve fonts, images, and layout, and your file is deleted immediately after processing.",
    ],
    category: "document",
    processing: "server",
    icon: "FileInput",
    acceptedExtensions: [".doc", ".docx"],
    acceptedMimeTypes: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Will fonts and images look the same in the PDF?",
        answer:
          "Yes. The conversion engine renders your document the same way it would print, so fonts, images, and spacing carry over accurately.",
      },
      {
        question: "Does it support both .doc and .docx?",
        answer:
          "Yes, both older .doc files and modern .docx files are supported.",
      },
      {
        question: "Is my document kept on your servers?",
        answer:
          "No. Files are processed in memory or in a temporary directory and permanently deleted right after your PDF is generated.",
      },
      {
        question: "Can I convert password-protected Word documents?",
        answer:
          "Not currently. Please remove the password before uploading, then convert the file.",
      },
    ],
    relatedSlugs: ["pdf-to-word", "compress-pdf", "merge-pdf"],
    keywords: ["docx to pdf", "convert word to pdf online", "doc to pdf converter"],
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
    name: "Image to PDF",
    actionLabel: "Convert to PDF",
    shortDescription:
      "Turn one or more JPG or PNG images into a single PDF document.",
    longDescription: [
      "Image to PDF combines your JPG or PNG photos into a single PDF file, one image per page, in the order you choose.",
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
        question: "Does it support HEIC photos from an iPhone?",
        answer:
          "Not yet. Currently JPG and PNG are supported; convert HEIC to JPG first using your phone's share options.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-image", "compress-pdf"],
    keywords: ["jpg to pdf", "png to pdf", "convert image to pdf online"],
  },
];
