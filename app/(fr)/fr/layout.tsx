import { RootDocument } from "@/components/RootDocument";
import { baseMetadata } from "@/lib/metadata";

export const metadata = baseMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="fr">{children}</RootDocument>;
}
