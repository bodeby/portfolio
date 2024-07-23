import Image from "next/image";

export default function Page() {
  return (
    <main className="flex relative min-h-screen flex-row space-x-6 justify-between p-12">
      <div className="absolute bottom-0 left-0 max-w-[534px] max-h-[534px] overflow-hidden">
        <Image
          src="/roboto.png"
          alt="Headshot of Frederik Bode"
          width={534}
          height={534}
          className="object-cover scale-100 bg-center"
        />
      </div>

      <section>404</section>
    </main>
  );
}
