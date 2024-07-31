import React from "react";
import { getBlogPosts } from "@/lib/blog";

// components
import { PostRenderrer } from "@/components/common/posts";

const sorter = (a, b) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

export default function Home() {
  const allBlogs = getBlogPosts();

  return <PostRenderrer initialPosts={allBlogs} />;
}
