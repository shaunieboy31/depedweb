"use server";

import { revalidatePath } from "next/cache";
import { fetchNews, createNews, updateNews, deleteNews, uploadFile } from "@/lib/backend";

export interface NewsData {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string | null;
}

export async function getNewsAction() {
  try {
    const news = await fetchNews();
    return { success: true, data: news };
  } catch (error: any) {
    console.error("Failed to fetch news:", error);
    return { success: false, error: error.message || "Failed to fetch news" };
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
    if (imageFile && imageFile.size > 0 && typeof imageFile !== "string") {
      imagePath = await uploadFile(imageFile);
    }

    const updateId = parseInt(formData.get("id") as string);
    const newsData: NewsData = { title, excerpt, date, category, image: imagePath };

    if (isNaN(updateId)) {
      await createNews(newsData);
    } else {
      await updateNews(updateId, newsData);
    }

    revalidatePath("/");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update news:", error);
    return { success: false, error: error.message || "Database update failed" };
  }
}

export async function deleteNewsAction(id: number) {
  try {
    await deleteNews(id);

    revalidatePath("/");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete news:", error);
    return { success: false, error: error.message || "Failed to delete news" };
  }
}

