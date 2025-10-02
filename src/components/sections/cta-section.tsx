import React from 'react';

const CtaSection = () => {
  return (
    <section 
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#c4d92e] py-24 text-black sm:py-32"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #c4d92e, #b8d426)'
      }}
    >
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-y-8">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-[56px]">
            Join the community. Start your innovation journey.
          </h2>
          <a
            href="#"
            className="mt-2 inline-block transform rounded-full bg-white px-10 py-4 text-base font-semibold text-black shadow-lg transition-transform duration-300 hover:scale-105 sm:text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;