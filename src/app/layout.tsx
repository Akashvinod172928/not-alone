import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Not Alone — Find Someone to Talk To",
  description: siteConfig.description,
  keywords: ["Not Alone", "Talk to someone", "Chat app", "Human connection", "Conversations"],
  authors: [{ name: "Not Alone Team" }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Not Alone — Find Someone to Talk To",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Not Alone — Find Someone to Talk To",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 min-h-screen antialiased selection:bg-[#FF3B7B]/15 selection:text-[#FF3B7B]">
        {children}
      </body>
    </html>
  );
}
