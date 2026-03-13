import Analytics from "@/components/Analytics";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTop";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Analytics />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      {/* Scroll Button */}
      <ScrollToTop />
    </>
  );
}
