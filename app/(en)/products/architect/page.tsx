import { ProductPage } from "@/components/pages/ProductPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "architect");

export default function Page() {
  return <ProductPage locale="en" product="architect" />;
}
