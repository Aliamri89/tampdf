import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Reklama"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Náhled — použije se na obrázek",
      formatsNote: "Podporované soubory: PDF, JPG, PNG a WebP"
    },
    removeWatermark: {
      intro: "Odstraňuje vodoznaky přidané jako objekty vodoznaku: v PDF (Adobe Acrobatem, TAMPDF a většinou editorů) a v dokumentech Word (Návrh ▸ Vodoznak). Vodoznaky zapečené do pixelů obrázku nelze od obrázku oddělit, proto obrázky nejsou podporovány.",
      formatsNote: "Podporované soubory: PDF a Word (.docx)",
      noneFoundWord: "V tomto dokumentu nebyl nalezen žádný vodoznak Wordu. Odstranit lze jen vodoznaky přidané vlastní funkcí Vodoznak ve Wordu."
    }
  },
  consent: {
    title: "Soubory cookie a analytika",
    description: "Používáme analytické soubory cookie (Google Analytics a Microsoft Clarity), abychom pochopili, jak se web používá. Spustí se jen s vaším souhlasem. Vaše soubory nikdy neopustí váš prohlížeč.",
    accept: "Přijmout",
    reject: "Odmítnout",
    settings: "Nastavení cookie",
    statusOn: "Analytické soubory cookie jsou aktuálně zapnuté.",
    statusOff: "Analytické soubory cookie jsou aktuálně vypnuté.",
    close: "Zavřít"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Jak TAMPDF nakládá s vašimi soubory a daty: soubory se zpracovávají v prohlížeči a nikdy se nenahrávají; co sbírají analytika, soubory cookie a reklamy; a vaše práva.",
      updated: "Naposledy aktualizováno: 6. listopadu 2026.",
      sections: [
        {
          heading: "Přehled",
          text: "TAMPDF (tampdf.com) nabízí bezplatné nástroje v prohlížeči pro PDF a obrázky. Tyto zásady vysvětlují, co shromažďujeme a co ne."
        },
        {
          heading: "Vaše soubory zůstávají ve vašem zařízení",
          text: "Soubory se zpracovávají lokálně ve vašem prohlížeči a nikdy se nenahrávají na naše servery ani třetím stranám, neukládají se tam ani nesdílejí. Pokud zvolíte „Uložit na Disk Google“ nebo „Uložit do Dropboxu“, prohlížeč odešle výsledek přímo službě, do které jste přihlášeni; my jej nikdy neobdržíme."
        },
        {
          heading: "Automaticky shromažďované informace",
          text: "Abychom pochopili, jak se web používá, vedeme na našem serveru jednoduché vlastní čítače a — pouze s vaším souhlasem tam, kde je vyžadován — používáme Google Analytics a Microsoft Clarity. Mohou zaznamenávat navštívené stránky, přibližnou polohu, zařízení, prohlížeč, jazyk, odkazující web a také to, jaký nástroj jste použili a zda se to podařilo. Nikdy neshromažďujeme vaše jméno, e-mailovou adresu ani obsah souborů."
        },
        {
          heading: "Soubory cookie a podobné technologie",
          text: "Analytické a reklamní služby mohou nastavovat soubory cookie nebo používat lokální úložiště. Naše Zásady používání souborů cookie je vypisují a vysvětlují, jak je ovládat; svou volbu můžete kdykoli změnit přes „Nastavení cookie“ v zápatí."
        },
        {
          heading: "Vaše práva",
          text: "Tam, kde se uplatňují předpisy jako GDPR, britské GDPR nebo CCPA, můžete požádat o přístup k osobním údajům, které o vás máme, jejich opravu nebo výmaz, vznést námitku proti zpracování nebo je omezit, kdykoli odvolat souhlas a podat stížnost u místního úřadu pro ochranu údajů. Žádost podejte přes stránku Kontakt."
        },
        {
          heading: "Uchovávání údajů",
          text: "Analytická data uchováváme jen po dobu nezbytnou pro statistiky a zlepšování služby, podle nastavení uchovávání každého poskytovatele."
        },
        {
          heading: "Služby a odkazy třetích stran",
          text: "Web může odkazovat na služby jiných společností nebo je načítat (například Google, Microsoft a Dropbox). Mají vlastní zásady ochrany soukromí a my za ně neneseme odpovědnost."
        },
        {
          heading: "Děti",
          text: "TAMPDF není určen dětem do 13 let (nebo do 16 let tam, kde to vyžaduje místní právo) a vědomě neshromažďujeme jejich osobní údaje."
        },
        {
          heading: "Zabezpečení",
          text: "Soubory se zpracovávají ve vašem prohlížeči a nikdy se nám neodesílají. Web je poskytován přes HTTPS."
        },
        {
          heading: "Změny těchto zásad",
          text: "Tyto zásady můžeme aktualizovat; datum „Naposledy aktualizováno“ ukazuje nejnovější verzi. Pokračováním v používání webu aktualizaci přijímáte."
        },
        {
          heading: "Kontakt",
          text: "Máte k těmto zásadám dotazy? Použijte stránku Kontakt."
        }
      ]
    },
    cookiePolicy: {
      intro: "Soubory cookie a podobné technologie, které TAMPDF používá pro předvolby, analytiku a reklamu, a jak je ovládat.",
      updated: "Naposledy aktualizováno: 6. listopadu 2026.",
      sections: [
        {
          heading: "Co jsou soubory cookie?",
          text: "Malé textové soubory, které si web ukládá do vašeho zařízení. Podobné technologie, například lokální úložiště a pixely, fungují obdobně; tyto zásady se vztahují na všechny."
        },
        {
          heading: "Nezbytně nutné úložiště",
          text: "TAMPDF si v lokálním úložišti prohlížeče pamatuje váš světlý/tmavý motiv a vaši volbu ohledně cookie. Neobsahují osobní údaje a nikdy se nám neodesílají."
        },
        {
          heading: "Analytické soubory cookie",
          text: "S vaším souhlasem tam, kde je vyžadován, používáme Google Analytics 4 (soubory cookie jako _ga a _ga_*) a Microsoft Clarity (například _clck a _clsk) k měření návštěvnosti a pochopení, jak se web používá; Clarity může také vytvářet anonymizované záznamy relací a teplotní mapy."
        },
        {
          heading: "Správa vaší volby",
          text: "Tam, kde je souhlas vyžadován, můžete analytické soubory cookie v liště přijmout nebo odmítnout a kdykoli změnit názor přes „Nastavení cookie“ v zápatí; odvolání souhlasu zastaví analytické skripty a smaže jejich cookie. Cookie můžete také zablokovat v prohlížeči — nástroje fungují dál, protože se vaše soubory zpracovávají lokálně."
        },
        {
          heading: "Další možnosti",
          text: "Personalizované reklamy můžete odmítnout na https://adssettings.google.com nebo https://www.aboutads.info/choices (v Evropě https://www.youronlinechoices.eu) a data Microsoftu spravovat na https://account.microsoft.com/privacy."
        },
        {
          heading: "Změny a kontakt",
          text: "Tyto zásady můžeme aktualizovat; datum výše ukazuje nejnovější verzi. Dotazy? Použijte stránku Kontakt."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Přijetí podmínek",
          text: "Používáním TAMPDF souhlasíte s těmito Podmínkami služby. Pokud nesouhlasíte, naše nástroje nepoužívejte."
        },
        {
          heading: "Služba",
          text: "TAMPDF nabízí bezplatné nástroje v prohlížeči pro práci s PDF a obrázky. Veškeré zpracování probíhá lokálně ve vašem prohlížeči; vaše soubory se nikdy nenahrávají na naše servery."
        },
        {
          heading: "Vyloučení záruk",
          text: "Nástroje jsou poskytovány „tak, jak jsou“ a „jak jsou dostupné“, bez jakýchkoli záruk, výslovných či předpokládaných, včetně přesnosti, spolehlivosti, prodejnosti nebo vhodnosti pro určitý účel. Nezaručujeme, že budou bez chyb, nepřerušované nebo kompatibilní s každým souborem, prohlížečem či zařízením."
        },
        {
          heading: "Omezení odpovědnosti",
          text: "V maximálním rozsahu povoleném zákonem neodpovídají TAMPDF ani jeho vlastníci za nepřímé, náhodné, zvláštní ani následné škody — včetně ztráty dat, poškození souborů nebo přerušení podnikání — vzniklé používáním nástrojů nebo nemožností je používat."
        },
        {
          heading: "Vaše soubory",
          text: "Odpovídáte za zálohování svých originálů a za kontrolu každého výstupu, než se na něj spolehnete. Protože zpracování probíhá ve vašem prohlížeči, nemáme k vašim souborům přístup a nemůžeme je obnovit."
        },
        {
          heading: "Přípustné použití",
          text: "TAMPDF používejte jen k zákonným účelům a jen se soubory, které máte právo zpracovávat. Nepoužívejte nástroje k porušování práv druhých, k odstraňování vodoznaků nebo ochrany z obsahu, který nesmíte upravovat, ani k narušování provozu webu."
        },
        {
          heading: "Služby třetích stran a reklama",
          text: "Web může zobrazovat reklamu a odkazovat na služby třetích stran nebo se s nimi integrovat (například Google AdSense, Disk Google a Dropbox). Nemáme je pod kontrolou; jejich používání se řídí jejich vlastními podmínkami a zásadami ochrany soukromí."
        },
        {
          heading: "Duševní vlastnictví",
          text: "Název, logo, design, texty a kód TAMPDF patří TAMPDF nebo jeho poskytovatelům licencí. Vaše soubory zůstávají vaše; nenárokujeme si na ně žádná práva."
        },
        {
          heading: "Změny podmínek",
          text: "Tyto podmínky můžeme čas od času aktualizovat. Pokračováním v používání TAMPDF po zveřejnění změn je přijímáte."
        }
      ]
    },
    adsDisclosure: {
      heading: "Reklama",
      paragraphs: [
        "K zobrazování reklam používáme Google AdSense. Google a jeho partneři jsou dodavatelé třetích stran, kteří používají soubory cookie, webové majáky a podobné technologie k zobrazování reklam na základě vašich dřívějších návštěv tohoto i jiných webů.",
        "Personalizované reklamy můžete odmítnout v Nastavení reklam Google (https://adssettings.google.com) nebo na https://www.aboutads.info/choices a přečíst si, jak Google využívá data z webů používajících jeho služby, na https://policies.google.com/technologies/partner-sites.",
        "V Evropském hospodářském prostoru, ve Spojeném království a ve Švýcarsku se reklamy personalizují pouze s vaším souhlasem, který můžete udělit nebo odvolat prostřednictvím zprávy o souhlasu zobrazené na webu."
      ]
    }
  }
};
