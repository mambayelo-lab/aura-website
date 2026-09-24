import { InsightsPage } from "@/components/pages/InsightsPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "insights");

export default function Page() {
  return <InsightsPage locale="en" />;
}
