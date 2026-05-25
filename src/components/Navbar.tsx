"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
