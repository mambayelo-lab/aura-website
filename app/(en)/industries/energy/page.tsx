import { IndustryPage } from "@/components/pages/IndustryPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "energy");

export default function Page() {
  return <IndustryPage locale="en" industry="energy" />;
}
