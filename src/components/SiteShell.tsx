import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { direction, type Locale } from "@/i18n/config";

/**
 * The document shell shared by both locale root layouts. Each locale needs its
 * own <html lang/dir>, which is why the app uses one root layout per locale
 * route group rather than a single shared one.
 */
export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} dir={direction(locale)}>
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `,
          }}
        />
      </body>
    </html>
  );
}
