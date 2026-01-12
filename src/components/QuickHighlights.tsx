import { property } from "@/content/property";

export default function QuickHighlights() {
  return (
    <section className="bg-sand py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {/* Beach Distance */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21h18M9 21V10a3 3 0 016 0v11M5 21V7l7-4 7 4v14"
                />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary">3 min</p>
            <p className="text-gray-600 text-sm">Walk to beach</p>
          </div>

          {/* Capacity */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary">{property.capacity}</p>
            <p className="text-gray-600 text-sm">Guests</p>
          </div>

          {/* Bedrooms */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary">{property.bedrooms}</p>
            <p className="text-gray-600 text-sm">Bedrooms</p>
          </div>

          {/* Bathrooms */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary">{property.bathrooms}</p>
            <p className="text-gray-600 text-sm">Bathrooms</p>
          </div>
        </div>

        {/* Why You'll Love It */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="font-display text-2xl text-primary mb-4 text-center">
            Why You&apos;ll Love It
          </h3>
          <ul className="space-y-3">
            {property.whyYouWillLoveIt.map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: reason }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
