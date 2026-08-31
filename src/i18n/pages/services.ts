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
      title: "Integrated, Specialized Solutions for VAG Group Vehicles",
      intro:
        "At V POWER TUNING we offer a complete range of services for owners of Volkswagen, Audi, Skoda, Seat, and Porsche vehicles — whether you are an individual looking for maintenance and tuning, or a company or investor looking to equip a service center or grow your business.",
      subIntro:
        "Backed by years of accumulated VAG Group expertise, a team of specialized engineers and technicians, the latest equipment and diagnostic software, and AI-powered technology across our diagnostic and administrative operations, we deliver service without equal.",
    },
    sections: {
      individualsTitle: "For Individuals & Car Owners",
      corporateTitle: "For Businesses, Investors & Service Centers",
      whatWeOffer: "What We Offer",
    },
    individualServices: [
      {
        title: "Genuine Spare Parts",
        desc: "We import and distribute genuine, certified spare parts for every VAG Group model, with particular focus on the latest vehicles and their advanced technologies.",
        features: [
          "A broad range of genuine parts: engine components, transmissions, suspension and braking systems, electrical equipment, and much more.",
          "Precise part identification: we use the official databases to pinpoint the exact part number in line with the manufacturer's recommendations.",
          "Performance tuning parts: we also supply dedicated performance tuning parts to meet the needs of tuning and racing enthusiasts.",
          "Pre-ordering for rare parts: we offer a pre-order service for items not held in stock, with close follow-up until they arrive.",
        ],
      },
      {
        title: "Specialized Maintenance Services",
        desc: "At our full service center — the largest VAG service center in the city of Homs — we deliver maintenance of every kind, from preventive scheduled servicing through to major repairs and complex faults, with particular focus on modern vehicles fitted with the latest electronic systems.",
        features: [
          "Preventive scheduled maintenance programs: service plans tailored to the manufacturer's recommendations and your mileage.",
          "Engine servicing: across all engine types (TSI, FSI, and others), using AI-powered technology for precise fault diagnostics.",
          "Transmission servicing: manual, automatic, and DSG, with comprehensive inspection and oil and filter changes to specification.",
          "Suspension and braking systems: comprehensive inspection, replacement of wear parts, and air suspension servicing on premium models.",
          "Electrical and electronic systems: diagnostics and repair of complex electrical faults using the latest hardware and software.",
          "Air conditioning and cooling systems: servicing and repair of the air conditioning system and the entire cooling circuit.",
          "Specialists in deep, complex faults: extensive experience diagnosing and repairing unconventional faults, thanks to our years of expertise and AI-powered technology.",
        ],
      },
      {
        title: "Performance Tuning & Vehicle Development",
        desc: "We deliver engine performance tuning and systems development — measured and safe — that raises your vehicle's efficiency and improves the driving experience, accounting for local conditions such as climate and fuel quality, and covering modern vehicles across all their technologies.",
        features: [
          "ECU tuning (Stage 1): more engine performance and power while keeping the car reliable for daily use.",
          "Stage 2 custom tune: tailored to the customer's needs, with careful attention to local conditions (temperatures, fuel grade, driving styles).",
          "Stage 3: comprehensive development of the engine and the intake, exhaust, and cooling systems, preparing the car for very high performance.",
          "Pops & bangs: exhaust system programming for a distinctive sound, to the customer's taste.",
          "Exhaust system upgrades: supply and installation of sports exhaust systems, with matching tuning to improve both sound and performance.",
          "Cooling and turbocharging upgrades: improving engine performance under harsh conditions.",
          "Specialized technical consulting: detailed guidance on the tuning options available, with a full explanation of the impact on performance and reliability.",
        ],
      },
    ],
    corporateServices: [
      {
        title: "Turnkey Solutions for Service Center Setup",
        desc: "We help investors establish specialized VAG service centers by delivering a complete package that covers everything a workshop needs to operate efficiently and professionally, with equipment matched to the requirements of modern vehicles.",
        features: [
          "Planning and infrastructure: supply of manufacturer-approved construction blueprints, plus space planning and department layout in line with international workshop standards.",
          "Specialized equipment and tools: lifts, measuring and repair benches, dedicated diagnostic devices, welding equipment, and ventilation and exhaust extraction systems from certified manufacturers.",
          "Supply of VAG-specific special tools: the tools no specialized workshop can operate without.",
          "Diagnostic software and hardware: installation and setup of the latest official diagnostic software such as VCDS and ODIS on dedicated hardware.",
          "Supply of genuine VAS devices, ready for immediate operation.",
          "Supply of wiring diagram and mechanical procedure software, to streamline diagnostics and repairs.",
          "Training and technical support: training your technical staff on the equipment and software, with ongoing technical support after handover.",
        ],
        note: "We study your requirements and deliver tailored solutions to suit a wide range of spaces and budgets, whether you are opening a small center or a large one.",
      },
      {
        title: "Technical Training & Recruitment",
        desc: "We believe that developing the market starts with developing people. That is why we run specialized training programs, qualify our trainees, and connect them with job opportunities.",
        features: [
          "Training programs based on manufacturer curricula: covering every level across maintenance, diagnostics, performance tuning, and modern vehicle systems.",
          "Training completion certificates: trainees receive certificates confirming they have passed the course and mastered the required skills.",
          "An advanced AI-powered recruitment platform: comprehensive applicant data collection and a smart online exam to assess skill levels.",
          "Real interviews: hands-on assessment of applicants after the online exam.",
          "Identifying and strengthening weak points: through intensive training programs.",
          "Connecting qualified trainees with companies and investors looking for skilled technical staff.",
        ],
      },
      {
        title: "Management Consulting & ERP Systems",
        desc: "We provide specialized management consulting for investors, service center owners, and companies, along with a complete management system (ERP) we built specifically for automotive service centers — not just a generic accounting package.",
        featureGroups: [
          {
            title: "Management Consulting",
            items: [
              "Organizational structure: designing a structure that fits the size and activity of your service center.",
              "Job descriptions: defining the tasks and responsibilities of every role clearly.",
              "Flow charts: mapping day-to-day operations to keep the workflow running smoothly.",
              "Process improvement: analyzing current processes and delivering solutions that increase efficiency and reduce waste.",
              "Human resources management: developing recruitment, training, motivation, and performance appraisal policies.",
            ],
          },
          {
            title: "A Complete ERP System (Built Specifically for Service Centers)",
            items: [
              "A comprehensive vehicle record: a full file for each vehicle covering technical data, service history, previous faults, and completed repairs.",
              "A complete technician record: logging every operation performed by each technician to analyze performance and calculate monthly incentives.",
              "Documentation of every operation: from vehicle intake through servicing and diagnostics to spare parts requests between departments.",
              "Accurate costing: calculating the cost of each repair based on actual labor hours and the parts used.",
              "Full archiving: keeping an archive for every vehicle and every technician, providing a solid database to support decision-making.",
              "Data analysis: using AI-powered technology, we analyze technician performance, process efficiency, and fault trends to improve overall performance.",
              "Our system is flexible and can be adapted to the needs of any service center.",
            ],
          },
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
      title: "We're Here to Serve You, Wherever You Are",
      text:
        "We have the expertise, the equipment, the software, and the talent to meet every need you have in the world of VAG. Get in touch today and let us be your trusted partner on the road to excellence.",
      button: "Contact Us",
    },
  },
} as const;

export type ServicesStrings = (typeof dictionaries)["ar"];

export const getServicesStrings = (locale: Locale) => dictionaries[locale] as ServicesStrings;
