import type { Metadata } from "next";
import { localeHref, type Locale } from "./config";
import { getUi } from "./ui";

const SITE_URL = "https://v-power-tuning.com";

/**
 * Builds page metadata with the hreflang alternates Google needs to serve the
 * right language version. `path` is the canonical Arabic path, e.g. "/services".
 */
export function buildMetadata(
  locale: Locale,
  path: string,
  overrides?: { title?: string; description?: string }
): Metadata {
  const ui = getUi(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: overrides?.title ?? ui.meta.title,
    description: overrides?.description ?? ui.meta.description,
    keywords: ui.meta.keywords,
    alternates: {
      canonical: localeHref(locale, path),
      languages: {
        ar: localeHref("ar", path),
        en: localeHref("en", path),
        "x-default": localeHref("ar", path),
      },
    },
  };
}
