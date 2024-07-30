"use client";

import React from "react";
import Link from "next/link";

import * as Shadcn from "@/components/ui/card";

// components
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const sorter = (a, b) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

const allFilters = ["personal", "research", "education"];

export const PostRenderrer = ({ initialPosts }) => {
  const [posts] = React.useState(initialPosts);
  const [filters, setFilters] = React.useState(allFilters);

  // handles toggle selection
  const handleFilterChange = (value: string[]) => {
    if (value.length == 0) setFilters(allFilters);
    else setFilters([...value]);
  };

  // filter posts based on toggle values
  const filteredPosts = posts.filter((post) =>
    filters.includes(post.metadata.tag)
  );

  return (
    <div className="flex flex-col space-y-4">
      {/** Filters */}
      <ToggleGroup
        type="multiple"
        onValueChange={handleFilterChange}
        defaultValue={filters}
        size={"sm"}
        variant={"outline"}
      >
        <ToggleGroupItem value="personal" aria-label="Toggle bold">
          personal
        </ToggleGroupItem>
        <ToggleGroupItem value="research" aria-label="Toggle bold">
          research
        </ToggleGroupItem>
        <ToggleGroupItem value="education" aria-label="Toggle bold">
          education
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="grid grid-cols-3 gap-4 w-full">
        {filteredPosts
          .sort((a, b) => sorter(a, b))
          .map((post, i) => (
            <BlogCard post={post} key={i} />
          ))}
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => (
  <Link
    key={post.slug}
    className="flex flex-col space-y-1"
    href={`/blog/${post.slug}`}
  >
    <Shadcn.Card className="w-full">
      <Shadcn.CardHeader>
        <Shadcn.CardTitle className="line-clamp-1 text-md">
          {post.metadata.title}
        </Shadcn.CardTitle>
        <Shadcn.CardDescription className="text-sm">
          {post.metadata.publishedAt} - {post.metadata.tag}
        </Shadcn.CardDescription>
      </Shadcn.CardHeader>

      <Shadcn.CardContent>
        <p className="line-clamp-3 font-light text-sm">
          {post.metadata.summary}
        </p>
      </Shadcn.CardContent>
    </Shadcn.Card>
  </Link>
);
