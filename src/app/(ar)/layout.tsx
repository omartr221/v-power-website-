import "../globals.css";
import SiteShell from "@/components/SiteShell";

export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="ar">{children}</SiteShell>;
}
