import AboutView from "@/views/AboutView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/about");

export default function Page() {
  return <AboutView locale="ar" />;
}
