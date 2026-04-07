"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

/**
 * Fetch all Org Charts sorted by sortOrder
 */
export async function getOrgChartsAction() {
  try {
    const charts = await prisma.orgChart.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return { success: true, data: charts };
  } catch (error) {
    console.error("Error fetching org charts:", error);
    return { success: false, error: "Failed to fetch organizational charts." };
  }
}

/**
 * Create or Update an Org Chart
 */
export async function updateOrgChartAction(formData: FormData) {
  try {
    const id = formData.get("id") ? parseInt(formData.get("id") as string) : null;
    const department = formData.get("department") as string;
    const sortOrder = parseInt(formData.get("sortOrder") as string) || 0;
    const imageFile = formData.get("image") as File;
    const oldImagePath = formData.get("oldImagePath") as string;

    let imagePath = oldImagePath || null;

    // Handle Image Upload if a new file is provided
    if (imageFile && imageFile.name !== "undefined" && imageFile.size > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "org");

      // Ensure directory exists
      try {
        await fs.access(uploadDir);
      } catch {
        await fs.mkdir(uploadDir, { recursive: true });
      }

      const filename = `${Date.now()}-org-${imageFile.name.replace(/\s+/g, "-")}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, filename), buffer);

      imagePath = `/uploads/org/${filename}`;

      // Clean up old image if it exists and we're replacing it
      if (oldImagePath && oldImagePath.startsWith("/uploads/org/")) {
        const oldFullPath = path.join(process.cwd(), "public", oldImagePath);
        try {
          await fs.unlink(oldFullPath);
        } catch (e) {
          console.warn("Could not delete old org chart image:", e);
        }
      }
    }

    if (id) {
      await prisma.orgChart.update({
        where: { id },
        data: { department, image: imagePath, sortOrder },
      });
    } else {
      await prisma.orgChart.create({
        data: { department, image: imagePath, sortOrder },
      });
    }

    revalidatePath("/about-us/organizational-structure");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error saving org chart:", error);
    return { success: false, error: "Failed to save organizational chart." };
  }
}

/**
 * Delete an Org Chart
 */
export async function deleteOrgChartAction(id: number) {
  try {
    const chart = await prisma.orgChart.findUnique({ where: { id } });

    if (chart?.image && chart.image.startsWith("/uploads/org/")) {
      const fullPath = path.join(process.cwd(), "public", chart.image);
      try {
        await fs.unlink(fullPath);
      } catch (e) {
        console.warn("Could not delete org chart image file:", e);
      }
    }

    await prisma.orgChart.delete({ where: { id } });

    revalidatePath("/about-us/organizational-structure");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error deleting org chart:", error);
    return { success: false, error: "Failed to delete organizational chart." };
  }
}
