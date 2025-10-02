import Image from 'next/image';

const partnerLogos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/svgs/652ef54d52b46666bfcc5f73_Infiniti_logo-2-13-1.svg?",
    alt: "Infiniti logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/svgs/652fdbc4c71a33d3c6ab261a_Sephora_logo-150svg-14-2.svg?",
    alt: "Sephora logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/svgs/652fd71473dd4f77b973b854_Heineken_logo%201-3-3.svg?",
    alt: "Heineken logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/svgs/6528375ecf31635feed8de23_unilever-logo-blk-sm-5-5.svg?",
    alt: "Unilever logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/svgs/651cdc0a53a655340ef0f537_paramount-6-6.svg?",
    alt: "Paramount+ logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/svgs/65282cabb87556319a6238f3_Nissan_2020_logo-7-7.svg?",
    alt: "Nissan logo",
  },
];

const PartnersSection = () => {
  // We duplicate the logos to create a seamless scrolling effect with CSS animation
  const extendedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-8">
          <p className="flex-shrink-0 text-sm font-medium text-muted-foreground">
            Supported by
          </p>
          <div className="relative flex-1 h-8 overflow-hidden">
            <div className="absolute top-0 left-0 flex h-full items-center animate-marquee">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="flex-none px-10">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={32}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;