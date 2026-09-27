import { SprintsPage } from "@/components/pages/SprintsPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "sprints");

export default function Page() {
  return <SprintsPage locale="en" />;
}
