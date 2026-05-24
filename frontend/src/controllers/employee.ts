"use server";

import { revalidatePath } from "next/cache";
import { fetchEmployeeHonors, createEmployeeHonor, updateEmployeeHonor, deleteEmployeeHonor, uploadFile } from "@/lib/backend";

export interface HonorData {
  month: string;
  year: string;
  image?: string | null;
}

export async function getEmployeeHonorsAction() {
  try {
    const honors = await fetchEmployeeHonors();
    return { success: true, data: honors };
  } catch (error: any) {
    console.error("Failed to fetch employee honors:", error);
    return { success: false, error: error.message || "Database fetch failed" };
  }
}

export async function updateEmployeeHonorAction(formData: FormData) {
  try {
    const id = formData.get("id") ? parseInt(formData.get("id") as string) : null;
    const month = formData.get("month") as string;
    const year = formData.get("year") as string;
    const imageFile = formData.get("image") as File | null;
    const oldImagePath = formData.get("oldImagePath") as string;

    let imagePath = oldImagePath || null;
    if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
      imagePath = await uploadFile(imageFile);
    }

    const honorData: HonorData = { month, year, image: imagePath };

    if (id) {
      await updateEmployeeHonor(id, honorData);
    } else {
      await createEmployeeHonor(honorData);
    }

    revalidatePath("/");
    revalidatePath("/about-us/employee-of-month");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to update employee honor:", error);
    return { success: false, error: error.message || "Database update failed" };
  }
}

export async function deleteEmployeeHonorAction(id: number) {
  try {
    await deleteEmployeeHonor(id);

    revalidatePath("/");
    revalidatePath("/about-us/employee-of-month");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete employee honor:", error);
    return { success: false, error: error.message || "Deletion failed" };
  }
}

