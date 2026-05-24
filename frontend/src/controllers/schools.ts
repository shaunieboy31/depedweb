"use server";

import { revalidatePath } from "next/cache";
import { fetchSchools, fetchSchoolStats, createSchool, updateSchool, deleteSchool, uploadFile } from "@/lib/backend";

export interface SchoolData {
  name: string;
  location: string;
  category: string;
  cluster: string;
  contact: string;
  type: string;
  logo?: string | null;
  banner?: string | null;
}

export async function getSchoolsAction() {
  try {
    const data = await fetchSchools();
    return { success: true, data };
  } catch (error: any) {
    console.error("Failed to fetch schools:", error);
    return { success: false, error: error.message || "Database fetch failed" };
  }
}

export async function getSchoolStatsAction() {
  try {
    const data = await fetchSchoolStats();
    return { success: true, data };
  } catch (error: any) {
    console.error("Failed to fetch school stats:", error);
    return { success: false, error: error.message || "Database fetch failed" };
  }
}

export async function getSchoolsByCategoryAction(category: string) {
  try {
    const schools = await fetchSchools();
    const filtered = (Array.isArray(schools) ? schools : []).filter((s: any) => s.category === category.toUpperCase());
    return { success: true, data: filtered };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateSchoolAction(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;
    const category = formData.get("category") as string;
    const cluster = formData.get("cluster") as string;
    const contact = formData.get("contact") as string;
    const type = formData.get("type") as string;

    const logoFile = formData.get("logo") as File | null;
    const bannerFile = formData.get("banner") as File | null;
    const oldLogoPath = formData.get("oldLogoPath") as string;
    const oldBannerPath = formData.get("oldBannerPath") as string;

    let logoUrl = oldLogoPath;
    let bannerUrl = oldBannerPath;

    if (logoFile && logoFile.size > 0 && typeof logoFile !== "string") {
      logoUrl = await uploadFile(logoFile);
    }
    if (bannerFile && bannerFile.size > 0 && typeof bannerFile !== "string") {
      bannerUrl = await uploadFile(bannerFile);
    }

    const data: SchoolData = {
      name,
      location,
      category,
      cluster,
      contact,
      type,
      logo: logoUrl || null,
      banner: bannerUrl || null,
    };

    if (id) {
      await updateSchool(parseInt(id), data);
    } else {
      await createSchool(data);
    }

    revalidatePath("/");
    revalidatePath("/schools");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Update School Error:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteSchoolAction(id: number) {
  try {
    await deleteSchool(id);
    revalidatePath("/");
    revalidatePath("/schools");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

