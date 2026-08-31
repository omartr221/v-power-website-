import type { Metadata } from "next";
import { localeHref, type Locale } from "./config";
import { getPageSeo } from "./seo";
import { getUi } from "./ui";

export const SITE_URL = "https://v-power-tuning.com";
const OG_IMAGE = "/og-image.png";

const ogLocale: Record<Locale, string> = { ar: "ar_SY", en: "en_US" };

/**
 * Builds page metadata: a unique title/description per page, hreflang
 * alternates so Google serves the right language, and Open Graph tags so
 * shared links render a card instead of a bare URL.
 *
 * `path` is the canonical Arabic path, e.g. "/services".
 */
export function buildMetadata(
  locale: Locale,
  path: string,
  overrides?: { title?: string; description?: string }
): Metadata {
  const ui = getUi(locale);
  const seo = getPageSeo(locale, path);

  const title = overrides?.title ?? seo?.title ?? ui.meta.title;
  const description = overrides?.description ?? seo?.description ?? ui.meta.description;
  const url = localeHref(locale, path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ar: localeHref("ar", path),
        en: localeHref("en", path),
        "x-default": localeHref("ar", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: "V POWER TUNING",
      title,
      description,
      url,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "ar" ? "en" : "ar"],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "V POWER TUNING" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
