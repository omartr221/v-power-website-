"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cog, ShieldCheck, Gauge, Wrench, ChevronLeft, CheckCircle2 } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, TextReveal, GlowCard, MagneticHover, ParallaxSection } from "@/components/MotionElements";

const services = [
  {
    icon: Cog,
    title: "قطع غيار أصلية",
    desc: "نوفّر قطع غيار أصلية ومعتمدة لجميع سيارات مجموعة VAG بما يضمن أعلى معايير الجودة والأداء.",
  },
  {
    icon: ShieldCheck,
    title: "تأمين الصيانات الاحترافية",
    desc: "خدمات صيانة شاملة بأيدي فنيين متخصصين وبمعدات وبرمجيات رسمية وفق المعايير العالمية.",
  },
  {
    icon: Gauge,
    title: "تعديل السيارات باحترافية",
    desc: "تعديل أداء المحركات وتطوير الأنظمة بشكل مدروس وآمن يرفع كفاءة سيارتكم.",
  },
  {
    icon: Wrench,
    title: "تجهيز مراكز الصيانة",
    desc: "تجهيز مراكز الصيانة بكل ما يلزمها من عدد وأجهزة احترافية ومعدات متخصصة.",
  },
];

const strengths = [
  "تخصص حصري بمجموعة VAG (Volkswagen, Audi, Skoda, Seat, Porsche)",
  "فريق فني مؤهل ومدرّب على أحدث التقنيات",
  "استخدام البرمجيات والمعدات الرسمية المعتمدة",
  "قطع غيار أصلية ومعتمدة من المصنّع",
  "ضمان على جميع الأعمال والخدمات",
  "شراكات مع موردين دوليين",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80"
            alt="ورشة سيارات"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/60 to-black/70"></div>
        </div>
        {/* Morphing blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-red-600/10 morphing-blob blur-[80px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-500/10 morphing-blob blur-[100px]" style={{animationDelay: '-4s'}}></div>
        </div>
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${5 + i * 8}%`, top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              ['--dx' as string]: `${(i % 2 ? 1 : -1) * 40}px`,
              ['--dy' as string]: `${-50 - i * 4}px`
            }} />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <img
                src="/logo.png"
                alt="V POWER TUNING"
                className="h-28 md:h-48 w-auto mx-auto mb-8 drop-shadow-2xl animate-float"
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="accent-divider mx-auto mb-6"
            />
            <motion.h1
              className="text-2xl md:text-4xl text-white/90 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              شريككم المتخصص في قطع الغيار والصيانة وتعديل السيارات
            </motion.h1>
            <motion.p
              className="text-red-400 font-bold text-lg mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Volkswagen • Audi • Skoda • Seat • Porsche
            </motion.p>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              نقدّم حلولاً متكاملة واحترافية لسيارات مجموعة VAG — من توفير قطع الغيار الأصلية، إلى الصيانة الشاملة، وتعديل الأداء، وتجهيز مراكز الصيانة — بمعايير عالمية وخبرة تتجاوز عشر سنوات.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <MagneticHover>
                <Link
                  href="/services"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg shadow-red-600/25 block"
                >
                  اكتشف خدماتنا
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/about"
                  className="border border-gray-400 hover:border-white text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all hover:bg-white/5 block"
                >
                  تعرّف علينا
                </Link>
              </MagneticHover>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#f8f7f4] to-transparent"></div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-line"></div>

      {/* Services Overview */}
      <section className="py-28 bg-gradient-to-b from-[#f8f7f4] to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-20">
              <p className="text-red-600 font-bold text-sm mb-3">ما نقدّمه</p>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-5">خدماتنا الأساسية</h2>
              <div className="accent-divider w-20 mx-auto mb-5"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">حلول متكاملة لسيارات مجموعة VAG — نخدم الشركات والأفراد بنفس مستوى الاحترافية</p>
            </div>
          </RevealOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={i}>
                  <GlowCard className="bg-white rounded-2xl p-7 border border-gray-100 group cursor-default h-full text-center accent-glow">
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto bg-dark group-hover:bg-red-600 transition-colors duration-500 shadow-lg pulse-ring">
                      <Icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <RevealOnScroll direction="up" delay={0.8}>
            <div className="text-center mt-14">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold transition-colors text-lg group"
              >
                المزيد عن خدماتنا
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-28 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(220,38,38,0.4) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        </div>
        {/* Floating blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/5 morphing-blob blur-[60px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600/5 morphing-blob blur-[60px]" style={{animationDelay: '-3s'}}></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <p className="text-red-500 font-bold text-sm mb-3">لماذا V POWER</p>
              <h2 className="text-3xl md:text-4xl font-black mb-5">ما يميزنا عن غيرنا</h2>
              <div className="accent-divider w-20 mx-auto mb-5"></div>
              <TextReveal
                text="تخصصنا الحصري بمجموعة VAG يمنحنا عمقاً في المعرفة وجودة في الأداء لا تجدها في الورشات العامة"
                className="text-gray-400 max-w-2xl mx-auto"
              />
            </div>
          </RevealOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {strengths.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-red-500/10 rounded-xl p-5 hover:border-red-500/30 hover:bg-white/10 transition-all duration-500 group cursor-default"
                  whileHover={{ scale: 1.03, x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Shimmer divider */}
      <div className="shimmer-line"></div>

      {/* Corporate CTA */}
      <section className="py-24 bg-gradient-to-b from-navy to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-600 rounded-full blur-[200px]"
            animate={{
              x: [0, 50, 0, -50, 0],
              y: [0, -30, 0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <ScalePop>
            <p className="text-red-500 font-bold text-sm mb-4">شراكة احترافية</p>
            <h2 className="text-3xl md:text-5xl font-black mb-5">نبحث عن شركاء نجاح</h2>
            <div className="accent-divider w-24 mx-auto mb-6"></div>
          </ScalePop>
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
              سواء كنتم شركة نقل، وكالة سيارات، أو مؤسسة تمتلك أسطولاً من سيارات VAG — نقدّم لكم حلول صيانة وقطع غيار وتجهيز مراكز بعقود مرنة وأسعار تنافسية.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.5}>
            <MagneticHover>
              <Link
                href="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-red-600/20"
              >
                تواصل معنا للتفاصيل
              </Link>
            </MagneticHover>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
