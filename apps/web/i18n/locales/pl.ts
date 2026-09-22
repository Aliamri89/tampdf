import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const pl: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Zmień język" } },
  breadcrumb: { home: "Strona główna" },
  tool: {
    processedClient: "Przetwarzane w Twojej przeglądarce — pliki nigdy nie są przesyłane",
    faqHeading: "Najczęściej zadawane pytania",
    relatedHeading: "Powiązane narzędzia",
    metaTitleSuffix: "— Darmowe narzędzie online",
  },
  article: {
    tocHeading: "Spis treści",
    readingTime: "{minutes} min czytania",
    readingTimeOne: "1 min czytania",
    readingTimeTwo: "2 min czytania",
    published: "Opublikowano {date}",
    updated: "Zaktualizowano {date}",
    relatedHeading: "Powiązane artykuły",
    previousArticle: "Poprzedni",
    nextArticle: "Następny",
    ctaDefaultHeading: "Gotowy, by wypróbować {tool}?",
    ctaCompressPdfButtonLabel: "Skompresuj PDF za darmo",
  },
  card: { comingSoon: "Wkrótce" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Darmowe, szybkie i łatwe w użyciu narzędzia PDF",
    toolPicker: {
      trigger: "Wybierz narzędzie PDF",
      ariaLabel: "Menu narzędzi PDF",
      loadMore: "Więcej narzędzi",
      allShown: "Wyświetlono wszystkie narzędzia",
    },
    features: { devices: "Działa na każdym urządzeniu", fast: "Szybkie", secure: "Bezpieczne" },
  },
  footer: {
    rights: "Wszelkie prawa zastrzeżone.",
    privacyNote: "Pliki są przetwarzane bezpiecznie i nigdy nie są przechowywane dłużej niż to konieczne.",
    moreCount: "+{count} więcej",
    company: "Firma",
    legal: "Informacje prawne",
    aboutUs: "O nas",
    contactUs: "Kontakt",
    blog: "Blog",
    faq: "Najczęściej zadawane pytania",
    privacyPolicy: "Polityka prywatności",
    termsOfService: "Warunki korzystania z usługi",
    cookiePolicy: "Polityka plików cookie",
  },
  staticPages: {
    note: "Ta strona jest tymczasowa — pełna treść pojawi się wkrótce.",
    aboutUs: {
      title: "O nas",
      intro:
        "TAMPDF to darmowy zestaw narzędzi online stworzony, aby codzienne zadania na plikach — łączenie, dzielenie, kompresowanie i konwertowanie plików PDF, obrazów i dokumentów — były szybkie, prywatne i bezwysiłkowe.",
    },
    contactUs: {
      title: "Kontakt",
      intro: "Masz pytanie, znalazłeś błąd lub chcesz zaproponować nowe narzędzie? Chętnie Cię wysłuchamy.",
    },
    blog: { title: "Blog", intro: "Przygotowujemy artykuły o formatach plików, wskazówkach dotyczących produktywności i aktualizacjach produktu." },
    faq: {
      title: "Najczęściej zadawane pytania",
      intro: "Ogólne odpowiedzi dotyczące TAMPDF pojawią się tutaj wkrótce. W międzyczasie każde narzędzie ma własne FAQ.",
    },
    privacyPolicy: {
      title: "Polityka prywatności",
      intro: "Nasza pełna polityka prywatności, dokładnie wyjaśniająca, jak TAMPDF przetwarza Twoje pliki i dane, jest finalizowana i wkrótce zostanie tu opublikowana.",
    },
    termsOfService: {
      title: "Warunki korzystania z usługi",
      intro: "Niniejsze Warunki korzystania z usługi regulują korzystanie z narzędzi i strony TAMPDF, w tym wyłączenie gwarancji i ograniczenie odpowiedzialności.",
    },
    cookiePolicy: {
      title: "Polityka plików cookie",
      intro: "Szczegóły dotyczące plików cookie i podobnych technologii używanych przez TAMPDF zostaną wkrótce opublikowane tutaj.",
    },
  },
  dropzone: {
    browse: "lub kliknij, aby przeglądać",
    defaultLabel: "Przeciągnij i upuść plik tutaj",
    unsupportedType: "{name} nie jest obsługiwanym typem pliku i został pominięty.",
    unsupportedTypePlural: "{count} plików nie miało obsługiwanego typu i zostały pominięte.",
    tooLarge: "{name} jest zbyt duży (maks. {max}) i został pominięty.",
    tooLargePlural: "{count} plików było zbyt dużych (maks. {max}) i zostały pominięte.",
    maxFilesReached: "Dodano już maksymalną liczbę {max} plików dla tego narzędzia.",
    maxFilesExceeded: "To narzędzie pozwala na maksymalnie {max} plików naraz, więc dodano tylko {added} z Twoich plików.",
  },
  fileList: { moveUp: "Przesuń w górę", moveDown: "Przesuń w dół", remove: "Usuń {name}" },
  result: {
    ready: "Twój plik jest gotowy",
    download: "Pobierz",
    startOver: "Zacznij od nowa",
    smaller: "mniejszy",
    originalSize: "Rozmiar oryginalny",
    newSize: "Nowy rozmiar",
    reducedBy: "Zmniejszono o",
    spaceSaved: "Zaoszczędzone miejsce",
  },
  notFound: {
    title: "Nie znaleziono strony",
    description: "Strona, której szukasz, nie istnieje lub mogła zostać przeniesiona.",
    cta: "Powrót do strony głównej",
  },
};
