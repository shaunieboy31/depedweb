"use server";

import { revalidatePath } from "next/cache";
import { fetchOrgCharts, createOrgChart, updateOrgChart, deleteOrgChart, uploadFile } from "@/lib/backend";

export interface OrgChartData {
  department: string;
  image?: string | null;
  sortOrder: number;
}

export async function getOrgChartsAction() {
  try {
    const charts = await fetchOrgCharts();
    return { success: true, data: charts };
  } catch (error: any) {
    console.error("Error fetching org charts:", error);
    return { success: false, error: error.message || "Failed to fetch organizational charts." };
  }
}

export async function updateOrgChartAction(formData: FormData) {
  try {
    const id = formData.get("id") ? parseInt(formData.get("id") as string) : null;
    const department = formData.get("department") as string;
    const sortOrder = parseInt(formData.get("sortOrder") as string) || 0;
    const imageFile = formData.get("image") as File;
    const oldImagePath = formData.get("oldImagePath") as string;

    let imagePath = oldImagePath || null;
    if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
      imagePath = await uploadFile(imageFile);
    }

    const orgData: OrgChartData = { department, image: imagePath, sortOrder };

    if (id) {
      await updateOrgChart(id, orgData);
    } else {
      await createOrgChart(orgData);
    }

    revalidatePath("/about-us/organizational-structure");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Error saving org chart:", error);
    return { success: false, error: error.message || "Failed to save organizational chart." };
  }
}

export async function deleteOrgChartAction(id: number) {
  try {
    await deleteOrgChart(id);

    revalidatePath("/about-us/organizational-structure");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting org chart:", error);
    return { success: false, error: error.message || "Failed to delete organizational chart." };
  }
}

