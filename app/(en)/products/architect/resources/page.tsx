import { ResourcesPage } from "@/components/ArchitectExtras";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "resources");

export default function Page() {
  return <ResourcesPage locale="en" />;
}
