import React from "react";
import * as Shadcn from "@/components/ui/card";

const BlogCard = () => {
  return (
    <Shadcn.Card className="w-full">
      <Shadcn.CardHeader>
        <Shadcn.CardTitle className="line-clamp-1 text-md">
          The Power of Static Typing in Programming
        </Shadcn.CardTitle>
        <Shadcn.CardDescription className="text-sm">
          2024-04-07
        </Shadcn.CardDescription>
      </Shadcn.CardHeader>

      <Shadcn.CardContent>
        <p className="line-clamp-2 font-light text-sm">
          In the ever-evolving landscape of software development, the debate
          between dynamic and static typing continues to be a hot topic.
        </p>
      </Shadcn.CardContent>
    </Shadcn.Card>
  );
};

export default BlogCard;
