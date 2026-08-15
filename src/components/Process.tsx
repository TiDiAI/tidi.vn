const steps = [
  {
    n: "01",
    title: "Khảo sát & tư vấn giải pháp",
    desc: "Đội ngũ TiDi AI tìm hiểu quy trình tư vấn, chăm sóc khách hàng hiện tại và đề xuất mô hình tự động hóa phù hợp.",
    time: "1–2 ngày",
  },
  {
    n: "02",
    title: "Thiết kế kịch bản theo ngành",
    desc: "Xây dựng kịch bản tư vấn, câu hỏi thu thập thông tin và luồng follow-up dựa trên đặc thù dịch vụ của bạn.",
    time: "2–4 ngày",
  },
  {
    n: "03",
    title: "Kết nối kênh & huấn luyện AI",
    desc: "Tích hợp Fanpage, Zalo OA, Website Chat và huấn luyện AI trên dữ liệu sản phẩm, dịch vụ thực tế.",
    time: "3–5 ngày",
  },
  {
    n: "04",
    title: "Kiểm thử cùng đội ngũ",
    desc: "Chạy thử trên kịch bản thật, điều chỉnh cách trả lời và luồng chuyển tiếp trước khi vận hành chính thức.",
    time: "2–3 ngày",
  },
  {
    n: "05",
    title: "Vận hành & tối ưu liên tục",
    desc: "Theo dõi hiệu quả qua dashboard, tinh chỉnh kịch bản định kỳ để cải thiện tỷ lệ chuyển đổi.",
    time: "Liên tục",
  },
];

export default function Process() {
  return (
    <section id="quy-trinh" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">Quy trình triển khai</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Từ khảo sát đến vận hành, trong vòng 2 tuần.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line lg:left-0 lg:right-0 lg:top-[15px] lg:bottom-auto lg:h-px lg:w-auto" aria-hidden />
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative pl-10 lg:pl-0">
                <div className="absolute left-0 top-0 lg:static lg:mb-6 h-8 w-8 rounded-full bg-ink text-white flex items-center justify-center font-mono text-[11px] font-semibold z-10">
                  {s.n}
                </div>
                <h3 className="font-display font-semibold text-[15px] text-ink leading-snug">{s.title}</h3>
                <p className="mt-2 text-[13px] text-ink-soft leading-relaxed">{s.desc}</p>
                <p className="mt-3 text-[11px] font-mono text-ai-blue">{s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
