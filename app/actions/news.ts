"use server";

import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";

export async function getNewsAction() {
  try {
    const news = await prisma.news.findMany({
      orderBy: { id: "asc" }
    });
    return { success: true, data: news };
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return { success: false, error: "Failed to fetch news" };
  }
}

export async function updateNewsAction(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const date = formData.get("date") as string;
    const category = formData.get("category") as string;
    const imageFile = formData.get("image") as File | null;
    const oldImagePath = formData.get("oldImagePath") as string;

    let imagePath = oldImagePath;

    // Handle image upload if a new file is provided
    if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create a unique filename
      const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, "-")}`;
      const path = join(process.cwd(), "public/uploads", filename);
      
      await writeFile(path, buffer);
      imagePath = `/uploads/${filename}`;
    }

    // Upsert the news entry using the provided id (as number)
    const updateId = parseInt(formData.get("id") as string);

    if (isNaN(updateId)) {
      // If no ID is provided, create a new one
      await prisma.news.create({
        data: {
          title,
          excerpt,
          date,
          category,
          image: imagePath,
        },
      });
    } else {
      // If an ID exists, update the specific record
      await prisma.news.update({
        where: { id: updateId },
        data: {
          title,
          excerpt,
          date,
          category,
          image: imagePath,
        },
      });
    }

    revalidatePath("/");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update news:", error);
    return { success: false, error: "Database update failed" };
  }
}

export async function deleteNewsAction(id: number) {
  try {
    await prisma.news.delete({
      where: { id },
    });
    
    revalidatePath("/");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete news:", error);
    return { success: false, error: "Failed to delete news" };
  }
}
