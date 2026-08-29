"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowLeft } from "lucide-react";
import { RevealOnScroll, ScalePop, MagneticHover } from "@/components/MotionElements";

const placeholderPosts = [
  {
    category: "نصائح الصيانة",
    title: "كيف تحافظ على محرك سيارتك VAG في أفضل حالة؟",
    excerpt: "مقال قادم يتضمن أهم النصائح العملية للحفاظ على أداء محركات فولكس واجن وأودي وسكودا وسيات وبورشه.",
    date: "قريباً",
    readTime: "5 دقائق"
  },
  {
    category: "تعديل الأداء",
    title: "ما الفرق بين Stage 1 و Stage 2 و Stage 3 في برمجة ECU؟",
    excerpt: "دليل شامل يشرح الفروقات العملية بين مراحل تعديل الأداء وما يناسب كل نوع من المستخدمين.",
    date: "قريباً",
    readTime: "7 دقائق"
  },
  {
    category: "أخبار الشركة",
    title: "V POWER TUNING تطلق منصة التوظيف الذكية المدعومة بالذكاء الاصطناعي",
    excerpt: "أحدث منصة في السوق السورية لتقييم الكوادر الفنية وربطهم بأصحاب العمل بطريقة موضوعية ودقيقة.",
    date: "قريباً",
    readTime: "4 دقائق"
  },
  {
    category: "نظام ERP",
    title: "لماذا تحتاج ورشتك إلى نظام ERP متخصص وليس برنامج محاسبة عام؟",
    excerpt: "الفرق الجوهري بين نظام ERP المصمم لمراكز الصيانة وبرامج المحاسبة العامة، وكيف يؤثر ذلك على كفاءة عملك.",
    date: "قريباً",
    readTime: "6 دقائق"
  },
  {
    category: "تشخيص الأعطال",
    title: "كيف يستخدم VCDS وODIS في تشخيص أعطال سيارات VAG؟",
    excerpt: "شرح مبسط لأدوات التشخيص الرسمية وكيف تساعد في إيجاد الأعطال الدقيقة في وقت قياسي.",
    date: "قريباً",
    readTime: "8 دقائق"
  },
  {
    category: "تجهيز الورش",
    title: "دليل المستثمر: كيف تجهز مركز صيانة سيارات VAG من الصفر؟",
    excerpt: "الخطوات الكاملة من التخطيط إلى التشغيل، شاملاً المعدات والبرامج والكوادر البشرية.",
    date: "قريباً",
    readTime: "10 دقائق"
  }
];

export default function BlogPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">المعرفة والأخبار</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">المدونة والأخبار</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            مقالات تقنية، نصائح صيانة، وأخبار V POWER TUNING — كل ما يخص عالم سيارات VAG في مكان واحد.
          </p>
        </RevealOnScroll>
      </div>

      {/* Coming Soon Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <RevealOnScroll direction="up">
          <div className="bg-dark text-white rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(220,38,38,0.4) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            </div>
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <BookOpen className="w-16 h-16 text-red-500 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">المحتوى قيد الإعداد</h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                نعمل على إعداد مقالات تقنية احترافية. تابعونا قريباً لمعرفة كل جديد في عالم VAG.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Placeholder Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl font-black text-dark mb-8">مقالات قادمة</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post, i) => (
            <RevealOnScroll key={i} direction="up" delay={i * 0.08}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full group cursor-default accent-glow"
                whileHover={{ y: -6, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
                <div className="p-6">
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-dark mt-3 mb-2 text-base leading-snug group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <ScalePop delay={0.2}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#1e293b] to-dark rounded-2xl p-10 text-white border border-red-600/20">
            <h2 className="text-xl font-bold mb-3">تواصل معنا للاستفسارات التقنية</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              لديك سؤال تقني؟ فريقنا من المهندسين والفنيين المتخصصين جاهز للإجابة.
            </p>
            <MagneticHover>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all"
              >
                تواصل معنا
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </MagneticHover>
          </div>
        </div>
      </ScalePop>
    </div>
  );
}
