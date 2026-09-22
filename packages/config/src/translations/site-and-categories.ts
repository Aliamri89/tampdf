import type { Locale } from "../locale";
import type { ToolCategoryId } from "../types";

interface SiteTranslation {
  tagline: string;
  description: string;
}

interface CategoryTranslation {
  name: string;
  description: string;
}

/**
 * Site tagline/meta-description and the two category labels, for every
 * locale beyond English/Arabic (which have their own dedicated files).
 * Small enough to keep every language together in one place instead of 22
 * near-empty files.
 */
export const siteByLocale: Partial<Record<Locale, SiteTranslation>> = {
  es: {
    tagline: "Todas tus herramientas PDF en un solo lugar",
    description: "Herramientas PDF gratuitas, rápidas y fáciles de usar — sin instalaciones, sin registros. Todo funciona de forma segura en tu navegador.",
  },
  fr: {
    tagline: "Tous vos outils PDF au même endroit",
    description: "Des outils PDF gratuits, rapides et faciles à utiliser — sans installation, sans inscription. Tout fonctionne en toute sécurité dans votre navigateur.",
  },
  de: {
    tagline: "Alle deine PDF-Tools an einem Ort",
    description: "Kostenlose, schnelle und einfache PDF-Tools — keine Installation, keine Anmeldung. Alles läuft sicher in deinem Browser.",
  },
  it: {
    tagline: "Tutti i tuoi strumenti PDF in un unico posto",
    description: "Strumenti PDF gratuiti, veloci e facili da usare — senza installazioni, senza registrazione. Tutto funziona in modo sicuro nel tuo browser.",
  },
  pt: {
    tagline: "Todas as suas ferramentas de PDF em um só lugar",
    description: "Ferramentas de PDF gratuitas, rápidas e fáceis de usar — sem instalação, sem cadastro. Tudo funciona com segurança no seu navegador.",
  },
  nl: {
    tagline: "Al je PDF-tools op één plek",
    description: "Gratis, snelle en eenvoudige PDF-tools — geen installatie, geen registratie. Alles werkt veilig in je browser.",
  },
  tr: {
    tagline: "Tüm PDF Araçlarınız Tek Yerde",
    description: "Ücretsiz, hızlı ve kullanımı kolay PDF araçları — kurulum yok, kayıt yok. Her şey tarayıcınızda güvenle çalışır.",
  },
  ru: {
    tagline: "Все ваши PDF-инструменты в одном месте",
    description: "Бесплатные, быстрые и простые инструменты для PDF — без установки, без регистрации. Всё работает безопасно прямо в вашем браузере.",
  },
  zh: {
    tagline: "所有 PDF 工具，一站搞定",
    description: "免费、快速、易用的 PDF 工具 — 无需安装，无需注册。一切都在您的浏览器中安全运行。",
  },
  ja: {
    tagline: "すべてのPDFツールを1か所に",
    description: "無料・高速・簡単に使えるPDFツール — インストール不要、登録不要。すべてブラウザ内で安全に動作します。",
  },
  ko: {
    tagline: "모든 PDF 도구를 한곳에서",
    description: "무료로 빠르고 사용하기 쉬운 PDF 도구 — 설치도, 가입도 필요 없습니다. 모든 작업이 브라우저에서 안전하게 처리됩니다.",
  },
  hi: {
    tagline: "आपके सभी PDF टूल एक ही जगह",
    description: "मुफ़्त, तेज़ और उपयोग में आसान PDF टूल — कोई इंस्टॉलेशन नहीं, कोई साइनअप नहीं। सब कुछ आपके ब्राउज़र में सुरक्षित रूप से चलता है।",
  },
  id: {
    tagline: "Semua Alat PDF Anda dalam Satu Tempat",
    description: "Alat PDF gratis, cepat, dan mudah digunakan — tanpa instalasi, tanpa pendaftaran. Semuanya berjalan dengan aman di browser Anda.",
  },
  vi: {
    tagline: "Mọi công cụ PDF trong một nơi",
    description: "Công cụ PDF miễn phí, nhanh và dễ sử dụng — không cần cài đặt, không cần đăng ký. Mọi thứ hoạt động an toàn ngay trong trình duyệt của bạn.",
  },
  th: {
    tagline: "เครื่องมือ PDF ทั้งหมดของคุณในที่เดียว",
    description: "เครื่องมือ PDF ฟรี รวดเร็ว และใช้งานง่าย — ไม่ต้องติดตั้ง ไม่ต้องสมัครสมาชิก ทุกอย่างทำงานอย่างปลอดภัยในเบราว์เซอร์ของคุณ",
  },
  pl: {
    tagline: "Wszystkie Twoje narzędzia PDF w jednym miejscu",
    description: "Darmowe, szybkie i łatwe w użyciu narzędzia PDF — bez instalacji, bez rejestracji. Wszystko działa bezpiecznie w Twojej przeglądarce.",
  },
  sv: {
    tagline: "Alla dina PDF-verktyg på ett ställe",
    description: "Gratis, snabba och lättanvända PDF-verktyg — ingen installation, ingen registrering. Allt körs säkert i din webbläsare.",
  },
  da: {
    tagline: "Alle dine PDF-værktøjer ét sted",
    description: "Gratis, hurtige og nemme PDF-værktøjer — ingen installation, ingen registrering. Alt kører sikkert i din browser.",
  },
  no: {
    tagline: "Alle PDF-verktøyene dine på ett sted",
    description: "Gratis, raske og enkle PDF-verktøy — ingen installasjon, ingen registrering. Alt kjører sikkert i nettleseren din.",
  },
  fi: {
    tagline: "Kaikki PDF-työkalusi yhdessä paikassa",
    description: "Ilmaisia, nopeita ja helppokäyttöisiä PDF-työkaluja — ei asennusta, ei rekisteröitymistä. Kaikki toimii turvallisesti selaimessasi.",
  },
  cs: {
    tagline: "Všechny vaše nástroje pro PDF na jednom místě",
    description: "Bezplatné, rychlé a snadno použitelné nástroje pro PDF — žádná instalace, žádná registrace. Vše běží bezpečně přímo ve vašem prohlížeči.",
  },
  el: {
    tagline: "Όλα τα εργαλεία PDF σας σε ένα μέρος",
    description: "Δωρεάν, γρήγορα και εύχρηστα εργαλεία PDF — χωρίς εγκατάσταση, χωρίς εγγραφή. Όλα λειτουργούν με ασφάλεια μέσα στο πρόγραμμα περιήγησής σας.",
  },
};

