import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contador do Enotel",
  description: "ENOTEL TA CHEGANDO",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    title: "Contador do Enotel",
    description: "ENOTEL TA CHEGANDO",
    url: "https://enotel.vercel.app",
    siteName: "Contador do Enotel",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Enotel",
      },
    ],
    locale: "pt_BR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
