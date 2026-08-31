import ContactView from "@/views/ContactView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/contact");

export default function Page() {
  return <ContactView locale="ar" />;
}
