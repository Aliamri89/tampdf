import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const id: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Ganti bahasa" } },
  breadcrumb: { home: "Beranda" },
  tool: {
    processedClient: "Diproses di browser Anda — file tidak pernah diunggah",
    faqHeading: "Pertanyaan yang sering diajukan",
    relatedHeading: "Alat terkait",
    metaTitleSuffix: "— Alat Online Gratis",
  },
  article: {
    tocHeading: "Daftar isi",
    readingTime: "{minutes} menit membaca",
    readingTimeOne: "1 menit membaca",
    readingTimeTwo: "2 menit membaca",
    published: "Diterbitkan {date}",
    updated: "Diperbarui {date}",
    relatedHeading: "Artikel terkait",
    previousArticle: "Sebelumnya",
    nextArticle: "Berikutnya",
    ctaDefaultHeading: "Siap mencoba {tool}?",
    ctaCompressPdfButtonLabel: "Kompres PDF Gratis",
  },
  card: { comingSoon: "Segera hadir" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Alat PDF gratis, cepat, dan mudah digunakan",
    toolPicker: {
      trigger: "Pilih Alat PDF",
      ariaLabel: "Menu alat PDF",
      loadMore: "Alat lainnya",
      allShown: "Semua alat telah ditampilkan",
    },
    features: { devices: "Berfungsi di setiap perangkat", fast: "Cepat", secure: "Aman" },
  },
  footer: {
    rights: "Semua hak dilindungi.",
    privacyNote: "File diproses dengan aman dan tidak pernah disimpan lebih lama dari yang diperlukan.",
    moreCount: "+{count} lainnya",
    company: "Perusahaan",
    legal: "Legal",
    aboutUs: "Tentang Kami",
    contactUs: "Hubungi Kami",
    blog: "Blog",
    faq: "Pertanyaan yang sering diajukan",
    privacyPolicy: "Kebijakan Privasi",
    termsOfService: "Ketentuan Layanan",
    cookiePolicy: "Kebijakan Cookie",
  },
  staticPages: {
    note: "Halaman ini adalah placeholder — konten lengkap akan segera hadir.",
    aboutUs: {
      title: "Tentang Kami",
      intro:
        "TAMPDF adalah kumpulan alat online gratis yang dibuat untuk membuat tugas file sehari-hari — menggabungkan, memisahkan, mengompres, dan mengonversi PDF, gambar, dan dokumen — menjadi cepat, privat, dan tanpa repot.",
    },
    contactUs: {
      title: "Hubungi Kami",
      intro: "Punya pertanyaan, menemukan bug, atau ingin menyarankan alat baru? Kami senang mendengar dari Anda.",
    },
    blog: { title: "Blog", intro: "Kami sedang menyiapkan artikel tentang format file, tips produktivitas, dan pembaruan produk." },
    faq: {
      title: "Pertanyaan yang sering diajukan",
      intro: "Jawaban umum tentang TAMPDF akan segera diterbitkan di sini. Sementara itu, setiap halaman alat memiliki FAQ-nya sendiri.",
    },
    privacyPolicy: {
      title: "Kebijakan Privasi",
      intro: "Kebijakan privasi lengkap kami, yang menjelaskan secara rinci bagaimana TAMPDF menangani file dan data Anda, sedang difinalisasi dan akan segera diterbitkan di sini.",
    },
    termsOfService: {
      title: "Ketentuan Layanan",
      intro: "Ketentuan Layanan ini mengatur penggunaan Anda atas alat dan situs web TAMPDF, termasuk penafian jaminan dan batasan tanggung jawab kami.",
    },
    cookiePolicy: {
      title: "Kebijakan Cookie",
      intro: "Detail tentang cookie dan teknologi serupa yang digunakan TAMPDF akan segera diterbitkan di sini.",
    },
  },
  dropzone: {
    browse: "atau klik untuk menjelajah",
    defaultLabel: "Seret dan lepas file Anda di sini",
    unsupportedType: "{name} bukan jenis file yang didukung dan dilewati.",
    unsupportedTypePlural: "{count} file bukan jenis yang didukung dan dilewati.",
    tooLarge: "{name} terlalu besar (maks {max}) dan dilewati.",
    tooLargePlural: "{count} file terlalu besar (maks {max}) dan dilewati.",
    maxFilesReached: "Anda sudah menambahkan maksimum {max} file untuk alat ini.",
    maxFilesExceeded: "Alat ini mengizinkan hingga {max} file sekaligus, jadi hanya {added} file Anda yang ditambahkan.",
  },
  fileList: { moveUp: "Pindah ke atas", moveDown: "Pindah ke bawah", remove: "Hapus {name}" },
  result: {
    ready: "File Anda sudah siap",
    download: "Unduh",
    startOver: "Mulai lagi",
    smaller: "lebih kecil",
    originalSize: "Ukuran asli",
    newSize: "Ukuran baru",
    reducedBy: "Berkurang sebesar",
    spaceSaved: "Ruang yang dihemat",
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    description: "Halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.",
    cta: "Kembali ke beranda",
  },
};
