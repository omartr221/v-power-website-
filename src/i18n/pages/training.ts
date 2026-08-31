import type { Locale } from "../config";

/**
 * All copy for the Training & Recruitment page.
 */
const dictionaries = {
  ar: {
    eyebrow: "خدماتنا",
    title: "التدريب الفني والتوظيف",
    intro:
      "نؤمن بأن تطوير السوق يبدأ بتطوير الكوادر البشرية. لذلك نقدم برامج تدريبية متخصصة، ونعمل على تأهيل المتدربين وربطهم بفرص العمل المحلية والدولية.",
    programs: [
      {
        title: "برامج التدريب الفني",
        desc: "برامج تدريبية وفق مناهج الشركة الصانعة، تغطي جميع المستويات من المبتدئ إلى المتخصص.",
        items: [
          "الصيانة الميكانيكية: محركات، ناقلات الحركة، التعليق، الفرامل.",
          "التشخيص الإلكتروني: استخدام VCDS، ODIS، وأجهزة VAS الأصلية.",
          "تعديل الأداء: برمجة ECU من Stage 1 حتى Stage 3.",
          "أنظمة السيارات الحديثة: الكهرباء، الإلكترونيات، أنظمة ADAS.",
          "شهادات إتمام تدريب معتمدة لكل دورة.",
        ],
      },
      {
        title: "منصة التقييم الذكية",
        desc: "منصة رقمية متطورة مدعومة بالذكاء الاصطناعي لتقييم المتقدمين بشكل شامل وموضوعي.",
        items: [
          "جمع بيانات شاملة عن المتقدم: الخبرات، المهارات، المؤهلات العلمية.",
          "امتحان إلكتروني ذكي يختبر المهارات التقنية والمهنية والشخصية.",
          "تقييم مستوى الذكاء والقدرات التحليلية حسب متطلبات الوظيفة.",
          "مقابلة حقيقية لتقييم المتقدم بشكل فعلي بعد الاختبار الإلكتروني.",
          "تقرير تفصيلي يحدد نقاط القوة والضعف لكل متقدم.",
        ],
      },
      {
        title: "برامج تطوير الكفاءات",
        desc: "لا نكتفي بالتقييم، بل نعمل على تطوير المتدربين ورفع مستواهم.",
        items: [
          "تحديد نقاط الضعف الفردية لكل متدرب.",
          "برامج تدريبية مكثفة ومخصصة لتقوية نقاط الضعف.",
          "متابعة مستمرة للتقدم طوال فترة التدريب.",
          "تقييم دوري لقياس مستوى التحسن.",
          "دعم المتدربين حتى الوصول للمستوى المطلوب.",
        ],
      },
      {
        title: "منصة التوظيف والربط",
        desc: "نربط المتدربين المؤهلين بفرص العمل المحلية والدولية بشكل احترافي.",
        items: [
          "قاعدة بيانات للكوادر المؤهلة متاحة للشركات والمستثمرين.",
          "ربط المتدربين المؤهلين بمراكز الصيانة الباحثة عن كفاءات.",
          "توصيل الكوادر بالمستثمرين المحليين والدوليين.",
          "دعم المتدرب في عملية التقديم والمقابلات.",
          "متابعة ما بعد التوظيف لضمان النجاح.",
        ],
      },
    ],
    cta: {
      title: "هل أنت مهتم بالتدريب أو التوظيف؟",
      text: "سواء كنت تبحث عن تطوير مهاراتك، أو شركة تبحث عن كوادر فنية مؤهلة — تواصل معنا اليوم.",
      button: "تواصل معنا",
    },
  },
  en: {
    eyebrow: "Our Services",
    title: "Technical Training & Recruitment",
    intro:
      "We believe that developing the market starts with developing its people. That is why we offer specialized training programs, qualify our trainees, and connect them with local and international job opportunities.",
    programs: [
      {
        title: "Technical Training Programs",
        desc: "Training programs built on manufacturer curricula, covering every level from beginner to specialist.",
        items: [
          "Mechanical maintenance: engines, transmissions, suspension, brakes.",
          "Electronic diagnostics: working with VCDS, ODIS, and genuine VAS devices.",
          "Performance tuning: ECU programming from Stage 1 through Stage 3.",
          "Modern vehicle systems: electrical, electronics, and ADAS systems.",
          "Certified training completion certificates for every course.",
        ],
      },
      {
        title: "AI-Powered Assessment Platform",
        desc: "An advanced AI-powered digital platform that evaluates applicants comprehensively and objectively.",
        items: [
          "Comprehensive applicant data collection: experience, skills, and academic qualifications.",
          "A smart online exam that tests technical, professional, and personal skills.",
          "Assessment of intelligence and analytical ability against the requirements of the role.",
          "A live interview to assess the applicant in practice after the online exam.",
          "A detailed report identifying each applicant's strengths and weaknesses.",
        ],
      },
      {
        title: "Skills Development Programs",
        desc: "We do not stop at assessment — we work to develop our trainees and raise their level.",
        items: [
          "Identifying each trainee's individual weaknesses.",
          "Intensive, tailored training programs to strengthen those weaknesses.",
          "Continuous progress tracking throughout the training period.",
          "Regular assessments to measure improvement.",
          "Supporting trainees until they reach the required level.",
        ],
      },
      {
        title: "Recruitment & Matching Platform",
        desc: "We connect qualified trainees with local and international job opportunities in a professional way.",
        items: [
          "A database of qualified talent available to companies and investors.",
          "Matching qualified trainees with service centers looking for skilled staff.",
          "Connecting talent with local and international investors.",
          "Supporting trainees through the application and interview process.",
          "Post-placement follow-up to ensure success.",
        ],
      },
    ],
    cta: {
      title: "Interested in Training or Recruitment?",
      text: "Whether you are looking to develop your own skills or you are a company searching for qualified technicians — get in touch with us today.",
      button: "Contact Us",
    },
  },
} as const;

export type TrainingStrings = (typeof dictionaries)["ar"];

export const getTrainingStrings = (locale: Locale) => dictionaries[locale] as TrainingStrings;
