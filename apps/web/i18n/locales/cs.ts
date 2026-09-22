import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const cs: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Změnit jazyk" } },
  breadcrumb: { home: "Domů" },
  tool: {
    processedClient: "Zpracováno ve vašem prohlížeči — soubory se nikdy nenahrávají",
    faqHeading: "Časté dotazy",
    relatedHeading: "Související nástroje",
    metaTitleSuffix: "— bezplatný online nástroj",
  },
  article: {
    tocHeading: "Obsah",
    readingTime: "{minutes} min čtení",
    readingTimeOne: "1 min čtení",
    readingTimeTwo: "2 min čtení",
    published: "Publikováno {date}",
    updated: "Aktualizováno {date}",
    relatedHeading: "Související články",
    previousArticle: "Předchozí",
    nextArticle: "Další",
    ctaDefaultHeading: "Chcete vyzkoušet {tool}?",
    ctaCompressPdfButtonLabel: "Komprimovat PDF zdarma",
  },
  card: { comingSoon: "Již brzy" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Bezplatné, rychlé a snadno použitelné nástroje pro PDF",
    toolPicker: {
      trigger: "Vybrat nástroj pro PDF",
      ariaLabel: "Nabídka nástrojů pro PDF",
      loadMore: "Další nástroje",
      allShown: "Zobrazeny všechny nástroje",
    },
    features: { devices: "Funguje na každém zařízení", fast: "Rychlé", secure: "Bezpečné" },
  },
  footer: {
    rights: "Všechna práva vyhrazena.",
    privacyNote: "Soubory jsou zpracovávány bezpečně a nikdy nejsou uchovávány déle, než je nutné.",
    moreCount: "+{count} dalších",
    company: "Společnost",
    legal: "Právní informace",
    aboutUs: "O nás",
    contactUs: "Kontaktujte nás",
    blog: "Blog",
    faq: "Časté dotazy",
    privacyPolicy: "Zásady ochrany osobních údajů",
    termsOfService: "Podmínky služby",
    cookiePolicy: "Zásady používání souborů cookie",
  },
  staticPages: {
    note: "Tato stránka je zástupný obsah — úplný obsah bude brzy k dispozici.",
    aboutUs: {
      title: "O nás",
      intro:
        "TAMPDF je bezplatná sada online nástrojů vytvořená pro to, aby každodenní práce se soubory — slučování, rozdělování, komprese a konverze PDF, obrázků a dokumentů — byla rychlá, soukromá a bez námahy.",
    },
    contactUs: {
      title: "Kontaktujte nás",
      intro: "Máte dotaz, našli jste chybu, nebo chcete navrhnout nový nástroj? Rádi si vyslechneme váš názor.",
    },
    blog: { title: "Blog", intro: "Připravujeme články o formátech souborů, tipech na produktivitu a novinkách produktu." },
    faq: {
      title: "Časté dotazy",
      intro: "Obecné odpovědi o TAMPDF budou brzy zveřejněny zde. Mezitím má každý nástroj vlastní časté dotazy.",
    },
    privacyPolicy: {
      title: "Zásady ochrany osobních údajů",
      intro: "Naše úplné zásady ochrany osobních údajů, které přesně vysvětlují, jak TAMPDF nakládá s vašimi soubory a daty, se dokončují a budou zde brzy zveřejněny.",
    },
    termsOfService: {
      title: "Podmínky služby",
      intro: "Tyto podmínky služby upravují vaše používání nástrojů a webu TAMPDF, včetně vyloučení záruk a omezení odpovědnosti.",
    },
    cookiePolicy: {
      title: "Zásady používání souborů cookie",
      intro: "Podrobnosti o souborech cookie a podobných technologiích, které TAMPDF používá, budou zde brzy zveřejněny.",
    },
  },
  dropzone: {
    browse: "nebo klikněte pro procházení",
    defaultLabel: "Přetáhněte sem svůj soubor",
    unsupportedType: "{name} není podporovaný typ souboru a byl přeskočen.",
    unsupportedTypePlural: "{count} souborů nemělo podporovaný typ a byly přeskočeny.",
    tooLarge: "{name} je příliš velký (max {max}) a byl přeskočen.",
    tooLargePlural: "{count} souborů bylo příliš velkých (max {max}) a byly přeskočeny.",
    maxFilesReached: "Pro tento nástroj jste již přidali maximální počet {max} souborů.",
    maxFilesExceeded: "Tento nástroj umožňuje najednou maximálně {max} souborů, takže bylo přidáno pouze {added} vašich souborů.",
  },
  fileList: { moveUp: "Posunout nahoru", moveDown: "Posunout dolů", remove: "Odebrat {name}" },
  result: {
    ready: "Váš soubor je připraven",
    download: "Stáhnout",
    startOver: "Začít znovu",
    smaller: "menší",
    originalSize: "Původní velikost",
    newSize: "Nová velikost",
    reducedBy: "Zmenšeno o",
    spaceSaved: "Ušetřené místo",
  },
  notFound: {
    title: "Stránka nenalezena",
    description: "Stránka, kterou hledáte, neexistuje nebo mohla být přesunuta.",
    cta: "Zpět na hlavní stránku",
  },
};
