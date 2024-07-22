import Image from "next/image";

// components
import PageCard from "@/components/common/page-card";
import BlogCard from "@/components/common/blog-card";
import FilterTabs from "@/components/common/filter-tabs";
import { EducationCard } from "@/components/common/education-card";
import ExperienceCard from "@/components/common/experience-card";
import { GeistMono } from "geist/font/mono";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row space-x-8 justify-between p-8">
      <aside className="relative flex flex-col space-y-8 w-3/12">
        {/* Presentation Header */}
        <section className="flex shrink-0 items-center space-x-4">
          <div className="max-w-[75px] max-h-[75px] overflow-hidden rounded-full">
            <Image
              src="/roboto.png"
              alt="Headshot of Frederik Bode"
              width={534}
              height={534}
              className="object-cover scale-100 bg-center"
            />
          </div>

          <div className="flex flex-col -space-y-1 text-md font-light">
            <h1 className="font-semibold text-primary dark:text-dark-primary">
              Frederik Bode
            </h1>
            <p className="break-words leading-snug subpixel-antialiased text-sm font-normal">
              Software Engineering Student at Aalborg University CPH
            </p>
          </div>
        </section>

        {/*About Section */}
        <section className="text-primary dark:text-dark-primary">
          <h2 className="text-md font-semibold mb-2">About</h2>
          <p className="text-sm font-normal leading-snug subpixel-antialiased">
            Hello, I’m Frederik. I’m a software engineering student with a
            passion for web-dev and all things machine learning, You can contact
            me on{" "}
            <a
              className="underline underline-offset-4"
              href="https://www.linkedin.com/in/frederik-bode-thorbensen/"
            >
              Linkedin
            </a>
            .
          </p>
        </section>

        <hr />

        {/* Latest / Current Position */}
        <ExperienceCard
          key={1}
          experience={{
            title: "Software Developer",
            company: "Jorato",
            link: "https://jorato.com/",
            period: "2023 - 2024",
            description:
              "Frontend development at Jorato, a startup that aims to make it easier for Real Estate managers to and investors to manage their properties.",
            technologies: [
              "React",
              "Vite",
              "Tailwindcss",
              "Zustand",
              "TypeScript",
            ],
          }}
        />

        <hr />

        {/* Latest / Current Education */}
        <EducationCard
          education={{
            title: "MSc, Software Engineering",
            school: "Aalborg University CPH, Denmark",
            period: "2023 - 2025",
          }}
        />

        {/* Website Tech-Stack */}
        <section className="flex place-content-end flex-col -space-y-0 text-xs grow text-neutral-600">
          <p className={GeistMono.className}>framework: nextjs</p>
          <p className={GeistMono.className}>styles: tailwindcss</p>
          <p className={GeistMono.className}>components: shadcn</p>
          <p className={GeistMono.className}>language: typescript</p>
        </section>
      </aside>

      <section className="w-9/12 flex flex-col space-y-8">
        <FilterTabs />

        <div className="grid grid-cols-3 gap-4 w-full">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </main>
  );
}
