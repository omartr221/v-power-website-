"use client";
import { motion } from "framer-motion";
import { Cog, ShieldCheck, Gauge, Wrench, GraduationCap, CheckCircle2 } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, GlowCard, MagneticHover } from "@/components/MotionElements";

const services = [
  {
    icon: Cog,
    title: "قطع غيار أصلية",
    desc: "نوفّر قطع غيار أصلية ومعتمدة لجميع سيارات مجموعة VAG من مصادر موثوقة ومعتمدة دولياً. نضمن لكم أعلى معايير الجودة والتوافق مع مواصفات المصنّع.",
    features: ["قطع غيار أصلية OEM", "توافق كامل مع مواصفات المصنّع", "أسعار تنافسية للشركات", "توصيل وشحن دولي", "ضمان على جميع القطع", "تغطية لجميع موديلات VAG"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
  },
  {
    icon: ShieldCheck,
    title: "تأمين الصيانات الاحترافية",
    desc: "خدمات صيانة شاملة ومتكاملة لسيارات مجموعة VAG بأيدي فنيين متخصصين ومدرّبين. نستخدم أحدث المعدات والبرمجيات الرسمية لتقديم صيانة بمعايير الوكالة.",
    features: ["صيانة محركات", "تعديل علب سرعة", "فحص وتشخيص بأجهزة رسمية", "صيانة دورية حسب معايير VAG", "برمجة وتحديث وحدات التحكم", "كهرباء وإلكترونيات متقدمة"],
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&q=80",
  },
  {
    icon: Gauge,
    title: "تعديل السيارات باحترافية",
    desc: "تعديل أداء سيارات VAG بشكل مدروس وآمن. من رفع القدرة الحصانية إلى تطوير أنظمة العادم والتعليق، كل ذلك بخبرة تضمن الأمان والموثوقية.",
    features: ["Chip Tuning (Stage 1 & 2)", "تعديل علب سرعة", "أنظمة العادم الرياضية", "تعديل نظام التعليق", "Retrofit وتركيب ميزات إضافية"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  },
  {
    icon: GraduationCap,
    title: "التدريب المهني",
    desc: "برامج تدريب متخصصة لتأهيل الفنيين والمهندسين على أعلى مستوى في مجال سيارات VAG. نقدّم تدريباً عملياً ونظرياً معتمداً بأيدي خبراء متخصصين ذوي خبرة دولية.",
    features: ["دورات تدريبية معتمدة دولياً", "تدريب عملي على أجهزة رسمية", "برامج مخصصة للشركات والمراكز", "شهادات احترافية معترف بها", "تدريب على تشخيص الأعطال المتقدمة", "تدريب على البرمجة والكهرباء"],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80",
  },
  {
    icon: Wrench,
    title: "تجهيز مراكز الصيانة",
    desc: "نجهّز مراكز الصيانة بالكامل بكل ما تحتاجه من عدد وأجهزة احترافية ومعدات تشخيص ومعدات رفع وأدوات متخصصة، لتكون جاهزة للعمل بأعلى المعايير.",
    features: ["أجهزة تشخيص وبرمجة متقدمة", "معدات رفع ومقصّات هيدروليكية", "عدد يدوية وكهربائية احترافية", "أنظمة تبديل الزيوت والسوائل", "معدات فحص الإطارات والميزانية", "استشارات فنية لتصميم المراكز"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">خدماتنا</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">حلول متكاملة لسيارات VAG</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            خمس خدمات أساسية بمعايير عالمية — مصممة لتلبية احتياجات الشركات والأفراد على حد سواء
          </p>
        </RevealOnScroll>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;
          return (
            <RevealOnScroll key={i} direction={isEven ? "right" : "left"} delay={i * 0.1}>
              <motion.div
                className="rounded-2xl shadow-sm border border-gray-100 accent-glow overflow-hidden relative"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-white/40"></div>
                </div>
                <div className="relative p-8 md:p-12">
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
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-bold text-red-600 mb-4">ما نقدّمه</h4>
                      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.08}>
                        {service.features.map((feature, j) => (
                          <StaggerItem key={j}>
                            <motion.div
                              className="flex items-center gap-3 group cursor-default"
                              whileHover={{ x: -5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                              </motion.div>
                              <span className="text-gray-700 text-sm group-hover:text-dark transition-colors">{feature}</span>
                            </motion.div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          );
        })}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3">مهتم بخدماتنا؟</h2>
              <div className="accent-divider w-16 mx-auto mb-4"></div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">نقدّم عقود صيانة مرنة وأسعار خاصة للشركات. تواصل معنا لمناقشة احتياجاتكم.</p>
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
