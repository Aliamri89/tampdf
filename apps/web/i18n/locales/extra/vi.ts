import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Quảng cáo"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Xem trước — áp dụng cho hình ảnh",
      formatsNote: "Tệp được hỗ trợ: PDF, JPG, PNG và WebP"
    },
    removeWatermark: {
      intro: "Xóa hình mờ được thêm dưới dạng đối tượng hình mờ: trong PDF (do Adobe Acrobat, TAMPDF và hầu hết trình chỉnh sửa thêm) và trong tài liệu Word (Thiết kế ▸ Hình mờ). Hình mờ đã gắn vào điểm ảnh của hình không thể tách khỏi hình, vì vậy không hỗ trợ hình ảnh.",
      formatsNote: "Tệp được hỗ trợ: PDF và Word (.docx)",
      noneFoundWord: "Không tìm thấy hình mờ Word nào trong tài liệu này. Chỉ có thể xóa các hình mờ được thêm bằng tính năng Hình mờ của chính Word."
    }
  },
  consent: {
    title: "Cookie và phân tích",
    description: "Chúng tôi dùng cookie phân tích (Google Analytics và Microsoft Clarity) để hiểu cách trang web được sử dụng. Chúng chỉ chạy nếu bạn đồng ý. Tệp của bạn không bao giờ rời khỏi trình duyệt.",
    accept: "Chấp nhận",
    reject: "Từ chối",
    settings: "Cài đặt cookie",
    statusOn: "Cookie phân tích hiện đang bật.",
    statusOff: "Cookie phân tích hiện đang tắt.",
    close: "Đóng"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Cách TAMPDF xử lý tệp và dữ liệu của bạn: tệp được xử lý trong trình duyệt và không bao giờ tải lên; phân tích, cookie và quảng cáo thu thập gì; và quyền của bạn.",
      updated: "Cập nhật lần cuối: 6 tháng 11 năm 2026.",
      sections: [
        {
          heading: "Tổng quan",
          text: "TAMPDF (tampdf.com) cung cấp các công cụ miễn phí chạy trong trình duyệt cho PDF và hình ảnh. Chính sách này giải thích chúng tôi thu thập và không thu thập những gì."
        },
        {
          heading: "Tệp của bạn ở lại trên thiết bị của bạn",
          text: "Tệp được xử lý cục bộ trong trình duyệt và không bao giờ được tải lên, lưu trữ trên hoặc chia sẻ với máy chủ của chúng tôi hay bất kỳ bên thứ ba nào. Nếu bạn chọn “Lưu vào Google Drive” hoặc “Lưu vào Dropbox”, trình duyệt sẽ gửi kết quả trực tiếp đến dịch vụ bạn đã đăng nhập; chúng tôi không bao giờ nhận được nó."
        },
        {
          heading: "Thông tin thu thập tự động",
          text: "Để hiểu cách trang web được dùng, chúng tôi giữ các bộ đếm đơn giản của riêng mình trên máy chủ và, chỉ khi có sự đồng ý của bạn ở nơi bắt buộc, sử dụng Google Analytics và Microsoft Clarity. Chúng có thể ghi lại các trang đã truy cập, vị trí gần đúng, thiết bị, trình duyệt, ngôn ngữ, trang giới thiệu, công cụ bạn dùng và kết quả thành công hay không. Chúng tôi không bao giờ thu thập tên, địa chỉ email hay nội dung tệp của bạn."
        },
        {
          heading: "Cookie và công nghệ tương tự",
          text: "Các dịch vụ phân tích và quảng cáo có thể đặt cookie hoặc dùng bộ nhớ cục bộ. Chính sách Cookie của chúng tôi liệt kê chúng và giải thích cách kiểm soát; bạn có thể đổi lựa chọn bất cứ lúc nào bằng “Cài đặt cookie” ở chân trang."
        },
        {
          heading: "Quyền của bạn",
          text: "Ở nơi áp dụng các luật như GDPR, GDPR của Vương quốc Anh hoặc CCPA, bạn có thể yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân chúng tôi lưu về bạn, phản đối hoặc hạn chế việc xử lý, rút lại sự đồng ý bất cứ lúc nào và khiếu nại với cơ quan bảo vệ dữ liệu tại nơi bạn ở. Hãy dùng trang Liên hệ để gửi yêu cầu."
        },
        {
          heading: "Thời gian lưu giữ",
          text: "Dữ liệu phân tích chỉ được giữ trong thời gian cần thiết cho thống kê và cải thiện dịch vụ, theo cài đặt lưu giữ của từng nhà cung cấp."
        },
        {
          heading: "Dịch vụ và liên kết của bên thứ ba",
          text: "Trang web có thể liên kết đến hoặc tải dịch vụ của các công ty khác (ví dụ Google, Microsoft và Dropbox). Họ có chính sách quyền riêng tư riêng và chúng tôi không chịu trách nhiệm về chúng."
        },
        {
          heading: "Trẻ em",
          text: "TAMPDF không dành cho trẻ em dưới 13 tuổi (hoặc dưới 16 tuổi nơi luật địa phương yêu cầu) và chúng tôi không cố ý thu thập thông tin cá nhân của trẻ."
        },
        {
          heading: "Bảo mật",
          text: "Tệp được xử lý trong trình duyệt của bạn và không bao giờ gửi cho chúng tôi. Trang web được cung cấp qua HTTPS."
        },
        {
          heading: "Thay đổi chính sách này",
          text: "Chúng tôi có thể cập nhật chính sách này; ngày “Cập nhật lần cuối” cho biết phiên bản mới nhất. Tiếp tục sử dụng trang web nghĩa là bạn chấp nhận bản cập nhật."
        },
        {
          heading: "Liên hệ",
          text: "Có câu hỏi về chính sách này? Vui lòng dùng trang Liên hệ."
        }
      ]
    },
    cookiePolicy: {
      intro: "Các cookie và công nghệ tương tự TAMPDF dùng cho tùy chọn, phân tích và quảng cáo, cùng cách kiểm soát chúng.",
      updated: "Cập nhật lần cuối: 6 tháng 11 năm 2026.",
      sections: [
        {
          heading: "Cookie là gì?",
          text: "Các tệp văn bản nhỏ mà trang web lưu trên thiết bị của bạn. Các công nghệ tương tự như bộ nhớ cục bộ và pixel hoạt động theo cách tương đương; chính sách này bao gồm tất cả."
        },
        {
          heading: "Lưu trữ thực sự cần thiết",
          text: "TAMPDF ghi nhớ giao diện sáng/tối và lựa chọn cookie của bạn trong bộ nhớ cục bộ của trình duyệt. Chúng không chứa dữ liệu cá nhân và không bao giờ được gửi cho chúng tôi."
        },
        {
          heading: "Cookie phân tích",
          text: "Với sự đồng ý của bạn ở nơi bắt buộc, chúng tôi dùng Google Analytics 4 (cookie như _ga và _ga_*) và Microsoft Clarity (như _clck và _clsk) để đo lưu lượng và hiểu cách trang web được dùng; Clarity cũng có thể tạo bản ghi phiên và bản đồ nhiệt đã ẩn danh."
        },
        {
          heading: "Quản lý lựa chọn của bạn",
          text: "Ở nơi bắt buộc có sự đồng ý, bạn có thể chấp nhận hoặc từ chối cookie phân tích trong biểu ngữ và đổi ý bất cứ lúc nào bằng “Cài đặt cookie” ở chân trang; rút lại sự đồng ý sẽ dừng các tập lệnh phân tích và xóa cookie của chúng. Bạn cũng có thể chặn cookie trong trình duyệt — công cụ vẫn hoạt động vì tệp được xử lý cục bộ."
        },
        {
          heading: "Các tùy chọn khác",
          text: "Bạn có thể từ chối quảng cáo được cá nhân hóa tại https://adssettings.google.com hoặc https://www.aboutads.info/choices (https://www.youronlinechoices.eu ở châu Âu) và quản lý dữ liệu Microsoft tại https://account.microsoft.com/privacy."
        },
        {
          heading: "Thay đổi và liên hệ",
          text: "Chúng tôi có thể cập nhật chính sách này; ngày ở trên cho biết phiên bản mới nhất. Có câu hỏi? Hãy dùng trang Liên hệ."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Chấp nhận điều khoản",
          text: "Khi sử dụng TAMPDF, bạn đồng ý với Điều khoản dịch vụ này. Nếu không đồng ý, vui lòng không dùng công cụ của chúng tôi."
        },
        {
          heading: "Dịch vụ",
          text: "TAMPDF cung cấp các công cụ miễn phí chạy trong trình duyệt để làm việc với PDF và hình ảnh. Toàn bộ quá trình xử lý diễn ra cục bộ trong trình duyệt; tệp của bạn không bao giờ được tải lên máy chủ của chúng tôi."
        },
        {
          heading: "Từ chối bảo đảm",
          text: "Các công cụ được cung cấp “nguyên trạng” và “theo khả năng sẵn có”, không kèm bất kỳ bảo đảm nào, rõ ràng hay ngụ ý, bao gồm tính chính xác, độ tin cậy, khả năng thương mại hoặc sự phù hợp cho mục đích cụ thể. Chúng tôi không đảm bảo công cụ không lỗi, không gián đoạn hoặc tương thích với mọi tệp, trình duyệt hay thiết bị."
        },
        {
          heading: "Giới hạn trách nhiệm",
          text: "Trong phạm vi pháp luật cho phép tối đa, TAMPDF và chủ sở hữu không chịu trách nhiệm về các thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc hệ quả — bao gồm mất dữ liệu, hỏng tệp hoặc gián đoạn kinh doanh — phát sinh từ việc sử dụng hoặc không thể sử dụng công cụ."
        },
        {
          heading: "Tệp của bạn",
          text: "Bạn chịu trách nhiệm sao lưu bản gốc và kiểm tra mọi kết quả trước khi dựa vào. Vì việc xử lý diễn ra trong trình duyệt, chúng tôi không thể truy cập hay khôi phục tệp của bạn."
        },
        {
          heading: "Sử dụng chấp nhận được",
          text: "Chỉ dùng TAMPDF cho mục đích hợp pháp và chỉ với các tệp bạn có quyền xử lý. Không dùng công cụ để xâm phạm quyền của người khác, xóa hình mờ hoặc bảo vệ khỏi nội dung bạn không có quyền chỉnh sửa, hay làm gián đoạn hoạt động của trang web."
        },
        {
          heading: "Dịch vụ bên thứ ba và quảng cáo",
          text: "Trang web có thể hiển thị quảng cáo và liên kết hoặc tích hợp dịch vụ bên thứ ba (như Google AdSense, Google Drive và Dropbox). Chúng tôi không kiểm soát các dịch vụ đó; việc bạn sử dụng chúng tuân theo điều khoản và chính sách quyền riêng tư riêng của họ."
        },
        {
          heading: "Quyền sở hữu trí tuệ",
          text: "Tên, logo, thiết kế, văn bản và mã của TAMPDF thuộc về TAMPDF hoặc bên cấp phép. Tệp của bạn vẫn thuộc về bạn; chúng tôi không đòi bất kỳ quyền nào đối với chúng."
        },
        {
          heading: "Thay đổi điều khoản",
          text: "Chúng tôi có thể cập nhật các điều khoản này theo thời gian. Tiếp tục sử dụng TAMPDF sau khi thay đổi được đăng nghĩa là bạn chấp nhận chúng."
        }
      ]
    },
    adsDisclosure: {
      heading: "Quảng cáo",
      paragraphs: [
        "Chúng tôi dùng Google AdSense để hiển thị quảng cáo. Google và các đối tác là nhà cung cấp bên thứ ba sử dụng cookie, web beacon và công nghệ tương tự để phân phát quảng cáo dựa trên các lần truy cập trước đây của bạn vào trang web này và các trang khác.",
        "Bạn có thể từ chối quảng cáo được cá nhân hóa tại Cài đặt quảng cáo của Google (https://adssettings.google.com) hoặc tại https://www.aboutads.info/choices, và đọc cách Google sử dụng dữ liệu từ các trang dùng dịch vụ của mình tại https://policies.google.com/technologies/partner-sites.",
        "Tại Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, quảng cáo chỉ được cá nhân hóa khi có sự đồng ý của bạn, mà bạn có thể cho phép hoặc rút lại qua thông báo đồng ý hiển thị trên trang."
      ]
    }
  }
};
