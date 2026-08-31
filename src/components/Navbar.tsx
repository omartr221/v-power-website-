"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { localeHref, switchLocaleHref, type Locale } from "@/i18n/config";
import { getUi } from "@/i18n/ui";

export default function Navbar({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const ui = getUi(locale);
  const href = (path: string) => localeHref(locale, path);
  const otherLocaleHref = switchLocaleHref(locale, pathname || "/");

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const languageToggle = (extraClasses = "") => (
    <Link
      href={otherLocaleHref}
      aria-label={ui.language.ariaLabel}
      title={ui.language.switchTo}
      className={`flex items-center gap-1.5 border border-gray-500 hover:border-red-500 hover:text-white text-gray-300 rounded-lg px-2.5 py-1 text-xs font-bold tracking-wide transition-colors ${extraClasses}`}
    >
      <Globe className="w-3.5 h-3.5" />
      {ui.language.switchLabel}
    </Link>
  );

  return (
    <nav className="bg-[#1e293b] text-white sticky top-0 z-50 shadow-lg border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={href("/")} className="flex items-center gap-2">
            <span className="text-white font-black text-xl tracking-widest uppercase">V POWER TUNING</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href={href("/")} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              {ui.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href={href("/services")}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium text-sm"
              >
                {ui.nav.services}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>

              {servicesOpen && (
                <div
                  className="absolute top-full start-0 mt-2 w-64 bg-[#1e293b] border border-red-600/20 rounded-xl shadow-xl overflow-hidden"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  {ui.nav.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      href={href(item.href)}
                      className={`flex flex-col px-4 py-3 text-sm hover:bg-white/5 transition-colors ${i < ui.nav.dropdown.length - 1 ? "border-b border-red-600/10" : ""}`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="flex items-center gap-2 text-gray-200 font-medium">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                        {item.label}
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5 ms-3.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href={href("/about")} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              {ui.nav.about}
            </Link>
            <Link href={href("/contact")} className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              {ui.nav.contact}
            </Link>

            {languageToggle()}
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            {languageToggle()}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? ui.nav.closeMenu : ui.nav.openMenu}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-red-600/20">
          <div className="px-4 py-3 space-y-2">
            <Link
              href={href("/")}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              {ui.nav.home}
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span>{ui.nav.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ms-4 mt-1 border-s-2 border-red-600/30 space-y-1 ps-3">
                  {ui.nav.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      href={href(item.href)}
                      onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                      className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={href("/about")}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              {ui.nav.about}
            </Link>
            <Link
              href={href("/contact")}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              {ui.nav.contact}
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
