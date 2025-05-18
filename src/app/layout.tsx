import type { Metadata } from "next";
import { gapyeongHanseokbong } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "운세박사",
  description:
    "세계 1위 인공지능 사주팔자 운세박사에서 AI 사주, 해몽, 운세, 작명, 궁합을 봐보세요! 인공지능으로 정확한 운세를 점쳐보세요. 오늘의 운세, 연애운, 애정운, 금전운, 연애상담, 고민상담을 받아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gapyeongHanseokbong.className}`}>{children}</body>
    </html>
  );
}
