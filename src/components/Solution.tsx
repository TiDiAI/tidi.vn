const steps = [
  {
    label: "Tiếp nhận",
    title: "AI trả lời ngay khi khách nhắn tin",
    desc: "Không phân biệt kênh, không phân biệt giờ giấc — AI tiếp nhận và tư vấn ngay lập tức.",
  },
  {
    label: "Thu thập",
    title: "Ghi nhận thông tin & nhu cầu khách hàng",
    desc: "Tên, nhu cầu, ngân sách, thời gian mong muốn được hệ thống hóa thành lead có cấu trúc.",
  },
  {
    label: "Chấm điểm",
    title: "Phân loại lead theo mức độ tiềm năng",
    desc: "Lead Scoring giúp đội sales biết nên ưu tiên liên hệ ai trước.",
  },
  {
    label: "Chăm sóc",
    title: "Follow-up tự động đến khi khách sẵn sàng",
    desc: "Khách chưa chốt sẽ được nhắc lại đúng thời điểm, đúng kịch bản.",
  },
  {
    label: "Chuyển đổi",
    title: "Đặt lịch hoặc chuyển cho nhân viên xử lý",
    desc: "Khi khách đã sẵn sàng, hệ thống giữ lịch hẹn hoặc bàn giao cho người phù hợp.",
  },
];

export default function Solution() {
  return (
    <section id="giai-phap" className="py-24 sm:py-28 bg-ink-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-mask opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue-light uppercase">Cách TiDi AI giải quyết</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight">
            Một hệ thống AI, thay cho
            <br className="hidden sm:block" /> năm công đoạn thủ công.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            TiDi AI vận hành theo một luồng khép kín — từ tin nhắn đầu tiên đến khi khách hàng
            trở thành cuộc hẹn thực sự trên lịch của bạn.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-px bg-white/10" aria-hidden />
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((s) => (
              <div key={s.label} className="relative">
                <div className="hidden lg:flex h-11 w-11 rounded-full bg-ai-gradient items-center justify-center text-[11px] font-mono font-semibold mb-6 relative z-10">
                  {s.label.slice(0, 2).toUpperCase()}
                </div>
                <p className="lg:hidden text-xs font-mono text-ai-blue-light mb-2 uppercase">{s.label}</p>
                <h3 className="font-display font-semibold text-[15px] leading-snug">{s.title}</h3>
                <p className="mt-2 text-[13px] text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
