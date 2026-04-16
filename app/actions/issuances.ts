"use server";

import prisma from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";

export async function getIssuancesAction(category?: string, type?: string) {
  try {
    const where: any = {};
    if (category) where.category = category;
    if (type) where.type = type;

    const issuances = await prisma.issuance.findMany({
      where,
      orderBy: [
        { year: "desc" },
        { number: "desc" },
        { createdAt: "desc" }
      ]
    });
    return { success: true, data: issuances };
  } catch (error) {
    console.error("Failed to fetch issuances:", error);
    return { success: false, error: "Failed to fetch issuances" };
  }
}

export async function updateIssuanceAction(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const number = formData.get("number") as string;
    const type = formData.get("type") as string;
    const category = formData.get("category") as string;
    const date = formData.get("date") as string;
    const year = formData.get("year") as string;
    const docFile = formData.get("file") as File | null;
    const oldFileUrl = formData.get("oldFileUrl") as string;

    let fileUrl = oldFileUrl;

    // Ensure upload directory exists
    const uploadDir = join(process.cwd(), "public/uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Ignored if exists
    }

    // Handle document upload if a new file is provided
    if (docFile && docFile.size > 0 && typeof docFile !== "string") {
      const bytes = await docFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create a unique filename
      const filename = `${Date.now()}-${docFile.name.replace(/\s+/g, "-")}`;
      const path = join(uploadDir, filename);
      
      await writeFile(path, buffer);
      fileUrl = `/uploads/${filename}`;
    }

    const idStr = formData.get("id") as string;
    const updateId = idStr ? parseInt(idStr) : NaN;

    if (isNaN(updateId)) {
      // Create new issuance
      await prisma.issuance.create({
        data: {
          title,
          number,
          type,
          category,
          date,
          year,
          fileUrl,
        },
      });
    } else {
      // Update existing record
      await prisma.issuance.update({
        where: { id: updateId },
        data: {
          title,
          number,
          type,
          category,
          date,
          year,
          fileUrl,
        },
      });
    }

    revalidatePath("/issuances");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update issuance:", error);
    return { success: false, error: error.message || "Database update failed" };
  }
}

export async function deleteIssuanceAction(id: number) {
  try {
    await prisma.issuance.delete({
      where: { id },
    });
    
    revalidatePath("/issuances");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete issuance:", error);
    return { success: false, error: "Failed to delete issuance" };
  }
}
