import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Iklan"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Pratinjau — diterapkan pada gambar",
      formatsNote: "File yang didukung: PDF, JPG, PNG, dan WebP"
    },
    removeWatermark: {
      intro: "Menghapus watermark yang ditambahkan sebagai objek watermark: pada PDF (oleh Adobe Acrobat, TAMPDF, dan sebagian besar editor) dan pada dokumen Word (Desain ▸ Watermark). Watermark yang menyatu dengan piksel gambar tidak dapat dipisahkan dari gambarnya, sehingga gambar tidak didukung.",
      formatsNote: "File yang didukung: PDF dan Word (.docx)",
      noneFoundWord: "Tidak ditemukan watermark Word pada dokumen ini. Hanya watermark yang ditambahkan dengan fitur Watermark milik Word sendiri yang dapat dihapus."
    }
  },
  consent: {
    title: "Cookie dan analitik",
    description: "Kami menggunakan cookie analitik (Google Analytics dan Microsoft Clarity) untuk memahami cara situs digunakan. Cookie ini hanya berjalan jika Anda menyetujui. File Anda tidak pernah meninggalkan browser Anda.",
    accept: "Terima",
    reject: "Tolak",
    settings: "Pengaturan cookie",
    statusOn: "Cookie analitik saat ini aktif.",
    statusOff: "Cookie analitik saat ini nonaktif.",
    close: "Tutup"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Cara TAMPDF menangani file dan data Anda: file diproses di browser dan tidak pernah diunggah; apa yang dikumpulkan analitik, cookie, dan iklan; serta hak Anda.",
      updated: "Terakhir diperbarui: 6 November 2026.",
      sections: [
        {
          heading: "Gambaran umum",
          text: "TAMPDF (tampdf.com) menyediakan alat gratis berbasis browser untuk PDF dan gambar. Kebijakan ini menjelaskan apa yang kami kumpulkan dan tidak kumpulkan."
        },
        {
          heading: "File Anda tetap di perangkat Anda",
          text: "File diproses secara lokal di browser Anda dan tidak pernah diunggah ke, disimpan di, atau dibagikan dengan server kami maupun pihak ketiga mana pun. Jika Anda memilih “Simpan ke Google Drive” atau “Simpan ke Dropbox”, browser Anda mengirim hasilnya langsung ke layanan yang Anda masuki; kami tidak pernah menerimanya."
        },
        {
          heading: "Informasi yang dikumpulkan otomatis",
          text: "Untuk memahami cara situs digunakan, kami menyimpan penghitung sederhana milik sendiri di server kami dan, hanya dengan persetujuan Anda bila diwajibkan, menggunakan Google Analytics dan Microsoft Clarity. Layanan ini dapat mencatat halaman yang dikunjungi, perkiraan lokasi, perangkat, browser, bahasa, situs perujuk, serta alat yang Anda gunakan dan apakah berhasil. Kami tidak pernah mengumpulkan nama, alamat email, atau isi file Anda."
        },
        {
          heading: "Cookie dan teknologi serupa",
          text: "Layanan analitik dan iklan dapat menetapkan cookie atau menggunakan penyimpanan lokal. Kebijakan Cookie kami mencantumkannya dan menjelaskan cara mengendalikannya, dan Anda dapat mengubah pilihan kapan saja lewat “Pengaturan cookie” di footer."
        },
        {
          heading: "Hak Anda",
          text: "Di mana undang-undang seperti GDPR, GDPR Inggris, atau CCPA berlaku, Anda dapat meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan tentang Anda, menolak atau membatasi pemrosesannya, menarik persetujuan kapan saja, dan mengajukan keluhan ke otoritas perlindungan data setempat. Gunakan halaman Kontak untuk mengajukan permintaan."
        },
        {
          heading: "Penyimpanan data",
          text: "Data analitik hanya disimpan selama diperlukan untuk statistik dan peningkatan layanan, sesuai pengaturan penyimpanan masing-masing penyedia."
        },
        {
          heading: "Layanan dan tautan pihak ketiga",
          text: "Situs dapat menautkan atau memuat layanan dari perusahaan lain (misalnya Google, Microsoft, dan Dropbox). Mereka memiliki kebijakan privasi sendiri dan kami tidak bertanggung jawab atasnya."
        },
        {
          heading: "Anak-anak",
          text: "TAMPDF tidak ditujukan bagi anak di bawah 13 tahun (atau di bawah 16 tahun bila diwajibkan hukum setempat), dan kami tidak dengan sengaja mengumpulkan informasi pribadi mereka."
        },
        {
          heading: "Keamanan",
          text: "File diproses di browser Anda dan tidak pernah dikirim kepada kami. Situs disajikan melalui HTTPS."
        },
        {
          heading: "Perubahan kebijakan ini",
          text: "Kami dapat memperbarui kebijakan ini; tanggal “Terakhir diperbarui” menunjukkan versi terbaru. Melanjutkan penggunaan situs berarti Anda menerima pembaruan."
        },
        {
          heading: "Kontak",
          text: "Ada pertanyaan tentang kebijakan ini? Silakan gunakan halaman Kontak."
        }
      ]
    },
    cookiePolicy: {
      intro: "Cookie dan teknologi serupa yang digunakan TAMPDF untuk preferensi, analitik, dan iklan, serta cara mengendalikannya.",
      updated: "Terakhir diperbarui: 6 November 2026.",
      sections: [
        {
          heading: "Apa itu cookie?",
          text: "File teks kecil yang disimpan situs web di perangkat Anda. Teknologi serupa, seperti penyimpanan lokal dan piksel, bekerja dengan cara yang sebanding; kebijakan ini mencakup semuanya."
        },
        {
          heading: "Penyimpanan yang benar-benar diperlukan",
          text: "TAMPDF mengingat tema terang/gelap dan pilihan cookie Anda di penyimpanan lokal browser. Tidak berisi data pribadi dan tidak pernah dikirim kepada kami."
        },
        {
          heading: "Cookie analitik",
          text: "Dengan persetujuan Anda bila diwajibkan, kami menggunakan Google Analytics 4 (cookie seperti _ga dan _ga_*) dan Microsoft Clarity (seperti _clck dan _clsk) untuk mengukur lalu lintas dan memahami cara situs digunakan; Clarity juga dapat membuat rekaman sesi dan peta panas yang dianonimkan."
        },
        {
          heading: "Mengelola pilihan Anda",
          text: "Di tempat yang mewajibkan persetujuan, Anda dapat menerima atau menolak cookie analitik di spanduk dan berubah pikiran kapan saja lewat “Pengaturan cookie” di footer; menarik persetujuan menghentikan skrip analitik dan menghapus cookie-nya. Anda juga dapat memblokir cookie di browser — alat tetap berfungsi karena file Anda diproses secara lokal."
        },
        {
          heading: "Kontrol lainnya",
          text: "Anda dapat menolak iklan yang dipersonalisasi di https://adssettings.google.com atau https://www.aboutads.info/choices (https://www.youronlinechoices.eu di Eropa) dan mengelola data Microsoft di https://account.microsoft.com/privacy."
        },
        {
          heading: "Perubahan dan kontak",
          text: "Kami dapat memperbarui kebijakan ini; tanggal di atas menunjukkan versi terbaru. Ada pertanyaan? Gunakan halaman Kontak."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Penerimaan ketentuan",
          text: "Dengan menggunakan TAMPDF, Anda menyetujui Ketentuan Layanan ini. Jika tidak setuju, mohon jangan gunakan alat kami."
        },
        {
          heading: "Layanan",
          text: "TAMPDF menyediakan alat gratis berbasis browser untuk bekerja dengan PDF dan gambar. Semua pemrosesan terjadi secara lokal di browser Anda; file Anda tidak pernah diunggah ke server kami."
        },
        {
          heading: "Penafian jaminan",
          text: "Alat disediakan “apa adanya” dan “sebagaimana tersedia”, tanpa jaminan apa pun, tersurat maupun tersirat, termasuk akurasi, keandalan, kelayakan untuk diperdagangkan, atau kesesuaian untuk tujuan tertentu. Kami tidak menjamin alat bebas kesalahan, tidak terputus, atau kompatibel dengan semua file, browser, atau perangkat."
        },
        {
          heading: "Batasan tanggung jawab",
          text: "Sejauh diizinkan hukum, TAMPDF dan pemiliknya tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, atau konsekuensial — termasuk kehilangan data, kerusakan file, atau gangguan bisnis — yang timbul dari penggunaan atau ketidakmampuan menggunakan alat."
        },
        {
          heading: "File Anda",
          text: "Anda bertanggung jawab menyimpan cadangan file asli dan memeriksa setiap hasil sebelum mengandalkannya. Karena pemrosesan terjadi di browser Anda, kami tidak dapat mengakses atau memulihkan file Anda."
        },
        {
          heading: "Penggunaan yang dapat diterima",
          text: "Gunakan TAMPDF hanya untuk tujuan yang sah dan hanya dengan file yang berhak Anda proses. Jangan gunakan alat untuk melanggar hak orang lain, menghapus watermark atau perlindungan dari konten yang tidak boleh Anda ubah, atau mengganggu operasi situs web."
        },
        {
          heading: "Layanan pihak ketiga dan iklan",
          text: "Situs dapat menampilkan iklan dan menautkan atau mengintegrasikan layanan pihak ketiga (seperti Google AdSense, Google Drive, dan Dropbox). Kami tidak mengendalikannya; penggunaan Anda diatur oleh ketentuan dan kebijakan privasi masing-masing."
        },
        {
          heading: "Kekayaan intelektual",
          text: "Nama, logo, desain, teks, dan kode TAMPDF adalah milik TAMPDF atau pemberi lisensinya. File Anda tetap milik Anda; kami tidak mengklaim hak apa pun atasnya."
        },
        {
          heading: "Perubahan ketentuan ini",
          text: "Kami dapat memperbarui ketentuan ini dari waktu ke waktu. Melanjutkan penggunaan TAMPDF setelah perubahan diposting berarti Anda menerimanya."
        }
      ]
    },
    adsDisclosure: {
      heading: "Iklan",
      paragraphs: [
        "Kami menggunakan Google AdSense untuk menampilkan iklan. Google dan mitranya adalah vendor pihak ketiga yang menggunakan cookie, web beacon, dan teknologi serupa untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke situs ini dan situs web lain.",
        "Anda dapat menolak iklan yang dipersonalisasi di Setelan Iklan Google (https://adssettings.google.com) atau di https://www.aboutads.info/choices, dan membaca cara Google menggunakan data dari situs yang memakai layanannya di https://policies.google.com/technologies/partner-sites.",
        "Di Wilayah Ekonomi Eropa, Inggris, dan Swiss, iklan hanya dipersonalisasi dengan persetujuan Anda, yang dapat Anda berikan atau tarik melalui pesan persetujuan yang ditampilkan di situs."
      ]
    }
  }
};
