import Image from "next/image";
import { ArrowUp } from "lucide-react";

const MeasureSection = () => {
  return (
    <section className="rounded-[40px] bg-secondary py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 gap-x-16 lg:grid-cols-2">
          {/* Left Text Column */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-block">
              <p className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                Measure
              </p>
            </div>
            <h2 className="text-5xl font-black leading-tight text-foreground sm:text-6xl">
              Understand what's working—and why
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Track project milestones and event success with real-time data. Our
              analytics dashboards provide clear insights into what's driving
              engagement, helping you optimize your initiatives and prove their
              impact effectively.
            </p>
          </div>

          {/* Right Image & Chart Column */}
          <div className="relative mx-auto h-[450px] w-full max-w-xl sm:h-[550px] lg:h-[500px] lg:max-w-none">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/651ce86fe1ed08a5d7821fcb_home-measure_1_5x.avif"
                alt="Analytics dashboard showing a 23% increase in project engagement"
                fill
                objectFit="cover"
                className="object-center"
              />
            </div>

            <div className="absolute top-1/2 w-64 -translate-y-1/2 transform rounded-3xl bg-card p-6 shadow-2xl left-4 sm:left-8 md:left-12 lg:-left-10">
              <p className="text-sm font-medium text-muted-foreground">
                Project Engagement
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <ArrowUp className="h-5 w-5 text-chart-1" />
                <p className="text-3xl font-bold text-chart-1">+23%</p>
              </div>
              <div className="mt-6 flex h-20 items-end gap-3">
                <div className="h-3/5 w-full rounded-t-md bg-chart-2"></div>
                <div className="h-full w-full rounded-t-md bg-chart-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasureSection;