import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const ko: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "언어 변경" } },
  breadcrumb: { home: "홈" },
  tool: {
    processedClient: "브라우저 내에서 처리됩니다 — 파일이 업로드되지 않습니다",
    faqHeading: "자주 묻는 질문",
    relatedHeading: "관련 도구",
    metaTitleSuffix: "— 무료 온라인 도구",
  },
  article: {
    tocHeading: "목차",
    readingTime: "{minutes}분 읽기",
    readingTimeOne: "1분 읽기",
    readingTimeTwo: "2분 읽기",
    published: "{date}에 게시됨",
    updated: "{date}에 업데이트됨",
    relatedHeading: "관련 게시물",
    previousArticle: "이전",
    nextArticle: "다음",
    ctaDefaultHeading: "{tool}을(를) 사용해 볼 준비가 되셨나요?",
    ctaCompressPdfButtonLabel: "PDF 무료로 압축하기",
  },
  card: { comingSoon: "출시 예정" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "무료로 빠르고 사용하기 쉬운 PDF 도구",
    toolPicker: {
      trigger: "PDF 도구 선택",
      ariaLabel: "PDF 도구 메뉴",
      loadMore: "더 많은 도구",
      allShown: "모든 도구가 표시되었습니다",
    },
    features: { devices: "모든 기기에서 작동", fast: "빠름", secure: "안전함" },
  },
  footer: {
    rights: "모든 권리 보유.",
    privacyNote: "파일은 안전하게 처리되며 필요 이상으로 저장되지 않습니다.",
    moreCount: "+{count}개 더보기",
    company: "회사",
    legal: "법적 정보",
    aboutUs: "회사 소개",
    contactUs: "문의하기",
    blog: "블로그",
    faq: "자주 묻는 질문",
    privacyPolicy: "개인정보 처리방침",
    termsOfService: "이용약관",
    cookiePolicy: "쿠키 정책",
  },
  staticPages: {
    note: "이 페이지는 임시 페이지입니다 — 전체 콘텐츠가 곧 제공될 예정입니다.",
    aboutUs: {
      title: "회사 소개",
      intro:
        "TAMPDF는 PDF, 이미지, 문서를 병합, 분할, 압축, 변환하는 등 일상적인 파일 작업을 빠르고, 안전하며, 손쉽게 만들어 주는 무료 온라인 도구 모음입니다.",
    },
    contactUs: {
      title: "문의하기",
      intro: "질문이 있으시거나 버그를 발견하셨거나 새로운 도구를 제안하고 싶으신가요? 언제든 연락 주세요.",
    },
    blog: { title: "블로그", intro: "파일 형식, 생산성 팁, 제품 업데이트에 관한 글을 준비하고 있습니다." },
    faq: {
      title: "자주 묻는 질문",
      intro: "TAMPDF에 대한 일반적인 답변이 곧 이곳에 게시될 예정입니다. 그동안 각 도구 페이지에는 해당 도구에 대한 FAQ가 마련되어 있습니다.",
    },
    privacyPolicy: {
      title: "개인정보 처리방침",
      intro: "TAMPDF가 귀하의 파일과 데이터를 어떻게 처리하는지 정확히 설명하는 전체 개인정보 처리방침을 마무리하고 있으며, 곧 이곳에 게시될 예정입니다.",
    },
    termsOfService: {
      title: "이용약관",
      intro: "본 이용약관은 보증 부인 및 책임 제한을 포함하여 TAMPDF의 도구와 웹사이트 이용에 관한 사항을 규정합니다.",
    },
    cookiePolicy: {
      title: "쿠키 정책",
      intro: "TAMPDF가 사용하는 쿠키 및 유사 기술에 대한 자세한 내용은 곧 이곳에 게시될 예정입니다.",
    },
  },
  dropzone: {
    browse: "또는 클릭하여 찾아보기",
    defaultLabel: "여기에 파일을 끌어다 놓으세요",
    unsupportedType: "{name}은(는) 지원되지 않는 파일 형식이므로 건너뛰었습니다.",
    unsupportedTypePlural: "{count}개 파일이 지원되지 않는 형식이므로 건너뛰었습니다.",
    tooLarge: "{name}이(가) 너무 커서(최대 {max}) 건너뛰었습니다.",
    tooLargePlural: "{count}개 파일이 너무 커서(최대 {max}) 건너뛰었습니다.",
    maxFilesReached: "이 도구에 허용된 최대 {max}개의 파일을 이미 추가했습니다.",
    maxFilesExceeded: "이 도구는 한 번에 최대 {max}개의 파일만 허용하므로 파일 중 {added}개만 추가되었습니다.",
  },
  fileList: { moveUp: "위로 이동", moveDown: "아래로 이동", remove: "{name} 제거" },
  result: {
    ready: "파일이 준비되었습니다",
    download: "다운로드",
    startOver: "다시 시작",
    smaller: "축소됨",
    originalSize: "원본 크기",
    newSize: "새 크기",
    reducedBy: "감소율",
    spaceSaved: "절약된 용량",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    description: "찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다.",
    cta: "홈으로 돌아가기",
  },
};
