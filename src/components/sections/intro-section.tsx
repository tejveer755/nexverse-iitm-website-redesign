import React from 'react';

const IntroSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your gateway to innovation at IITM.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Join a thriving student community driving tech and non-tech events, hackathons, and collaborations that inspire growth and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;