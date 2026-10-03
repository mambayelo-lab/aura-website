import { ArchitectShowcase } from "@/components/pages/ArchitectShowcase";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "architect");

export default function Page() {
  return <ArchitectShowcase locale="fr" />;
}
