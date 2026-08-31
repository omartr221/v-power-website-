export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

/** Arabic is served from the root; English lives under /en. */
export const defaultLocale: Locale = "ar";

export const direction = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/**
 * Builds an href for a route in the given locale.
 * `path` is always the canonical Arabic path, e.g. "/services" or "/services#corporate".
 */
export function localeHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Maps a pathname to its equivalent in the other locale, for the language switcher. */
export function switchLocaleHref(current: Locale, pathname: string): string {
  if (current === "en") {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
    return stripped || "/";
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}
