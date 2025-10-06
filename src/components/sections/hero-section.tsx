"use client"
import React, { useState, useEffect } from 'react';

interface CollageImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  side: 'left' | 'right';
  top: string;
  rotation: number;
  size: string;
}

const collageImages: CollageImage[] = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-324711-6518db831add88a3c3d25b91_trystane-9.webp?",
    alt: "Students collaborating during a hackathon",
    width: 288,
    height: 180,
    side: 'left',
    top: '5%',
    rotation: -8,
    size: 'w-56 h-36'
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-173300-6518e24b61008515c9e8dbd9_influencer-11.webp?",
    alt: "IITM student presenting at a tech event",
    width: 136,
    height: 180,
    side: 'right',
    top: '10%',
    rotation: 12,
    size: 'w-40 h-56'
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-691789-6517d092d6409bc0547bd4dd_spencer-barbosa-5.webp?",
    alt: "Portrait of a smiling student innovator",
    width: 136,
    height: 180,
    side: 'left',
    top: '38%',
    rotation: 6,
    size: 'w-44 h-56'
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-699072-656fb8380fb2e670f3b2eaee_vintagedolls-comp-2.webp?",
    alt: "A dynamic tech workshop in progress",
    width: 136,
    height: 136,
    side: 'right',
    top: '48%',
    rotation: -10,
    size: 'w-48 h-48'
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-894540-6518d6798c3120cae318c57e_tingmystyle-4.webp?",
    alt: "Creative student project showcase",
    width: 288,
    height: 180,
    side: 'left',
    top: '70%',
    rotation: -12,
    size: 'w-60 h-40'
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8a09d4f9-a021-47ef-83dc-143f91d637da-hashtagpaid-clone-vercel-app/assets/images/next-565215-6518dcb423e88eb0c2b4744c_karinabnyc-10.webp?",
    alt: "Informal networking at a campus event",
    width: 136,
    height: 180,
    side: 'right',
    top: '78%',
    rotation: 8,
    size: 'w-44 h-56'
  },
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-black/90 to-stone-950 min-h-screen overflow-hidden">
     
      {/* Parallax Images - Left Side */}
      <div className="absolute left-3.5 top-0 w-1/4 h-full hidden lg:block">
        {collageImages
          .filter(img => img.side === 'left')
          .map((image, index) => (
            <div
              key={`left-${index}`}
              className="absolute"
              style={{
                top: image.top,
                left: '8%',
                transform: `translateY(${scrollY * 0.5}px) rotate(${image.rotation}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className={`${image.size} relative group`}>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Parallax Images - Right Side */}
      <div className="absolute right-5 top-0 w-1/4 h-full hidden lg:block">
        {collageImages
          .filter(img => img.side === 'right')
          .map((image, index) => (
            <div
              key={`right-${index}`}
              className="absolute"
              style={{
                top: image.top,
                right: '8%',
                transform: `translateY(${scrollY * 0.5}px) rotate(${image.rotation}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className={`${image.size} relative group`}>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

  

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          {/* Logo with glow effect */}
          <div className="mb-12 relative">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo1-1759402940398.png"
              alt="Nexverse Logo"
              className="h-auto w-[340px] mx-auto relative z-10"
            />
          </div>
          
          {/* Heading with gradient text */}
          <h1 className="text-2xl font-normal leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl xl:max-w-[90%] mx-auto px-4 mb-8">
            A vibrant society where Technology and Creativity come together to build, innovate and inspire
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>

          {/* Additional tagline */}
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Join us in shaping the future through innovation and collaboration
          </p>
        </div>
      </div>

      {/* Mobile Images (visible on smaller screens) */}
      <div className="lg:hidden relative mt-16 mx-auto h-[450px] w-full max-w-md px-4">
        {collageImages.slice(0, 4).map((image, index) => (
          <div
            key={`mobile-${index}`}
            className="absolute"
            style={{
              top: image.top,
              [image.side]: '5%',
              transform: `rotate(${image.rotation}deg)`,
            }}
          >
            <div className={`${image.size} relative`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default HeroSection;