import type { Locale } from "../config";

/**
 * All copy for the Services page, grouped by page section.
 * Icons stay in the view; this file holds strings only.
 */
const dictionaries = {
  ar: {
    header: {
      eyebrow: "خدماتنا",
      title: "حلول متكاملة ومتخصصة لسيارات مجموعة VAG",
      intro:
        "نقدم في V POWER TUNING مجموعة متكاملة من الخدمات التي تلبي احتياجات مالكي سيارات فولكس واجن، أودي، سكودا، سيات، وبورشه، سواء كنتم أفراداً تبحثون عن الصيانة والتعديل، أو شركات ومستثمرين ترغبون في تجهيز مراكز الصيانة أو تطوير أعمالكم.",
      subIntro:
        "معتمدون على خبرة متراكمة في مجال سيارات VAG، وفريق من المهندسين والفنيين المتخصصين، وأحدث المعدات والبرامج التشخيصية، بالإضافة إلى استخدام تقنيات الذكاء الاصطناعي في عملياتنا التشخيصية والإدارية، لنقدم لكم خدمات لا تضاهى.",
    },
    sections: {
      individualsTitle: "للأفراد ومالكي السيارات",
      corporateTitle: "للشركات والمستثمرين ومراكز الصيانة",
      whatWeOffer: "ما نقدمه",
    },
    individualServices: [
      {
        title: "قطع غيار أصلية",
        desc: "نقوم باستيراد وتوزيع قطع غيار أصلية ومعتمدة لجميع موديلات مجموعة VAG، مع تركيز خاص على الطرازات الحديثة وذات التقنيات المتطورة.",
        features: [
          "تشكيلة واسعة من القطع الأصلية: قطع غيار المحركات، نواقل الحركة، أنظمة التعليق والفرامل، التجهيزات الكهربائية، والعديد من القطع الأخرى.",
          "تحديد دقيق للقطع: نعتمد على قواعد البيانات الرسمية لتحديد رقم القطعة بدقة وفق توصيات الشركة الصانعة.",
          "قطع خاصة بتعديل الأداء: نوفر أيضاً قطع الغيار الخاصة بتعديل الأداء، لتلبية احتياجات عشاق التعديل والسباقات.",
          "طلب مسبق للقطع النادرة: نوفر خدمة الطلب المسبق للقطع غير المتوفرة في المخزون، مع متابعة دقيقة حتى وصولها.",
        ],
      },
      {
        title: "خدمات الصيانة المتخصصة",
        desc: "نقدم في مركزنا المتكامل (أكبر مركز لصيانة سيارات VAG في مدينة حمص) خدمات الصيانة بكافة أنواعها، بدءاً من الصيانة الدورية الوقائية وصولاً إلى الإصلاحات الكبرى والأعطال المعقدة، مع تركيز خاص على السيارات الحديثة والمزودة بأحدث الأنظمة الإلكترونية.",
        features: [
          "برامج صيانة دورية وقائية: خطط صيانة مخصصة حسب توصيات الشركة الصانعة وعدد الكيلومترات.",
          "صيانة المحركات: بكافة أنواعها (TSI, FSI، وغيرها)، مع استخدام تقنيات الذكاء الاصطناعي في التشخيص الدقيق للأعطال.",
          "صيانة نواقل الحركة: يدوي، أوتوماتيكي، DSG، مع فحص شامل واستبدال الزيوت والفلاتر حسب المواصفات.",
          "أنظمة التعليق والفرامل: فحص شامل، استبدال قطع التآكل، وصيانة أنظمة التعليق الهوائي في الموديلات الفاخرة.",
          "الأنظمة الكهربائية والإلكترونيات: تشخيص وإصلاح الأعطال الكهربائية المعقدة باستخدام أحدث الأجهزة والبرامج.",
          "أنظمة التكييف والتبريد: صيانة وإصلاح أنظمة التكييف ودارة التبريد بالكامل.",
          "التخصص في الأعطال العميقة والمعقدة: خبرة واسعة في تشخيص وإصلاح الأعطال غير التقليدية بفضل خبرتنا الطويلة واستخدام تقنيات الذكاء الاصطناعي.",
        ],
      },
      {
        title: "تعديل الأداء وتطوير السيارات",
        desc: "نقدم خدمات تعديل أداء المحركات وتطوير الأنظمة بشكل مدروس وآمن، يرفع كفاءة سياراتكم ويحسن تجربة القيادة، مع مراعاة الظروف المحلية من مناخ وجودة وقود، وتغطي خدماتنا السيارات الحديثة بمختلف تقنياتها.",
        features: [
          "برمجة ECU (Stage 1): تحسين أداء المحرك وقوته مع الحفاظ على موثوقية السيارة للاستخدام اليومي.",
          "Stage 2 Custom Tune: تعديل مخصص حسب احتياجات العميل، مع مراعاة دقيقة للظروف المحلية (درجات الحرارة، نوع الوقود، طرق القيادة).",
          "Stage 3: تعديل شامل للمحرك وأنظمة السحب والعادم والتبريد، لتجهيز السيارات لأداء عالٍ جداً.",
          "Pops & Bangs: برمجة نظام العادم لإصدار أصوات مميزة، حسب رغبة العميل.",
          "تعديل أنظمة العادم: توفير وتركيب أنظمة عادم رياضية، مع برمجة مناسبة لتحسين الأداء الصوتي والحركي.",
          "تطوير أنظمة التبريد والشحن التوربيني: تحسين أداء المحرك في الظروف القاسية.",
          "استشارات فنية متخصصة: نقدم استشارات تفصيلية حول خيارات التعديل المتاحة، مع شرح مفصل للتأثير على الأداء والاعتمادية.",
        ],
      },
    ],
    corporateServices: [
      {
        title: "حلول متكاملة لتجهيز مراكز الصيانة",
        desc: "نساعد المستثمرين على إنشاء مراكز صيانة متخصصة لسيارات VAG، من خلال تقديم حزمة متكاملة تشمل كل ما تحتاجه الورشة للعمل بكفاءة واحترافية، مع تجهيزات تناسب متطلبات السيارات الحديثة.",
        features: [
          "التخطيط والبنية التحتية: توريد مخططات البناء الهندسية المعتمدة من الشركة الصانعة، وتخطيط المساحات وتوزيع الأقسام بما يتوافق مع معايير الورش العالمية.",
          "المعدات والأدوات التخصصية: توفير الرافعات، منصات القياس والإصلاح، أجهزة الفحص المتخصصة، معدات اللحام، وأنظمة التهوية والعادم من شركات معتمدة.",
          "توفير الأدوات الخاصة بسيارات VAG: الأدوات التي لا غنى عنها في أي ورشة متخصصة.",
          "البرامج التشخيصية والأجهزة: تثبيت وتجهيز أحدث إصدارات برامج التشخيص الرسمية مثل (VCDS, ODIS) على أجهزة مخصصة.",
          "توفير أجهزة VAS الأصلية وجاهزية فورية للعمل.",
          "توفير البرامج الخاصة بالمخططات الكهربائية والإجراءات الميكانيكية، لتسهيل عمليات التشخيص والإصلاح.",
          "التدريب والدعم الفني: تدريب الكوادر الفنية على استخدام المعدات والبرامج، وتقديم الدعم الفني المستمر بعد التجهيز.",
        ],
        note: "ندرس احتياجاتك ونقدم حلولا مخصصة تناسب مختلف المساحات والميزانيات، سواء كنتم تدشنون مركزاً صغيراً أو كبيراً.",
      },
      {
        title: "التدريب الفني والتوظيف",
        desc: "نؤمن بأن تطوير السوق يبدأ بتطوير الكوادر البشرية. لذلك نقدم برامج تدريبية متخصصة، ونعمل على تأهيل المتدربين وربطهم بفرص العمل.",
        features: [
          "برامج تدريبية وفق مناهج الشركة الصانعة: تغطي جميع المستويات في مجالات الصيانة، التشخيص، تعديل الأداء، وأنظمة السيارات الحديثة.",
          "شهادات إتمام تدريب: يحصل المتدربون على شهادات تثبت اجتيازهم للدورة وإتقانهم للمهارات المطلوبة.",
          "منصة توظيف متطورة مدعومة بالذكاء الاصطناعي: جمع بيانات شاملة عن المتقدمين وامتحان إلكتروني ذكي لمستوى المهارات.",
          "مقابلات حقيقية: تقييم فعلي للمتقدمين بعد الاختبار الإلكتروني.",
          "تحديد نقاط الضعف وتقويتها: من خلال برامج تدريبية مكثفة.",
          "ربط المتدربين المؤهلين بالشركات والمستثمرين الباحثين عن كوادر فنية مؤهلة.",
        ],
      },
      {
        title: "الاستشارات الإدارية وأنظمة ERP",
        desc: "نقدم للمستثمرين وأصحاب مراكز الصيانة والشركات الاستشارات الإدارية المتخصصة، بالإضافة إلى نظام إداري متكامل (ERP) صممناه خصيصاً لمراكز صيانة السيارات، وليس مجرد برنامج محاسبة عام.",
        featureGroups: [
          {
            title: "الاستشارات الإدارية",
            items: [
              "الهيكلة التنظيمية: تصميم هيكل تنظيمي يناسب حجم ونشاط مركز الصيانة.",
              "التوصيفات الوظيفية: تحديد المهام والمسؤوليات لكل وظيفة بوضوح.",
              "مخططات تدفق العمل (Flow Charts): رسم خرائط لسير العمليات اليومية لضمان سلاسة العمل.",
              "تحسين العمليات: تحليل العمليات الحالية وتقديم حلول لزيادة الكفاءة وتقليل الهدر.",
              "إدارة الموارد البشرية: تطوير سياسات التوظيف، التدريب، التحفيز، وتقييم الأداء.",
            ],
          },
          {
            title: "نظام ERP المتكامل (طورناه خصيصاً لمراكز الصيانة)",
            items: [
              "بطاقة سيارة شاملة: ملف كامل لكل سيارة يحتوي على البيانات الفنية، سجل الصيانة، الأعطال السابقة، والإصلاحات المنفذة.",
              "بطاقة عامل متكاملة: تسجيل كافة العمليات التي يقوم بها كل عامل لتحليل الأداء وحساب الحوافز الشهرية.",
              "توثيق جميع العمليات: من دخول السيارة إلى المركز، إلى عمليات الصيانة والتشخيص، وطلبيات قطع الغيار بين الأقسام.",
              "حساب التكاليف بدقة: حساب تكلفة كل إصلاح بناءً على ساعات العمل الفعلية وقطع الغيار المستخدمة.",
              "أرشفة كاملة: حفظ أرشيف لكل سيارة وكل عامل، لتوفير قاعدة بيانات قوية تدعم اتخاذ القرار.",
              "تحليل البيانات: باستخدام تقنيات الذكاء الاصطناعي، نقوم بتحليل أداء العمال، كفاءة العمليات، واتجاهات الأعطال لتحسين الأداء العام.",
              "نظامنا مرن وقابل للتعديل حسب احتياجات كل مركز صيانة.",
            ],
          },
        ],
      },
    ],
    integration: {
      title: "خدمات متكاملة تحت سقف واحد",
      intro:
        "ما يميز V POWER TUNING هو قدرتنا على تقديم حلول متكاملة تجمع بين أكثر من خدمة لخدمة عملائنا بشكل أفضل.",
      points: [
        "يمكن لعملاء الصيانة الاستفادة من قطع الغيار الأصلية التي نوفرها، مع خدمات التعديل لتطوير أداء سياراتهم.",
        "يمكن للمستثمرين الجدد الحصول على حزمة متكاملة تشمل تجهيز المركز، التدريب، ونظام ERP، لتشغيل مركزهم بكفاءة منذ اليوم الأول.",
        "يمكن للشركات القائمة الاستفادة من الاستشارات الإدارية ونظام ERP لتحسين أدائها، والتدريب لتطوير كوادرها، وقطع الغيار لتأمين احتياجاتها.",
      ],
    },
    cta: {
      title: "نحن هنا لخدمتك، أينما كنت",
      text:
        "لدينا الخبرة، المعدات، البرامج، والكفاءات لتلبية جميع احتياجاتك في عالم VAG. تواصل معنا اليوم، ودعنا نكون شريكك الموثوق في رحلة التميز.",
      button: "تواصل معنا",
    },
  },
  en: {
    header: {
      eyebrow: "Our Services",
      title: "Integrated, Certified, and AI-Powered Solutions for the VAG Ecosystem",
      intro:
        "Whether you're a vehicle owner or a workshop investor — we deliver factory-grade expertise across every aspect of VAG ownership and service center operations.",
      subIntro:
        "From a single genuine part to a fully equipped service center, our solutions are built on certified standards, official equipment, and AI-driven precision.",
    },
    sections: {
      individualsTitle: "For Individuals & Car Owners",
      corporateTitle: "For Businesses, Investors & Service Centers",
      whatWeOffer: "What We Offer",
    },
    individualServices: [
      {
        title: "Genuine OEM Parts",
        desc: "100% Authentic. 100% Certified. 100% VAG.",
        features: [
          "Original OEM spare parts with full traceability",
          "Competitive pricing with guaranteed authenticity",
          "Fast sourcing for both common and hard-to-find components",
          "Expert advice on part selection and compatibility",
        ],
      },
      {
        title: "Specialized Maintenance & AI-Powered Diagnostics",
        desc: "Precision Service. Powered by Technology.",
        features: [
          "Comprehensive maintenance for all VAG models",
          "AI-enhanced diagnostics for faster, more accurate repairs",
          "Official VCDS, ODIS, and VAS diagnostic systems",
          "Regular maintenance schedules tailored to your vehicle",
          "Transparent assessments with clear recommendations",
        ],
      },
      {
        title: "Performance Tuning & Vehicle Development",
        desc: "More Power. More Control. Built to Last.",
        features: [
          "ECU remapping and engine calibration",
          "Drivetrain and transmission optimization",
          "Suspension, braking, and handling upgrades",
          "Full race-track preparation and safety modifications",
          "Custom tuning solutions tailored to your driving style and goals",
        ],
      },
    ],
    corporateServices: [
      {
        title: "Complete Workshop Setup Solutions",
        desc: "From Blueprint to Operation — We Build Your VAG Service Center.",
        featureGroups: [
          {
            title: "Infrastructure & Layout",
            items: [
              "Factory-approved architectural plans",
              "Facility designs aligned with global standards",
              "Compliance with manufacturer specifications",
            ],
          },
          {
            title: "Specialized Equipment",
            items: [
              "Professional-grade lifts and measuring systems",
              "Diagnostic devices and welding equipment",
              "Equipment from certified global manufacturers",
            ],
          },
          {
            title: "Official Software",
            items: [
              "Full VCDS, ODIS, and VAS setup",
              "Pre-configured hardware ready for immediate operation",
              "Ongoing technical support",
            ],
          },
        ],
      },
      {
        title: "Certified Technical Training & AI-Powered Talent Matching",
        desc: "Training That Transforms — Talent That Delivers.",
        features: [
          "Certified training programs following manufacturer curricula",
          "Hands-on practice with official equipment and software",
          "AI-driven skills assessment (technical, professional, and soft skills)",
          "Direct connection to employers and investors",
          "Continuous professional development opportunities",
        ],
      },
      {
        title: "Management Consulting & Custom ERP Solutions",
        desc: "Optimize Your Operations. Maximize Your Profitability.",
        features: [
          "Organizational structuring and job description mapping",
          "Workflow optimization for service centers",
          "Custom ERP software tailored to automotive workshops",
          "Inventory management",
          "Accounting and financial tracking",
          "Service tickets and job scheduling",
          "AI-driven data analytics for informed decision-making",
          "Performance benchmarking and continuous improvement strategies",
        ],
      },
    ],
    integration: {
      title: "Integrated Services Under One Roof",
      intro:
        "What sets V POWER TUNING apart is our ability to deliver integrated solutions that combine more than one service to serve our customers better.",
      points: [
        "Service customers can take advantage of the genuine spare parts we supply, together with our tuning services to develop their vehicle's performance.",
        "New investors can get a complete package covering center setup, training, and the ERP system, so their center runs efficiently from day one.",
        "Established businesses can draw on our management consulting and ERP system to improve performance, our training programs to develop their staff, and our spare parts to secure their supply needs.",
      ],
    },
    cta: {
      title: "Ready to experience the V-POWER TUNING difference?",
      text:
        "Whether you need a genuine part, a performance upgrade, or a complete workshop solution — we're here to help.",
      button: "Contact Us",
    },
  },
} as const;

export type ServicesStrings = (typeof dictionaries)["ar"];

export const getServicesStrings = (locale: Locale) => dictionaries[locale] as ServicesStrings;
