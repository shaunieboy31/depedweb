import ContactPage from "./ContactPage";
import { fetchContactInfo } from "@/lib/backend";

export default async function Page() {
  const contactInfo = await fetchContactInfo();
  return <ContactPage contactInfo={contactInfo} />;
}

