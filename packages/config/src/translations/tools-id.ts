import type { ToolTranslationOverride } from "./tools-ar";

export const toolsId: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Kompres PDF",
    actionLabel: "Kompres PDF",
    shortDescription: "Perkecil ukuran file PDF agar lebih mudah dibagikan dan diunggah, langsung di browser Anda.",
    longDescription: [
      "Kompres PDF memperkecil ukuran file dengan mengkodekan ulang gambar yang disematkan dan menghapus data yang tidak perlu, sehingga dokumen Anda lebih mudah dikirim lewat email, diunggah, atau disimpan.",
      "Pilih tingkat kompresi untuk menyeimbangkan ukuran file dan kualitas visual, lalu bandingkan ukuran sebelum/sesudah sebelum mengunduh.",
    ],
    faq: [
      { question: "Seberapa kecil PDF saya akan menjadi?", answer: "Tergantung kontennya. PDF dengan gambar besar yang disematkan biasanya paling banyak mengecil, kadang 50-90%. PDF yang banyak teks mengompres lebih sedikit karena lebih sedikit yang bisa dioptimalkan." },
      { question: "Apakah kompresi akan membuat PDF saya buram?", answer: "Pada pengaturan default, kehilangan kualitas minimal. Jika Anda memilih tingkat kompresi terkuat, gambar akan diturunkan resolusinya lebih agresif, yang dapat mengurangi ketajaman saat diperbesar." },
      { question: "Apakah kompresi dilakukan di server TAMPDF?", answer: "Tidak. Kompres PDF berjalan secara lokal di browser Anda, sehingga file Anda tidak pernah diunggah ke mana pun." },
      { question: "Bisakah saya mengompres PDF yang dilindungi kata sandi?", answer: "Saat ini belum bisa. Hapus dulu perlindungan kata sandi dengan alat lain, baru kompres filenya." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF ke JPG",
    actionLabel: "Konversi ke JPG",
    shortDescription: "Ubah setiap halaman PDF menjadi gambar JPG berkualitas tinggi.",
    longDescription: [
      "PDF ke JPG mengubah setiap halaman PDF Anda menjadi gambar JPG terpisah, siap untuk dibagikan, diedit, atau dimasukkan ke presentasi. PDF satu halaman diunduh sebagai satu JPG; PDF banyak halaman digabungkan dalam file .zip.",
      "Konversi terjadi langsung di browser Anda menggunakan PDF.js, sehingga dokumen Anda tidak pernah diunggah ke server.",
    ],
    faq: [
      { question: "Bagaimana jika PDF saya memiliki banyak halaman?", answer: "Setiap halaman menjadi gambar JPG sendiri. Jika lebih dari satu, semuanya digabungkan dalam satu file .zip untuk diunduh." },
      { question: "Seberapa tajam gambarnya?", answer: "Halaman dirender dengan resolusi tinggi yang cocok untuk layar dan kebanyakan kebutuhan cetak. Pilih tingkat kualitas untuk menyeimbangkan ketajaman dan ukuran file." },
      { question: "Apakah PDF saya diunggah ke suatu tempat?", answer: "Tidak. PDF ke JPG memproses setiap halaman secara lokal di browser Anda, sehingga file Anda tidak pernah meninggalkan perangkat Anda." },
      { question: "Bisakah saya hanya mengonversi satu halaman, bukan seluruh dokumen?", answer: "Saat ini semua halaman dikonversi. Gunakan Gabung PDF atau pembaca PDF untuk memisahkan satu halaman terlebih dahulu jika Anda hanya butuh satu gambar." },
    ],
  },
  "merge-pdf": {
    name: "Gabung PDF",
    actionLabel: "Gabungkan PDF",
    shortDescription: "Gabungkan beberapa file PDF menjadi satu dokumen, dalam urutan pilihan Anda.",
    longDescription: [
      "Gabung PDF memungkinkan Anda menggabungkan dua atau lebih file PDF menjadi satu dokumen tanpa menginstal apa pun. Tambahkan file Anda, seret untuk mengatur ulang urutannya, dan unduh satu PDF gabungan.",
      "Semuanya berjalan secara lokal di browser Anda, sehingga file Anda tidak pernah diunggah ke server. Ini berarti bekerja bahkan dengan kontrak, laporan, atau dokumen pribadi yang sensitif.",
    ],
    faq: [
      { question: "Apakah ada batas jumlah PDF yang bisa saya gabungkan?", answer: "Tidak ada batas tetap. Karena penggabungan terjadi di browser Anda, batas praktisnya adalah memori perangkat Anda, bukan kuota server." },
      { question: "Bisakah saya mengubah urutan halaman sebelum menggabungkan?", answer: "Bisa. Setelah menambahkan file Anda, seret ke urutan yang Anda inginkan untuk dokumen akhir sebelum menggabungkannya." },
      { question: "Apakah file saya diunggah ke server TAMPDF?", answer: "Tidak. Gabung PDF memproses file sepenuhnya di browser Anda menggunakan teknologi sisi klien, sehingga dokumen Anda tidak pernah meninggalkan perangkat Anda." },
      { question: "Apakah penggabungan memengaruhi kualitas PDF saya?", answer: "Tidak. Halaman digabungkan apa adanya tanpa kompresi ulang, sehingga teks, gambar, dan format tetap persis seperti aslinya." },
    ],
  },
  "rotate-pdf": {
    name: "Putar PDF",
    actionLabel: "Putar PDF",
    shortDescription: "Putar halaman tertentu atau seluruh PDF sebesar 90°, 180°, atau 270°, langsung di browser Anda.",
    longDescription: [
      "Putar PDF memungkinkan Anda memperbaiki halaman miring atau terbalik dalam hitungan detik. Unggah satu atau lebih PDF, lihat thumbnail setiap halaman, lalu putar seluruh dokumen sekaligus atau hanya halaman yang perlu.",
      "Semuanya berjalan secara lokal di browser Anda, sehingga file Anda tidak pernah diunggah ke server. Unggah beberapa PDF sekaligus dan masing-masing diputar serta dikembalikan secara independen.",
    ],
    faq: [
      { question: "Bisakah saya memutar hanya satu halaman, bukan seluruh dokumen?", answer: "Bisa. Klik tombol putar pada satu halaman untuk memutar halaman itu saja, atau gunakan tombol putar semua untuk menerapkan rotasi yang sama ke semua halaman sekaligus." },
      { question: "Sudut rotasi apa yang didukung?", answer: "Anda dapat memutar halaman sebesar 90°, 180°, atau 270° ke arah mana pun." },
      { question: "Bisakah saya memutar lebih dari satu PDF sekaligus?", answer: "Bisa. Unggah beberapa PDF dan masing-masing diputar secara independen. Jika Anda mengunggah lebih dari satu file, PDF yang diputar akan digabungkan dalam .zip untuk diunduh." },
      { question: "Apakah PDF saya diunggah ke suatu tempat?", answer: "Tidak. Putar PDF memproses semuanya secara lokal di browser Anda, sehingga file Anda tidak pernah meninggalkan perangkat Anda." },
    ],
  },
  "compress-image": {
    name: "Kompres Gambar",
    actionLabel: "Kompres Gambar",
    shortDescription: "Perkecil ukuran file JPG, PNG, dan WebP tanpa mengurangi kualitas visual.",
    longDescription: [
      "Kompres Gambar memperkecil ukuran file foto JPG, PNG, atau WebP Anda, membuatnya lebih cepat diunggah, dikirim lewat email, dan dimuat di situs web.",
      "Kompresi terjadi sepenuhnya di browser Anda menggunakan canvas API, sehingga foto Anda tidak pernah meninggalkan perangkat Anda, dan Anda dapat mengompres beberapa gambar sekaligus.",
    ],
    faq: [
      { question: "Format gambar apa yang didukung?", answer: "Gambar JPG, PNG, dan WebP didukung baik sebagai input maupun output." },
      { question: "Bisakah saya mengompres beberapa gambar sekaligus?", answer: "Bisa. Tambahkan sebanyak apa pun gambar yang Anda inginkan dan masing-masing akan dikompres serta digabungkan dalam satu .zip untuk diunduh, atau diunduh satu per satu." },
      { question: "Seberapa banyak saya bisa memperkecil gambar tanpa kehilangan kualitas?", answer: "Pengaturan kualitas default biasanya mengurangi ukuran file sebesar 60-80% tanpa perbedaan yang terlihat. Anda dapat menyesuaikan penggeser kualitas untuk keseimbangan berbeda." },
      { question: "Apakah foto saya diunggah ke server?", answer: "Tidak. Kompresi berjalan secara lokal di browser Anda menggunakan canvas API, sehingga gambar Anda tidak pernah dikirim ke mana pun." },
    ],
  },
  "image-to-pdf": {
    name: "JPG ke PDF",
    actionLabel: "Konversi ke PDF",
    shortDescription: "Ubah satu atau lebih gambar JPG menjadi satu dokumen PDF.",
    longDescription: [
      "JPG ke PDF menggabungkan foto JPG Anda menjadi satu file PDF, satu gambar per halaman, dalam urutan pilihan Anda.",
      "Sempurna untuk mengubah dokumen yang dipindai, tanda terima, atau foto menjadi PDF yang mudah dibagikan. Semuanya diproses secara lokal di browser Anda untuk privasi penuh.",
    ],
    faq: [
      { question: "Bisakah saya menggabungkan beberapa gambar menjadi satu PDF?", answer: "Bisa. Tambahkan beberapa gambar dan masing-masing akan menjadi halaman dalam PDF hasil, sesuai urutan Anda mengaturnya." },
      { question: "Ukuran halaman apa yang digunakan untuk PDF?", answer: "Setiap halaman disesuaikan dengan dimensi dan orientasi gambar sumbernya, sehingga tidak ada yang terpotong atau meregang." },
      { question: "Apakah gambar saya diunggah ke suatu tempat?", answer: "Tidak. Konversi terjadi sepenuhnya di browser Anda, sehingga gambar Anda tetap berada di perangkat Anda." },
      { question: "Apakah juga mendukung gambar PNG?", answer: "Ya, gambar PNG didukung bersama JPG. Foto HEIC dari iPhone belum didukung; konversikan dulu ke JPG menggunakan opsi berbagi di ponsel Anda." },
    ],
  },
  "rotate-images": {
    name: "Putar Gambar",
    actionLabel: "Putar Gambar",
    shortDescription: "Putar satu atau lebih gambar JPG, PNG, atau WebP sebesar 90°, 180°, atau 270°.",
    longDescription: [
      "Putar Gambar memperbaiki foto miring atau terbalik dalam hitungan detik. Unggah satu atau lebih gambar, putar masing-masing secara individual atau sekaligus, dan unduh hasilnya.",
      "Semuanya berjalan secara lokal di browser Anda, sehingga foto Anda tidak pernah diunggah ke server. Unggah beberapa gambar sekaligus dan masing-masing diputar serta dikembalikan secara independen.",
    ],
    faq: [
      { question: "Format gambar apa yang didukung?", answer: "Gambar JPG, PNG, dan WebP didukung. Memutar mempertahankan format aslinya." },
      { question: "Bisakah saya memutar hanya satu gambar, bukan semuanya?", answer: "Bisa. Klik tombol putar pada satu gambar untuk memutar gambar itu saja, atau gunakan tombol putar semua untuk menerapkan rotasi yang sama ke semua gambar sekaligus." },
      { question: "Sudut rotasi apa yang didukung?", answer: "Anda dapat memutar gambar sebesar 90°, 180°, atau 270°." },
      { question: "Apakah foto saya diunggah ke suatu tempat?", answer: "Tidak. Putar Gambar memproses semuanya secara lokal di browser Anda, sehingga foto Anda tidak pernah meninggalkan perangkat Anda." },
    ],
  },
  "split-pdf": {
    name: "Pisahkan PDF",
    actionLabel: "Pisahkan PDF",
    shortDescription: "Pisahkan satu PDF menjadi beberapa file lebih kecil berdasarkan rentang halaman atau bagian berukuran tetap.",
    longDescription: [
      "Pisahkan PDF membagi dokumen besar menjadi file PDF terpisah tanpa mengubah halamannya sendiri. Masukkan rentang halaman seperti 1-3, 5, 8-10 untuk mengambil bagian yang Anda butuhkan, atau pisahkan seluruh dokumen menjadi bagian sama besar dengan jumlah halaman tetap.",
      "Semuanya berjalan di browser Anda — PDF tidak pernah diunggah ke server. Satu hasil diunduh sebagai satu PDF; beberapa bagian digabungkan dalam .zip.",
    ],
    faq: [
      { question: "Bagaimana cara memilih halaman mana yang masuk ke setiap file?", answer: "Gunakan kolom rentang: sesuatu seperti «1-3, 5, 8-10» menghasilkan tiga PDF — halaman 1 sampai 3, halaman 5 sendiri, dan halaman 8 sampai 10. Atau beralih ke «setiap N halaman» untuk memotong dokumen menjadi bagian sama besar." },
      { question: "Apakah file yang dipisah mempertahankan kualitas aslinya?", answer: "Ya. Halaman disalin apa adanya tanpa kompresi ulang, sehingga teks, gambar, font, dan tata letak identik dengan sumbernya." },
      { question: "Apakah PDF saya diunggah ke suatu tempat?", answer: "Tidak. Pemisahan terjadi sepenuhnya di browser Anda, sehingga dokumen Anda tidak pernah meninggalkan perangkat Anda." },
      { question: "Apa yang terjadi pada kolom formulir atau tanda tangan digital?", answer: "Konten halaman dan widget formulir dipertahankan secara visual, tetapi perilaku formulir interaktif dan tanda tangan tidak dibawa ke file yang dipisah. Ratakan atau tanda tangani ulang setelahnya jika Anda membutuhkannya." },
    ],
  },
  "delete-pdf-pages": {
    name: "Hapus Halaman PDF",
    actionLabel: "Hapus Halaman",
    shortDescription: "Hapus halaman yang tidak diinginkan dari PDF dan unduh dokumen yang sudah dirapikan.",
    longDescription: [
      "Hapus Halaman PDF memungkinkan Anda membuang halaman yang tidak dibutuhkan — pindaian kosong, halaman sampul, halaman duplikat — dan menjaga sisanya dalam urutan aslinya. Lihat thumbnail setiap halaman, ketuk yang ingin dihapus, dan unduh hasilnya.",
      "Seluruh proses berjalan secara lokal di browser Anda, sehingga PDF Anda tidak pernah diunggah. Halaman yang tersisa disalin tanpa kompresi ulang, sehingga tidak ada yang kehilangan kualitas.",
    ],
    faq: [
      { question: "Bisakah saya menghapus lebih dari satu halaman sekaligus?", answer: "Bisa. Pilih sebanyak apa pun halaman di grid thumbnail, lalu hapus semuanya dalam satu langkah." },
      { question: "Bisakah saya menghapus semua halaman?", answer: "Tidak bisa — setidaknya satu halaman harus tersisa, sehingga tombol dinonaktifkan jika Anda memilih semuanya." },
      { question: "Apakah menghapus halaman memperkecil ukuran file?", answer: "Biasanya sedikit, karena konten halaman yang dihapus ikut hilang. Sumber daya bersama seperti font mungkin tetap ada, jadi gunakan Kompres PDF setelahnya jika ukuran penting." },
      { question: "Apakah file saya diunggah ke server?", answer: "Tidak. Semuanya terjadi di browser Anda dan PDF Anda tidak pernah meninggalkan perangkat Anda." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Susun Ulang Halaman PDF",
    actionLabel: "Susun Ulang Halaman",
    shortDescription: "Seret halaman PDF ke urutan baru dan simpan dokumen yang telah disusun ulang.",
    longDescription: [
      "Susun Ulang Halaman PDF menampilkan thumbnail setiap halaman yang dapat Anda seret ke urutan yang diinginkan — pindahkan halaman ke depan, tukar dua bagian, atau balik seluruh dokumen. Tombol pindah juga tersedia untuk perubahan yang tepat, satu halaman per waktu.",
      "Penyusunan ulang terjadi sepenuhnya di browser Anda, sehingga PDF Anda tidak pernah diunggah. Halaman disalin apa adanya, sehingga kualitas dan format tidak terpengaruh.",
    ],
    faq: [
      { question: "Bagaimana cara memindahkan halaman?", answer: "Seret thumbnail-nya ke posisi baru, atau gunakan tombol atas/bawah pada setiap halaman untuk langkah tunggal. Urutan baru disimpan saat Anda mengklik tombol." },
      { question: "Bisakah saya membalik seluruh dokumen?", answer: "Bisa — seret halaman ke urutan terbalik, atau gunakan tombol pindah. Berapa pun jumlah halaman dapat disusun ulang sekaligus." },
      { question: "Apakah menyusun ulang akan mengubah konten halaman?", answer: "Tidak. Hanya urutan halaman yang berubah — teks, gambar, dan tata letak setiap halaman tetap persis sama." },
      { question: "Apakah PDF diunggah ke suatu tempat?", answer: "Tidak. Penyusunan ulang berjalan secara lokal di browser Anda dan file Anda tidak pernah meninggalkan perangkat Anda." },
    ],
  },
  "crop-pdf": {
    name: "Pangkas PDF",
    actionLabel: "Pangkas PDF",
    shortDescription: "Pangkas margin setiap halaman PDF dengan mengatur jumlah atas, bawah, dan samping.",
    longDescription: [
      "Pangkas PDF menghapus ruang kosong atau tepi pindaian yang tidak diinginkan dari tepi halaman Anda. Atur berapa banyak yang akan dipangkas dari atas, bawah, kiri, dan kanan dalam persentase, lihat pratinjau langsung, dan terapkan ke semua halaman sekaligus.",
      "Pemangkasan menyesuaikan area halaman yang terlihat tanpa menghapus konten apa pun — bagian yang dipangkas hanya disembunyikan. Semuanya berjalan di browser Anda, sehingga PDF Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apakah pemangkasan menghapus konten di luar area yang dipangkas?", answer: "Tidak. Pangkas PDF mengubah kotak pangkas halaman, yang menyembunyikan area luar di penampil dan saat dicetak. Konten yang mendasarinya tetap ada di file dan dapat dipulihkan." },
      { question: "Apakah pemangkasan yang sama diterapkan ke semua halaman?", answer: "Ya. Margin yang Anda atur diterapkan ke semua halaman. Halaman dengan ukuran berbeda masing-masing dipangkas dengan persentase yang sama." },
      { question: "Bisakah saya memangkas dokumen pindaian untuk menghilangkan tepi hitam?", answer: "Bisa — ini penggunaan yang umum. Tingkatkan margin hingga pratinjau hanya menampilkan konten yang ingin Anda pertahankan." },
      { question: "Apakah file saya diunggah ke server?", answer: "Tidak. Pemangkasan terjadi sepenuhnya di browser Anda dan PDF Anda tetap di perangkat Anda." },
    ],
  },
  "resize-pdf": {
    name: "Ubah Ukuran PDF",
    actionLabel: "Ubah Ukuran PDF",
    shortDescription: "Ubah ukuran halaman PDF menjadi A4, Letter, atau skala khusus, dengan konten yang disesuaikan dan diposisikan di tengah.",
    longDescription: [
      "Ubah Ukuran PDF mengubah ukuran halaman fisik dokumen Anda. Pilih ukuran standar seperti A4 atau US Letter dan setiap halaman diskalakan agar pas dan diposisikan di tengah, atau gunakan persentase untuk memperkecil atau memperbesar halaman secara proporsional.",
      "Perubahan ukuran berjalan di browser Anda tanpa unggahan. Konten diskalakan bersama halaman, sehingga tidak ada yang terpotong dan tata letak tetap proporsional.",
    ],
    faq: [
      { question: "Ukuran halaman apa yang bisa saya pilih?", answer: "A4 dan US Letter dalam orientasi potret atau lanskap, plus A3 dan A5. Anda juga dapat memasukkan persentase skala untuk mengubah ukuran tanpa mengubah rasio aspek." },
      { question: "Apakah konten saya akan meregang?", answer: "Tidak. Konten diskalakan secara seragam agar sesuai dengan ukuran baru dan diposisikan di tengah halaman, sehingga proporsi tetap terjaga dan tidak ada yang terpotong." },
      { question: "Bisakah saya memperkecil ukuran file PDF dengan ini?", answer: "Tidak secara langsung — ini mengubah dimensi halaman, bukan berat file. Gunakan Kompres PDF untuk mengurangi ukuran file." },
      { question: "Apakah file saya diunggah ke suatu tempat?", answer: "Tidak. Perubahan ukuran dilakukan secara lokal di browser Anda dan PDF Anda tidak pernah meninggalkan perangkat Anda." },
    ],
  },
  "png-to-pdf": {
    name: "PNG ke PDF",
    actionLabel: "Konversi ke PDF",
    shortDescription: "Ubah satu atau lebih gambar PNG menjadi satu dokumen PDF, satu gambar per halaman.",
    longDescription: [
      "PNG ke PDF menggabungkan gambar PNG Anda menjadi satu file PDF, dengan setiap gambar pada halamannya sendiri dengan resolusi aslinya. Tambahkan beberapa gambar, atur urutannya, dan unduh satu dokumen.",
      "Bagus untuk mengubah tangkapan layar, diagram, atau grafik yang diekspor menjadi PDF yang mudah dibagikan. Konversi terjadi sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah. Area transparan ditempatkan pada latar belakang putih.",
    ],
    faq: [
      { question: "Bisakah saya menggabungkan beberapa PNG menjadi satu PDF?", answer: "Bisa. Tambahkan sebanyak apa pun gambar PNG dan masing-masing akan menjadi halaman dalam PDF hasil, sesuai urutan Anda mengaturnya." },
      { question: "Ukuran halaman apa yang digunakan?", answer: "Setiap halaman sesuai dengan dimensi piksel gambar sumbernya, sehingga gambar tidak terpotong atau meregang." },
      { question: "Apa yang terjadi pada bagian transparan gambar?", answer: "Transparansi diratakan ke latar belakang putih sehingga halaman terlihat sama di setiap penampil PDF." },
      { question: "Apakah gambar saya diunggah ke server?", answer: "Tidak. Konversi terjadi sepenuhnya di browser Anda dan gambar Anda tetap berada di perangkat Anda." },
    ],
  },
  "extract-pdf-pages": {
    name: "Ekstrak Halaman PDF",
    actionLabel: "Ekstrak halaman",
    shortDescription: "Ambil halaman pilihan dari PDF ke file baru — atau simpan setiap halaman sebagai PDF tersendiri.",
    longDescription: [
      "Ekstrak Halaman PDF memungkinkan Anda memilih dengan tepat halaman yang Anda butuhkan dari dokumen dan menyimpannya sebagai PDF baru. Lihat thumbnail setiap halaman, ketuk yang ingin disimpan, dan unduh bersama — atau sebagai PDF satu halaman terpisah dalam ZIP.",
      "File asli Anda tetap tidak berubah, dan halaman disalin apa adanya, sehingga teks, gambar, dan format tidak terpengaruh. Semuanya terjadi di browser Anda, sehingga PDF tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apa perbedaan antara ekstraksi dan pemisahan?", answer: "Ekstraksi hanya menyimpan halaman yang Anda pilih ke PDF baru. Pemisahan membagi seluruh dokumen menjadi beberapa bagian berdasarkan rentang halaman atau ukuran tetap." },
      { question: "Bisakah saya menyimpan setiap halaman yang diekstrak sebagai file terpisah?", answer: "Bisa. Pilih «PDF Terpisah» dan setiap halaman yang dipilih menjadi PDF-nya sendiri, digabungkan dalam satu unduhan .zip." },
      { question: "Apakah halaman yang diekstrak akan kehilangan kualitas?", answer: "Tidak. Halaman disalin tanpa kompresi ulang, sehingga terlihat persis seperti aslinya. Kolom formulir interaktif mungkin menjadi konten halaman biasa." },
      { question: "Apakah PDF saya diunggah ke server?", answer: "Tidak. Halaman diekstrak secara lokal di browser Anda dan file Anda tidak pernah meninggalkan perangkat Anda." },
    ],
  },
  "add-page-numbers": {
    name: "Tambah Nomor Halaman",
    actionLabel: "Tambah nomor halaman",
    shortDescription: "Beri nomor pada halaman PDF, dengan pilihan posisi, format, dan nomor awal.",
    longDescription: [
      "Tambah Nomor Halaman mencantumkan nomor pada setiap halaman PDF Anda. Pilih salah satu dari enam posisi, gaya seperti «1», «1 / 10», atau «Halaman 1 dari 10», atur nomor awal, dan lewati halaman sampul jika diinginkan.",
      "Nomor digambar sebagai teks asli dengan font standar, sehingga tercetak dengan jelas dan tetap tegak bahkan di halaman yang diputar. Seluruh proses berjalan di browser Anda — dokumen Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Bisakah saya memulai penomoran dari angka selain 1?", answer: "Bisa. Atur nomor awal apa pun — berguna saat PDF Anda adalah bab atau lampiran dari dokumen yang lebih besar." },
      { question: "Bisakah saya membiarkan halaman sampul tanpa nomor?", answer: "Bisa. Aktifkan «Jangan beri nomor pada halaman pertama» dan penomoran dimulai dari halaman kedua." },
      { question: "Angka apa yang digunakan?", answer: "Angka standar (1, 2, 3), yang tampil dengan benar di setiap pembaca PDF. Label seperti «Halaman 1 dari 10» ditulis dalam Bahasa Indonesia." },
      { question: "Apakah file saya diunggah?", answer: "Tidak. Nomor halaman ditambahkan secara lokal di browser Anda dan PDF Anda tetap di perangkat Anda." },
    ],
  },
  "add-watermark": {
    name: "Tambah Watermark",
    actionLabel: "Tambah watermark",
    shortDescription: "Bubuhkan teks seperti RAHASIA atau DRAFT pada setiap halaman PDF.",
    longDescription: [
      "Tambah Watermark menempatkan teks Anda pada setiap halaman PDF — sekali di tengah atau diulang di seluruh halaman. Pilih warna, opasitas, ukuran, dan sudut, lalu lihat pratinjau langsung pada halaman pertama sebelum menerapkannya.",
      "Bahasa Indonesia dan aksara lainnya didukung sepenuhnya. Watermark disimpan sebagai objek watermark standar, dan semuanya terjadi di browser Anda, sehingga dokumen Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Bisakah saya menulis watermark dalam Bahasa Indonesia?", answer: "Bisa. Teks dirender dengan font browser Anda, sehingga Bahasa Indonesia dan aksara lainnya ditampilkan dengan benar." },
      { question: "Bisakah watermark diulang di seluruh halaman?", answer: "Bisa. Pilih tata letak «Berulang» untuk mengubin teks di seluruh halaman, atau «Sekali, di tengah» untuk satu cap." },
      { question: "Bisakah watermark dihapus nanti?", answer: "Watermark disimpan sebagai objek watermark standar, sehingga alat yang mengenali watermark — termasuk Hapus Watermark TAMPDF — dapat menghapusnya. Ini bukan fitur keamanan." },
      { question: "Apakah PDF saya diunggah ke suatu tempat?", answer: "Tidak. Watermark diterapkan secara lokal di browser Anda." },
    ],
  },
  "remove-watermark": {
    name: "Hapus Watermark",
    actionLabel: "Hapus watermark",
    shortDescription: "Hapus watermark yang ditambahkan sebagai objek watermark pada PDF.",
    longDescription: [
      "Hapus Watermark menemukan dan menghapus watermark yang ditambahkan sebagai objek watermark — jenis yang dibuat oleh Adobe Acrobat, TAMPDF, dan sebagian besar editor PDF — bersama anotasi watermark dan lapisan bernama «Watermark». Sisa setiap halaman tetap persis seperti sebelumnya.",
      "Watermark yang merupakan bagian dari gambar yang dipindai atau digabungkan ke dalam teks halaman biasa tidak memiliki penanda yang membedakannya dari konten asli, sehingga tidak dapat dihapus secara otomatis. Harap hanya hapus watermark dari dokumen yang Anda memiliki hak untuk mengeditnya. Pemrosesan terjadi di browser Anda, sehingga file Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Watermark mana yang bisa dihapus?", answer: "Watermark yang ditambahkan sebagai objek watermark, anotasi watermark, atau lapisan bernama «Watermark» — termasuk yang dibuat oleh Adobe Acrobat dan alat Tambah Watermark TAMPDF." },
      { question: "Mengapa watermark di file saya tidak dihapus?", answer: "Jika watermark adalah bagian dari gambar halaman yang dipindai atau telah diratakan ke dalam teks halaman, watermark tersebut tidak dapat dipisahkan dari konten asli tanpa merusak halaman." },
      { question: "Apakah menghapus watermark memengaruhi sisa halaman?", answer: "Tidak. Hanya konten yang ditandai sebagai watermark yang dihapus; teks, gambar, dan tata letak tidak terpengaruh." },
      { question: "Apakah file saya diunggah?", answer: "Tidak. PDF diproses secara lokal di browser Anda." },
    ],
  },
  "pdf-to-images": {
    name: "PDF ke Gambar",
    actionLabel: "Konversi ke gambar",
    shortDescription: "Ubah setiap halaman PDF menjadi gambar PNG, JPG, atau WEBP, diunduh sebagai ZIP.",
    longDescription: [
      "PDF ke Gambar merender setiap halaman PDF Anda sebagai gambar terpisah dalam format pilihan Anda: PNG untuk teks paling tajam, JPG untuk file terkecil, atau WEBP untuk gambar modern yang ringkas. Pilih resolusi dan setiap halaman diekspor lalu digabungkan dalam satu .zip.",
      "Rendering terjadi langsung di browser Anda menggunakan PDF.js, sehingga dokumen Anda tidak pernah diunggah ke server.",
    ],
    faq: [
      { question: "Format gambar apa yang harus saya pilih?", answer: "PNG menjaga teks dan gambar garis tetap sangat tajam. JPG menghasilkan file yang lebih kecil dan cocok untuk foto. WEBP menawarkan keseimbangan yang baik untuk penggunaan di web." },
      { question: "Berapa resolusi gambarnya?", answer: "Standar merender pada 108 dpi, Tinggi pada 144 dpi, dan Maksimum pada 216 dpi — cukup tinggi untuk mencetak sebagian besar dokumen." },
      { question: "Bagaimana cara mendapatkan semua halaman sekaligus?", answer: "Setiap halaman dikonversi dan dikemas dalam satu file .zip. PDF satu halaman diunduh sebagai satu gambar." },
      { question: "Apakah PDF saya diunggah?", answer: "Tidak. Halaman dirender secara lokal di browser Anda." },
    ],
  },
  "images-to-pdf": {
    name: "Gambar ke PDF",
    actionLabel: "Buat PDF",
    shortDescription: "Gabungkan gambar JPG, PNG, dan WEBP menjadi satu PDF, dalam urutan pilihan Anda.",
    longDescription: [
      "Gambar ke PDF mengubah sekumpulan foto, pindaian, atau tangkapan layar menjadi satu dokumen PDF. Tambahkan gambar JPG, PNG, atau WEBP, seret thumbnail ke urutan yang diinginkan, dan pilih halaman A4 atau Letter (dengan orientasi otomatis) atau halaman yang sesuai dengan setiap gambar.",
      "Tambahkan margin untuk tampilan cetak yang bersih. Area transparan ditempatkan pada putih, dan seluruh konversi berjalan di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Bisakah saya mengubah urutan gambar?", answer: "Bisa. Seret thumbnail atau gunakan tombol panah untuk mengatur urutan halaman sebelum membuat PDF." },
      { question: "Format gambar apa yang didukung?", answer: "JPG, PNG, dan WEBP. Anda dapat mencampur format dalam PDF yang sama." },
      { question: "Ukuran halaman apa yang akan digunakan PDF?", answer: "Pilih A4 atau Letter — setiap gambar disesuaikan dengan halaman dan diputar ke lanskap bila diperlukan — atau «Sesuaikan dengan gambar» agar setiap halaman persis seukuran gambarnya." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. PDF dibuat secara lokal di browser Anda." },
    ],
  },
  "flip-pdf": {
    name: "Balik PDF",
    actionLabel: "Balik PDF",
    shortDescription: "Cerminkan halaman PDF secara horizontal atau vertikal.",
    longDescription: [
      "Balik PDF mencerminkan setiap halaman dokumen Anda — dari kiri ke kanan atau atas ke bawah. Berguna untuk mencetak transfer setrika, memperbaiki pindaian yang dibuat dari sisi yang salah, atau menyiapkan karya seni cermin.",
      "Pratinjau hasilnya pada halaman pertama Anda sebelum menerapkannya. Pembalikan juga menghormati halaman yang diputar, dan semuanya berjalan di browser Anda, sehingga file Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apa perbedaan antara membalik dan memutar?", answer: "Memutar memutar halaman dalam langkah 90°. Membalik membuat gambar cermin, sehingga teks terbaca terbalik — itulah yang Anda butuhkan untuk transfer dan beberapa pekerjaan cetak." },
      { question: "Bisakah saya membalik hanya satu halaman?", answer: "Pembalikan berlaku untuk semua halaman. Untuk membalik satu halaman saja, ekstrak dulu dengan Ekstrak Halaman PDF." },
      { question: "Apakah membalik mengurangi kualitas?", answer: "Tidak. Halaman ditransformasikan, bukan dirender ulang, sehingga teks dan grafik tetap setajam aslinya." },
      { question: "Apakah PDF saya diunggah?", answer: "Tidak. Pembalikan terjadi secara lokal di browser Anda." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Edit Metadata PDF",
    actionLabel: "Edit metadata",
    shortDescription: "Ubah judul, penulis, subjek, dan kata kunci PDF.",
    longDescription: [
      "Edit Metadata PDF memungkinkan Anda melihat dan mengubah properti dokumen yang tersimpan di dalam PDF — judul, penulis, subjek, kata kunci, pembuat, dan produser. Ini adalah informasi yang ditampilkan pembaca PDF, mesin pencari, dan pengelola file tentang dokumen Anda.",
      "Biarkan kolom kosong untuk menghapusnya. Konten halaman tidak disentuh, dan seluruh pengeditan berjalan di browser Anda, sehingga file Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Mengapa mengedit metadata PDF?", answer: "Judul dan penulis yang jelas membuat dokumen lebih mudah ditemukan dan terlihat lebih profesional saat dibagikan, dan mesin pencari dapat menggunakannya saat mengindeks PDF." },
      { question: "Apakah mengedit metadata akan mengubah konten dokumen?", answer: "Tidak. Hanya properti dokumen yang berubah; halaman, teks, dan gambar tetap persis sama." },
      { question: "Bagaimana cara menghapus properti?", answer: "Kosongkan kolom dan simpan. Kolom kosong akan dihapus dari file." },
      { question: "Apakah PDF saya diunggah?", answer: "Tidak. Properti diedit secara lokal di browser Anda." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Hapus Metadata PDF",
    actionLabel: "Hapus metadata",
    shortDescription: "Hapus nama penulis, judul, perangkat lunak, dan properti tersembunyi lain dari PDF sebelum dibagikan.",
    longDescription: [
      "Hapus Metadata PDF membersihkan properti dokumen dan data tersembunyi yang dibawa PDF — penulis, judul, subjek, kata kunci, perangkat lunak yang digunakan untuk membuatnya, tanggal pembuatan, dan paket metadata XMP yang disematkan.",
      "Ini adalah langkah privasi cepat sebelum membagikan file secara publik. Konten halaman tidak terpengaruh, dan pembersihan berjalan di browser Anda, sehingga file Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Informasi apa yang dihapus?", answer: "Judul, penulis, subjek, kata kunci, perangkat lunak pembuat dan produser, tanggal pembuatan dan modifikasi, metadata XMP yang disematkan, dan data pribadi aplikasi." },
      { question: "Apakah ini mengubah tampilan dokumen?", answer: "Tidak. Hanya properti tersembunyi yang dihapus; setiap halaman terlihat persis sama." },
      { question: "Apakah ini menghapus informasi pribadi yang tercetak di halaman?", answer: "Tidak. Ini hanya menghapus metadata. Nama atau detail yang tercetak di halaman tetap terlihat." },
      { question: "Apakah PDF saya diunggah?", answer: "Tidak. File dibersihkan secara lokal di browser Anda." },
    ],
  },
  "pdf-info": {
    name: "Info PDF",
    actionLabel: "Periksa PDF",
    shortDescription: "Lihat jumlah halaman, ukuran halaman, versi, dan properti PDF sekilas.",
    longDescription: [
      "Info PDF membaca PDF dan menampilkan isinya: jumlah halaman, ukuran setiap halaman dalam milimeter dengan nama kertas seperti A4 atau Letter, versi PDF, apakah dienkripsi atau berisi formulir yang dapat diisi, serta judul, penulis, perangkat lunak, dan tanggalnya.",
      "Berguna sebelum mencetak, mengirimkan, atau mengonversi file. Dokumen hanya dibaca — tidak pernah diubah — dan semuanya terjadi di browser Anda, sehingga tidak pernah diunggah.",
    ],
    faq: [
      { question: "Detail apa yang ditampilkan Info PDF?", answer: "Jumlah halaman, ukuran halaman dengan nama kertas, versi PDF, ukuran file, enkripsi, formulir yang dapat diisi, tampilan web cepat, dan properti dokumen seperti judul, penulis, dan tanggal pembuatan." },
      { question: "Apakah Info PDF mengubah file saya?", answer: "Tidak. PDF hanya dibaca; tidak ada yang dimodifikasi atau disimpan." },
      { question: "Bisakah saya memeriksa PDF yang dilindungi kata sandi?", answer: "File yang membutuhkan kata sandi untuk dibuka tidak dapat dibaca tanpa kata sandi tersebut. File dengan hanya pembatasan pengeditan ditampilkan sebagai terenkripsi." },
      { question: "Apakah PDF saya diunggah?", answer: "Tidak. Dibaca secara lokal di browser Anda." },
    ],
  },
  "resize-image": {
    name: "Ubah Ukuran Gambar",
    actionLabel: "Ubah ukuran gambar",
    shortDescription: "Ubah lebar dan tinggi gambar JPG, PNG, dan WEBP — dengan persentase atau piksel pasti.",
    longDescription: [
      "Ubah Ukuran Gambar mengubah dimensi foto dan grafik Anda. Skalakan dengan persentase, atau ketik lebar dan tinggi yang tepat dengan rasio aspek terkunci agar tidak terlihat meregang. Ubah ukuran beberapa gambar sekaligus dan unduh bersama dalam .zip.",
      "Gambar mempertahankan format aslinya, dan penghalusan berkualitas tinggi menjaga gambar yang diperkecil tetap tajam. Semuanya berjalan di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apakah mengubah ukuran akan membuat gambar saya buram?", answer: "Memperkecil gambar akan menjaganya tetap tajam. Memperbesar melebihi ukuran aslinya tidak dapat menambah detail, sehingga peningkatan besar bisa terlihat lembut." },
      { question: "Bisakah saya mengubah ukuran beberapa gambar sekaligus?", answer: "Bisa. Tambahkan hingga 20 gambar; dengan rasio aspek terkunci, masing-masing mempertahankan proporsinya sendiri pada lebar yang Anda atur." },
      { question: "Format apa yang akan dimiliki gambar yang diubah ukurannya?", answer: "Sama seperti aslinya — JPG tetap JPG, PNG tetap PNG, dan WEBP tetap WEBP di mana browser Anda mendukungnya." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Perubahan ukuran terjadi secara lokal di browser Anda." },
    ],
  },
  "crop-image": {
    name: "Pangkas Gambar",
    actionLabel: "Pangkas gambar",
    shortDescription: "Pangkas gambar ke area yang Anda inginkan dengan bingkai pangkas yang bisa digeser.",
    longDescription: [
      "Pangkas Gambar menghilangkan tepi yang tidak diinginkan dari foto atau tangkapan layar. Seret bingkai pangkas atau sudutnya di atas pratinjau — atau sesuaikan setiap tepi dengan penggeser — dan lihat ukuran pasti hasilnya dalam piksel.",
      "Gambar yang dipangkas mempertahankan format dan kualitas aslinya, dan seluruh proses berjalan di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Bisakah saya memangkas ke dimensi yang tepat?", answer: "Sesuaikan setiap tepi dengan penggeser dan lihat ukuran hasil diperbarui dalam piksel seiring Anda melakukannya." },
      { question: "Apakah pemangkasan mengurangi kualitas gambar?", answer: "Tidak. Piksel yang Anda simpan disalin apa adanya; hanya bagian di luar bingkai yang dihapus." },
      { question: "Format apa yang bisa saya pangkas?", answer: "JPG, PNG, dan WEBP. Hasilnya mempertahankan format yang sama dengan aslinya." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Pemangkasan terjadi secara lokal di browser Anda." },
    ],
  },
  "flip-image": {
    name: "Balik Gambar",
    actionLabel: "Balik gambar",
    shortDescription: "Cerminkan gambar secara horizontal atau vertikal — satu per satu atau sekaligus.",
    longDescription: [
      "Balik Gambar membuat gambar cermin dari foto Anda: kiri ke kanan, atau atas ke bawah. Berguna untuk memperbaiki swafoto yang diambil dengan kamera depan, membuat pantulan, atau menyiapkan desain untuk transfer cetak.",
      "Balikkan beberapa gambar sekaligus, pratinjau hasilnya secara instan, dan unduh dalam format aslinya. Semuanya berjalan di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apa perbedaan antara membalik dan memutar?", answer: "Memutar memutar gambar dalam langkah 90°. Membalik mencerminkannya, seperti melihat ke cermin." },
      { question: "Bisakah saya membalik beberapa gambar sekaligus?", answer: "Bisa. Tambahkan hingga 20 gambar dan semuanya dibalik dengan cara yang sama, lalu diunduh bersama sebagai .zip." },
      { question: "Apakah membalik mengurangi kualitas?", answer: "Tidak ada kehilangan yang terlihat — PNG tetap tanpa kehilangan, dan JPG serta WEBP disimpan dengan kualitas tinggi." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Pembalikan terjadi secara lokal di browser Anda." },
    ],
  },
  "png-to-jpg": {
    name: "PNG ke JPG",
    actionLabel: "Konversi ke JPG",
    shortDescription: "Ubah gambar PNG menjadi JPG agar ukurannya lebih kecil dan lebih kompatibel.",
    longDescription: [
      "PNG ke JPG mengubah gambar PNG Anda menjadi file JPG, yang biasanya jauh lebih kecil — ideal untuk foto, lampiran email, dan formulir unggah yang hanya menerima JPG. Konversikan beberapa gambar sekaligus dan sesuaikan kualitas untuk menyeimbangkan ukuran dan ketajaman.",
      "JPG tidak mendukung transparansi, sehingga area transparan diisi dengan putih. Konversi berjalan sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Mengapa mengonversi PNG ke JPG?", answer: "File JPG biasanya jauh lebih kecil dari PNG untuk foto dan diterima hampir di mana saja, dari email hingga formulir online." },
      { question: "Apa yang terjadi pada latar belakang transparan?", answer: "JPG tidak memiliki transparansi, sehingga area transparan diisi dengan putih." },
      { question: "Bisakah saya mengonversi banyak PNG sekaligus?", answer: "Bisa. Tambahkan hingga 30 gambar; semuanya dikonversi bersama dan diunduh sebagai .zip." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Konversi terjadi secara lokal di browser Anda." },
    ],
  },
  "jpg-to-png": {
    name: "JPG ke PNG",
    actionLabel: "Konversi ke PNG",
    shortDescription: "Ubah foto JPG menjadi gambar PNG tanpa kehilangan kualitas.",
    longDescription: [
      "JPG ke PNG mengubah gambar JPG atau JPEG Anda menjadi format PNG. PNG tanpa kehilangan, sehingga gambar tidak akan kehilangan kualitas lebih lanjut saat Anda mengedit dan menyimpannya lagi — berguna untuk grafik yang akan terus Anda kerjakan, atau untuk alat dan platform yang memerlukan PNG.",
      "Konversikan beberapa gambar sekaligus dan unduh bersama. Konversi berjalan sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apakah mengonversi JPG ke PNG akan meningkatkan kualitas?", answer: "Tidak — detail yang sudah hilang di JPG tidak dapat dipulihkan. Namun PNG mencegah kehilangan lebih lanjut saat Anda mengedit dan menyimpan lagi." },
      { question: "Mengapa PNG lebih besar dari JPG?", answer: "PNG menyimpan setiap piksel tanpa kompresi lossy, sehingga foto biasanya menjadi lebih besar. Itulah kompromi untuk kualitas tanpa kehilangan." },
      { question: "Bisakah saya mengonversi beberapa JPG sekaligus?", answer: "Bisa. Tambahkan hingga 30 gambar dan unduh sebagai .zip." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Konversi terjadi secara lokal di browser Anda." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP ke JPG",
    actionLabel: "Konversi ke JPG",
    shortDescription: "Ubah gambar WEBP menjadi JPG agar dapat dibuka di aplikasi atau situs mana pun.",
    longDescription: [
      "WEBP ke JPG mengubah gambar WEBP modern — umum di situs web — menjadi JPG, format yang didukung hampir semua aplikasi, perangkat, dan formulir unggah. Konversikan satu gambar atau banyak sekaligus, dan sesuaikan kualitas untuk menyeimbangkan ukuran dan ketajaman.",
      "Area transparan diisi dengan putih, karena JPG tidak mendukung transparansi. Konversi berjalan sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Mengapa mengonversi WEBP ke JPG?", answer: "Beberapa aplikasi, editor, dan formulir unggah lama tidak menerima WEBP. JPG bekerja hampir di mana saja." },
      { question: "Apakah saya akan kehilangan kualitas?", answer: "Pada kualitas default, perbedaannya sulit dilihat. Tingkatkan penggeser kualitas untuk hasil paling tajam." },
      { question: "Bisakah saya mengonversi beberapa gambar WEBP sekaligus?", answer: "Bisa. Tambahkan hingga 30 gambar dan unduh sebagai .zip." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Konversi terjadi secara lokal di browser Anda." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG ke WEBP",
    actionLabel: "Konversi ke WEBP",
    shortDescription: "Ubah foto JPG menjadi WEBP untuk gambar yang lebih kecil dan lebih cepat dimuat di web.",
    longDescription: [
      "JPG ke WEBP mengubah gambar JPG Anda menjadi WEBP, format modern yang biasanya menghasilkan file jauh lebih kecil dengan kualitas visual yang mirip — bagus untuk mempercepat situs web dan menghemat penyimpanan.",
      "Sesuaikan kualitas untuk menemukan keseimbangan yang tepat dan konversikan banyak gambar sekaligus. Konversi berjalan sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah. Membuat file WEBP memerlukan versi terbaru Chrome, Edge, atau Firefox.",
    ],
    faq: [
      { question: "Apakah WEBP lebih kecil dari JPG?", answer: "Biasanya ya — WEBP sering menghemat ruang yang signifikan dengan kualitas serupa, yang membantu halaman dimuat lebih cepat." },
      { question: "Apakah semua browser mendukung WEBP?", answer: "Semua browser modern dapat menampilkan WEBP. Membuat file WEBP di sini memerlukan versi terbaru Chrome, Edge, atau Firefox." },
      { question: "Bisakah saya mengonversi beberapa JPG sekaligus?", answer: "Bisa. Tambahkan hingga 30 gambar dan unduh sebagai .zip." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Konversi terjadi secara lokal di browser Anda." },
    ],
  },
  "webp-to-png": {
    name: "WEBP ke PNG",
    actionLabel: "Konversi ke PNG",
    shortDescription: "Ubah gambar WEBP menjadi PNG sambil mempertahankan transparansi.",
    longDescription: [
      "WEBP ke PNG mengubah gambar WEBP menjadi PNG, format tanpa kehilangan yang didukung oleh setiap editor gambar. Transparansi dipertahankan, sehingga logo, ikon, dan grafik yang dipotong mempertahankan latar belakang jernihnya.",
      "Konversikan beberapa gambar sekaligus dan unduh bersama. Konversi berjalan sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah.",
    ],
    faq: [
      { question: "Apakah transparansi dipertahankan?", answer: "Ya. PNG mendukung transparansi, sehingga area transparan dalam gambar WEBP Anda tetap transparan." },
      { question: "Mengapa mengonversi WEBP ke PNG?", answer: "PNG terbuka di setiap editor dan alat desain serta tidak akan kehilangan kualitas saat Anda mengedit dan menyimpannya lagi." },
      { question: "Bisakah saya mengonversi beberapa file WEBP sekaligus?", answer: "Bisa. Tambahkan hingga 30 gambar dan unduh sebagai .zip." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Konversi terjadi secara lokal di browser Anda." },
    ],
  },
  "png-to-webp": {
    name: "PNG ke WEBP",
    actionLabel: "Konversi ke WEBP",
    shortDescription: "Ubah gambar PNG menjadi WEBP untuk file yang lebih kecil dan tetap mempertahankan transparansi.",
    longDescription: [
      "PNG ke WEBP mengubah gambar PNG Anda menjadi WEBP, yang biasanya membuat file jauh lebih kecil sambil mempertahankan transparansi — ideal untuk grafik situs web, ikon, dan tangkapan layar.",
      "Pilih kualitas, konversikan banyak gambar sekaligus, dan unduh bersama. Konversi berjalan sepenuhnya di browser Anda, sehingga gambar Anda tidak pernah diunggah. Membuat file WEBP memerlukan versi terbaru Chrome, Edge, atau Firefox.",
    ],
    faq: [
      { question: "Apakah WEBP mempertahankan transparansi?", answer: "Ya. WEBP mendukung transparansi, sehingga area PNG yang transparan tetap transparan." },
      { question: "Seberapa kecil gambar saya akan menjadi?", answer: "Bervariasi, tetapi file WEBP sering kali jauh lebih kecil dari gambar yang sama yang disimpan sebagai PNG." },
      { question: "Bisakah saya mengonversi beberapa PNG sekaligus?", answer: "Bisa. Tambahkan hingga 30 gambar dan unduh sebagai .zip." },
      { question: "Apakah gambar saya diunggah?", answer: "Tidak. Konversi terjadi secara lokal di browser Anda." },
    ],
  },
};
