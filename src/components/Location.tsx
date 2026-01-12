import { property } from "@/content/property";

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
              Your Greek Seaside Escape
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nestled in the charming coastal village of{" "}
              <strong>{property.locations[0]}</strong>, our villa offers the
              perfect blend of tranquility and convenience. Located in the{" "}
              <strong>{property.locations[1]} region</strong> of Northern Greece,
              you&apos;re just a short drive from the historic city of Kavala and the
              beautiful {property.locations[2]} coastline.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The <strong>sandy Ammolofi Beach</strong> is just a{" "}
              <strong>{property.nearBeachText}</strong> – one of the most beautiful
              beaches in the region with crystal-clear, shallow waters perfect for
              families with children.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Within walking distance, you&apos;ll find a mini-market, traditional Greek
              tavernas, and a bakery. The famous Kavala port (for ferries to Thasos
              island) is only 25 minutes by car.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Nearby Attractions
            </h3>
            <ul className="space-y-3">
              {property.nearbyAttractions.map((attraction, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>
                    <strong>{attraction.name}</strong> – {attraction.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
