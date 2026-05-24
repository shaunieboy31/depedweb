"use server";

import { revalidatePath } from "next/cache";
import { fetchLeaders, createLeader, updateLeader, deleteLeader, uploadFile } from "@/lib/backend";

export interface LeaderData {
  name: string;
  position: string;
  startYear: string;
  endYear: string;
  image?: string | null;
}

export async function getLeadersAction() {
  try {
    const leaders = await fetchLeaders();
    return { success: true, data: leaders };
  } catch (error: any) {
    console.error("Failed to fetch leaders:", error);
    return { success: false, error: error.message || "Failed to fetch leaders" };
  }
}

export async function updateLeaderAction(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const position = formData.get("position") as string;
    const startYear = formData.get("startYear") as string;
    const endYear = formData.get("endYear") as string;
    const imageFile = formData.get("image") as File | null;
    const oldImagePath = formData.get("oldImagePath") as string;

    let imagePath = oldImagePath;
    if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
      imagePath = await uploadFile(imageFile);
    }

    const idStr = formData.get("id") as string;
    const updateId = idStr ? parseInt(idStr) : NaN;
    const leaderData: LeaderData = {
      name,
      position,
      startYear,
      endYear,
      image: imagePath,
    };

    if (isNaN(updateId)) {
      await createLeader(leaderData);
    } else {
      await updateLeader(updateId, leaderData);
    }

    revalidatePath("/about-us/learning-leaders");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to update leader:", error);
    return { success: false, error: error.message || "Database update failed" };
  }
}

export async function deleteLeaderAction(id: number) {
  try {
    await deleteLeader(id);

    revalidatePath("/about-us/learning-leaders");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete leader:", error);
    return { success: false, error: error.message || "Failed to delete leader" };
  }
}

