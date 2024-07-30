import React from "react";
import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

// components
import FilterTabs from "@/components/common/filter-tabs";
import BlogCard from "@/components/common/blog-card";
import * as Shadcn from "@/components/ui/card";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PostRenderrer } from "@/components/common/posts";

const sorter = (a, b) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

export default function Home() {
  const allBlogs = getBlogPosts();

  return <PostRenderrer initialPosts={allBlogs} />;
}
