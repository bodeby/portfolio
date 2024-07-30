import "./globals.css";

// fonts
import { GeistSans } from "geist/font/sans";

// tracking
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// metadata from config
import { meta } from "@/config/metadata";

// compoonents
import { Side } from "@/components/side";

// re-export metadata from config
export const metadata = meta;

// const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <head>
        <script
          data-domain="frederikbode.com"
          src="https://plausible.io/js/script.js"
          defer
        ></script>
      </head>

      <body className={GeistSans.className}>
        <div className="antialiased bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 shadow-xl block w-full h-2 mb-8 md:mb-0 sticky top-0 z-10 animated-gradient" />

        <main className="flex h-screen space-x-8 justify-between p-8 overflow-hidden">
          <Side />

          <div className="flex-grow overflow-scroll pr-3 xl:w-9/12">
            <section className="">{children}</section>
          </div>
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
