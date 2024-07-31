import React from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/lib/blog";

// shadcn
import * as SC from "@/components/ui/breadcrumb";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="">

      <SC.Breadcrumb>
        <SC.BreadcrumbList>
          <SC.BreadcrumbItem>
            <SC.BreadcrumbLink href="/">Home</SC.BreadcrumbLink>
          </SC.BreadcrumbItem>
          <SC.BreadcrumbSeparator />
          <SC.BreadcrumbItem>
            <SC.BreadcrumbLink href="/blog">Blog</SC.BreadcrumbLink>
          </SC.BreadcrumbItem>
          <SC.BreadcrumbSeparator />
          <SC.BreadcrumbItem>
            <SC.BreadcrumbLink href={`/blog/${post.slug}`}>
              {post.metadata.title}
            </SC.BreadcrumbLink>
          </SC.BreadcrumbItem>
        </SC.BreadcrumbList>
      </SC.Breadcrumb>

      <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
