"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";

const contactInfo = [
  { icon: Phone, title: "هاتف", value: "+963 989 280 600", href: "tel:+963989280600" },
  { icon: MessageCircle, title: "واتساب", value: "تواصل عبر واتساب", href: "https://wa.me/963989280600" },
  { icon: MapPin, title: "العنوان", value: "سوريا - حمص - أوتوستراد التحويلة مفرق تل الشور", href: "#" },
  { icon: Clock, title: "أوقات العمل", value: "السبت - الخميس: 8:00 ص - 6:00 م", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">تواصل معنا</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">نحن هنا لمساعدتكم</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            تواصلوا معنا بأي طريقة تناسبكم وسنرد عليكم في أقرب وقت
          </p>
        </RevealOnScroll>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <RevealOnScroll direction="right">
              <h2 className="text-2xl font-bold text-dark mb-6">معلومات التواصل</h2>
            </RevealOnScroll>
            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <StaggerItem key={i}>
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm group accent-glow"
                      whileHover={{ x: -8, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        className="bg-dark w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                      >
                        <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-500" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400">{info.title}</p>
                        <p className="font-medium text-dark">{info.value}</p>
                      </div>
                    </motion.a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* WhatsApp CTA */}
            <ScalePop delay={0.5}>
              <div className="mt-8 bg-dark rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[60px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">أسرع طريقة للتواصل</h3>
                  <p className="text-gray-400 text-sm mb-4">أرسلوا لنا رسالة عبر واتساب وسنرد عليكم فوراً</p>
                  <MagneticHover>
                    <a
                      href="https://wa.me/963989280600"
                      target="_blank"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all"
                    >
                      تواصل عبر واتساب
                    </a>
                  </MagneticHover>
                </div>
              </div>
            </ScalePop>
          </div>

          {/* Contact Form */}
          <div>
            <RevealOnScroll direction="left">
              <h2 className="text-2xl font-bold text-dark mb-6">أرسل رسالة</h2>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={0.2}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
                whileHover={{ boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                    <input
                      type="text"
                      placeholder="أدخل اسمك"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      placeholder="09XXXXXXXX"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">نوع الخدمة</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm bg-white">
                      <option value="">اختر نوع الخدمة</option>
                      <option value="parts">قطع غيار أصلية</option>
                      <option value="maintenance">صيانة احترافية</option>
                      <option value="tuning">تعديل سيارات</option>
                      <option value="center">تجهيز مركز صيانة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                    <textarea
                      rows={4}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                    ></textarea>
                  </div>
                  <MagneticHover>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all text-lg">
                      إرسال الرسالة
                    </button>
                  </MagneticHover>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
