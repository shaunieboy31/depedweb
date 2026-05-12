"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTransparencyItemsAction() {
  try {
    const items = await prisma.transparencySeal.findMany({
      orderBy: [
        { category: 'asc' },
        { order: 'asc' }
      ]
    });
    return { success: true, data: items };
  } catch (error) {
    console.error("Error fetching transparency items:", error);
    return { success: false, error: "Failed to fetch items" };
  }
}

export async function updateTransparencyItemAction(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const url = formData.get("url") as string;
    const isExternal = formData.get("isExternal") === "true";
    const year = formData.get("year") as string || null;
    const order = parseInt(formData.get("order") as string || "0");

    if (id && id !== "new") {
      await prisma.transparencySeal.update({
        where: { id: parseInt(id) },
        data: { category, title, url, isExternal, year, order }
      });
    } else {
      await prisma.transparencySeal.create({
        data: { category, title, url, isExternal, year, order }
      });
    }

    revalidatePath("/transparency-seal");
    return { success: true };
  } catch (error) {
    console.error("Error saving transparency item:", error);
    return { success: false, error: "Failed to save item" };
  }
}

export async function deleteTransparencyItemAction(id: number) {
  try {
    await prisma.transparencySeal.delete({
      where: { id }
    });
    revalidatePath("/transparency-seal");
    return { success: true };
  } catch (error) {
    console.error("Error deleting transparency item:", error);
    return { success: false, error: "Failed to delete item" };
  }
}
