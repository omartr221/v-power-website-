import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "V POWER TUNING | ورشة صيانة سيارات احترافية",
  description: "ورشة V POWER TUNING لصيانة وإصلاح السيارات - ميكانيك، كهرباء، برمجة، فحص وتشخيص. خبرة واحترافية في خدمة سيارتك.",
  keywords: "ورشة سيارات, صيانة سيارات, ميكانيك, كهرباء سيارات, برمجة سيارات, حمص, سوريا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}} />
      </body>
    </html>
  );
}
