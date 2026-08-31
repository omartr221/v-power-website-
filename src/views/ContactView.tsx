"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem, ScalePop, MagneticHover } from "@/components/MotionElements";
import { type Locale } from "@/i18n/config";
import { getContactContent } from "@/i18n/content";
import { getContactStrings } from "@/i18n/pages/contact";

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function ContactView({ locale }: { locale: Locale }) {
  const contactData = getContactContent(locale);
  const t = getContactStrings(locale);
  const isRtl = locale === "ar";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const contactInfo = [
    { icon: Mail, title: t.info.email, value: contactData.email, href: `mailto:${contactData.email}`, ltr: true },
    { icon: Phone, title: t.info.phone, value: contactData.phone, href: `tel:${contactData.phone.replace(/\s/g, '')}`, ltr: true },
    { icon: MessageCircle, title: t.info.whatsapp, value: t.info.whatsappValue, href: `https://wa.me/${contactData.whatsapp.replace(/[+\s]/g, '')}` },
    { icon: MapPin, title: t.info.location, value: contactData.address, href: contactData.mapsUrl },
  ];

  const socialInfo = [
    { IconComp: InstagramIcon, title: t.social.instagram, href: contactData.instagram, color: "text-pink-500 group-hover:bg-pink-600" },
    { IconComp: FacebookIcon, title: t.social.facebook, href: contactData.facebook, color: "text-blue-400 group-hover:bg-blue-600" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

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

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <RevealOnScroll direction={isRtl ? "right" : "left"}>
              <h2 className="text-2xl font-bold text-dark mb-6">{t.infoTitle}</h2>
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
                      whileHover={{ x: isRtl ? -8 : 8, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)" }}
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
                        <p className="font-medium text-dark" dir={(info as any).ltr ? "ltr" : undefined}>{info.value}</p>
                      </div>
                    </motion.a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Social Media */}
            <div className="mt-4 flex gap-3">
              {socialInfo.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className={`flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 shadow-sm group accent-glow flex-1 justify-center ${social.color}`}
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-lg bg-dark flex items-center justify-center transition-colors duration-500 ${social.color}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <social.IconComp />
                  </motion.div>
                  <span className="font-medium text-dark text-sm">{social.title}</span>
                </motion.a>
              ))}
            </div>

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
                  <h3 className="text-lg font-bold text-white mb-2">{t.whatsappCta.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{t.whatsappCta.desc}</p>
                  <MagneticHover>
                    <a
                      href="https://wa.me/963989280600"
                      target="_blank"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all"
                    >
                      {t.whatsappCta.button}
                    </a>
                  </MagneticHover>
                </div>
              </div>
            </ScalePop>
          </div>

          {/* Contact Form */}
          <div>
            <RevealOnScroll direction={isRtl ? "left" : "right"}>
              <h2 className="text-2xl font-bold text-dark mb-6">{t.form.title}</h2>
            </RevealOnScroll>
            <RevealOnScroll direction={isRtl ? "left" : "right"} delay={0.2}>
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.phoneLabel}</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t.form.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.serviceLabel}</label>
                    <select name="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm bg-white">
                      <option value="">{t.form.servicePlaceholder}</option>
                      <option value="parts">{t.form.serviceOptions.parts}</option>
                      <option value="maintenance">{t.form.serviceOptions.maintenance}</option>
                      <option value="training">{t.form.serviceOptions.training}</option>
                      <option value="consulting">{t.form.serviceOptions.consulting}</option>
                      <option value="other">{t.form.serviceOptions.other}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.messageLabel}</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={t.form.messagePlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                      required
                    ></textarea>
                  </div>
                  <MagneticHover>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-bold transition-all text-lg"
                    >
                      {status === "sending" ? t.form.sending : t.form.submit}
                    </button>
                  </MagneticHover>
                  {status === "sent" && (
                    <p className="text-green-600 text-sm text-center font-medium">{t.form.success}</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-sm text-center font-medium">{t.form.error}</p>
                  )}
                </div>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
