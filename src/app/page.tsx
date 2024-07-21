import Image from "next/image";

// components
import PageCard from "@/components/common/page-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-3 gap-3">
        {[...Array(6)].map((i) => (
          <PageCard key={i} />
        ))}
      </section>
    </main>
  );
}
