import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const vi: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Đổi ngôn ngữ" } },
  breadcrumb: { home: "Trang chủ" },
  tool: {
    processedClient: "Được xử lý ngay trong trình duyệt của bạn — tệp không bao giờ được tải lên",
    faqHeading: "Câu hỏi thường gặp",
    relatedHeading: "Công cụ liên quan",
    metaTitleSuffix: "— Công cụ trực tuyến miễn phí",
  },
  article: {
    tocHeading: "Mục lục",
    readingTime: "{minutes} phút đọc",
    readingTimeOne: "1 phút đọc",
    readingTimeTwo: "2 phút đọc",
    published: "Đăng ngày {date}",
    updated: "Cập nhật ngày {date}",
    relatedHeading: "Bài viết liên quan",
    previousArticle: "Trước",
    nextArticle: "Tiếp theo",
    ctaDefaultHeading: "Sẵn sàng thử {tool}?",
    ctaCompressPdfButtonLabel: "Nén PDF miễn phí",
  },
  card: { comingSoon: "Sắp ra mắt" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Công cụ PDF miễn phí, nhanh và dễ sử dụng",
    toolPicker: {
      trigger: "Chọn một công cụ PDF",
      ariaLabel: "Menu công cụ PDF",
      loadMore: "Thêm công cụ",
      allShown: "Đã hiển thị tất cả công cụ",
    },
    features: { devices: "Hoạt động trên mọi thiết bị", fast: "Nhanh chóng", secure: "An toàn" },
  },
  footer: {
    rights: "Đã đăng ký bản quyền.",
    privacyNote: "Tệp được xử lý an toàn và không bao giờ được lưu trữ lâu hơn mức cần thiết.",
    moreCount: "+{count} nữa",
    company: "Công ty",
    legal: "Pháp lý",
    aboutUs: "Về chúng tôi",
    contactUs: "Liên hệ",
    blog: "Blog",
    faq: "Câu hỏi thường gặp",
    privacyPolicy: "Chính sách quyền riêng tư",
    termsOfService: "Điều khoản dịch vụ",
    cookiePolicy: "Chính sách cookie",
  },
  staticPages: {
    note: "Đây là trang tạm thời — nội dung đầy đủ sẽ sớm được cập nhật.",
    aboutUs: {
      title: "Về chúng tôi",
      intro:
        "TAMPDF là bộ công cụ trực tuyến miễn phí được tạo ra để giúp các tác vụ tệp hằng ngày — gộp, tách, nén và chuyển đổi PDF, hình ảnh và tài liệu — trở nên nhanh chóng, riêng tư và dễ dàng.",
    },
    contactUs: {
      title: "Liên hệ",
      intro: "Bạn có câu hỏi, phát hiện lỗi, hay muốn đề xuất một công cụ mới? Chúng tôi rất muốn lắng nghe bạn.",
    },
    blog: { title: "Blog", intro: "Chúng tôi đang chuẩn bị các bài viết về định dạng tệp, mẹo năng suất và cập nhật sản phẩm." },
    faq: {
      title: "Câu hỏi thường gặp",
      intro: "Các câu trả lời chung về TAMPDF sẽ sớm được đăng tại đây. Trong khi đó, mỗi công cụ đều có phần câu hỏi thường gặp riêng.",
    },
    privacyPolicy: {
      title: "Chính sách quyền riêng tư",
      intro: "Chính sách quyền riêng tư đầy đủ của chúng tôi, giải thích chi tiết cách TAMPDF xử lý tệp và dữ liệu của bạn, đang được hoàn thiện và sẽ sớm được đăng tại đây.",
    },
    termsOfService: {
      title: "Điều khoản dịch vụ",
      intro: "Các Điều khoản dịch vụ này quy định việc bạn sử dụng các công cụ và trang web của TAMPDF, bao gồm tuyên bố miễn trừ bảo hành và giới hạn trách nhiệm pháp lý.",
    },
    cookiePolicy: {
      title: "Chính sách cookie",
      intro: "Chi tiết về cookie và các công nghệ tương tự mà TAMPDF sử dụng sẽ sớm được đăng tại đây.",
    },
  },
  dropzone: {
    browse: "hoặc nhấp để duyệt tệp",
    defaultLabel: "Kéo và thả tệp của bạn vào đây",
    unsupportedType: "{name} không phải là loại tệp được hỗ trợ nên đã bị bỏ qua.",
    unsupportedTypePlural: "{count} tệp không có định dạng được hỗ trợ nên đã bị bỏ qua.",
    tooLarge: "{name} quá lớn (tối đa {max}) nên đã bị bỏ qua.",
    tooLargePlural: "{count} tệp quá lớn (tối đa {max}) nên đã bị bỏ qua.",
    maxFilesReached: "Bạn đã thêm tối đa {max} tệp cho công cụ này.",
    maxFilesExceeded: "Công cụ này chỉ cho phép tối đa {max} tệp mỗi lần, vì vậy chỉ có {added} tệp của bạn được thêm vào.",
  },
  fileList: { moveUp: "Di chuyển lên", moveDown: "Di chuyển xuống", remove: "Xóa {name}" },
  result: {
    ready: "Tệp của bạn đã sẵn sàng",
    download: "Tải xuống",
    startOver: "Bắt đầu lại",
    smaller: "nhỏ hơn",
    originalSize: "Kích thước gốc",
    newSize: "Kích thước mới",
    reducedBy: "Giảm được",
    spaceSaved: "Dung lượng tiết kiệm",
  },
  notFound: {
    title: "Không tìm thấy trang",
    description: "Trang bạn đang tìm không tồn tại hoặc có thể đã được di chuyển.",
    cta: "Về trang chủ",
  },
};
