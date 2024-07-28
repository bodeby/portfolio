import React from "react";

import { PlausibleStats } from "@/types/plausible";
import { VisitorGraph } from "./components/visitor-graph";

import * as Card from "@/components/ui/card";
import { AppCard } from "./components/app-card";

export type App = {
  title: string;
  description: string;
  url: string;
  plausible_id: string;
};

const data: Array<App> = [
  {
    title: "Energy",
    description: "Energy Forcasting Website",
    url: "https://energy.frederikbode.com",
    plausible_id: "energy.frederikbode.com",
  },
  {
    title: "ASCII",
    description: "Generate ASCII with Large-Language Models",
    url: "https://ascii.frederikbode.com",
    plausible_id: "ascii.frederikbode.com",
  },
  {
    title: "Portfolio",
    description: "Generate ASCII with Large-Language Models",
    url: "https://www.frederikbode.com",
    plausible_id: "www.frederikbode.com",
  },
];

async function fetchVisitorData(id: string) {
  const token =
    "H1VvasbSds0mJZ9wBZuEe42oKnlvjC0KznjqHOD18W28r8s0PNXGEo4_ONgoRfOk";
  const res = await fetch(
    `https://plausible.io/api/v1/stats/aggregate?site_id=${id}&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

// server side data fetching function
async function getData(site_id: string): Promise<PlausibleStats> {
  const results = await Promise.all([
    fetchVisitorData("energy.frederikbode.com"),
    fetchVisitorData("ascii.frederikbode.com"),
    fetchVisitorData("www.frederikbode.com"),
  ]);

  return res.json();
}

// Fetch data for all sites concurrently
async function fetchAllData(): Promise<SiteData[]> {
  const dataPromises = plausibleIds.map(async (plausible_id) => {
    const stats = await getData(plausible_id);
    return { plausible_id, stats };
  });

  const siteData = await Promise.all(dataPromises);
}

export default async function AppPage() {
  const pl_ascii = await getData("ascii.frederikbode.com");
  const pl_energy = await getData("energy.frederikbode.com");
  const pl_main = await getData("frederikbode.com");

  return (
    <section className="grid grid-cols-2 gap-4 w-full">
      {data.map((item: App, i: React.Key) => (
        <>
          <a
            href={item.url}
            key={i}
            target="_blank"
            rel="noopener"
            className=""
          >
            <Card.Card className="w-full">
              <Card.CardHeader>
                <Card.CardTitle className="line-clamp-1 text-md">
                  {item.title}
                </Card.CardTitle>
                <Card.CardDescription className="text-xs underline underline-offset-2">
                  {item.url}
                </Card.CardDescription>
              </Card.CardHeader>

              <Card.CardContent className="max-h-[120px] overflow-hidden">
                <p className="line-clamp-2 font-light text-sm">
                  {pl_ascii.results.pageviews.value}
                </p>
                <VisitorGraph />
              </Card.CardContent>
            </Card.Card>
          </a>
        </>
      ))}
    </section>
  );
}
