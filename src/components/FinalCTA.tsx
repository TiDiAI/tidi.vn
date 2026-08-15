import DemoForm from "./DemoForm";

export default function FinalCTA() {
  return (
    <section id="dat-lich-demo" className="py-24 sm:py-28 relative overflow-hidden bg-ink-gradient text-white">
      <div className="absolute inset-0 grid-mask opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue-light uppercase">16 · Bắt đầu ngay</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-[2.6rem] leading-tight tracking-tight">
            Đừng để tin nhắn tiếp theo
            <br className="hidden sm:block" /> trở thành khách hàng đã rời đi.
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed max-w-md">
            Đặt lịch demo 30 phút — đội ngũ TiDi AI sẽ trình bày trực tiếp trên kịch bản thực tế
            của ngành bạn, không qua trung gian.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
            {[
              ["30", "phút demo"],
              ["0đ", "chi phí tư vấn"],
              ["24h", "phản hồi"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display font-semibold text-2xl">{num}</p>
                <p className="text-[11px] text-white/45 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="[&_input]:bg-white/[0.04] [&_input]:border-white/10 [&_input]:text-white [&_select]:bg-ink [&_select]:border-white/10 [&_select]:text-white [&_textarea]:bg-white/[0.04] [&_textarea]:border-white/10 [&_textarea]:text-white [&_label]:text-white/70 [&_form]:bg-white/[0.03] [&_form]:border-white/10 [&_p]:text-white/40 [&_button]:bg-ai-gradient [&_button:hover]:opacity-90">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
