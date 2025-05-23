import React from "react";
import Script from "next/script";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "North Texas Cutz",
    "image": "https://northtexascutz.com/barber-shop.jpg",
    "@id": "https://northtexascutz.com",
    "url": "https://northtexascutz.com",
    "telephone": "+19403203202",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1100 Dallas Dr Suite 120",
      "addressLocality": "Denton",
      "addressRegion": "TX",
      "postalCode": "76205",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.0998868,
      "longitude": -97.1334790
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/northtexascutz",
      "https://www.instagram.com/northtexascutz"
    ],
    "priceRange": "$$",
    "servesCuisine": "Barber services",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michael Johnson"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
} 