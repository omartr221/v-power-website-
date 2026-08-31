import type { Locale } from "../config";

/**
 * Chrome strings for the About page that are not part of the JSON content files.
 */
const dictionaries = {
  ar: {
    eyebrow: "من نحن",
    valuesEyebrow: "مبادئنا",
    valuesTitle: "قيمنا الأساسية",
  },
  en: {
    eyebrow: "About Us",
    valuesEyebrow: "Our Principles",
    valuesTitle: "Our Core Values",
  },
} as const;

export type AboutStrings = (typeof dictionaries)["ar"];

export const getAboutStrings = (locale: Locale) => dictionaries[locale] as AboutStrings;
