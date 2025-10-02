import AnnouncementBar from "@/components/sections/announcement-bar";
import HeroSection from "@/components/sections/hero-section";
import IntroSection from "@/components/sections/intro-section";
import MatchSection from "@/components/sections/match-section";
import StrategySection from "@/components/sections/strategy-section";
import MeasureSection from "@/components/sections/measure-section";
import RepurposeSection from "@/components/sections/repurpose-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import EventsSection from "@/components/sections/events-section";
import TestimonialQuote from "@/components/sections/testimonial-quote";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <AnnouncementBar />
      <HeroSection />
      <IntroSection />
      <div className="space-y-20 lg:space-y-32">
        <MatchSection />
        <StrategySection />
        <MeasureSection />
        <RepurposeSection />
        <TestimonialsSection />
        <EventsSection />
        <TestimonialQuote />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}