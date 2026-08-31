import type { Locale } from "../config";

/**
 * Copy for the ERP / management consulting page.
 */
const dictionaries = {
  ar: {
    header: {
      eyebrow: "خدماتنا",
      title: "الاستشارات الإدارية ونظام ERP",
      intro:
        "نقدم للمستثمرين وأصحاب مراكز الصيانة والشركات الاستشارات الإدارية المتخصصة، بالإضافة إلى نظام إداري متكامل (ERP) صممناه خصيصاً لمراكز صيانة السيارات، وليس مجرد برنامج محاسبة عام.",
    },
    consulting: {
      title: "الاستشارات الإدارية",
      desc: "نقدم دراسات متخصصة لتحسين أداء مراكز الصيانة، بدءاً من الهيكلة التنظيمية وصولاً إلى إدارة العمليات.",
      featuresTitle: "ما نقدمه",
      features: [
        "الهيكلة التنظيمية: تصميم هيكل تنظيمي يناسب حجم ونشاط مركز الصيانة.",
        "التوصيفات الوظيفية: تحديد المهام والمسؤوليات لكل وظيفة بوضوح.",
        "مخططات تدفق العمل (Flow Charts): رسم خرائط لسير العمليات اليومية لضمان سلاسة العمل.",
        "تحسين العمليات: تحليل العمليات الحالية وتقديم حلول لزيادة الكفاءة وتقليل الهدر.",
        "إدارة الموارد البشرية: تطوير سياسات التوظيف، التدريب، التحفيز، وتقييم الأداء.",
      ],
    },
    modules: {
      eyebrow: "النظام",
      title: "نظام ERP المتكامل لمراكز الصيانة",
      subtitle:
        "طورناه خصيصاً لمراكز صيانة السيارات — نظام مرن وقابل للتعديل حسب احتياجات كل مركز صيانة.",
      items: [
        {
          title: "بطاقة السيارة الشاملة",
          desc: "ملف كامل لكل سيارة يحتوي على جميع البيانات الفنية، سجل الصيانة الكامل، الأعطال السابقة، والإصلاحات المنفذة — أرشيف دائم قابل للرجوع إليه في أي وقت.",
        },
        {
          title: "بطاقة العامل المتكاملة",
          desc: "تسجيل تفصيلي لكافة العمليات التي يقوم بها كل عامل، لتحليل أدائه الفعلي وحساب الحوافز الشهرية بدقة وشفافية تامة.",
        },
        {
          title: "توثيق العمليات والطلبيات",
          desc: "توثيق شامل من لحظة دخول السيارة إلى المركز، مروراً بعمليات الصيانة والتشخيص، وصولاً إلى طلبيات قطع الغيار بين الأقسام.",
        },
        {
          title: "حساب التكاليف بدقة",
          desc: "حساب تكلفة كل إصلاح بناءً على ساعات العمل الفعلية وقطع الغيار المستخدمة، مع إصدار فواتير دقيقة وشفافة للعملاء.",
        },
        {
          title: "تحليل البيانات بالذكاء الاصطناعي",
          desc: "تحليل أداء العمال، كفاءة العمليات، واتجاهات الأعطال باستخدام تقنيات الذكاء الاصطناعي، لاتخاذ قرارات مبنية على بيانات حقيقية.",
        },
        {
          title: "أرشفة كاملة وأمان البيانات",
          desc: "حفظ أرشيف كامل لكل سيارة وكل عامل، مع أمان عالٍ للبيانات وإمكانية الوصول من أي مكان عبر واجهة سهلة الاستخدام.",
        },
      ],
    },
    ai: {
      title: "مدعوم بالذكاء الاصطناعي",
      desc: "نظامنا لا يكتفي بتسجيل البيانات، بل يحللها باستخدام تقنيات الذكاء الاصطناعي لاكتشاف الأنماط، وتحديد فرص التحسين، ومساعدتك على اتخاذ قرارات أفضل وأسرع.",
    },
    cta: {
      title: "هل تريد تطوير إدارة مركزك؟",
      desc: "سواء كنت تبحث عن استشارات إدارية أو نظام ERP متكامل — تواصل معنا ونصمم لك الحل المناسب.",
      button: "تواصل معنا",
    },
  },
  en: {
    header: {
      eyebrow: "Our Services",
      title: "Management Consulting & ERP Systems",
      intro:
        "We provide investors, service center owners, and companies with specialized management consulting, along with a complete ERP system built specifically for automotive service centers — not just another general accounting package.",
    },
    consulting: {
      title: "Management Consulting",
      desc: "We deliver specialized studies to improve service center performance, from organizational structure through to day-to-day operations management.",
      featuresTitle: "What We Offer",
      features: [
        "Organizational structure: designing an org chart that fits the size and activity of your service center.",
        "Job descriptions: defining the tasks and responsibilities of every role with complete clarity.",
        "Workflow flow charts: mapping daily operations end to end to keep the workshop running smoothly.",
        "Process optimization: analyzing current operations and delivering solutions that increase efficiency and reduce waste.",
        "Human resources management: developing hiring, training, incentive, and performance-review policies.",
      ],
    },
    modules: {
      eyebrow: "The System",
      title: "An Integrated ERP for Service Centers",
      subtitle:
        "Purpose-built for automotive service centers — a flexible system that adapts to the needs of each workshop.",
      items: [
        {
          title: "Complete Vehicle Record",
          desc: "A full file for every vehicle containing all technical data, the complete service history, previous faults, and the repairs carried out — a permanent archive you can refer back to at any time.",
        },
        {
          title: "Integrated Technician Record",
          desc: "Detailed logging of every operation performed by each technician, so you can analyze real performance and calculate monthly incentives with precision and full transparency.",
        },
        {
          title: "Operations & Parts Requisitions",
          desc: "Comprehensive documentation from the moment a vehicle enters the center, through servicing and diagnostics, all the way to spare parts requisitions between departments.",
        },
        {
          title: "Precise Cost Calculation",
          desc: "Calculate the cost of every repair based on actual labor hours and the parts used, and issue accurate, transparent invoices to your customers.",
        },
        {
          title: "AI-Powered Data Analysis",
          desc: "Analyze technician performance, process efficiency, and fault trends using artificial intelligence, so decisions are based on real data.",
        },
        {
          title: "Full Archiving & Data Security",
          desc: "Keep a complete archive for every vehicle and every technician, with strong data security and access from anywhere through an easy-to-use interface.",
        },
      ],
    },
    ai: {
      title: "Powered by Artificial Intelligence",
      desc: "Our system does not simply record data — it analyzes it with artificial intelligence to surface patterns, identify opportunities for improvement, and help you make better decisions faster.",
    },
    cta: {
      title: "Ready to Elevate How Your Center Is Run?",
      desc: "Whether you are looking for management consulting or a complete ERP system, get in touch and we will design the right solution for you.",
      button: "Contact Us",
    },
  },
} as const;

export type ErpStrings = (typeof dictionaries)["ar"];

export const getErpStrings = (locale: Locale) => dictionaries[locale] as ErpStrings;
