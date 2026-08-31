import HomeView from "@/views/HomeView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("en", "/");

export default function Page() {
  return <HomeView locale="en" />;
}
