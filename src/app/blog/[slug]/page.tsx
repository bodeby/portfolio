import React from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="">
      <h1 className="title font-semibold text-2xl tracking-tighter">
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
