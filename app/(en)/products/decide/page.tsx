import { ProductPage } from "@/components/pages/ProductPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "decide");

export default function Page() {
  return <ProductPage locale="en" product="decide" />;
}
