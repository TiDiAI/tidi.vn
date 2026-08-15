"use client";

import { useMemo, useState } from "react";

function formatVND(n: number) {
  return Math.round(n).toLocaleString("vi-VN");
}

export default function ROICalculator() {
  const [messages, setMessages] = useState(600);
  const [missedRate, setMissedRate] = useState(30);
  const [closeRate, setCloseRate] = useState(15);
  const [avgValue, setAvgValue] = useState(800000);

  const result = useMemo(() => {
    const missedLeads = (messages * missedRate) / 100;
    const potentialCustomers = (missedLeads * closeRate) / 100;
    const potentialValue = potentialCustomers * avgValue;
    return { missedLeads, potentialCustomers, potentialValue };
  }, [messages, missedRate, closeRate, avgValue]);

  return (
    <section className="py-24 sm:py-28 border-t border-line bg-paper-dim/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">14 · ROI Calculator</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Ước tính giá trị lead bạn đang bỏ lỡ mỗi tháng.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Nhập số liệu thực tế của doanh nghiệp để xem ước tính tham khảo — không phải cam kết doanh thu.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-soft space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-ink">Số khách nhắn tin mỗi tháng</label>
                <span className="font-mono text-sm text-ai-blue">{messages}</span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={10}
                value={messages}
                onChange={(e) => setMessages(Number(e.target.value))}
                className="w-full accent-[#2563EB]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-ink">Tỷ lệ khách bị phản hồi chậm / bỏ lỡ</label>
                <span className="font-mono text-sm text-ai-blue">{missedRate}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                step={1}
                value={missedRate}
                onChange={(e) => setMissedRate(Number(e.target.value))}
                className="w-full accent-[#2563EB]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-ink">Tỷ lệ chốt đơn trung bình hiện tại</label>
                <span className="font-mono text-sm text-ai-blue">{closeRate}%</span>
              </div>
              <input
                type="range"
                min={1}
                max={60}
                step={1}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-[#2563EB]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-ink block mb-2">Giá trị trung bình 1 khách hàng (VNĐ)</label>
              <input
                type="number"
                min={0}
                step={50000}
                value={avgValue}
                onChange={(e) => setAvgValue(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-line px-4 py-3 text-sm font-mono focus:border-ai-blue outline-none"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-ink text-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-mono uppercase text-white/45">Lead có nguy cơ bị bỏ lỡ / tháng</p>
                <p className="mt-1 font-display font-semibold text-3xl">{formatVND(result.missedLeads)} lead</p>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase text-white/45">Khách hàng tiềm năng tương ứng</p>
                <p className="mt-1 font-display font-semibold text-3xl">{formatVND(result.potentialCustomers)} khách</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[11px] font-mono uppercase text-ai-blue-light">Giá trị ước tính có thể giữ lại / tháng</p>
                <p className="mt-1 font-display font-semibold text-4xl text-gradient">
                  {formatVND(result.potentialValue)}đ
                </p>
              </div>
            </div>
            <p className="mt-8 text-[11.5px] text-white/40 leading-relaxed">
              * Đây là số liệu ước tính dựa trên thông tin bạn tự nhập, chỉ mang tính chất tham khảo để hình dung quy mô
              cơ hội — không phải cam kết doanh thu hay kết quả thực tế từ TiDi AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
