import type { ToolTranslationOverride } from "./tools-ar";

export const toolsTr: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "PDF Sıkıştır",
    actionLabel: "PDF'yi Sıkıştır",
    shortDescription: "Tarayıcınızda, paylaşımı ve yüklemeyi kolaylaştırmak için PDF dosya boyutunu küçültün.",
    longDescription: [
      "PDF Sıkıştır, gömülü görselleri yeniden kodlayıp gereksiz verileri kaldırarak dosya boyutunu küçültür, böylece belgenizi e-postayla göndermek, yüklemek veya saklamak daha kolay olur.",
      "Dosya boyutu ile görsel kaliteyi dengelemek için bir sıkıştırma düzeyi seçin ve indirmeden önce öncesi/sonrası boyutu karşılaştırın.",
    ],
    faq: [
      { question: "PDF'im ne kadar küçülecek?", answer: "İçeriğe bağlıdır. Büyük gömülü görseller içeren PDF'ler genellikle en fazla küçülür, bazen %50-90 oranında. Metin ağırlıklı PDF'ler daha az sıkıştırılır çünkü optimize edilecek daha az şey vardır." },
      { question: "Sıkıştırma PDF'imi bulanıklaştırır mı?", answer: "Varsayılan ayarda kalite kaybı minimaldir. En güçlü sıkıştırma düzeyini seçerseniz, görseller daha agresif şekilde küçültülür, bu da yakınlaştırıldığında netliği azaltabilir." },
      { question: "Sıkıştırma TAMPDF'in sunucularında mı yapılıyor?", answer: "Hayır. PDF Sıkıştır tarayıcınızda yerel olarak çalışır, dolayısıyla dosyanız hiçbir yere yüklenmez." },
      { question: "Şifre korumalı bir PDF'i sıkıştırabilir miyim?", answer: "Şu anda hayır. Önce başka bir araçla şifre korumasını kaldırın, sonra dosyayı sıkıştırın." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF'den JPG'ye",
    actionLabel: "JPG'ye Dönüştür",
    shortDescription: "PDF'in her sayfasını yüksek kaliteli bir JPG görseline dönüştürün.",
    longDescription: [
      "PDF'den JPG'ye, PDF'inizin her sayfasını paylaşmaya, düzenlemeye veya bir sunuma eklemeye hazır ayrı bir JPG görseline dönüştürür. Tek sayfalık bir PDF tek bir JPG olarak indirilir; çok sayfalı PDF'ler bir .zip dosyasında toplanır.",
      "Dönüştürme, PDF.js kullanılarak doğrudan tarayıcınızda gerçekleşir, dolayısıyla belgeniz bir sunucuya asla yüklenmez.",
    ],
    faq: [
      { question: "PDF'imin birden fazla sayfası varsa ne olur?", answer: "Her sayfa kendi JPG görseline dönüşür. Birden fazlaysa, indirmek için tek bir .zip dosyasında paketlenirler." },
      { question: "Görseller ne kadar net olacak?", answer: "Sayfalar, ekranlar ve çoğu baskı ihtiyacı için uygun yüksek çözünürlükte oluşturulur. Netlik ile dosya boyutunu dengelemek için kalite düzeyini seçin." },
      { question: "PDF'im bir yere yükleniyor mu?", answer: "Hayır. PDF'den JPG'ye her sayfayı tarayıcınızda yerel olarak işler, dolayısıyla dosyanız cihazınızdan hiç ayrılmaz." },
      { question: "Tüm belge yerine sadece bir sayfayı dönüştürebilir miyim?", answer: "Şu anda her sayfa dönüştürülür. Sadece bir görsele ihtiyacınız varsa, önce PDF Birleştir veya bir PDF okuyucu kullanarak tek bir sayfayı ayırın." },
    ],
  },
  "merge-pdf": {
    name: "PDF Birleştir",
    actionLabel: "PDF'leri Birleştir",
    shortDescription: "Birden fazla PDF dosyasını, seçtiğiniz sırayla tek bir belgede birleştirin.",
    longDescription: [
      "PDF Birleştir, hiçbir şey yüklemeden iki veya daha fazla PDF dosyasını tek bir belgede birleştirmenizi sağlar. Dosyalarınızı ekleyin, yeniden sıralamak için sürükleyin ve tek bir birleştirilmiş PDF indirin.",
      "Her şey tarayıcınızda yerel olarak çalışır, dolayısıyla dosyalarınız bir sunucuya asla yüklenmez. Bu, hassas sözleşmeler, raporlar veya kişisel belgelerle bile çalıştığı anlamına gelir.",
    ],
    faq: [
      { question: "Kaç PDF birleştirebileceğime dair bir sınır var mı?", answer: "Sabit bir sınır yok. Birleştirme tarayıcınızda gerçekleştiğinden, pratik sınır bir sunucu kotası değil cihazınızın belleğidir." },
      { question: "Birleştirmeden önce sayfaların sırasını değiştirebilir miyim?", answer: "Evet. Dosyalarınızı ekledikten sonra, birleştirmeden önce son belgenin izlemesini istediğiniz sıraya göre sürükleyin." },
      { question: "Dosyalarım TAMPDF'in sunucularına yükleniyor mu?", answer: "Hayır. PDF Birleştir, dosyaları istemci tarafı teknolojisi kullanarak tamamen tarayıcınızda işler, dolayısıyla belgeleriniz cihazınızdan hiç ayrılmaz." },
      { question: "Birleştirme PDF'lerimin kalitesini etkiler mi?", answer: "Hayır. Sayfalar yeniden sıkıştırılmadan olduğu gibi birleştirilir, dolayısıyla metin, görseller ve biçimlendirme orijinallerdeki gibi tam olarak kalır." },
    ],
  },
  "rotate-pdf": {
    name: "PDF Döndür",
    actionLabel: "PDF'yi Döndür",
    shortDescription: "Tarayıcınızda, tek tek sayfaları veya tüm PDF'i 90°, 180° veya 270° döndürün.",
    longDescription: [
      "PDF Döndür, yan yatmış veya baş aşağı duran sayfaları saniyeler içinde düzeltmenizi sağlar. Bir veya daha fazla PDF yükleyin, her sayfanın küçük resmini görün, ardından tüm belgeyi bir kerede veya sadece ihtiyacı olan sayfaları döndürün.",
      "Her şey tarayıcınızda yerel olarak çalışır, dolayısıyla dosyalarınız bir sunucuya asla yüklenmez. Aynı anda birden fazla PDF yükleyin ve her biri bağımsız olarak döndürülüp geri verilir.",
    ],
    faq: [
      { question: "Tüm belge yerine sadece bir sayfayı döndürebilir miyim?", answer: "Evet. Sadece o sayfayı döndürmek için bir sayfanın döndürme düğmesine tıklayın veya aynı döndürmeyi tüm sayfalara aynı anda uygulamak için tümünü-döndür düğmelerini kullanın." },
      { question: "Hangi döndürme açıları destekleniyor?", answer: "Sayfaları her iki yönde 90°, 180° veya 270° döndürebilirsiniz." },
      { question: "Aynı anda birden fazla PDF döndürebilir miyim?", answer: "Evet. Birden fazla PDF yükleyin, her biri bağımsız olarak döndürülür. Birden fazla dosya yüklerseniz, döndürülen PDF'ler indirmek için bir .zip'te paketlenir." },
      { question: "PDF'im bir yere yükleniyor mu?", answer: "Hayır. PDF Döndür her şeyi tarayıcınızda yerel olarak işler, dolayısıyla dosyalarınız cihazınızdan hiç ayrılmaz." },
    ],
  },
  "compress-image": {
    name: "Görsel Sıkıştır",
    actionLabel: "Görselleri Sıkıştır",
    shortDescription: "JPG, PNG ve WebP dosya boyutlarını görsel kaliteyi koruyarak küçültün.",
    longDescription: [
      "Görsel Sıkıştır, JPG, PNG veya WebP fotoğraflarınızın dosya boyutunu küçültür, böylece yükleme, e-postayla gönderme ve web sitelerinde yüklenme hızı artar.",
      "Sıkıştırma tamamen tarayıcınızda canvas API kullanılarak gerçekleşir, dolayısıyla fotoğraflarınız cihazınızdan hiç ayrılmaz ve birden fazla görseli aynı anda sıkıştırabilirsiniz.",
    ],
    faq: [
      { question: "Hangi görsel formatları destekleniyor?", answer: "JPG, PNG ve WebP görselleri hem giriş hem çıkış olarak desteklenir." },
      { question: "Aynı anda birden fazla görsel sıkıştırabilir miyim?", answer: "Evet. İstediğiniz kadar görsel ekleyin; her biri sıkıştırılıp indirmek için tek bir .zip'te toplanır veya ayrı ayrı indirilir." },
      { question: "Kalite kaybetmeden bir görseli ne kadar küçültebilirim?", answer: "Varsayılan kalite ayarı genellikle dosya boyutunu görünür bir fark olmadan %60-80 oranında küçültür. Farklı bir denge için kalite kaydırıcısını ayarlayabilirsiniz." },
      { question: "Fotoğraflarım bir sunucuya yükleniyor mu?", answer: "Hayır. Sıkıştırma, canvas API kullanılarak tarayıcınızda yerel olarak çalışır, dolayısıyla görselleriniz hiçbir yere gönderilmez." },
    ],
  },
  "image-to-pdf": {
    name: "JPG'den PDF'ye",
    actionLabel: "PDF'ye Dönüştür",
    shortDescription: "Bir veya daha fazla JPG görselini tek bir PDF belgesine dönüştürün.",
    longDescription: [
      "JPG'den PDF'ye, JPG fotoğraflarınızı seçtiğiniz sırayla, her sayfada bir görsel olacak şekilde tek bir PDF dosyasında birleştirir.",
      "Taranmış belgeleri, fişleri veya fotoğrafları paylaşılabilir bir PDF'e dönüştürmek için mükemmeldir. Her şey tam gizlilik için tarayıcınızda yerel olarak işlenir.",
    ],
    faq: [
      { question: "Birden fazla görseli tek bir PDF'de birleştirebilir miyim?", answer: "Evet. Birden fazla görsel ekleyin, her biri düzenlediğiniz sırayla sonuçtaki PDF'de bir sayfa olur." },
      { question: "PDF için hangi sayfa boyutu kullanılıyor?", answer: "Her sayfa, kaynak görselinin boyutlarına ve yönüne göre ayarlanır, dolayısıyla hiçbir şey kırpılmaz veya gerilmez." },
      { question: "Görsellerim bir yere yükleniyor mu?", answer: "Hayır. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz cihazınızda kalır." },
      { question: "PNG görselleri de destekliyor mu?", answer: "Evet, PNG görselleri JPG'nin yanı sıra desteklenir. iPhone'dan HEIC fotoğraflar henüz desteklenmiyor; önce telefonunuzun paylaşım seçenekleriyle bunları JPG'ye dönüştürün." },
    ],
  },
  "rotate-images": {
    name: "Görselleri Döndür",
    actionLabel: "Görselleri Döndür",
    shortDescription: "Bir veya daha fazla JPG, PNG veya WebP görselini 90°, 180° veya 270° döndürün.",
    longDescription: [
      "Görselleri Döndür, yan yatmış veya baş aşağı duran fotoğrafları saniyeler içinde düzeltir. Bir veya daha fazla görsel yükleyin, her birini ayrı ayrı veya hepsini bir kerede döndürün ve sonuçları indirin.",
      "Her şey tarayıcınızda yerel olarak çalışır, dolayısıyla fotoğraflarınız bir sunucuya asla yüklenmez. Aynı anda birden fazla görsel yükleyin ve her biri bağımsız olarak döndürülüp geri verilir.",
    ],
    faq: [
      { question: "Hangi görsel formatları destekleniyor?", answer: "JPG, PNG ve WebP görselleri desteklenir. Döndürme orijinal formatı korur." },
      { question: "Tümü yerine sadece bir görseli döndürebilir miyim?", answer: "Evet. Sadece o görseli döndürmek için bir görselin döndürme düğmesine tıklayın veya aynı döndürmeyi tüm görsellere aynı anda uygulamak için tümünü-döndür düğmelerini kullanın." },
      { question: "Hangi döndürme açıları destekleniyor?", answer: "Görselleri 90°, 180° veya 270° döndürebilirsiniz." },
      { question: "Fotoğraflarım bir yere yükleniyor mu?", answer: "Hayır. Görselleri Döndür her şeyi tarayıcınızda yerel olarak işler, dolayısıyla fotoğraflarınız cihazınızdan hiç ayrılmaz." },
    ],
  },
  "split-pdf": {
    name: "PDF Böl",
    actionLabel: "PDF'yi Böl",
    shortDescription: "Bir PDF'i sayfa aralıklarına göre veya sabit boyutlu parçalara ayırarak birden fazla küçük dosyaya bölün.",
    longDescription: [
      "PDF Böl, sayfaların kendisini değiştirmeden büyük bir belgeyi ayrı PDF dosyalarına böler. İhtiyacınız olan bölümleri tam olarak çıkarmak için 1-3, 5, 8-10 gibi sayfa aralıkları girin veya tüm belgeyi sabit sayıda sayfadan oluşan eşit parçalara bölün.",
      "Her şey tarayıcınızda gerçekleşir — PDF bir sunucuya asla yüklenmez. Tek bir çıktı tek bir PDF olarak indirilir; birden fazla parça bir .zip'te toplanır.",
    ],
    faq: [
      { question: "Hangi sayfaların hangi dosyaya gideceğini nasıl seçerim?", answer: "Aralık alanını kullanın: «1-3, 5, 8-10» gibi bir şey üç PDF üretir — 1'den 3'e sayfalar, tek başına 5. sayfa ve 8'den 10'a sayfalar. Ya da belgeyi eşit parçalara bölmek için «her N sayfada bir» seçeneğine geçin." },
      { question: "Bölünen dosyalar orijinal kalitesini korur mu?", answer: "Evet. Sayfalar yeniden sıkıştırılmadan olduğu gibi kopyalanır, dolayısıyla metin, görseller, yazı tipleri ve düzen kaynakla aynıdır." },
      { question: "PDF'im bir yere yükleniyor mu?", answer: "Hayır. Bölme işlemi tamamen tarayıcınızda gerçekleşir, dolayısıyla belgeniz cihazınızdan hiç ayrılmaz." },
      { question: "Form alanlarına veya dijital imzalara ne olur?", answer: "Sayfa içeriği ve form widget'ları görsel olarak korunur, ancak etkileşimli form davranışı ve imzalar bölünen dosyalara taşınmaz. İhtiyaç duyarsanız sonrasında düzleştirin veya yeniden imzalayın." },
    ],
  },
  "delete-pdf-pages": {
    name: "PDF Sayfalarını Sil",
    actionLabel: "Sayfaları Sil",
    shortDescription: "PDF'ten istenmeyen sayfaları kaldırın ve düzenlenmiş belgeyi indirin.",
    longDescription: [
      "PDF Sayfalarını Sil, ihtiyacınız olmayan sayfaları — boş taramalar, kapak sayfaları, yinelenen sayfalar — bırakmanızı ve gerisini orijinal sırasında tutmanızı sağlar. Her sayfanın küçük resmini görün, kaldırılacakları dokunun ve sonucu indirin.",
      "Tüm işlem tarayıcınızda yerel olarak gerçekleşir, dolayısıyla PDF'iniz asla yüklenmez. Kalan sayfalar yeniden sıkıştırılmadan kopyalanır, böylece hiçbir şey kalite kaybetmez.",
    ],
    faq: [
      { question: "Aynı anda birden fazla sayfa silebilir miyim?", answer: "Evet. Küçük resim ızgarasında istediğiniz kadar sayfa seçin, ardından hepsini tek adımda silin." },
      { question: "Tüm sayfaları kaldırabilir miyim?", answer: "Hayır — en az bir sayfa kalmalıdır, bu yüzden hepsini seçtiyseniz düğme devre dışı bırakılır." },
      { question: "Sayfaları silmek dosya boyutunu küçültür mü?", answer: "Genellikle biraz, çünkü kaldırılan sayfaların içeriği düşer. Yazı tipleri gibi paylaşılan kaynaklar kalabilir, bu yüzden boyut önemliyse sonrasında PDF Sıkıştır'ı kullanın." },
      { question: "Dosyalarım bir sunucuya yükleniyor mu?", answer: "Hayır. Her şey tarayıcınızda gerçekleşir ve PDF'iniz cihazınızdan hiç ayrılmaz." },
    ],
  },
  "reorder-pdf-pages": {
    name: "PDF Sayfalarını Yeniden Sırala",
    actionLabel: "Sayfaları Yeniden Sırala",
    shortDescription: "PDF sayfalarını yeni bir sıraya sürükleyin ve yeniden düzenlenmiş belgeyi kaydedin.",
    longDescription: [
      "PDF Sayfalarını Yeniden Sırala, istediğiniz sıraya sürükleyebileceğiniz her sayfanın küçük resmini gösterir — bir sayfayı başa taşıyın, iki bölümü değiştirin veya tüm belgeyi tersine çevirin. Sayfa sayfa hassas değişiklikler için taşıma düğmeleri de vardır.",
      "Yeniden düzenleme tamamen tarayıcınızda gerçekleşir, dolayısıyla PDF'iniz asla yüklenmez. Sayfalar olduğu gibi kopyalanır, böylece kalite ve biçimlendirme etkilenmez.",
    ],
    faq: [
      { question: "Bir sayfayı nasıl taşırım?", answer: "Küçük resmini yeni konuma sürükleyin veya tekli adımlar için her sayfadaki yukarı/aşağı düğmelerini kullanın. Düğmeye tıkladığınızda yeni sıra kaydedilir." },
      { question: "Tüm belgeyi tersine çevirebilir miyim?", answer: "Evet — sayfaları ters sırada sürükleyin veya taşıma düğmelerini kullanın. Herhangi bir sayıda sayfa tek seferde yeniden düzenlenebilir." },
      { question: "Yeniden sıralama sayfa içeriğini değiştirir mi?", answer: "Hayır. Sadece sayfa sırası değişir — her sayfadaki metin, görseller ve düzen tam olarak aynı kalır." },
      { question: "PDF bir yere yükleniyor mu?", answer: "Hayır. Yeniden sıralama tarayıcınızda yerel olarak çalışır ve dosyanız cihazınızdan hiç ayrılmaz." },
    ],
  },
  "crop-pdf": {
    name: "PDF Kırp",
    actionLabel: "PDF'yi Kırp",
    shortDescription: "Üst, alt ve yan değerleri belirleyerek her PDF sayfasının kenar boşluklarını kırpın.",
    longDescription: [
      "PDF Kırp, sayfalarınızın kenarlarındaki istenmeyen boşlukları veya tarama kenarlarını kaldırır. Üstten, alttan, soldan ve sağdan yüzde olarak ne kadar kırpılacağını ayarlayın, canlı önizlemeyi izleyin ve tüm sayfalara aynı anda uygulayın.",
      "Kırpma, hiçbir içeriği silmeden sayfanın görünür alanını ayarlar — kırpılan kısımlar sadece gizlenir. Her şey tarayıcınızda gerçekleşir, dolayısıyla PDF'iniz asla yüklenmez.",
    ],
    faq: [
      { question: "Kırpma, kırpma alanı dışındaki içeriği siler mi?", answer: "Hayır. PDF Kırp, sayfanın kırpma kutusunu değiştirir; bu, görüntüleyicilerde ve baskıda dış alanı gizler. Altta yatan içerik dosyada kalır ve geri yüklenebilir." },
      { question: "Aynı kırpma tüm sayfalara mı uygulanıyor?", answer: "Evet. Ayarladığınız kenar boşlukları tüm sayfalara uygulanır. Farklı boyutlardaki sayfalar aynı yüzdeyle kırpılır." },
      { question: "Siyah kenarı kaldırmak için taranmış bir belgeyi kırpabilir miyim?", answer: "Evet — bu yaygın bir kullanımdır. Önizleme yalnızca saklamak istediğiniz içeriği gösterene kadar kenar boşluklarını artırın." },
      { question: "Dosyam bir sunucuya yükleniyor mu?", answer: "Hayır. Kırpma tamamen tarayıcınızda gerçekleşir ve PDF'iniz cihazınızda kalır." },
    ],
  },
  "resize-pdf": {
    name: "PDF Boyutlandır",
    actionLabel: "PDF'yi Boyutlandır",
    shortDescription: "PDF sayfa boyutunu A4, Letter veya özel bir ölçeğe değiştirin; içerik sığdırılır ve ortalanır.",
    longDescription: [
      "PDF Boyutlandır, belgenizin fiziksel sayfa boyutunu değiştirir. A4 veya US Letter gibi standart bir boyut seçin, her sayfa sığdırılıp ortalanacak şekilde ölçeklenir, veya sayfaları orantılı olarak küçültmek ya da büyütmek için bir yüzde kullanın.",
      "Boyutlandırma tarayıcınızda yükleme yapılmadan gerçekleşir. İçerik sayfayla birlikte ölçeklenir, dolayısıyla hiçbir şey kesilmez ve düzen orantılı kalır.",
    ],
    faq: [
      { question: "Hangi sayfa boyutlarını seçebilirim?", answer: "Dikey veya yatay A4 ve US Letter, ayrıca A3 ve A5. En-boy oranını değiştirmeden boyutlandırmak için bir ölçek yüzdesi de girebilirsiniz." },
      { question: "İçeriğim gerilecek mi?", answer: "Hayır. İçerik yeni boyuta sığacak şekilde eşit olarak ölçeklenir ve sayfada ortalanır, dolayısıyla oranlar korunur ve hiçbir şey kesilmez." },
      { question: "Bununla bir PDF'in dosya boyutunu küçültebilir miyim?", answer: "Doğrudan değil — bu, dosya ağırlığını değil sayfa boyutlarını değiştirir. Dosya boyutunu azaltmak için PDF Sıkıştır'ı kullanın." },
      { question: "Dosyalarım bir yere yükleniyor mu?", answer: "Hayır. Boyutlandırma tarayıcınızda yerel olarak yapılır ve PDF'iniz cihazınızdan hiç ayrılmaz." },
    ],
  },
  "png-to-pdf": {
    name: "PNG'den PDF'ye",
    actionLabel: "PDF'ye Dönüştür",
    shortDescription: "Bir veya daha fazla PNG görselini, her sayfada bir görsel olacak şekilde tek bir PDF'ye dönüştürün.",
    longDescription: [
      "PNG'den PDF'ye, PNG görsellerinizi tek bir PDF dosyasında birleştirir; her görsel orijinal çözünürlüğünde kendi sayfasında yer alır. Birden fazla görsel ekleyin, sırasını düzenleyin ve tek bir belge indirin.",
      "Ekran görüntülerini, diyagramları veya dışa aktarılan grafikleri paylaşılabilir bir PDF'e dönüştürmek için harikadır. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez. Şeffaf alanlar beyaz bir arka plana yerleştirilir.",
    ],
    faq: [
      { question: "Birkaç PNG'yi tek bir PDF'de birleştirebilir miyim?", answer: "Evet. İstediğiniz kadar PNG görseli ekleyin, her biri düzenlediğiniz sırayla sonuçtaki PDF'de bir sayfa olur." },
      { question: "Hangi sayfa boyutu kullanılıyor?", answer: "Her sayfa, kaynak görselinin piksel boyutlarıyla eşleşir, dolayısıyla görseller kırpılmaz veya gerilmez." },
      { question: "Görselin şeffaf kısımlarına ne olur?", answer: "Şeffaflık, sayfanın her PDF görüntüleyicisinde aynı görünmesi için beyaz bir arka plana düzleştirilir." },
      { question: "Görsellerim bir sunucuya yükleniyor mu?", answer: "Hayır. Dönüştürme tamamen tarayıcınızda gerçekleşir ve görselleriniz cihazınızda kalır." },
    ],
  },
  "extract-pdf-pages": {
    name: "PDF Sayfalarını Çıkar",
    actionLabel: "Sayfaları çıkar",
    shortDescription: "PDF'ten seçtiğiniz sayfaları yeni bir dosyaya çıkarın veya her sayfayı ayrı bir PDF olarak kaydedin.",
    longDescription: [
      "PDF Sayfalarını Çıkar, bir belgeden tam olarak ihtiyacınız olan sayfaları seçip yeni bir PDF olarak kaydetmenizi sağlar. Her sayfanın küçük resmini görün, saklamak istediklerinize dokunun ve birlikte indirin — veya bir ZIP içinde ayrı tek sayfalık PDF'ler olarak.",
      "Orijinal dosyanız değişmeden kalır ve sayfalar olduğu gibi kopyalanır, dolayısıyla metin, görseller ve biçimlendirme etkilenmez. Her şey tarayıcınızda gerçekleşir, dolayısıyla PDF asla yüklenmez.",
    ],
    faq: [
      { question: "Çıkarma ile bölme arasındaki fark nedir?", answer: "Çıkarma, yalnızca seçtiğiniz sayfaları yeni bir PDF'e kaydeder. Bölme, tüm belgeyi sayfa aralıklarına veya sabit boyutlu parçalara göre birkaç bölüme ayırır." },
      { question: "Her çıkarılan sayfayı ayrı bir dosya olarak kaydedebilir miyim?", answer: "Evet. «Ayrı PDF'ler»i seçin ve seçtiğiniz her sayfa, tek bir .zip indirmesinde paketlenmiş kendi PDF'i olur." },
      { question: "Çıkarılan sayfalar kalite kaybeder mi?", answer: "Hayır. Sayfalar yeniden sıkıştırılmadan kopyalanır, dolayısıyla tam olarak orijinal gibi görünürler. Etkileşimli form alanları normal sayfa içeriği haline gelebilir." },
      { question: "PDF'im bir sunucuya yükleniyor mu?", answer: "Hayır. Sayfalar tarayıcınızda yerel olarak çıkarılır ve dosyanız cihazınızdan hiç ayrılmaz." },
    ],
  },
  "add-page-numbers": {
    name: "Sayfa Numarası Ekle",
    actionLabel: "Sayfa numarası ekle",
    shortDescription: "Konum, biçim ve başlangıç numarasını seçerek PDF sayfalarını numaralandırın.",
    longDescription: [
      "Sayfa Numarası Ekle, PDF'inizin her sayfasına bir numara damgalar. Altı konumdan birini, «1», «1 / 10» veya «Sayfa 1 / 10» gibi bir stil seçin, başlangıç numarasını ayarlayın ve isteğe bağlı olarak kapak sayfasını atlayın.",
      "Numaralar standart bir yazı tipinde gerçek metin olarak çizilir, böylece net şekilde basılır ve döndürülmüş sayfalarda bile dik kalır. Tüm işlem tarayıcınızda gerçekleşir — belgeniz asla yüklenmez.",
    ],
    faq: [
      { question: "Numaralandırmaya 1'den farklı bir sayıdan başlayabilir miyim?", answer: "Evet. Herhangi bir başlangıç numarası ayarlayın — PDF'iniz daha büyük bir belgenin bölümü veya eki olduğunda kullanışlıdır." },
      { question: "Kapak sayfasını numarasız bırakabilir miyim?", answer: "Evet. «İlk sayfayı numaralandırma»yı açın ve numaralandırma ikinci sayfadan başlar." },
      { question: "Hangi rakamlar kullanılıyor?", answer: "Her PDF okuyucuda doğru görüntülenen standart rakamlar (1, 2, 3). «Sayfa 1 / 10» gibi etiketler Türkçe yazılır." },
      { question: "Dosyam yükleniyor mu?", answer: "Hayır. Sayfa numaraları tarayıcınızda yerel olarak eklenir ve PDF'iniz cihazınızda kalır." },
    ],
  },
  "add-watermark": {
    name: "Filigran Ekle",
    actionLabel: "Filigran ekle",
    shortDescription: "GİZLİ veya TASLAK gibi bir metni PDF'in her sayfasına damgalayın.",
    longDescription: [
      "Filigran Ekle, metninizi PDF'in her sayfasına yerleştirir — bir kez ortalanmış veya sayfa boyunca tekrarlanmış olarak. Rengi, opaklığı, boyutu ve açıyı seçin, uygulamadan önce ilk sayfanızda canlı bir önizleme görün.",
      "Türkçe ve diğer yazı sistemleri tam olarak destekleniyor. Filigran standart bir filigran nesnesi olarak kaydedilir ve her şey tarayıcınızda gerçekleşir, dolayısıyla belgeniz asla yüklenmez.",
    ],
    faq: [
      { question: "Filigranı Türkçe yazabilir miyim?", answer: "Evet. Metin tarayıcınızın yazı tipleriyle oluşturulur, dolayısıyla Türkçe ve diğer yazı sistemleri doğru şekillendirilir." },
      { question: "Filigran sayfa boyunca tekrarlanabilir mi?", answer: "Evet. Metni her sayfaya döşemek için «Tekrarlanan» düzenini veya tek bir damga için «Bir kez, ortalanmış»ı seçin." },
      { question: "Filigran daha sonra kaldırılabilir mi?", answer: "Standart bir filigran nesnesi olarak kaydedilir, bu nedenle filigranları anlayan araçlar — TAMPDF'in Filigran Kaldır'ı dahil — onu kaldırabilir. Bir güvenlik özelliği değildir." },
      { question: "PDF'im bir yere yükleniyor mu?", answer: "Hayır. Filigran tarayıcınızda yerel olarak uygulanır." },
    ],
  },
  "remove-watermark": {
    name: "Filigranı Kaldır",
    actionLabel: "Filigranı kaldır",
    shortDescription: "Bir PDF'e filigran nesnesi olarak eklenmiş filigranları kaldırın.",
    longDescription: [
      "Filigranı Kaldır, filigran nesnesi olarak eklenen filigranları bulur ve siler — Adobe Acrobat, TAMPDF ve çoğu PDF düzenleyicinin oluşturduğu türde — filigran açıklamaları ve «Watermark» adlı katmanlarla birlikte. Her sayfanın geri kalanı tam olarak eskisi gibi kalır.",
      "Taranmış bir görselin parçası olan veya normal sayfa metnine karışmış filigranların gerçek içerikten ayırt edilmesini sağlayacak bir işareti yoktur, bu nedenle otomatik olarak kaldırılamazlar. Lütfen filigranları yalnızca düzenleme hakkına sahip olduğunuz belgelerden kaldırın. İşleme tarayıcınızda gerçekleşir, dolayısıyla dosyanız asla yüklenmez.",
    ],
    faq: [
      { question: "Hangi filigranlar kaldırılabilir?", answer: "Filigran nesnesi, filigran açıklaması veya «Watermark» adlı katmanlar olarak eklenen filigranlar — Adobe Acrobat ve TAMPDF'in Filigran Ekle aracıyla oluşturulanlar dahil." },
      { question: "Dosyamdaki filigran neden kaldırılmadı?", answer: "Bir filigran, taranmış bir sayfa görselinin parçasıysa veya sayfa metnine düzleştirilmişse, sayfaya zarar vermeden gerçek içerikten ayrılamaz." },
      { question: "Bir filigranı kaldırmak sayfanın geri kalanını etkiler mi?", answer: "Hayır. Yalnızca işaretlenen filigran içeriği kaldırılır; metin, görseller ve düzen etkilenmez." },
      { question: "Dosyam yükleniyor mu?", answer: "Hayır. PDF tarayıcınızda yerel olarak işlenir." },
    ],
  },
  "pdf-to-images": {
    name: "PDF'den Görsele",
    actionLabel: "Görsellere dönüştür",
    shortDescription: "PDF'in her sayfasını PNG, JPG veya WEBP görsellerine dönüştürün ve ZIP olarak indirin.",
    longDescription: [
      "PDF'den Görsele, PDF'inizin her sayfasını seçtiğiniz formatta ayrı bir görsel olarak oluşturur: en net metin için PNG, en küçük dosyalar için JPG, veya modern ve kompakt görseller için WEBP. Bir çözünürlük seçin ve her sayfa dışa aktarılıp tek bir .zip'te toplanır.",
      "Oluşturma, PDF.js kullanılarak doğrudan tarayıcınızda gerçekleşir, dolayısıyla belgeniz bir sunucuya asla yüklenmez.",
    ],
    faq: [
      { question: "Hangi görsel formatını seçmeliyim?", answer: "PNG, metni ve çizgi grafiklerini mükemmel netlikte tutar. JPG daha küçük dosyalar üretir ve fotoğraflara uygundur. WEBP web kullanımı için iyi bir denge sunar." },
      { question: "Görsellerin çözünürlüğü nedir?", answer: "Standart 108 dpi'de, Yüksek 144 dpi'de ve Maksimum 216 dpi'de oluşturur — çoğu belgeyi yazdırmaya yetecek kadar yüksek." },
      { question: "Tüm sayfaları bir kerede nasıl alırım?", answer: "Her sayfa dönüştürülür ve tek bir .zip dosyasında paketlenir. Tek sayfalık bir PDF tek bir görsel olarak indirilir." },
      { question: "PDF'im yükleniyor mu?", answer: "Hayır. Sayfalar tarayıcınızda yerel olarak oluşturulur." },
    ],
  },
  "images-to-pdf": {
    name: "Görsellerden PDF'ye",
    actionLabel: "PDF oluştur",
    shortDescription: "JPG, PNG ve WEBP görsellerini seçtiğiniz sırayla tek bir PDF'de birleştirin.",
    longDescription: [
      "Görsellerden PDF'ye, bir dizi fotoğrafı, taramayı veya ekran görüntüsünü tek bir PDF belgesine dönüştürür. JPG, PNG veya WEBP görselleri ekleyin, küçük resimleri istediğiniz sıraya sürükleyin ve A4 veya Letter sayfası (otomatik yönlendirmeli) ya da her görsele uyan sayfalar seçin.",
      "Temiz bir baskı görünümü için bir kenar boşluğu ekleyin. Şeffaf alanlar beyaz üzerine yerleştirilir ve tüm dönüştürme tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "Görsellerin sırasını değiştirebilir miyim?", answer: "Evet. PDF'i oluşturmadan önce sayfa sırasını ayarlamak için küçük resimleri sürükleyin veya ok düğmelerini kullanın." },
      { question: "Hangi görsel formatları destekleniyor?", answer: "JPG, PNG ve WEBP. Aynı PDF'te formatları karıştırabilirsiniz." },
      { question: "PDF hangi sayfa boyutunu kullanacak?", answer: "A4 veya Letter seçin — her görsel sayfaya sığdırılır ve gerektiğinde yatay çevrilir — veya her sayfanın tam olarak görselinin boyutunda olması için «Görsele Sığdır»ı seçin." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. PDF tarayıcınızda yerel olarak oluşturulur." },
    ],
  },
  "flip-pdf": {
    name: "PDF Çevir",
    actionLabel: "PDF'yi çevir",
    shortDescription: "Bir PDF'in sayfalarını yatay veya dikey olarak aynalayın.",
    longDescription: [
      "PDF Çevir, belgenizin her sayfasını aynalar — soldan sağa veya yukarıdan aşağıya. Ütüyle transfer baskıları yapmak, yanlış taraftan yapılmış taramaları düzeltmek veya aynalanmış grafikler hazırlamak için kullanışlıdır.",
      "Uygulamadan önce sonucu ilk sayfanızda önizleyin. Çevirme döndürülmüş sayfalara da saygı gösterir ve her şey tarayıcınızda gerçekleşir, dolayısıyla dosyanız asla yüklenmez.",
    ],
    faq: [
      { question: "Çevirme ile döndürme arasındaki fark nedir?", answer: "Döndürme bir sayfayı 90° adımlarla döndürür. Çevirme ayna görüntüsü oluşturur, böylece metin tersten okunur — transferler ve bazı baskı işleri için ihtiyacınız olan budur." },
      { question: "Sadece bir sayfayı çevirebilir miyim?", answer: "Çevirme tüm sayfalara uygulanır. Tek bir sayfayı çevirmek için önce PDF Sayfalarını Çıkar ile onu çıkarın." },
      { question: "Çevirme kaliteyi azaltır mı?", answer: "Hayır. Sayfalar yeniden oluşturulmaz, dönüştürülür, dolayısıyla metin ve grafikler orijinal kadar net kalır." },
      { question: "PDF'im yükleniyor mu?", answer: "Hayır. Çevirme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "edit-pdf-metadata": {
    name: "PDF Meta Verisini Düzenle",
    actionLabel: "Meta verisini düzenle",
    shortDescription: "Bir PDF'in başlığını, yazarını, konusunu ve anahtar kelimelerini değiştirin.",
    longDescription: [
      "PDF Meta Verisini Düzenle, bir PDF içinde saklanan belge özelliklerini — başlık, yazar, konu, anahtar kelimeler, oluşturan ve üretici — görüntülemenizi ve değiştirmenizi sağlar. Bunlar, PDF okuyucuların, arama motorlarının ve dosya yöneticilerinin belgeniz hakkında gösterdiği bilgilerdir.",
      "Kaldırmak için bir alanı boş bırakın. Sayfa içeriğine dokunulmaz ve tüm düzenleme tarayıcınızda gerçekleşir, dolayısıyla dosyanız asla yüklenmez.",
    ],
    faq: [
      { question: "PDF meta verisi neden düzenlenir?", answer: "Net bir başlık ve yazar, belgeleri bulmayı kolaylaştırır ve paylaşıldığında daha profesyonel görünmesini sağlar; arama motorları da PDF'leri dizinlerken bunları kullanabilir." },
      { question: "Meta veriyi düzenlemek belgenin içeriğini değiştirir mi?", answer: "Hayır. Yalnızca belge özellikleri değişir; sayfalar, metin ve görseller tam olarak aynı kalır." },
      { question: "Bir özelliği nasıl kaldırırım?", answer: "Alanı temizleyin ve kaydedin. Boş alanlar dosyadan kaldırılır." },
      { question: "PDF'im yükleniyor mu?", answer: "Hayır. Özellikler tarayıcınızda yerel olarak düzenlenir." },
    ],
  },
  "remove-pdf-metadata": {
    name: "PDF Meta Verisini Kaldır",
    actionLabel: "Meta verisini kaldır",
    shortDescription: "Paylaşmadan önce PDF'ten yazar, başlık, yazılım ve diğer gizli özellikleri temizleyin.",
    longDescription: [
      "PDF Meta Verisini Kaldır, bir PDF'in taşıdığı belge özelliklerini ve gizli verileri temizler — yazar, başlık, konu, anahtar kelimeler, oluşturmak için kullanılan yazılım, oluşturma tarihleri ve gömülü XMP meta veri paketleri.",
      "Bir dosyayı herkese açık şekilde paylaşmadan önce hızlı bir gizlilik adımıdır. Sayfa içeriği etkilenmez ve temizleme tarayıcınızda gerçekleşir, dolayısıyla dosyanız asla yüklenmez.",
    ],
    faq: [
      { question: "Hangi bilgiler kaldırılıyor?", answer: "Başlık, yazar, konu, anahtar kelimeler, oluşturucu ve üretici yazılımı, oluşturma ve değiştirme tarihleri, gömülü XMP meta verisi ve uygulamaya özel veriler." },
      { question: "Belgenin görünümünü değiştirir mi?", answer: "Hayır. Yalnızca gizli özellikler kaldırılır; her sayfa tam olarak aynı görünür." },
      { question: "Bu, sayfalara basılan kişisel bilgileri kaldırır mı?", answer: "Hayır. Yalnızca meta veriyi kaldırır. Sayfalara basılan isimler veya ayrıntılar görünür kalır." },
      { question: "PDF'im yükleniyor mu?", answer: "Hayır. Dosya tarayıcınızda yerel olarak temizlenir." },
    ],
  },
  "pdf-info": {
    name: "PDF Bilgisi",
    actionLabel: "PDF'yi kontrol et",
    shortDescription: "Bir PDF'in sayfa sayısını, sayfa boyutlarını, sürümünü ve özelliklerini tek bakışta görün.",
    longDescription: [
      "PDF Bilgisi bir PDF'i okur ve içindekileri gösterir: sayfa sayısı, A4 veya Letter gibi kağıt adlarıyla her sayfanın milimetre cinsinden boyutu, PDF sürümü, şifreli olup olmadığı veya doldurulabilir bir form içerip içermediği, ve başlığı, yazarı, yazılımı ve tarihleri.",
      "Bir dosyayı yazdırmadan, göndermeden veya dönüştürmeden önce kullanışlıdır. Belge yalnızca okunur — asla değiştirilmez — ve her şey tarayıcınızda gerçekleşir, dolayısıyla asla yüklenmez.",
    ],
    faq: [
      { question: "PDF Bilgisi hangi ayrıntıları gösterir?", answer: "Sayfa sayısı, kağıt adlarıyla sayfa boyutları, PDF sürümü, dosya boyutu, şifreleme, doldurulabilir formlar, hızlı web görünümü ve başlık, yazar ve oluşturma tarihi gibi belge özellikleri." },
      { question: "PDF Bilgisi dosyamı değiştirir mi?", answer: "Hayır. PDF yalnızca okunur; hiçbir şey değiştirilmez veya kaydedilmez." },
      { question: "Şifre korumalı bir PDF'i kontrol edebilir miyim?", answer: "Açmak için şifre gerektiren dosyalar şifre olmadan okunamaz. Yalnızca düzenleme kısıtlaması olan dosyalar şifreli olarak gösterilir." },
      { question: "PDF'im yükleniyor mu?", answer: "Hayır. Tarayıcınızda yerel olarak okunur." },
    ],
  },
  "resize-image": {
    name: "Görsel Boyutlandır",
    actionLabel: "Görselleri boyutlandır",
    shortDescription: "JPG, PNG ve WEBP görsellerinin genişlik ve yüksekliğini yüzde veya kesin piksel olarak değiştirin.",
    longDescription: [
      "Görsel Boyutlandır, fotoğraflarınızın ve grafiklerinizin boyutlarını değiştirir. Yüzde olarak ölçeklendirin veya hiçbir şeyin gerilmiş görünmemesi için en-boy oranı kilitli tam bir genişlik ve yükseklik girin. Birden fazla görseli aynı anda boyutlandırın ve bir .zip içinde birlikte indirin.",
      "Görseller orijinal formatlarını korur ve yüksek kaliteli yumuşatma, küçültülen görselleri net tutar. Her şey tarayıcınızda çalışır, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "Boyutlandırma görselimi bulanıklaştırır mı?", answer: "Bir görseli küçültmek onu net tutar. Orijinal boyutunun ötesinde büyütmek ayrıntı ekleyemez, bu nedenle büyük artışlar yumuşak görünebilir." },
      { question: "Aynı anda birden fazla görseli boyutlandırabilir miyim?", answer: "Evet. 20'ye kadar görsel ekleyin; en-boy oranı kilitliyken, her biri belirlediğiniz genişlikte kendi oranlarını korur." },
      { question: "Boyutlandırılan görsel hangi formatta olur?", answer: "Orijinaliyle aynı — JPG JPG kalır, PNG PNG kalır ve tarayıcınızın desteklediği yerlerde WEBP WEBP kalır." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Boyutlandırma tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "crop-image": {
    name: "Görsel Kırp",
    actionLabel: "Görseli kırp",
    shortDescription: "Sürüklenebilir bir kırpma çerçevesiyle görseli istediğiniz alana kırpın.",
    longDescription: [
      "Görsel Kırp, bir fotoğraf veya ekran görüntüsünden istenmeyen kenarları kırpar. Kırpma çerçevesini veya köşelerini önizleme üzerinde sürükleyin — veya her kenarı bir kaydırıcıyla ince ayarlayın — ve sonucun piksel cinsinden tam boyutunu görün.",
      "Kırpılan görsel orijinal formatını ve kalitesini korur ve tüm işlem tarayıcınızda gerçekleşir, dolayısıyla görseliniz asla yüklenmez.",
    ],
    faq: [
      { question: "Kesin boyutlara kırpabilir miyim?", answer: "Her kenarı kaydırıcılarla ayarlayın ve ilerledikçe sonuç boyutunun piksel cinsinden güncellenmesini izleyin." },
      { question: "Kırpma görsel kalitesini azaltır mı?", answer: "Hayır. Sakladığınız pikseller olduğu gibi kopyalanır; sadece çerçevenin dışındaki kısımlar kaldırılır." },
      { question: "Hangi formatları kırpabilirim?", answer: "JPG, PNG ve WEBP. Sonuç orijinaliyle aynı formatı korur." },
      { question: "Görselim yükleniyor mu?", answer: "Hayır. Kırpma tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "flip-image": {
    name: "Görsel Çevir",
    actionLabel: "Görselleri çevir",
    shortDescription: "Görselleri tek tek veya toplu olarak yatay ya da dikey aynalayın.",
    longDescription: [
      "Görsel Çevir, fotoğraflarınızın ayna görüntüsünü oluşturur: soldan sağa veya yukarıdan aşağıya. Ön kamerayla çekilen selfileri düzeltmek, yansımalar oluşturmak veya baskı transferleri için tasarımlar hazırlamak için kullanışlıdır.",
      "Birden fazla görseli aynı anda çevirin, sonucu anında önizleyin ve orijinal formatlarında indirin. Her şey tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "Çevirme ile döndürme arasındaki fark nedir?", answer: "Döndürme bir görseli 90° adımlarla döndürür. Çevirme onu bir aynaya bakar gibi aynalar." },
      { question: "Aynı anda birden fazla görseli çevirebilir miyim?", answer: "Evet. 20'ye kadar görsel ekleyin, hepsi aynı şekilde çevrilir, ardından bir .zip olarak birlikte indirilir." },
      { question: "Çevirme kaliteyi azaltır mı?", answer: "Fark edilir bir kayıp yok — PNG kayıpsız kalır, JPG ve WEBP yüksek kalitede kaydedilir." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Çevirme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "png-to-jpg": {
    name: "PNG'den JPG'ye",
    actionLabel: "JPG'ye dönüştür",
    shortDescription: "PNG görsellerini daha küçük ve daha uyumlu olması için JPG'ye dönüştürün.",
    longDescription: [
      "PNG'den JPG'ye, PNG görsellerinizi genellikle çok daha küçük olan JPG dosyalarına dönüştürür — fotoğraflar, e-posta ekleri ve yalnızca JPG kabul eden yükleme formları için idealdir. Birden fazla görseli aynı anda dönüştürün ve boyut ile netliği dengelemek için kaliteyi ayarlayın.",
      "JPG şeffaflığı desteklemez, bu nedenle şeffaf alanlar beyazla doldurulur. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "PNG neden JPG'ye dönüştürülür?", answer: "JPG dosyaları fotoğraflar için genellikle PNG'lerden çok daha küçüktür ve e-postadan çevrimiçi formlara kadar hemen her yerde kabul edilir." },
      { question: "Şeffaf arka planlara ne olur?", answer: "JPG'de şeffaflık yoktur, bu yüzden şeffaf alanlar beyazla doldurulur." },
      { question: "Aynı anda çok sayıda PNG dönüştürebilir miyim?", answer: "Evet. 30'a kadar görsel ekleyin; birlikte dönüştürülüp bir .zip olarak indirilirler." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Dönüştürme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "jpg-to-png": {
    name: "JPG'den PNG'ye",
    actionLabel: "PNG'ye dönüştür",
    shortDescription: "JPG fotoğrafları kayıpsız PNG görsellerine dönüştürün.",
    longDescription: [
      "JPG'den PNG'ye, JPG veya JPEG görsellerinizi PNG formatına dönüştürür. PNG kayıpsızdır, dolayısıyla görseli yeniden düzenleyip kaydettiğinizde daha fazla kalite kaybetmez — üzerinde çalışmaya devam edeceğiniz grafikler için veya PNG gerektiren araçlar ve platformlar için kullanışlıdır.",
      "Birden fazla görseli aynı anda dönüştürün ve birlikte indirin. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "JPG'yi PNG'ye dönüştürmek kaliteyi artırır mı?", answer: "Hayır — JPG'de zaten kaybedilen ayrıntı geri getirilemez. Ancak PNG, yeniden düzenleyip kaydettiğinizde daha fazla kayıp olmasını önler." },
      { question: "PNG neden JPG'den daha büyük?", answer: "PNG her pikseli kayıplı sıkıştırma olmadan saklar, bu yüzden fotoğraflar genellikle büyür. Bu, kayıpsız kalite için yapılan bir değiş tokuştur." },
      { question: "Aynı anda birkaç JPG dönüştürebilir miyim?", answer: "Evet. 30'a kadar görsel ekleyin ve bir .zip olarak indirin." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Dönüştürme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP'den JPG'ye",
    actionLabel: "JPG'ye dönüştür",
    shortDescription: "WEBP görsellerini, herhangi bir uygulamada veya sitede açılabilmesi için JPG'ye dönüştürün.",
    longDescription: [
      "WEBP'den JPG'ye, web sitelerinde yaygın olan modern WEBP görsellerini, hemen her uygulama, cihaz ve yükleme formu tarafından desteklenen JPG formatına dönüştürür. Bir görseli veya birçoğunu aynı anda dönüştürün ve boyut ile netliği dengelemek için kaliteyi ayarlayın.",
      "JPG şeffaflığı desteklemediğinden şeffaf alanlar beyazla doldurulur. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "WEBP neden JPG'ye dönüştürülür?", answer: "Bazı eski uygulamalar, düzenleyiciler ve yükleme formları WEBP'yi kabul etmez. JPG neredeyse her yerde çalışır." },
      { question: "Kalite kaybeder miyim?", answer: "Varsayılan kalitede fark görmek zordur. En net sonuç için kalite kaydırıcısını artırın." },
      { question: "Aynı anda birkaç WEBP görseli dönüştürebilir miyim?", answer: "Evet. 30'a kadar görsel ekleyin ve bir .zip olarak indirin." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Dönüştürme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG'den WEBP'ye",
    actionLabel: "WEBP'ye dönüştür",
    shortDescription: "Web'de daha küçük, daha hızlı yüklenen görseller için JPG fotoğrafları WEBP'ye dönüştürün.",
    longDescription: [
      "JPG'den WEBP'ye, JPG görsellerinizi, benzer görsel kalitede genellikle önemli ölçüde daha küçük dosyalar üreten modern bir format olan WEBP'ye dönüştürür — web sitelerini hızlandırmak ve depolama alanından tasarruf etmek için harikadır.",
      "Doğru dengeyi bulmak için kaliteyi ayarlayın ve birçok görseli aynı anda dönüştürün. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez. WEBP dosyaları oluşturmak için Chrome, Edge veya Firefox'un güncel bir sürümü gerekir.",
    ],
    faq: [
      { question: "WEBP JPG'den küçük mü?", answer: "Genellikle evet — WEBP, benzer kalitede genellikle önemli miktarda yer tasarrufu sağlar, bu da sayfaların daha hızlı yüklenmesine yardımcı olur." },
      { question: "Tüm tarayıcılar WEBP'yi destekliyor mu?", answer: "Tüm modern tarayıcılar WEBP'yi görüntüleyebilir. Burada WEBP dosyaları oluşturmak, Chrome, Edge veya Firefox'un güncel bir sürümünü gerektirir." },
      { question: "Aynı anda birkaç JPG dönüştürebilir miyim?", answer: "Evet. 30'a kadar görsel ekleyin ve bir .zip olarak indirin." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Dönüştürme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "webp-to-png": {
    name: "WEBP'den PNG'ye",
    actionLabel: "PNG'ye dönüştür",
    shortDescription: "WEBP görsellerini şeffaflığı koruyarak PNG'ye dönüştürün.",
    longDescription: [
      "WEBP'den PNG'ye, WEBP görsellerini her görsel düzenleyicinin desteklediği kayıpsız format olan PNG'ye dönüştürür. Şeffaflık korunur, dolayısıyla logolar, simgeler ve kesilmiş grafikler net arka planlarını korur.",
      "Birden fazla görseli aynı anda dönüştürün ve birlikte indirin. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez.",
    ],
    faq: [
      { question: "Şeffaflık korunuyor mu?", answer: "Evet. PNG şeffaflığı destekler, dolayısıyla WEBP görselinizdeki şeffaf alanlar şeffaf kalır." },
      { question: "WEBP neden PNG'ye dönüştürülür?", answer: "PNG her düzenleyicide ve tasarım aracında açılır ve yeniden düzenleyip kaydettiğinizde kalite kaybetmez." },
      { question: "Aynı anda birkaç WEBP dosyası dönüştürebilir miyim?", answer: "Evet. 30'a kadar görsel ekleyin ve bir .zip olarak indirin." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Dönüştürme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
  "png-to-webp": {
    name: "PNG'den WEBP'ye",
    actionLabel: "WEBP'ye dönüştür",
    shortDescription: "Şeffaflığı koruyan daha küçük dosyalar için PNG görsellerini WEBP'ye dönüştürün.",
    longDescription: [
      "PNG'den WEBP'ye, PNG görsellerinizi WEBP'ye dönüştürür; bu genellikle şeffaflığı korurken dosyaları çok daha küçük yapar — web sitesi grafikleri, simgeler ve ekran görüntüleri için idealdir.",
      "Kaliteyi seçin, birçok görseli aynı anda dönüştürün ve birlikte indirin. Dönüştürme tamamen tarayıcınızda gerçekleşir, dolayısıyla görselleriniz asla yüklenmez. WEBP dosyaları oluşturmak için Chrome, Edge veya Firefox'un güncel bir sürümü gerekir.",
    ],
    faq: [
      { question: "WEBP şeffaflığı korur mu?", answer: "Evet. WEBP şeffaflığı destekler, dolayısıyla şeffaf PNG alanları şeffaf kalır." },
      { question: "Görsellerim ne kadar küçülecek?", answer: "Değişkenlik gösterir, ancak WEBP dosyaları genellikle aynı görselin PNG olarak kaydedilmiş halinden önemli ölçüde daha küçüktür." },
      { question: "Aynı anda birkaç PNG dönüştürebilir miyim?", answer: "Evet. 30'a kadar görsel ekleyin ve bir .zip olarak indirin." },
      { question: "Görsellerim yükleniyor mu?", answer: "Hayır. Dönüştürme tarayıcınızda yerel olarak gerçekleşir." },
    ],
  },
};
