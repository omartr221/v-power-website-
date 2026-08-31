"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { RevealOnScroll, ScalePop, MagneticHover } from "@/components/MotionElements";
import { localeHref, type Locale } from "@/i18n/config";
import { getBlogStrings } from "@/i18n/pages/blog";

export default function BlogView({ locale }: { locale: Locale }) {
  const t = getBlogStrings(locale);
  const href = (path: string) => localeHref(locale, path);
  const isRtl = locale === "ar";
  const Forward = isRtl ? ArrowLeft : ArrowRight;
  const placeholderPosts = t.posts;

  return (
    <div className="py-16 bg-gradient-to-b from-[#f8f7f4] to-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <RevealOnScroll direction="down">
          <p className="text-red-600 font-bold text-sm mb-3">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-5">{t.title}</h1>
          <div className="accent-divider w-20 mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t.subtitle}
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
              <h2 className="text-2xl font-bold mb-2">{t.bannerTitle}</h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                {t.bannerText}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Placeholder Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <RevealOnScroll direction="up">
          <h2 className="text-2xl font-black text-dark mb-8">{t.upcomingTitle}</h2>
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
            <h2 className="text-xl font-bold mb-3">{t.ctaTitle}</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {t.ctaText}
            </p>
            <MagneticHover>
              <Link
                href={href("/contact")}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all"
              >
                {t.ctaButton}
                <Forward className="w-4 h-4" />
              </Link>
            </MagneticHover>
          </div>
        </div>
      </ScalePop>
    </div>
  );
}
