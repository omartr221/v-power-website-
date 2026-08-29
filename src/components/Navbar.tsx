"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav className="bg-[#1e293b] text-white sticky top-0 z-50 shadow-lg border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-black text-xl tracking-widest uppercase">V POWER TUNING</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              الرئيسية
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium text-sm"
              >
                خدماتنا
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>

              {servicesOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-52 bg-[#1e293b] border border-red-600/20 rounded-xl shadow-xl overflow-hidden"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    href="/services#individuals"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-b border-red-600/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    للأفراد ومالكي السيارات
                  </Link>
                  <Link
                    href="/services#corporate"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    للشركات والمستثمرين
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              من نحن
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              تواصل معنا
            </Link>

            <a
              href="tel:+963989280600"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-bold"
            >
              <Phone className="w-4 h-4" />
              اتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-red-600/20">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              الرئيسية
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span>خدماتنا</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mr-4 mt-1 border-r-2 border-red-600/30 space-y-1 pr-3">
                  <Link
                    href="/services#individuals"
                    onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                    className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    للأفراد ومالكي السيارات
                  </Link>
                  <Link
                    href="/services#corporate"
                    onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                    className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    للشركات والمستثمرين
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              تواصل معنا
            </Link>
            <a
              href="tel:+963989280600"
              className="block w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-center font-bold mt-2"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
