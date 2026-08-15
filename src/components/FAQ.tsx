"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-xs font-mono font-semibold text-ai-blue uppercase">15 · Câu hỏi thường gặp</p>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Những điều bạn nên biết trước khi bắt đầu.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line border-t border-b border-line">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-[15px] text-ink">{item.q}</span>
                  <span
                    className={`shrink-0 h-6 w-6 rounded-full border border-line flex items-center justify-center text-sm transition-transform ${
                      open ? "rotate-45 border-ai-blue text-ai-blue" : "text-ink-soft"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[14px] text-ink-soft leading-relaxed max-w-2xl">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
