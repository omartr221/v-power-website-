"use client";
import { motion } from "framer-motion";
import { Cog, ShieldCheck, Gauge, Wrench, GraduationCap, BarChart2, CheckCircle2 } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";
import { localeHref, type Locale } from "@/i18n/config";
import { getServicesStrings } from "@/i18n/pages/services";

const individualIcons = [Cog, ShieldCheck, Gauge];
const corporateIcons = [Wrench, GraduationCap, BarChart2];

export default function ServicesView({ locale }: { locale: Locale }) {
  const strings = getServicesStrings(locale);
  const href = (path: string) => localeHref(locale, path);
  const isRtl = locale === "ar";
  const hoverX = isRtl ? -5 : 5;

  const individualServices = strings.individualServices.map((service, i) => ({
    ...service,
    icon: individualIcons[i] || Wrench,
  }));
  const corporateServices = strings.corporateServices.map((service, i) => ({
    ...service,
    icon: corporateIcons[i] || Wrench,
  }));

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
              <h4 className="text-sm font-bold text-red-600 mb-4">{strings.sections.whatWeOffer}</h4>
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
                              whileHover={{ x: hoverX }}
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
                        whileHover={{ x: hoverX }}
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
          <p className="text-red-600 font-bold text-sm mb-3">{strings.header.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">{strings.header.title}</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg mb-4">
            {strings.header.intro}
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto text-base">
            {strings.header.subIntro}
          </p>
        </RevealOnScroll>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div id="individuals" className="scroll-mt-24">
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-10 flex items-center gap-3">
              <span className="w-10 h-1 bg-red-600 rounded-full inline-block"></span>
              {strings.sections.individualsTitle}
            </h2>
          </RevealOnScroll>
          <div className="space-y-12">
            {individualServices.map(renderService)}
          </div>
        </div>

        <div id="corporate" className="scroll-mt-24">
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-10 flex items-center gap-3">
              <span className="w-10 h-1 bg-red-600 rounded-full inline-block"></span>
              {strings.sections.corporateTitle}
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
              <h2 className="text-2xl md:text-3xl font-black text-dark mb-5">{strings.integration.title}</h2>
              <div className="accent-divider w-20 mx-auto mb-6"></div>
              <p className="text-gray-500 max-w-3xl mx-auto mb-8 text-lg">
                {strings.integration.intro}
              </p>
              <StaggerContainer className="text-start max-w-3xl mx-auto space-y-4" staggerDelay={0.1}>
                {strings.integration.points.map((point, i) => (
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{strings.cta.title}</h2>
              <div className="accent-divider w-16 mx-auto mb-4"></div>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {strings.cta.text}
              </p>
              <MagneticHover>
                <a
                  href={href("/contact")}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  {strings.cta.button}
                </a>
              </MagneticHover>
            </div>
          </div>
        </div>
      </ScalePop>
    </div>
  );
}
