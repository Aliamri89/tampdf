import type { ToolTranslationOverride } from "./tools-ar";

export const toolsPl: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Kompresuj PDF",
    actionLabel: "Kompresuj PDF",
    shortDescription: "Zmniejsz rozmiar pliku PDF, aby łatwiej go udostępniać i wysyłać, bezpośrednio w przeglądarce.",
    longDescription: [
      "Kompresuj PDF zmniejsza rozmiar pliku poprzez ponowne kodowanie osadzonych obrazów i usuwanie niepotrzebnych danych, dzięki czemu dokument łatwiej wysłać e-mailem, przesłać lub przechowywać.",
      "Wybierz poziom kompresji, aby zrównoważyć rozmiar pliku i jakość wizualną, i porównaj rozmiar przed/po przed pobraniem.",
    ],
    faq: [
      { question: "O ile zmniejszy się mój PDF?", answer: "Zależy to od treści. Pliki PDF z dużymi osadzonymi obrazami zwykle kurczą się najbardziej, czasem o 50-90%. Pliki PDF z dużą ilością tekstu kompresują się mniej, ponieważ jest mniej do zoptymalizowania." },
      { question: "Czy kompresja sprawi, że mój PDF będzie rozmyty?", answer: "Przy ustawieniach domyślnych utrata jakości jest minimalna. Jeśli wybierzesz najsilniejszy poziom kompresji, obrazy zostaną bardziej agresywnie zmniejszone, co może zmniejszyć ostrość przy powiększeniu." },
      { question: "Czy kompresja odbywa się na serwerach TAMPDF?", answer: "Nie. Kompresja PDF działa lokalnie w przeglądarce, więc Twój plik nigdy nie jest nigdzie przesyłany." },
      { question: "Czy mogę skompresować plik PDF chroniony hasłem?", answer: "Obecnie nie. Najpierw usuń ochronę hasłem za pomocą innego narzędzia, a następnie skompresuj plik." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF na JPG",
    actionLabel: "Konwertuj na JPG",
    shortDescription: "Zamień każdą stronę PDF na wysokiej jakości obraz JPG.",
    longDescription: [
      "PDF na JPG konwertuje każdą stronę PDF na osobny obraz JPG, gotowy do udostępnienia, edycji lub wstawienia do prezentacji. Jednostronicowy PDF jest pobierany jako jeden plik JPG; wielostronicowe PDF-y są pakowane w plik .zip.",
      "Konwersja odbywa się bezpośrednio w przeglądarce przy użyciu PDF.js, więc dokument nigdy nie jest przesyłany na serwer.",
    ],
    faq: [
      { question: "Co jeśli mój PDF ma wiele stron?", answer: "Każda strona staje się osobnym obrazem JPG. Jeśli jest ich więcej niż jedna, są pakowane w jeden plik .zip do pobrania." },
      { question: "Jak ostre będą obrazy?", answer: "Strony są renderowane w wysokiej rozdzielczości odpowiedniej do ekranów i większości potrzeb drukowania. Wybierz poziom jakości, aby zrównoważyć ostrość i rozmiar pliku." },
      { question: "Czy mój PDF jest gdzieś przesyłany?", answer: "Nie. PDF na JPG przetwarza każdą stronę lokalnie w przeglądarce, więc plik nigdy nie opuszcza urządzenia." },
      { question: "Czy mogę przekonwertować tylko jedną stronę zamiast całego dokumentu?", answer: "Obecnie konwertowane są wszystkie strony. Użyj Połącz PDF lub czytnika PDF, aby wcześniej wyodrębnić pojedynczą stronę, jeśli potrzebujesz tylko jednego obrazu." },
    ],
  },
  "merge-pdf": {
    name: "Połącz PDF",
    actionLabel: "Połącz pliki PDF",
    shortDescription: "Połącz wiele plików PDF w jeden dokument, w wybranej przez siebie kolejności.",
    longDescription: [
      "Połącz PDF pozwala połączyć dwa lub więcej plików PDF w jeden dokument bez instalowania czegokolwiek. Dodaj pliki, przeciągnij, aby je uporządkować, i pobierz jeden połączony plik PDF.",
      "Wszystko działa lokalnie w przeglądarce, więc pliki nigdy nie są przesyłane na serwer. Oznacza to, że działa to nawet z poufnymi umowami, raportami czy dokumentami osobistymi.",
    ],
    faq: [
      { question: "Czy istnieje limit liczby plików PDF, które mogę połączyć?", answer: "Nie ma stałego limitu. Ponieważ łączenie odbywa się w przeglądarce, praktycznym ograniczeniem jest pamięć urządzenia, a nie limit serwera." },
      { question: "Czy mogę zmienić kolejność stron przed połączeniem?", answer: "Tak. Po dodaniu plików przeciągnij je w kolejności, w jakiej ma być końcowy dokument, przed połączeniem." },
      { question: "Czy moje pliki są przesyłane na serwery TAMPDF?", answer: "Nie. Połącz PDF przetwarza pliki całkowicie w przeglądarce za pomocą technologii po stronie klienta, więc dokumenty nigdy nie opuszczają urządzenia." },
      { question: "Czy łączenie wpłynie na jakość moich plików PDF?", answer: "Nie. Strony są łączone bez zmian, bez ponownej kompresji, więc tekst, obrazy i formatowanie pozostają dokładnie takie same jak w oryginałach." },
    ],
  },
  "rotate-pdf": {
    name: "Obróć PDF",
    actionLabel: "Obróć PDF",
    shortDescription: "Obróć pojedyncze strony lub cały PDF o 90°, 180° lub 270°, bezpośrednio w przeglądarce.",
    longDescription: [
      "Obróć PDF pozwala naprawić boczne lub odwrócone strony w kilka sekund. Prześlij jeden lub więcej plików PDF, zobacz miniaturę każdej strony, a następnie obróć cały dokument naraz lub tylko potrzebne strony.",
      "Wszystko działa lokalnie w przeglądarce, więc pliki nigdy nie są przesyłane na serwer. Prześlij wiele plików PDF jednocześnie, a każdy zostanie obrócony i zwrócony niezależnie.",
    ],
    faq: [
      { question: "Czy mogę obrócić tylko jedną stronę zamiast całego dokumentu?", answer: "Tak. Kliknij przycisk obrotu jednej strony, aby obrócić tylko ją, lub użyj przycisków „obróć wszystkie”, aby zastosować ten sam obrót do wszystkich stron naraz." },
      { question: "Jakie kąty obrotu są obsługiwane?", answer: "Możesz obracać strony o 90°, 180° lub 270° w dowolnym kierunku." },
      { question: "Czy mogę obrócić więcej niż jeden plik PDF naraz?", answer: "Tak. Prześlij wiele plików PDF, a każdy zostanie obrócony niezależnie. Jeśli prześlesz więcej niż jeden plik, obrócone pliki PDF zostaną spakowane w .zip do pobrania." },
      { question: "Czy mój PDF jest gdzieś przesyłany?", answer: "Nie. Obróć PDF przetwarza wszystko lokalnie w przeglądarce, więc pliki nigdy nie opuszczają urządzenia." },
    ],
  },
  "compress-image": {
    name: "Kompresuj obraz",
    actionLabel: "Kompresuj obrazy",
    shortDescription: "Zmniejsz rozmiar plików JPG, PNG i WebP przy zachowaniu jakości wizualnej.",
    longDescription: [
      "Kompresuj obraz zmniejsza rozmiar pliku Twoich zdjęć JPG, PNG lub WebP, dzięki czemu szybciej się je przesyła, wysyła e-mailem i ładuje na stronach internetowych.",
      "Kompresja odbywa się całkowicie w przeglądarce przy użyciu API canvas, więc Twoje zdjęcia nigdy nie opuszczają urządzenia, a Ty możesz kompresować wiele obrazów naraz.",
    ],
    faq: [
      { question: "Jakie formaty obrazów są obsługiwane?", answer: "Obrazy JPG, PNG i WebP są obsługiwane zarówno jako wejście, jak i wyjście." },
      { question: "Czy mogę skompresować wiele obrazów naraz?", answer: "Tak. Dodaj tyle obrazów, ile chcesz, a każdy zostanie skompresowany i spakowany w jeden plik .zip do pobrania lub pobrany indywidualnie." },
      { question: "O ile mogę zmniejszyć obraz bez utraty jakości?", answer: "Domyślne ustawienie jakości zwykle zmniejsza rozmiar pliku o 60-80% bez widocznej różnicy. Możesz dostosować suwak jakości dla innego kompromisu." },
      { question: "Czy moje zdjęcia są przesyłane na serwer?", answer: "Nie. Kompresja działa lokalnie w przeglądarce przy użyciu API canvas, więc obrazy nigdy nie są nigdzie wysyłane." },
    ],
  },
  "image-to-pdf": {
    name: "JPG na PDF",
    actionLabel: "Konwertuj na PDF",
    shortDescription: "Zamień jeden lub więcej obrazów JPG w jeden dokument PDF.",
    longDescription: [
      "JPG na PDF łączy Twoje zdjęcia JPG w jeden plik PDF, jedno zdjęcie na stronę, w wybranej przez Ciebie kolejności.",
      "Idealne do zamiany zeskanowanych dokumentów, paragonów lub zdjęć w łatwy do udostępnienia plik PDF. Wszystko jest przetwarzane lokalnie w przeglądarce dla pełnej prywatności.",
    ],
    faq: [
      { question: "Czy mogę połączyć wiele obrazów w jeden plik PDF?", answer: "Tak. Dodaj wiele obrazów, a każdy stanie się stroną w wynikowym pliku PDF, w kolejności, w jakiej je uporządkujesz." },
      { question: "Jaki rozmiar strony jest używany dla PDF?", answer: "Każda strona jest dopasowana do wymiarów i orientacji obrazu źródłowego, więc nic nie jest przycinane ani rozciągane." },
      { question: "Czy moje obrazy są gdzieś przesyłane?", answer: "Nie. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy pozostają na Twoim urządzeniu." },
      { question: "Czy obsługuje również obrazy PNG?", answer: "Tak, obrazy PNG są obsługiwane obok JPG. Zdjęcia HEIC z iPhone'a nie są jeszcze obsługiwane; przekonwertuj je najpierw na JPG za pomocą opcji udostępniania telefonu." },
    ],
  },
  "rotate-images": {
    name: "Obróć obrazy",
    actionLabel: "Obróć obrazy",
    shortDescription: "Obróć jeden lub więcej obrazów JPG, PNG lub WebP o 90°, 180° lub 270°.",
    longDescription: [
      "Obróć obrazy naprawia boczne lub odwrócone zdjęcia w kilka sekund. Prześlij jeden lub więcej obrazów, obróć każdy indywidualnie lub wszystkie naraz i pobierz wyniki.",
      "Wszystko działa lokalnie w przeglądarce, więc zdjęcia nigdy nie są przesyłane na serwer. Prześlij wiele obrazów jednocześnie, a każdy zostanie obrócony i zwrócony niezależnie.",
    ],
    faq: [
      { question: "Jakie formaty obrazów są obsługiwane?", answer: "Obsługiwane są obrazy JPG, PNG i WebP. Obracanie zachowuje oryginalny format." },
      { question: "Czy mogę obrócić tylko jeden obraz zamiast wszystkich?", answer: "Tak. Kliknij przycisk obrotu jednego obrazu, aby obrócić tylko go, lub użyj przycisków „obróć wszystkie”, aby zastosować ten sam obrót do wszystkich obrazów naraz." },
      { question: "Jakie kąty obrotu są obsługiwane?", answer: "Możesz obracać obrazy o 90°, 180° lub 270°." },
      { question: "Czy moje zdjęcia są gdzieś przesyłane?", answer: "Nie. Obróć obrazy przetwarza wszystko lokalnie w przeglądarce, więc zdjęcia nigdy nie opuszczają urządzenia." },
    ],
  },
  "split-pdf": {
    name: "Podziel PDF",
    actionLabel: "Podziel PDF",
    shortDescription: "Podziel jeden PDF na kilka mniejszych plików według zakresów stron lub na części o stałym rozmiarze.",
    longDescription: [
      "Podziel PDF dzieli duży dokument na osobne pliki PDF bez zmiany samych stron. Wpisz zakresy stron, takie jak 1-3, 5, 8-10, aby wyodrębnić dokładnie potrzebne sekcje, lub podziel cały dokument na równe części o stałej liczbie stron.",
      "Wszystko dzieje się w przeglądarce — PDF nigdy nie jest przesyłany na serwer. Pojedynczy wynik jest pobierany jako jeden plik PDF; wiele części jest pakowanych w .zip.",
    ],
    faq: [
      { question: "Jak wybrać, które strony trafią do którego pliku?", answer: "Użyj pola zakresów: coś w stylu „1-3, 5, 8-10” tworzy trzy pliki PDF — strony 1 do 3, samą stronę 5 i strony 8 do 10. Lub przełącz się na „co N stron”, aby pociąć dokument na równe części." },
      { question: "Czy podzielone pliki zachowują oryginalną jakość?", answer: "Tak. Strony są kopiowane bez zmian, bez ponownej kompresji, więc tekst, obrazy, czcionki i układ są identyczne ze źródłem." },
      { question: "Czy mój PDF jest gdzieś przesyłany?", answer: "Nie. Dzielenie odbywa się całkowicie w przeglądarce, więc dokument nigdy nie opuszcza urządzenia." },
      { question: "Co dzieje się z polami formularza lub podpisami cyfrowymi?", answer: "Zawartość strony i widżety formularza są zachowane wizualnie, ale interaktywne zachowanie formularza i podpisy nie są przenoszone do podzielonych plików. W razie potrzeby spłaszcz je lub podpisz ponownie później." },
    ],
  },
  "delete-pdf-pages": {
    name: "Usuń strony PDF",
    actionLabel: "Usuń strony",
    shortDescription: "Usuń niepotrzebne strony z PDF i pobierz uporządkowany dokument.",
    longDescription: [
      "Usuń strony PDF pozwala odrzucić niepotrzebne strony — puste skany, strony tytułowe, zduplikowane strony — i zachować resztę w oryginalnej kolejności. Zobacz miniaturę każdej strony, dotknij tych do usunięcia i pobierz wynik.",
      "Cały proces odbywa się lokalnie w przeglądarce, więc PDF nigdy nie jest przesyłany. Pozostałe strony są kopiowane bez ponownej kompresji, więc nic nie traci na jakości.",
    ],
    faq: [
      { question: "Czy mogę usunąć więcej niż jedną stronę naraz?", answer: "Tak. Wybierz dowolną liczbę stron w siatce miniatur, a następnie usuń je wszystkie w jednym kroku." },
      { question: "Czy mogę usunąć wszystkie strony?", answer: "Nie — przynajmniej jedna strona musi pozostać, więc przycisk jest wyłączony, jeśli wybrałeś wszystkie." },
      { question: "Czy usuwanie stron zmniejsza rozmiar pliku?", answer: "Zwykle nieznacznie, ponieważ zawartość usuniętych stron zostaje odrzucona. Współdzielone zasoby, takie jak czcionki, mogą pozostać, więc użyj Kompresuj PDF później, jeśli rozmiar ma znaczenie." },
      { question: "Czy moje pliki są przesyłane na serwer?", answer: "Nie. Wszystko dzieje się w przeglądarce, a PDF nigdy nie opuszcza urządzenia." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Zmień kolejność stron PDF",
    actionLabel: "Zmień kolejność stron",
    shortDescription: "Przeciągnij strony PDF, aby zmienić ich kolejność, i zapisz przekształcony dokument.",
    longDescription: [
      "Zmień kolejność stron PDF pokazuje miniaturę każdej strony, którą możesz przeciągnąć w żądaną kolejność — przenieść stronę na początek, zamienić dwie sekcje lub odwrócić cały dokument. Dostępne są również przyciski przenoszenia dla precyzyjnych zmian, strona po stronie.",
      "Zmiana kolejności odbywa się całkowicie w przeglądarce, więc PDF nigdy nie jest przesyłany. Strony są kopiowane bez zmian, więc jakość i formatowanie pozostają nienaruszone.",
    ],
    faq: [
      { question: "Jak przenieść stronę?", answer: "Przeciągnij jej miniaturę na nową pozycję lub użyj przycisków góra/dół na każdej stronie dla pojedynczych kroków. Nowa kolejność jest zapisywana po kliknięciu przycisku." },
      { question: "Czy mogę odwrócić cały dokument?", answer: "Tak — przeciągnij strony w odwrotnej kolejności lub użyj przycisków przenoszenia. Dowolna liczba stron może być zmieniona w jednym kroku." },
      { question: "Czy zmiana kolejności zmieni zawartość stron?", answer: "Nie. Zmienia się tylko kolejność stron — tekst, obrazy i układ każdej strony pozostają dokładnie takie same." },
      { question: "Czy PDF jest gdzieś przesyłany?", answer: "Nie. Zmiana kolejności działa lokalnie w przeglądarce, a plik nigdy nie opuszcza urządzenia." },
    ],
  },
  "crop-pdf": {
    name: "Przytnij PDF",
    actionLabel: "Przytnij PDF",
    shortDescription: "Przytnij marginesy każdej strony PDF, ustawiając wartości od góry, dołu i boków.",
    longDescription: [
      "Przytnij PDF usuwa niepotrzebne białe pola lub krawędzie skanowania z krawędzi stron. Ustaw, ile przyciąć od góry, dołu, lewej i prawej strony w procentach, obserwuj podgląd na żywo i zastosuj do wszystkich stron naraz.",
      "Przycinanie dostosowuje widoczny obszar strony bez usuwania żadnej zawartości — przycięte części są po prostu ukrywane. Wszystko dzieje się w przeglądarce, więc PDF nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Czy przycinanie usuwa zawartość poza przyciętym obszarem?", answer: "Nie. Przytnij PDF zmienia ramkę przycinania strony, co ukrywa zewnętrzny obszar w przeglądarkach i podczas drukowania. Podstawowa zawartość nadal znajduje się w pliku i może zostać przywrócona." },
      { question: "Czy to samo przycięcie jest stosowane do wszystkich stron?", answer: "Tak. Ustawione marginesy są stosowane do wszystkich stron. Strony o różnych rozmiarach są przycinane o ten sam procent." },
      { question: "Czy mogę przyciąć zeskanowany dokument, aby usunąć czarną ramkę?", answer: "Tak — to częste zastosowanie. Zwiększaj marginesy, aż podgląd pokaże tylko zawartość, którą chcesz zachować." },
      { question: "Czy mój plik jest przesyłany na serwer?", answer: "Nie. Przycinanie odbywa się całkowicie w przeglądarce, a PDF pozostaje na Twoim urządzeniu." },
    ],
  },
  "resize-pdf": {
    name: "Zmień rozmiar PDF",
    actionLabel: "Zmień rozmiar PDF",
    shortDescription: "Zmień rozmiar stron PDF na A4, Letter lub własną skalę, z dopasowaną i wyśrodkowaną zawartością.",
    longDescription: [
      "Zmień rozmiar PDF zmienia fizyczny rozmiar strony dokumentu. Wybierz standardowy rozmiar, taki jak A4 lub US Letter, a każda strona zostanie przeskalowana, aby pasowała i była wyśrodkowana, lub użyj procentu, aby proporcjonalnie zmniejszyć lub powiększyć strony.",
      "Zmiana rozmiaru odbywa się w przeglądarce bez przesyłania. Zawartość jest skalowana razem ze stroną, więc nic nie jest obcinane, a układ pozostaje proporcjonalny.",
    ],
    faq: [
      { question: "Jakie rozmiary stron mogę wybrać?", answer: "A4 i US Letter w orientacji pionowej lub poziomej, a także A3 i A5. Możesz również wprowadzić procent skali, aby zmienić rozmiar bez zmiany proporcji." },
      { question: "Czy moja zawartość zostanie rozciągnięta?", answer: "Nie. Zawartość jest skalowana równomiernie, aby pasowała do nowego rozmiaru i była wyśrodkowana na stronie, więc proporcje są zachowane i nic nie jest obcinane." },
      { question: "Czy mogę tym zmniejszyć rozmiar pliku PDF?", answer: "Nie bezpośrednio — to zmienia wymiary strony, a nie wagę pliku. Użyj Kompresuj PDF, aby zmniejszyć rozmiar pliku." },
      { question: "Czy moje pliki są gdzieś przesyłane?", answer: "Nie. Zmiana rozmiaru odbywa się lokalnie w przeglądarce, a PDF nigdy nie opuszcza urządzenia." },
    ],
  },
  "png-to-pdf": {
    name: "PNG na PDF",
    actionLabel: "Konwertuj na PDF",
    shortDescription: "Zamień jeden lub więcej obrazów PNG w jeden dokument PDF, jeden obraz na stronę.",
    longDescription: [
      "PNG na PDF łączy obrazy PNG w jeden plik PDF, z każdym obrazem na osobnej stronie w oryginalnej rozdzielczości. Dodaj wiele obrazów, uporządkuj ich kolejność i pobierz jeden dokument.",
      "Świetne do zamiany zrzutów ekranu, diagramów lub wyeksportowanej grafiki w łatwy do udostępnienia plik PDF. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane. Przezroczyste obszary są umieszczane na białym tle.",
    ],
    faq: [
      { question: "Czy mogę połączyć kilka plików PNG w jeden PDF?", answer: "Tak. Dodaj dowolną liczbę obrazów PNG, a każdy stanie się stroną w wynikowym pliku PDF, w kolejności, w jakiej je uporządkujesz." },
      { question: "Jaki rozmiar strony jest używany?", answer: "Każda strona odpowiada wymiarom pikselowym obrazu źródłowego, więc obrazy nie są przycinane ani rozciągane." },
      { question: "Co dzieje się z przezroczystymi częściami obrazu?", answer: "Przezroczystość jest spłaszczana do białego tła, aby strona wyglądała tak samo w każdej przeglądarce PDF." },
      { question: "Czy moje obrazy są przesyłane na serwer?", answer: "Nie. Konwersja odbywa się całkowicie w przeglądarce, a obrazy pozostają na Twoim urządzeniu." },
    ],
  },
  "extract-pdf-pages": {
    name: "Wyodrębnij strony PDF",
    actionLabel: "Wyodrębnij strony",
    shortDescription: "Wyodrębnij wybrane strony z PDF do nowego pliku — lub zapisz każdą stronę jako osobny PDF.",
    longDescription: [
      "Wyodrębnij strony PDF pozwala wybrać dokładnie potrzebne strony z dokumentu i zapisać je jako nowy PDF. Zobacz miniaturę każdej strony, dotknij tych do zachowania i pobierz je razem — lub jako osobne jednostronicowe pliki PDF w ZIP.",
      "Twój oryginalny plik pozostaje niezmieniony, a strony są kopiowane bez zmian, więc tekst, obrazy i formatowanie pozostają nienaruszone. Wszystko dzieje się w przeglądarce, więc PDF nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Jaka jest różnica między wyodrębnianiem a dzieleniem?", answer: "Wyodrębnianie zapisuje tylko wybrane strony w nowym pliku PDF. Dzielenie dzieli cały dokument na kilka części według zakresów stron lub stałych rozmiarów." },
      { question: "Czy mogę zapisać każdą wyodrębnioną stronę jako osobny plik?", answer: "Tak. Wybierz „Osobne pliki PDF”, a każda wybrana strona stanie się osobnym plikiem PDF, spakowanym w jednym pobraniu .zip." },
      { question: "Czy wyodrębnione strony stracą jakość?", answer: "Nie. Strony są kopiowane bez ponownej kompresji, więc wyglądają dokładnie jak oryginał. Interaktywne pola formularza mogą stać się zwykłą zawartością strony." },
      { question: "Czy mój PDF jest przesyłany na serwer?", answer: "Nie. Strony są wyodrębniane lokalnie w przeglądarce, a plik nigdy nie opuszcza urządzenia." },
    ],
  },
  "add-page-numbers": {
    name: "Dodaj numerację stron",
    actionLabel: "Dodaj numerację stron",
    shortDescription: "Ponumeruj strony PDF, wybierając pozycję, format i numer początkowy.",
    longDescription: [
      "Dodaj numerację stron umieszcza numer na każdej stronie PDF. Wybierz jedną z sześciu pozycji, styl taki jak „1”, „1 / 10” lub „Strona 1 z 10”, ustaw numer początkowy i opcjonalnie pomiń stronę tytułową.",
      "Numery są rysowane jako prawdziwy tekst w standardowej czcionce, więc drukują się wyraźnie i pozostają pionowe nawet na obróconych stronach. Cały proces odbywa się w przeglądarce — dokument nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Czy mogę zacząć numerację od innej liczby niż 1?", answer: "Tak. Ustaw dowolny numer początkowy — przydatne, gdy Twój PDF jest rozdziałem lub załącznikiem większego dokumentu." },
      { question: "Czy mogę zostawić stronę tytułową bez numeru?", answer: "Tak. Włącz „Nie numeruj pierwszej strony”, a numeracja zacznie się od drugiej strony." },
      { question: "Jakie cyfry są używane?", answer: "Standardowe cyfry (1, 2, 3), które są poprawnie wyświetlane w każdym czytniku PDF. Etykiety takie jak „Strona 1 z 10” są napisane po polsku." },
      { question: "Czy mój plik jest przesyłany?", answer: "Nie. Numery stron są dodawane lokalnie w przeglądarce, a PDF pozostaje na Twoim urządzeniu." },
    ],
  },
  "add-watermark": {
    name: "Dodaj znak wodny",
    actionLabel: "Dodaj znak wodny",
    shortDescription: "Umieść tekst, np. POUFNE lub WERSJA ROBOCZA, na każdej stronie PDF.",
    longDescription: [
      "Dodaj znak wodny umieszcza Twój tekst na każdej stronie PDF — raz na środku lub powtórzony na całej stronie. Wybierz kolor, przezroczystość, rozmiar i kąt, i zobacz podgląd na żywo na pierwszej stronie przed zastosowaniem.",
      "Polski i inne pisma są w pełni obsługiwane. Znak wodny jest zapisywany jako standardowy obiekt znaku wodnego, a wszystko dzieje się w przeglądarce, więc dokument nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Czy mogę napisać znak wodny po polsku?", answer: "Tak. Tekst jest renderowany przy użyciu czcionek Twojej przeglądarki, więc polski i inne pisma są poprawnie wyświetlane." },
      { question: "Czy znak wodny może być powtórzony na stronie?", answer: "Tak. Wybierz układ „Powtórzony”, aby ułożyć tekst kafelkowo na całej stronie, lub „Raz, na środku” dla pojedynczego stempla." },
      { question: "Czy znak wodny można później usunąć?", answer: "Jest zapisywany jako standardowy obiekt znaku wodnego, więc narzędzia rozpoznające znaki wodne — w tym Usuń znak wodny TAMPDF — mogą go usunąć. To nie jest funkcja bezpieczeństwa." },
      { question: "Czy mój PDF jest gdzieś przesyłany?", answer: "Nie. Znak wodny jest stosowany lokalnie w przeglądarce." },
    ],
  },
  "remove-watermark": {
    name: "Usuń znak wodny",
    actionLabel: "Usuń znak wodny",
    shortDescription: "Usuń znaki wodne dodane jako obiekty znaku wodnego w PDF.",
    longDescription: [
      "Usuń znak wodny znajduje i usuwa znaki wodne dodane jako obiekty znaku wodnego — rodzaj tworzony przez Adobe Acrobat, TAMPDF i większość edytorów PDF — wraz z adnotacjami znaku wodnego i warstwami o nazwie „Watermark”. Reszta każdej strony pozostaje dokładnie taka sama.",
      "Znaki wodne będące częścią zeskanowanego obrazu lub scalone ze zwykłym tekstem strony nie mają znacznika odróżniającego je od prawdziwej zawartości, więc nie można ich automatycznie usunąć. Usuwaj znaki wodne tylko z dokumentów, do których edycji masz prawo. Przetwarzanie odbywa się w przeglądarce, więc plik nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Jakie znaki wodne można usunąć?", answer: "Znaki wodne dodane jako obiekty znaku wodnego, adnotacje znaku wodnego lub warstwy o nazwie „Watermark” — w tym utworzone przez Adobe Acrobat i narzędzie Dodaj znak wodny TAMPDF." },
      { question: "Dlaczego znak wodny w moim pliku nie został usunięty?", answer: "Jeśli znak wodny jest częścią zeskanowanego obrazu strony lub został spłaszczony w tekście strony, nie można go oddzielić od prawdziwej zawartości bez uszkodzenia strony." },
      { question: "Czy usunięcie znaku wodnego wpływa na resztę strony?", answer: "Nie. Usuwana jest tylko oznaczona zawartość znaku wodnego; tekst, obrazy i układ pozostają nienaruszone." },
      { question: "Czy mój plik jest przesyłany?", answer: "Nie. PDF jest przetwarzany lokalnie w przeglądarce." },
    ],
  },
  "pdf-to-images": {
    name: "PDF na obrazy",
    actionLabel: "Konwertuj na obrazy",
    shortDescription: "Zamień każdą stronę PDF na obrazy PNG, JPG lub WEBP, pobrane jako ZIP.",
    longDescription: [
      "PDF na obrazy renderuje każdą stronę PDF jako osobny obraz w wybranym formacie: PNG dla najostrzejszego tekstu, JPG dla najmniejszych plików lub WEBP dla nowoczesnych, kompaktowych obrazów. Wybierz rozdzielczość, a każda strona zostanie wyeksportowana i spakowana w jeden plik .zip.",
      "Renderowanie odbywa się bezpośrednio w przeglądarce przy użyciu PDF.js, więc dokument nigdy nie jest przesyłany na serwer.",
    ],
    faq: [
      { question: "Jaki format obrazu wybrać?", answer: "PNG zachowuje tekst i grafikę liniową idealnie ostrą. JPG tworzy mniejsze pliki i nadaje się do zdjęć. WEBP oferuje dobrą równowagę do użytku w internecie." },
      { question: "Jaka jest rozdzielczość obrazów?", answer: "Standardowa renderuje przy 108 dpi, Wysoka przy 144 dpi, a Maksymalna przy 216 dpi — wystarczająco wysoko, aby wydrukować większość dokumentów." },
      { question: "Jak uzyskać wszystkie strony naraz?", answer: "Każda strona jest konwertowana i pakowana w jeden plik .zip. Jednostronicowy PDF jest pobierany jako pojedynczy obraz." },
      { question: "Czy mój PDF jest przesyłany?", answer: "Nie. Strony są renderowane lokalnie w przeglądarce." },
    ],
  },
  "images-to-pdf": {
    name: "Obrazy na PDF",
    actionLabel: "Utwórz PDF",
    shortDescription: "Połącz obrazy JPG, PNG i WEBP w jeden PDF, w wybranej przez siebie kolejności.",
    longDescription: [
      "Obrazy na PDF zamienia zestaw zdjęć, skanów lub zrzutów ekranu w jeden dokument PDF. Dodaj obrazy JPG, PNG lub WEBP, przeciągnij miniatury w żądaną kolejność i wybierz stronę A4 lub Letter (z automatyczną orientacją) lub strony dopasowane do każdego obrazu.",
      "Dodaj margines dla czystego wyglądu wydruku. Przezroczyste obszary są umieszczane na białym tle, a cała konwersja odbywa się w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Czy mogę zmienić kolejność obrazów?", answer: "Tak. Przeciągnij miniatury lub użyj przycisków strzałek, aby ustawić kolejność stron przed utworzeniem PDF." },
      { question: "Jakie formaty obrazów są obsługiwane?", answer: "JPG, PNG i WEBP. Możesz mieszać formaty w tym samym pliku PDF." },
      { question: "Jaki rozmiar strony będzie używał PDF?", answer: "Wybierz A4 lub Letter — każdy obraz jest dopasowany do strony i obracany na poziomy w razie potrzeby — lub „Dopasuj do obrazu”, aby każda strona miała dokładnie rozmiar swojego obrazu." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. PDF jest tworzony lokalnie w przeglądarce." },
    ],
  },
  "flip-pdf": {
    name: "Odbij PDF",
    actionLabel: "Odbij PDF",
    shortDescription: "Odbij strony PDF w poziomie lub w pionie.",
    longDescription: [
      "Odbij PDF odbija lustrzanie każdą stronę dokumentu — od lewej do prawej lub od góry do dołu. Przydatne do drukowania nadruków termicznych, poprawiania skanów zrobionych z niewłaściwej strony lub przygotowywania odbitej grafiki.",
      "Wyświetl podgląd wyniku na pierwszej stronie przed zastosowaniem. Odbicie uwzględnia również obrócone strony, a wszystko dzieje się w przeglądarce, więc plik nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Jaka jest różnica między odbiciem a obrotem?", answer: "Obrót obraca stronę w krokach po 90°. Odbicie tworzy lustrzane odbicie, więc tekst czyta się wspak — tego właśnie potrzebujesz do nadruków i niektórych prac drukarskich." },
      { question: "Czy mogę odbić tylko jedną stronę?", answer: "Odbicie dotyczy wszystkich stron. Aby odbić pojedynczą stronę, najpierw wyodrębnij ją za pomocą Wyodrębnij strony PDF." },
      { question: "Czy odbicie zmniejsza jakość?", answer: "Nie. Strony są przekształcane, a nie renderowane ponownie, więc tekst i grafika pozostają tak ostre jak oryginał." },
      { question: "Czy mój PDF jest przesyłany?", answer: "Nie. Odbicie odbywa się lokalnie w przeglądarce." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Edytuj metadane PDF",
    actionLabel: "Edytuj metadane",
    shortDescription: "Zmień tytuł, autora, temat i słowa kluczowe PDF.",
    longDescription: [
      "Edytuj metadane PDF pozwala wyświetlać i zmieniać właściwości dokumentu przechowywane wewnątrz PDF — tytuł, autora, temat, słowa kluczowe, twórcę i producenta. To właśnie te informacje pokazują czytniki PDF, wyszukiwarki i menedżery plików o Twoim dokumencie.",
      "Pozostaw pole puste, aby je usunąć. Zawartość strony nie jest naruszana, a cała edycja odbywa się w przeglądarce, więc plik nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Dlaczego warto edytować metadane PDF?", answer: "Wyraźny tytuł i autor ułatwiają znalezienie dokumentów i sprawiają, że wyglądają bardziej profesjonalnie przy udostępnianiu, a wyszukiwarki mogą je wykorzystać podczas indeksowania plików PDF." },
      { question: "Czy edycja metadanych zmieni zawartość dokumentu?", answer: "Nie. Zmieniają się tylko właściwości dokumentu; strony, tekst i obrazy pozostają dokładnie takie same." },
      { question: "Jak usunąć właściwość?", answer: "Wyczyść pole i zapisz. Puste pola są usuwane z pliku." },
      { question: "Czy mój PDF jest przesyłany?", answer: "Nie. Właściwości są edytowane lokalnie w przeglądarce." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Usuń metadane PDF",
    actionLabel: "Usuń metadane",
    shortDescription: "Usuń autora, tytuł, oprogramowanie i inne ukryte właściwości z PDF przed jego udostępnieniem.",
    longDescription: [
      "Usuń metadane PDF czyści właściwości dokumentu i ukryte dane, które niesie PDF — autora, tytuł, temat, słowa kluczowe, oprogramowanie użyte do jego utworzenia, daty utworzenia oraz osadzone pakiety metadanych XMP.",
      "To szybki krok ochrony prywatności przed publicznym udostępnieniem pliku. Zawartość strony pozostaje nietknięta, a czyszczenie odbywa się w przeglądarce, więc plik nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Jakie informacje są usuwane?", answer: "Tytuł, autor, temat, słowa kluczowe, oprogramowanie twórcy i producenta, daty utworzenia i modyfikacji, osadzone metadane XMP oraz prywatne dane aplikacji." },
      { question: "Czy to zmienia wygląd dokumentu?", answer: "Nie. Usuwane są tylko ukryte właściwości; każda strona wygląda dokładnie tak samo." },
      { question: "Czy to usuwa dane osobowe wydrukowane na stronach?", answer: "Nie. Usuwa tylko metadane. Nazwiska lub szczegóły wydrukowane na stronach pozostają widoczne." },
      { question: "Czy mój PDF jest przesyłany?", answer: "Nie. Plik jest czyszczony lokalnie w przeglądarce." },
    ],
  },
  "pdf-info": {
    name: "Informacje o PDF",
    actionLabel: "Sprawdź PDF",
    shortDescription: "Zobacz liczbę stron, ich rozmiary, wersję i właściwości PDF na pierwszy rzut oka.",
    longDescription: [
      "Informacje o PDF odczytuje plik PDF i pokazuje, co się w nim znajduje: liczbę stron, rozmiar każdej strony w milimetrach z nazwami papieru, takimi jak A4 lub Letter, wersję PDF, czy jest zaszyfrowany lub zawiera wypełniany formularz, oraz tytuł, autora, oprogramowanie i daty.",
      "Przydatne przed drukowaniem, przesyłaniem lub konwertowaniem pliku. Dokument jest tylko odczytywany — nigdy nie zmieniany — a wszystko dzieje się w przeglądarce, więc nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Jakie szczegóły pokazuje Informacje o PDF?", answer: "Liczbę stron, rozmiary stron z nazwami papieru, wersję PDF, rozmiar pliku, szyfrowanie, wypełniane formularze, szybki podgląd internetowy oraz właściwości dokumentu, takie jak tytuł, autor i data utworzenia." },
      { question: "Czy Informacje o PDF zmieniają mój plik?", answer: "Nie. PDF jest tylko odczytywany; nic nie jest modyfikowane ani zapisywane." },
      { question: "Czy mogę sprawdzić PDF chroniony hasłem?", answer: "Plików wymagających hasła do otwarcia nie można odczytać bez niego. Pliki z samymi ograniczeniami edycji są pokazywane jako zaszyfrowane." },
      { question: "Czy mój PDF jest przesyłany?", answer: "Nie. Jest odczytywany lokalnie w przeglądarce." },
    ],
  },
  "resize-image": {
    name: "Zmień rozmiar obrazu",
    actionLabel: "Zmień rozmiar obrazów",
    shortDescription: "Zmień szerokość i wysokość obrazów JPG, PNG i WEBP — procentowo lub w dokładnych pikselach.",
    longDescription: [
      "Zmień rozmiar obrazu zmienia wymiary Twoich zdjęć i grafik. Skaluj procentowo lub wpisz dokładną szerokość i wysokość z zablokowanymi proporcjami, aby nic nie wyglądało na rozciągnięte. Zmień rozmiar wielu obrazów naraz i pobierz je razem w .zip.",
      "Obrazy zachowują oryginalny format, a wysokiej jakości wygładzanie utrzymuje pomniejszone obrazy ostre. Wszystko dzieje się w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Czy zmiana rozmiaru sprawi, że mój obraz będzie rozmyty?", answer: "Zmniejszenie obrazu zachowuje jego ostrość. Powiększenie ponad oryginalny rozmiar nie może dodać szczegółów, więc duże powiększenia mogą wyglądać miękko." },
      { question: "Czy mogę zmienić rozmiar wielu obrazów naraz?", answer: "Tak. Dodaj do 20 obrazów; przy zablokowanych proporcjach każdy zachowuje własne proporcje przy ustawionej przez Ciebie szerokości." },
      { question: "W jakim formacie będzie obraz o zmienionym rozmiarze?", answer: "Tym samym co oryginał — JPG pozostaje JPG, PNG pozostaje PNG, a WEBP pozostaje WEBP tam, gdzie obsługuje to Twoja przeglądarka." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Zmiana rozmiaru odbywa się lokalnie w przeglądarce." },
    ],
  },
  "crop-image": {
    name: "Przytnij obraz",
    actionLabel: "Przytnij obraz",
    shortDescription: "Przytnij obraz do wybranego obszaru za pomocą przeciąganej ramki kadrowania.",
    longDescription: [
      "Przytnij obraz usuwa niepotrzebne krawędzie ze zdjęcia lub zrzutu ekranu. Przeciągnij ramkę kadrowania lub jej rogi po podglądzie — lub dostosuj precyzyjnie każdą krawędź suwakiem — i zobacz dokładny rozmiar wyniku w pikselach.",
      "Przycięty obraz zachowuje oryginalny format i jakość, a cały proces odbywa się w przeglądarce, więc obraz nigdy nie jest przesyłany.",
    ],
    faq: [
      { question: "Czy mogę przyciąć do dokładnych wymiarów?", answer: "Dostosuj każdą krawędź suwakami i obserwuj, jak rozmiar wyniku aktualizuje się w pikselach w miarę postępu." },
      { question: "Czy przycinanie zmniejsza jakość obrazu?", answer: "Nie. Zachowane piksele są kopiowane bez zmian; usuwane są tylko części poza ramką." },
      { question: "Jakie formaty mogę przycinać?", answer: "JPG, PNG i WEBP. Wynik zachowuje ten sam format co oryginał." },
      { question: "Czy mój obraz jest przesyłany?", answer: "Nie. Przycinanie odbywa się lokalnie w przeglądarce." },
    ],
  },
  "flip-image": {
    name: "Odbij obraz",
    actionLabel: "Odbij obrazy",
    shortDescription: "Odbij obrazy w poziomie lub w pionie — pojedynczo lub masowo.",
    longDescription: [
      "Odbij obraz tworzy lustrzane odbicie Twoich zdjęć: od lewej do prawej lub od góry do dołu. Przydatne do poprawiania selfie zrobionych aparatem przednim, tworzenia odbić lub przygotowywania projektów do nadruków.",
      "Odbij wiele obrazów naraz, natychmiast podejrzyj wynik i pobierz je w oryginalnym formacie. Wszystko dzieje się w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Jaka jest różnica między odbiciem a obrotem?", answer: "Obrót obraca obraz w krokach po 90°. Odbicie odbija go lustrzanie, jak spojrzenie w lustro." },
      { question: "Czy mogę odbić wiele obrazów naraz?", answer: "Tak. Dodaj do 20 obrazów, a wszystkie zostaną odbite w ten sam sposób, a następnie pobrane razem jako .zip." },
      { question: "Czy odbicie zmniejsza jakość?", answer: "Brak zauważalnej utraty jakości — PNG pozostaje bezstratny, a JPG i WEBP są zapisywane w wysokiej jakości." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Odbicie odbywa się lokalnie w przeglądarce." },
    ],
  },
  "png-to-jpg": {
    name: "PNG na JPG",
    actionLabel: "Konwertuj na JPG",
    shortDescription: "Konwertuj obrazy PNG na JPG, aby uzyskać mniejsze i bardziej kompatybilne pliki.",
    longDescription: [
      "PNG na JPG konwertuje Twoje obrazy PNG na pliki JPG, zwykle znacznie mniejsze — idealne do zdjęć, załączników e-mail i formularzy przesyłania, które akceptują tylko JPG. Konwertuj wiele obrazów naraz i dostosuj jakość, aby zrównoważyć rozmiar i ostrość.",
      "JPG nie obsługuje przezroczystości, więc przezroczyste obszary są wypełniane bielą. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Dlaczego konwertować PNG na JPG?", answer: "Pliki JPG są zwykle znacznie mniejsze niż PNG dla zdjęć i są akceptowane prawie wszędzie, od e-maili po formularze online." },
      { question: "Co dzieje się z przezroczystym tłem?", answer: "JPG nie ma przezroczystości, więc przezroczyste obszary są wypełniane bielą." },
      { question: "Czy mogę przekonwertować wiele plików PNG naraz?", answer: "Tak. Dodaj do 30 obrazów; są konwertowane razem i pobierane jako .zip." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Konwersja odbywa się lokalnie w przeglądarce." },
    ],
  },
  "jpg-to-png": {
    name: "JPG na PNG",
    actionLabel: "Konwertuj na PNG",
    shortDescription: "Konwertuj zdjęcia JPG na obrazy PNG bez utraty jakości.",
    longDescription: [
      "JPG na PNG konwertuje Twoje obrazy JPG lub JPEG do formatu PNG. PNG jest bezstratny, więc obraz nie straci więcej jakości podczas kolejnej edycji i zapisywania — przydatne dla grafik, nad którymi będziesz nadal pracować, lub dla narzędzi i platform wymagających PNG.",
      "Konwertuj wiele obrazów naraz i pobierz je razem. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Czy konwersja JPG na PNG poprawi jakość?", answer: "Nie — szczegóły już utracone w JPG nie mogą zostać przywrócone. Ale PNG zapobiega dalszej utracie podczas kolejnej edycji i zapisywania." },
      { question: "Dlaczego PNG jest większy niż JPG?", answer: "PNG przechowuje każdy piksel bez kompresji stratnej, więc zdjęcia zwykle stają się większe. To kompromis za jakość bezstratną." },
      { question: "Czy mogę przekonwertować kilka plików JPG naraz?", answer: "Tak. Dodaj do 30 obrazów i pobierz jako .zip." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Konwersja odbywa się lokalnie w przeglądarce." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP na JPG",
    actionLabel: "Konwertuj na JPG",
    shortDescription: "Konwertuj obrazy WEBP na JPG, aby otwierały się w każdej aplikacji lub witrynie.",
    longDescription: [
      "WEBP na JPG konwertuje nowoczesne obrazy WEBP — powszechne na stronach internetowych — na JPG, format obsługiwany praktycznie przez każdą aplikację, urządzenie i formularz przesyłania. Konwertuj jeden obraz lub wiele naraz i dostosuj jakość, aby zrównoważyć rozmiar i ostrość.",
      "Przezroczyste obszary są wypełniane bielą, ponieważ JPG nie obsługuje przezroczystości. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Dlaczego konwertować WEBP na JPG?", answer: "Niektóre starsze aplikacje, edytory i formularze przesyłania nie akceptują WEBP. JPG działa prawie wszędzie." },
      { question: "Czy stracę na jakości?", answer: "Przy domyślnej jakości różnicę trudno dostrzec. Zwiększ suwak jakości, aby uzyskać najostrzejszy wynik." },
      { question: "Czy mogę przekonwertować kilka obrazów WEBP naraz?", answer: "Tak. Dodaj do 30 obrazów i pobierz jako .zip." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Konwersja odbywa się lokalnie w przeglądarce." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG na WEBP",
    actionLabel: "Konwertuj na WEBP",
    shortDescription: "Konwertuj zdjęcia JPG na WEBP dla mniejszych, szybciej ładujących się obrazów w internecie.",
    longDescription: [
      "JPG na WEBP konwertuje Twoje obrazy JPG na WEBP, nowoczesny format, który zwykle daje znacznie mniejsze pliki przy podobnej jakości wizualnej — świetny do przyspieszania stron internetowych i oszczędzania miejsca na dysku.",
      "Dostosuj jakość, aby znaleźć odpowiednią równowagę, i konwertuj wiele obrazów naraz. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane. Tworzenie plików WEBP wymaga najnowszej wersji Chrome, Edge lub Firefox.",
    ],
    faq: [
      { question: "Czy WEBP jest mniejszy niż JPG?", answer: "Zwykle tak — WEBP często oszczędza znaczną ilość miejsca przy podobnej jakości, co pomaga stronom ładować się szybciej." },
      { question: "Czy wszystkie przeglądarki obsługują WEBP?", answer: "Wszystkie nowoczesne przeglądarki mogą wyświetlać WEBP. Tworzenie plików WEBP tutaj wymaga najnowszej wersji Chrome, Edge lub Firefox." },
      { question: "Czy mogę przekonwertować kilka plików JPG naraz?", answer: "Tak. Dodaj do 30 obrazów i pobierz jako .zip." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Konwersja odbywa się lokalnie w przeglądarce." },
    ],
  },
  "webp-to-png": {
    name: "WEBP na PNG",
    actionLabel: "Konwertuj na PNG",
    shortDescription: "Konwertuj obrazy WEBP na PNG, zachowując przezroczystość.",
    longDescription: [
      "WEBP na PNG konwertuje obrazy WEBP na PNG, bezstratny format obsługiwany przez każdy edytor obrazów. Przezroczystość jest zachowana, więc loga, ikony i wycięte grafiki zachowują przezroczyste tła.",
      "Konwertuj wiele obrazów naraz i pobierz je razem. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane.",
    ],
    faq: [
      { question: "Czy przezroczystość jest zachowana?", answer: "Tak. PNG obsługuje przezroczystość, więc przezroczyste obszary w Twoim obrazie WEBP pozostają przezroczyste." },
      { question: "Dlaczego konwertować WEBP na PNG?", answer: "PNG otwiera się w każdym edytorze i narzędziu projektowym i nie straci jakości podczas kolejnej edycji i zapisywania." },
      { question: "Czy mogę przekonwertować kilka plików WEBP naraz?", answer: "Tak. Dodaj do 30 obrazów i pobierz jako .zip." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Konwersja odbywa się lokalnie w przeglądarce." },
    ],
  },
  "png-to-webp": {
    name: "PNG na WEBP",
    actionLabel: "Konwertuj na WEBP",
    shortDescription: "Konwertuj obrazy PNG na WEBP dla mniejszych plików zachowujących przezroczystość.",
    longDescription: [
      "PNG na WEBP konwertuje Twoje obrazy PNG na WEBP, co zwykle znacznie zmniejsza pliki przy zachowaniu przezroczystości — idealne do grafik stron internetowych, ikon i zrzutów ekranu.",
      "Wybierz jakość, konwertuj wiele obrazów naraz i pobierz je razem. Konwersja odbywa się całkowicie w przeglądarce, więc obrazy nigdy nie są przesyłane. Tworzenie plików WEBP wymaga najnowszej wersji Chrome, Edge lub Firefox.",
    ],
    faq: [
      { question: "Czy WEBP zachowuje przezroczystość?", answer: "Tak. WEBP obsługuje przezroczystość, więc przezroczyste obszary PNG pozostają przezroczyste." },
      { question: "O ile zmniejszą się moje obrazy?", answer: "To zależy, ale pliki WEBP są często znacznie mniejsze niż ten sam obraz zapisany jako PNG." },
      { question: "Czy mogę przekonwertować kilka plików PNG naraz?", answer: "Tak. Dodaj do 30 obrazów i pobierz jako .zip." },
      { question: "Czy moje obrazy są przesyłane?", answer: "Nie. Konwersja odbywa się lokalnie w przeglądarce." },
    ],
  },
};
