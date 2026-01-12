"use client";

import { useState, useEffect } from "react";
import { property } from "@/content/property";
import LanguageSwitcher from "./LanguageSwitcher";

// Default translations for SSR
const defaultTranslations = {
  nav: {
    gallery: "Gallery",
    amenities: "Amenities",
    location: "Location",
    contact: "Contact"
  }
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [translations, setTranslations] = useState(defaultTranslations);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // Load translations on client side
    const loadTranslations = async () => {
      try {
        const savedLanguage = localStorage.getItem('language') || 'en';
        const translationModule = await import(`../../messages/${savedLanguage}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.warn('Failed to load translations, using defaults');
      }
    };

    loadTranslations();
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
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
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#gallery" className="hover:text-primary transition">
            {t('nav.gallery')}
          </a>
          <a href="#amenities" className="hover:text-primary transition">
            {t('nav.amenities')}
          </a>
          <a href="#location" className="hover:text-primary transition">
            {t('nav.location')}
          </a>
        </nav>
        <a
          href="#contact"
          className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-lg"
        >
          {t('nav.contact')}
        </a>
      </div>
    </header>
  );
}
