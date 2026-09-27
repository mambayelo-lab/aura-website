import { SprintsPage } from "@/components/pages/SprintsPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "sprints");

export default function Page() {
  return <SprintsPage locale="fr" />;
}
