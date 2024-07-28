import { PlausibleStats } from "@/types/plausible";

export async function fetchVisitorData(id: string): Promise<PlausibleStats> {
  try {
    const token = process.env.PLAUSIBLE_API_KEY;
    console.log("Using token:", token); // Debugging
    const res = await fetch(
      `https://plausible.io/api/v1/stats/aggregate?site_id=${id}&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch data:", errorText);
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      results: {
        visitors: { value: 0 },
        pageviews: { value: 0 },
        bounce_rate: { value: 0 },
        visit_duration: { value: 0 },
      },
    };
  }
}
