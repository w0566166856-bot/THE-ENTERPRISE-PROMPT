import type { Metadata } from "next";
import { Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import "./globals.css";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-kufi",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "The Enterprise Prompt — مكتبة الأوامر البرمجية للشركات",
  description:
    "منصة اشتراك في أوامر برمجية احترافية موجهة لحلول الأعمال: التسويق، القانون، وإدارة الأعمال.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={arSA}>
      <html lang="ar" dir="rtl">
        <body
          className={`${kufi.variable} ${plexArabic.variable} ${plexMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
