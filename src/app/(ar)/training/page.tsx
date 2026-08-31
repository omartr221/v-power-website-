import TrainingView from "@/views/TrainingView";
import { buildMetadata } from "@/i18n/metadata";

export const metadata = buildMetadata("ar", "/training");

export default function Page() {
  return <TrainingView locale="ar" />;
}
