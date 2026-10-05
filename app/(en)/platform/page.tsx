import { PlatformPage } from "@/components/pages/PlatformPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "platform");

export default function Page() {
  return <PlatformPage locale="en" />;
}
