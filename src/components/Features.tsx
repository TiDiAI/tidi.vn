function ChatbotVisual() {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft p-5 h-full flex flex-col justify-center gap-2.5">
      <div className="self-end max-w-[80%] rounded-xl rounded-tr-sm bg-paper-dim px-3.5 py-2.5 text-[13px] text-ink-soft">
        Bên mình có gói niềng răng trả góp không ạ?
      </div>
      <div className="self-start max-w-[85%] rounded-xl rounded-tl-sm bg-ai-gradient px-3.5 py-2.5 text-[13px] text-white">
        Dạ có ạ, bên em hỗ trợ trả góp 0% từ 6–12 tháng. Anh/chị muốn niềng mắc cài hay khay trong suốt ạ?
      </div>
      <div className="self-end max-w-[80%] rounded-xl rounded-tr-sm bg-paper-dim px-3.5 py-2.5 text-[13px] text-ink-soft">
        Khay trong suốt ạ
      </div>
      <div className="self-start flex items-center gap-1.5 rounded-xl rounded-tl-sm bg-ai-gradient/10 px-3.5 py-2.5 w-fit">
        <span className="h-1.5 w-1.5 rounded-full bg-ai-blue animate-pulseDot" />
        <span className="h-1.5 w-1.5 rounded-full bg-ai-blue animate-pulseDot [animation-delay:0.2s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-ai-blue animate-pulseDot [animation-delay:0.4s]" />
      </div>
    </div>
  );
}

function LeadCaptureVisual() {
  const rows = [
    ["Họ tên", "Trần Quang Thạch"],
    ["Nhu cầu", "Trị mụn viêm"],
    ["Ngân sách", "3 – 5 triệu"],
    ["Kênh vào", "Fanpage"],
  ];
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft p-5 h-full flex flex-col justify-center">
      <p className="text-[11px] font-mono text-ink-soft/60 mb-3 uppercase tracking-wide">Lead tự động tạo</p>
      <div className="divide-y divide-line rounded-xl border border-line overflow-hidden">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between px-4 py-3 text-[13px]">
            <span className="text-ink-soft/60">{k}</span>
            <span className="font-medium text-ink">{v}</span>
          </div>
        ))}
      </div>
      <span className="mt-3 self-start text-[11px] font-mono px-2.5 py-1 rounded-full bg-signal/10 text-signal">
        + Đã lưu vào CRM
      </span>
    </div>
  );
}

function LeadScoringVisual() {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft p-5 h-full flex flex-col justify-center gap-3">
      {[
        { name: "Trần Văn B", score: 92, tag: "Ưu tiên cao" },
        { name: "Lê Thị C", score: 64, tag: "Cân nhắc" },
        { name: "Phạm D", score: 21, tag: "Chưa sẵn sàng" },
      ].map((l) => (
        <div key={l.name} className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-[13px] font-medium text-ink truncate">{l.name}</span>
          <div className="flex-1 h-2 rounded-full bg-paper-dim overflow-hidden">
            <div
              className={`h-full rounded-full ${l.score > 80 ? "bg-signal" : l.score > 40 ? "bg-ai-blue" : "bg-ink-soft/30"}`}
              style={{ width: `${l.score}%` }}
            />
          </div>
          <span className="w-8 shrink-0 text-right font-mono text-xs text-ink-soft">{l.score}</span>
        </div>
      ))}
    </div>
  );
}

