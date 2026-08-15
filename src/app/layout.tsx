import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tidi.ai"),
  title: "TiDi AI — Biến tin nhắn thành khách hàng | AI Automation cho Sales & CSKH",
  description:
    "TiDi AI giúp doanh nghiệp tự động tư vấn, thu thập lead, follow-up và hỗ trợ đặt lịch 24/7 bằng AI — để đội ngũ tập trung vào những khách hàng thực sự có giá trị.",
  keywords: [
    "TiDi AI",
    "AI Automation",
    "AI Sales",
    "AI chăm sóc khách hàng",
    "AI Chatbot Việt Nam",
    "CRM AI",
    "Lead Scoring",
    "Booking Automation",
    "AI cho spa thẩm mỹ nha khoa",
  ],
  openGraph: {
    title: "TiDi AI — Biến tin nhắn thành khách hàng",
    description:
      "Nền tảng AI Automation cho Sales & CSKH: chatbot tư vấn, thu lead, chấm điểm lead, follow-up tự động và đặt lịch 24/7.",
    locale: "vi_VN",
    type: "website",
    siteName: "TiDi AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TiDi AI — Biến tin nhắn thành khách hàng",
    description:
      "TiDi AI tự động tư vấn, thu lead, follow-up và hỗ trợ đặt lịch 24/7 bằng AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-body antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
