import ErpView from "@/views/ErpView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/erp");

export default function Page() {
  return <ErpView locale="ar" />;
}
