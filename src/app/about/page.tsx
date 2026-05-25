"use client";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Globe, Handshake } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, TextReveal, GlowCard, MagneticHover } from "@/components/MotionElements";

const values = [
  { icon: Award, title: "الجودة", desc: "نلتزم بأعلى معايير الجودة العالمية في كل خدمة نقدّمها" },
  { icon: Users, title: "التخصص", desc: "تركيز كامل على مجموعة VAG يمنحنا عمقاً لا يُضاهى" },
  { icon: Globe, title: "الشراكات", desc: "علاقات مع موردين دوليين وشركاء معتمدين" },
  { icon: Handshake, title: "الموثوقية", desc: "ضمان على جميع الأعمال والتزام بالمواعيد" },
];

export default function AboutPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">من نحن</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">تعرّف على V POWER TUNING</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">الشريك المتخصص في خدمات سيارات مجموعة VAG</p>
        </RevealOnScroll>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <RevealOnScroll direction="right">
            <div>
              <h2 className="text-3xl font-black text-dark mb-6">قصّتنا</h2>
              <TextReveal
                text="V POWER TUNING شركة متخصصة حصرياً في خدمات سيارات مجموعة VAG — تشمل توفير قطع الغيار الأصلية، وتأمين الصيانات الاحترافية بجميع أنواعها، وتعديل السيارات باحترافية عالية، وتجهيز مراكز الصيانة بالكامل."
                className="text-gray-600 leading-relaxed mb-4"
              />
              <RevealOnScroll direction="up" delay={0.4}>
                <p className="text-gray-600 leading-relaxed mb-4">
                  مقرّنا في حمص - تل الشور، ونخدم عملاءنا من الشركات والمؤسسات محلياً ودولياً. نعتمد على فريق فني متخصص وبرمجيات ومعدات رسمية معتمدة وشراكات مع موردين دوليين.
                </p>
              </RevealOnScroll>
              <RevealOnScroll direction="up" delay={0.6}>
                <p className="text-gray-600 leading-relaxed">
                  نسعى لأن نكون الشريك الأول والأكثر موثوقية للشركات التي تمتلك أساطيل من سيارات VAG، بتقديم حلول صيانة وقطع غيار بعقود مرنة وجودة لا تُضاهى.
                </p>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={0.2}>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-dark p-10 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"
                  animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-500/10 morphing-blob blur-[80px]"></div>
              </div>
              <div className="relative">
                <motion.img
                  src="/logo.png"
                  alt="V POWER TUNING"
                  className="h-24 w-auto mx-auto mb-6 drop-shadow-xl brightness-0 invert"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="accent-divider w-16 mx-auto mb-4"></div>
                <p className="text-red-500 font-bold text-lg mb-2">VAG Specialist</p>
                <p className="text-gray-400 text-sm">حمص — تل الشور، سوريا</p>
                <StaggerContainer className="mt-6 flex flex-wrap justify-center gap-3" staggerDelay={0.1} delay={0.5}>
                  {["Volkswagen", "Audi", "Skoda", "Seat", "Porsche"].map((brand, i) => (
                    <StaggerItem key={i}>
                      <motion.span
                        className="bg-white/5 border border-red-500/20 text-gray-300 text-xs px-3 py-1.5 rounded-full inline-block"
                        whileHover={{ scale: 1.1, borderColor: "rgba(239,68,68,0.5)", color: "#f87171" }}
                      >
                        {brand}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-dark py-20 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(220,38,38,0.4) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        </div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/5 morphing-blob blur-[60px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <RevealOnScroll direction="right">
            <GlowCard className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/10 h-full hover:border-red-500/30 transition-all duration-500 accent-glow">
              <motion.div
                className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">رؤيتنا</h3>
              <p className="text-gray-400 leading-relaxed">
                أن نكون الشريك الإقليمي الأول في خدمات سيارات VAG، مع توسّع مستمر في الشراكات الدولية وتقديم حلول مبتكرة للشركات والمؤسسات.
              </p>
            </GlowCard>
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={0.2}>
            <GlowCard className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/10 h-full hover:border-red-500/30 transition-all duration-500 accent-glow">
              <motion.div
                className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">مهمتنا</h3>
              <p className="text-gray-400 leading-relaxed">
                تقديم قطع غيار أصلية وخدمات صيانة وتعديل وتجهيز مراكز متخصصة لسيارات VAG بأعلى معايير الجودة، مع التركيز على بناء شراكات طويلة الأمد.
              </p>
            </GlowCard>
          </RevealOnScroll>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <RevealOnScroll direction="up">
          <div className="text-center mb-14">
            <p className="text-red-600 font-bold text-sm mb-3">مبادئنا</p>
            <h2 className="text-3xl font-black text-dark mb-4">قيمنا الأساسية</h2>
            <div className="accent-divider w-16 mx-auto"></div>
          </div>
        </RevealOnScroll>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={i}>
                <motion.div
                  className="text-center group cursor-default"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="bg-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all duration-500 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  >
                    <Icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <h3 className="font-bold text-dark mb-2 group-hover:text-red-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
