import { OfferPage } from "@/components/pages/OfferPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "architect");

export default function Page() {
  return <OfferPage locale="en" offer="architect" />;
}
