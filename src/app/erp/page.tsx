"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart2, CheckCircle2, ClipboardList, Users, Database, TrendingUp, ArrowLeft } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";

const consultingFeatures = [
  "الهيكلة التنظيمية: تصميم هيكل تنظيمي يناسب حجم ونشاط مركز الصيانة.",
  "التوصيفات الوظيفية: تحديد المهام والمسؤوليات لكل وظيفة بوضوح.",
  "مخططات تدفق العمل (Flow Charts): رسم خرائط لسير العمليات اليومية لضمان سلاسة العمل.",
  "تحسين العمليات: تحليل العمليات الحالية وتقديم حلول لزيادة الكفاءة وتقليل الهدر.",
  "إدارة الموارد البشرية: تطوير سياسات التوظيف، التدريب، التحفيز، وتقييم الأداء.",
];

const erpModules = [
  {
    icon: ClipboardList,
    title: "بطاقة السيارة الشاملة",
    desc: "ملف كامل لكل سيارة يحتوي على جميع البيانات الفنية، سجل الصيانة الكامل، الأعطال السابقة، والإصلاحات المنفذة — أرشيف دائم قابل للرجوع إليه في أي وقت."
  },
  {
    icon: Users,
    title: "بطاقة العامل المتكاملة",
    desc: "تسجيل تفصيلي لكافة العمليات التي يقوم بها كل عامل، لتحليل أدائه الفعلي وحساب الحوافز الشهرية بدقة وشفافية تامة."
  },
  {
    icon: Database,
    title: "توثيق العمليات والطلبيات",
    desc: "توثيق شامل من لحظة دخول السيارة إلى المركز، مروراً بعمليات الصيانة والتشخيص، وصولاً إلى طلبيات قطع الغيار بين الأقسام."
  },
  {
    icon: BarChart2,
    title: "حساب التكاليف بدقة",
    desc: "حساب تكلفة كل إصلاح بناءً على ساعات العمل الفعلية وقطع الغيار المستخدمة، مع إصدار فواتير دقيقة وشفافة للعملاء."
  },
  {
    icon: TrendingUp,
    title: "تحليل البيانات بالذكاء الاصطناعي",
    desc: "تحليل أداء العمال، كفاءة العمليات، واتجاهات الأعطال باستخدام تقنيات الذكاء الاصطناعي، لاتخاذ قرارات مبنية على بيانات حقيقية."
  },
  {
    icon: ClipboardList,
    title: "أرشفة كاملة وأمان البيانات",
    desc: "حفظ أرشيف كامل لكل سيارة وكل عامل، مع أمان عالٍ للبيانات وإمكانية الوصول من أي مكان عبر واجهة سهلة الاستخدام."
  }
];

export default function ErpPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">خدماتنا</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">الاستشارات الإدارية ونظام ERP</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            نقدم للمستثمرين وأصحاب مراكز الصيانة والشركات الاستشارات الإدارية المتخصصة، بالإضافة إلى نظام إداري متكامل (ERP) صممناه خصيصاً لمراكز صيانة السيارات، وليس مجرد برنامج محاسبة عام.
          </p>
        </RevealOnScroll>
      </div>

      {/* Consulting Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <RevealOnScroll direction="up">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm accent-glow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div>
                <motion.div
                  className="bg-dark w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg pulse-ring"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <BarChart2 className="w-7 h-7 text-red-500" />
                </motion.div>
                <h2 className="text-2xl font-bold text-dark mb-3">الاستشارات الإدارية</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  نقدم دراسات متخصصة لتحسين أداء مراكز الصيانة، بدءاً من الهيكلة التنظيمية وصولاً إلى إدارة العمليات.
                </p>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-sm font-bold text-red-600 mb-4">ما نقدمه</h4>
                <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                  {consultingFeatures.map((item, j) => (
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
          </div>
        </RevealOnScroll>
      </div>

      {/* ERP Modules */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <RevealOnScroll direction="up">
          <div className="text-center mb-12">
            <p className="text-red-600 font-bold text-sm mb-3">النظام</p>
            <h2 className="text-3xl font-black text-dark mb-4">نظام ERP المتكامل لمراكز الصيانة</h2>
            <div className="accent-divider w-20 mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              طورناه خصيصاً لمراكز صيانة السيارات — نظام مرن وقابل للتعديل حسب احتياجات كل مركز صيانة.
            </p>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpModules.map((module, i) => {
            const Icon = module.icon;
            return (
              <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full accent-glow group cursor-default"
                  whileHover={{ y: -6, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="bg-dark w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-500 shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <h3 className="font-bold text-dark mb-2 group-hover:text-red-600 transition-colors">{module.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{module.desc}</p>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* AI Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <RevealOnScroll direction="up">
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(220,38,38,0.4) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
            </div>
            <div className="relative">
              <TrendingUp className="w-14 h-14 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">مدعوم بالذكاء الاصطناعي</h3>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                نظامنا لا يكتفي بتسجيل البيانات، بل يحللها باستخدام تقنيات الذكاء الاصطناعي لاكتشاف الأنماط، وتحديد فرص التحسين، ومساعدتك على اتخاذ قرارات أفضل وأسرع.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* CTA */}
      <ScalePop delay={0.2}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#1e293b] to-dark rounded-2xl p-12 text-white border border-red-600/20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 left-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">هل تريد تطوير إدارة مركزك؟</h2>
              <div className="accent-divider w-16 mx-auto mb-4"></div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                سواء كنت تبحث عن استشارات إدارية أو نظام ERP متكامل — تواصل معنا ونصمم لك الحل المناسب.
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
