"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

export async function getEmployeeHonorsAction() {
  try {
    const honors = await prisma.employeeHonor.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: honors };
  } catch (error) {
    console.error("Failed to fetch employee honors:", error);
    return { success: false, error: "Database fetch failed" };
  }
}

export async function updateEmployeeHonorAction(formData: FormData) {
  try {
    const id = formData.get("id") ? parseInt(formData.get("id") as string) : null;
    const month = formData.get("month") as string;
    const year = formData.get("year") as string;
    const imageFile = formData.get("image") as File;
    const oldImagePath = formData.get("oldImagePath") as string;

    let imagePath = oldImagePath || null;

    if (imageFile && imageFile.name !== "undefined") {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      try {
        await fs.access(uploadDir);
      } catch {
        await fs.mkdir(uploadDir, { recursive: true });
      }

      const filename = `${Date.now()}-honor-${imageFile.name.replace(/\s+/g, "-")}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, filename), buffer);
      imagePath = `/uploads/${filename}`;
    }

    if (id) {
      await prisma.employeeHonor.update({
        where: { id },
        data: { month, year, image: imagePath },
      });
    } else {
      await prisma.employeeHonor.create({
        data: { month, year, image: imagePath },
      });
    }

    revalidatePath("/");
    revalidatePath("/about-us/employee-of-month");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("Failed to update employee honor:", error);
    return { success: false, error: "Database update failed" };
  }
}

export async function deleteEmployeeHonorAction(id: number) {
  try {
    await prisma.employeeHonor.delete({
      where: { id },
    });
    
    revalidatePath("/");
    revalidatePath("/about-us/employee-of-month");
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete employee honor:", error);
    return { success: false, error: "Deletion failed" };
  }
}
