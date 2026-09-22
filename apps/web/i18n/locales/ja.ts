import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const ja: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "言語を変更" } },
  breadcrumb: { home: "ホーム" },
  tool: {
    processedClient: "お使いのブラウザ内で処理されます — ファイルがアップロードされることはありません",
    faqHeading: "よくある質問",
    relatedHeading: "関連ツール",
    metaTitleSuffix: "— 無料オンラインツール",
  },
  article: {
    tocHeading: "目次",
    readingTime: "読了時間 {minutes} 分",
    readingTimeOne: "読了時間 1 分",
    readingTimeTwo: "読了時間 2 分",
    published: "{date} に公開",
    updated: "{date} に更新",
    relatedHeading: "関連記事",
    previousArticle: "前へ",
    nextArticle: "次へ",
    ctaDefaultHeading: "{tool} を試してみませんか？",
    ctaCompressPdfButtonLabel: "PDFを無料で圧縮",
  },
  card: { comingSoon: "近日公開" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "無料・高速・簡単に使えるPDFツール",
    toolPicker: {
      trigger: "PDFツールを選ぶ",
      ariaLabel: "PDFツールメニュー",
      loadMore: "さらに表示",
      allShown: "すべてのツールを表示しました",
    },
    features: { devices: "あらゆるデバイスに対応", fast: "高速", secure: "安全" },
  },
  footer: {
    rights: "全著作権所有。",
    privacyNote: "ファイルは安全に処理され、必要以上に保存されることはありません。",
    moreCount: "他 {count} 件",
    company: "会社情報",
    legal: "法的情報",
    aboutUs: "私たちについて",
    contactUs: "お問い合わせ",
    blog: "ブログ",
    faq: "よくある質問",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    cookiePolicy: "クッキーポリシー",
  },
  staticPages: {
    note: "このページは仮のものです — まもなく完全な内容を公開します。",
    aboutUs: {
      title: "私たちについて",
      intro:
        "TAMPDFは、PDF・画像・文書の結合、分割、圧縮、変換といった日々のファイル作業を、高速かつプライベートに、そして手間なく行えるようにする無料のオンラインツール集です。",
    },
    contactUs: {
      title: "お問い合わせ",
      intro: "ご質問、不具合の報告、新しいツールのご提案などございましたら、お気軽にお知らせください。",
    },
    blog: { title: "ブログ", intro: "ファイル形式や生産性向上のヒント、製品アップデートに関する記事を準備中です。" },
    faq: {
      title: "よくある質問",
      intro: "TAMPDFに関する一般的な質問への回答は近日公開予定です。それまでは、各ツールページに個別のよくある質問があります。",
    },
    privacyPolicy: {
      title: "プライバシーポリシー",
      intro: "TAMPDFがファイルやデータをどのように扱うかを詳しく説明する完全なプライバシーポリシーは、現在準備中で近日中に公開予定です。",
    },
    termsOfService: {
      title: "利用規約",
      intro: "この利用規約は、保証の否認および責任制限を含め、TAMPDFのツールとウェブサイトのご利用について定めるものです。",
    },
    cookiePolicy: {
      title: "クッキーポリシー",
      intro: "TAMPDFが使用するクッキーや類似技術の詳細は近日公開予定です。",
    },
  },
  dropzone: {
    browse: "またはクリックして選択",
    defaultLabel: "ここにファイルをドラッグ＆ドロップ",
    unsupportedType: "{name} はサポートされていないファイル形式のためスキップされました。",
    unsupportedTypePlural: "{count} 件のファイルはサポートされていない形式のためスキップされました。",
    tooLarge: "{name} は大きすぎるため（最大 {max}）スキップされました。",
    tooLargePlural: "{count} 件のファイルが大きすぎるため（最大 {max}）スキップされました。",
    maxFilesReached: "このツールの上限である {max} 件のファイルをすでに追加しています。",
    maxFilesExceeded: "このツールは一度に最大 {max} 件までのため、{added} 件のみ追加されました。",
  },
  fileList: { moveUp: "上へ移動", moveDown: "下へ移動", remove: "{name} を削除" },
  result: {
    ready: "ファイルの準備ができました",
    download: "ダウンロード",
    startOver: "やり直す",
    smaller: "縮小",
    originalSize: "元のサイズ",
    newSize: "新しいサイズ",
    reducedBy: "削減率",
    spaceSaved: "節約した容量",
  },
  notFound: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しないか、移動した可能性があります。",
    cta: "ホームに戻る",
  },
};
