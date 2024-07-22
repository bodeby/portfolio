import Image from "next/image";

// components
import PageCard from "@/components/common/page-card";
import BlogCard from "@/components/common/blog-card";
import FilterTabs from "@/components/common/filter-tabs";
import { EducationCard } from "@/components/common/education-card";
import ExperienceCard from "@/components/common/experience-card";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-row space-x-6 justify-between p-12">
      <div className="absolute bottom-0 left-0 max-w-[534px] max-h-[534px] overflow-hidden">
        <Image
          src="/roboto.png"
          alt="Headshot of Frederik Bode"
          width={534}
          height={534}
          className="object-cover scale-100 bg-center"
        />
      </div>

      <section>404</section>
    </main>
  );
}
