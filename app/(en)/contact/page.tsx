import { ContactPage } from "@/components/pages/ContactPage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "contact");

export default function Page() {
  return <ContactPage locale="en" />;
}
