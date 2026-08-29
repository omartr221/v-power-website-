"use client";
import { motion } from "framer-motion";
import { Cog, ShieldCheck, Gauge, Wrench, GraduationCap, BarChart2, CheckCircle2 } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";

const individualServices = [
  {
    icon: Cog,
    title: "1. قطع غيار أصلية",
    desc: "نقوم باستيراد وتوزيع قطع غيار أصلية ومعتمدة لجميع موديلات مجموعة VAG، مع تركيز خاص على الطرازات الحديثة وذات التقنيات المتطورة.",
    features: [
      "تشكيلة واسعة من القطع الأصلية: قطع غيار المحركات، نواقل الحركة، أنظمة التعليق والفرامل، التجهيزات الكهربائية، والعديد من القطع الأخرى.",
      "تحديد دقيق للقطع: نعتمد على قواعد البيانات الرسمية لتحديد رقم القطعة بدقة وفق توصيات الشركة الصانعة.",
      "قطع خاصة بتعديل الأداء: نوفر أيضاً قطع الغيار الخاصة بتعديل الأداء، لتلبية احتياجات عشاق التعديل والسباقات.",
      "طلب مسبق للقطع النادرة: نوفر خدمة الطلب المسبق للقطع غير المتوفرة في المخزون، مع متابعة دقيقة حتى وصولها."
    ]
  },
  {
    icon: ShieldCheck,
    title: "2. خدمات الصيانة المتخصصة",
    desc: "نقدم في مركزنا المتكامل (أكبر مركز لصيانة سيارات VAG في مدينة حمص) خدمات الصيانة بكافة أنواعها، بدءاً من الصيانة الدورية الوقائية وصولاً إلى الإصلاحات الكبرى والأعطال المعقدة، مع تركيز خاص على السيارات الحديثة والمزودة بأحدث الأنظمة الإلكترونية.",
    features: [
      "برامج صيانة دورية وقائية: خطط صيانة مخصصة حسب توصيات الشركة الصانعة وعدد الكيلومترات.",
      "صيانة المحركات: بكافة أنواعها (TSI, FSI، وغيرها)، مع استخدام تقنيات الذكاء الاصطناعي في التشخيص الدقيق للأعطال.",
      "صيانة نواقل الحركة: يدوي، أوتوماتيكي، DSG، مع فحص شامل واستبدال الزيوت والفلاتر حسب المواصفات.",
      "أنظمة التعليق والفرامل: فحص شامل، استبدال قطع التآكل، وصيانة أنظمة التعليق الهوائي في الموديلات الفاخرة.",
      "الأنظمة الكهربائية والإلكترونيات: تشخيص وإصلاح الأعطال الكهربائية المعقدة باستخدام أحدث الأجهزة والبرامج.",
      "أنظمة التكييف والتبريد: صيانة وإصلاح أنظمة التكييف ودارة التبريد بالكامل.",
      "التخصص في الأعطال العميقة والمعقدة: خبرة واسعة في تشخيص وإصلاح الأعطال غير التقليدية بفضل خبرتنا الطويلة واستخدام تقنيات الذكاء الاصطناعي."
    ]
  },
  {
    icon: Gauge,
    title: "3. تعديل الأداء وتطوير السيارات",
    desc: "نقدم خدمات تعديل أداء المحركات وتطوير الأنظمة بشكل مدروس وآمن، يرفع كفاءة سياراتكم ويحسن تجربة القيادة، مع مراعاة الظروف المحلية من مناخ وجودة وقود، وتغطي خدماتنا السيارات الحديثة بمختلف تقنياتها.",
    features: [
      "برمجة ECU (Stage 1): تحسين أداء المحرك وقوته مع الحفاظ على موثوقية السيارة للاستخدام اليومي.",
      "Stage 2 Custom Tune: تعديل مخصص حسب احتياجات العميل، مع مراعاة دقيقة للظروف المحلية (درجات الحرارة، نوع الوقود، طرق القيادة).",
      "Stage 3: تعديل شامل للمحرك وأنظمة السحب والعادم والتبريد، لتجهيز السيارات لأداء عالٍ جداً.",
      "Pops & Bangs: برمجة نظام العادم لإصدار أصوات مميزة، حسب رغبة العميل.",
      "تعديل أنظمة العادم: توفير وتركيب أنظمة عادم رياضية، مع برمجة مناسبة لتحسين الأداء الصوتي والحركي.",
      "تطوير أنظمة التبريد والشحن التوربيني: تحسين أداء المحرك في الظروف القاسية.",
      "استشارات فنية متخصصة: نقدم استشارات تفصيلية حول خيارات التعديل المتاحة، مع شرح مفصل للتأثير على الأداء والاعتمادية."
    ]
  }
];

