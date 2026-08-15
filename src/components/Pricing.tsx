import { pricingPlans, implementationNote } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="bang-gia" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">13 · Bảng giá</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Chọn gói phù hợp với quy mô vận hành.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Giá đã bao gồm vận hành nền tảng hằng tháng. {implementationNote}
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col ${
                p.highlight
                  ? "bg-ink text-white shadow-glow lg:-translate-y-3"
                  : "bg-white border border-line shadow-soft"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-ai-gradient text-white text-[11px] font-semibold px-3 py-1">
                  Phổ biến nhất
                </span>
              )}
              <p className={`text-xs font-mono font-semibold tracking-wide ${p.highlight ? "text-ai-blue-light" : "text-ai-blue"}`}>
                {p.name}
              </p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display font-semibold text-3xl">{p.price}đ</span>
                <span className={`text-sm ${p.highlight ? "text-white/50" : "text-ink-soft/60"}`}>/tháng</span>
              </div>
              <p className={`mt-3 text-[13px] leading-relaxed ${p.highlight ? "text-white/60" : "text-ink-soft"}`}>
                {p.tagline}
              </p>

              <ul className="mt-7 space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${p.highlight ? "bg-ai-blue-light" : "bg-ai-blue"}`} />
                    <span className={p.highlight ? "text-white/85" : "text-ink-soft"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#dat-lich-demo"
                className={`mt-8 inline-flex items-center justify-center rounded-full font-semibold px-6 py-3 transition-colors ${
                  p.highlight
                    ? "bg-white text-ink hover:bg-ai-blue hover:text-white"
                    : "bg-ink text-white hover:bg-ai-blue"
                }`}
              >
                Đặt lịch miễn phí
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
