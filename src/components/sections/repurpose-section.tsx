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
    <section className="bg-background py-16 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          {/* --- IMAGE COLUMN --- */}
          <div className="relative flex justify-center items-center">
            {/* Main Image */}
            <div className="aspect-square relative overflow-hidden rounded-3xl w-[80%] sm:w-[70%] md:w-[85%] lg:w-full max-w-md sm:max-w-lg md:max-w-xl">
              <Image
                alt="Students showcasing prototypes and creative projects during a Nexverse event"
                src="/hackathon_1.webp"
                width={600}
                height={600}
                className="h-full w-full object-cover rounded-3xl"
                priority
              />
            </div>

            {/* Floating top-left image */}
            <div
              className="
                absolute
                top-4
                left-2
                sm:top-6 sm:-left-8
                md:top-8 md:-left-12
                lg:-left-16
                xl:-left-20
                transition-all
              "
            >
              <Image
                src="/front.jpeg"
                alt="Nexverse-IITM community events collage"
                width={240}
                height={160}
                className="rounded-3xl w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] object-cover shadow-lg"
              />
            </div>

            {/* Floating bottom-right image */}
            <div
              className="
                absolute
                bottom-0
                right-2
                sm:-right-6
                md:-right-10
                lg:-right-16
                xl:-right-16
                transition-all
              "
            >
              <Image
                src="/mentors_3.webp"
                alt="Nexverse-IITM mentors and collaboration moments"
                width={240}
                height={160}
                className="rounded-3xl w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* --- TEXT COLUMN --- */}
          <div className="text-center lg:text-left px-2 sm:px-4">
            <div className="mb-4 inline-block">
              <p className="rounded-full bg-accent py-2 px-4 text-xs sm:text-sm font-medium text-accent-foreground">
                Transform
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              Turn your ideas into something the world can see
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Build once, showcase everywhere. At Nexverse, every project you create —
              from code to concept — deserves the spotlight. Present your innovations across
              hackathons, fests, and digital platforms to make your impact go beyond the classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepurposeSection;
