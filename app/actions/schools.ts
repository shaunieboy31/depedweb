"use server";

import prisma from "@/lib/prisma";
import { writeFile, mkdir, unlink } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads", "schools");

async function ensureUploadDir() {
  await mkdir(UPLOAD_DIR, { recursive: true });
}

export async function getSchoolsAction() {
  try {
    const schools = await prisma.school.findMany({
      orderBy: { name: "asc" },
    });
    return { success: true, data: schools };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getSchoolsByCategoryAction(category: string) {
  try {
    const schools = await prisma.school.findMany({
      where: { 
        category: category.toUpperCase() 
      },
      orderBy: { name: "asc" },
    });
    return { success: true, data: schools };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateSchoolAction(formData: FormData) {
  try {
    await ensureUploadDir();
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;
    const category = formData.get("category") as string;
    const cluster = formData.get("cluster") as string;
    const contact = formData.get("contact") as string;
    const type = formData.get("type") as string;

    const logoFile = formData.get("logo") as File | null;
    const bannerFile = formData.get("banner") as File | null;
    const oldLogoPath = formData.get("oldLogoPath") as string;
    const oldBannerPath = formData.get("oldBannerPath") as string;

    let logoUrl = oldLogoPath;
    let bannerUrl = oldBannerPath;

    // Handle Logo Upload
    if (logoFile && logoFile.size > 0) {
      const bytes = await logoFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `logo_${Date.now()}_${logoFile.name.replace(/\s+/g, "_")}`;
      const path = join(UPLOAD_DIR, filename);
      await writeFile(path, buffer);
      logoUrl = `/uploads/schools/${filename}`;

      // Delete old logo
      if (oldLogoPath && oldLogoPath.startsWith("/uploads/schools/")) {
        try { await unlink(join(process.cwd(), "public", oldLogoPath)); } catch (e) {}
      }
    }

    // Handle Banner Upload
    if (bannerFile && bannerFile.size > 0) {
      const bytes = await bannerFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `banner_${Date.now()}_${bannerFile.name.replace(/\s+/g, "_")}`;
      const path = join(UPLOAD_DIR, filename);
      await writeFile(path, buffer);
      bannerUrl = `/uploads/schools/${filename}`;

      // Delete old banner
      if (oldBannerPath && oldBannerPath.startsWith("/uploads/schools/")) {
        try { await unlink(join(process.cwd(), "public", oldBannerPath)); } catch (e) {}
      }
    }

    const data = {
      name,
      location,
      category,
      cluster,
      contact,
      type,
      logo: logoUrl || null,
      banner: bannerUrl || null,
    };

    if (id) {
      await prisma.school.update({
        where: { id: parseInt(id) },
        data,
      });
    } else {
      await prisma.school.create({
        data,
      });
    }

    revalidatePath("/");
    revalidatePath("/schools");
    return { success: true };
  } catch (error: any) {
    console.error("Update School Error:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteSchoolAction(id: number) {
  try {
    const school = await prisma.school.findUnique({ where: { id } });
    if (school) {
      if (school.logo && school.logo.startsWith("/uploads/schools/")) {
        try { await unlink(join(process.cwd(), "public", school.logo)); } catch (e) {}
      }
      if (school.banner && school.banner.startsWith("/uploads/schools/")) {
        try { await unlink(join(process.cwd(), "public", school.banner)); } catch (e) {}
      }
      await prisma.school.delete({ where: { id } });
    }
    revalidatePath("/");
    revalidatePath("/schools");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
