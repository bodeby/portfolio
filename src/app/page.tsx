import React from "react";
import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

// components
import FilterTabs from "@/components/common/filter-tabs";
import BlogCard from "@/components/common/blog-card";

const sorter = (a, b) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

export default function Home() {
  const allBlogs = getBlogPosts();
  return (
    <section className="flex flex-col space-y-6">
      <FilterTabs />

      <div className="grid grid-cols-3 gap-4 w-full">
        {allBlogs
          .sort((a, b) => sorter(a, b))
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <BlogCard />
            </Link>
          ))}
      </div>
    </section>
  );
}
