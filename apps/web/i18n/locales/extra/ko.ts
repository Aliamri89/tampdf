import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "광고"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "미리보기 — 이미지에 적용됩니다",
      formatsNote: "지원 파일: PDF, JPG, PNG, WebP"
    },
    removeWatermark: {
      intro: "워터마크 개체로 추가된 워터마크를 제거합니다. PDF(Adobe Acrobat, TAMPDF 및 대부분의 편집기로 추가한 것)와 Word 문서(디자인 ▸ 워터마크)를 지원합니다. 이미지 픽셀에 합쳐진 워터마크는 이미지에서 분리할 수 없으므로 이미지는 지원하지 않습니다.",
      formatsNote: "지원 파일: PDF 및 Word(.docx)",
      noneFoundWord: "이 문서에서 Word 워터마크를 찾을 수 없습니다. Word 자체의 워터마크 기능으로 추가한 워터마크만 제거할 수 있습니다."
    }
  },
  consent: {
    title: "쿠키 및 분석",
    description: "사이트 이용 방식을 이해하기 위해 분석 쿠키(Google Analytics 및 Microsoft Clarity)를 사용합니다. 동의하신 경우에만 작동합니다. 파일은 브라우저 밖으로 나가지 않습니다.",
    accept: "동의",
    reject: "거부",
    settings: "쿠키 설정",
    statusOn: "분석 쿠키가 현재 켜져 있습니다.",
    statusOff: "분석 쿠키가 현재 꺼져 있습니다.",
    close: "닫기"
  },
  staticPages: {
    privacyPolicy: {
      intro: "TAMPDF가 파일과 데이터를 다루는 방식: 파일은 브라우저에서 처리되며 업로드되지 않습니다. 분석, 쿠키, 광고가 수집하는 정보와 사용자의 권리를 안내합니다.",
      updated: "최종 업데이트: 2026년 11월 6일.",
      sections: [
        {
          heading: "개요",
          text: "TAMPDF(tampdf.com)는 PDF와 이미지를 위한 무료 브라우저 기반 도구를 제공합니다. 이 정책은 수집하는 정보와 수집하지 않는 정보를 설명합니다."
        },
        {
          heading: "파일은 사용자 기기에 남습니다",
          text: "파일은 브라우저에서 로컬로 처리되며, 당사 서버나 제3자에게 업로드·저장·공유되지 않습니다. ‘Google Drive에 저장’ 또는 ‘Dropbox에 저장’을 선택하면 브라우저가 결과를 로그인한 서비스로 직접 전송하며, 당사는 이를 받지 않습니다."
        },
        {
          heading: "자동으로 수집되는 정보",
          text: "사이트 이용 방식을 이해하기 위해 당사 서버에 간단한 자체 카운터를 두고, 동의가 필요한 경우에는 동의를 받은 후에만 Google Analytics와 Microsoft Clarity를 사용합니다. 방문한 페이지, 대략적인 위치, 기기, 브라우저, 언어, 유입 경로, 사용한 도구와 성공 여부를 기록할 수 있습니다. 이름, 이메일 주소, 파일 내용은 절대 수집하지 않습니다."
        },
        {
          heading: "쿠키 및 유사 기술",
          text: "분석 및 광고 서비스는 쿠키를 설정하거나 로컬 저장소를 사용할 수 있습니다. 쿠키 정책에 목록과 관리 방법이 나와 있으며, 하단의 ‘쿠키 설정’에서 언제든지 선택을 변경할 수 있습니다."
        },
        {
          heading: "사용자의 권리",
          text: "GDPR, 영국 GDPR, CCPA 등의 법률이 적용되는 경우, 당사가 보유한 개인 데이터에 대한 열람·정정·삭제를 요청하고, 처리에 반대하거나 제한을 요구하며, 언제든지 동의를 철회하고, 해당 지역의 개인정보 보호 당국에 민원을 제기할 수 있습니다. 요청은 문의 페이지를 이용해 주세요."
        },
        {
          heading: "데이터 보관",
          text: "분석 데이터는 통계와 서비스 개선에 필요한 기간 동안만, 각 제공업체의 보관 설정에 따라 보관됩니다."
        },
        {
          heading: "제3자 서비스 및 링크",
          text: "사이트는 다른 회사의 서비스(예: Google, Microsoft, Dropbox)로 연결되거나 이를 불러올 수 있습니다. 이들은 자체 개인정보 처리방침이 있으며 당사는 이에 책임을 지지 않습니다."
        },
        {
          heading: "아동",
          text: "TAMPDF는 13세 미만(현지 법률이 요구하는 경우 16세 미만) 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다."
        },
        {
          heading: "보안",
          text: "파일은 브라우저에서 처리되며 당사로 전송되지 않습니다. 사이트는 HTTPS로 제공됩니다."
        },
        {
          heading: "정책 변경",
          text: "이 정책은 업데이트될 수 있으며 ‘최종 업데이트’ 날짜가 최신 버전을 나타냅니다. 사이트를 계속 이용하면 업데이트에 동의한 것으로 간주됩니다."
        },
        {
          heading: "문의",
          text: "이 정책에 대한 질문은 문의 페이지를 이용해 주세요."
        }
      ]
    },
    cookiePolicy: {
      intro: "TAMPDF가 환경설정, 분석, 광고에 사용하는 쿠키와 유사 기술, 그리고 이를 관리하는 방법.",
      updated: "최종 업데이트: 2026년 11월 6일.",
      sections: [
        {
          heading: "쿠키란 무엇인가요?",
          text: "웹사이트가 사용자 기기에 저장하는 작은 텍스트 파일입니다. 로컬 저장소나 픽셀 같은 유사 기술도 비슷하게 작동하며, 이 정책은 이 모두를 다룹니다."
        },
        {
          heading: "반드시 필요한 저장",
          text: "TAMPDF는 밝은/어두운 테마와 쿠키 선택을 브라우저의 로컬 저장소에 기억합니다. 개인 데이터는 포함되지 않으며 당사로 전송되지 않습니다."
        },
        {
          heading: "분석 쿠키",
          text: "동의가 필요한 경우 동의를 받은 후, 트래픽을 측정하고 사이트 이용 방식을 이해하기 위해 Google Analytics 4(_ga, _ga_* 등의 쿠키)와 Microsoft Clarity(_clck, _clsk 등)를 사용합니다. Clarity는 익명화된 세션 녹화와 히트맵을 만들 수도 있습니다."
        },
        {
          heading: "선택 관리",
          text: "동의가 필요한 곳에서는 배너에서 분석 쿠키를 수락하거나 거부할 수 있고, 하단의 ‘쿠키 설정’에서 언제든지 바꿀 수 있습니다. 동의를 철회하면 분석 스크립트가 중지되고 해당 쿠키가 삭제됩니다. 브라우저에서 쿠키를 차단할 수도 있으며, 파일은 로컬에서 처리되므로 도구는 계속 작동합니다."
        },
        {
          heading: "추가 설정",
          text: "맞춤 광고는 https://adssettings.google.com 또는 https://www.aboutads.info/choices(유럽은 https://www.youronlinechoices.eu)에서 해제할 수 있으며, Microsoft 데이터는 https://account.microsoft.com/privacy에서 관리할 수 있습니다."
        },
        {
          heading: "변경 및 문의",
          text: "이 정책은 업데이트될 수 있으며 위 날짜가 최신 버전을 나타냅니다. 질문은 문의 페이지를 이용해 주세요."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "약관 동의",
          text: "TAMPDF를 이용하면 본 서비스 약관에 동의한 것으로 간주됩니다. 동의하지 않으면 도구를 사용하지 마세요."
        },
        {
          heading: "서비스",
          text: "TAMPDF는 PDF와 이미지를 다루는 무료 브라우저 기반 도구를 제공합니다. 모든 처리는 브라우저에서 로컬로 이루어지며 파일은 당사 서버에 업로드되지 않습니다."
        },
        {
          heading: "보증 부인",
          text: "도구는 정확성, 신뢰성, 상품성, 특정 목적에의 적합성을 포함해 명시적이든 묵시적이든 어떠한 보증도 없이 ‘있는 그대로’ ‘제공 가능한 범위에서’ 제공됩니다. 오류가 없거나 중단되지 않거나 모든 파일·브라우저·기기와 호환된다고 보증하지 않습니다."
        },
        {
          heading: "책임의 제한",
          text: "법이 허용하는 최대 범위에서 TAMPDF와 소유자는 도구의 사용 또는 사용 불능으로 인한 간접적, 부수적, 특별 또는 결과적 손해(데이터 손실, 파일 손상, 업무 중단 포함)에 대해 책임지지 않습니다."
        },
        {
          heading: "사용자의 파일",
          text: "원본의 백업을 보관하고 결과물을 신뢰하기 전에 확인할 책임은 사용자에게 있습니다. 처리는 브라우저에서 이루어지므로 당사는 파일에 접근하거나 복구할 수 없습니다."
        },
        {
          heading: "허용되는 사용",
          text: "TAMPDF는 합법적인 목적으로, 처리할 권리가 있는 파일에만 사용하세요. 도구를 타인의 권리를 침해하거나, 수정 권한이 없는 콘텐츠의 워터마크나 보호를 제거하거나, 웹사이트 운영을 방해하는 데 사용하지 마세요."
        },
        {
          heading: "제3자 서비스 및 광고",
          text: "사이트는 광고를 표시하고 제3자 서비스(Google AdSense, Google Drive, Dropbox 등)로 연결되거나 연동될 수 있습니다. 당사는 이를 통제하지 않으며, 이용은 해당 서비스의 약관과 개인정보 처리방침을 따릅니다."
        },
        {
          heading: "지적 재산권",
          text: "TAMPDF의 이름, 로고, 디자인, 텍스트, 코드는 TAMPDF 또는 라이선서에 귀속됩니다. 파일은 사용자의 것이며 당사는 어떠한 권리도 주장하지 않습니다."
        },
        {
          heading: "약관 변경",
          text: "본 약관은 수시로 업데이트될 수 있습니다. 변경 사항 게시 후 TAMPDF를 계속 이용하면 이에 동의한 것으로 간주됩니다."
        }
      ]
    },
    adsDisclosure: {
      heading: "광고",
      paragraphs: [
        "당사는 광고를 표시하기 위해 Google AdSense를 사용합니다. Google과 파트너는 쿠키, 웹 비콘 및 유사 기술을 사용하여 이 사이트와 다른 사이트의 이전 방문을 기반으로 광고를 게재하는 제3자 공급업체입니다.",
        "맞춤 광고는 Google 광고 설정(https://adssettings.google.com) 또는 https://www.aboutads.info/choices에서 해제할 수 있으며, Google 서비스를 사용하는 사이트의 데이터를 Google이 어떻게 사용하는지는 https://policies.google.com/technologies/partner-sites에서 확인할 수 있습니다.",
        "유럽 경제 지역, 영국, 스위스에서는 사이트에 표시되는 동의 메시지를 통해 부여하거나 철회할 수 있는 사용자의 동의가 있을 때만 광고가 맞춤화됩니다."
      ]
    }
  }
};
