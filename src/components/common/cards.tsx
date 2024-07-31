import React from "react";

// shadcn components
import * as SC from "../ui/card";


// used in the home grid
export const GridCard = () => {
  return (
    <SC.Card className="w-full">
      <SC.CardHeader>
        <SC.CardTitle className="line-clamp-1 text-md">
          The Power of Static Typing in Programming
        </SC.CardTitle>
        <SC.CardDescription className="text-sm">2024-04-07</SC.CardDescription>
      </SC.CardHeader>

      <SC.CardContent>
        <p className="line-clamp-2 font-light text-sm">
          In the ever-evolving landscape of software development, the debate
          between dynamic and static typing continues to be a hot topic.
        </p>
      </SC.CardContent>
    </SC.Card>
  );
};

// used in blog posts to associate with project
export const FlatCard = () => {
  return (
    <SC.Card className="w-full">
      <SC.CardHeader>
        <SC.CardTitle className="line-clamp-1 text-md">
          The Power of Static Typing in Programming
        </SC.CardTitle>
        <SC.CardDescription className="text-sm">2024-04-07</SC.CardDescription>
      </SC.CardHeader>

      <SC.CardContent>
        <p className="line-clamp-2 font-light text-sm">
          In the ever-evolving landscape of software development, the debate
          between dynamic and static typing continues to be a hot topic.
        </p>
      </SC.CardContent>
    </SC.Card>
  );
};