function FollowupVisual() {
  const steps = ["Tin nhắn đầu tiên", "Nhắc lại sau 24h", "Ưu đãi giữ chân", "Chuyển tư vấn viên"];
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft p-5 h-full flex flex-col justify-center">
      <div className="space-y-0">
        {steps.map((s, i) => (
          <div key={s} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`h-2.5 w-2.5 rounded-full ${i <= 1 ? "bg-ai-blue" : "bg-line"}`} />
              {i < steps.length - 1 && <span className="w-px flex-1 bg-line" />}
            </div>
            <div className="pb-6">
              <p className="text-[13px] font-medium text-ink">{s}</p>
              <p className="text-[11px] font-mono text-ink-soft/50">{i <= 1 ? "Đã gửi" : "Đang chờ"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingVisual() {
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft p-5 h-full flex flex-col justify-center">
      <div className="grid grid-cols-7 gap-1.5 text-center mb-3">
        {days.map((d) => (
          <span key={d} className="text-[10px] font-mono text-ink-soft/50">{d}</span>
        ))}
        {[3, 5, 9, 12, 14, 20, 22].map((n, i) => (
          <span
            key={n}
            className={`text-[12px] py-1.5 rounded-lg ${
              i === 5 ? "bg-ai-gradient text-white font-semibold" : "text-ink-soft"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
      <div className="rounded-xl bg-paper-dim px-3.5 py-2.5 flex items-center justify-between">
        <span className="text-[13px] font-medium text-ink">Thứ Bảy, 14:00</span>
        <span className="text-[11px] font-mono px-2 py-1 rounded-full bg-signal/10 text-signal">Đã giữ chỗ</span>
      </div>
    </div>
  );
}

function CRMVisual() {
  const cols = [
    { name: "Lead mới", count: 18, color: "bg-ink-soft/20" },
    { name: "Đang tư vấn", count: 9, color: "bg-ai-blue" },
    { name: "Đã đặt lịch", count: 6, color: "bg-signal" },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft p-5 h-full flex flex-col justify-center">
      <div className="grid grid-cols-3 gap-3">
        {cols.map((c) => (
          <div key={c.name} className="rounded-xl bg-paper-dim p-3">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className={`h-1.5 w-1.5 rounded-full ${c.color}`} />
              <span className="text-[10px] font-mono text-ink-soft/60 truncate">{c.name}</span>
            </div>
            <p className="font-mono text-xl font-semibold text-ink">{c.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    id: "chatbot",
    eyebrow: "03 · AI Chatbot",
    title: "Tư vấn khách hàng như một nhân viên giỏi nhất",
    desc: "AI Chatbot được huấn luyện theo kịch bản, sản phẩm và tông giọng riêng của doanh nghiệp bạn — trả lời tự nhiên, chính xác trên mọi kênh nhắn tin.",
    points: ["Hiểu ngữ cảnh hội thoại, không trả lời máy móc", "Tùy chỉnh kịch bản theo từng ngành dịch vụ", "Chuyển tiếp cho nhân viên khi gặp tình huống phức tạp"],
    Visual: ChatbotVisual,
  },
  {
    id: "lead-capture",
    eyebrow: "04 · Lead Capture",
    title: "Không để lọt bất kỳ khách hàng tiềm năng nào",
    desc: "Mọi hội thoại đều được AI trích xuất thông tin quan trọng và lưu thành lead có cấu trúc — sẵn sàng để đội sales liên hệ ngay.",
    points: ["Tự động nhận diện tên, nhu cầu, ngân sách", "Gắn nguồn lead theo từng kênh nhắn tin", "Đồng bộ tức thời vào hệ thống quản lý"],
    Visual: LeadCaptureVisual,
  },
  {
    id: "lead-scoring",
    eyebrow: "05 · Lead Scoring",
    title: "Biết chính xác nên liên hệ ai trước",
    desc: "Mỗi lead được chấm điểm dựa trên hành vi, mức độ quan tâm và khả năng chi trả — giúp đội sales dồn lực vào đúng khách hàng.",
    points: ["Chấm điểm theo hành vi hội thoại thực tế", "Phân loại nóng / ấm / lạnh tự động", "Cảnh báo khi có lead điểm cao mới phát sinh"],
    Visual: LeadScoringVisual,
  },
  {
    id: "follow-up",
    eyebrow: "06 · AI Follow-up",
    title: "Chăm sóc khách đến cùng, không bỏ cuộc giữa chừng",
    desc: "Khách chưa chốt ngay không có nghĩa là đã mất. TiDi AI tự động nhắc lại theo kịch bản và thời điểm phù hợp với từng khách hàng.",
    points: ["Kịch bản follow-up đa bước, đa kênh", "Cá nhân hóa nội dung theo nhu cầu đã thu thập", "Dừng lại đúng lúc để không gây phiền khách"],
    Visual: FollowupVisual,
  },
  {
    id: "booking",
    eyebrow: "07 · Booking Automation",
    title: "Đặt lịch hẹn ngay trong cuộc trò chuyện",
    desc: "Khách hàng có thể xem lịch trống và giữ chỗ trực tiếp qua tin nhắn — không cần gọi điện, không cần chờ xác nhận thủ công.",
    points: ["Đồng bộ lịch trống theo thời gian thực", "Tự động gửi nhắc hẹn trước buổi hẹn", "Follow-up khách chưa xác nhận lịch"],
    Visual: BookingVisual,
  },
  {
    id: "crm",
    eyebrow: "08 · CRM",
    title: "Một nơi duy nhất cho toàn bộ hành trình khách hàng",
    desc: "Từ lead mới đến khách đã đặt lịch, toàn bộ pipeline được hiển thị trực quan — đội ngũ dễ dàng theo dõi và bàn giao công việc.",
    points: ["Quản lý pipeline theo giai đoạn rõ ràng", "Lịch sử hội thoại lưu trữ đầy đủ theo từng lead", "Phân quyền theo từng thành viên trong đội"],
    Visual: CRMVisual,
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">Tính năng cốt lõi</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Sáu module, một nền tảng AI Automation.
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-28">
          {features.map((f, i) => (
            <div
              key={f.id}
              id={f.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-xs font-mono font-semibold text-ai-blue uppercase tracking-wide">{f.eyebrow}</p>
                <h3 className="mt-3 font-display font-semibold text-2xl sm:text-[1.75rem] tracking-tight text-ink leading-snug">
                  {f.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{f.desc}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ai-blue shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-h-[280px]">
                <f.Visual />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
