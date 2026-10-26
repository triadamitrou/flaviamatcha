import { hours, site } from "@/lib/site";

const DAY = {
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
  Sunday: "Su",
} as const;

/** "4 pm" and "9:30 am" into the 24-hour form schema.org wants. */
function to24(t: string) {
  const m = t.match(/^(\d+)(?::(\d+))?\s*(am|pm)$/i);
  if (!m) return t;
  let h = Number(m[1]);
  const min = m[2] ?? "00";
  const pm = m[3].toLowerCase() === "pm";
  if (pm && h !== 12) h += 12;
  if (!pm && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${min}`;
}

export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.fullName,
    legalName: site.legalName,
    description: site.blurb,
    servesCuisine: "Matcha, coffee, bakes",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    sameAs: site.socials.map((s) => s.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.score,
      reviewCount: site.rating.count,
    },
    openingHours: hours.map(
      (h) => `${DAY[h.day as keyof typeof DAY]} ${to24(h.open)}-${to24(h.close)}`,
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
