import Image from "next/image";

const StrategySection = () => {
  return (
    <section className="bg-secondary rounded-3xl py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-16 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/651ce84c3aa58280f1440590_home-strategy_1_5x.avif"
                alt="Students collaborating on a project with expert guidance"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 flex items-center gap-3 rounded-full bg-white p-2 pr-5 shadow-lg">
              <div className="relative h-10 w-10">
                <Image
                  src="https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/651ce84c3aa58280f1440590_home-strategy_1_5x.avif"
                  alt="Expert Mentor portrait"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-accent" />
              </div>
              <p className="text-sm font-semibold text-black">Expert Mentor</p>
            </div>
            <div className="absolute -top-4 right-4 w-48 rounded-2xl bg-white/50 p-4 shadow-lg backdrop-blur-md lg:right-8">
              <p className="font-semibold text-gray-800">Project Planning</p>
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded-full bg-gray-200" />
                <div className="h-2 w-3/4 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="inline-block rounded-full bg-accent px-4 py-1.5">
              <p className="text-sm font-semibold text-accent-foreground">
                Campaign Strategy
              </p>
            </div>
            <h3 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Expert creative
            </h3>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              At Nexverse-IITM, students and mentors collaborate to build winning
              project strategies—backed by industry research, exclusive data,
              and proven benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;