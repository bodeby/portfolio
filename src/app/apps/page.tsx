import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { headers } from "next/headers";
import { PlausibleStats } from "@/types/plausible";
import { AppCard } from "./components/card";

type App = {
  title: string;
  description: string;
  url: string;
  plausible_id?: string;
};

const data: Array<App> = [
  {
    title: "Energy",
    description: "Energy Forcasting Website",
    url: "https://energy.frederikbode.com",
    plausible_id: "he",
  },
  {
    title: "ASCII",
    description: "Generate ASCII with Large-Language Models",
    url: "https://ascii.frederikbode.com",
  },
  {
    title: "Portfolio",
    description: "Generate ASCII with Large-Language Models",
    url: "https://www.frederikbode.com",
  },
];

async function getData(site_id: string): Promise<PlausibleStats> {
  const token =
    "H1VvasbSds0mJZ9wBZuEe42oKnlvjC0KznjqHOD18W28r8s0PNXGEo4_ONgoRfOk";
  const res = await fetch(
    `https://plausible.io/api/v1/stats/aggregate?site_id=${site_id}&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function AppPage() {
  const pl_ascii = await getData("ascii.frederikbode.com");
  const pl_energy = await getData("energy.frederikbode.com");
  const pl_main = await getData("frederikbode.com");

  return (
    <main className="flex min-h-screen flex-row space-x-8 justify-between p-8">
      <section className="grid grid-cols-3 gap-4 w-full">
        {data.map((item: App, i: React.Key) => (
          <a href={item.url} key={i} target="_blank" rel="noopener" className="">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="line-clamp-1 text-md">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs underline underline-offset-2">
                  {item.url}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="line-clamp-2 font-light text-sm">
                  {pl_ascii.results.pageviews.value}
                </p>
                <AppCard />
              </CardContent>
            </Card>
          </a>
        ))}
      </section>

      <AppCard />
    </main>
  );
}
