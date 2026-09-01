"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Cog, Wrench, Gauge, Building, GraduationCap, Users } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, MagneticHover } from "@/components/MotionElements";
import { localeHref, type Locale } from "@/i18n/config";
import { getHomeContent } from "@/i18n/content";

export default function HomeView({ locale }: { locale: Locale }) {
  const homeData = getHomeContent(locale);
  const href = (path: string) => localeHref(locale, path);
  const isRtl = locale === "ar";
  const ownerIcons = [Cog, Wrench, Gauge];
  const investorIcons = [Building, GraduationCap, Users];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={homeData.heroImage}
            alt="V POWER TUNING"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/60 to-black/70"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-red-600/10 morphing-blob blur-[80px]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-500/10 morphing-blob blur-[100px]" style={{animationDelay: '-4s'}}></div>
        </div>
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
                src="/logo-v2.png"
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
              className="text-3xl md:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {homeData.heroTitle}
            </motion.h1>
            <motion.p
              className="text-red-400 font-bold text-lg mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {homeData.heroBrands}
            </motion.p>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {homeData.heroDescription}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <MagneticHover>
                <Link
                  href={href(homeData.ctaButton1Href)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all shadow-lg shadow-red-600/25 block"
                >
                  {homeData.ctaButton1}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href={href(homeData.ctaButton2Href)}
                  className="border border-gray-400 hover:border-white text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all hover:bg-white/5 block"
                >
                  {homeData.ctaButton2}
                </Link>
              </MagneticHover>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#f8f7f4] to-transparent"></div>
      </section>

      <div className="shimmer-line"></div>

      {/* Tagline / Value Proposition */}
      <section className="py-24 bg-gradient-to-b from-[#f8f7f4] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-5 max-w-4xl mx-auto">
                {homeData.taglineTitle}
              </h2>
              <p className="text-gray-500 text-lg">{homeData.taglineIntro}</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <RevealOnScroll direction={isRtl ? "left" : "right"}>
              <Link
                href={href("/services#individuals")}
                className="block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm accent-glow h-full hover:border-red-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-red-600 mb-3">{homeData.taglineLeft.title}</h3>
                <p className="text-gray-600 leading-relaxed">{homeData.taglineLeft.desc}</p>
              </Link>
            </RevealOnScroll>
            <RevealOnScroll direction={isRtl ? "right" : "left"}>
              <Link
                href={href("/services#corporate")}
                className="block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm accent-glow h-full hover:border-red-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-red-600 mb-3">{homeData.taglineRight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{homeData.taglineRight.desc}</p>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Services — Two Columns */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-5">{homeData.servicesTitle}</h2>
              <div className="accent-divider w-20 mx-auto mb-5"></div>
              <p className="text-gray-500 max-w-3xl mx-auto text-lg">{homeData.servicesSubtitle}</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">{homeData.ownerServicesTitle}</h3>
              <StaggerContainer className="space-y-6" staggerDelay={0.12}>
                {homeData.ownerServices.map((service, i) => {
                  const ServiceIcon = ownerIcons[i];
                  return (
                    <StaggerItem key={i}>
                      <div className="bg-[#f8f7f4] rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4">
                          <ServiceIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-dark mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">{homeData.investorServicesTitle}</h3>
              <StaggerContainer className="space-y-6" staggerDelay={0.12}>
                {homeData.investorServices.map((service, i) => {
                  const ServiceIcon = investorIcons[i];
                  return (
                    <StaggerItem key={i}>
                      <div className="bg-[#f8f7f4] rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4">
                          <ServiceIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-dark mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-gradient-to-b from-[#f8f7f4] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-dark mb-5">{homeData.differentiatorsTitle}</h2>
              <div className="accent-divider w-20 mx-auto"></div>
            </div>
          </RevealOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {homeData.differentiators.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-500/10 morphing-blob blur-[80px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <RevealOnScroll direction="up">
            <h2 className="text-2xl md:text-4xl font-bold mb-5">{homeData.ctaTitle}</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">{homeData.ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticHover>
                <Link
                  href={href(homeData.ctaButton1Href)}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  {homeData.ctaButton1}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href={href(homeData.ctaButton2Href)}
                  className="inline-block border border-gray-400 hover:border-white hover:bg-white/5 text-white px-10 py-4 rounded-lg font-medium text-lg transition-all"
                >
                  {homeData.ctaButton2}
                </Link>
              </MagneticHover>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
