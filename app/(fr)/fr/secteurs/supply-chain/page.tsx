import { IndustryPage } from "@/components/pages/IndustryPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "supplyChain");

export default function Page() {
  return <IndustryPage locale="fr" industry="supplyChain" />;
}
