import React from "react";

// shadcn
import { Badge } from "../ui/badge";

const FilterTabs = () => {
  return (
    <section className="flex flex-row px-2 py-2 space-x-2 border rounded w-full ">
      <Badge variant="outline">Transformers</Badge>
      <Badge variant="outline">Deep Learning</Badge>
      <Badge variant="outline">Reinforcement</Badge>
      <Badge variant="outline">Classification</Badge>
    </section>
  );
};

export default FilterTabs;
