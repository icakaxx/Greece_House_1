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
  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.houseName,
    description: property.seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.locations[0],
      addressRegion: property.locations[1],
      addressCountry: "GR",
    },
    telephone: property.contacts.phone,
    email: property.contacts.email,
    image: property.galleryImages[0],
    priceRange: "$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Beach Access" },
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: property.testimonials.length,
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
