import "./globals.css";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import ExperienceCard from "@/components/common/experience-card";
import EducationCard from "@/components/common/education-card";
import { HugginfaceIcon } from "@/components/icons";

// fonts
import { GeistMono } from "geist/font/mono";

// fonts
import { GeistSans } from "geist/font/sans";

// tracking
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// metadata from config
import { meta } from "@/config/metadata";

// compoonents
// import { Side } from "@/components/side";

// re-export metadata from config
export const metadata = meta;

// const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <script
          data-domain="frederikbode.com"
          src="https://plausible.io/js/script.js"
          defer
        ></script>
      </head>

      <body className={GeistSans.className}>
        <div className="antialiased bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 shadow-xl block w-full h-2 mb-8 md:mb-0 fixed top-0 z-10 animated-gradient" />
        <main className="flex flex-row space-x-8 justify-between p-8">
          {/** Left Section */}
          <section className="w-full sm:w-1/3 md:w-1/4 xl:w-3/12">
            <Side />
          </section>

          {/** Right Section */}
          <section className="flex-grow sm:w-2/3 md:w-3/4 xl:w-9/12 pl-8">
            {children}
          </section>
        </main>

        {/** Tracking Script */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const Side = () => {
  return (
    <aside className="flex flex-col space-y-8 grow fixed top-8 w-[inherit]">
      {/* Presentation Header */}
      <Link href="/">
        <section className="flex shrink-0 items-center space-x-4">
          <div className="max-w-[75px] max-h-[75px] overflow-hidden rounded-full">
            <Image
              src="/roboto.png"
              alt="Headshot of Frederik Bode"
              width={534}
              height={534}
              className="object-cover scale-100 bg-center"
              priority={true}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXA8AAesBNGQg4IAAAAAASUVORK5CYII="
            />
          </div>

          <div className="flex flex-col -space-y-1 text-md font-light">
            <h1 className="font-semibold text-primary dark:text-dark-primary">
              <span>Frederik Bode</span>
              {/* <span className="text-blue-500 ml-1">&#123;bodeby&#125;</span> */}
            </h1>
            <p className="break-words leading-snug subpixel-antialiased text-sm font-normal">
              Software Engineering Student at Aalborg University CPH
            </p>
          </div>
        </section>
      </Link>

      {/*About Section */}
      <section className="text-primary dark:text-dark-primary">
        <h2 className="text-md font-semibold mb-2">About</h2>
        <p className="text-sm font-normal leading-snug subpixel-antialiased">
          Hello, I’m Frederik. I’m a software engineering student with a passion
          for web development and all things machine learning, I can be reached
          on
          <a
            className="underline underline-offset-4 ml-1"
            href="https://www.linkedin.com/in/frederik-bode-thorbensen/"
          >
            Linkedin
          </a>
          .
        </p>
      </section>

      <hr />

      {/* Latest / Current Position */}
      <EducationCard
        education={{
          title: "Student Research Assistant",
          school: "Aalborg University CPH, Denmark",
          description:
            "Frontend development at Jorato, a startup that aims to make it easier for Real Estate managers to and investors to manage their properties.",
          period: "2023 - 2025",
        }}
      />

      <hr />

      {/* Latest / Current Education */}
      <EducationCard
        education={{
          title: "MSc, Software Engineering",
          school: "Aalborg University CPH, Denmark",
          description:
            "Frontend development at Jorato, a startup that aims to make it easier for Real Estate managers to and investors to manage their properties.",
          period: "2023 - 2025",
        }}
      />

      <div className="flex flex-row justify-center space-x-5">
        <a href="https://vbn.aau.dk/en/persons/fbth" target="_blank" rel="noopener">
          <HugginfaceIcon width={25} height={25} />
        </a>
        <a href="https://github.com/bodeby" target="_blank" rel="noopener">
          <HugginfaceIcon width={25} height={25} />
        </a>
        <a href="https://huggingface.co/fredebode" target="_blank" rel="noopener">
          <HugginfaceIcon width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/in/frederik-bode-thorbensen" target="_blank" rel="noopener">
          <HugginfaceIcon width={25} height={25} />
        </a>
        <a href="https://broken-band-e02.notion.site/d4f22adfcb5c427db914021a64acb731?v=a15ad34d04714a1382a12b92fca8eafb" target="_blank" rel="noopener">
          <HugginfaceIcon width={25} height={25} />
        </a>

      </div>

      {/* Website Tech-Stack */}
      {/* <section className="flex place-content-end flex-col -space-y-0 text-xs grow text-neutral-600">
        <p className={GeistMono.className}>framework: nextjs</p>
        <p className={GeistMono.className}>styles: tailwindcss</p>
        <p className={GeistMono.className}>components: shadcn</p>
        <p className={GeistMono.className}>language: typescript</p>
      </section> */}
    </aside>
  );
};
