import { ProductPage } from "@/components/pages/ProductPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "supply");

export default function Page() {
  return <ProductPage locale="fr" product="supply" />;
}
