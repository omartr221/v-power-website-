import type { Locale } from "./config";

/**
 * Strings for the shared chrome (nav, footer, metadata) and the home page.
 * Page-specific dictionaries live in `src/i18n/pages/`.
 */
const dictionaries = {
  ar: {
    meta: {
      title: "V POWER TUNING | ورشة صيانة سيارات احترافية",
      description:
        "ورشة V POWER TUNING لصيانة وإصلاح السيارات - ميكانيك، كهرباء، برمجة، فحص وتشخيص. خبرة واحترافية في خدمة سيارتك.",
      keywords: "ورشة سيارات, صيانة سيارات, ميكانيك, كهرباء سيارات, برمجة سيارات, حمص, سوريا",
    },
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      erp: "نظام ERP",
      training: "التدريب والتوظيف",
      about: "من نحن",
      contact: "تواصل معنا",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      dropdown: [
        {
          label: "للأفراد ومالكي السيارات",
          href: "/services#individuals",
          desc: "قطع غيار، صيانة، تعديل الأداء",
        },
        {
          label: "للشركات والمستثمرين",
          href: "/services#corporate",
          desc: "تجهيز مراكز الصيانة",
        },
      ],
    },
    language: {
      switchTo: "English",
      switchLabel: "EN",
      ariaLabel: "Switch to English",
    },
    footer: {
      tagline:
        "الشريك المتكامل والمعتمد لسيارات مجموعة VAG من قطع الغيار الأصلية إلى تجهيز مراكز الصيانة بالبرامج والمعدات الرسمية.",
      quickLinks: "روابط سريعة",
      contactUs: "تواصل معنا",
      whatsapp: "واتساب",
      instagram: "إنستغرام",
      facebook: "فيسبوك",
      rights: "جميع الحقوق محفوظة.",
    },
    home: {
      eyebrow: "ما نقدّمه",
      moreServices: "المزيد عن خدماتنا",
      heroImageAlt: "ورشة سيارات",
    },
  },
  en: {
    meta: {
      title: "V POWER TUNING | Specialist VAG Service & Tuning",
      description:
        "V POWER TUNING — genuine spare parts, specialized maintenance, performance tuning, and turnkey service centre setup for Volkswagen, Audi, Skoda, Seat, and Porsche.",
      keywords:
        "VAG specialist, car service, spare parts, performance tuning, VCDS, ODIS, workshop setup, Homs, Syria",
    },
    nav: {
      home: "Home",
      services: "Services",
      erp: "ERP System",
      training: "Training & Talent",
      about: "About Us",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      dropdown: [
        {
          label: "For Individuals & Car Owners",
          href: "/services#individuals",
          desc: "Spare parts, maintenance, performance tuning",
        },
        {
          label: "For Businesses & Investors",
          href: "/services#corporate",
          desc: "Service center setup",
        },
      ],
    },
    language: {
      switchTo: "العربية",
      switchLabel: "AR",
      ariaLabel: "التبديل إلى العربية",
    },
    footer: {
      tagline:
        "Your complete, certified partner for VAG Group vehicles — from genuine spare parts to equipping service centers with official software and equipment.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      rights: "All rights reserved.",
    },
    home: {
      eyebrow: "What We Offer",
      moreServices: "More About Our Services",
      heroImageAlt: "Car workshop",
    },
  },
} as const;

export type UiDictionary = (typeof dictionaries)["ar"];

export const getUi = (locale: Locale) => dictionaries[locale] as UiDictionary;
