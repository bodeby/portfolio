"use client";

import React from "react";

const TickGenerator = ({ classes }) => {
  const classname = `inline-flex font-semibold leading-sm h-1 w-5 rounded-full align-middle ${classes}`;
  return <div className={classname}></div>;
};

// prettier-ignore
export const TickSelector: React.FC<{ tag: string }> = ({ tag }) => {
  switch (tag) {
    case "personal": return <TickGenerator classes={"bg-indigo-500"} />;
    case "research": return <TickGenerator classes={"bg-green-500"} />;
    case "education": return <TickGenerator classes={"bg-yellow-500"} />;
    default: return <TickGenerator classes={"bg-gray-500"} />;
  }
};
