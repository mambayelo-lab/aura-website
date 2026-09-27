import { FounderPage } from "@/components/pages/FounderPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "founder");

export default function Page() {
  return <FounderPage locale="en" />;
}
