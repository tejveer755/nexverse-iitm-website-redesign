import Image from "next/image";
import { Check } from "lucide-react";

const CheckListItem = ({ text }: { text: string }) => (
  <li className="flex items-center">
    <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-chart-1">
      <Check className="h-3 w-3 text-white" />
    </div>
    <span className="text-sm font-medium text-foreground">{text}</span>
  </li>
);

const PlaceholderListItem = () => (
  <li className="flex items-start opacity-30">
    <div className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 rounded bg-secondary"></div>
    <div className="h-4 w-2/3 rounded-sm bg-secondary"></div>
  </li>
);

const RepurposeSection = () => {
  return (
    <section className="bg-background py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl">
              <Image
                alt="#paid illustration detailing how users can use their curated content anywhere"
                src="https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/651ce88de56bf7931086c1fb_home-repurpose_1_5x.avif"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 max-w-xs rounded-xl bg-card p-6 shadow-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Offline Usage
                </h4>
                <ul className="mt-4 space-y-4">
                  <CheckListItem text="Print" />
                  <CheckListItem text="Out of Home" />
                  <CheckListItem text="Cinema" />
                  <CheckListItem text="In-Game" />
                  <PlaceholderListItem />
                  <PlaceholderListItem />
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 inline-block">
              <p className="rounded-full bg-accent py-2 px-4 text-sm font-medium text-accent-foreground">
                Repurpose
              </p>
            </div>
            <h2 className="text-5xl font-extrabold leading-tight -tracking-tighter text-foreground">
              Use your campaign content everywhere
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Take the best-performing creator content and use it across
              different marketing channels, like out-of-home, print, and
              in-flight entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepurposeSection;