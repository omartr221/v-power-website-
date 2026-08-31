import ContactView from "@/views/ContactView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("en", "/contact");

export default function Page() {
  return <ContactView locale="en" />;
}
