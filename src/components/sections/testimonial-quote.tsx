import React from 'react';

export default function TestimonialQuote() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <figure>
          <blockquote className="text-3xl font-medium text-black md:text-4xl md:leading-tight">
            <p>
              &ldquo;Nexverse-IITM brings something truly unique to education. The practical curriculum led to a placement rate of over <span className="text-[#6366f1]">95% in our organization.</span>&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 text-lg text-muted-foreground">
            Rohan Verma, HR Director — Tech Solutions Inc.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}