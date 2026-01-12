export interface PropertyData {
  houseName: string;
  tagline: string;
  locations: string[];
  nearBeachText: string;
  beachDistanceMeters: number;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  galleryImages: string[];
  amenities: {
    comfort: string[];
    kitchen: string[];
    outdoor: string[];
    family: string[];
  };
  contacts: {
    whatsapp: string;
    viber: string;
    telegram: string;
    facebook: string;
    instagram: string;
    phone: string;
    email?: string;
    ownerName: string;
  };
  mapEmbedUrl: string;
  nearbyAttractions: {
    name: string;
    distance: string;
  }[];
  whyYouWillLoveIt: string[];
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
  testimonials: {
    rating: number;
    text: string;
    author: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const property: PropertyData = {
  houseName: "Villa Ammolofi Retreat",
  tagline: "Steps from the sea • Family-friendly • Quiet neighborhood",
  locations: ["Ofrynio", "Kavala", "Nea Peramos"],
  nearBeachText: "3 min walk to the beach",
  beachDistanceMeters: 150,
  capacity: 6,
  bedrooms: 3,
  bathrooms: 2,
  galleryImages: [
    "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  ],
  amenities: {
    comfort: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Smart TV",
      "Heating",
      "Iron & Board",
    ],
    kitchen: [
      "Full Kitchen",
      "Refrigerator",
      "Microwave",
      "Coffee Maker",
      "Dishwasher",
    ],
    outdoor: [
      "Private Garden",
      "BBQ Grill",
      "Outdoor Furniture",
      "Free Parking",
      "Sea View Balcony",
    ],
    family: [
      "Baby Cot",
      "High Chair",
      "Beach Toys",
      "Board Games",
      "Washing Machine",
    ],
  },
  contacts: {
    whatsapp: "+306941234567",
    viber: "+306941234567",
    telegram: "villaammolofi",
    facebook: "villaammolofi",
    instagram: "villaammolofi",
    phone: "+306941234567",
    email: "stay@villaammolofi.gr",
    ownerName: "Yannis Papadopoulos",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12234.076177814546!2d24.193!3d40.8494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aed99d8c8b8a9d%3A0x500bd2ce2b9ba30!2sOfrinio!5e0!3m2!1sen!2sgr!4v1699999999999",
  nearbyAttractions: [
    { name: "Ammolofi Beach", distance: "150m (3 min walk)" },
    { name: "Kavala Old Town", distance: "20 km (25 min)" },
    { name: "Thasos Ferry Port", distance: "22 km (25 min)" },
    { name: "Nea Peramos", distance: "8 km (10 min)" },
    { name: "Philippi Archaeological Site", distance: "30 km" },
    { name: "Kavala Airport (KVA)", distance: "35 km" },
  ],
  whyYouWillLoveIt: [
    "Sandy beach just 150m away – perfect for morning swims",
    "Quiet residential area – peaceful nights guaranteed",
    "Fully equipped kitchen – cook your fresh catches",
    "Private garden & BBQ – great for family gatherings",
    "Easy access to Kavala & Thasos – explore the region",
  ],
  seo: {
    title: "Villa Ammolofi Retreat | Beachfront Vacation Rental in Ofrynio, Greece",
    description:
      "Beautiful family-friendly vacation rental just steps from the sea in Ofrynio, Greece. Near Kavala & Nea Peramos. Book directly with the owner.",
    ogImage: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200",
  },
  testimonials: [
    {
      rating: 5,
      text: "Perfect location! The beach was literally 2 minutes away. Our kids loved it. The house was spotless and had everything we needed.",
      author: "Maria K., Bulgaria",
    },
    {
      rating: 5,
      text: "We stayed for 10 days and didn't want to leave. The owner was very helpful and responsive. Highly recommend for a relaxing vacation!",
      author: "Thomas R., Germany",
    },
    {
      rating: 5,
      text: "Beautiful villa with amazing views. We used the BBQ every evening. Great base for exploring Kavala and day trips to Thasos.",
      author: "Elena P., Romania",
    },
  ],
  faq: [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in is from <strong>3:00 PM</strong> and check-out is until <strong>11:00 AM</strong>. Early check-in or late check-out can be arranged upon request, subject to availability.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes! We offer <strong>free private parking</strong> for up to 2 vehicles within the property grounds. Street parking is also available nearby.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "Small, well-behaved pets are welcome upon prior arrangement. Please let us know in advance so we can prepare accordingly. A small cleaning fee may apply.",
    },
    {
      question: "What about noise and parties?",
      answer:
        "This is a family-friendly property in a quiet residential area. We kindly ask guests to respect quiet hours after <strong>11 PM</strong>. Parties and events are not permitted.",
    },
    {
      question: "How do I pay and is there a deposit?",
      answer:
        "We accept bank transfer, cash, or PayPal. A <strong>30% deposit</strong> is required to confirm your booking, with the remaining balance due upon arrival. A €100 security deposit is collected at check-in and returned after check-out.",
    },
  ],
};
