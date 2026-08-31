import type { Locale } from "../config";

/**
 * Strings for the Blog page, including the placeholder article entries.
 */
const dictionaries = {
  ar: {
    eyebrow: "المعرفة والأخبار",
    title: "المدونة والأخبار",
    subtitle:
      "مقالات تقنية، نصائح صيانة، وأخبار V POWER TUNING — كل ما يخص عالم سيارات VAG في مكان واحد.",
    bannerTitle: "المحتوى قيد الإعداد",
    bannerText:
      "نعمل على إعداد مقالات تقنية احترافية. تابعونا قريباً لمعرفة كل جديد في عالم VAG.",
    upcomingTitle: "مقالات قادمة",
    posts: [
      {
        category: "نصائح الصيانة",
        title: "كيف تحافظ على محرك سيارتك VAG في أفضل حالة؟",
        excerpt:
          "مقال قادم يتضمن أهم النصائح العملية للحفاظ على أداء محركات فولكس واجن وأودي وسكودا وسيات وبورشه.",
        date: "قريباً",
        readTime: "5 دقائق",
      },
      {
        category: "تعديل الأداء",
        title: "ما الفرق بين Stage 1 و Stage 2 و Stage 3 في برمجة ECU؟",
        excerpt:
          "دليل شامل يشرح الفروقات العملية بين مراحل تعديل الأداء وما يناسب كل نوع من المستخدمين.",
        date: "قريباً",
        readTime: "7 دقائق",
      },
      {
        category: "أخبار الشركة",
        title: "V POWER TUNING تطلق منصة التوظيف الذكية المدعومة بالذكاء الاصطناعي",
        excerpt:
          "أحدث منصة في السوق السورية لتقييم الكوادر الفنية وربطهم بأصحاب العمل بطريقة موضوعية ودقيقة.",
        date: "قريباً",
        readTime: "4 دقائق",
      },
      {
        category: "نظام ERP",
        title: "لماذا تحتاج ورشتك إلى نظام ERP متخصص وليس برنامج محاسبة عام؟",
        excerpt:
          "الفرق الجوهري بين نظام ERP المصمم لمراكز الصيانة وبرامج المحاسبة العامة، وكيف يؤثر ذلك على كفاءة عملك.",
        date: "قريباً",
        readTime: "6 دقائق",
      },
      {
        category: "تشخيص الأعطال",
        title: "كيف يستخدم VCDS وODIS في تشخيص أعطال سيارات VAG؟",
        excerpt:
          "شرح مبسط لأدوات التشخيص الرسمية وكيف تساعد في إيجاد الأعطال الدقيقة في وقت قياسي.",
        date: "قريباً",
        readTime: "8 دقائق",
      },
      {
        category: "تجهيز الورش",
        title: "دليل المستثمر: كيف تجهز مركز صيانة سيارات VAG من الصفر؟",
        excerpt:
          "الخطوات الكاملة من التخطيط إلى التشغيل، شاملاً المعدات والبرامج والكوادر البشرية.",
        date: "قريباً",
        readTime: "10 دقائق",
      },
    ],
    ctaTitle: "تواصل معنا للاستفسارات التقنية",
    ctaText: "لديك سؤال تقني؟ فريقنا من المهندسين والفنيين المتخصصين جاهز للإجابة.",
    ctaButton: "تواصل معنا",
  },
  en: {
    eyebrow: "Knowledge & News",
    title: "Blog & News",
    subtitle:
      "Technical articles, maintenance tips, and V POWER TUNING news — everything about the world of VAG vehicles in one place.",
    bannerTitle: "Content In Preparation",
    bannerText:
      "We are working on a series of professional technical articles. Follow us to stay up to date with everything new in the VAG world.",
    upcomingTitle: "Upcoming Articles",
    posts: [
      {
        category: "Maintenance Tips",
        title: "How Do You Keep Your VAG Engine in Peak Condition?",
        excerpt:
          "An upcoming article covering the most important practical tips for maintaining the performance of Volkswagen, Audi, Skoda, Seat, and Porsche engines.",
        date: "Coming Soon",
        readTime: "5 min read",
      },
      {
        category: "Performance Tuning",
        title: "What Is the Difference Between Stage 1, Stage 2, and Stage 3 ECU Tuning?",
        excerpt:
          "A comprehensive guide explaining the practical differences between performance tuning stages and which one suits each type of driver.",
        date: "Coming Soon",
        readTime: "7 min read",
      },
      {
        category: "Company News",
        title: "V POWER TUNING Launches Its AI-Powered Smart Recruitment Platform",
        excerpt:
          "The newest platform in the Syrian market for assessing technical talent and connecting them with employers objectively and precisely.",
        date: "Coming Soon",
        readTime: "4 min read",
      },
      {
        category: "ERP System",
        title: "Why Does Your Workshop Need a Specialized ERP System Rather Than Generic Accounting Software?",
        excerpt:
          "The fundamental difference between an ERP system designed for service centers and general accounting software, and how it affects the efficiency of your business.",
        date: "Coming Soon",
        readTime: "6 min read",
      },
      {
        category: "Fault Diagnostics",
        title: "How Are VCDS and ODIS Used to Diagnose Faults on VAG Vehicles?",
        excerpt:
          "A straightforward explanation of the official diagnostic tools and how they help pinpoint faults precisely in record time.",
        date: "Coming Soon",
        readTime: "8 min read",
      },
      {
        category: "Workshop Setup",
        title: "The Investor's Guide: How to Build a VAG Service Center From Scratch?",
        excerpt:
          "The complete steps from planning to operation, covering equipment, software, and technical staff.",
        date: "Coming Soon",
        readTime: "10 min read",
      },
    ],
    ctaTitle: "Contact Us for Technical Enquiries",
    ctaText:
      "Have a technical question? Our team of specialized engineers and technicians is ready to answer.",
    ctaButton: "Contact Us",
  },
} as const;

export type BlogStrings = (typeof dictionaries)["ar"];

export const getBlogStrings = (locale: Locale) => dictionaries[locale] as BlogStrings;
