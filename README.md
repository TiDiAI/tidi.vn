# TiDi AI — Website (Next.js + TypeScript + Tailwind CSS)

Website SaaS/Agency cho thương hiệu **TiDi AI** — nền tảng AI Automation cho Sales & CSKH.

## Cài đặt

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Cấu trúc dự án

```
src/
  app/
    layout.tsx      # Font, SEO metadata
    page.tsx         # Ghép toàn bộ 17 section
    globals.css       # Design tokens, hiệu ứng nền
  components/
    Nav.tsx                  # Menu điều hướng + mobile menu
    Hero.tsx / DashboardMockup.tsx   # 1. Hero + mockup dashboard AI động
    Problem.tsx               # 1. Vấn đề doanh nghiệp gặp phải... (đánh số theo brief)
    Solution.tsx               # 2. Cách TiDi AI giải quyết
    Features.tsx                # 3–8. Chatbot, Lead Capture, Lead Scoring, Follow-up, Booking, CRM
    Process.tsx                  # 9. Quy trình triển khai
    DashboardDemo.tsx             # 10. Dashboard demo tương tác
    UseCases.tsx                   # 11. Use case theo ngành
    Benefits.tsx                    # 12. Lợi ích
    Pricing.tsx                      # 13. Bảng giá
    ROICalculator.tsx                 # 14. ROI Calculator (ước tính, có disclaimer)
    FAQ.tsx                            # 15. FAQ accordion
    FinalCTA.tsx / DemoForm.tsx         # 16. CTA cuối trang + form đặt lịch demo
    Footer.tsx                           # 17. Footer
  lib/
    data.ts   # Nội dung: bảng giá, FAQ, use case, vấn đề, lợi ích
```

## Ghi chú triển khai thực tế

- Form đặt lịch demo (`DemoForm.tsx`) hiện xử lý phía client (mô phỏng gửi thành công).
  Khi triển khai thật, nối `handleSubmit` tới API nội bộ, CRM, hoặc Google Sheet của bạn.
- Toàn bộ nội dung bằng tiếng Việt, không dùng lorem ipsum, không có testimonial giả,
  không cam kết doanh thu — ROI Calculator chỉ đưa ra ước tính tham khảo dựa trên số liệu người dùng nhập.
- Bảng màu & kiểu chữ được khai báo tập trung tại `tailwind.config.ts`
  (ink `#0F172A`, ai-blue `#2563EB`, ai-violet `#7C3AED`, paper `#F8FAFC`).
- Font: Space Grotesk (display), Inter (body), JetBrains Mono (số liệu/dashboard) — tải qua `next/font/google`.

## Build production

```bash
npm run build
npm run start
```
