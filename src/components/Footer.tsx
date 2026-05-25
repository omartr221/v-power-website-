import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import contactData from "../../content/contact.json";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 border-t border-red-600/10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="mb-4">
            <img src="/logo.png" alt="V POWER TUNING" className="h-16 w-auto brightness-0 invert" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            شركة متخصصة حصرياً في قطع الغيار والصيانة والتعديل وتجهيز مراكز الصيانة
            لسيارات مجموعة VAG (Volkswagen, Audi, Skoda, Seat, Porsche).
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">روابط سريعة</h3>
          <div className="space-y-2">
            <Link href="/" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">الرئيسية</Link>
            <Link href="/services" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">خدماتنا</Link>
            <Link href="/about" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">من نحن</Link>
            <Link href="/contact" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">تواصل معنا</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">تواصل معنا</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-5 h-5 text-red-500 shrink-0" />
              <span>{contactData.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-red-500 shrink-0" />
              <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="hover:text-red-400 transition-colors">{contactData.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
              <a href={`https://wa.me/${contactData.whatsapp.replace(/[+\s]/g, '')}`} target="_blank" className="hover:text-green-400 transition-colors">واتساب</a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-red-500 shrink-0" />
              <span>{contactData.workingHours}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-red-600/10 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} V POWER TUNING. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
