import { ProductPage } from "@/components/pages/ProductPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "architect");

export default function Page() {
  return <ProductPage locale="fr" product="architect" />;
}
