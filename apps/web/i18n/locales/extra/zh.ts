import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "广告"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "预览 — 将应用于图片",
      formatsNote: "支持的文件：PDF、JPG、PNG 和 WebP"
    },
    removeWatermark: {
      intro: "删除以水印对象形式添加的水印：适用于 PDF（由 Adobe Acrobat、TAMPDF 及大多数编辑器添加）和 Word 文档（设计 ▸ 水印）。直接嵌入图片像素中的水印无法与图片分离，因此不支持图片。",
      formatsNote: "支持的文件：PDF 和 Word (.docx)",
      noneFoundWord: "此文档中未找到 Word 水印。只能删除通过 Word 自带的“水印”功能添加的水印。"
    }
  },
  consent: {
    title: "Cookie 与分析",
    description: "我们使用分析类 Cookie（Google Analytics 和 Microsoft Clarity）了解网站的使用情况。只有在您同意后才会运行。您的文件绝不会离开您的浏览器。",
    accept: "接受",
    reject: "拒绝",
    settings: "Cookie 设置",
    statusOn: "分析类 Cookie 当前已开启。",
    statusOff: "分析类 Cookie 当前已关闭。",
    close: "关闭"
  },
  staticPages: {
    privacyPolicy: {
      intro: "TAMPDF 如何处理您的文件和数据：文件在浏览器中处理，绝不上传；分析、Cookie 和广告会收集什么；以及您的权利。",
      updated: "最后更新：2026 年 11 月 6 日。",
      sections: [
        {
          heading: "概述",
          text: "TAMPDF（tampdf.com）提供免费的浏览器端 PDF 和图片工具。本政策说明我们会收集哪些信息、不会收集哪些信息。"
        },
        {
          heading: "您的文件保留在您的设备上",
          text: "文件在您的浏览器中本地处理，绝不会上传到、存储在我们的服务器上，也不会与任何第三方共享。如果您选择“保存到 Google Drive”或“保存到 Dropbox”，浏览器会将结果直接发送给您已登录的服务；我们从不接收。"
        },
        {
          heading: "自动收集的信息",
          text: "为了了解网站的使用情况，我们在自己的服务器上保存简单的自有计数器，并且仅在需要时经您同意后使用 Google Analytics 和 Microsoft Clarity。它们可能记录访问的页面、大致位置、设备、浏览器、语言、来源网站，以及您使用的工具及是否成功。我们绝不收集您的姓名、电子邮件地址或文件内容。"
        },
        {
          heading: "Cookie 及类似技术",
          text: "分析和广告服务可能设置 Cookie 或使用本地存储。我们的 Cookie 政策列出了这些内容并说明如何控制；您可随时通过页脚的“Cookie 设置”更改选择。"
        },
        {
          heading: "您的权利",
          text: "在适用 GDPR、英国 GDPR 或 CCPA 等法律的地方，您可以要求访问、更正或删除我们持有的您的个人数据，反对或限制其处理，随时撤回同意，并向当地数据保护机构投诉。请通过“联系我们”页面提出请求。"
        },
        {
          heading: "数据保留",
          text: "分析数据仅在统计和改进服务所需的期限内保留，并遵循各服务提供商的保留设置。"
        },
        {
          heading: "第三方服务与链接",
          text: "本网站可能链接或加载其他公司的服务（例如 Google、Microsoft 和 Dropbox）。它们有各自的隐私政策，我们对此不承担责任。"
        },
        {
          heading: "儿童",
          text: "TAMPDF 不面向 13 岁以下（或当地法律要求的 16 岁以下）的儿童，我们不会故意收集其个人信息。"
        },
        {
          heading: "安全",
          text: "文件在您的浏览器中处理，绝不会发送给我们。本网站通过 HTTPS 提供服务。"
        },
        {
          heading: "本政策的变更",
          text: "我们可能更新本政策；“最后更新”日期显示最新版本。继续使用本网站即表示您接受更新。"
        },
        {
          heading: "联系我们",
          text: "对本政策有疑问？请使用“联系我们”页面。"
        }
      ]
    },
    cookiePolicy: {
      intro: "TAMPDF 用于偏好设置、分析和广告的 Cookie 及类似技术，以及如何控制它们。",
      updated: "最后更新：2026 年 11 月 6 日。",
      sections: [
        {
          heading: "什么是 Cookie？",
          text: "网站存储在您设备上的小型文本文件。本地存储和像素等类似技术的工作方式相近；本政策涵盖所有这些技术。"
        },
        {
          heading: "严格必要的存储",
          text: "TAMPDF 在浏览器的本地存储中记住您的浅色/深色主题和 Cookie 选择。它们不含个人数据，也绝不会发送给我们。"
        },
        {
          heading: "分析类 Cookie",
          text: "在需要时经您同意，我们使用 Google Analytics 4（如 _ga 和 _ga_* Cookie）和 Microsoft Clarity（如 _clck 和 _clsk）来衡量流量并了解网站的使用情况；Clarity 还可能生成匿名化的会话录制和热力图。"
        },
        {
          heading: "管理您的选择",
          text: "在需要同意的地方，您可以在横幅中接受或拒绝分析类 Cookie，并可随时通过页脚的“Cookie 设置”改变主意；撤回同意会停止分析脚本并删除其 Cookie。您也可以在浏览器中阻止 Cookie——由于文件在本地处理，工具仍可正常使用。"
        },
        {
          heading: "更多控制",
          text: "您可以在 https://adssettings.google.com 或 https://www.aboutads.info/choices（欧洲为 https://www.youronlinechoices.eu）选择退出个性化广告，并在 https://account.microsoft.com/privacy 管理 Microsoft 数据。"
        },
        {
          heading: "变更与联系",
          text: "我们可能更新本政策；上方日期显示最新版本。有疑问？请使用“联系我们”页面。"
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "接受条款",
          text: "使用 TAMPDF 即表示您同意本服务条款。如果您不同意，请勿使用我们的工具。"
        },
        {
          heading: "服务",
          text: "TAMPDF 提供免费的浏览器端 PDF 和图片处理工具。所有处理都在您的浏览器中本地完成；您的文件绝不会上传到我们的服务器。"
        },
        {
          heading: "免责声明",
          text: "这些工具按“现状”和“可用”状态提供，不附带任何明示或暗示的保证，包括准确性、可靠性、适销性或适用于特定目的。我们不保证它们没有错误、不会中断，或与所有文件、浏览器或设备兼容。"
        },
        {
          heading: "责任限制",
          text: "在法律允许的最大范围内，TAMPDF 及其所有者不对因使用或无法使用这些工具而产生的间接、附带、特殊或后果性损害（包括数据丢失、文件损坏或业务中断）承担责任。"
        },
        {
          heading: "您的文件",
          text: "您有责任备份原始文件，并在依赖任何输出结果之前进行检查。由于处理在您的浏览器中进行，我们无法访问或恢复您的文件。"
        },
        {
          heading: "可接受的使用",
          text: "请仅将 TAMPDF 用于合法目的，并且仅处理您有权处理的文件。请勿使用这些工具侵犯他人权利、移除您无权修改的内容上的水印或保护，或干扰网站运行。"
        },
        {
          heading: "第三方服务与广告",
          text: "本网站可能展示广告，并可能链接或集成第三方服务（如 Google AdSense、Google Drive 和 Dropbox）。我们不控制这些服务，您对它们的使用受其自身条款和隐私政策约束。"
        },
        {
          heading: "知识产权",
          text: "TAMPDF 的名称、徽标、设计、文字和代码归 TAMPDF 或其许可方所有。您的文件仍归您所有；我们不主张任何权利。"
        },
        {
          heading: "条款变更",
          text: "我们可能不时更新这些条款。变更发布后继续使用 TAMPDF 即表示您接受。"
        }
      ]
    },
    adsDisclosure: {
      heading: "广告",
      paragraphs: [
        "我们使用 Google AdSense 展示广告。Google 及其合作伙伴是第三方供应商，会使用 Cookie、网络信标和类似技术，根据您之前访问本网站及其他网站的情况投放广告。",
        "您可以在 Google 广告设置（https://adssettings.google.com）或 https://www.aboutads.info/choices 选择退出个性化广告，并在 https://policies.google.com/technologies/partner-sites 了解 Google 如何使用使用其服务的网站的数据。",
        "在欧洲经济区、英国和瑞士，仅在您同意后才会个性化广告；您可以通过网站上显示的同意提示给予或撤回同意。"
      ]
    }
  }
};
