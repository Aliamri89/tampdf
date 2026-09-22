import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const zh: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "更改语言" } },
  breadcrumb: { home: "首页" },
  tool: {
    processedClient: "在您的浏览器中处理 — 文件从不上传",
    faqHeading: "常见问题",
    relatedHeading: "相关工具",
    metaTitleSuffix: "— 免费在线工具",
  },
  article: {
    tocHeading: "目录",
    readingTime: "{minutes} 分钟阅读",
    readingTimeOne: "1 分钟阅读",
    readingTimeTwo: "2 分钟阅读",
    published: "发布于 {date}",
    updated: "更新于 {date}",
    relatedHeading: "相关文章",
    previousArticle: "上一篇",
    nextArticle: "下一篇",
    ctaDefaultHeading: "准备好试试 {tool} 了吗？",
    ctaCompressPdfButtonLabel: "免费压缩 PDF",
  },
  card: { comingSoon: "即将推出" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "免费、快速、易用的 PDF 工具",
    toolPicker: {
      trigger: "选择一个 PDF 工具",
      ariaLabel: "PDF 工具菜单",
      loadMore: "更多工具",
      allShown: "已显示全部工具",
    },
    features: { devices: "适用于所有设备", fast: "快速", secure: "安全" },
  },
  footer: {
    rights: "版权所有。",
    privacyNote: "文件会被安全处理，且不会存储超过必要的时间。",
    moreCount: "还有 {count} 个",
    company: "公司",
    legal: "法律信息",
    aboutUs: "关于我们",
    contactUs: "联系我们",
    blog: "博客",
    faq: "常见问题",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    cookiePolicy: "Cookie 政策",
  },
  staticPages: {
    note: "此页面为占位内容 — 完整内容即将发布。",
    aboutUs: {
      title: "关于我们",
      intro:
        "TAMPDF 是一套免费的在线工具，旨在让合并、拆分、压缩和转换 PDF、图片与文档等日常文件任务变得快速、私密且轻松。",
    },
    contactUs: {
      title: "联系我们",
      intro: "有问题、发现了错误，或想建议一个新工具？我们很乐意听取您的意见。",
    },
    blog: { title: "博客", intro: "我们正在撰写关于文件格式、效率技巧和产品更新的文章。" },
    faq: {
      title: "常见问题",
      intro: "关于 TAMPDF 的常见问题解答即将在此发布。与此同时，每个工具页面都有各自的常见问题解答。",
    },
    privacyPolicy: {
      title: "隐私政策",
      intro: "我们完整的隐私政策正在最终确定中，详细说明 TAMPDF 如何处理您的文件和数据，即将在此发布。",
    },
    termsOfService: {
      title: "服务条款",
      intro: "本服务条款规定了您使用 TAMPDF 工具及网站的相关规则，包括我们的免责声明和责任限制。",
    },
    cookiePolicy: {
      title: "Cookie 政策",
      intro: "关于 TAMPDF 所使用的 Cookie 及类似技术的详细信息即将在此发布。",
    },
  },
  dropzone: {
    browse: "或点击浏览",
    defaultLabel: "将文件拖放到此处",
    unsupportedType: "{name} 不是受支持的文件类型，已被跳过。",
    unsupportedTypePlural: "{count} 个文件类型不受支持，已被跳过。",
    tooLarge: "{name} 太大（最大 {max}），已被跳过。",
    tooLargePlural: "{count} 个文件过大（最大 {max}），已被跳过。",
    maxFilesReached: "您已为此工具添加了最多 {max} 个文件。",
    maxFilesExceeded: "此工具一次最多允许 {max} 个文件，因此仅添加了 {added} 个文件。",
  },
  fileList: { moveUp: "上移", moveDown: "下移", remove: "移除 {name}" },
  result: {
    ready: "文件已就绪",
    download: "下载",
    startOver: "重新开始",
    smaller: "更小",
    originalSize: "原始大小",
    newSize: "新大小",
    reducedBy: "减少了",
    spaceSaved: "节省空间",
  },
  notFound: {
    title: "页面未找到",
    description: "您要查找的页面不存在，或可能已被移动。",
    cta: "返回首页",
  },
};
