import type { Metadata } from "next";
import { baseUrl } from "../app/sitemap";

export const meta: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Frederik Bode",
    template: "%s | Frederik Bode",
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
