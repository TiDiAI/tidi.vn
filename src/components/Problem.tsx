import { problems } from "@/lib/data";

export default function Problem() {
  return (
    <section className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">Thực trạng</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Mỗi tin nhắn không được trả lời kịp thời
            <br className="hidden sm:block" /> là một khách hàng đang rời đi.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Đây là những vấn đề lặp lại ở hầu hết doanh nghiệp dịch vụ tại Việt Nam —
            dù đội ngũ đã cố gắng hết sức.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {problems.map((p, i) => (
            <div key={p.title} className="bg-white p-6 flex flex-col gap-4 min-h-[220px]">
              <span className="font-mono text-xs text-ink-soft/50">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display font-semibold text-[15px] text-ink leading-snug">{p.title}</h3>
                <p className="mt-2 text-[13px] text-ink-soft leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
