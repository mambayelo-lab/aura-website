import { OfferPage } from "@/components/pages/OfferPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "decide");

export default function Page() {
  return <OfferPage locale="fr" offer="decide" />;
}
