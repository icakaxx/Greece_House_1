import { property } from "@/content/property";

const amenityIcons = {
  comfort: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  kitchen: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  ),
  outdoor: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  family: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center text-primary mb-4">
          Amenities
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need for a comfortable stay
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Comfort */}
          <div className="bg-sand rounded-2xl p-6 hover:translate-y-[-4px] transition-transform shadow-md">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              {amenityIcons.comfort}
            </div>
            <h3 className="font-semibold text-primary mb-3">Comfort</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {property.amenities.comfort.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Kitchen */}
          <div className="bg-sand rounded-2xl p-6 hover:translate-y-[-4px] transition-transform shadow-md">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              {amenityIcons.kitchen}
            </div>
            <h3 className="font-semibold text-primary mb-3">Kitchen</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {property.amenities.kitchen.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outdoor */}
          <div className="bg-sand rounded-2xl p-6 hover:translate-y-[-4px] transition-transform shadow-md">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              {amenityIcons.outdoor}
            </div>
            <h3 className="font-semibold text-primary mb-3">Outdoor</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {property.amenities.outdoor.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Family */}
          <div className="bg-sand rounded-2xl p-6 hover:translate-y-[-4px] transition-transform shadow-md">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              {amenityIcons.family}
            </div>
            <h3 className="font-semibold text-primary mb-3">Family</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {property.amenities.family.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-accent flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
