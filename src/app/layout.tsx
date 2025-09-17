import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../index.css";
import "../styles/about-doctor.css";
import ClientRoot from "@/components/ui/client-root";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Доктор Дрожжина Карина Тагировна - врач-косметолог в Москве и Орехово-Зуево",
  description:
    "Врач-косметолог с 10+ летним опытом. Инъекционные методики, аппаратная косметология, уходовые процедуры. Запись на консультацию: +7 963 640 4686",
  icons: {
    icon: [
      { url: "/icons/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/180x180.png", sizes: "180x180" },
      { url: "/icons/120x120.png", sizes: "120x120" },
    ],
    shortcut: ["/icons/32x32.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=490, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}

