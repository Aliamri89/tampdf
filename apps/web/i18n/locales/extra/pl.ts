import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Reklama"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Podgląd — zostanie zastosowany do obrazu",
      formatsNote: "Obsługiwane pliki: PDF, JPG, PNG i WebP"
    },
    removeWatermark: {
      intro: "Usuwa znaki wodne dodane jako obiekty znaku wodnego: w plikach PDF (przez Adobe Acrobat, TAMPDF i większość edytorów) oraz w dokumentach Word (Projektowanie ▸ Znak wodny). Znaki wodne wtopione w piksele obrazu nie dają się od niego oddzielić, dlatego obrazy nie są obsługiwane.",
      formatsNote: "Obsługiwane pliki: PDF i Word (.docx)",
      noneFoundWord: "Nie znaleziono w tym dokumencie znaku wodnego Word. Można usunąć tylko znaki wodne dodane funkcją Znak wodny samego programu Word."
    }
  },
  consent: {
    title: "Pliki cookie i analityka",
    description: "Używamy analitycznych plików cookie (Google Analytics i Microsoft Clarity), aby zrozumieć, jak korzysta się z serwisu. Działają tylko po wyrażeniu zgody. Twoje pliki nigdy nie opuszczają przeglądarki.",
    accept: "Akceptuj",
    reject: "Odrzuć",
    settings: "Ustawienia plików cookie",
    statusOn: "Analityczne pliki cookie są obecnie włączone.",
    statusOff: "Analityczne pliki cookie są obecnie wyłączone.",
    close: "Zamknij"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Jak TAMPDF traktuje Twoje pliki i dane: pliki są przetwarzane w przeglądarce i nigdy nie są wysyłane; co zbierają analityka, pliki cookie i reklamy; oraz Twoje prawa.",
      updated: "Ostatnia aktualizacja: 6 listopada 2026 r.",
      sections: [
        {
          heading: "Przegląd",
          text: "TAMPDF (tampdf.com) oferuje bezpłatne narzędzia działające w przeglądarce do plików PDF i obrazów. Ta polityka wyjaśnia, co zbieramy, a czego nie."
        },
        {
          heading: "Twoje pliki zostają na Twoim urządzeniu",
          text: "Pliki są przetwarzane lokalnie w przeglądarce i nigdy nie są wysyłane na nasze serwery ani do osób trzecich, tam przechowywane ani udostępniane. Jeśli wybierzesz „Zapisz na Dysku Google” lub „Zapisz w Dropbox”, przeglądarka wyśle wynik bezpośrednio do usługi, w której jesteś zalogowany; my nigdy go nie otrzymujemy."
        },
        {
          heading: "Informacje zbierane automatycznie",
          text: "Aby zrozumieć, jak korzysta się z serwisu, prowadzimy proste własne liczniki na naszym serwerze i — wyłącznie za Twoją zgodą tam, gdzie jest wymagana — korzystamy z Google Analytics i Microsoft Clarity. Mogą rejestrować odwiedzone strony, przybliżoną lokalizację, urządzenie, przeglądarkę, język, stronę odsyłającą oraz użyte narzędzie i to, czy zadziałało. Nigdy nie zbieramy Twojego imienia, adresu e-mail ani treści plików."
        },
        {
          heading: "Pliki cookie i podobne technologie",
          text: "Usługi analityczne i reklamowe mogą ustawiać pliki cookie lub korzystać z pamięci lokalnej. Nasza Polityka plików cookie je wymienia i wyjaśnia, jak nimi zarządzać; swój wybór możesz zmienić w dowolnym momencie przez „Ustawienia plików cookie” w stopce."
        },
        {
          heading: "Twoje prawa",
          text: "Tam, gdzie obowiązują przepisy takie jak RODO, brytyjskie RODO lub CCPA, możesz żądać dostępu do danych osobowych, które o Tobie posiadamy, ich sprostowania lub usunięcia, sprzeciwić się ich przetwarzaniu lub je ograniczyć, w dowolnym momencie wycofać zgodę oraz złożyć skargę do lokalnego organu ochrony danych. Aby złożyć wniosek, skorzystaj ze strony Kontakt."
        },
        {
          heading: "Okres przechowywania",
          text: "Dane analityczne są przechowywane tylko tak długo, jak potrzeba do statystyk i ulepszania usługi, zgodnie z ustawieniami przechowywania każdego dostawcy."
        },
        {
          heading: "Usługi i linki podmiotów trzecich",
          text: "Serwis może zawierać linki do usług innych firm lub je ładować (np. Google, Microsoft i Dropbox). Mają one własne polityki prywatności i nie odpowiadamy za nie."
        },
        {
          heading: "Dzieci",
          text: "TAMPDF nie jest skierowany do dzieci poniżej 13 lat (lub poniżej 16 lat, gdzie wymaga tego lokalne prawo) i świadomie nie zbieramy ich danych osobowych."
        },
        {
          heading: "Bezpieczeństwo",
          text: "Pliki są przetwarzane w Twojej przeglądarce i nigdy do nas nie trafiają. Serwis jest udostępniany przez HTTPS."
        },
        {
          heading: "Zmiany tej polityki",
          text: "Możemy aktualizować tę politykę; data „Ostatnia aktualizacja” wskazuje najnowszą wersję. Dalsze korzystanie z serwisu oznacza akceptację aktualizacji."
        },
        {
          heading: "Kontakt",
          text: "Pytania dotyczące tej polityki? Skorzystaj ze strony Kontakt."
        }
      ]
    },
    cookiePolicy: {
      intro: "Pliki cookie i podobne technologie, których TAMPDF używa do preferencji, analityki i reklam, oraz sposób zarządzania nimi.",
      updated: "Ostatnia aktualizacja: 6 listopada 2026 r.",
      sections: [
        {
          heading: "Czym są pliki cookie?",
          text: "Małe pliki tekstowe, które strona internetowa zapisuje na Twoim urządzeniu. Podobne technologie, takie jak pamięć lokalna i piksele, działają w zbliżony sposób; ta polityka obejmuje je wszystkie."
        },
        {
          heading: "Pamięć absolutnie niezbędna",
          text: "TAMPDF zapamiętuje Twój jasny/ciemny motyw oraz wybór dotyczący plików cookie w pamięci lokalnej przeglądarki. Nie zawierają danych osobowych i nigdy nie są do nas wysyłane."
        },
        {
          heading: "Analityczne pliki cookie",
          text: "Za Twoją zgodą tam, gdzie jest wymagana, używamy Google Analytics 4 (pliki cookie takie jak _ga i _ga_*) oraz Microsoft Clarity (takie jak _clck i _clsk), aby mierzyć ruch i rozumieć, jak korzysta się z serwisu; Clarity może też tworzyć zanonimizowane nagrania sesji i mapy ciepła."
        },
        {
          heading: "Zarządzanie wyborem",
          text: "Tam, gdzie wymagana jest zgoda, możesz zaakceptować lub odrzucić analityczne pliki cookie w banerze i w dowolnym momencie zmienić zdanie przez „Ustawienia plików cookie” w stopce; wycofanie zgody zatrzymuje skrypty analityczne i usuwa ich pliki cookie. Możesz też zablokować pliki cookie w przeglądarce — narzędzia nadal działają, bo pliki są przetwarzane lokalnie."
        },
        {
          heading: "Więcej opcji",
          text: "Możesz zrezygnować ze spersonalizowanych reklam na https://adssettings.google.com lub https://www.aboutads.info/choices (w Europie https://www.youronlinechoices.eu) oraz zarządzać danymi Microsoft na https://account.microsoft.com/privacy."
        },
        {
          heading: "Zmiany i kontakt",
          text: "Możemy aktualizować tę politykę; data powyżej wskazuje najnowszą wersję. Pytania? Skorzystaj ze strony Kontakt."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Akceptacja warunków",
          text: "Korzystając z TAMPDF, akceptujesz niniejsze Warunki korzystania z usługi. Jeśli się nie zgadzasz, nie korzystaj z naszych narzędzi."
        },
        {
          heading: "Usługa",
          text: "TAMPDF oferuje bezpłatne narzędzia działające w przeglądarce do pracy z plikami PDF i obrazami. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce; Twoje pliki nigdy nie są wysyłane na nasze serwery."
        },
        {
          heading: "Wyłączenie gwarancji",
          text: "Narzędzia są udostępniane „tak, jak są” i „w miarę dostępności”, bez jakichkolwiek gwarancji, wyraźnych ani dorozumianych, w tym dokładności, niezawodności, przydatności handlowej lub przydatności do określonego celu. Nie gwarantujemy, że będą wolne od błędów, nieprzerwane ani zgodne z każdym plikiem, przeglądarką czy urządzeniem."
        },
        {
          heading: "Ograniczenie odpowiedzialności",
          text: "W najszerszym zakresie dozwolonym przez prawo TAMPDF i jego właściciele nie odpowiadają za szkody pośrednie, przypadkowe, szczególne ani wtórne — w tym utratę danych, uszkodzenie plików lub przerwę w działalności — wynikające z korzystania lub niemożności korzystania z narzędzi."
        },
        {
          heading: "Twoje pliki",
          text: "Odpowiadasz za przechowywanie kopii zapasowych oryginałów i sprawdzanie każdego wyniku, zanim na nim polegasz. Ponieważ przetwarzanie odbywa się w Twojej przeglądarce, nie mamy dostępu do Twoich plików i nie możemy ich odzyskać."
        },
        {
          heading: "Dopuszczalne użycie",
          text: "Korzystaj z TAMPDF wyłącznie w celach zgodnych z prawem i tylko z plikami, które masz prawo przetwarzać. Nie używaj narzędzi do naruszania praw innych osób, usuwania znaków wodnych lub zabezpieczeń z treści, których nie wolno Ci modyfikować, ani do zakłócania działania serwisu."
        },
        {
          heading: "Usługi stron trzecich i reklamy",
          text: "Serwis może wyświetlać reklamy oraz zawierać linki do usług stron trzecich lub integrować się z nimi (takich jak Google AdSense, Dysk Google i Dropbox). Nie kontrolujemy ich; korzystanie z nich podlega ich własnym warunkom i politykom prywatności."
        },
        {
          heading: "Własność intelektualna",
          text: "Nazwa, logo, projekt, teksty i kod TAMPDF należą do TAMPDF lub jego licencjodawców. Twoje pliki pozostają Twoje; nie rościmy sobie do nich żadnych praw."
        },
        {
          heading: "Zmiany tych warunków",
          text: "Możemy od czasu do czasu aktualizować te warunki. Dalsze korzystanie z TAMPDF po opublikowaniu zmian oznacza ich akceptację."
        }
      ]
    },
    adsDisclosure: {
      heading: "Reklamy",
      paragraphs: [
        "Do wyświetlania reklam używamy Google AdSense. Google i jego partnerzy to zewnętrzni dostawcy, którzy używają plików cookie, sygnałów web beacon i podobnych technologii do wyświetlania reklam na podstawie Twoich wcześniejszych wizyt w tym i innych serwisach.",
        "Możesz zrezygnować ze spersonalizowanych reklam w Ustawieniach reklam Google (https://adssettings.google.com) lub na https://www.aboutads.info/choices oraz przeczytać, jak Google wykorzystuje dane z witryn korzystających z jego usług, na https://policies.google.com/technologies/partner-sites.",
        "W Europejskim Obszarze Gospodarczym, Wielkiej Brytanii i Szwajcarii reklamy są personalizowane tylko za Twoją zgodą, którą możesz wyrazić lub wycofać za pomocą komunikatu o zgodzie wyświetlanego w serwisie."
      ]
    }
  }
};
