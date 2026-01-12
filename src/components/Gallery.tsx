"use client";

import { useState } from "react";
import Image from "next/image";
import { property } from "@/content/property";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + property.galleryImages.length) %
        property.galleryImages.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % property.galleryImages.length);
  };

  // Handle keyboard navigation
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    });
  }

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center text-primary mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Take a tour of your future vacation home
          </p>

          {/* Desktop Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {property.galleryImages.map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform shadow-lg"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img}
                  alt={`${property.houseName} photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <Image
              src={property.galleryImages[currentIndex]}
              alt={`${property.houseName} photo ${currentIndex + 1}`}
              width={1200}
              height={900}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
          </div>
          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {property.galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
