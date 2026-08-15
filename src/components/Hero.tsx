import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-mask [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
            AI Automation cho Sales &amp; CSKH · Made in Việt Nam
          </div>

          <h1 className="mt-6 font-display font-semibold text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] tracking-tight text-ink">
            Biến <span className="text-gradient">tin nhắn</span>
            <br />
            thành khách hàng.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
            TiDi AI tự động tư vấn, thu thập lead, follow-up và hỗ trợ đặt lịch 24/7 —
            giúp doanh nghiệp không bỏ lỡ khách hàng tiềm năng.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#dat-lich-demo"
              className="inline-flex items-center justify-center rounded-full bg-ink text-white font-semibold px-7 py-3.5 hover:bg-ai-blue transition-colors shadow-soft"
            >
              Đặt lịch miễn phí
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white text-ink font-semibold px-7 py-3.5 hover:border-ai-blue hover:text-ai-blue transition-colors"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white text-[9px]">▶</span>
              Xem TiDi AI hoạt động
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-ink-soft/80">
            <span>Đang phục vụ nhóm ngành:</span>
            <span className="font-mono tracking-wide">SPA</span>
            <span className="font-mono tracking-wide">THẨM MỸ VIỆN</span>
            <span className="font-mono tracking-wide">NHA KHOA</span>
            <span className="font-mono tracking-wide">PHÒNG KHÁM</span>
            <span className="font-mono tracking-wide">SHOP ONLINE</span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
