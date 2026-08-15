export const pricingPlans = [
  {
    name: "STARTER",
    price: "2.990.000",
    tagline: "Cho doanh nghiệp bắt đầu tự động hóa tư vấn.",
    highlight: false,
    features: [
      "1 kênh nhắn tin (Fanpage hoặc Zalo OA)",
      "AI Chatbot tư vấn theo kịch bản ngành",
      "Thu thập & lưu trữ lead tự động",
      "Follow-up tự động cơ bản (3 bước)",
      "Đặt lịch hẹn tự động",
      "Báo cáo hội thoại & lead hàng tuần",
    ],
  },
  {
    name: "GROWTH",
    price: "5.990.000",
    tagline: "Cho doanh nghiệp đang mở rộng đội ngũ bán hàng.",
    highlight: true,
    features: [
      "Tối đa 3 kênh (Fanpage, Zalo OA, Website Chat)",
      "AI Chatbot tùy chỉnh theo quy trình riêng",
      "Lead Scoring tự động theo hành vi",
      "Follow-up đa bước, đa kịch bản",
      "CRM tích hợp quản lý lead & pipeline",
      "Đồng bộ lịch hẹn với Google Calendar",
      "Báo cáo & dashboard theo thời gian thực",
    ],
  },
  {
    name: "PRO",
    price: "9.990.000",
    tagline: "Cho doanh nghiệp vận hành đa chi nhánh, đa kênh.",
    highlight: false,
    features: [
      "Không giới hạn kênh kết nối",
      "AI Chatbot đa chi nhánh, đa ngôn ngữ",
      "Lead Scoring & phân luồng nâng cao",
      "Follow-up cá nhân hóa theo phân khúc khách",
      "CRM đầy đủ + phân quyền theo team",
      "Tích hợp API với hệ thống nội bộ",
      "Hỗ trợ triển khai & chăm sóc ưu tiên",
    ],
  },
];

export const implementationNote =
  "Phí triển khai ban đầu từ 3.000.000đ, tùy mức độ tích hợp hệ thống và số lượng kênh kết nối.";

export const faqs = [
  {
    q: "TiDi AI hoạt động trên những nền tảng nào?",
    a: "TiDi AI kết nối với Fanpage Facebook, Zalo OA, Website Chat và có thể tích hợp thêm các kênh khác theo nhu cầu. Toàn bộ hội thoại từ các kênh được đồng bộ về một hệ thống quản lý duy nhất.",
  },
  {
    q: "AI có thay thế hoàn toàn nhân viên tư vấn không?",
    a: "Không. TiDi AI xử lý các câu hỏi lặp lại, thu thập thông tin và chấm điểm lead để đội ngũ của bạn tập trung vào những khách hàng có khả năng chuyển đổi cao nhất. Với các tình huống phức tạp, hệ thống sẽ chuyển tiếp cho nhân viên xử lý.",
  },
  {
    q: "Thời gian triển khai mất bao lâu?",
    a: "Tùy gói dịch vụ và mức độ tùy chỉnh kịch bản, thời gian triển khai thường từ 5–14 ngày làm việc, bao gồm huấn luyện AI theo ngành và kết nối các kênh của doanh nghiệp.",
  },
  {
    q: "Dữ liệu khách hàng có được bảo mật không?",
    a: "Dữ liệu hội thoại và thông tin khách hàng được lưu trữ riêng biệt cho từng doanh nghiệp, có phân quyền truy cập rõ ràng và không chia sẻ cho bên thứ ba ngoài phạm vi vận hành dịch vụ.",
  },
  {
    q: "Doanh nghiệp nhỏ, chưa có quy trình CSKH rõ ràng có dùng được không?",
    a: "Có. Đội ngũ TiDi AI sẽ cùng bạn xây dựng kịch bản tư vấn, quy trình follow-up và luồng đặt lịch phù hợp với thực tế vận hành hiện tại, không yêu cầu bạn phải có sẵn quy trình chuẩn hóa.",
  },
  {
    q: "Tôi có thể dùng thử trước khi ký hợp đồng không?",
    a: "Có. Bạn có thể đặt lịch demo miễn phí để đội ngũ TiDi AI trình bày trực tiếp trên kịch bản mô phỏng ngành của bạn trước khi quyết định triển khai.",
  },
];

