"use server";

import { revalidatePath } from "next/cache";
import { fetchContactInfo, updateContactInfo } from "@/lib/backend";

export interface ContactData {
  location: string;
  phone: string;
  email: string;
  officeHours: string;
  facebook?: string | null;
  twitter?: string | null;
  youtube?: string | null;
  website?: string | null;
}

export async function getContactInfoAction() {
  try {
    const info = await fetchContactInfo();
    return { success: true, data: info };
  } catch (error: any) {
    console.error("Failed to fetch contact info:", error);
    return { success: false, error: error.message || "Database fetch failed" };
  }
}

export async function updateContactInfoAction(formData: FormData) {
  try {
    const contactData: ContactData = {
      location: formData.get("location") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      officeHours: formData.get("officeHours") as string,
      facebook: (formData.get("facebook") as string) || undefined,
      twitter: (formData.get("twitter") as string) || undefined,
      youtube: (formData.get("youtube") as string) || undefined,
      website: (formData.get("website") as string) || undefined,
    };

    await updateContactInfo(contactData);

    revalidatePath("/");
    revalidatePath("/contact");
    revalidatePath("/services/online");
    revalidatePath("/schools/directory");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to update contact info:", error);
    return { success: false, error: error.message || "Database update failed" };
  }
}

