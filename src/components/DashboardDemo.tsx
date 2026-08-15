"use client";

import { useState } from "react";

const tabs = [
  { id: "leads", label: "Leads" },
  { id: "score", label: "Lead Score" },
  { id: "lich", label: "Lịch hẹn" },
  { id: "baocao", label: "Báo cáo" },
];

const leadRows = [
  { name: "Nguyễn Thị Mai", kenh: "Fanpage", nhucau: "Trị mụn viêm", score: 92, trang: "Đã đặt lịch" },
  { name: "Trần Quốc Huy", kenh: "Zalo OA", nhucau: "Niềng răng khay trong", score: 78, trang: "Đang tư vấn" },
  { name: "Lê Ngọc Hà", kenh: "Website", nhucau: "Gói chăm sóc da định kỳ", score: 65, trang: "Đang tư vấn" },
  { name: "Phạm Anh Tuấn", kenh: "Fanpage", nhucau: "Tư vấn giá dịch vụ", score: 24, trang: "Lead mới" },
];

const appointments = [
  { time: "09:00", name: "Đỗ Thu Trang", service: "Khám tổng quát da" },
  { time: "11:30", name: "Vũ Minh Khôi", service: "Tư vấn niềng răng" },
  { time: "14:00", name: "Ngô Bảo Châu", service: "Trị liệu trẻ hóa da" },
  { time: "16:30", name: "Hoàng Yến Nhi", service: "Tái khám định kỳ" },
];

const reportStats = [
  { label: "Hội thoại tuần này", value: "428" },
  { label: "Lead mới", value: "96" },
  { label: "Lịch hẹn đã đặt", value: "41" },
  { label: "Tỷ lệ phản hồi < 1 phút", value: "97%" },
];

function scoreColor(score: number) {
  if (score >= 80) return "bg-signal/10 text-signal";
  if (score >= 50) return "bg-ai-blue/10 text-ai-blue";
  return "bg-ink-soft/10 text-ink-soft";
}

export default function DashboardDemo() {
  const [active, setActive] = useState("leads");

  return (
    <section id="demo" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">10 · Xem TiDi AI hoạt động</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Một dashboard, toàn bộ hoạt động kinh doanh.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Đây là dữ liệu minh họa để bạn hình dung cách TiDi AI hiển thị hội thoại, lead, lịch hẹn
            và báo cáo hiệu quả theo thời gian thực.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-white shadow-soft overflow-hidden">
          <div className="flex items-center gap-1 overflow-x-auto border-b border-line px-3 sm:px-5">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`shrink-0 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  active === t.id ? "border-ai-blue text-ink" : "border-transparent text-ink-soft/60 hover:text-ink-soft"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-6">
            {active === "leads" && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[560px]">
                  <thead>
                    <tr className="text-[11px] font-mono uppercase text-ink-soft/50 border-b border-line">
                      <th className="py-2.5 font-medium">Khách hàng</th>
                      <th className="py-2.5 font-medium">Kênh</th>
                      <th className="py-2.5 font-medium">Nhu cầu</th>
                      <th className="py-2.5 font-medium">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {leadRows.map((r) => (
                      <tr key={r.name}>
                        <td className="py-3 font-medium text-ink">{r.name}</td>
                        <td className="py-3 text-ink-soft">{r.kenh}</td>
                        <td className="py-3 text-ink-soft">{r.nhucau}</td>
                        <td className="py-3">
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-paper-dim text-ink-soft">
                            {r.trang}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {active === "score" && (
              <div className="space-y-4">
                {leadRows
                  .slice()
                  .sort((a, b) => b.score - a.score)
                  .map((r) => (
                    <div key={r.name} className="flex items-center gap-4">
                      <span className="w-40 shrink-0 text-sm font-medium text-ink truncate">{r.name}</span>
                      <div className="flex-1 h-2 rounded-full bg-paper-dim overflow-hidden">
                        <div
                          className={`h-full rounded-full ${r.score >= 80 ? "bg-signal" : r.score >= 50 ? "bg-ai-blue" : "bg-ink-soft/30"}`}
                          style={{ width: `${r.score}%` }}
                        />
                      </div>
                      <span className={`w-14 shrink-0 text-right text-xs font-mono font-semibold px-2 py-1 rounded-full ${scoreColor(r.score)}`}>
                        {r.score}
                      </span>
                    </div>
                  ))}
              </div>
            )}

            {active === "lich" && (
              <div className="grid sm:grid-cols-2 gap-3">
                {appointments.map((a) => (
                  <div key={a.time} className="flex items-center justify-between rounded-xl border border-line px-4 py-3.5">
                    <div>
                      <p className="text-sm font-medium text-ink">{a.name}</p>
                      <p className="text-xs text-ink-soft">{a.service}</p>
                    </div>
                    <span className="font-mono text-sm text-ai-blue">{a.time}</span>
                  </div>
                ))}
              </div>
            )}

            {active === "baocao" && (
              <div className="grid sm:grid-cols-4 gap-4">
                {reportStats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-line p-4">
                    <p className="font-mono text-2xl font-semibold text-ink">{s.value}</p>
                    <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
