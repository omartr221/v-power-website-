"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, Brain, Award, Users, ArrowLeft } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";

const trainingPrograms = [
  {
    icon: GraduationCap,
    title: "برامج التدريب الفني",
    desc: "برامج تدريبية وفق مناهج الشركة الصانعة، تغطي جميع المستويات من المبتدئ إلى المتخصص.",
    items: [
      "الصيانة الميكانيكية: محركات، ناقلات الحركة، التعليق، الفرامل.",
      "التشخيص الإلكتروني: استخدام VCDS، ODIS، وأجهزة VAS الأصلية.",
      "تعديل الأداء: برمجة ECU من Stage 1 حتى Stage 3.",
      "أنظمة السيارات الحديثة: الكهرباء، الإلكترونيات، أنظمة ADAS.",
      "شهادات إتمام تدريب معتمدة لكل دورة."
    ]
  },
  {
    icon: Brain,
    title: "منصة التقييم الذكية",
    desc: "منصة رقمية متطورة مدعومة بالذكاء الاصطناعي لتقييم المتقدمين بشكل شامل وموضوعي.",
    items: [
      "جمع بيانات شاملة عن المتقدم: الخبرات، المهارات، المؤهلات العلمية.",
      "امتحان إلكتروني ذكي يختبر المهارات التقنية والمهنية والشخصية.",
      "تقييم مستوى الذكاء والقدرات التحليلية حسب متطلبات الوظيفة.",
      "مقابلة حقيقية لتقييم المتقدم بشكل فعلي بعد الاختبار الإلكتروني.",
      "تقرير تفصيلي يحدد نقاط القوة والضعف لكل متقدم."
    ]
  },
  {
    icon: Users,
    title: "برامج تطوير الكفاءات",
    desc: "لا نكتفي بالتقييم، بل نعمل على تطوير المتدربين ورفع مستواهم.",
    items: [
      "تحديد نقاط الضعف الفردية لكل متدرب.",
      "برامج تدريبية مكثفة ومخصصة لتقوية نقاط الضعف.",
      "متابعة مستمرة للتقدم طوال فترة التدريب.",
      "تقييم دوري لقياس مستوى التحسن.",
      "دعم المتدربين حتى الوصول للمستوى المطلوب."
    ]
  },
  {
    icon: Award,
    title: "منصة التوظيف والربط",
    desc: "نربط المتدربين المؤهلين بفرص العمل المحلية والدولية بشكل احترافي.",
    items: [
      "قاعدة بيانات للكوادر المؤهلة متاحة للشركات والمستثمرين.",
      "ربط المتدربين المؤهلين بمراكز الصيانة الباحثة عن كفاءات.",
      "توصيل الكوادر بالمستثمرين المحليين والدوليين.",
      "دعم المتدرب في عملية التقديم والمقابلات.",
      "متابعة ما بعد التوظيف لضمان النجاح."
    ]
  }
];

export default function TrainingPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">خدماتنا</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">التدريب الفني والتوظيف</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg mb-3">
            نؤمن بأن تطوير السوق يبدأ بتطوير الكوادر البشرية. لذلك نقدم برامج تدريبية متخصصة،
            ونعمل على تأهيل المتدربين وربطهم بفرص العمل المحلية والدولية.
          </p>
        </RevealOnScroll>
      </div>

      {/* Programs */}
      <div className="max-w-7xl mx-auto px-4 space-y-10 mb-20">
        {trainingPrograms.map((program, i) => {
          const Icon = program.icon;
          return (
            <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
              <motion.div
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm accent-glow"
                whileHover={{ y: -4, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div>
                    <motion.div
                      className="bg-dark w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg pulse-ring"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-red-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark mb-2">{program.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{program.desc}</p>
                  </div>
                  <div className="md:col-span-2">
                    <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                      {program.items.map((item, j) => (
                        <StaggerItem key={j}>
                          <motion.div
                            className="flex items-start gap-3 group"
                            whileHover={{ x: -5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                            <span className="text-gray-600 text-sm leading-relaxed group-hover:text-dark transition-colors">{item}</span>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* CTA */}
      <ScalePop delay={0.2}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-dark rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="relative">
              <GraduationCap className="w-14 h-14 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">هل أنت مهتم بالتدريب أو التوظيف؟</h2>
              <div className="accent-divider w-16 mx-auto mb-4"></div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                سواء كنت تبحث عن تطوير مهاراتك، أو شركة تبحث عن كوادر فنية مؤهلة — تواصل معنا اليوم.
              </p>
              <MagneticHover>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  تواصل معنا
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </MagneticHover>
            </div>
          </div>
        </div>
      </ScalePop>
    </div>
  );
}
