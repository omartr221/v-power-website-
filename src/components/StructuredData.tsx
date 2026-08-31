import { localeHref, type Locale } from "@/i18n/config";
import { getContactContent } from "@/i18n/content";
import { SITE_URL } from "@/i18n/metadata";

/** Coordinates of the workshop, taken from the Google Maps place link. */
const GEO = { latitude: 34.678033, longitude: 36.6413902 };

/** Saturday to Thursday, 09:00-17:00 — closed Friday. */
const OPENING_DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

const BRANDS = ["Volkswagen", "Audi", "Skoda", "Seat", "Porsche"];

/**
 * AutoRepair schema for the workshop. This is what makes the business eligible
 * for Google's local results and knowledge panel, which matter far more than
 * plain text ranking for searches like "صيانة فولكس فاغن حمص".
 */
export default function StructuredData({ locale }: { locale: Locale }) {
  const contact = getContactContent(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE_URL}/#business`,
    name: "V POWER TUNING",
    url: `${SITE_URL}${localeHref(locale, "/")}`,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo-v2.png`,
    telephone: contact.phone.replace(/\s/g, ""),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        locale === "ar"
          ? "أوتوستراد التحويلة - تقاطع تل الشور"
          : "Al-Tahwileh Highway - Tal Al-Shour Junction",
      addressLocality: locale === "ar" ? "حمص" : "Homs",
      addressCountry: "SY",
    },
    geo: { "@type": "GeoCoordinates", ...GEO },
    hasMap: contact.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: OPENING_DAYS,
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [contact.instagram, contact.facebook],
    areaServed: [
      { "@type": "Country", name: "Syria" },
      { "@type": "City", name: locale === "ar" ? "حمص" : "Homs" },
    ],
    brand: BRANDS.map((name) => ({ "@type": "Brand", name })),
    knowsAbout: BRANDS,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
