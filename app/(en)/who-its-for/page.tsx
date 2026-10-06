import { AudiencesPage } from "@/components/pages/AudiencesPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "audiences");

export default function Page() {
  return <AudiencesPage locale="en" />;
}
