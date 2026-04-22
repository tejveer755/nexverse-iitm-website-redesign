import AnnouncementBar from "@/components/sections/announcement-bar";
import HeroSection from "@/components/sections/hero-section";
import IntroSection from "@/components/sections/intro-section";
import MatchSection from "@/components/sections/society-highlights";
import StrategySection from "@/components/sections/strategy-section";
import MeasureSection from "@/components/sections/measure-section";
import RepurposeSection from "@/components/sections/repurpose-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import EventsSection from "@/components/sections/events-section";
import TestimonialQuote from "@/components/sections/testimonial-quote";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/Navbar";
import Collage from "@/components/Collage";
import SocietyHighlights from "@/components/sections/society-highlights";
export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <IntroSection />
        <SocietyHighlights/>
        {/* <RepurposeSection /> */}
        <Collage/>
        {/* <MeasureSection /> */}
        <TestimonialsSection />
        <EventsSection />
        {/* <TestimonialQuote /> */}
    </main>
  );
}
