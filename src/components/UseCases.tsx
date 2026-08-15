import { useCases } from "@/lib/data";

export default function UseCases() {
  return (
    <section id="use-case" className="py-24 sm:py-28 border-t border-line bg-paper-dim/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">11 · Use case theo ngành</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Sinh ra cho nhóm ngành dịch vụ tại Việt Nam.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {useCases.map((u) => (
            <div key={u.industry} className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-ink">{u.industry}</h3>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-ai-blue/10 text-ai-blue">
                  {u.metric}
                </span>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[11px] font-mono uppercase text-ink-soft/50 mb-1.5">Vấn đề thường gặp</p>
                  <p className="text-[14px] text-ink-soft leading-relaxed">{u.problem}</p>
                </div>
                <div className="pt-4 border-t border-line">
                  <p className="text-[11px] font-mono uppercase text-ai-blue mb-1.5">TiDi AI hỗ trợ</p>
                  <p className="text-[14px] text-ink leading-relaxed">{u.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
