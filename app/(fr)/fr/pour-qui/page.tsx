import { AudiencesPage } from "@/components/pages/AudiencesPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "audiences");

export default function Page() {
  return <AudiencesPage locale="fr" />;
}
