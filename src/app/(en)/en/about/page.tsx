import AboutView from "@/views/AboutView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("en", "/about");

export default function Page() {
  return <AboutView locale="en" />;
}
