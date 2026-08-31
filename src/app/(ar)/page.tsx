import HomeView from "@/views/HomeView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/");

export default function Page() {
  return <HomeView locale="ar" />;
}
