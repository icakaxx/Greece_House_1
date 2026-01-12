"use client";

import { useState } from "react";
import { property } from "@/content/property";

export default function Contact() {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(field);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const sendWhatsAppInquiry = () => {
    let message = `Hi! I'm interested in ${property.houseName}.`;
    if (checkinDate && checkoutDate) {
      message += `\n\nDates: ${checkinDate} to ${checkoutDate}`;
    }
    message += `\nGuests: ${guests}`;
    message += `\n\nIs the villa available?`;

    const phoneNumber = property.contacts.whatsapp.replace(/\+/g, "");
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-sand">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center text-primary mb-4">
          Contact the Owner
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Book directly and save – no platform fees!
        </p>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-display">
              {property.contacts.ownerName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-primary">
                {property.contacts.ownerName}
              </h3>
              <p className="text-gray-600">Property Owner</p>
              <p className="text-sm text-gray-500 mt-1">
                Usually responds within 1 hour
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-primary">{property.contacts.phone}</p>
              </div>
              <button
                onClick={() => copyToClipboard(property.contacts.phone, "phone")}
                className="text-sm text-accent hover:underline"
              >
                {copied === "phone" ? "Copied!" : "Copy"}
              </button>
            </div>
            {property.contacts.email && (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-primary">{property.contacts.email}</p>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(property.contacts.email!, "email")
                  }
                  className="text-sm text-accent hover:underline"
                >
                  {copied === "email" ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
          </div>

          {/* Check Availability Form */}
          <div className="bg-primary rounded-xl p-6 text-white">
            <h4 className="font-semibold mb-4 text-center">Check Availability</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-sm text-white/70 block mb-1">Check-in</label>
                <input
                  type="date"
                  value={checkinDate}
                  onChange={(e) => setCheckinDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 block mb-1">Check-out</label>
                <input
                  type="date"
                  value={checkoutDate}
                  onChange={(e) => setCheckoutDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 block mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {[...Array(property.capacity)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} guest{i > 0 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={sendWhatsAppInquiry}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
