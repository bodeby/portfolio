import React from "react";

// https://github.com/xenova/transformers.js/blob/main/examples/next-client/src/app/worker.js

import * as Shadcn from "@/components/ui/card";

export const SummarizeCard = () => {
  return (
    <Shadcn.Card className="w-full">
      <Shadcn.CardHeader>
        <Shadcn.CardTitle className="line-clamp-1 text-md">
          Summary
        </Shadcn.CardTitle>
        <Shadcn.CardDescription className="text-sm">
          generated with transformers.js
        </Shadcn.CardDescription>
      </Shadcn.CardHeader>

      <Shadcn.CardContent className="font-light text-sm">
        In the ever-evolving landscape of software development, the debate
        between dynamic and static typing continues to be a hot topic.
      </Shadcn.CardContent>
    </Shadcn.Card>
  );
};
