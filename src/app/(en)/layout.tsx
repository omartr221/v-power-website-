import "../globals.css";
import SiteShell from "@/components/SiteShell";

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
