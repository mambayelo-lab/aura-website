import { ContactPage } from "@/components/pages/ContactPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("fr", "contact");

export default function Page() {
  return <ContactPage locale="fr" />;
}
