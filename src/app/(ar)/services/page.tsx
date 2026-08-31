import ServicesView from "@/views/ServicesView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/services");

export default function Page() {
  return <ServicesView locale="ar" />;
}
