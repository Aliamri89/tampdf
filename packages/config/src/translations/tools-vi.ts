import type { ToolTranslationOverride } from "./tools-ar";

export const toolsVi: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Nén PDF",
    actionLabel: "Nén PDF",
    shortDescription: "Giảm dung lượng file PDF để dễ chia sẻ và tải lên hơn, ngay trong trình duyệt của bạn.",
    longDescription: [
      "Nén PDF giảm dung lượng file bằng cách mã hóa lại hình ảnh nhúng và loại bỏ dữ liệu không cần thiết, giúp tài liệu của bạn dễ gửi email, tải lên hoặc lưu trữ hơn.",
      "Chọn một mức độ nén để cân bằng giữa dung lượng và chất lượng hình ảnh, và so sánh kích thước trước/sau khi tải xuống.",
    ],
    faq: [
      { question: "PDF của tôi sẽ nhỏ đi bao nhiêu?", answer: "Tùy thuộc vào nội dung. PDF có hình ảnh nhúng lớn thường giảm nhiều nhất, đôi khi 50-90%. PDF nhiều văn bản nén ít hơn vì có ít thứ để tối ưu hóa." },
      { question: "Nén có làm PDF của tôi bị mờ không?", answer: "Ở cài đặt mặc định, mất chất lượng là tối thiểu. Nếu bạn chọn mức nén mạnh nhất, hình ảnh sẽ bị giảm độ phân giải mạnh hơn, có thể làm giảm độ nét khi phóng to." },
      { question: "Việc nén có được thực hiện trên máy chủ của TAMPDF không?", answer: "Không. Nén PDF chạy cục bộ trong trình duyệt của bạn, nên file của bạn không bao giờ được tải lên bất kỳ đâu." },
      { question: "Tôi có thể nén PDF được bảo vệ bằng mật khẩu không?", answer: "Hiện tại chưa thể. Hãy gỡ bảo vệ mật khẩu bằng công cụ khác trước, sau đó nén file." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF sang JPG",
    actionLabel: "Chuyển sang JPG",
    shortDescription: "Biến mỗi trang PDF thành một ảnh JPG chất lượng cao.",
    longDescription: [
      "PDF sang JPG chuyển mỗi trang PDF của bạn thành một ảnh JPG riêng biệt, sẵn sàng để chia sẻ, chỉnh sửa hoặc chèn vào bài thuyết trình. PDF một trang được tải xuống dưới dạng một JPG; PDF nhiều trang được đóng gói thành file .zip.",
      "Việc chuyển đổi diễn ra trực tiếp trong trình duyệt của bạn bằng PDF.js, vì vậy tài liệu của bạn không bao giờ được tải lên máy chủ.",
    ],
    faq: [
      { question: "Nếu PDF của tôi có nhiều trang thì sao?", answer: "Mỗi trang trở thành một ảnh JPG riêng. Nếu có nhiều hơn một trang, chúng sẽ được đóng gói thành một file .zip duy nhất để tải xuống." },
      { question: "Ảnh sẽ sắc nét đến mức nào?", answer: "Các trang được hiển thị ở độ phân giải cao phù hợp với màn hình và hầu hết nhu cầu in ấn. Chọn mức chất lượng để cân bằng độ sắc nét và dung lượng file." },
      { question: "PDF của tôi có được tải lên đâu không?", answer: "Không. PDF sang JPG xử lý từng trang cục bộ trong trình duyệt của bạn, vì vậy file của bạn không bao giờ rời khỏi thiết bị." },
      { question: "Tôi có thể chuyển đổi chỉ một trang thay vì toàn bộ tài liệu không?", answer: "Hiện tại tất cả các trang đều được chuyển đổi. Hãy dùng Gộp PDF hoặc trình đọc PDF để tách riêng một trang trước nếu bạn chỉ cần một ảnh." },
    ],
  },
  "merge-pdf": {
    name: "Gộp PDF",
    actionLabel: "Gộp các PDF",
    shortDescription: "Kết hợp nhiều tệp PDF thành một tài liệu duy nhất, theo thứ tự bạn chọn.",
    longDescription: [
      "Gộp PDF cho phép bạn kết hợp hai hoặc nhiều tệp PDF thành một tài liệu mà không cần cài đặt gì. Thêm các tệp của bạn, kéo để sắp xếp lại thứ tự, và tải xuống một PDF đã gộp.",
      "Mọi thứ diễn ra cục bộ trong trình duyệt của bạn, vì vậy các tệp của bạn không bao giờ được tải lên máy chủ. Điều đó có nghĩa là nó hoạt động ngay cả với các hợp đồng, báo cáo hoặc tài liệu cá nhân nhạy cảm.",
    ],
    faq: [
      { question: "Có giới hạn về số lượng PDF tôi có thể gộp không?", answer: "Không có giới hạn cố định. Vì việc gộp diễn ra trong trình duyệt của bạn, giới hạn thực tế là bộ nhớ thiết bị của bạn chứ không phải hạn ngạch máy chủ." },
      { question: "Tôi có thể thay đổi thứ tự các trang trước khi gộp không?", answer: "Có. Sau khi thêm tệp của bạn, hãy kéo chúng theo thứ tự bạn muốn tài liệu cuối cùng có trước khi gộp." },
      { question: "Tệp của tôi có được tải lên máy chủ của TAMPDF không?", answer: "Không. Gộp PDF xử lý tệp hoàn toàn trong trình duyệt của bạn bằng công nghệ phía máy khách, vì vậy tài liệu của bạn không bao giờ rời khỏi thiết bị." },
      { question: "Việc gộp có ảnh hưởng đến chất lượng PDF của tôi không?", answer: "Không. Các trang được kết hợp nguyên vẹn, không nén lại, vì vậy văn bản, hình ảnh và định dạng vẫn giữ nguyên như bản gốc." },
    ],
  },
  "rotate-pdf": {
    name: "Xoay PDF",
    actionLabel: "Xoay PDF",
    shortDescription: "Xoay từng trang hoặc toàn bộ PDF 90°, 180° hoặc 270°, ngay trong trình duyệt của bạn.",
    longDescription: [
      "Xoay PDF cho phép bạn sửa các trang bị nghiêng hoặc lộn ngược chỉ trong vài giây. Tải lên một hoặc nhiều PDF, xem hình thu nhỏ của từng trang, sau đó xoay toàn bộ tài liệu cùng lúc hoặc chỉ những trang cần thiết.",
      "Mọi thứ diễn ra cục bộ trong trình duyệt của bạn, vì vậy các tệp của bạn không bao giờ được tải lên máy chủ. Tải lên nhiều PDF cùng lúc và mỗi tệp được xoay và trả về độc lập.",
    ],
    faq: [
      { question: "Tôi có thể xoay chỉ một trang thay vì toàn bộ tài liệu không?", answer: "Có. Nhấp vào nút xoay của một trang để chỉ xoay trang đó, hoặc dùng nút xoay tất cả để áp dụng cùng một góc xoay cho mọi trang cùng lúc." },
      { question: "Những góc xoay nào được hỗ trợ?", answer: "Bạn có thể xoay các trang 90°, 180° hoặc 270° theo bất kỳ hướng nào." },
      { question: "Tôi có thể xoay nhiều hơn một PDF cùng lúc không?", answer: "Có. Tải lên nhiều PDF và mỗi tệp được xoay độc lập. Nếu bạn tải lên nhiều hơn một tệp, các PDF đã xoay sẽ được đóng gói thành .zip để tải xuống." },
      { question: "PDF của tôi có được tải lên đâu không?", answer: "Không. Xoay PDF xử lý mọi thứ cục bộ trong trình duyệt của bạn, vì vậy tệp của bạn không bao giờ rời khỏi thiết bị." },
    ],
  },
  "compress-image": {
    name: "Nén ảnh",
    actionLabel: "Nén ảnh",
    shortDescription: "Giảm dung lượng tệp JPG, PNG và WebP mà vẫn giữ nguyên chất lượng hình ảnh.",
    longDescription: [
      "Nén ảnh giảm dung lượng của ảnh JPG, PNG hoặc WebP, giúp tải lên, gửi email và tải trên các trang web nhanh hơn.",
      "Việc nén diễn ra hoàn toàn trong trình duyệt của bạn bằng canvas API, vì vậy ảnh của bạn không bao giờ rời khỏi thiết bị, và bạn có thể nén nhiều ảnh cùng lúc.",
    ],
    faq: [
      { question: "Những định dạng ảnh nào được hỗ trợ?", answer: "Ảnh JPG, PNG và WebP được hỗ trợ cả đầu vào và đầu ra." },
      { question: "Tôi có thể nén nhiều ảnh cùng lúc không?", answer: "Có. Thêm bao nhiêu ảnh tùy thích và mỗi ảnh sẽ được nén và đóng gói thành một .zip duy nhất để tải xuống, hoặc tải xuống riêng lẻ." },
      { question: "Tôi có thể giảm dung lượng ảnh đến mức nào mà không mất chất lượng?", answer: "Cài đặt chất lượng mặc định thường giảm 60-80% dung lượng file mà không có sự khác biệt rõ rệt. Bạn có thể điều chỉnh thanh trượt chất lượng để có sự cân bằng khác." },
      { question: "Ảnh của tôi có được tải lên máy chủ không?", answer: "Không. Việc nén chạy cục bộ trong trình duyệt của bạn bằng canvas API, vì vậy ảnh của bạn không bao giờ được gửi đi đâu cả." },
    ],
  },
  "image-to-pdf": {
    name: "JPG sang PDF",
    actionLabel: "Chuyển sang PDF",
    shortDescription: "Chuyển một hoặc nhiều ảnh JPG thành một tài liệu PDF duy nhất.",
    longDescription: [
      "JPG sang PDF kết hợp ảnh JPG của bạn thành một tệp PDF duy nhất, mỗi ảnh một trang, theo thứ tự bạn chọn.",
      "Hoàn hảo để biến tài liệu quét, hóa đơn hoặc ảnh thành PDF dễ chia sẻ. Mọi thứ được xử lý cục bộ trong trình duyệt của bạn để đảm bảo quyền riêng tư hoàn toàn.",
    ],
    faq: [
      { question: "Tôi có thể gộp nhiều ảnh thành một PDF không?", answer: "Có. Thêm nhiều ảnh và mỗi ảnh sẽ trở thành một trang trong PDF kết quả, theo thứ tự bạn sắp xếp." },
      { question: "Kích thước trang nào được dùng cho PDF?", answer: "Mỗi trang được đặt kích thước theo kích thước và hướng của ảnh gốc, vì vậy không có gì bị cắt xén hoặc kéo giãn." },
      { question: "Ảnh của tôi có được tải lên đâu không?", answer: "Không. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn vẫn ở trên thiết bị." },
      { question: "Có hỗ trợ ảnh PNG không?", answer: "Có, ảnh PNG được hỗ trợ cùng với JPG. Ảnh HEIC từ iPhone chưa được hỗ trợ; hãy chuyển chúng sang JPG trước bằng tùy chọn chia sẻ của điện thoại." },
    ],
  },
  "rotate-images": {
    name: "Xoay ảnh",
    actionLabel: "Xoay ảnh",
    shortDescription: "Xoay một hoặc nhiều ảnh JPG, PNG hoặc WebP 90°, 180° hoặc 270°.",
    longDescription: [
      "Xoay ảnh sửa các ảnh bị nghiêng hoặc lộn ngược chỉ trong vài giây. Tải lên một hoặc nhiều ảnh, xoay từng ảnh riêng lẻ hoặc tất cả cùng lúc, và tải xuống kết quả.",
      "Mọi thứ diễn ra cục bộ trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên máy chủ. Tải lên nhiều ảnh cùng lúc và mỗi ảnh được xoay và trả về độc lập.",
    ],
    faq: [
      { question: "Những định dạng ảnh nào được hỗ trợ?", answer: "Ảnh JPG, PNG và WebP được hỗ trợ. Xoay ảnh vẫn giữ nguyên định dạng gốc." },
      { question: "Tôi có thể xoay chỉ một ảnh thay vì tất cả không?", answer: "Có. Nhấp vào nút xoay của một ảnh để chỉ xoay ảnh đó, hoặc dùng nút xoay tất cả để áp dụng cùng một góc xoay cho mọi ảnh cùng lúc." },
      { question: "Những góc xoay nào được hỗ trợ?", answer: "Bạn có thể xoay ảnh 90°, 180° hoặc 270°." },
      { question: "Ảnh của tôi có được tải lên đâu không?", answer: "Không. Xoay ảnh xử lý mọi thứ cục bộ trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ rời khỏi thiết bị." },
    ],
  },
  "split-pdf": {
    name: "Tách PDF",
    actionLabel: "Tách PDF",
    shortDescription: "Tách một PDF thành nhiều tệp nhỏ hơn theo khoảng trang hoặc thành các phần có kích thước cố định.",
    longDescription: [
      "Tách PDF chia một tài liệu lớn thành các tệp PDF riêng biệt mà không thay đổi các trang. Nhập các khoảng trang như 1-3, 5, 8-10 để trích xuất chính xác các phần bạn cần, hoặc tách toàn bộ tài liệu thành các phần bằng nhau với số trang cố định.",
      "Mọi thứ diễn ra trong trình duyệt của bạn — PDF không bao giờ được tải lên máy chủ. Một kết quả duy nhất được tải xuống dưới dạng một PDF; nhiều phần được đóng gói thành .zip.",
    ],
    faq: [
      { question: "Làm thế nào để chọn trang nào vào tệp nào?", answer: "Sử dụng ô nhập khoảng trang: chẳng hạn «1-3, 5, 8-10» tạo ra ba PDF — trang 1 đến 3, trang 5 riêng, và trang 8 đến 10. Hoặc chuyển sang «mỗi N trang» để cắt tài liệu thành các phần bằng nhau." },
      { question: "Các tệp đã tách có giữ chất lượng gốc không?", answer: "Có. Các trang được sao chép nguyên vẹn, không nén lại, vì vậy văn bản, hình ảnh, phông chữ và bố cục giống hệt bản gốc." },
      { question: "PDF của tôi có được tải lên đâu không?", answer: "Không. Việc tách diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy tài liệu của bạn không bao giờ rời khỏi thiết bị." },
      { question: "Điều gì xảy ra với các trường biểu mẫu hoặc chữ ký điện tử?", answer: "Nội dung trang và các thành phần biểu mẫu được giữ nguyên về mặt hình ảnh, nhưng hành vi biểu mẫu tương tác và chữ ký không được chuyển sang các tệp đã tách. Hãy làm phẳng hoặc ký lại sau đó nếu cần." },
    ],
  },
  "delete-pdf-pages": {
    name: "Xóa trang PDF",
    actionLabel: "Xóa trang",
    shortDescription: "Loại bỏ các trang không cần thiết khỏi PDF và tải xuống tài liệu đã rút gọn.",
    longDescription: [
      "Xóa trang PDF cho phép bạn loại bỏ các trang không cần — bản quét trống, trang bìa, trang trùng lặp — và giữ nguyên phần còn lại theo thứ tự ban đầu. Xem hình thu nhỏ của từng trang, chạm vào những trang cần xóa, và tải xuống kết quả.",
      "Toàn bộ quá trình diễn ra cục bộ trong trình duyệt của bạn, vì vậy PDF của bạn không bao giờ được tải lên. Các trang còn lại được sao chép mà không nén lại, vì vậy không có gì mất chất lượng.",
    ],
    faq: [
      { question: "Tôi có thể xóa nhiều trang cùng lúc không?", answer: "Có. Chọn bao nhiêu trang tùy thích trong lưới hình thu nhỏ, sau đó xóa tất cả trong một bước." },
      { question: "Tôi có thể xóa tất cả các trang không?", answer: "Không — phải giữ lại ít nhất một trang, vì vậy nút sẽ bị vô hiệu hóa nếu bạn chọn tất cả." },
      { question: "Xóa trang có làm giảm dung lượng file không?", answer: "Thường giảm một chút, vì nội dung của các trang bị xóa cũng mất theo. Các tài nguyên dùng chung như phông chữ có thể vẫn còn, vì vậy hãy dùng Nén PDF sau đó nếu dung lượng quan trọng." },
      { question: "Tệp của tôi có được tải lên máy chủ không?", answer: "Không. Mọi thứ diễn ra trong trình duyệt của bạn và PDF của bạn không bao giờ rời khỏi thiết bị." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Sắp xếp lại trang PDF",
    actionLabel: "Sắp xếp lại trang",
    shortDescription: "Kéo các trang PDF để sắp xếp lại thứ tự mới và lưu tài liệu đã sắp xếp.",
    longDescription: [
      "Sắp xếp lại trang PDF hiển thị hình thu nhỏ của từng trang mà bạn có thể kéo theo thứ tự mong muốn — đưa một trang lên đầu, hoán đổi hai phần, hoặc đảo ngược toàn bộ tài liệu. Cũng có các nút di chuyển để thay đổi chính xác từng trang một.",
      "Việc sắp xếp lại diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy PDF của bạn không bao giờ được tải lên. Các trang được sao chép nguyên vẹn, vì vậy chất lượng và định dạng không bị ảnh hưởng.",
    ],
    faq: [
      { question: "Làm thế nào để di chuyển một trang?", answer: "Kéo hình thu nhỏ của trang đó đến vị trí mới, hoặc dùng nút lên/xuống trên mỗi trang để di chuyển từng bước. Thứ tự mới được lưu khi bạn nhấp vào nút." },
      { question: "Tôi có thể đảo ngược toàn bộ tài liệu không?", answer: "Có — kéo các trang theo thứ tự ngược lại, hoặc dùng nút di chuyển. Bất kỳ số lượng trang nào cũng có thể được sắp xếp lại trong một lần." },
      { question: "Sắp xếp lại có làm thay đổi nội dung trang không?", answer: "Không. Chỉ có thứ tự trang thay đổi — văn bản, hình ảnh và bố cục của mỗi trang vẫn giữ nguyên hoàn toàn." },
      { question: "PDF có được tải lên đâu không?", answer: "Không. Việc sắp xếp lại diễn ra cục bộ trong trình duyệt của bạn và tệp của bạn không bao giờ rời khỏi thiết bị." },
    ],
  },
  "crop-pdf": {
    name: "Cắt PDF",
    actionLabel: "Cắt PDF",
    shortDescription: "Cắt lề của mỗi trang PDF bằng cách đặt khoảng cách trên, dưới và hai bên.",
    longDescription: [
      "Cắt PDF loại bỏ khoảng trắng không mong muốn hoặc viền quét từ các cạnh của trang. Đặt tỷ lệ phần trăm cần cắt từ trên, dưới, trái và phải, xem bản xem trước trực tiếp, và áp dụng cho tất cả các trang cùng lúc.",
      "Việc cắt điều chỉnh vùng hiển thị của trang mà không xóa bất kỳ nội dung nào — các phần bị cắt chỉ đơn giản là bị ẩn đi. Mọi thứ diễn ra trong trình duyệt của bạn, vì vậy PDF của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Việc cắt có xóa nội dung nằm ngoài vùng cắt không?", answer: "Không. Cắt PDF thay đổi hộp cắt của trang, giúp ẩn vùng bên ngoài trong trình xem và khi in. Nội dung gốc vẫn còn trong tệp và có thể được khôi phục." },
      { question: "Cùng một mức cắt có áp dụng cho tất cả các trang không?", answer: "Có. Các lề bạn đặt sẽ áp dụng cho tất cả các trang. Các trang có kích thước khác nhau đều được cắt theo cùng một tỷ lệ phần trăm." },
      { question: "Tôi có thể cắt tài liệu quét để loại bỏ viền đen không?", answer: "Có — đây là cách dùng phổ biến. Tăng lề cho đến khi bản xem trước chỉ hiển thị nội dung bạn muốn giữ lại." },
      { question: "Tệp của tôi có được tải lên máy chủ không?", answer: "Không. Việc cắt diễn ra hoàn toàn trong trình duyệt của bạn và PDF của bạn vẫn ở trên thiết bị." },
    ],
  },
  "resize-pdf": {
    name: "Đổi kích thước PDF",
    actionLabel: "Đổi kích thước PDF",
    shortDescription: "Đổi kích thước trang PDF sang A4, Letter hoặc tỷ lệ tùy chỉnh, với nội dung được căn chỉnh và căn giữa.",
    longDescription: [
      "Đổi kích thước PDF thay đổi kích thước trang vật lý của tài liệu. Chọn kích thước tiêu chuẩn như A4 hoặc US Letter và mỗi trang sẽ được thu phóng vừa vặn và căn giữa, hoặc dùng tỷ lệ phần trăm để thu nhỏ hoặc phóng to các trang theo tỷ lệ.",
      "Việc đổi kích thước diễn ra trong trình duyệt của bạn mà không cần tải lên. Nội dung được thu phóng cùng với trang, vì vậy không có gì bị cắt và bố cục vẫn giữ tỷ lệ.",
    ],
    faq: [
      { question: "Tôi có thể chọn những kích thước trang nào?", answer: "A4 và US Letter theo chiều dọc hoặc ngang, cùng với A3 và A5. Bạn cũng có thể nhập tỷ lệ phần trăm thu phóng để đổi kích thước mà không thay đổi tỷ lệ khung hình." },
      { question: "Nội dung của tôi có bị kéo giãn không?", answer: "Không. Nội dung được thu phóng đồng đều để vừa với kích thước mới và căn giữa trên trang, vì vậy tỷ lệ được giữ nguyên và không có gì bị cắt xén." },
      { question: "Tôi có thể dùng công cụ này để giảm dung lượng file PDF không?", answer: "Không trực tiếp — công cụ này thay đổi kích thước trang, không phải dung lượng tệp. Hãy dùng Nén PDF để giảm dung lượng tệp." },
      { question: "Tệp của tôi có được tải lên đâu không?", answer: "Không. Việc đổi kích thước được thực hiện cục bộ trong trình duyệt của bạn và PDF của bạn không bao giờ rời khỏi thiết bị." },
    ],
  },
  "png-to-pdf": {
    name: "PNG sang PDF",
    actionLabel: "Chuyển sang PDF",
    shortDescription: "Chuyển một hoặc nhiều ảnh PNG thành một tài liệu PDF, mỗi trang một ảnh.",
    longDescription: [
      "PNG sang PDF kết hợp ảnh PNG của bạn thành một tệp PDF, mỗi ảnh trên trang riêng với độ phân giải gốc. Thêm nhiều ảnh, sắp xếp thứ tự, và tải xuống một tài liệu.",
      "Rất tốt để biến ảnh chụp màn hình, sơ đồ hoặc đồ họa xuất ra thành PDF dễ chia sẻ. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên. Các vùng trong suốt được đặt trên nền trắng.",
    ],
    faq: [
      { question: "Tôi có thể gộp nhiều PNG thành một PDF không?", answer: "Có. Thêm bao nhiêu ảnh PNG tùy thích và mỗi ảnh sẽ trở thành một trang trong PDF kết quả, theo thứ tự bạn sắp xếp." },
      { question: "Kích thước trang nào được sử dụng?", answer: "Mỗi trang khớp với kích thước pixel của ảnh gốc, vì vậy ảnh không bị cắt xén hoặc kéo giãn." },
      { question: "Điều gì xảy ra với các phần trong suốt của ảnh?", answer: "Độ trong suốt được làm phẳng trên nền trắng để trang trông giống nhau trong mọi trình xem PDF." },
      { question: "Ảnh của tôi có được tải lên máy chủ không?", answer: "Không. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn và ảnh của bạn vẫn ở trên thiết bị." },
    ],
  },
  "extract-pdf-pages": {
    name: "Trích xuất trang PDF",
    actionLabel: "Trích xuất trang",
    shortDescription: "Trích các trang đã chọn từ PDF sang tệp mới — hoặc lưu mỗi trang thành một PDF riêng.",
    longDescription: [
      "Trích xuất trang PDF cho phép bạn chọn chính xác các trang cần thiết từ một tài liệu và lưu chúng thành PDF mới. Xem hình thu nhỏ của từng trang, chạm vào những trang muốn giữ, và tải xuống cùng nhau — hoặc dưới dạng các PDF một trang riêng biệt trong một ZIP.",
      "Tệp gốc của bạn không thay đổi, và các trang được sao chép nguyên vẹn, vì vậy văn bản, hình ảnh và định dạng không bị ảnh hưởng. Mọi thứ diễn ra trong trình duyệt của bạn, vì vậy PDF không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Sự khác biệt giữa trích xuất và tách là gì?", answer: "Trích xuất chỉ lưu các trang bạn chọn vào một PDF mới. Tách chia toàn bộ tài liệu thành nhiều phần theo khoảng trang hoặc kích thước cố định." },
      { question: "Tôi có thể lưu mỗi trang đã trích xuất thành tệp riêng không?", answer: "Có. Chọn «PDF riêng biệt» và mỗi trang đã chọn sẽ trở thành PDF riêng của nó, được đóng gói trong một lần tải xuống .zip." },
      { question: "Các trang đã trích xuất có bị mất chất lượng không?", answer: "Không. Các trang được sao chép mà không nén lại, vì vậy chúng trông giống hệt bản gốc. Các trường biểu mẫu tương tác có thể trở thành nội dung trang thông thường." },
      { question: "PDF của tôi có được tải lên máy chủ không?", answer: "Không. Các trang được trích xuất cục bộ trong trình duyệt của bạn và tệp của bạn không bao giờ rời khỏi thiết bị." },
    ],
  },
  "add-page-numbers": {
    name: "Thêm số trang",
    actionLabel: "Thêm số trang",
    shortDescription: "Đánh số các trang PDF, tùy chọn vị trí, định dạng và số bắt đầu.",
    longDescription: [
      "Thêm số trang đóng dấu một số lên mỗi trang PDF của bạn. Chọn một trong sáu vị trí, kiểu như «1», «1 / 10» hoặc «Trang 1 trên 10», đặt số bắt đầu, và tùy chọn bỏ qua trang bìa.",
      "Các số được vẽ dưới dạng văn bản thực bằng phông chữ tiêu chuẩn, vì vậy chúng in ra rõ nét và luôn thẳng đứng ngay cả trên các trang đã xoay. Toàn bộ quá trình diễn ra trong trình duyệt của bạn — tài liệu của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tôi có thể bắt đầu đánh số từ số khác 1 không?", answer: "Có. Đặt bất kỳ số bắt đầu nào — hữu ích khi PDF của bạn là một chương hoặc phụ lục của tài liệu lớn hơn." },
      { question: "Tôi có thể để trang bìa không có số không?", answer: "Có. Bật «Không đánh số trang đầu tiên» và việc đánh số sẽ bắt đầu từ trang thứ hai." },
      { question: "Những chữ số nào được sử dụng?", answer: "Chữ số tiêu chuẩn (1, 2, 3), hiển thị đúng trong mọi trình đọc PDF. Các nhãn như «Trang 1 trên 10» được viết bằng tiếng Việt." },
      { question: "Tệp của tôi có được tải lên không?", answer: "Không. Số trang được thêm cục bộ trong trình duyệt của bạn và PDF của bạn vẫn ở trên thiết bị." },
    ],
  },
  "add-watermark": {
    name: "Thêm hình mờ",
    actionLabel: "Thêm hình mờ",
    shortDescription: "Đóng dấu chữ như MẬT hoặc BẢN NHÁP lên mọi trang của PDF.",
    longDescription: [
      "Thêm hình mờ đặt văn bản của bạn lên mỗi trang PDF — một lần ở giữa hoặc lặp lại khắp trang. Chọn màu sắc, độ mờ, kích thước và góc, và xem bản xem trước trực tiếp trên trang đầu tiên trước khi áp dụng.",
      "Tiếng Việt và các văn tự khác được hỗ trợ đầy đủ. Hình mờ được lưu dưới dạng đối tượng hình mờ tiêu chuẩn, và mọi thứ diễn ra trong trình duyệt của bạn, vì vậy tài liệu của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tôi có thể viết hình mờ bằng tiếng Việt không?", answer: "Có. Văn bản được hiển thị bằng phông chữ của trình duyệt bạn, vì vậy tiếng Việt và các văn tự khác được hiển thị chính xác." },
      { question: "Hình mờ có thể lặp lại khắp trang không?", answer: "Có. Chọn bố cục «Lặp lại» để lát văn bản khắp mỗi trang, hoặc «Một lần, ở giữa» cho một con dấu duy nhất." },
      { question: "Hình mờ có thể được xóa sau này không?", answer: "Nó được lưu dưới dạng đối tượng hình mờ tiêu chuẩn, vì vậy các công cụ nhận diện hình mờ — bao gồm Xóa hình mờ của TAMPDF — có thể xóa nó. Đây không phải là tính năng bảo mật." },
      { question: "PDF của tôi có được tải lên đâu không?", answer: "Không. Hình mờ được áp dụng cục bộ trong trình duyệt của bạn." },
    ],
  },
  "remove-watermark": {
    name: "Xóa hình mờ",
    actionLabel: "Xóa hình mờ",
    shortDescription: "Xóa các hình mờ được thêm dưới dạng đối tượng hình mờ trong PDF.",
    longDescription: [
      "Xóa hình mờ tìm và xóa các hình mờ được thêm dưới dạng đối tượng hình mờ — loại mà Adobe Acrobat, TAMPDF và hầu hết các trình chỉnh sửa PDF tạo ra — cùng với các chú thích hình mờ và lớp có tên «Watermark». Phần còn lại của mỗi trang vẫn giữ nguyên hoàn toàn.",
      "Các hình mờ là một phần của ảnh quét hoặc được hợp nhất vào văn bản trang thông thường không có dấu hiệu nào để phân biệt chúng với nội dung thực, vì vậy chúng không thể tự động bị xóa. Vui lòng chỉ xóa hình mờ khỏi các tài liệu mà bạn có quyền chỉnh sửa. Việc xử lý diễn ra trong trình duyệt của bạn, vì vậy tệp của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Những hình mờ nào có thể được xóa?", answer: "Hình mờ được thêm dưới dạng đối tượng hình mờ, chú thích hình mờ, hoặc lớp có tên «Watermark» — bao gồm những hình mờ được tạo bởi Adobe Acrobat và công cụ Thêm hình mờ của TAMPDF." },
      { question: "Tại sao hình mờ trong tệp của tôi không được xóa?", answer: "Nếu hình mờ là một phần của ảnh trang đã quét hoặc đã được làm phẳng vào văn bản trang, nó không thể tách khỏi nội dung thực mà không làm hỏng trang." },
      { question: "Việc xóa hình mờ có ảnh hưởng đến phần còn lại của trang không?", answer: "Không. Chỉ nội dung được đánh dấu là hình mờ bị xóa; văn bản, hình ảnh và bố cục không bị ảnh hưởng." },
      { question: "Tệp của tôi có được tải lên không?", answer: "Không. PDF được xử lý cục bộ trong trình duyệt của bạn." },
    ],
  },
  "pdf-to-images": {
    name: "PDF sang ảnh",
    actionLabel: "Chuyển sang ảnh",
    shortDescription: "Chuyển mỗi trang PDF thành ảnh PNG, JPG hoặc WEBP, tải xuống dưới dạng ZIP.",
    longDescription: [
      "PDF sang ảnh hiển thị mỗi trang PDF của bạn dưới dạng ảnh riêng biệt theo định dạng bạn chọn: PNG cho văn bản sắc nét nhất, JPG cho tệp nhỏ nhất, hoặc WEBP cho ảnh hiện đại, nhỏ gọn. Chọn độ phân giải và mỗi trang được xuất ra và đóng gói thành một .zip duy nhất.",
      "Việc hiển thị diễn ra trực tiếp trong trình duyệt của bạn bằng PDF.js, vì vậy tài liệu của bạn không bao giờ được tải lên máy chủ.",
    ],
    faq: [
      { question: "Tôi nên chọn định dạng ảnh nào?", answer: "PNG giữ văn bản và hình vẽ đường nét hoàn toàn sắc nét. JPG tạo ra tệp nhỏ hơn và phù hợp với ảnh chụp. WEBP mang lại sự cân bằng tốt khi dùng trên web." },
      { question: "Độ phân giải của ảnh là bao nhiêu?", answer: "Tiêu chuẩn hiển thị ở 108 dpi, Cao ở 144 dpi, và Tối đa ở 216 dpi — đủ cao để in hầu hết tài liệu." },
      { question: "Làm thế nào để lấy tất cả các trang cùng lúc?", answer: "Mỗi trang được chuyển đổi và đóng gói vào một tệp .zip. PDF một trang được tải xuống dưới dạng một ảnh duy nhất." },
      { question: "PDF của tôi có được tải lên không?", answer: "Không. Các trang được hiển thị cục bộ trong trình duyệt của bạn." },
    ],
  },
  "images-to-pdf": {
    name: "Ảnh sang PDF",
    actionLabel: "Tạo PDF",
    shortDescription: "Kết hợp ảnh JPG, PNG và WEBP thành một PDF, theo thứ tự bạn chọn.",
    longDescription: [
      "Ảnh sang PDF biến một tập hợp ảnh chụp, bản quét hoặc ảnh chụp màn hình thành một tài liệu PDF duy nhất. Thêm ảnh JPG, PNG hoặc WEBP, kéo hình thu nhỏ theo thứ tự mong muốn, và chọn trang A4 hoặc Letter (với hướng tự động) hoặc các trang khớp với từng ảnh.",
      "Thêm lề để có giao diện in ấn gọn gàng. Các vùng trong suốt được đặt trên nền trắng, và toàn bộ quá trình chuyển đổi diễn ra trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tôi có thể thay đổi thứ tự các ảnh không?", answer: "Có. Kéo hình thu nhỏ hoặc dùng nút mũi tên để đặt thứ tự trang trước khi tạo PDF." },
      { question: "Những định dạng ảnh nào được hỗ trợ?", answer: "JPG, PNG và WEBP. Bạn có thể trộn các định dạng trong cùng một PDF." },
      { question: "PDF sẽ dùng kích thước trang nào?", answer: "Chọn A4 hoặc Letter — mỗi ảnh được khớp vào trang và xoay ngang khi cần — hoặc «Khớp với ảnh» để mỗi trang có đúng kích thước của ảnh." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. PDF được tạo cục bộ trong trình duyệt của bạn." },
    ],
  },
  "flip-pdf": {
    name: "Lật PDF",
    actionLabel: "Lật PDF",
    shortDescription: "Lật các trang PDF theo chiều ngang hoặc chiều dọc.",
    longDescription: [
      "Lật PDF phản chiếu mỗi trang tài liệu của bạn — từ trái sang phải hoặc từ trên xuống dưới. Hữu ích để in ấn chuyển nhiệt, sửa các bản quét sai mặt, hoặc chuẩn bị tác phẩm nghệ thuật ngược.",
      "Xem trước kết quả trên trang đầu tiên trước khi áp dụng. Việc lật cũng tôn trọng các trang đã xoay, và mọi thứ diễn ra trong trình duyệt của bạn, vì vậy tệp của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Sự khác biệt giữa lật và xoay là gì?", answer: "Xoay quay một trang theo từng bước 90°. Lật tạo ra hình ảnh phản chiếu, vì vậy văn bản đọc ngược lại — đó là những gì bạn cần cho việc chuyển nhiệt và một số công việc in ấn." },
      { question: "Tôi có thể lật chỉ một trang không?", answer: "Việc lật áp dụng cho tất cả các trang. Để lật một trang duy nhất, hãy trích xuất trang đó trước bằng Trích xuất trang PDF." },
      { question: "Lật có làm giảm chất lượng không?", answer: "Không. Các trang được biến đổi, không được hiển thị lại, vì vậy văn bản và đồ họa vẫn sắc nét như bản gốc." },
      { question: "PDF của tôi có được tải lên không?", answer: "Không. Việc lật diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Chỉnh sửa metadata PDF",
    actionLabel: "Chỉnh sửa metadata",
    shortDescription: "Thay đổi tiêu đề, tác giả, chủ đề và từ khóa của PDF.",
    longDescription: [
      "Chỉnh sửa metadata PDF cho phép bạn xem và thay đổi các thuộc tính tài liệu được lưu trữ bên trong PDF — tiêu đề, tác giả, chủ đề, từ khóa, người tạo và trình tạo. Đây là những gì trình đọc PDF, công cụ tìm kiếm và trình quản lý tệp hiển thị về tài liệu của bạn.",
      "Để trống một trường để xóa nó. Nội dung trang không bị ảnh hưởng, và toàn bộ việc chỉnh sửa diễn ra trong trình duyệt của bạn, vì vậy tệp của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tại sao nên chỉnh sửa metadata PDF?", answer: "Tiêu đề và tác giả rõ ràng giúp tài liệu dễ tìm hơn và trông chuyên nghiệp hơn khi chia sẻ, và các công cụ tìm kiếm có thể sử dụng chúng khi lập chỉ mục PDF." },
      { question: "Chỉnh sửa metadata có thay đổi nội dung tài liệu không?", answer: "Không. Chỉ các thuộc tính tài liệu thay đổi; các trang, văn bản và hình ảnh vẫn giữ nguyên hoàn toàn." },
      { question: "Làm thế nào để xóa một thuộc tính?", answer: "Xóa trống trường và lưu lại. Các trường trống sẽ bị xóa khỏi tệp." },
      { question: "PDF của tôi có được tải lên không?", answer: "Không. Các thuộc tính được chỉnh sửa cục bộ trong trình duyệt của bạn." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Xóa metadata PDF",
    actionLabel: "Xóa metadata",
    shortDescription: "Xóa tên tác giả, tiêu đề, phần mềm và các thuộc tính ẩn khác khỏi PDF trước khi chia sẻ.",
    longDescription: [
      "Xóa metadata PDF làm sạch các thuộc tính tài liệu và dữ liệu ẩn mà PDF mang theo — tác giả, tiêu đề, chủ đề, từ khóa, phần mềm dùng để tạo ra nó, ngày tạo và các gói metadata XMP được nhúng.",
      "Đây là bước bảo vệ quyền riêng tư nhanh chóng trước khi chia sẻ tệp công khai. Nội dung trang không bị ảnh hưởng, và việc làm sạch diễn ra trong trình duyệt của bạn, vì vậy tệp của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Những thông tin nào bị xóa?", answer: "Tiêu đề, tác giả, chủ đề, từ khóa, phần mềm tạo và sản xuất, ngày tạo và sửa đổi, metadata XMP được nhúng, và dữ liệu riêng của ứng dụng." },
      { question: "Điều này có làm thay đổi giao diện của tài liệu không?", answer: "Không. Chỉ các thuộc tính ẩn bị xóa; mỗi trang trông giống hệt nhau." },
      { question: "Điều này có xóa thông tin cá nhân được in trên các trang không?", answer: "Không. Nó chỉ xóa metadata. Tên hoặc chi tiết được in trên các trang vẫn hiển thị." },
      { question: "PDF của tôi có được tải lên không?", answer: "Không. Tệp được làm sạch cục bộ trong trình duyệt của bạn." },
    ],
  },
  "pdf-info": {
    name: "Thông tin PDF",
    actionLabel: "Kiểm tra PDF",
    shortDescription: "Xem nhanh số trang, kích thước trang, phiên bản và thuộc tính của PDF.",
    longDescription: [
      "Thông tin PDF đọc một PDF và hiển thị những gì bên trong: số trang, kích thước mỗi trang tính bằng milimét cùng với tên giấy như A4 hoặc Letter, phiên bản PDF, liệu nó có được mã hóa hay chứa biểu mẫu có thể điền hay không, và tiêu đề, tác giả, phần mềm và ngày tháng.",
      "Rất hữu ích trước khi in, nộp hoặc chuyển đổi một tệp. Tài liệu chỉ được đọc — không bao giờ bị thay đổi — và mọi thứ diễn ra trong trình duyệt của bạn, vì vậy nó không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Thông tin PDF hiển thị những chi tiết nào?", answer: "Số trang, kích thước trang kèm tên giấy, phiên bản PDF, dung lượng tệp, mã hóa, biểu mẫu có thể điền, chế độ xem web nhanh, và các thuộc tính tài liệu như tiêu đề, tác giả và ngày tạo." },
      { question: "Thông tin PDF có thay đổi tệp của tôi không?", answer: "Không. PDF chỉ được đọc; không có gì bị sửa đổi hoặc lưu lại." },
      { question: "Tôi có thể kiểm tra PDF được bảo vệ bằng mật khẩu không?", answer: "Các tệp cần mật khẩu để mở không thể đọc được nếu không có mật khẩu đó. Các tệp chỉ có hạn chế chỉnh sửa sẽ được hiển thị là đã mã hóa." },
      { question: "PDF của tôi có được tải lên không?", answer: "Không. Nó được đọc cục bộ trong trình duyệt của bạn." },
    ],
  },
  "resize-image": {
    name: "Đổi kích thước ảnh",
    actionLabel: "Đổi kích thước ảnh",
    shortDescription: "Thay đổi chiều rộng và chiều cao của ảnh JPG, PNG và WEBP — theo phần trăm hoặc pixel chính xác.",
    longDescription: [
      "Đổi kích thước ảnh thay đổi kích thước của ảnh chụp và đồ họa của bạn. Thu phóng theo phần trăm, hoặc nhập chính xác chiều rộng và chiều cao với tỷ lệ khung hình bị khóa để không có gì trông bị kéo giãn. Đổi kích thước nhiều ảnh cùng lúc và tải xuống cùng nhau trong một .zip.",
      "Ảnh giữ nguyên định dạng gốc, và làm mịn chất lượng cao giữ cho ảnh đã thu nhỏ vẫn sắc nét. Mọi thứ diễn ra trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Đổi kích thước có làm ảnh của tôi bị mờ không?", answer: "Thu nhỏ ảnh giữ cho nó sắc nét. Phóng to vượt quá kích thước gốc không thể thêm chi tiết, vì vậy việc tăng kích thước lớn có thể trông mờ." },
      { question: "Tôi có thể đổi kích thước nhiều ảnh cùng lúc không?", answer: "Có. Thêm tối đa 20 ảnh; với tỷ lệ khung hình bị khóa, mỗi ảnh giữ tỷ lệ riêng theo chiều rộng bạn đặt." },
      { question: "Ảnh đã đổi kích thước sẽ có định dạng gì?", answer: "Giống như bản gốc — JPG vẫn là JPG, PNG vẫn là PNG, và WEBP vẫn là WEBP ở nơi trình duyệt của bạn hỗ trợ." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc đổi kích thước diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "crop-image": {
    name: "Cắt ảnh",
    actionLabel: "Cắt ảnh",
    shortDescription: "Cắt ảnh theo vùng bạn muốn bằng khung cắt có thể kéo thả.",
    longDescription: [
      "Cắt ảnh loại bỏ các cạnh không mong muốn khỏi ảnh chụp hoặc ảnh chụp màn hình. Kéo khung cắt hoặc các góc của nó trên bản xem trước — hoặc tinh chỉnh từng cạnh bằng thanh trượt — và xem kích thước chính xác của kết quả tính bằng pixel.",
      "Ảnh đã cắt giữ nguyên định dạng và chất lượng gốc, và toàn bộ quá trình diễn ra trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tôi có thể cắt theo kích thước chính xác không?", answer: "Điều chỉnh từng cạnh bằng thanh trượt và theo dõi kích thước kết quả cập nhật theo pixel khi bạn thực hiện." },
      { question: "Việc cắt có làm giảm chất lượng ảnh không?", answer: "Không. Các pixel bạn giữ lại được sao chép nguyên vẹn; chỉ các phần bên ngoài khung mới bị loại bỏ." },
      { question: "Tôi có thể cắt những định dạng nào?", answer: "JPG, PNG và WEBP. Kết quả giữ nguyên định dạng giống bản gốc." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc cắt diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "flip-image": {
    name: "Lật ảnh",
    actionLabel: "Lật ảnh",
    shortDescription: "Lật ảnh theo chiều ngang hoặc chiều dọc — từng ảnh hoặc hàng loạt.",
    longDescription: [
      "Lật ảnh tạo ra hình ảnh phản chiếu của ảnh chụp: từ trái sang phải, hoặc từ trên xuống dưới. Hữu ích để sửa ảnh tự sướng chụp bằng camera trước, tạo hiệu ứng phản chiếu, hoặc chuẩn bị thiết kế cho in chuyển nhiệt.",
      "Lật nhiều ảnh cùng lúc, xem trước kết quả ngay lập tức, và tải xuống theo định dạng gốc. Mọi thứ diễn ra trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Sự khác biệt giữa lật và xoay là gì?", answer: "Xoay quay một ảnh theo từng bước 90°. Lật phản chiếu nó, giống như soi gương." },
      { question: "Tôi có thể lật nhiều ảnh cùng lúc không?", answer: "Có. Thêm tối đa 20 ảnh và tất cả được lật theo cùng một cách, sau đó tải xuống cùng nhau dưới dạng .zip." },
      { question: "Lật có làm giảm chất lượng không?", answer: "Không có sự mất mát đáng kể — PNG vẫn không mất dữ liệu, và JPG cùng WEBP được lưu với chất lượng cao." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc lật diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "png-to-jpg": {
    name: "PNG sang JPG",
    actionLabel: "Chuyển sang JPG",
    shortDescription: "Chuyển ảnh PNG sang JPG để dung lượng nhỏ hơn và tương thích rộng rãi hơn.",
    longDescription: [
      "PNG sang JPG chuyển ảnh PNG của bạn thành các tệp JPG, thường nhỏ hơn nhiều — lý tưởng cho ảnh chụp, tệp đính kèm email và các biểu mẫu tải lên chỉ chấp nhận JPG. Chuyển đổi nhiều ảnh cùng lúc và điều chỉnh chất lượng để cân bằng dung lượng và độ sắc nét.",
      "JPG không hỗ trợ trong suốt, vì vậy các vùng trong suốt sẽ được lấp đầy bằng màu trắng. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tại sao nên chuyển PNG sang JPG?", answer: "Đối với ảnh chụp, các tệp JPG thường nhỏ hơn nhiều so với PNG và được chấp nhận ở hầu hết mọi nơi, từ email đến các biểu mẫu trực tuyến." },
      { question: "Điều gì xảy ra với nền trong suốt?", answer: "JPG không có tính năng trong suốt, vì vậy các vùng trong suốt sẽ được lấp đầy bằng màu trắng." },
      { question: "Tôi có thể chuyển đổi nhiều PNG cùng lúc không?", answer: "Có. Thêm tối đa 30 ảnh; chúng được chuyển đổi cùng nhau và tải xuống dưới dạng .zip." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc chuyển đổi diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "jpg-to-png": {
    name: "JPG sang PNG",
    actionLabel: "Chuyển sang PNG",
    shortDescription: "Chuyển ảnh JPG sang PNG không mất chất lượng.",
    longDescription: [
      "JPG sang PNG chuyển ảnh JPG hoặc JPEG của bạn sang định dạng PNG. PNG không mất dữ liệu, vì vậy ảnh sẽ không mất thêm chất lượng khi bạn chỉnh sửa và lưu lại — hữu ích cho các đồ họa bạn sẽ tiếp tục làm việc, hoặc cho các công cụ và nền tảng yêu cầu PNG.",
      "Chuyển đổi nhiều ảnh cùng lúc và tải xuống cùng nhau. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Chuyển JPG sang PNG có cải thiện chất lượng không?", answer: "Không — chi tiết đã mất trong JPG không thể khôi phục. Nhưng PNG ngăn chặn mất mát thêm khi bạn chỉnh sửa và lưu lại." },
      { question: "Tại sao PNG lớn hơn JPG?", answer: "PNG lưu trữ từng pixel mà không nén mất dữ liệu, vì vậy ảnh chụp thường trở nên lớn hơn. Đó là sự đánh đổi cho chất lượng không mất dữ liệu." },
      { question: "Tôi có thể chuyển đổi nhiều JPG cùng lúc không?", answer: "Có. Thêm tối đa 30 ảnh và tải xuống dưới dạng .zip." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc chuyển đổi diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP sang JPG",
    actionLabel: "Chuyển sang JPG",
    shortDescription: "Chuyển ảnh WEBP sang JPG để mở được trên mọi ứng dụng hay trang web.",
    longDescription: [
      "WEBP sang JPG chuyển các ảnh WEBP hiện đại — phổ biến trên các trang web — sang JPG, định dạng được hỗ trợ bởi hầu như mọi ứng dụng, thiết bị và biểu mẫu tải lên. Chuyển đổi một ảnh hoặc nhiều ảnh cùng lúc, và điều chỉnh chất lượng để cân bằng dung lượng và độ sắc nét.",
      "Các vùng trong suốt được lấp đầy bằng màu trắng, vì JPG không hỗ trợ trong suốt. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Tại sao nên chuyển WEBP sang JPG?", answer: "Một số ứng dụng, trình chỉnh sửa và biểu mẫu tải lên cũ hơn không chấp nhận WEBP. JPG hoạt động ở hầu hết mọi nơi." },
      { question: "Tôi có bị mất chất lượng không?", answer: "Ở chất lượng mặc định, sự khác biệt rất khó nhận thấy. Tăng thanh trượt chất lượng để có kết quả sắc nét nhất." },
      { question: "Tôi có thể chuyển đổi nhiều ảnh WEBP cùng lúc không?", answer: "Có. Thêm tối đa 30 ảnh và tải xuống dưới dạng .zip." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc chuyển đổi diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG sang WEBP",
    actionLabel: "Chuyển sang WEBP",
    shortDescription: "Chuyển ảnh JPG sang WEBP để có ảnh nhỏ hơn và tải nhanh hơn trên web.",
    longDescription: [
      "JPG sang WEBP chuyển ảnh JPG của bạn sang WEBP, một định dạng hiện đại thường tạo ra các tệp nhỏ hơn đáng kể với chất lượng hình ảnh tương tự — tuyệt vời để tăng tốc trang web và tiết kiệm dung lượng lưu trữ.",
      "Điều chỉnh chất lượng để tìm sự cân bằng phù hợp và chuyển đổi nhiều ảnh cùng lúc. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên. Tạo tệp WEBP cần phiên bản Chrome, Edge hoặc Firefox gần đây.",
    ],
    faq: [
      { question: "WEBP có nhỏ hơn JPG không?", answer: "Thường là có — WEBP thường tiết kiệm không gian đáng kể với chất lượng tương tự, giúp trang tải nhanh hơn." },
      { question: "Tất cả trình duyệt có hỗ trợ WEBP không?", answer: "Tất cả các trình duyệt hiện đại đều có thể hiển thị WEBP. Tạo tệp WEBP ở đây cần phiên bản Chrome, Edge hoặc Firefox gần đây." },
      { question: "Tôi có thể chuyển đổi nhiều JPG cùng lúc không?", answer: "Có. Thêm tối đa 30 ảnh và tải xuống dưới dạng .zip." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc chuyển đổi diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "webp-to-png": {
    name: "WEBP sang PNG",
    actionLabel: "Chuyển sang PNG",
    shortDescription: "Chuyển ảnh WEBP sang PNG mà vẫn giữ độ trong suốt.",
    longDescription: [
      "WEBP sang PNG chuyển ảnh WEBP sang PNG, định dạng không mất dữ liệu được hỗ trợ bởi mọi trình chỉnh sửa ảnh. Độ trong suốt được giữ nguyên, vì vậy logo, biểu tượng và đồ họa cắt ghép vẫn giữ được nền trong suốt.",
      "Chuyển đổi nhiều ảnh cùng lúc và tải xuống cùng nhau. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên.",
    ],
    faq: [
      { question: "Độ trong suốt có được giữ lại không?", answer: "Có. PNG hỗ trợ trong suốt, vì vậy các vùng trong suốt trong ảnh WEBP của bạn vẫn giữ nguyên trong suốt." },
      { question: "Tại sao nên chuyển WEBP sang PNG?", answer: "PNG mở được trong mọi trình chỉnh sửa và công cụ thiết kế, và không mất chất lượng khi bạn chỉnh sửa và lưu lại." },
      { question: "Tôi có thể chuyển đổi nhiều tệp WEBP cùng lúc không?", answer: "Có. Thêm tối đa 30 ảnh và tải xuống dưới dạng .zip." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc chuyển đổi diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
  "png-to-webp": {
    name: "PNG sang WEBP",
    actionLabel: "Chuyển sang WEBP",
    shortDescription: "Chuyển ảnh PNG sang WEBP để có tệp nhỏ hơn mà vẫn giữ độ trong suốt.",
    longDescription: [
      "PNG sang WEBP chuyển ảnh PNG của bạn sang WEBP, điều này thường làm cho tệp nhỏ hơn nhiều trong khi vẫn giữ độ trong suốt — lý tưởng cho đồ họa trang web, biểu tượng và ảnh chụp màn hình.",
      "Chọn chất lượng, chuyển đổi nhiều ảnh cùng lúc, và tải xuống cùng nhau. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy ảnh của bạn không bao giờ được tải lên. Tạo tệp WEBP cần phiên bản Chrome, Edge hoặc Firefox gần đây.",
    ],
    faq: [
      { question: "WEBP có giữ độ trong suốt không?", answer: "Có. WEBP hỗ trợ trong suốt, vì vậy các vùng PNG trong suốt vẫn giữ nguyên trong suốt." },
      { question: "Ảnh của tôi sẽ nhỏ đi bao nhiêu?", answer: "Tùy thuộc vào từng ảnh, nhưng các tệp WEBP thường nhỏ hơn đáng kể so với cùng một ảnh được lưu dưới dạng PNG." },
      { question: "Tôi có thể chuyển đổi nhiều PNG cùng lúc không?", answer: "Có. Thêm tối đa 30 ảnh và tải xuống dưới dạng .zip." },
      { question: "Ảnh của tôi có được tải lên không?", answer: "Không. Việc chuyển đổi diễn ra cục bộ trong trình duyệt của bạn." },
    ],
  },
};
