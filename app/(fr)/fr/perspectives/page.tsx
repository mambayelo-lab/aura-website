import { InsightsPage } from "@/components/pages/InsightsPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "insights");

export default function Page() {
  return <InsightsPage locale="fr" />;
}