const corporateServices = [
  {
    icon: Wrench,
    title: "4. حلول متكاملة لتجهيز مراكز الصيانة",
    desc: "نساعد المستثمرين على إنشاء مراكز صيانة متخصصة لسيارات VAG، من خلال تقديم حزمة متكاملة تشمل كل ما تحتاجه الورشة للعمل بكفاءة واحترافية، مع تجهيزات تناسب متطلبات السيارات الحديثة.",
    features: [
      "التخطيط والبنية التحتية: توريد مخططات البناء الهندسية المعتمدة من الشركة الصانعة، وتخطيط المساحات وتوزيع الأقسام بما يتوافق مع معايير الورش العالمية.",
      "المعدات والأدوات التخصصية: توفير الرافعات، منصات القياس والإصلاح، أجهزة الفحص المتخصصة، معدات اللحام، وأنظمة التهوية والعادم من شركات معتمدة.",
      "توفير الأدوات الخاصة بسيارات VAG: الأدوات التي لا غنى عنها في أي ورشة متخصصة.",
      "البرامج التشخيصية والأجهزة: تثبيت وتجهيز أحدث إصدارات برامج التشخيص الرسمية مثل (VCDS, ODIS) على أجهزة مخصصة.",
      "توفير أجهزة VAS الأصلية وجاهزية فورية للعمل.",
      "توفير البرامج الخاصة بالمخططات الكهربائية والإجراءات الميكانيكية، لتسهيل عمليات التشخيص والإصلاح.",
      "التدريب والدعم الفني: تدريب الكوادر الفنية على استخدام المعدات والبرامج، وتقديم الدعم الفني المستمر بعد التجهيز."
    ],
    note: "ندرس احتياجاتك ونقدم حلولا مخصصة تناسب مختلف المساحات والميزانيات، سواء كنتم تدشنون مركزاً صغيراً أو كبيراً."
  },
  {
    icon: GraduationCap,
    title: "5. التدريب الفني والتوظيف",
    desc: "نؤمن بأن تطوير السوق يبدأ بتطوير الكوادر البشرية. لذلك نقدم برامج تدريبية متخصصة، ونعمل على تأهيل المتدربين وربطهم بفرص العمل.",
    features: [
      "برامج تدريبية وفق مناهج الشركة الصانعة: تغطي جميع المستويات في مجالات الصيانة، التشخيص، تعديل الأداء، وأنظمة السيارات الحديثة.",
      "شهادات إتمام تدريب: يحصل المتدربون على شهادات تثبت اجتيازهم للدورة وإتقانهم للمهارات المطلوبة.",
      "منصة توظيف متطورة مدعومة بالذكاء الاصطناعي: جمع بيانات شاملة عن المتقدمين وامتحان إلكتروني ذكي لمستوى المهارات.",
      "مقابلات حقيقية: تقييم فعلي للمتقدمين بعد الاختبار الإلكتروني.",
      "تحديد نقاط الضعف وتقويتها: من خلال برامج تدريبية مكثفة.",
      "ربط المتدربين المؤهلين بالشركات والمستثمرين الباحثين عن كوادر فنية مؤهلة."
    ]
  },
  {
    icon: BarChart2,
    title: "6. الاستشارات الإدارية وأنظمة ERP",
    desc: "نقدم للمستثمرين وأصحاب مراكز الصيانة والشركات الاستشارات الإدارية المتخصصة، بالإضافة إلى نظام إداري متكامل (ERP) صممناه خصيصاً لمراكز صيانة السيارات، وليس مجرد برنامج محاسبة عام.",
    featureGroups: [
      {
        title: "الاستشارات الإدارية",
        items: [
          "الهيكلة التنظيمية: تصميم هيكل تنظيمي يناسب حجم ونشاط مركز الصيانة.",
          "التوصيفات الوظيفية: تحديد المهام والمسؤوليات لكل وظيفة بوضوح.",
          "مخططات تدفق العمل (Flow Charts): رسم خرائط لسير العمليات اليومية لضمان سلاسة العمل.",
          "تحسين العمليات: تحليل العمليات الحالية وتقديم حلول لزيادة الكفاءة وتقليل الهدر.",
          "إدارة الموارد البشرية: تطوير سياسات التوظيف، التدريب، التحفيز، وتقييم الأداء."
        ]
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
          "نظامنا مرن وقابل للتعديل حسب احتياجات كل مركز صيانة."
        ]
      }
    ]
  }
];

const integrationPoints = [
  "يمكن لعملاء الصيانة الاستفادة من قطع الغيار الأصلية التي نوفرها، مع خدمات التعديل لتطوير أداء سياراتهم.",
  "يمكن للمستثمرين الجدد الحصول على حزمة متكاملة تشمل تجهيز المركز، التدريب، ونظام ERP، لتشغيل مركزهم بكفاءة منذ اليوم الأول.",
  "يمكن للشركات القائمة الاستفادة من الاستشارات الإدارية ونظام ERP لتحسين أدائها، والتدريب لتطوير كوادرها، وقطع الغيار لتأمين احتياجاتها."
];

