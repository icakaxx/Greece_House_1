import { property } from "@/content/property";

export default function MapEmbed() {
  return (
    <section id="map" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center text-primary mb-4">
          Location
        </h2>
        <p className="text-gray-600 text-center mb-10">
          {property.locations[0]}, {property.locations[1]} Region, Northern Greece
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={property.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Property location map"
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          📍 Location shown is approximate for privacy. Exact address provided
          after booking.
        </p>
      </div>
    </section>
  );
}
