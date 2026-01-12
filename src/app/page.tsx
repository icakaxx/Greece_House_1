import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickHighlights from "@/components/QuickHighlights";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MapEmbed from "@/components/MapEmbed";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { property } from "@/content/property";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickHighlights />
        <Gallery />
        <Location />
        <Amenities />
        <Testimonials />
        <FAQ />
        <Contact />
        <MapEmbed />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}