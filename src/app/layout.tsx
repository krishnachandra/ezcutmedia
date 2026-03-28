import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EZ Cut Media | Fast Professional Video Production & Editing Services Hyderabad",
  description: "EZ Cut Media delivers professional short-form video content in under 30 minutes. Reels, Instagram content, wedding videos, and event coverage. Trusted by brands and celebrities in Hyderabad. Starting at ₹1,599.",
  keywords: "video production Hyderabad, Instagram reels, wedding videography, event coverage, social media content creation, fast video editing, professional reels, brand content, celebrity videos, short-form video",
  authors: [{ name: "Rahul Bhagi" }, { name: "EZ Cut Media" }],
  creator: "EZ Cut Media",
  publisher: "EZ Cut Media",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.ezcutmedia.com/",
    title: "EZ Cut Media | Professional Video Editing Services",
    description: "High-quality, fast, and creative video editing for content creators and businesses.",
    images: [
      {
        url: "https://www.ezcutmedia.com/assets/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "EZ Cut Media Showcase",
      },
    ],
  },
  verification: {
    google: "PASTE_GOOGLE_VERIFICATION_CODE_HERE",
    other: {
      "msvalidate.01": "PASTE_BING_VERIFICATION_CODE_HERE",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ Cut Media | Fast Professional Video Production",
    description: "Professional video content in under 30 minutes. Reels, events, weddings. Starting at ₹1,599.",
    images: ["https://ezcutmedia.com/assets/logo-icon.png"],
    creator: "@ezcut_media",
  },
  alternates: {
    canonical: "https://ezcutmedia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO/AEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService", "Service"],
              "@id": "https://ezcutmedia.com",
              "name": "EZ Cut Media",
              "alternateName": "EZCUT Media",
              "description": "Professional video production and editing services specializing in short-form content for social media, events, and brands. We shoot, edit, and deliver content in under 30 minutes.",
              "url": "https://ezcutmedia.com",
              "logo": "https://ezcutmedia.com/assets/logo-icon.png",
              "image": "https://ezcutmedia.com/assets/logo-icon.png",
              "telephone": "+91-9121930521",
              "email": "hello@ezcutmedia.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.3850",
                "longitude": "78.4867"
              },
              "sameAs": [
                "https://instagram.com/ezcut_media"
              ],
              "founder": {
                "@type": "Person",
                "name": "Rahul Bhagi",
                "jobTitle": "Founder & CEO"
              },
              "priceRange": "₹₹",
              "areaServed": {
                "@type": "City",
                "name": "Hyderabad"
              },
              "serviceType": [
                "Video Production",
                "Video Editing",
                "Social Media Content Creation",
                "Event Videography",
                "Wedding Videography",
                "Instagram Reels Production",
                "YouTube Shorts Production",
                "Brand Content Creation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Video Production Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "1-Hour Shoot Package",
                      "description": "Professional video shoot with 1 edited reel delivered in 30 minutes"
                    },
                    "price": "1599",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Creator & Brand Package - Standard",
                      "description": "8 professional reels (4 premium quality) across 5 shooting sessions"
                    },
                    "price": "17999",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Video Packages",
                      "description": "Comprehensive wedding video coverage with up to four event shoots tailored to wedding requirements"
                    },
                    "price": "24999",
                    "priceCurrency": "INR"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50"
              }
            })
          }}
        />

        {/* FAQ Schema for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How fast can EZ Cut Media deliver video content?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "EZ Cut Media delivers professionally edited video content in under 30 minutes. We shoot, edit, and hand over finished reels ready for social media posting within the same session."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of video content does EZ Cut Media produce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in short-form video content including Instagram Reels, YouTube Shorts, wedding videos, event coverage, brand content, and social media advertisements. Our services range from quick 1-hour shoots to comprehensive wedding packages."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are EZ Cut Media's pricing packages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our packages start at ₹1,599 + GST for a 1-hour shoot with 1 reel. We offer Creator & Brand packages ranging from ₹12,999 to ₹25,999, and event packages including Wedding (₹24,999+) and Private Party packages (₹5,499+)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is EZ Cut Media located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "EZ Cut Media is based in Hyderabad, Telangana, India. We serve clients across the city for video production and content creation needs."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
