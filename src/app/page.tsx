import React from "react";

// components
import FilterTabs from "@/components/common/filter-tabs";
import BlogCard from "@/components/common/blog-card";

export default function Home() {
  return (
    <section className="flex flex-col space-y-6">
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
  );
}
