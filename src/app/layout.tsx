import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientLanguageProvider } from "@/components/ClientLanguageProvider";
import { property } from "@/content/property";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: property.seo.title,
  description: property.seo.description,
  openGraph: {
    title: property.seo.title,
    description: property.seo.description,
    images: [property.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: property.seo.title,
    description: property.seo.description,
    images: [property.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ClientLanguageProvider>
          {children}
        </ClientLanguageProvider>
      </body>
    </html>
  );
}