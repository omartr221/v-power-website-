import type { Locale } from "./config";

export interface PageSeo {
  title: string;
  description: string;
}

/**
 * Per-page title and description, keyed by the canonical Arabic path.
 * Every page needs its own pair: identical metadata across pages makes Google
 * treat them as near-duplicates and index only some of them.
 *
 * Titles lead with intent + brands + city, which is what local commercial
 * searches ("صيانة فولكس فاغن حمص", "Audi service Homs") actually match on.
 */
const pageSeo: Record<Locale, Record<string, PageSeo>> = {
  ar: {
    "/": {
      title: "V POWER TUNING | صيانة وقطع غيار فولكس فاغن وأودي وسكودا - حمص",
      description:
        "مركز متخصص بسيارات مجموعة VAG في حمص: قطع غيار أصلية، صيانة شاملة، تعديل أداء، وتجهيز مراكز الصيانة. فولكس فاغن، أودي، سكودا، سيات، بورشه.",
    },
    "/services": {
      title: "خدماتنا | قطع غيار وصيانة وتعديل أداء سيارات VAG - V POWER TUNING",
      description:
        "قطع غيار أصلية، صيانة متخصصة بأجهزة VAS وبرامج VCDS و ODIS، تعديل أداء المحركات، وحلول متكاملة لتجهيز مراكز الصيانة للمستثمرين في سوريا والمنطقة.",
    },
    "/about": {
      title: "من نحن | V POWER TUNING - أكبر مركز صيانة VAG في حمص",
      description:
        "قصة V POWER TUNING: من توريد قطع تعديل الأداء إلى أكبر مركز لصيانة سيارات VAG في حمص، وشريك وموزع معتمد لقطع الغيار في السوق السورية.",
    },
    "/contact": {
      title: "تواصل معنا | V POWER TUNING - حمص، سوريا",
      description:
        "تواصل مع V POWER TUNING في حمص - أوتوستراد التحويلة، تقاطع تل الشور. هاتف وواتساب وبريد إلكتروني للاستفسار عن قطع الغيار والصيانة وتعديل الأداء.",
    },
    "/erp": {
      title: "نظام ERP واستشارات إدارية لمراكز صيانة السيارات | V POWER TUNING",
      description:
        "نظام ERP مصمم خصيصاً لورش السيارات: إدارة المخزون، المحاسبة، تذاكر الصيانة، وأرشفة كاملة لكل سيارة وفني، مع تحليل بيانات بالذكاء الاصطناعي.",
    },
    "/training": {
      title: "التدريب الفني والتوظيف لفنيي السيارات | V POWER TUNING",
      description:
        "برامج تدريبية معتمدة وفق مناهج الشركة الصانعة لمهندسي وفنيي سيارات VAG، ومنصة رقمية بالذكاء الاصطناعي لتقييم المهارات وربط الكوادر بفرص العمل.",
    },
    "/blog": {
      title: "المدونة والأخبار | V POWER TUNING",
      description:
        "مقالات ونصائح تقنية حول صيانة سيارات مجموعة VAG، تعديل الأداء، التشخيص، وأخبار V POWER TUNING.",
    },
  },
  en: {
    "/": {
      title: "V POWER TUNING | VAG Specialist in Homs, Syria - VW, Audi, Skoda",
      description:
        "Specialist center for VAG Group vehicles in Homs, Syria: genuine spare parts, comprehensive maintenance, performance tuning, and turnkey service center setup.",
    },
    "/services": {
      title: "Services | VAG Spare Parts, Maintenance & Performance Tuning",
      description:
        "Genuine spare parts, specialized maintenance with VAS hardware and VCDS/ODIS software, engine performance tuning, and complete service center setup for investors.",
    },
    "/about": {
      title: "About Us | V POWER TUNING - VAG Service Center in Homs, Syria",
      description:
        "From providing performance parts to running the largest VAG service center in Homs, as a leading authorized spare parts distributor in Syria.",
    },
    "/contact": {
      title: "Contact | V POWER TUNING - Homs, Syria",
      description:
        "Get in touch with V POWER TUNING in Homs, Syria - Al-Tahwileh Highway, Tal Al-Shour Junction. Phone, WhatsApp, and email for parts, service, and tuning enquiries.",
    },
    "/erp": {
      title: "ERP System & Consulting for Auto Service Centers | V POWER TUNING",
      description:
        "An ERP built for automotive workshops: inventory, accounting, service tickets, and a full archive of every vehicle and technician, with AI-powered data analysis.",
    },
    "/training": {
      title: "Technical Training & Recruitment for Auto Technicians | V POWER TUNING",
      description:
        "Certified training programs based on manufacturer curricula for VAG engineers and technicians, plus an AI-powered platform for skills assessment and recruitment.",
    },
    "/blog": {
      title: "Blog & News | V POWER TUNING",
      description:
        "Technical articles and advice on VAG vehicle maintenance, performance tuning, diagnostics, and news from V POWER TUNING.",
    },
  },
};

export const getPageSeo = (locale: Locale, path: string): PageSeo | undefined =>
  pageSeo[locale][path];
