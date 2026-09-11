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
    shortName: "Delete Pages",
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
    shortName: "Reorder Pages",
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
    category: "image",
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
  {
    slug: "extract-pdf-pages",
    name: "Extract PDF Pages",
    shortName: "Extract Pages",
    actionLabel: "Extract pages",
    shortDescription:
      "Pull selected pages out of a PDF into a new file — or save each page as its own PDF.",
    longDescription: [
      "Extract PDF Pages lets you pick exactly the pages you need from a document and save them as a new PDF. See a thumbnail of every page, tap the ones to keep, and download them together — or as separate one-page PDFs in a ZIP.",
      "Your original file stays unchanged, and pages are copied as-is, so text, images, and formatting are untouched. Everything happens in your browser, so the PDF is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "FileOutput",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "What's the difference between extracting and splitting?",
        answer:
          "Extracting saves only the pages you select into a new PDF. Splitting divides the whole document into several parts by page ranges or fixed-size chunks.",
      },
      {
        question: "Can I save each extracted page as a separate file?",
        answer:
          "Yes. Choose “Separate PDFs” and every selected page becomes its own PDF, bundled in a single .zip download.",
      },
      {
        question: "Will the extracted pages lose quality?",
        answer:
          "No. Pages are copied without re-compression, so they look exactly like the original. Interactive form fields may become regular page content.",
      },
      {
        question: "Is my PDF uploaded to a server?",
        answer: "No. Pages are extracted locally in your browser and your file never leaves your device.",
      },
    ],
    relatedSlugs: ["split-pdf", "delete-pdf-pages", "merge-pdf"],
    keywords: [
      "extract pdf pages",
      "save pages from pdf",
      "pdf page extractor",
      "select pages from pdf",
      "extract pages online",
    ],
  },
  {
    slug: "add-page-numbers",
    name: "Add Page Numbers",
    shortName: "Page Numbers",
    actionLabel: "Add page numbers",
    shortDescription:
      "Number the pages of a PDF, with your choice of position, format, and starting number.",
    longDescription: [
      "Add Page Numbers stamps a number on every page of your PDF. Pick one of six positions, choose a style such as “1”, “1 / 10”, or “Page 1 of 10”, set the starting number, and optionally skip the cover page.",
      "Numbers are drawn as real text in a standard font, so they print crisply and stay upright even on rotated pages. The whole process runs in your browser — your document is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "ListOrdered",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I start numbering from a number other than 1?",
        answer:
          "Yes. Set any starting number — handy when your PDF is a chapter or appendix of a larger document.",
      },
      {
        question: "Can I leave the cover page unnumbered?",
        answer:
          "Yes. Turn on “Don't number the first page” and numbering begins on the second page.",
      },
      {
        question: "Which digits are used?",
        answer:
          "Standard digits (1, 2, 3), which display correctly in every PDF reader. Labels like “Page 1 of 10” are written in English.",
      },
      {
        question: "Is my file uploaded?",
        answer: "No. Page numbers are added locally in your browser and your PDF stays on your device.",
      },
    ],
    relatedSlugs: ["add-watermark", "merge-pdf", "extract-pdf-pages"],
    keywords: [
      "add page numbers to pdf",
      "number pdf pages",
      "pdf page numbering",
      "insert page numbers pdf",
      "paginate pdf",
    ],
  },
  {
    slug: "add-watermark",
    name: "Add Watermark",
    actionLabel: "Add watermark",
    shortDescription: "Stamp text such as CONFIDENTIAL or DRAFT across every page of a PDF.",
    longDescription: [
      "Add Watermark places your text on every page of a PDF — once in the center or repeated across the page. Choose the color, opacity, size, and angle, and see a live preview on your first page before you apply it.",
      "Arabic and other scripts are fully supported. The watermark is saved as a standard watermark object, and everything happens in your browser, so your document is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Stamp",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I write the watermark in Arabic?",
        answer:
          "Yes. The text is rendered with your browser's fonts, so Arabic and other scripts are shaped correctly.",
      },
      {
        question: "Can the watermark be repeated across the page?",
        answer:
          "Yes. Pick the “Repeated” layout to tile the text across every page, or “Once, centered” for a single stamp.",
      },
      {
        question: "Can the watermark be removed later?",
        answer:
          "It's saved as a standard watermark object, so tools that understand watermarks — including TAMPDF's Remove Watermark — can remove it. It isn't a security feature.",
      },
      {
        question: "Is my PDF uploaded anywhere?",
        answer: "No. The watermark is applied locally in your browser.",
      },
    ],
    relatedSlugs: ["remove-watermark", "add-page-numbers", "compress-pdf"],
    keywords: [
      "watermark pdf",
      "add watermark to pdf",
      "pdf watermark online",
      "stamp pdf",
      "confidential watermark",
    ],
  },
  {
    slug: "remove-watermark",
    name: "Remove Watermark",
    actionLabel: "Remove watermark",
    shortDescription: "Remove watermarks that were added as watermark objects from a PDF.",
    longDescription: [
      "Remove Watermark finds and deletes watermarks that were added as watermark objects — the kind Adobe Acrobat, TAMPDF, and most PDF editors create — along with watermark annotations and layers named “Watermark”. The rest of each page stays exactly as it was.",
      "Watermarks that are part of a scanned image or merged into ordinary page text have no marker to tell them apart from real content, so they can't be removed automatically. Please only remove watermarks from documents you have the right to edit. Processing happens in your browser, so your file is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "Eraser",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Which watermarks can be removed?",
        answer:
          "Watermarks added as watermark objects, watermark annotations, or layers named “Watermark” — including those created by Adobe Acrobat and TAMPDF's Add Watermark tool.",
      },
      {
        question: "Why wasn't the watermark in my file removed?",
        answer:
          "If a watermark is part of a scanned page image or was flattened into the page's text, it can't be separated from the real content without damaging the page.",
      },
      {
        question: "Does removing a watermark affect the rest of the page?",
        answer:
          "No. Only the marked watermark content is removed; text, images, and layout stay untouched.",
      },
      {
        question: "Is my file uploaded?",
        answer: "No. The PDF is processed locally in your browser.",
      },
    ],
    relatedSlugs: ["add-watermark", "remove-pdf-metadata", "compress-pdf"],
    keywords: [
      "remove watermark from pdf",
      "delete pdf watermark",
      "pdf watermark remover",
      "remove draft watermark",
      "erase watermark pdf",
    ],
  },
  {
    slug: "pdf-to-images",
    name: "PDF to Images",
    actionLabel: "Convert to images",
    shortDescription:
      "Convert every page of a PDF into PNG, JPG, or WEBP images, downloaded as a ZIP.",
    longDescription: [
      "PDF to Images renders each page of your PDF as a separate image in the format you choose: PNG for the sharpest text, JPG for the smallest files, or WEBP for modern, compact images. Pick a resolution and every page is exported and bundled into a single .zip.",
      "Rendering happens directly in your browser using PDF.js, so your document is never uploaded to a server.",
    ],
    category: "pdf",
    processing: "client",
    icon: "GalleryHorizontalEnd",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: true,
    outputExtension: ".zip",
    faq: [
      {
        question: "Which image format should I choose?",
        answer:
          "PNG keeps text and line art perfectly sharp. JPG produces smaller files and suits photos. WEBP offers a good balance for use on the web.",
      },
      {
        question: "What resolution are the images?",
        answer:
          "Standard renders at 108 dpi, High at 144 dpi, and Maximum at 216 dpi — high enough for printing most documents.",
      },
      {
        question: "How do I get all the pages at once?",
        answer:
          "Every page is converted and packed into one .zip file. A single-page PDF downloads as a single image.",
      },
      {
        question: "Is my PDF uploaded?",
        answer: "No. Pages are rendered locally in your browser.",
      },
    ],
    relatedSlugs: ["pdf-to-jpg", "images-to-pdf", "compress-image"],
    keywords: [
      "pdf to png",
      "pdf to images",
      "convert pdf to image",
      "pdf to webp",
      "pdf pages to images zip",
    ],
  },
  {
    slug: "images-to-pdf",
    name: "Images to PDF",
    actionLabel: "Create PDF",
    shortDescription:
      "Combine JPG, PNG, and WEBP images into one PDF, in the order you choose.",
    longDescription: [
      "Images to PDF turns a set of photos, scans, or screenshots into a single PDF document. Add JPG, PNG, or WEBP images, drag the thumbnails into the order you want, and choose an A4 or Letter page (with automatic portrait or landscape) or pages that match each image.",
      "Add a margin for a clean printed look. Transparent areas are placed on white, and the whole conversion runs in your browser, so your images are never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "FileStack",
    acceptedExtensions: [".jpg", ".jpeg", ".png", ".webp"],
    acceptedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    multipleFiles: true,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Can I change the order of the images?",
        answer:
          "Yes. Drag the thumbnails or use the arrow buttons to set the page order before creating the PDF.",
      },
      {
        question: "Which image formats are supported?",
        answer: "JPG, PNG, and WEBP. You can mix formats in the same PDF.",
      },
      {
        question: "What page size will the PDF use?",
        answer:
          "Choose A4 or Letter — each image is fitted to the page and turned landscape when needed — or “Fit image” to make each page exactly the size of its image.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. The PDF is created locally in your browser.",
      },
    ],
    relatedSlugs: ["image-to-pdf", "png-to-pdf", "merge-pdf"],
    keywords: [
      "images to pdf",
      "photos to pdf",
      "combine images into pdf",
      "webp to pdf",
      "jpg png to pdf",
    ],
  },
  {
    slug: "flip-pdf",
    name: "Flip PDF",
    actionLabel: "Flip PDF",
    shortDescription: "Mirror the pages of a PDF horizontally or vertically.",
    longDescription: [
      "Flip PDF mirrors every page of your document — left to right or top to bottom. It's useful for printing iron-on transfers, correcting scans made from the wrong side, or preparing mirrored artwork.",
      "Preview the result on your first page before applying it. The flip also respects rotated pages, and everything runs in your browser, so your file is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "FlipHorizontal2",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "What's the difference between flipping and rotating?",
        answer:
          "Rotating turns a page in 90° steps. Flipping creates a mirror image, so text reads backwards — which is what you need for transfers and some print jobs.",
      },
      {
        question: "Can I flip just one page?",
        answer:
          "The flip applies to every page. To flip a single page, extract it first with Extract PDF Pages.",
      },
      {
        question: "Does flipping reduce quality?",
        answer:
          "No. Pages are transformed, not re-rendered, so text and graphics stay as sharp as the original.",
      },
      {
        question: "Is my PDF uploaded?",
        answer: "No. Flipping happens locally in your browser.",
      },
    ],
    relatedSlugs: ["rotate-pdf", "crop-pdf", "resize-pdf"],
    keywords: [
      "flip pdf",
      "mirror pdf",
      "flip pdf horizontally",
      "mirror image pdf",
      "mirror pdf for printing",
    ],
  },
  {
    slug: "edit-pdf-metadata",
    name: "Edit PDF Metadata",
    shortName: "Edit Metadata",
    actionLabel: "Edit metadata",
    shortDescription: "Change a PDF's title, author, subject, and keywords.",
    longDescription: [
      "Edit PDF Metadata lets you view and change the document properties stored inside a PDF — title, author, subject, keywords, creator, and producer. These are what PDF readers, search engines, and file managers show about your document.",
      "Leave a field empty to remove it. The page content isn't touched, and the whole edit happens in your browser, so your file is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "FilePen",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "Why edit PDF metadata?",
        answer:
          "A clear title and author make documents easier to find and look more professional when shared, and search engines can use them when indexing PDFs.",
      },
      {
        question: "Will editing metadata change the document's content?",
        answer:
          "No. Only the document properties change; pages, text, and images stay exactly the same.",
      },
      {
        question: "How do I remove a property?",
        answer: "Clear the field and save. Empty fields are removed from the file.",
      },
      {
        question: "Is my PDF uploaded?",
        answer: "No. The properties are edited locally in your browser.",
      },
    ],
    relatedSlugs: ["remove-pdf-metadata", "pdf-info", "compress-pdf"],
    keywords: [
      "edit pdf metadata",
      "change pdf title",
      "pdf properties editor",
      "change pdf author",
      "pdf metadata editor",
    ],
  },
  {
    slug: "remove-pdf-metadata",
    name: "Remove PDF Metadata",
    shortName: "Remove Metadata",
    actionLabel: "Remove metadata",
    shortDescription:
      "Strip author, title, software, and other hidden properties from a PDF before sharing.",
    longDescription: [
      "Remove PDF Metadata clears the document properties and hidden data a PDF carries — author, title, subject, keywords, the software used to create it, creation dates, and embedded XMP metadata packets.",
      "It's a quick privacy step before sharing a file publicly. Page content stays untouched, and cleaning happens in your browser, so your file is never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "ShieldOff",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: ".pdf",
    faq: [
      {
        question: "What information is removed?",
        answer:
          "Title, author, subject, keywords, creator and producer software, creation and modification dates, embedded XMP metadata, and application-private data.",
      },
      {
        question: "Does it change how the document looks?",
        answer: "No. Only hidden properties are removed; every page looks exactly the same.",
      },
      {
        question: "Does this remove personal information printed on the pages?",
        answer:
          "No. It only removes metadata. Names or details printed on the pages stay visible.",
      },
      {
        question: "Is my PDF uploaded?",
        answer: "No. The file is cleaned locally in your browser.",
      },
    ],
    relatedSlugs: ["edit-pdf-metadata", "pdf-info", "remove-watermark"],
    keywords: [
      "remove pdf metadata",
      "clean pdf metadata",
      "strip pdf properties",
      "pdf privacy",
      "delete pdf author",
    ],
  },
  {
    slug: "pdf-info",
    name: "PDF Info",
    actionLabel: "Check PDF",
    shortDescription:
      "See a PDF's page count, page sizes, version, and document properties at a glance.",
    longDescription: [
      "PDF Info reads a PDF and shows what's inside: the number of pages, the size of every page in millimetres with paper names like A4 or Letter, the PDF version, whether it's encrypted or contains a fillable form, and its title, author, software, and dates.",
      "It's handy before printing, submitting, or converting a file. The document is only read — never changed — and everything happens in your browser, so it's never uploaded.",
    ],
    category: "pdf",
    processing: "client",
    icon: "FileSearch",
    acceptedExtensions: [".pdf"],
    acceptedMimeTypes: ["application/pdf"],
    multipleFiles: false,
    outputExtension: "",
    faq: [
      {
        question: "What details does PDF Info show?",
        answer:
          "Page count, page sizes with paper names, PDF version, file size, encryption, fillable forms, fast web view, and document properties such as title, author, and creation date.",
      },
      {
        question: "Does PDF Info change my file?",
        answer: "No. The PDF is only read; nothing is modified or saved.",
      },
      {
        question: "Can I check a password-protected PDF?",
        answer:
          "Files that need a password to open can't be read without it. Files with only editing restrictions are shown as encrypted.",
      },
      {
        question: "Is my PDF uploaded?",
        answer: "No. It's read locally in your browser.",
      },
    ],
    relatedSlugs: ["edit-pdf-metadata", "remove-pdf-metadata", "compress-pdf"],
    keywords: [
      "pdf info",
      "pdf properties",
      "check pdf page size",
      "pdf metadata viewer",
      "pdf page count",
    ],
  },
  {
    slug: "resize-image",
    name: "Resize Image",
    actionLabel: "Resize images",
    shortDescription:
      "Change the width and height of JPG, PNG, and WEBP images — by percentage or exact pixels.",
    longDescription: [
      "Resize Image changes the dimensions of your photos and graphics. Scale by percentage, or type an exact width and height with the aspect ratio locked so nothing looks stretched. Resize several images at once and download them together in a .zip.",
      "Images keep their original format, and high-quality smoothing keeps downscaled images crisp. Everything runs in your browser, so your images are never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "Expand",
    acceptedExtensions: [".jpg", ".jpeg", ".png", ".webp"],
    acceptedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    multipleFiles: true,
    outputExtension: ".jpg",
    faq: [
      {
        question: "Will resizing make my image blurry?",
        answer:
          "Making an image smaller keeps it sharp. Enlarging beyond its original size can't add detail, so large increases may look soft.",
      },
      {
        question: "Can I resize several images at once?",
        answer:
          "Yes. Add up to 20 images; with the aspect ratio locked, each one keeps its own proportions at the width you set.",
      },
      {
        question: "What format is the resized image?",
        answer:
          "The same as the original — JPG stays JPG, PNG stays PNG, and WEBP stays WEBP where your browser supports it.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Resizing happens locally in your browser.",
      },
    ],
    relatedSlugs: ["crop-image", "compress-image", "flip-image"],
    keywords: [
      "resize image",
      "change image size",
      "resize photo online",
      "image resizer",
      "resize png jpg",
    ],
  },
  {
    slug: "crop-image",
    name: "Crop Image",
    actionLabel: "Crop image",
    shortDescription: "Cut an image down to the area you want with a draggable crop frame.",
    longDescription: [
      "Crop Image trims unwanted edges from a photo or screenshot. Drag the crop frame or its corners over the preview — or fine-tune each edge with a slider — and see the exact size of the result in pixels.",
      "The cropped image keeps its original format and quality, and the whole process runs in your browser, so your image is never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "Crop",
    acceptedExtensions: [".jpg", ".jpeg", ".png", ".webp"],
    acceptedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    multipleFiles: false,
    outputExtension: ".jpg",
    faq: [
      {
        question: "Can I crop to exact dimensions?",
        answer:
          "Adjust each edge with the sliders and watch the result size update in pixels as you go.",
      },
      {
        question: "Does cropping reduce image quality?",
        answer:
          "No. The pixels you keep are copied as-is; only the parts outside the frame are removed.",
      },
      {
        question: "Which formats can I crop?",
        answer: "JPG, PNG, and WEBP. The result keeps the same format as the original.",
      },
      {
        question: "Is my image uploaded?",
        answer: "No. Cropping happens locally in your browser.",
      },
    ],
    relatedSlugs: ["resize-image", "flip-image", "compress-image"],
    keywords: ["crop image", "crop photo online", "image cropper", "trim image", "cut image"],
  },
  {
    slug: "flip-image",
    name: "Flip Image",
    actionLabel: "Flip images",
    shortDescription: "Mirror images horizontally or vertically — one at a time or in bulk.",
    longDescription: [
      "Flip Image creates a mirror image of your photos: left to right, or top to bottom. It's handy for fixing selfies taken with a front camera, making reflections, or preparing designs for print transfers.",
      "Flip several images at once, preview the result instantly, and download them in their original format. Everything runs in your browser, so your images are never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "FlipHorizontal",
    acceptedExtensions: [".jpg", ".jpeg", ".png", ".webp"],
    acceptedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    multipleFiles: true,
    outputExtension: ".jpg",
    faq: [
      {
        question: "What's the difference between flipping and rotating?",
        answer: "Rotating turns an image in 90° steps. Flipping mirrors it, like looking in a mirror.",
      },
      {
        question: "Can I flip several images at once?",
        answer:
          "Yes. Add up to 20 images and they're all flipped the same way, then downloaded together as a .zip.",
      },
      {
        question: "Does flipping reduce quality?",
        answer:
          "No noticeable loss — PNG stays lossless, and JPG and WEBP are saved at high quality.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Flipping happens locally in your browser.",
      },
    ],
    relatedSlugs: ["rotate-images", "crop-image", "resize-image"],
    keywords: [
      "flip image",
      "mirror image",
      "flip photo horizontally",
      "mirror photo online",
      "flip picture",
    ],
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG",
    actionLabel: "Convert to JPG",
    shortDescription: "Convert PNG images to JPG to make them smaller and more widely compatible.",
    longDescription: [
      "PNG to JPG converts your PNG images into JPG files, which are usually much smaller — ideal for photos, email attachments, and upload forms that only accept JPG. Convert several images at once and adjust the quality to balance size and sharpness.",
      "JPG doesn't support transparency, so transparent areas are filled with white. The conversion runs entirely in your browser, so your images are never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "RefreshCw",
    acceptedExtensions: [".png"],
    acceptedMimeTypes: ["image/png"],
    multipleFiles: true,
    outputExtension: ".jpg",
    faq: [
      {
        question: "Why convert PNG to JPG?",
        answer:
          "JPG files are typically much smaller than PNGs for photos and are accepted almost everywhere, from email to online forms.",
      },
      {
        question: "What happens to transparent backgrounds?",
        answer: "JPG has no transparency, so transparent areas are filled with white.",
      },
      {
        question: "Can I convert many PNGs at once?",
        answer: "Yes. Add up to 30 images; they're converted together and downloaded as a .zip.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Conversion happens locally in your browser.",
      },
    ],
    relatedSlugs: ["jpg-to-png", "png-to-webp", "compress-image"],
    keywords: [
      "png to jpg",
      "convert png to jpg",
      "png to jpeg",
      "png to jpg online",
      "change png to jpg",
    ],
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG",
    actionLabel: "Convert to PNG",
    shortDescription: "Convert JPG photos to lossless PNG images.",
    longDescription: [
      "JPG to PNG converts your JPG or JPEG images into the PNG format. PNG is lossless, so the image won't lose more quality when you edit and save it again — useful for graphics you'll keep working on, or for tools and platforms that require PNG.",
      "Convert several images at once and download them together. Conversion happens entirely in your browser, so your images are never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "RefreshCw",
    acceptedExtensions: [".jpg", ".jpeg"],
    acceptedMimeTypes: ["image/jpeg"],
    multipleFiles: true,
    outputExtension: ".png",
    faq: [
      {
        question: "Will converting JPG to PNG improve quality?",
        answer:
          "No — detail already lost in the JPG can't be restored. But PNG prevents any further loss when you edit and save again.",
      },
      {
        question: "Why is the PNG larger than the JPG?",
        answer:
          "PNG stores every pixel without lossy compression, so photos usually get bigger. That's the trade-off for lossless quality.",
      },
      {
        question: "Can I convert several JPGs at once?",
        answer: "Yes. Add up to 30 images and download them as a .zip.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Conversion happens locally in your browser.",
      },
    ],
    relatedSlugs: ["png-to-jpg", "jpg-to-webp", "resize-image"],
    keywords: [
      "jpg to png",
      "jpeg to png",
      "convert jpg to png",
      "jpg to png online",
      "change jpg to png",
    ],
  },
  {
    slug: "webp-to-jpg",
    name: "WEBP to JPG",
    actionLabel: "Convert to JPG",
    shortDescription: "Convert WEBP images to JPG so they open in any app or website.",
    longDescription: [
      "WEBP to JPG converts modern WEBP images — common on websites — into JPG, the format supported by virtually every app, device, and upload form. Convert one image or many at once, and adjust quality to balance file size and sharpness.",
      "Transparent areas are filled with white, since JPG doesn't support transparency. Conversion happens entirely in your browser, so your images are never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "RefreshCw",
    acceptedExtensions: [".webp"],
    acceptedMimeTypes: ["image/webp"],
    multipleFiles: true,
    outputExtension: ".jpg",
    faq: [
      {
        question: "Why convert WEBP to JPG?",
        answer:
          "Some older apps, editors, and upload forms don't accept WEBP. JPG works almost everywhere.",
      },
      {
        question: "Will I lose quality?",
        answer:
          "At the default quality the difference is hard to see. Increase the quality slider for the sharpest result.",
      },
      {
        question: "Can I convert several WEBP images at once?",
        answer: "Yes. Add up to 30 images and download them as a .zip.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Conversion happens locally in your browser.",
      },
    ],
    relatedSlugs: ["webp-to-png", "jpg-to-webp", "compress-image"],
    keywords: [
      "webp to jpg",
      "convert webp to jpg",
      "webp to jpeg",
      "webp converter",
      "open webp image",
    ],
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WEBP",
    actionLabel: "Convert to WEBP",
    shortDescription:
      "Convert JPG photos to WEBP for smaller, faster-loading images on the web.",
    longDescription: [
      "JPG to WEBP converts your JPG images into WEBP, a modern format that typically produces noticeably smaller files at similar visual quality — great for speeding up websites and saving storage.",
      "Adjust the quality to find the right balance and convert many images at once. Conversion happens entirely in your browser, so your images are never uploaded. Creating WEBP files needs a recent version of Chrome, Edge, or Firefox.",
    ],
    category: "image",
    processing: "client",
    icon: "RefreshCw",
    acceptedExtensions: [".jpg", ".jpeg"],
    acceptedMimeTypes: ["image/jpeg"],
    multipleFiles: true,
    outputExtension: ".webp",
    faq: [
      {
        question: "Is WEBP smaller than JPG?",
        answer:
          "Usually, yes — WEBP often saves a significant amount of space at similar quality, which helps pages load faster.",
      },
      {
        question: "Do all browsers support WEBP?",
        answer:
          "All modern browsers can display WEBP. Creating WEBP files here requires a recent Chrome, Edge, or Firefox.",
      },
      {
        question: "Can I convert several JPGs at once?",
        answer: "Yes. Add up to 30 images and download them as a .zip.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Conversion happens locally in your browser.",
      },
    ],
    relatedSlugs: ["webp-to-jpg", "png-to-webp", "compress-image"],
    keywords: [
      "jpg to webp",
      "jpeg to webp",
      "convert jpg to webp",
      "webp converter online",
      "optimize images webp",
    ],
  },
  {
    slug: "webp-to-png",
    name: "WEBP to PNG",
    actionLabel: "Convert to PNG",
    shortDescription: "Convert WEBP images to PNG while keeping transparency.",
    longDescription: [
      "WEBP to PNG converts WEBP images into PNG, the lossless format supported by every image editor. Transparency is preserved, so logos, icons, and cut-out graphics keep their clear backgrounds.",
      "Convert several images at once and download them together. Conversion happens entirely in your browser, so your images are never uploaded.",
    ],
    category: "image",
    processing: "client",
    icon: "RefreshCw",
    acceptedExtensions: [".webp"],
    acceptedMimeTypes: ["image/webp"],
    multipleFiles: true,
    outputExtension: ".png",
    faq: [
      {
        question: "Is transparency kept?",
        answer:
          "Yes. PNG supports transparency, so transparent areas in your WEBP image stay transparent.",
      },
      {
        question: "Why convert WEBP to PNG?",
        answer:
          "PNG opens in every editor and design tool and won't lose quality when you edit and re-save it.",
      },
      {
        question: "Can I convert several WEBP files at once?",
        answer: "Yes. Add up to 30 images and download them as a .zip.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Conversion happens locally in your browser.",
      },
    ],
    relatedSlugs: ["webp-to-jpg", "png-to-webp", "compress-image"],
    keywords: [
      "webp to png",
      "convert webp to png",
      "webp to png transparent",
      "webp to png online",
      "save webp as png",
    ],
  },
  {
    slug: "png-to-webp",
    name: "PNG to WEBP",
    actionLabel: "Convert to WEBP",
    shortDescription: "Convert PNG images to WEBP for smaller files that keep transparency.",
    longDescription: [
      "PNG to WEBP converts your PNG images into WEBP, which usually makes files much smaller while keeping transparency — ideal for website graphics, icons, and screenshots.",
      "Choose the quality, convert many images at once, and download them together. Conversion happens entirely in your browser, so your images are never uploaded. Creating WEBP files needs a recent version of Chrome, Edge, or Firefox.",
    ],
    category: "image",
    processing: "client",
    icon: "RefreshCw",
    acceptedExtensions: [".png"],
    acceptedMimeTypes: ["image/png"],
    multipleFiles: true,
    outputExtension: ".webp",
    faq: [
      {
        question: "Does WEBP keep transparency?",
        answer: "Yes. WEBP supports transparency, so transparent PNG areas stay transparent.",
      },
      {
        question: "How much smaller will my images be?",
        answer:
          "It varies, but WEBP files are often significantly smaller than the same image saved as PNG.",
      },
      {
        question: "Can I convert several PNGs at once?",
        answer: "Yes. Add up to 30 images and download them as a .zip.",
      },
      {
        question: "Are my images uploaded?",
        answer: "No. Conversion happens locally in your browser.",
      },
    ],
    relatedSlugs: ["webp-to-png", "jpg-to-webp", "compress-image"],
    keywords: [
      "png to webp",
      "convert png to webp",
      "png to webp online",
      "compress png to webp",
      "png webp converter",
    ],
  },
];