export const categoriesByLocale: Partial<Record<Locale, Record<ToolCategoryId, CategoryTranslation>>> = {
  es: {
    pdf: { name: "Herramientas PDF", description: "Combina, divide y comprime archivos PDF en segundos." },
    image: { name: "Herramientas de imagen", description: "Comprime y convierte imágenes sin perder calidad." },
  },
  fr: {
    pdf: { name: "Outils PDF", description: "Fusionnez, divisez et compressez des fichiers PDF en quelques secondes." },
    image: { name: "Outils d'image", description: "Compressez et convertissez des images sans perte de qualité." },
  },
  de: {
    pdf: { name: "PDF-Tools", description: "PDF-Dateien in Sekunden zusammenführen, teilen und komprimieren." },
    image: { name: "Bild-Tools", description: "Bilder komprimieren und konvertieren, ohne Qualitätsverlust." },
  },
  it: {
    pdf: { name: "Strumenti PDF", description: "Unisci, dividi e comprimi file PDF in pochi secondi." },
    image: { name: "Strumenti immagine", description: "Comprimi e converti immagini senza perdere qualità." },
  },
  pt: {
    pdf: { name: "Ferramentas de PDF", description: "Una, divida e comprima arquivos PDF em segundos." },
    image: { name: "Ferramentas de imagem", description: "Comprima e converta imagens sem perder qualidade." },
  },
  nl: {
    pdf: { name: "PDF-tools", description: "PDF-bestanden samenvoegen, splitsen en comprimeren in seconden." },
    image: { name: "Afbeeldingstools", description: "Afbeeldingen comprimeren en converteren zonder kwaliteitsverlies." },
  },
  tr: {
    pdf: { name: "PDF Araçları", description: "PDF dosyalarını saniyeler içinde birleştirin, bölün ve sıkıştırın." },
    image: { name: "Görsel Araçları", description: "Görselleri kalite kaybı olmadan sıkıştırın ve dönüştürün." },
  },
  ru: {
    pdf: { name: "Инструменты PDF", description: "Объединяйте, разделяйте и сжимайте файлы PDF за секунды." },
    image: { name: "Инструменты для изображений", description: "Сжимайте и конвертируйте изображения без потери качества." },
  },
  zh: {
    pdf: { name: "PDF 工具", description: "几秒钟内合并、拆分和压缩 PDF 文件。" },
    image: { name: "图片工具", description: "压缩和转换图片，不损失画质。" },
  },
  ja: {
    pdf: { name: "PDFツール", description: "PDFファイルを数秒で結合、分割、圧縮。" },
    image: { name: "画像ツール", description: "画質を落とさずに画像を圧縮・変換。" },
  },
  ko: {
    pdf: { name: "PDF 도구", description: "몇 초 만에 PDF 파일을 병합, 분할, 압축하세요." },
    image: { name: "이미지 도구", description: "화질 손실 없이 이미지를 압축하고 변환하세요." },
  },
  hi: {
    pdf: { name: "PDF टूल", description: "सेकंडों में PDF फ़ाइलों को मर्ज, स्प्लिट और कंप्रेस करें।" },
    image: { name: "इमेज टूल", description: "गुणवत्ता खोए बिना इमेज को कंप्रेस और कन्वर्ट करें।" },
  },
  id: {
    pdf: { name: "Alat PDF", description: "Gabungkan, pisahkan, dan kompres file PDF dalam hitungan detik." },
    image: { name: "Alat Gambar", description: "Kompres dan konversi gambar tanpa kehilangan kualitas." },
  },
  vi: {
    pdf: { name: "Công cụ PDF", description: "Gộp, tách và nén tệp PDF chỉ trong vài giây." },
    image: { name: "Công cụ hình ảnh", description: "Nén và chuyển đổi hình ảnh mà không mất chất lượng." },
  },
  th: {
    pdf: { name: "เครื่องมือ PDF", description: "รวม แยก และบีบอัดไฟล์ PDF ได้ในไม่กี่วินาที" },
    image: { name: "เครื่องมือรูปภาพ", description: "บีบอัดและแปลงรูปภาพโดยไม่สูญเสียคุณภาพ" },
  },
  pl: {
    pdf: { name: "Narzędzia PDF", description: "Łącz, dziel i kompresuj pliki PDF w kilka sekund." },
    image: { name: "Narzędzia do obrazów", description: "Kompresuj i konwertuj obrazy bez utraty jakości." },
  },
  sv: {
    pdf: { name: "PDF-verktyg", description: "Slå ihop, dela och komprimera PDF-filer på några sekunder." },
    image: { name: "Bildverktyg", description: "Komprimera och konvertera bilder utan att förlora kvalitet." },
  },
  da: {
    pdf: { name: "PDF-værktøjer", description: "Flet, opdel og komprimer PDF-filer på få sekunder." },
    image: { name: "Billedværktøjer", description: "Komprimer og konverter billeder uden at miste kvalitet." },
  },
  no: {
    pdf: { name: "PDF-verktøy", description: "Slå sammen, del opp og komprimer PDF-filer på sekunder." },
    image: { name: "Bildeverktøy", description: "Komprimer og konverter bilder uten å miste kvalitet." },
  },
  fi: {
    pdf: { name: "PDF-työkalut", description: "Yhdistä, jaa ja pakkaa PDF-tiedostoja sekunneissa." },
    image: { name: "Kuvatyökalut", description: "Pakkaa ja muunna kuvia laadusta tinkimättä." },
  },
  cs: {
    pdf: { name: "Nástroje pro PDF", description: "Slučujte, dělte a komprimujte soubory PDF během několika sekund." },
    image: { name: "Nástroje pro obrázky", description: "Komprimujte a konvertujte obrázky beze ztráty kvality." },
  },
  el: {
    pdf: { name: "Εργαλεία PDF", description: "Συγχωνεύστε, διαχωρίστε και συμπιέστε αρχεία PDF σε δευτερόλεπτα." },
    image: { name: "Εργαλεία εικόνας", description: "Συμπιέστε και μετατρέψτε εικόνες χωρίς απώλεια ποιότητας." },
  },
};
