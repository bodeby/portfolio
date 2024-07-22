import React from "react";
import Link from "next/link";

// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = () => {
  return (
    <Link href={`blog/${Math.floor(Math.random() * 100)}`}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="line-clamp-1 text-md">
            The Power of Static Typing in Programming
          </CardTitle>
          <CardDescription className="text-sm">2024-04-07</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-2 font-light text-sm">
            In the ever-evolving landscape of software development, the debate
            between dynamic and static typing continues to be a hot topic.
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
