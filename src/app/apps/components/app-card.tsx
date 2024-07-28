import React from "react";

// types & interfaces
import { App } from "../page";
import { PlausibleStats } from "@/types/plausible";

async function getData(site_id: string): Promise<PlausibleStats> {
  const token = "H1VvasbSds0mJZ9wBZuEe42oKnlvjC0KznjqHOD18W28r8s0PNXGEo4_ONgoRfOk";
  const res = await fetch(
    `https://plausible.io/api/v1/stats/aggregate?site_id=${site_id}&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export const AppCard: React.FC<{ app: App }> = async ({ app }) => {
  const data = await getData(app.plausible_id);
  return (
    <div>
      {app.title}, pageviews: {data.results.pageviews.value}
    </div>
  );
};
