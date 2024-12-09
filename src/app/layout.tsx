import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "최성재 | 프론트엔드 엔지니어",
  description: "프론트엔드 엔지니어 최성재의 포트폴리오 웹",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

/*
볼드 컬러 #6e6e73
텍스트 컬러 #1d1d1f
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} font-light text-[#1d1d1f] bg-[#e9e8df]`}
      >
        {children}
      </body>
    </html>
  );
}
