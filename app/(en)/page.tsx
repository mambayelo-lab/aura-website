import { HomePage } from "@/components/pages/HomePage";
import { metadataFor } from "@/lib/pages";

export const metadata = metadataFor("en", "home");

export default function Page() {
  return <HomePage locale="en" />;
}
