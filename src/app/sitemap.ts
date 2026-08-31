import type { MetadataRoute } from "next";
import { localeHref } from "@/i18n/config";

const SITE_URL = "https://v-power-tuning.com";

/** Canonical Arabic paths; the English equivalents are derived from them. */
const paths = ["/", "/services", "/about", "/contact", "/erp", "/training", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.flatMap((path) =>
    (["ar", "en"] as const).map((locale) => ({
      url: `${SITE_URL}${localeHref(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${SITE_URL}${localeHref("ar", path)}`,
          en: `${SITE_URL}${localeHref("en", path)}`,
        },
      },
    }))
  );
}