export const useCases = [
  {
    industry: "Spa & Chăm sóc da",
    problem:
      "Khách nhắn tin hỏi giá, hỏi liệu trình ngoài giờ làm việc nhưng không có ai phản hồi kịp, dẫn đến khách chuyển sang spa khác.",
    solution:
      "AI tư vấn liệu trình theo nhu cầu da, báo giá, giữ chỗ khung giờ trống và tự động nhắc lịch trước buổi hẹn.",
    metric: "Phản hồi khách 24/7",
  },
  {
    industry: "Thẩm mỹ viện",
    problem:
      "Lượng tin nhắn hỏi dịch vụ lớn nhưng đội ngũ tư vấn không đủ để phân loại khách tiềm năng và khách chỉ hỏi giá.",
    solution:
      "Lead Scoring giúp phân loại khách theo mức độ sẵn sàng, ưu tiên chuyển những lead có ngân sách và nhu cầu rõ ràng cho tư vấn viên.",
    metric: "Ưu tiên lead chất lượng",
  },
  {
    industry: "Nha khoa",
    problem:
      "Khách đặt lịch qua tin nhắn nhưng dễ quên, không đến đúng hẹn hoặc không có ai nhắc lịch trước ngày khám.",
    solution:
      "Booking Automation giữ lịch tự động, gửi nhắc hẹn qua Zalo/SMS và follow-up với khách chưa xác nhận lịch.",
    metric: "Giảm khách bỏ lịch hẹn",
  },
  {
    industry: "Phòng khám & dịch vụ y tế",
    problem:
      "Câu hỏi lặp lại về triệu chứng, chi phí khám chiếm phần lớn thời gian của lễ tân, làm chậm các ca cần hỗ trợ gấp.",
    solution:
      "AI Chatbot trả lời câu hỏi thường gặp, thu thập thông tin sơ bộ và chuyển các trường hợp cần ưu tiên cho nhân sự trực tiếp xử lý.",
    metric: "Giảm tải cho lễ tân",
  },
];

export const problems = [
  {
    title: "Bỏ lỡ khách hàng ngoài giờ làm việc",
    desc: "Khách nhắn tin buổi tối, cuối tuần nhưng không ai phản hồi kịp thời — cơ hội chuyển đổi mất đi trước khi nhân viên kịp thấy tin nhắn.",
  },
  {
    title: "Đội ngũ tư vấn quá tải với câu hỏi lặp lại",
    desc: "Phần lớn thời gian bị chiếm bởi các câu hỏi về giá, dịch vụ, lịch làm việc — thay vì tập trung chốt những khách hàng thực sự tiềm năng.",
  },
  {
    title: "Không biết lead nào đáng ưu tiên",
    desc: "Lead đến từ nhiều kênh nhưng không được phân loại, khiến đội sales mất thời gian với khách chưa sẵn sàng mua trong khi khách tốt bị bỏ quên.",
  },
  {
    title: "Follow-up không nhất quán, dễ rơi rớt khách",
    desc: "Việc nhắc lại, chăm sóc khách sau lần nhắn tin đầu tiên phụ thuộc hoàn toàn vào trí nhớ và thời gian rảnh của nhân viên.",
  },
  {
    title: "Dữ liệu khách hàng nằm rải rác",
    desc: "Thông tin lead nằm ở Facebook, Zalo, Excel, sổ tay riêng lẻ — không có một nơi duy nhất để theo dõi toàn bộ hành trình khách hàng.",
  },
];

export const benefits = [
  { stat: "24/7", label: "Luôn sẵn sàng tư vấn", desc: "AI phản hồi khách hàng mọi lúc, kể cả ngoài giờ làm việc và ngày nghỉ." },
  { stat: "100%", label: "Lead được ghi nhận", desc: "Không còn tin nhắn bị bỏ sót — mọi hội thoại đều được lưu và phân loại." },
  { stat: "1 nơi", label: "Quản lý tập trung", desc: "Toàn bộ hội thoại, lead và lịch hẹn từ nhiều kênh hợp nhất trên một dashboard." },
  { stat: "Tự động", label: "Follow-up đúng lúc", desc: "Hệ thống tự nhắc lại khách theo kịch bản, không phụ thuộc trí nhớ nhân viên." },
];
