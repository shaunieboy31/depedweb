"use server";

import { revalidatePath } from "next/cache";
import { fetchTransparencyItems, createTransparencyItem, updateTransparencyItem, deleteTransparencyItem } from "@/lib/backend";

export async function getTransparencyItemsAction() {
  try {
    const items = await fetchTransparencyItems();
    return { success: true, data: items };
  } catch (error: any) {
    console.error("Error fetching transparency items:", error);
    return { success: false, error: "Failed to fetch items" };
  }
}

export async function updateTransparencyItemAction(formData: FormData) {
  try {
    const rawData = {
      id: formData.get("id") as string,
      category: formData.get("category") as string,
      title: formData.get("title") as string,
      url: formData.get("url") as string,
      isExternal: formData.get("isExternal") === "true",
      year: (formData.get("year") as string) || null,
      order: parseInt(formData.get("order") as string || "0"),
    };

    if (rawData.id && rawData.id !== "new") {
      await updateTransparencyItem(parseInt(rawData.id), rawData);
    } else {
      await createTransparencyItem(rawData);
    }

    revalidatePath("/transparency-seal");
    return { success: true };
  } catch (error: any) {
    if (error instanceof Error && error.name === "ZodError") {
      return { success: false, error: "Validation failed: " + error.message };
    }
    console.error("Error saving transparency item:", error);
    return { success: false, error: "Failed to save item" };
  }
}

export async function deleteTransparencyItemAction(id: number) {
  try {
    await deleteTransparencyItem(id);
    revalidatePath("/transparency-seal");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting transparency item:", error);
    return { success: false, error: "Failed to delete item" };
  }
}

