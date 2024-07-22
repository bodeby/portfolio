import type { Metadata } from "next";
import "./globals.css";

// fonts
// import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
//import { GeistMono } from "geist/font/mono";

// const inter = Inter({ subsets: ["latin"] });

// sitemap generation script
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Frederik Bode",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 shadow-xl block w-full h-2 mb-8 md:mb-0 sticky top-0 z-10 animated-gradient" />
        {children}
      </body>
    </html>
  );
}
