import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vogue Cloud — 5GB Free Cloud Storage",
  description:
    "Store, organize, and share your files with Vogue Cloud. Every user gets 5 GB free. Upgrade anytime for more space. No credit card required.",
  keywords: ["cloud storage", "file storage", "free storage", "file sharing", "online storage"],
  authors: [{ name: "Vogue Cloud" }],
  openGraph: {
    title: "Vogue Cloud — 5GB Free Cloud Storage",
    description:
      "Store, organize, and share your files with Vogue Cloud. 5 GB free forever.",
    url: "https://voguecloud.com",
    siteName: "Vogue Cloud",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vogue Cloud — 5GB Free Cloud Storage",
    description: "Store, organize, and share your files. 5 GB free forever.",
  },
  metadataBase: new URL("https://voguecloud.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#fafafa] text-[#171717] antialiased">
        {children}
      </body>
    </html>
  );
}
