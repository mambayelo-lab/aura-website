import { FounderPage } from "@/components/pages/FounderPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "founder");

export default function Page() {
  return <FounderPage locale="fr" />;
}
