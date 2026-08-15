"use client";

import { useState, FormEvent } from "react";

const industries = ["Spa", "Thẩm mỹ viện", "Nha khoa", "Phòng khám", "Shop online", "Doanh nghiệp dịch vụ khác"];

// Dán URL Web App lấy được sau khi Deploy Google Apps Script (bước 5) vào đây.
// Ví dụ: "https://script.google.com/macros/s/AKfycb.../exec"
const GOOGLE_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbxa6nQlb3l_rarFtLqkylOQHtGGi0klMljEAHXH3G__q5FdCQAGlKeEAylv6luEFkZiYw/exec";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!GOOGLE_SHEET_ENDPOINT) {
      console.warn(
        "Chưa cấu hình GOOGLE_SHEET_ENDPOINT trong DemoForm.tsx — dữ liệu form sẽ không được lưu."
      );
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      business: formData.get("business"),
      industry: formData.get("industry"),
      note: formData.get("note"),
    };

    setStatus("submitting");

    try {
      if (GOOGLE_SHEET_ENDPOINT) {
        await fetch(GOOGLE_SHEET_ENDPOINT, {
          method: "POST",
          mode: "no-cors", // Apps Script Web App không trả CORS header, dùng no-cors để gửi thành công
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(payload),
        });
      }
      setStatus("done");
    } catch (err) {
      console.error("Gửi form thất bại:", err);
      setStatus("error");
    }
  }

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-soft">
        <div className="mx-auto h-12 w-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xl">!</div>
        <h3 className="mt-4 font-display font-semibold text-xl text-ink">Gửi yêu cầu chưa thành công</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Vui lòng thử lại, hoặc liên hệ trực tiếp qua hotline / Zalo bên dưới.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-ai-blue hover:underline"
        >
          Thử lại
        </button>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-soft">
        <div className="mx-auto h-12 w-12 rounded-full bg-signal/10 text-signal flex items-center justify-center text-xl">✓</div>
        <h3 className="mt-4 font-display font-semibold text-xl text-ink">Đã nhận được yêu cầu của bạn</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Đội ngũ TiDi AI sẽ liên hệ trong vòng 24 giờ làm việc để sắp xếp lịch demo phù hợp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-soft space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Họ và tên
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Nguyễn Văn A"
            className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-ai-blue outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
            Số điện thoại
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="09xx xxx xxx"
            className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-ai-blue outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-ink mb-1.5">
          Tên doanh nghiệp
        </label>
        <input
          id="business"
          name="business"
          required
          placeholder="Tên spa / thẩm mỹ viện / phòng khám..."
          className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-ai-blue outline-none"
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-ink mb-1.5">
          Lĩnh vực hoạt động
        </label>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink-soft focus:border-ai-blue outline-none bg-white"
        >
          <option value="" disabled>
            Chọn lĩnh vực
          </option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="note" className="block text-sm font-medium text-ink mb-1.5">
          Nhu cầu cụ thể (không bắt buộc)
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          placeholder="Ví dụ: đang dùng kênh nào để tư vấn khách, khó khăn hiện tại là gì..."
          className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-ai-blue outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-ink text-white font-semibold py-3.5 hover:bg-ai-blue transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Đang gửi..." : "Đặt lịch Demo miễn phí"}
      </button>
      <p className="text-[11.5px] text-ink-soft/60 text-center">
        Bằng việc gửi form, bạn đồng ý để TiDi AI liên hệ tư vấn qua điện thoại hoặc Zalo.
      </p>
    </form>
  );
}
