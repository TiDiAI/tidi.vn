import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">12 · Lợi ích</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Những gì đội ngũ bạn nhận được ngay từ tuần đầu.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.label} className="rounded-2xl border border-line p-6 hover:border-ai-blue/40 hover:shadow-soft transition-all">
              <p className="font-display font-semibold text-4xl text-gradient">{b.stat}</p>
              <h3 className="mt-4 text-[15px] font-semibold text-ink">{b.label}</h3>
              <p className="mt-2 text-[13px] text-ink-soft leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
