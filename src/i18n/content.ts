import type { Locale } from "./config";

import arHome from "../../content/ar/home.json";
import enHome from "../../content/en/home.json";
import arAbout from "../../content/ar/about.json";
import enAbout from "../../content/en/about.json";
import arContact from "../../content/ar/contact.json";
import enContact from "../../content/en/contact.json";

export interface HomeService {
  title: string;
  desc: string;
  bullets?: string[];
}

export interface HomeContent {
  heroImage: string;
  heroTitle: string;
  heroBrands: string;
  heroDescriptionIntro: string;
  heroDescriptionLines: string[];
  heroButton1: string;
  heroButton2: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesBrands: string;
  services: HomeService[];
}

export interface AboutValue {
  title: string;
  desc: string;
}

export interface AboutSection {
  title: string;
  layout: "paragraphs" | "bullets" | "cta";
  intro?: string;
  items: string[];
}

export interface AboutContent {
  pageTitle: string;
  pageSubtitle: string;
  storyTitle: string;
  storyParagraph1: string;
  storyParagraph2: string;
  storyParagraph3: string;
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
  values: AboutValue[];
  extraSections: AboutSection[];
}

export interface ContactContent {
  address: string;
  mapsUrl: string;
  email: string;
  phone: string;
  whatsapp: string;
  workingHours: string;
  instagram: string;
  facebook: string;
}

const home = { ar: arHome, en: enHome } as unknown as Record<Locale, HomeContent>;
const about = { ar: arAbout, en: enAbout } as unknown as Record<Locale, AboutContent>;
const contact = { ar: arContact, en: enContact } as unknown as Record<Locale, ContactContent>;

export const getHomeContent = (locale: Locale) => home[locale];
export const getAboutContent = (locale: Locale) => about[locale];
export const getContactContent = (locale: Locale) => contact[locale];