export default function ServicesPage() {
  const renderService = (service: any, i: number) => {
    const Icon = service.icon;
    return (
      <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
        <motion.div
          className="rounded-2xl shadow-sm border border-gray-100 bg-white p-8 md:p-12 accent-glow overflow-hidden relative"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <motion.div
                className="bg-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative pulse-ring"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-8 h-8 text-red-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              {service.note && (
                <p className="text-red-600 text-sm font-medium mt-4 leading-relaxed">{service.note}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-red-600 mb-4">ما نقدمه</h4>
              {service.featureGroups ? (
                <div className="space-y-6">
                  {service.featureGroups.map((group: any, g: number) => (
                    <div key={g}>
                      <h5 className="font-bold text-dark mb-2">{group.title}</h5>
                      <StaggerContainer className="grid grid-cols-1 gap-3" staggerDelay={0.05}>
                        {group.items.map((item: string, j: number) => (
                          <StaggerItem key={j}>
                            <motion.div
                              className="flex items-start gap-3 group cursor-default"
                              whileHover={{ x: -5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                              </motion.div>
                              <span className="text-gray-700 text-sm group-hover:text-dark transition-colors leading-relaxed">{item}</span>
                            </motion.div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  ))}
                </div>
              ) : (
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.08}>
                  {service.features.map((feature: string, j: number) => (
                    <StaggerItem key={j}>
                      <motion.div
                        className="flex items-start gap-3 group cursor-default"
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                        </motion.div>
                        <span className="text-gray-700 text-sm group-hover:text-dark transition-colors leading-relaxed">{feature}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    );
  };

  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">خدماتنا</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">حلول متكاملة ومتخصصة لسيارات مجموعة VAG</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg mb-4">
            نقدم في V POWER TUNING مجموعة متكاملة من الخدمات التي تلبي احتياجات مالكي سيارات فولكس واجن، أودي، سكودا، سيات، وبورشه، سواء كنتم أفراداً تبحثون عن الصيانة والتعديل، أو شركات ومستثمرين ترغبون في تجهيز مراكز الصيانة أو تطوير أعمالكم.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto text-base">
            معتمدون على خبرة متراكمة في مجال سيارات VAG، وفريق من المهندسين والفنيين المتخصصين، وأحدث المعدات والبرامج التشخيصية، بالإضافة إلى استخدام تقنيات الذكاء الاصطناعي في عملياتنا التشخيصية والإدارية، لنقدم لكم خدمات لا تضاهى.
          </p>
        </RevealOnScroll>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div>
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-10 flex items-center gap-3">
              <span className="w-10 h-1 bg-red-600 rounded-full inline-block"></span>
              للأفراد ومالكي السيارات
            </h2>
          </RevealOnScroll>
          <div className="space-y-12">
            {individualServices.map(renderService)}
          </div>
        </div>

        <div>
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-10 flex items-center gap-3">
              <span className="w-10 h-1 bg-red-600 rounded-full inline-block"></span>
              للشركات والمستثمرين ومراكز الصيانة
            </h2>
          </RevealOnScroll>
          <div className="space-y-12">
            {corporateServices.map(renderService)}
          </div>
        </div>

        {/* Integration */}
        <section className="max-w-5xl mx-auto">
          <RevealOnScroll direction="up">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
              <h2 className="text-2xl md:text-3xl font-black text-dark mb-5">خدمات متكاملة تحت سقف واحد</h2>
              <div className="accent-divider w-20 mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-3xl mx-auto mb-8 text-lg">
                ما يميز V POWER TUNING هو قدرتنا على تقديم حلول متكاملة تجمع بين أكثر من خدمة لخدمة عملائنا بشكل أفضل.
              </p>
              <StaggerContainer className="text-right max-w-3xl mx-auto space-y-4" staggerDelay={0.1}>
                {integrationPoints.map((point, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </RevealOnScroll>
        </section>
      </div>

      {/* CTA */}
      <ScalePop delay={0.2}>
        <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
          <div className="bg-dark rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 morphing-blob blur-[80px]"></div>
            </div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">نحن هنا لخدمتك، أينما كنت</h2>
              <div className="accent-divider w-16 mx-auto mb-4"></div>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                لدينا الخبرة، المعدات، البرامج، والكفاءات لتلبية جميع احتياجاتك في عالم VAG. تواصل معنا اليوم، ودعنا نكون شريكك الموثوق في رحلة التميز.
              </p>
              <MagneticHover>
                <a
                  href="/contact"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  تواصل معنا
                </a>
              </MagneticHover>
            </div>
          </div>
        </div>
      </ScalePop>
    </div>
  );
}
