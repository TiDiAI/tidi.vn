"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#giai-phap", label: "Giải pháp" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#use-case", label: "Use case" },
  { href: "#bang-gia", label: "Bảng giá" },
  { href: "#faq", label: "Câu hỏi" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line shadow-sm" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          <span className="h-7 w-7 rounded-lg bg-ai-gradient flex items-center justify-center text-white text-[13px] font-bold">
            T
          </span>
          TiDi AI
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ai-blue transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors">
            Xem
          </a>
          <a
            href="#dat-lich-demo"
            className="rounded-full bg-ink text-white text-sm font-semibold px-5 py-2.5 hover:bg-ai-blue transition-colors shadow-soft"
          >
            Đặt lịch miễn phí
          </a>
        </div>

        <button
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-line"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`h-[1.5px] bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-[1.5px] bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 pb-6 pt-2">
          <ul className="flex flex-col divide-y divide-line">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[15px] font-medium text-ink-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#dat-lich-demo"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center rounded-full bg-ink text-white text-sm font-semibold px-5 py-3"
          >
            Đặt lịch miễn phí
          </a>
        </div>
      )}
    </header>
  );
}
