import React from "react";
import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

// components
import FilterTabs from "@/components/common/filter-tabs";
import BlogCard from "@/components/common/blog-card";
import * as Shadcn from "@/components/ui/card";

const sorter = (a, b) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

export default function Home() {
  const allBlogs = getBlogPosts();
  return (
    <section className="flex flex-col space-y-4">
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
              <Shadcn.Card className="w-full">
                <Shadcn.CardHeader>
                  <Shadcn.CardTitle className="line-clamp-1 text-md">
                    {post.metadata.title}
                  </Shadcn.CardTitle>
                  <Shadcn.CardDescription className="text-sm">
                    {post.metadata.publishedAt}
                  </Shadcn.CardDescription>
                </Shadcn.CardHeader>

                <Shadcn.CardContent>
                  <p className="line-clamp-3 font-light text-sm">
                    {post.metadata.summary}
                  </p>
                </Shadcn.CardContent>
              </Shadcn.Card>
            </Link>
          ))}
      </div>
    </section>
  );
}
