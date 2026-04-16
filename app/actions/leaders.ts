"use server";

import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";

export async function getLeadersAction() {
  try {
    const leaders = await prisma.leader.findMany({
      orderBy: { id: "asc" }
    });
    return { success: true, data: JSON.parse(JSON.stringify(leaders)) };
  } catch (error) {
    console.error("Failed to fetch leaders:", error);
    return { success: false, error: "Failed to fetch leaders" };
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

    // Handle image upload if a new file is provided
    if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create a unique filename
      const filename = `leader-${Date.now()}-${imageFile.name.replace(/\s+/g, "-")}`;
      const path = join(process.cwd(), "public/uploads", filename);
      
      await writeFile(path, buffer);
      imagePath = `/uploads/${filename}`;
    }

    const idStr = formData.get("id") as string;
    const updateId = idStr ? parseInt(idStr) : NaN;

    if (isNaN(updateId)) {
      // Create new record
      await prisma.leader.create({
        data: {
          name,
          position,
          startYear,
          endYear,
          image: imagePath,
        },
      });
    } else {
      // Update existing record
      await prisma.leader.update({
        where: { id: updateId },
        data: {
          name,
          position,
          startYear,
          endYear,
          image: imagePath,
        },
      });
    }

    revalidatePath("/about-us/learning-leaders");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update leader:", error);
    return { success: false, error: "Database update failed" };
  }
}

export async function deleteLeaderAction(id: number) {
  try {
    await prisma.leader.delete({
      where: { id },
    });
    
    revalidatePath("/about-us/learning-leaders");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete leader:", error);
    return { success: false, error: "Failed to delete leader" };
  }
}
