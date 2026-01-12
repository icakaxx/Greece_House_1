# Villa Ammolofi Retreat

A modern, high-converting single static page (SSP) website for a Greek vacation rental property.

## Features

- 🏖️ Mobile-first, responsive design
- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS styling
- 📱 Floating contact buttons (WhatsApp, Viber, Telegram, Facebook, Instagram, Phone)
- 🖼️ Image gallery with lightbox
- 🗺️ Embedded Google Maps
- 📊 SEO optimized with JSON-LD schema
- 🚀 Static site generation (SSG)
- 🔍 TypeScript for type safety

## Getting Started

### Install dependencies:

```bash
npm install
```

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production:

```bash
npm run build
```

This will generate a static site in the `out` directory.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── QuickHighlights.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   ├── Amenities.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── MapEmbed.tsx
│   │   ├── FloatingContactButtons.tsx
│   │   └── Footer.tsx
│   └── content/
│       └── property.ts      # Content configuration
├── public/                  # Static assets
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

Edit `src/content/property.ts` to update:
- House name and tagline
- Contact information
- Gallery images
- Amenities
- Location details
- Nearby attractions

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display + Inter)

## License

Private - All rights reserved
