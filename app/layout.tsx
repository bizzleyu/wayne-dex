import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/Provider";

export const metadata: Metadata = {
  title: "CINA 交易所 - 智能合约交易平台",
  description: "智能合约交易平台，支持杠杆交易、仓位管理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="w-full h-full min-h-screen relative font-sans antialiased flex flex-col items-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
