import Image from 'next/image';

const MatchSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find creators and brands to collaborate with. It’s never been easier.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-y-16 lg:mt-24 lg:grid-cols-2 lg:gap-x-16">
          <div className="text-center lg:text-left">
            <div className="inline-block rounded-lg bg-accent px-3 py-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">
                Match
              </p>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet the right partner
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              If you’re looking for brands and creators to collaborate with, you’ll find them on #paid. We study what makes for a successful match, so finding each other is easy.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-none">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/icons/next-553513-651ce82c48b2738217a7f508_home-match_1_5x.avif?"
                alt="A lively DJ event sponsored by Heineken, showcasing a successful brand-creator collaboration"
                width={1024}
                height={1280}
                className="h-auto w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchSection;