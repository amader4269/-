import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LineButton from "@/components/LineButton";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "存仁社區發展協會",
  description: "宜蘭縣蘇澳鎮存仁社區發展協會官方網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${notoSansTC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-lg">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <LineButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
