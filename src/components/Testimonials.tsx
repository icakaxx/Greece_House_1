import { property } from "@/content/property";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
          What Guests Say
        </h2>
        <p className="text-white/70 text-center mb-12">
          Real reviews from happy visitors
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {property.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
