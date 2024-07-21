import React from "react";

// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href={`blog/${Math.floor(Math.random()*100)}`}>
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>April 1st, 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2">
          Frontend development at Jorato, a startup that aims to make it easier
          for Real Estate managers to and investors to manage their properties,
          technologies
        </p>
      </CardContent>
    </Card>
    </Link>
  );
};

export default BlogCard;
