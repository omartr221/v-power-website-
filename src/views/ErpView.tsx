"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart2, CheckCircle2, ClipboardList, Users, Database, TrendingUp, ArrowLeft, ArrowRight } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";
import { localeHref, type Locale } from "@/i18n/config";
import { getErpStrings } from "@/i18n/pages/erp";

const iconMap = [ClipboardList, Users, Database, BarChart2, TrendingUp, ClipboardList];

export default function ErpView({ locale }: { locale: Locale }) {
  const t = getErpStrings(locale);
  const href = (path: string) => localeHref(locale, path);
  const isRtl = locale === "ar";
  const Forward = isRtl ? ArrowLeft : ArrowRight;
  const consultingFeatures = t.consulting.features;
  const erpModules = t.modules.items.map((m, i) => ({ ...m, icon: iconMap[i] || ClipboardList }));

  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">{t.header.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">{t.header.title}</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            {t.header.intro}
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
                <h2 className="text-2xl font-bold text-dark mb-3">{t.consulting.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t.consulting.desc}
                </p>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-sm font-bold text-red-600 mb-4">{t.consulting.featuresTitle}</h4>
                <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                  {consultingFeatures.map((item, j) => (
                    <StaggerItem key={j}>
                      <motion.div
                        className="flex items-start gap-3 group"
                        whileHover={{ x: isRtl ? -5 : 5 }}
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
            <p className="text-red-600 font-bold text-sm mb-3">{t.modules.eyebrow}</p>
            <h2 className="text-3xl font-black text-dark mb-4">{t.modules.title}</h2>
            <div className="accent-divider w-20 mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t.modules.subtitle}
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
              <h3 className="text-2xl font-bold mb-3">{t.ai.title}</h3>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t.ai.desc}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{t.cta.title}</h2>
              <div className="accent-divider w-16 mx-auto mb-4"></div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                {t.cta.desc}
              </p>
              <MagneticHover>
                <Link
                  href={href("/contact")}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  {t.cta.button}
                  <Forward className="w-5 h-5" />
                </Link>
              </MagneticHover>
            </div>
          </div>
        </div>
      </ScalePop>
    </div>
  );
}
