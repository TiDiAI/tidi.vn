const columns = [
  {
    title: "Giải pháp",
    links: [
      { label: "AI Chatbot", href: "#chatbot" },
      { label: "Lead Capture", href: "#lead-capture" },
      { label: "Lead Scoring", href: "#lead-scoring" },
      { label: "AI Follow-up", href: "#follow-up" },
      { label: "Booking Automation", href: "#booking" },
      { label: "CRM", href: "#crm" },
    ],
  },
  {
    title: "Ngành áp dụng",
    links: [
      { label: "Spa", href: "#use-case" },
      { label: "Thẩm mỹ viện", href: "#use-case" },
      { label: "Nha khoa", href: "#use-case" },
      { label: "Phòng khám", href: "#use-case" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { label: "Quy trình triển khai", href: "#quy-trinh" },
      { label: "Bảng giá", href: "#bang-gia" },
      { label: "Câu hỏi thường gặp", href: "#faq" },
      { label: "Đặt lịch demo", href: "#dat-lich-demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
              <span className="h-7 w-7 rounded-lg bg-ai-gradient flex items-center justify-center text-white text-[13px] font-bold">
                T
              </span>
              TiDi AI
            </a>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-xs">
              Nền tảng AI Automation cho Sales &amp; CSKH — giúp doanh nghiệp Việt Nam tự động tư vấn,
              thu lead, follow-up và hỗ trợ khách hàng 24/7.
            </p>
            <div className="mt-5 space-y-1.5 text-sm text-ink-soft">
              <p>Email: cs@tidiai.vn</p>
              <p>Hotline: 088.630.7571</p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wide text-ink-soft/50">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-ink-soft hover:text-ai-blue transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-soft/60">© {new Date().getFullYear()} TiDi AI. Đã đăng ký bản quyền.</p>
          <p className="text-xs text-ink-soft/60">Biến tin nhắn thành khách hàng.</p>
        </div>
      </div>
    </footer>
  );
}
