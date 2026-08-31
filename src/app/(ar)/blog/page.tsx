import BlogView from "@/views/BlogView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/blog");

export default function Page() {
  return <BlogView locale="ar" />;
}
