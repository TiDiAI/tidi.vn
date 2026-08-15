"use client";

import { useEffect, useState } from "react";

function useCountUp(target: number, durationMs = 1400, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value.toFixed(decimals);
}

const conversation = [
  { from: "khach", text: "Cho mình hỏi giá liệu trình trị mụn ạ?" },
  { from: "ai", text: "Dạ, bên em có 3 liệu trình phù hợp với da mụn viêm..." },
  { from: "khach", text: "Cuối tuần này còn lịch trống không?" },
  { from: "ai", text: "Dạ còn 14h & 16h Thứ Bảy, mình muốn giữ khung nào ạ?" },
];

export default function DashboardMockup() {
  const conversations = useCountUp(1284);
  const leads = useCountUp(312);
  const score = useCountUp(86);
  const conv = useCountUp(38.4, 1600, 1);
  const [visibleMsg, setVisibleMsg] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleMsg((v) => (v >= conversation.length ? 1 : v + 1));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:mx-0">
      {/* ambient glow */}
      <div className="absolute -inset-6 bg-ai-gradient opacity-20 blur-3xl rounded-[40px]" aria-hidden />

      <div className="relative rounded-2xl border border-line-dark bg-ink shadow-glow overflow-hidden animate-floatY">
        {/* window chrome */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-line-dark bg-white/[0.03]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]/70" />
          <span className="ml-3 text-[11px] font-mono text-white/40">tidiai.vn/dashboard</span>
        </div>

        <div className="p-4 sm:p-5 grid grid-cols-5 gap-3">
          {/* left: live conversation */}
          <div className="col-span-3 rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-white/50 tracking-wide">AI CONVERSATIONS</span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" /> LIVE
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-2 mini-scroll overflow-hidden">
              {conversation.slice(0, visibleMsg).map((m, i) => (
                <div
                  key={i}
                  className={`text-[12px] leading-snug rounded-lg px-3 py-2 max-w-[88%] ${
                    m.from === "ai"
                      ? "bg-ai-gradient text-white self-start rounded-tl-sm"
                      : "bg-white/10 text-white/85 self-end rounded-tr-sm"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/45">
              <span>Follow-up: bước 2/3</span>
              <span className="text-signal">Lead score 86</span>
            </div>
          </div>

          {/* right: stat stack */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5">
              <p className="text-[10px] font-mono text-white/45 mb-1">TỔNG HỘI THOẠI</p>
              <p className="font-mono text-2xl font-semibold text-white">{conversations}</p>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5">
              <p className="text-[10px] font-mono text-white/45 mb-1">LEAD MỚI</p>
              <p className="font-mono text-2xl font-semibold text-white">{leads}</p>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5">
              <p className="text-[10px] font-mono text-white/45 mb-1">ĐIỂM LEAD TB</p>
              <p className="font-mono text-2xl font-semibold text-ai-blue-light">{score}</p>
            </div>
            <div className="rounded-xl bg-ai-gradient p-3.5">
              <p className="text-[10px] font-mono text-white/70 mb-1">TỶ LỆ CHUYỂN ĐỔI</p>
              <p className="font-mono text-2xl font-semibold text-white">{conv}%</p>
            </div>
          </div>

          {/* bottom row: appointments */}
          <div className="col-span-5 rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono text-white/45 mb-1">LỊCH HẸN HÔM NAY</p>
              <p className="text-[13px] text-white/80 font-medium">14:00 Dương Quang Trường — Trị mụn · 16:00 Trần Quang Thạch — Tư vấn niềng răng</p>
            </div>
            <span className="shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full bg-signal/15 text-signal border border-signal/30">
              Đã xác nhận
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
