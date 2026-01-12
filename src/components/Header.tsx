"use client";

import { useState, useEffect } from "react";
import { property } from "@/content/property";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <svg
            className="w-8 h-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5z" />
            <circle cx="12" cy="14" r="2" />
          </svg>
          <span className="font-display text-xl font-semibold text-primary">
            {property.houseName.split(" ")[0]} {property.houseName.split(" ")[1]}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#gallery" className="hover:text-primary transition">
            Gallery
          </a>
          <a href="#amenities" className="hover:text-primary transition">
            Amenities
          </a>
          <a href="#location" className="hover:text-primary transition">
            Location
          </a>
        </nav>
        <a
          href="#contact"
          className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-lg"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
