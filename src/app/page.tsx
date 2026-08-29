"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cog, ShieldCheck, Gauge, Wrench, GraduationCap, BarChart2, ChevronLeft } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, GlowCard, MagneticHover } from "@/components/MotionElements";
import homeData from "../../content/home.json";

const iconMap = [Cog, ShieldCheck, Gauge, Wrench, GraduationCap, BarChart2];
const services = homeData.services.map((s, i) => ({ ...s, icon: iconMap[i] || Wrench }));

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={homeData.heroImage}
            alt="ورشة سيارات"
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
              className="text-gray-400 max-w-3xl mx-auto text-base leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {homeData.heroDescriptionIntro}
            </motion.p>
            <div className="max-w-3xl mx-auto text-gray-400 text-base leading-relaxed mb-10">
              {homeData.heroDescriptionLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
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
                  {homeData.heroButton1}
                </Link>
              </MagneticHover>
              <MagneticHover>
                <Link
                  href="/about"
                  className="border border-gray-400 hover:border-white text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all hover:bg-white/5 block"
                >
                  {homeData.heroButton2}
                </Link>
              </MagneticHover>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#f8f7f4] to-transparent"></div>
      </section>

      <div className="shimmer-line"></div>

      {/* Services Overview */}
      <section className="py-28 bg-gradient-to-b from-[#f8f7f4] to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-20">
              <p className="text-red-600 font-bold text-sm mb-3">ما نقدّمه</p>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-5">{homeData.servicesTitle}</h2>
              <div className="accent-divider w-20 mx-auto mb-5"></div>
              <p className="text-gray-500 max-w-3xl mx-auto text-lg">{homeData.servicesSubtitle}</p>
            </div>
          </RevealOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={i}>
                  <GlowCard className="bg-white rounded-2xl p-7 border border-gray-100 group cursor-default h-full text-center accent-glow">
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto bg-dark group-hover:bg-red-600 transition-colors duration-500 shadow-lg pulse-ring">
                      <Icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.desc}</p>
                    {service.bullets && service.bullets.length > 0 && (
                      <ul className="text-right space-y-2 text-gray-500 text-sm leading-relaxed list-disc list-inside">
                        {service.bullets.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    )}
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
    </div>
  );
}
