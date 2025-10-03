import Image from 'next/image';
import Link from 'next/link';

interface CollageImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  containerClassName: string;
}

const collageImages: CollageImage[] = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-324711-6518db831add88a3c3d25b91_trystane-9.webp?",
    alt: "Students collaborating during a hackathon",
    width: 288,
    height: 180,
    containerClassName: "absolute top-0 left-[15%] w-[48%] overflow-hidden rounded-full",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-173300-6518e24b61008515c9e8dbd9_influencer-11.webp?",
    alt: "IITM student presenting at a tech event",
    width: 136,
    height: 180,
    containerClassName: "absolute top-[10%] right-0 w-[35%] overflow-hidden rounded-full",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-691789-6517d092d6409bc0547bd4dd_spencer-barbosa-5.webp?",
    alt: "Portrait of a smiling student innovator",
    width: 136,
    height: 180,
    containerClassName: "absolute top-[28%] left-0 w-[33%] overflow-hidden rounded-full",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-699072-656fb8380fb2e670f3b2eaee_vintagedolls-comp-2.webp?",
    alt: "A dynamic tech workshop in progress",
    width: 136,
    height: 136,
    containerClassName: "absolute top-[48%] left-[38%] w-[33%] overflow-hidden rounded-full",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-894540-6518d6798c3120cae318c57e_tingmystyle-4.webp?",
    alt: "Creative student project showcase",
    width: 288,
    height: 180,
    containerClassName: "absolute bottom-[10%] left-[8%] w-[40%] overflow-hidden rounded-full",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-565215-6518dcb423e88eb0c2b4744c_karinabnyc-10.webp?",
    alt: "Informal networking at a campus event",
    width: 136,
    height: 180,
    containerClassName: "absolute top-[60%] right-0 w-[33%] overflow-hidden rounded-full",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-720497-6517d0b2456364205cc88fb5_saif-shawaf-6.webp?",
    alt: "Student with their startup prototype",
    width: 136,
    height: 136,
    containerClassName: "absolute bottom-0 left-[55%] w-[30%] overflow-hidden rounded-full",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-stone-950 pb-16 lg:rounded-b-[40px] lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo1-1759402940398.png"
                alt="Nexverse Logo"
                width={400}
                height={10}
                className="h-auto w-[340px]"
                priority
              />
            </div>
            <h1 className="text-xl font-zinc-50 leading-[1.1] text-zinc-100 sm:text-3xl lg:text-xl">
              A vibrant society where Technology and Creativity come together to build innovate and inspire
            </h1>
           
            <div className="mt-10 flex justify-center lg:justify-start">
              <Link
                href="#"
                className="w-full shrink-0 rounded-full bg-black px-8 py-4 text-center font-bold text-white shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] transition-transform hover:scale-105 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-[450px] w-full max-w-md sm:h-[550px] lg:h-[600px] lg:max-w-none">
            {collageImages.map((image, index) => (
              <div key={index} className={image.containerClassName}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;